#!/bin/bash
#
# Verification script to ensure no hardcoded contact details remain in the codebase.
# Run this before deploying to production.
#
# Usage: ./scripts/verify-no-hardcoded-contacts.sh
#

set -e

echo "🔍 Verifying No Hardcoded Contact Details..."
echo ""

ERRORS=0
WARNINGS=0

# Colors
RED='\033[0;31m'
YELLOW='\033[1;33m'
GREEN='\033[0;32m'
CYAN='\033[0;36m'
GRAY='\033[0;90m'
NC='\033[0m' # No Color

# Files and directories to exclude
EXCLUDE_PATTERN="node_modules|\.next|\.git|dist|build|coverage|scripts|lib/config/brand\.ts|\.env\.example|DEPLOYMENT\.md|NEXT_STEPS\.md|QUICKSTART\.md|README\.md|IMPROVEMENTS_SUMMARY\.md|package-lock\.json|messages/.*\.json|public/site\.webmanifest"

# Pattern 1: Placeholder phone numbers
echo -e "${YELLOW}1️⃣  Checking for placeholder phone numbers...${NC}"
if grep -rn --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" \
    -E "(212600000000|\+212XXXXXXXXX)" . 2>/dev/null | grep -vE "$EXCLUDE_PATTERN"; then
    echo -e "${RED}❌ PLACEHOLDER PHONE NUMBERS FOUND${NC}"
    ((ERRORS++))
fi

# Pattern 2: Hardcoded email in code files (not in brand config)
echo -e "${YELLOW}2️⃣  Checking for hardcoded email addresses...${NC}"
if grep -rn --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" \
    -E "\"contact@studyfrontier\.com\"" . 2>/dev/null | grep -vE "$EXCLUDE_PATTERN|primary:|mailtoLink:"; then
    echo -e "${RED}❌ HARDCODED EMAIL ADDRESSES FOUND${NC}"
    ((ERRORS++))
fi

# Pattern 3: Hardcoded WhatsApp links
echo -e "${YELLOW}3️⃣  Checking for hardcoded WhatsApp links...${NC}"
if grep -rn --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" \
    -E "\"https://wa\.me/[0-9]+\"" . 2>/dev/null | grep -vE "$EXCLUDE_PATTERN|linkDefault:"; then
    echo -e "${RED}❌ HARDCODED WHATSAPP LINKS FOUND${NC}"
    ((ERRORS++))
fi

# Pattern 4: Hardcoded phone display format
echo -e "${YELLOW}4️⃣  Checking for hardcoded phone number displays...${NC}"
if grep -rn --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" \
    -E "\"\+212\s*[0-9]{3}[\s-]?[0-9]{3}[\s-]?[0-9]{3}\"" . 2>/dev/null | grep -vE "$EXCLUDE_PATTERN|numberDisplay:|numberE164:"; then
    echo -e "${RED}❌ HARDCODED PHONE DISPLAYS FOUND${NC}"
    ((ERRORS++))
fi

# Pattern 5: Old URL references
echo -e "${YELLOW}5️⃣  Checking for old URL references...${NC}"
if grep -rn --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" \
    -E "\"https://studyfrontier\.com\"" . 2>/dev/null | grep -vE "$EXCLUDE_PATTERN|websiteUrl:"; then
    echo -e "${YELLOW}⚠️  OLD URL REFERENCES FOUND (should use BRAND_CONFIG.websiteUrl)${NC}"
    ((WARNINGS++))
fi

# Pattern 6: Hardcoded brand name in code (warnings only)
echo -e "${YELLOW}6️⃣  Checking for hardcoded brand names in code...${NC}"
if grep -rn --include="*.ts" --include="*.tsx" --include="*.js" --include="*.jsx" \
    -E "\"StudyFrontier\"" . 2>/dev/null | grep -vE "$EXCLUDE_PATTERN|brandName:|name:"; then
    echo -e "${YELLOW}⚠️  HARDCODED BRAND NAMES FOUND (consider using BRAND_CONFIG.brandName)${NC}"
    ((WARNINGS++))
fi

echo ""
echo -e "${GRAY}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

if [ $ERRORS -eq 0 ] && [ $WARNINGS -eq 0 ]; then
    echo -e "${GREEN}✅ SUCCESS: No hardcoded contact details found!${NC}"
    echo ""
    echo -e "${GREEN}All contact information is properly centralized in:${NC}"
    echo -e "${CYAN}  📄 lib/config/brand.ts${NC}"
    exit 0
else
    if [ $ERRORS -gt 0 ]; then
        echo -e "${RED}❌ CRITICAL ERRORS FOUND: $ERRORS${NC}"
        echo ""
        echo -e "${CYAN}🔧 FIX: Replace hardcoded values with BRAND_CONFIG imports:${NC}"
        echo ""
        echo "  import { BRAND_CONFIG } from '@/lib/config/brand';"
        echo ""
        echo "  BRAND_CONFIG.whatsapp.numberDisplay      // '+212 708-026571'"
        echo "  BRAND_CONFIG.whatsapp.numberE164         // '+212708026571'"
        echo "  BRAND_CONFIG.email.primary               // 'contact@studyfrontier.com'"
        echo "  BRAND_CONFIG.brandName                   // 'StudyFrontier'"
        echo ""
    fi
    
    if [ $WARNINGS -gt 0 ]; then
        echo -e "${YELLOW}⚠️  WARNINGS: $WARNINGS (non-critical, but should be reviewed)${NC}"
        echo ""
    fi
    
    if [ $ERRORS -gt 0 ]; then
        exit 1
    else
        exit 0
    fi
fi
