# Design Tokens - Quick Reference Guide

## 🎨 Color Token System

### Usage Guidelines

**For Hero Sections (Dark Backgrounds)**:
```tsx
// ✅ DO: Use semantic classes
<h1 className="hero-headline">Title</h1>
<p className="hero-subheadline">Subtitle</p>

// ✅ DO: Use inline styles for non-heading text
<p style={{ color: 'hsl(var(--hero-text-secondary))' }}>Body text</p>
<span style={{ color: 'hsl(var(--hero-text-muted))' }}>Muted text</span>

// ❌ DON'T: Use opacity-based colors
<p className="text-white/90">Bad</p>
<p className="text-gray-200">Bad</p>
```

**For Light Backgrounds**:
```tsx
// ✅ DO: Use standard classes (already configured)
<h2 className="section-title">Title</h2>
<p className="section-subtitle">Subtitle</p>
<p className="text-navy-600">Body text</p>
```

---

## 📚 Token Reference

### Text Colors

| Token | Value | Usage | Contrast on White | Contrast on Navy-900 |
|-------|-------|-------|-------------------|----------------------|
| `--text-primary` | #0f172a | Headings on light | 15.5:1 ✅ | - |
| `--text-secondary` | #1e293b | Body text on light | 12.6:1 ✅ | - |
| `--text-muted` | #64748b | Secondary text | 4.9:1 ✅ | - |
| `--hero-text` | #ffffff | Hero headings | - | 15.5:1 ✅ |
| `--hero-text-secondary` | #f2f2f2 | Hero body | - | 14.1:1 ✅ |
| `--hero-text-muted` | #d1d9e6 | Hero muted | - | 9.8:1 ✅ |

### CSS Classes

| Class | Color | Usage |
|-------|-------|-------|
| `.hero-headline` | Pure white | H1 in hero sections |
| `.hero-subheadline` | Off-white | Subtitles in hero |
| `.hero-badge-light` | White badge | Trust badges |
| `.hero-badge-gold` | Gold badge | Premium badges |
| `.hero-stat-value` | Pure white | Stat numbers |
| `.hero-stat-label` | Light gray | Stat labels |

### Tailwind Classes

| Class | CSS Variable | Usage |
|-------|-------------|-------|
| `text-inverse` | `--text-inverse` | White text on dark |
| `text-inverse-secondary` | `--text-inverse-secondary` | Off-white on dark |
| `text-inverse-muted` | `--text-inverse-muted` | Muted on dark |
| `hero-text` | `--hero-text` | Alias for inverse |
| `hero-text-secondary` | `--hero-text-secondary` | Alias for inverse-secondary |
| `hero-text-muted` | `--hero-text-muted` | Alias for inverse-muted |

---

## 🎯 Common Patterns

### Hero Section Template
```tsx
<section className="bg-gradient-to-br from-navy-950 via-navy-900 to-navy-800">
  <div className="container">
    {/* Badges */}
    <div className="hero-badge-light">
      <Icon className="h-4 w-4" />
      <span className="text-sm font-semibold">Badge Text</span>
    </div>
    
    {/* Headline */}
    <h1 className="hero-headline">
      Your Headline
    </h1>
    
    {/* Subheadline */}
    <p className="hero-subheadline">
      Your subtitle text
    </p>
    
    {/* Stats */}
    <div className="hero-stat-value">500+</div>
    <div className="hero-stat-label">Students</div>
  </div>
</section>
```

### Button Usage
```tsx
// Primary CTA
<Button variant="premium" size="xl">
  Book Now
</Button>

// Secondary CTA
<Button variant="default">
  Learn More
</Button>

// WhatsApp
<Button variant="whatsapp">
  Chat Now
</Button>
```

---

## 🔍 Testing

### Manual Check
1. Hero text should be pure white or very light gray
2. No opacity-based colors (`text-white/90`, etc.)
3. Badges should use `.hero-badge-light` or `.hero-badge-gold`
4. All text readable without zooming

### Automated Check
```bash
# Run contrast tests
npx playwright test tests/contrast.spec.ts

# Check for problematic patterns
npm run lint:contrast  # (if configured)
```

### Browser DevTools
1. Open hero section
2. Inspect text element
3. Check computed color
4. Should be `rgb(255, 255, 255)` or close

---

## ⚠️ Common Mistakes

### ❌ Don't Use Opacity on Dark Backgrounds
```tsx
// ❌ BAD - Fails WCAG AA
<p className="text-white/90">Subtitle</p>
<span className="text-white/70">Muted</span>
<div className="text-gray-200">Body</div>
```

### ✅ Do Use Semantic Tokens
```tsx
// ✅ GOOD - Passes WCAG AAA
<p className="hero-subheadline">Subtitle</p>
<span style={{ color: 'hsl(var(--hero-text-muted))' }}>Muted</span>
<div style={{ color: 'hsl(var(--hero-text-secondary))' }}>Body</div>
```

### ❌ Don't Override Hero Classes
```tsx
// ❌ BAD - Breaks consistency
<h1 className="hero-headline text-navy-900">Title</h1>
<p className="hero-subheadline text-gray-300">Subtitle</p>
```

### ✅ Do Use Classes As-Is
```tsx
// ✅ GOOD - Consistent and accessible
<h1 className="hero-headline">Title</h1>
<p className="hero-subheadline">Subtitle</p>
```

---

## 📖 Resources

### Files
- `app/globals.css` - Token definitions
- `tailwind.config.ts` - Tailwind integration
- `CONTRAST_ACCESSIBILITY_REPORT.md` - Full audit report
- `tests/contrast.spec.ts` - Automated tests

### Standards
- [WCAG 2.1 Guidelines](https://www.w3.org/WAI/WCAG21/quickref/)
- [Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [axe DevTools](https://www.deque.com/axe/devtools/)

---

## 🚀 Quick Fixes

### Convert Existing Hero
```diff
<section className="bg-gradient-to-br from-navy-900 to-navy-800">
  <div className="container">
-   <h1 className="text-5xl text-white">Title</h1>
+   <h1 className="hero-headline">Title</h1>
    
-   <p className="text-xl text-white/90">Subtitle</p>
+   <p className="hero-subheadline">Subtitle</p>
    
-   <div className="bg-white/10 text-white">Badge</div>
+   <div className="hero-badge-light">Badge</div>
  </div>
</section>
```

### Add New Hero
1. Copy template from "Common Patterns" above
2. Replace placeholder text
3. Test with DevTools
4. Run automated tests

---

**Last Updated**: January 30, 2026  
**Version**: 1.0  
**Maintained By**: Design Systems Team
