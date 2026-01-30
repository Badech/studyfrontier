# 🔍 Full Audit Command

## Quick Start

Run a comprehensive quality audit:

```bash
pnpm audit:full
```

This command runs all quality checks and generates detailed reports in `/reports/`.

---

## What Gets Tested

The `audit:full` command runs 7 comprehensive checks:

### 1. TypeScript Type Check ✅
- Validates all TypeScript types
- Catches type errors before runtime
- **Critical**: Build-blocking errors

### 2. ESLint Lint ✅
- Checks code quality and style
- Enforces best practices
- **Critical**: Must pass with zero warnings

### 3. Playwright Crawl Tests 🕷️
- Crawls all pages in all locales
- Verifies no broken links
- Checks page load times
- **Non-critical**: Warnings only

### 4. Accessibility Tests ♿
- WCAG AA/AAA compliance
- ARIA attribute validation
- Keyboard navigation checks
- **Non-critical**: Warnings only

### 5. Contrast Tests 🎨
- Color contrast ratios (WCAG)
- Text readability validation
- Button state contrast
- **Non-critical**: Warnings only

### 6. Mobile UX Tests 📱
- Touch target sizes (44px minimum)
- Mobile menu behavior
- Form interactions
- Viewport compatibility
- **Non-critical**: Warnings only

### 7. i18n Audit 🌍
- Translation completeness
- Missing keys detection
- Locale consistency
- **Non-critical**: Warnings only

---

## Reports Generated

Each run creates a timestamped directory in `/reports/`:

```
reports/
├── latest/                    # Symlink to most recent run
└── 2026-01-30T12-30-45-678Z/ # Timestamped run
    ├── 00-SUMMARY.txt         # Overview of all results
    ├── 01-typecheck.txt       # TypeScript errors
    ├── 02-lint.txt            # ESLint warnings
    ├── 03-crawl.txt           # Crawl test results
    ├── 04-a11y.txt            # Accessibility issues
    ├── 05-contrast.txt        # Contrast violations
    ├── 06-mobile-ux.txt       # Mobile UX issues
    └── 07-i18n-audit.txt      # i18n missing keys
```

---

## Exit Codes

- **Exit 0**: All tests passed (or warnings only)
- **Exit 1**: Critical tests failed (typecheck or lint)

---

## Usage Examples

### Run Full Audit
```bash
pnpm audit:full
```

### Run in CI/CD
```bash
pnpm audit:full || exit 1
```

### Run Before Deploy
```bash
pnpm audit:full && pnpm build && pnpm deploy
```

### Quick Checks (No Playwright)
```bash
pnpm audit:quick
```
Runs only typecheck + lint (fast, no browser needed).

---

## Individual Test Commands

Run tests separately:

```bash
# Type checking
pnpm typecheck

# Linting
pnpm lint

# Crawl tests
pnpm test:crawl

# Accessibility
pnpm test:a11y

# Contrast
pnpm test:contrast

# Mobile UX
pnpm test:mobile-ux

# i18n audit
pnpm i18n:audit

# All Playwright tests
pnpm test:all
```

---

## Report Retention

- Reports are **not committed** to git (`.gitignore`)
- Each run creates a new timestamped directory
- `/reports/latest/` symlink points to most recent run
- Clean old reports manually:
  ```bash
  rm -rf reports/*
  ```

---

## CI/CD Integration

### GitHub Actions Example

```yaml
name: Quality Audit

on: [push, pull_request]

jobs:
  audit:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: pnpm/action-setup@v2
      - uses: actions/setup-node@v3
        with:
          node-version: 20
          cache: 'pnpm'
      
      - name: Install dependencies
        run: pnpm install
      
      - name: Run full audit
        run: pnpm audit:full
      
      - name: Upload reports
        if: always()
        uses: actions/upload-artifact@v3
        with:
          name: audit-reports
          path: reports/
          retention-days: 7
```

---

## Troubleshooting

### "Command not found: ts-node"
Install dependencies:
```bash
pnpm install
```

### "Playwright browser not installed"
Install browsers:
```bash
npx playwright install
```

### "Port 3000 already in use"
Stop dev server:
```bash
lsof -ti:3000 | xargs kill -9  # macOS/Linux
netstat -ano | findstr :3000   # Windows
```

### Reports directory not created
Check permissions:
```bash
mkdir -p reports
chmod 755 reports
```

---

## Performance

Typical run time:
- TypeCheck: ~5-10s
- Lint: ~5-10s
- Crawl Tests: ~30-60s
- A11y Tests: ~20-30s
- Contrast Tests: ~20-30s
- Mobile UX Tests: ~30-45s
- i18n Audit: ~2-5s

**Total**: ~2-3 minutes for full audit

---

## Customization

Edit `scripts/audit-full.ts` to:
- Add more tests
- Change report format
- Modify exit codes
- Add notifications (Slack, email)
- Integrate with monitoring tools

---

## Best Practices

### Before Each Deploy
```bash
pnpm audit:full && pnpm build
```

### Pre-commit Hook
```json
// .husky/pre-commit
pnpm audit:quick
```

### Nightly CI
```bash
# Run full audit including slow tests
pnpm audit:full
```

### Pull Request
```bash
# Quick check for fast feedback
pnpm audit:quick
```

---

## Related Commands

| Command | What It Does | When to Use |
|---------|--------------|-------------|
| `pnpm audit:full` | All 7 checks + reports | Before deploy, nightly CI |
| `pnpm audit:quick` | Typecheck + lint only | Pre-commit, fast feedback |
| `pnpm audit` | Basic checks | Legacy, use audit:quick |
| `pnpm typecheck` | TypeScript only | Fix type errors |
| `pnpm lint` | ESLint only | Fix lint errors |
| `pnpm test:all` | All Playwright tests | Test everything |

---

## Examples

### Pass Example
```
✓ TypeScript Type Check completed in 8.32s
✓ ESLint completed in 6.54s
✓ Playwright Crawl Tests completed in 45.23s
✓ Accessibility Tests completed in 28.91s
✓ Contrast Tests completed in 24.67s
✓ Mobile UX Tests completed in 38.45s
✓ i18n Audit completed in 3.12s

Audit completed successfully! All tests passed. ✨
```

### Fail Example
```
✗ TypeScript Type Check FAILED in 9.12s (CRITICAL)
✓ ESLint completed in 6.89s
✓ Playwright Crawl Tests completed in 46.78s

⚠️ CRITICAL: 1 test(s) failed. Please review and fix before deploying.

View full reports in: /reports/2026-01-30T12-30-45-678Z/
```

---

## Summary Report Example

```
╔════════════════════════════════════════════════════════════════════╗
║                    FULL AUDIT SUMMARY REPORT                       ║
╚════════════════════════════════════════════════════════════════════╝

Total Tests:    7
✓ Passed:       6
✗ Failed:       1
⚠ Warnings:     0
Total Time:     153.45s

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DETAILED RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. TypeScript Type Check
   Status: ✗ FAIL
   Time: 9.12s
   
2. ESLint
   Status: ✓ PASS
   Time: 6.89s

...
```

---

## Quick Reference

```bash
# Full audit with reports
pnpm audit:full

# View latest report
cat reports/latest/00-SUMMARY.txt

# View specific report
cat reports/latest/01-typecheck.txt

# List all runs
ls -la reports/

# Clean old reports
rm -rf reports/*
```

---

**Created**: January 30, 2026  
**Maintained By**: Development Team  
**Updates**: Check this file for command updates
