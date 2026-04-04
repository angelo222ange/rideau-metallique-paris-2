#!/usr/bin/env python3
"""
DRM Duplicate Content Detector — adapte de Agentic-SEO-Skill/duplicate_content.py

Compare les pages generees dans out/ entre elles.
FAIL si Jaccard similarity > seuil entre 2 pages du meme type.

Usage:
    python3 scripts/check-duplicate.py out/ --threshold 0.40
    python3 scripts/check-duplicate.py out/ --threshold 0.40 --json
    python3 scripts/check-duplicate.py out/ --sample 20  # check 20 random zone pages
"""

import argparse
import hashlib
import json
import os
import re
import sys
from collections import defaultdict
from pathlib import Path

# Seuils
DEFAULT_THRESHOLD = 0.40  # 40% = WARNING Agentic SEO
HARD_STOP_THRESHOLD = 0.30  # 30% = HARD STOP


def extract_text_from_html(html: str) -> str:
    """Extrait le texte visible du body, sans nav/footer/header/script."""
    # Remove script/style/nav/footer/header tags and content
    html = re.sub(r'<(script|style|nav|footer|header|aside)[^>]*>.*?</\1>', '', html, flags=re.S | re.I)
    # Remove all HTML tags
    text = re.sub(r'<[^>]+>', ' ', html)
    # Normalize whitespace
    text = re.sub(r'\s+', ' ', text).strip()
    return text


def shingle(text: str, k: int = 5) -> set:
    """Create k-word shingles from text."""
    words = re.findall(r'\b[a-z]+\b', text.lower())
    if len(words) < k:
        return {' '.join(words)}
    return {' '.join(words[i:i+k]) for i in range(len(words) - k + 1)}


def minhash_signature(shingles: set, num_hashes: int = 100) -> list:
    """Compute MinHash signature."""
    if not shingles:
        return []
    sig = []
    for i in range(num_hashes):
        min_hash = float('inf')
        for s in shingles:
            h = int(hashlib.md5(f'{i}:{s}'.encode()).hexdigest(), 16)
            if h < min_hash:
                min_hash = h
        sig.append(min_hash)
    return sig


def jaccard_from_minhash(sig1: list, sig2: list) -> float:
    """Estimate Jaccard similarity from two MinHash signatures."""
    if not sig1 or not sig2:
        return 0.0
    matches = sum(1 for a, b in zip(sig1, sig2) if a == b)
    return matches / len(sig1)


def categorize_page(path: str) -> str:
    """Categorize a page path into type for comparison."""
    if path == 'index.html' or path == '/':
        return 'homepage'
    if 'contact' in path or 'tarifs' in path or 'zones' in path or 'blog' in path:
        return 'static'
    if 'mentions' in path or 'confidentialite' in path or 'plan-du-site' in path:
        return 'legal'
    # Service x zone pages — compare within same service
    for svc in ['depannage', 'installation', 'reparation', 'motorisation', 'deblocage', 'entretien', 'fabrication']:
        if f'{svc}-rideau-metallique' in path:
            return f'service_{svc}'
    return 'other'


def find_html_pages(out_dir: str) -> dict:
    """Find all index.html pages in out/ directory."""
    pages = {}
    for root, dirs, files in os.walk(out_dir):
        for f in files:
            if f == 'index.html':
                full_path = os.path.join(root, f)
                rel_path = os.path.relpath(full_path, out_dir)
                with open(full_path, 'r', encoding='utf-8', errors='ignore') as fh:
                    html = fh.read()
                text = extract_text_from_html(html)
                word_count = len(re.findall(r'\b\w+\b', text))
                pages[rel_path] = {
                    'text': text,
                    'word_count': word_count,
                    'category': categorize_page(rel_path),
                }
    return pages


def check_duplicates(pages: dict, threshold: float = DEFAULT_THRESHOLD, sample: int = 0) -> dict:
    """Check for duplicate content within same page category."""
    # Group pages by category
    categories = defaultdict(list)
    for path, data in pages.items():
        categories[data['category']].append((path, data))

    near_dupes = []
    exact_dupes = []

    for cat, page_list in categories.items():
        if cat in ('homepage', 'static', 'legal', 'other'):
            continue  # Skip non-programmatic pages

        # Sample if requested
        if sample > 0 and len(page_list) > sample:
            import random
            page_list = random.sample(page_list, sample)

        # Compute signatures
        sigs = {}
        hashes = defaultdict(list)
        for path, data in page_list:
            text = data['text']
            if not text.strip():
                continue
            # Exact hash
            norm = re.sub(r'\s+', ' ', text.lower().strip())
            h = hashlib.sha256(norm.encode()).hexdigest()
            hashes[h].append(path)
            # MinHash
            s = shingle(text)
            if s:
                sigs[path] = minhash_signature(s)

        # Exact duplicates
        for h, paths in hashes.items():
            if len(paths) > 1:
                exact_dupes.append({
                    'category': cat,
                    'paths': paths,
                    'severity': 'CRITICAL',
                })

        # Near duplicates (pairwise comparison)
        paths_list = list(sigs.keys())
        for i in range(len(paths_list)):
            for j in range(i + 1, len(paths_list)):
                sim = jaccard_from_minhash(sigs[paths_list[i]], sigs[paths_list[j]])
                if sim >= threshold:
                    # Skip if already in exact dupes
                    if any(paths_list[i] in ed['paths'] and paths_list[j] in ed['paths'] for ed in exact_dupes):
                        continue
                    near_dupes.append({
                        'category': cat,
                        'path_a': paths_list[i],
                        'path_b': paths_list[j],
                        'similarity': round(sim, 3),
                        'word_count_a': pages[paths_list[i]]['word_count'],
                        'word_count_b': pages[paths_list[j]]['word_count'],
                        'severity': 'CRITICAL' if sim >= (1 - HARD_STOP_THRESHOLD) else 'WARNING',
                    })

    return {
        'pages_analyzed': len(pages),
        'categories': {cat: len(pl) for cat, pl in categories.items()},
        'exact_duplicates': exact_dupes,
        'near_duplicates': sorted(near_dupes, key=lambda x: -x['similarity']),
        'summary': {
            'exact_groups': len(exact_dupes),
            'near_pairs': len(near_dupes),
            'worst_similarity': max([nd['similarity'] for nd in near_dupes], default=0),
        }
    }


def main():
    parser = argparse.ArgumentParser(description='DRM Duplicate Content Detector')
    parser.add_argument('out_dir', help='Path to Next.js out/ directory')
    parser.add_argument('--threshold', type=float, default=DEFAULT_THRESHOLD,
                        help=f'Jaccard similarity threshold (default: {DEFAULT_THRESHOLD})')
    parser.add_argument('--sample', type=int, default=0,
                        help='Sample N random pages per category (0 = all)')
    parser.add_argument('--json', action='store_true', help='Output as JSON')
    args = parser.parse_args()

    if not os.path.isdir(args.out_dir):
        print(f'Error: {args.out_dir} is not a directory', file=sys.stderr)
        sys.exit(1)

    print(f'Scanning {args.out_dir}...', file=sys.stderr)
    pages = find_html_pages(args.out_dir)
    print(f'Found {len(pages)} pages. Checking duplicates (threshold={args.threshold})...', file=sys.stderr)

    report = check_duplicates(pages, threshold=args.threshold, sample=args.sample)

    if args.json:
        print(json.dumps(report, indent=2))
        return

    print(f'\n{"="*60}')
    print(f'DRM Duplicate Content Report')
    print(f'{"="*60}')
    print(f'Pages analyzed: {report["pages_analyzed"]}')
    print(f'Categories: {json.dumps(report["categories"])}')

    if report['exact_duplicates']:
        print(f'\nEXACT DUPLICATES ({report["summary"]["exact_groups"]} groups):')
        for group in report['exact_duplicates']:
            print(f'  CRITICAL [{group["category"]}] — {len(group["paths"])} identical pages:')
            for p in group['paths'][:5]:
                print(f'    - {p}')

    if report['near_duplicates']:
        print(f'\nNEAR DUPLICATES ({report["summary"]["near_pairs"]} pairs, worst={report["summary"]["worst_similarity"]:.0%}):')
        for pair in report['near_duplicates'][:10]:
            icon = 'CRITICAL' if pair['severity'] == 'CRITICAL' else 'WARNING'
            print(f'  {icon} [{pair["category"]}] {pair["similarity"]:.0%} similar:')
            print(f'    A: {pair["path_a"]} ({pair["word_count_a"]} words)')
            print(f'    B: {pair["path_b"]} ({pair["word_count_b"]} words)')

    if not report['exact_duplicates'] and not report['near_duplicates']:
        print(f'\nPASS — No duplicate content detected.')
        sys.exit(0)
    else:
        total_issues = report['summary']['exact_groups'] + report['summary']['near_pairs']
        print(f'\nFAIL — {total_issues} duplicate issues found.')
        print('Fix: Each zone page needs unique local content (streets, landmarks, neighborhoods).')
        sys.exit(1)


if __name__ == '__main__':
    main()
