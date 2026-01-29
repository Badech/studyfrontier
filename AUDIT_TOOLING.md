# Audit Tooling Documentation

## Overview

This document describes the audit tooling setup for StudyFrontier. The tooling ensures code quality, accessibility compliance, and production readiness without breaking existing UX.

## Framework Analysis

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript (strict mode enabled)
- **Styling**: Tailwind CSS with custom design system
- **i18n**: next-intl with 3 locales (en, fr, ar)
- **Routing**: Dynamic locale-based routing with middleware
- **Components**: React with Radix UI primitives

## Installed Tools

### 1. TypeScript Compiler
- **Purpose**: Type checking and compile-time error detection
- **Config**: `tsconfig.json` with strict mode enabled
- **Status**: ✅ Already configured

### 2. ESLint
- **Purpose**: Code linting and Next.js best practices
- **Config**: `.eslintrc.json` extending `next/core-web-vitals`
- **Status**: ✅ Already configured

### 3. Playwright
- **Purpose**: End-to-end testing and link crawling
- **Version**: Latest (@playwright/test)
- **Config**: `playwright.config.ts`
- **Status**: ✅ Newly added

### 4. Axe-core
- **Purpose**: Automated accessibility testing (WCAG 2.1 A/AA)
- **Version**: Latest (@axe-core/playwright)
- **Status**: ✅ Newly added

## Available Scripts

### Quick Commands

```bash
# Type check only
npm run typecheck

# Lint check only
npm run lint

# Link crawler tests
npm run test:crawl

# Accessibility tests
npm run test:a11y

# All Playwright tests
npm run test:all

# Quick audit (typecheck + lint)
npm run audit:quick

# Full audit (all checks)
npm run audit
```

### Script Runners (Recommended)

#### PowerShell (Windows)
```powershell
# Run full audit with pretty output
.\scripts\audit.ps1
```

#### Bash (Linux/Mac)
```bash
# Run full audit with pretty output
./scripts/audit.sh
```

## Test Suites

### 1. Link Crawler (`tests/crawl.spec.ts`)

**What it tests:**
- ✅ All pages return 200 status codes
- ✅ No broken internal links
- ✅ Navigation functionality
- ✅ Multi-locale support (en, fr, ar)
- ✅ Mobile responsiveness

**Coverage:**
- 19 routes × 3 locales = 57 page tests
- Internal link validation
- Header/footer navigation
- Mobile viewport tests

**Run:**
```bash
npm run test:crawl
```

### 2. Accessibility Tests (`tests/a11y.spec.ts`)

**What it tests:**
- ✅ WCAG 2.1 Level A/AA compliance
- ✅ Color contrast ratios
- ✅ Keyboard navigation
- ✅ Screen reader support
- ✅ Semantic HTML structure
- ✅ Image alt text
- ✅ Heading hierarchy
- ✅ Landmark regions

**Coverage:**
- 5 critical pages (home, about, services, apply, contact)
- Automated axe-core scans
- Manual keyboard navigation tests
- Screen reader compatibility checks

**Run:**
```bash
npm run test:a11y
```

## CI/CD Integration

### GitHub Actions Workflow

A GitHub Actions workflow is configured at `.github/workflows/audit.yml`:

**Triggers:**
- Push to `main` or `develop` branches
- Pull requests targeting `main` or `develop`

**Steps:**
1. Checkout code
2. Setup Node.js 20
3. Install dependencies
4. Install Playwright browsers
5. Run TypeScript check
6. Run ESLint
7. Run link crawler tests
8. Run accessibility tests
9. Upload test reports as artifacts

**Timeout:** 15 minutes

## How to Run Locally

### First Time Setup

1. Install Playwright browsers:
```bash
npx playwright install chromium
```

### Running Tests

#### Option 1: Individual Commands
```bash
# 1. Type check
npm run typecheck

# 2. Lint
npm run lint

# 3. Crawl tests
npm run test:crawl

# 4. Accessibility tests
npm run test:a11y
```

#### Option 2: Full Audit (Recommended)
```bash
# PowerShell (Windows)
.\scripts\audit.ps1

# Bash (Linux/Mac)
chmod +x scripts/audit.sh
./scripts/audit.sh

# Or use npm script
npm run audit
```

### Running Tests Against Production

To test against the live site instead of local dev server:

```bash
BASE_URL=https://studyfrontier.vercel.app npm run test:crawl
BASE_URL=https://studyfrontier.vercel.app npm run test:a11y
```

## Test Configuration

### Playwright Config (`playwright.config.ts`)

- **Browser**: Chromium only (for speed)
- **Parallel**: Yes (full parallelization)
- **Retries**: 2 on CI, 0 locally
- **Base URL**: `http://localhost:3000` (or env var)
- **Web Server**: Auto-starts dev server if not running
- **Timeout**: 120 seconds for server startup

### Test Timeouts

- Default test timeout: 30 seconds (Playwright default)
- Web server timeout: 120 seconds
- Individual page load: ~5 seconds expected

## Interpreting Results

### TypeScript Errors

```
error TS2322: Type 'string' is not assignable to type 'number'.
```

**Action**: Fix type errors in the indicated files.

### ESLint Warnings

```
Warning: img elements must have an alt prop
```

**Action**: Add missing alt attributes or fix linting issues.

### Crawl Test Failures

```
Error: expect(received).toBe(expected)
Expected: 200
Received: 404
```

**Action**: Check for broken links or routing issues.

### Accessibility Violations

```
❌ color-contrast: Elements must have sufficient color contrast
   Impact: serious
   Elements affected: 3
```

**Action**: Fix color contrast issues to meet WCAG AA standards (4.5:1 for normal text).

## Best Practices

### Before Committing

1. Run `npm run audit:quick` to catch type and lint errors
2. Fix any issues before committing
3. Consider running full audit for major changes

### Before Deploying

1. Run full audit: `npm run audit`
2. Review accessibility violations
3. Test on multiple viewports
4. Verify all critical paths work

### During Development

1. Keep dev server running for faster test iteration
2. Run specific test files during feature development
3. Use Playwright UI mode for debugging: `npx playwright test --ui`

## Debugging Failed Tests

### View Test Reports

```bash
# Open Playwright HTML report
npx playwright show-report
```

### Run Tests in UI Mode

```bash
# Interactive test debugging
npx playwright test --ui
```

### Run Tests in Headed Mode

```bash
# See browser while tests run
npx playwright test --headed
```

### Run Specific Test

```bash
# Run single test file
npx playwright test tests/crawl.spec.ts

# Run tests matching pattern
npx playwright test --grep "homepage"
```

### Debug Mode

```bash
# Step through tests with debugger
npx playwright test --debug
```

## Maintenance

### Updating Test Coverage

To add new routes to crawler tests, edit `tests/crawl.spec.ts`:

```typescript
const ROUTES = [
  '/',
  '/about',
  // Add new routes here
  '/new-page',
];
```

### Updating Critical Pages for A11y

To add pages to accessibility tests, edit `tests/a11y.spec.ts`:

```typescript
const CRITICAL_PAGES = [
  '/',
  '/about',
  // Add critical pages here
  '/new-critical-page',
];
```

### Playwright Updates

```bash
# Update Playwright
npm install -D @playwright/test@latest

# Update browsers
npx playwright install chromium
```

## Troubleshooting

### Issue: Tests timeout

**Solution**: Increase timeout in test or check if dev server is slow to start.

### Issue: Browser not found

**Solution**: Run `npx playwright install chromium`

### Issue: Port already in use

**Solution**: Kill process on port 3000 or change BASE_URL in config.

### Issue: Tests pass locally but fail in CI

**Solution**: Check for environment-specific issues, timing differences, or missing setup steps.

## Summary

### What Was Added

1. ✅ **Playwright** for E2E testing and link crawling
2. ✅ **@axe-core/playwright** for accessibility testing
3. ✅ **playwright.config.ts** - Test configuration
4. ✅ **tests/crawl.spec.ts** - Link crawler test suite
5. ✅ **tests/a11y.spec.ts** - Accessibility test suite
6. ✅ **npm scripts** - typecheck, test:crawl, test:a11y, audit
7. ✅ **scripts/audit.ps1** - PowerShell audit runner
8. ✅ **scripts/audit.sh** - Bash audit runner
9. ✅ **.github/workflows/audit.yml** - CI workflow

### How to Run

**Quick check before commit:**
```bash
npm run audit:quick
```

**Full audit:**
```bash
npm run audit
# or
.\scripts\audit.ps1
```

**Individual tests:**
```bash
npm run typecheck
npm run lint
npm run test:crawl
npm run test:a11y
```

---

**Next Steps**: Run `npm run audit` to verify everything is working correctly!
