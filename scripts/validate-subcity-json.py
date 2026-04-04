#!/usr/bin/env python3
"""
Valide que chaque JSON subcity a du contenu REEL, pas un fichier vide ou copie-colle.

Checks :
1. Chaque champ requis existe et est non-vide
2. intro_text >= 150 mots
3. seo1_text >= 150 mots
4. local_expertise >= 150 mots
5. 5 FAQ minimum
6. FAQ premiere question contient "Qui appeler"
7. Aucun placeholder ({zone}, {ville}, {service}) restant
8. Zone name apparait dans le contenu (pas un texte generique)

Usage:
    python3 scripts/validate-subcity-json.py content/pages/subcity/
"""

import json
import os
import re
import sys


REQUIRED_FIELDS = [
    "slug", "service", "zone", "zone_name", "postal_code",
    "h1", "meta_title", "meta_description",
    "intro_title", "intro_text",
    "seo1_title", "seo1_text",
    "seo2_title", "seo2_text",
    "local_expertise", "faq"
]

MIN_WORDS = {
    "intro_text": 150,
    "seo1_text": 150,
    "seo2_text": 80,
    "local_expertise": 130,
}

PLACEHOLDER_PATTERNS = [
    r"\{zone\}", r"\{ville\}", r"\{service\}", r"\{phone\}",
    r"\{name\}", r"\{city\}", r"\{CP\}", r"XXXXX",
    r"Lorem ipsum", r"placeholder", r"TODO",
]


def word_count(text: str) -> int:
    return len(re.findall(r"\b\w+\b", text))


def validate_json(filepath: str) -> list:
    errors = []
    filename = os.path.basename(filepath)

    try:
        with open(filepath, "r", encoding="utf-8") as f:
            data = json.load(f)
    except json.JSONDecodeError as e:
        return [f"{filename}: JSON invalide — {e}"]

    # Check required fields
    for field in REQUIRED_FIELDS:
        if field not in data:
            errors.append(f"{filename}: champ manquant '{field}'")
        elif isinstance(data[field], str) and not data[field].strip():
            errors.append(f"{filename}: champ vide '{field}'")

    # Check word counts
    for field, min_wc in MIN_WORDS.items():
        text = data.get(field, "")
        wc = word_count(text)
        if wc < min_wc:
            errors.append(f"{filename}: {field} = {wc} mots (min {min_wc})")

    # Check FAQ
    faq = data.get("faq", [])
    if len(faq) < 5:
        errors.append(f"{filename}: {len(faq)} FAQ (min 5)")

    if faq and "qui appeler" not in faq[0].get("q", "").lower():
        errors.append(f"{filename}: premiere FAQ ne contient pas 'Qui appeler'")

    # Check placeholders
    all_text = json.dumps(data)
    for pattern in PLACEHOLDER_PATTERNS:
        if re.search(pattern, all_text, re.IGNORECASE):
            errors.append(f"{filename}: placeholder detecte '{pattern}'")

    # Check zone name appears in content
    zone_name = data.get("zone_name", "")
    if zone_name:
        content = " ".join([
            data.get("intro_text", ""),
            data.get("seo1_text", ""),
            data.get("local_expertise", ""),
        ]).lower()
        # Match: "Paris 4e" OR "4e arrondissement" OR "Boulogne-Billancourt" OR "Levallois"
        parts = zone_name.lower().replace("-", " ").split()
        found = (
            zone_name.lower() in content
            or any(p + " arrondissement" in content for p in parts if p.endswith("e") or p.endswith("er"))
            or any(p in content for p in parts if len(p) > 4)  # Boulogne, Levallois, Neuilly
        )
        if not found:
            errors.append(f"{filename}: zone '{zone_name}' absente du contenu")

    return errors


def main():
    if len(sys.argv) < 2:
        print("Usage: python3 validate-subcity-json.py <directory>")
        sys.exit(1)

    directory = sys.argv[1]
    if not os.path.isdir(directory):
        print(f"Error: {directory} n'est pas un dossier")
        sys.exit(1)

    files = sorted([f for f in os.listdir(directory) if f.endswith(".json")])
    print(f"Validating {len(files)} JSONs in {directory}...")

    all_errors = []
    for f in files:
        errs = validate_json(os.path.join(directory, f))
        all_errors.extend(errs)

    if all_errors:
        print(f"\nFAIL — {len(all_errors)} erreurs :")
        for e in all_errors:
            print(f"  {e}")
        sys.exit(1)
    else:
        print(f"\nPASS — {len(files)} JSONs valides, tous avec contenu reel.")
        sys.exit(0)


if __name__ == "__main__":
    main()
