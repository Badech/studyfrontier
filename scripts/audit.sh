#!/bin/bash
# Full Audit Script for StudyFrontier
# Runs all quality checks: typecheck, lint, crawl tests, and a11y tests

set -e  # Exit on error

echo "🔍 Starting Full Audit..."
echo ""

# Colors for output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Track results
TYPECHECK_PASS=0
LINT_PASS=0
CRAWL_PASS=0
A11Y_PASS=0

# 1. TypeScript Check
echo "📘 Running TypeScript type check..."
if npm run typecheck; then
    echo -e "${GREEN}✓ TypeScript check passed${NC}"
    TYPECHECK_PASS=1
else
    echo -e "${RED}✗ TypeScript check failed${NC}"
fi
echo ""

# 2. ESLint Check
echo "🔧 Running ESLint..."
if npm run lint; then
    echo -e "${GREEN}✓ Lint check passed${NC}"
    LINT_PASS=1
else
    echo -e "${RED}✗ Lint check failed${NC}"
fi
echo ""

# 3. Link Crawler Tests
echo "🕷️  Running link crawler tests..."
if npm run test:crawl; then
    echo -e "${GREEN}✓ Crawl tests passed${NC}"
    CRAWL_PASS=1
else
    echo -e "${RED}✗ Crawl tests failed${NC}"
fi
echo ""

# 4. Accessibility Tests
echo "♿ Running accessibility tests..."
if npm run test:a11y; then
    echo -e "${GREEN}✓ Accessibility tests passed${NC}"
    A11Y_PASS=1
else
    echo -e "${RED}✗ Accessibility tests failed${NC}"
fi
echo ""

# Summary
echo "═══════════════════════════════════"
echo "📊 Audit Summary"
echo "═══════════════════════════════════"
echo -e "TypeScript: $([ $TYPECHECK_PASS -eq 1 ] && echo -e "${GREEN}PASS${NC}" || echo -e "${RED}FAIL${NC}")"
echo -e "ESLint:     $([ $LINT_PASS -eq 1 ] && echo -e "${GREEN}PASS${NC}" || echo -e "${RED}FAIL${NC}")"
echo -e "Crawl:      $([ $CRAWL_PASS -eq 1 ] && echo -e "${GREEN}PASS${NC}" || echo -e "${RED}FAIL${NC}")"
echo -e "A11y:       $([ $A11Y_PASS -eq 1 ] && echo -e "${GREEN}PASS${NC}" || echo -e "${RED}FAIL${NC}")"
echo "═══════════════════════════════════"

TOTAL=$((TYPECHECK_PASS + LINT_PASS + CRAWL_PASS + A11Y_PASS))

if [ $TOTAL -eq 4 ]; then
    echo -e "${GREEN}🎉 All checks passed! (4/4)${NC}"
    exit 0
else
    echo -e "${YELLOW}⚠️  Some checks failed ($TOTAL/4 passed)${NC}"
    exit 1
fi
