#!/bin/bash
# DRM Mega Skill — Page Validator v3 (garde-fou 2)
# Usage: bash validate-page.sh <url> <page_type> [--telephone "..."] [--ville "..."]
#
# page_type: homepage | service | zone | contact | tarifs | static
#
# Returns: PASS or FAIL with detailed reasons
# FAIL = do NOT proceed to the next page

set -uo pipefail

URL=$1
PAGE_TYPE=${2:-"service"}
shift 2 || true

TELEPHONE=""
VILLE=""
while [[ $# -gt 0 ]]; do
  case $1 in
    --telephone) TELEPHONE="$2"; shift 2 ;;
    --ville) VILLE="$2"; shift 2 ;;
    *) shift ;;
  esac
done

RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[0;33m'
NC='\033[0m'

FAILS=0
WARNINGS=0

fail() { echo -e "${RED}FAIL${NC}: $1"; FAILS=$((FAILS + 1)); }
warn() { echo -e "${YELLOW}WARN${NC}: $1"; WARNINGS=$((WARNINGS + 1)); }
pass() { echo -e "${GREEN}PASS${NC}: $1"; }

gcount() { grep -ci "$1" 2>/dev/null || echo "0"; }
gocount() { grep -oi "$1" 2>/dev/null | wc -l | tr -d ' '; }

echo "============================================"
echo "DRM Page Validator v3 — $PAGE_TYPE"
echo "URL: $URL"
echo "============================================"
echo ""

# Fetch
HTTP_CODE=$(curl -s -o /tmp/drm-validate-page.html -w "%{http_code}" "$URL")
if [ "$HTTP_CODE" != "200" ]; then
  fail "HTTP status $HTTP_CODE (expected 200)"
  echo -e "\n${RED}RESULT: FAIL${NC} ($FAILS fails)"
  exit 1
fi

HTML=$(cat /tmp/drm-validate-page.html)

# ========================================
# CHECK 1: Word count
# ========================================
WORD_COUNT=$(echo "$HTML" | python3 -c "
import sys, re
html = sys.stdin.read()
text = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
text = re.sub(r'<style[^>]*>.*?</style>', '', text, flags=re.DOTALL)
text = re.sub(r'<[^>]+>', ' ', text)
text = re.sub(r'\s+', ' ', text).strip()
print(len([w for w in text.split() if len(w) > 1]))
" 2>/dev/null || echo "0")

case $PAGE_TYPE in
  homepage) MIN_WORDS=1000 ;; service) MIN_WORDS=700 ;; zone) MIN_WORDS=500 ;;
  contact) MIN_WORDS=200 ;; tarifs) MIN_WORDS=200 ;; *) MIN_WORDS=100 ;;
esac

if [ "$WORD_COUNT" -lt "$MIN_WORDS" ]; then
  fail "Word count: $WORD_COUNT (min $MIN_WORDS for $PAGE_TYPE)"
else
  pass "Word count: $WORD_COUNT (min $MIN_WORDS)"
fi

# ========================================
# CHECK 2: Image count + alt text
# ========================================
IMG_COUNT=$(echo "$HTML" | gocount '<img ')
IMG_SEO=$(echo "$HTML" | python3 << 'PYEOF'
import sys, re
html = sys.stdin.read()
imgs = re.findall(r'<img [^>]*?/?>', html, re.IGNORECASE)
total = len(imgs)
no_alt = 0
empty_alt = 0
no_title = 0
for img in imgs:
    low = img.lower()
    if 'alt=' not in low:
        no_alt += 1
    elif 'alt=""' in low or "alt=''" in low:
        empty_alt += 1
    if 'title=' not in low:
        no_title += 1
print(f'{total}|{no_alt}|{empty_alt}|{no_title}')
PYEOF
)
IMG_SEO=${IMG_SEO:-"0|0|0|0"}

IMG_NO_ALT=$(echo "$IMG_SEO" | cut -d'|' -f2)
IMG_EMPTY_ALT=$(echo "$IMG_SEO" | cut -d'|' -f3)
IMG_NO_TITLE=$(echo "$IMG_SEO" | cut -d'|' -f4)

case $PAGE_TYPE in
  homepage) MIN_IMGS=5 ;; service) MIN_IMGS=3 ;; zone) MIN_IMGS=2 ;;
  *) MIN_IMGS=0 ;;
esac

if [ "$IMG_COUNT" -lt "$MIN_IMGS" ]; then
  fail "Images: $IMG_COUNT <img> tags (min $MIN_IMGS for $PAGE_TYPE)"
else
  pass "Images: $IMG_COUNT (min $MIN_IMGS)"
fi

if [ "$IMG_NO_ALT" -gt 0 ]; then
  fail "Images WITHOUT alt attribute: $IMG_NO_ALT (every img MUST have alt for SEO)"
elif [ "$IMG_EMPTY_ALT" -gt 0 ]; then
  fail "Images with EMPTY alt=\"\": $IMG_EMPTY_ALT (alt must contain keyword + ville)"
else
  pass "All images have alt text"
fi

if [ "$IMG_NO_TITLE" -gt 0 ] && [ "$IMG_COUNT" -gt 0 ]; then
  fail "Images WITHOUT title attribute: $IMG_NO_TITLE (every img MUST have title for SEO)"
else
  if [ "$IMG_COUNT" -gt 0 ]; then
    pass "All images have title text"
  fi
fi

# ========================================
# CHECK 3: Section count
# ========================================
SECTION_COUNT=$(echo "$HTML" | gocount '<section')

case $PAGE_TYPE in
  homepage) MIN_SECTIONS=12 ;; service) MIN_SECTIONS=7 ;; zone) MIN_SECTIONS=5 ;;
  *) MIN_SECTIONS=2 ;;
esac

if [ "$SECTION_COUNT" -lt "$MIN_SECTIONS" ]; then
  fail "Sections: $SECTION_COUNT (min $MIN_SECTIONS for $PAGE_TYPE)"
else
  pass "Sections: $SECTION_COUNT (min $MIN_SECTIONS)"
fi

# ========================================
# CHECK 4: H2 count
# ========================================
H2_COUNT=$(echo "$HTML" | gocount '<h2')

case $PAGE_TYPE in
  homepage) MIN_H2=8 ;; service) MIN_H2=4 ;; zone) MIN_H2=3 ;; *) MIN_H2=1 ;;
esac

if [ "$H2_COUNT" -lt "$MIN_H2" ]; then
  fail "H2 headings: $H2_COUNT (min $MIN_H2 for $PAGE_TYPE)"
else
  pass "H2 headings: $H2_COUNT (min $MIN_H2)"
fi

# ========================================
# CHECK 5: Placeholder grey boxes (FAIL not warn)
# ========================================
GREY_COUNT=$(echo "$HTML" | python3 -c "
import sys, re
html = sys.stdin.read()
# Find divs with height >= 200 and no img child, with background-color patterns
patterns = [
    r'rgba\(255,255,255,0\.08\)',
    r'rgba\(28,37,65,0\.06\)',
    r'#D1D5DB',
    r'rgb\(209,\s*213,\s*219\)',
]
count = 0
for p in patterns:
    count += len(re.findall(p, html))
print(count)
" 2>/dev/null || echo "0")

if [ "$GREY_COUNT" -gt 5 ]; then
  fail "Placeholder grey boxes: $GREY_COUNT patterns detected (max 5 — likely visible placeholders)"
elif [ "$GREY_COUNT" -gt 2 ]; then
  warn "Possible placeholder divs: $GREY_COUNT (visual check needed)"
else
  pass "Placeholder check: $GREY_COUNT patterns"
fi

# ========================================
# CHECK 6: Template variables
# ========================================
TEMPLATE_VARS=$(echo "$HTML" | python3 -c "
import sys, re
html = sys.stdin.read()
# Match {word} but NOT inside JSON/JS (script tags already common)
text = re.sub(r'<script[^>]*>.*?</script>', '', html, flags=re.DOTALL)
vars_found = re.findall(r'\{(zone|phone|name|city|email|postalCode|domain|address|department|experience|delai|rating|interventions)\}', text)
print(len(vars_found))
" 2>/dev/null || echo "0")

if [ "$TEMPLATE_VARS" -gt 0 ]; then
  fail "Template variables found: $TEMPLATE_VARS (must be 0)"
else
  pass "Template variables: 0"
fi

# ========================================
# CHECK 7: Phone presence
# ========================================
if [ -n "$TELEPHONE" ]; then
  PHONE_COUNT=$(echo "$HTML" | gocount "$TELEPHONE")
  if [ "$PHONE_COUNT" -lt 3 ]; then
    fail "Phone '$TELEPHONE' appears $PHONE_COUNT times (min 3)"
  else
    pass "Phone present: $PHONE_COUNT times"
  fi
fi

# ========================================
# CHECK 8: FAQ "Qui appeler" (service pages)
# ========================================
if [ "$PAGE_TYPE" = "service" ]; then
  QUI_APPELER=$(echo "$HTML" | gcount "qui appeler\|qui contacter")
  if [ "$QUI_APPELER" -lt 1 ]; then
    fail "FAQ missing 'Qui appeler pour...' question (required for service pages)"
  else
    pass "FAQ 'Qui appeler' present"
  fi
fi

# ========================================
# CHECK 9: Internal links / maillage
# ========================================
if [ "$PAGE_TYPE" = "service" ]; then
  MAILLAGE=$(echo "$HTML" | gocount 'rideau-metallique-')
  if [ "$MAILLAGE" -lt 10 ]; then
    fail "Maillage: only $MAILLAGE internal links (min 10 for service page — must link to 6 other services + zones)"
  else
    pass "Maillage: $MAILLAGE internal links"
  fi
fi

# ========================================
# CHECK 10: Responsive / mobile
# ========================================
HAS_MEDIA=$(echo "$HTML" | grep -ci '@media' || true)
HAS_MEDIA=${HAS_MEDIA:-0}
FIXED_GRIDS=$(echo "$HTML" | grep -oi 'repeat(3\|repeat(4' | wc -l | tr -d ' ')
FIXED_GRIDS=${FIXED_GRIDS:-0}

HAS_VIEWPORT=$(echo "$HTML" | gcount 'viewport')
if [ "$HAS_VIEWPORT" -lt 1 ]; then
  fail "Missing <meta name='viewport'> — mobile rendering broken"
else
  pass "Viewport meta present"
fi

HAS_RESPONSIVE=$(echo "$HTML" | grep -ci 'flex-wrap\|flexWrap\|@media\|max-width.*768\|max-width.*640' || true)
HAS_RESPONSIVE=${HAS_RESPONSIVE:-0}
if [ "$PAGE_TYPE" = "homepage" ] || [ "$PAGE_TYPE" = "service" ]; then
  if [ "$HAS_RESPONSIVE" -lt 1 ]; then
    fail "No responsive patterns found (no flex-wrap, no @media) — site NOT mobile-friendly"
  else
    pass "Responsive patterns detected ($HAS_RESPONSIVE)"
  fi
  if [ "$FIXED_GRIDS" -gt 0 ] && [ "$HAS_MEDIA" -lt 1 ]; then
    fail "Fixed grids ($FIXED_GRIDS) without @media queries — WILL break on mobile"
  fi
fi

# ========================================
# CHECK 11: Schema.org (homepage)
# ========================================
if [ "$PAGE_TYPE" = "homepage" ]; then
  SCHEMA=$(echo "$HTML" | gcount 'LocalBusiness')
  if [ "$SCHEMA" -lt 1 ]; then
    fail "Schema.org LocalBusiness not found in homepage"
  else
    pass "Schema.org LocalBusiness present"
  fi
fi

# ========================================
# CHECK 12: H2 semantic variants (service)
# ========================================
if [ "$PAGE_TYPE" = "service" ]; then
  VARIANTS=$(echo "$HTML" | gcount 'fermeture metallique\|rideau de fer\|grille metallique\|store metallique\|rideau enroulable')
  if [ "$VARIANTS" -lt 1 ]; then
    fail "No semantic variants in content (need: fermeture metallique, grille, rideau de fer, etc.)"
  else
    pass "Semantic variants present ($VARIANTS)"
  fi
fi

# ========================================
# CHECK 13: Ville name present
# ========================================
if [ -n "$VILLE" ]; then
  VILLE_COUNT=$(echo "$HTML" | gcount "$VILLE")
  if [ "$VILLE_COUNT" -lt 3 ]; then
    fail "Ville '$VILLE' appears $VILLE_COUNT times (min 3)"
  else
    pass "Ville present: $VILLE_COUNT times"
  fi
fi

# ========================================
# CHECK 14: Title tag present and correct
# ========================================
TITLE=$(echo "$HTML" | python3 -c "
import sys, re
html = sys.stdin.read()
m = re.search(r'<title[^>]*>(.*?)</title>', html, re.DOTALL)
print(m.group(1).strip() if m else '')
" 2>/dev/null || echo "")

if [ -z "$TITLE" ]; then
  fail "No <title> tag found"
else
  TITLE_LEN=${#TITLE}
  if [ "$TITLE_LEN" -lt 30 ]; then
    warn "Title too short: '$TITLE' ($TITLE_LEN chars, recommend 45-65)"
  elif [ "$TITLE_LEN" -gt 70 ]; then
    warn "Title too long: $TITLE_LEN chars (recommend 45-65)"
  else
    pass "Title: '$TITLE' ($TITLE_LEN chars)"
  fi
fi

# ========================================
# CHECK 15: Meta description
# ========================================
META_DESC=$(echo "$HTML" | python3 -c "
import sys, re
html = sys.stdin.read()
m = re.search(r'<meta\s+name=[\"']description[\"']\s+content=[\"'](.*?)[\"']', html, re.DOTALL)
print(m.group(1).strip() if m else '')
" 2>/dev/null || echo "")

if [ -z "$META_DESC" ]; then
  warn "No meta description found"
else
  DESC_LEN=${#META_DESC}
  if [ "$DESC_LEN" -lt 80 ]; then
    warn "Meta description too short: $DESC_LEN chars (recommend 120-155)"
  else
    pass "Meta description: $DESC_LEN chars"
  fi
fi

# ========================================
# CHECK 16: Exactly 1 H1 per page
# ========================================
H1_COUNT=$(echo "$HTML" | gocount '<h1')
if [ "$H1_COUNT" -eq 0 ]; then
  fail "No H1 tag found (must have exactly 1)"
elif [ "$H1_COUNT" -gt 1 ]; then
  fail "Multiple H1 tags: $H1_COUNT (must have exactly 1)"
else
  pass "H1 count: 1"
fi

# ========================================
# CHECK 17: Canonical URL
# ========================================
HAS_CANONICAL=$(echo "$HTML" | gcount 'rel="canonical"\|rel=.canonical.')
if [ "$HAS_CANONICAL" -lt 1 ]; then
  fail "No <link rel='canonical'> found (critical for SEO)"
else
  pass "Canonical URL present"
fi

# ========================================
# CHECK 18: Phone as tel: link (clickable)
# ========================================
if [ -n "$TELEPHONE" ]; then
  TEL_LINK=$(echo "$HTML" | gcount 'href="tel:')
  if [ "$TEL_LINK" -lt 2 ]; then
    fail "Phone tel: links: $TEL_LINK (min 2 — phone must be clickable, not just text)"
  else
    pass "Phone tel: links: $TEL_LINK"
  fi
fi

# === RESULT ===
echo ""
echo "============================================"
echo "Summary: $WORD_COUNT words | $IMG_COUNT imgs | $SECTION_COUNT sections | $H2_COUNT H2s"
echo "============================================"
if [ "$FAILS" -gt 0 ]; then
  echo -e "${RED}RESULT: FAIL${NC} ($FAILS fails, $WARNINGS warnings)"
  echo "FIX all fails before proceeding."
  exit 1
else
  if [ "$WARNINGS" -gt 0 ]; then
    echo -e "${YELLOW}RESULT: PASS with warnings${NC} ($WARNINGS warnings)"
  else
    echo -e "${GREEN}RESULT: PASS${NC}"
  fi
  echo "OK to proceed."
  exit 0
fi
