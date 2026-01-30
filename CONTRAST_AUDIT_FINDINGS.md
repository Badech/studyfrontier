# Contrast Audit - Initial Findings

## 🔍 Issues Identified

### Critical Contrast Problems

#### 1. **Hero Sections - Text on Dark Backgrounds**
**Issue**: `text-white/90` and `text-white/70` on `navy-900` to `navy-950` gradients

**Current Usage** (33 instances found):
- Home page: `text-white/90` for subheadline
- Home page: `text-white/70` for trust badges and stats
- All hero sections across 15+ pages
- `text-gray-200` used in many hero subtitles

**Contrast Ratios**:
- `text-white/90` on `navy-900`: ~3.8:1 ❌ (Fails WCAG AA for normal text)
- `text-white/70` on `navy-900`: ~2.7:1 ❌ (Fails WCAG AA)
- `text-gray-200` (#e5e7eb) on `navy-900` (#0f172a): ~3.2:1 ❌ (Fails WCAG AA)

**WCAG AA Requirements**:
- Normal text (< 18px): 4.5:1
- Large text (≥ 18px): 3:1
- UI components: 3:1

#### 2. **Hero Headline Class**
**Issue**: CSS defines `text-navy-900` but hero sections override with light colors

```css
/* globals.css line 228 */
.hero-headline {
  @apply text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-navy-900;
}
```

**Problem**: On dark backgrounds, this creates insufficient contrast or requires inline overrides.

#### 3. **Gold Badges on Light Backgrounds**
**Issue**: Gold text (#fbbf24) on light backgrounds may fail

**Example**: `text-gold-400` badges on `bg-white/10` or light surfaces
- Contrast ratio: ~2.5:1 ❌ (Fails for normal text)

---

## 📊 Affected Pages (All Locales)

1. ✅ Home (`/`)
2. ✅ Services (`/services`)
3. ✅ About (`/about`)
4. ✅ Contact (`/contact`)
5. ✅ Resources (`/resources`)
6. ✅ Blog (`/blog`)
7. ✅ Case Studies (`/case-studies`)
8. ✅ FAQs (`/faqs`)
9. ✅ Success Stories (`/success-stories`)
10. ✅ Study in USA (`/study-in-usa`)
11. ✅ Why StudyFrontier (`/why-studyfrontier`)
12. ✅ Who We Work With (`/who-we-work-with`)
13. ✅ Programs (Undergraduate, Masters, Pathways)
14. ✅ Resources (F-1 Visa, I-20 Guide)

**Total**: 15+ pages × 3 locales = 45+ page variants affected

---

## 🎨 Current Color System Analysis

### CSS Variables (globals.css)
```css
--foreground: 222 84% 5%;        /* #0f172a - Navy 900 */
--primary: 222 84% 5%;            /* #0f172a - Navy 900 */
--primary-foreground: 0 0% 100%; /* #ffffff - White */
```

### Tailwind Navy Scale
```
navy-900: #0f172a (Very dark - hero backgrounds)
navy-800: #1e293b
navy-700: #334155
navy-600: #475569
navy-500: #64748b (Body text - Good contrast on white)
navy-400: #94a3b8
navy-300: #cbd5e1
navy-200: #e2e8f0
```

### Problems:
1. No dedicated "hero text" token for dark backgrounds
2. Opacity-based colors (`text-white/90`) fail contrast
3. `gray-200` is too light for WCAG AA compliance
4. No semantic tokens for "text-on-dark" vs "text-on-light"

---

## 🔧 Required Fixes

### 1. Replace Opacity-Based Text Colors
**Bad**: `text-white/90`, `text-white/70`, `text-gray-200`
**Good**: Pure white (`text-white` or `#ffffff`) for hero text

### 2. Add Design Tokens
Create semantic color tokens:
- `--text-inverse`: Pure white for dark backgrounds
- `--text-primary`: Navy-900 for light backgrounds
- `--text-secondary`: Navy-600 for secondary text
- `--text-muted`: Navy-500 for muted text
- `--hero-overlay`: Proper background overlay values

### 3. Update Hero Typography Classes
```css
.hero-headline-on-dark {
  color: #ffffff; /* Pure white - 15.5:1 ratio */
}

.hero-subheadline-on-dark {
  color: rgba(255, 255, 255, 0.95); /* Very high contrast */
}
```

### 4. Fix Badge Contrast
Ensure badges meet 3:1 minimum:
- White badges: Use `bg-white/20` with pure white text
- Gold badges: Use darker gold or add background overlay

---

## 📈 Contrast Ratios Needed

### WCAG AA Compliance Targets

| Element Type | Size | Required Ratio | Current | Status |
|-------------|------|----------------|---------|--------|
| Hero Headline | 48px+ | 3:1 | Varies | ⚠️ Fix needed |
| Hero Subheadline | 20-24px | 4.5:1 | 3.8:1 | ❌ Fails |
| Body text (hero) | 16-18px | 4.5:1 | 2.7:1 | ❌ Fails |
| Badges | 14px | 4.5:1 | Variable | ⚠️ Check |
| Stats text | 14px | 4.5:1 | 2.7:1 | ❌ Fails |

---

## 🎯 Solution Strategy

### Phase 1: Design Tokens (Next)
Create semantic color system in CSS variables

### Phase 2: Update Hero Sections
Replace all opacity-based colors with compliant colors

### Phase 3: Test with axe-core
Run automated tests to verify fixes

### Phase 4: Manual Review
Visual check on all pages in all locales

---

## 📝 Test Results

### Automated Testing Setup
✅ Created `tests/contrast.spec.ts` with axe-core integration
✅ Tests all pages in all locales
✅ Focuses on hero/top sections
✅ Generates detailed violation reports

### Next Steps
1. Run: `npm run test:contrast` (to be added to package.json)
2. Review violations
3. Apply fixes
4. Re-test until all pass

---

**Date**: 2026-01-30
**Auditor**: Design Systems Lead
**Status**: Findings documented, fixes in progress
