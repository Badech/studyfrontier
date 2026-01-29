# StudyFrontier Typography System
## SaaS-Grade Modern Typography

---

## 🎯 Typography Philosophy

**The StudyFrontier typography system is built on two premium fonts:**

1. **DM Sans (Display Font)** - Strong, modern headlines
2. **Inter (Body Font)** - Clean, highly readable text

**Inspired by:** Stripe, Linear, Notion, Vercel

**Design Principles:**
- ✅ High contrast between headlines and body
- ✅ Generous font sizes (larger than typical)
- ✅ Tight letter spacing on headlines (modern feel)
- ✅ Excellent readability at all sizes
- ✅ International look (not US-centric)

---

## 📚 Font Stack

### Display Font: DM Sans

**Purpose:** Headlines, titles, buttons, labels, emphasis

```css
font-family: var(--font-display), system-ui, sans-serif;
```

**Characteristics:**
- Geometric proportions (modern, tech-forward)
- Strong presence at large sizes
- Excellent for headlines and UI elements
- Used by: Linear, Arc Browser, Raycast

**Weights Available:**
- 400 - Regular
- 500 - Medium
- 600 - Semibold
- 700 - Bold

**When to Use:**
- All headings (h1-h6)
- Button text
- Form labels
- Card titles
- Stats and numbers
- Navigation items
- Eyebrow text (small caps labels)

### Body Font: Inter

**Purpose:** Paragraphs, body text, descriptions, UI text

```css
font-family: var(--font-body), system-ui, sans-serif;
```

**Characteristics:**
- Optimized for screen reading
- Clear at small sizes
- Neutral, professional appearance
- Excellent letter spacing

**Weights Available:**
- 300 - Light
- 400 - Regular
- 500 - Medium
- 600 - Semibold
- 700 - Bold

**When to Use:**
- Body paragraphs
- Lists
- Form inputs
- Descriptions
- Captions
- Footer text
- Long-form content

### Arabic Font: Noto Sans Arabic

**Purpose:** Arabic language support (RTL)

```css
font-family: var(--font-arabic), sans-serif;
```

**Weights Available:**
- 400 - Regular
- 500 - Medium
- 600 - Semibold
- 700 - Bold

**Auto-Applied:** When locale is 'ar'

---

## 📏 Type Scale

### Headings (DM Sans Display)

```css
/* H1 - Hero Headlines */
font-size: 3rem → 4rem → 5rem → 6rem (48px → 64px → 80px → 96px)
font-weight: 700 (Bold)
line-height: 1.1
letter-spacing: -0.025em
color: navy-900

/* H2 - Major Section Titles */
font-size: 2.5rem → 3rem → 4rem (40px → 48px → 64px)
font-weight: 700 (Bold)
line-height: 1.15
letter-spacing: -0.02em
color: navy-900

/* H3 - Section Headings */
font-size: 1.5rem → 2rem → 2.5rem (24px → 32px → 40px)
font-weight: 600 (Semibold)
line-height: 1.25
letter-spacing: -0.015em
color: navy-800

/* H4 - Subsection Titles */
font-size: 1.25rem → 1.5rem → 2rem (20px → 24px → 32px)
font-weight: 600 (Semibold)
line-height: 1.3
letter-spacing: -0.01em
color: navy-800

/* H5 - Minor Headings */
font-size: 1.125rem → 1.25rem → 1.5rem (18px → 20px → 24px)
font-weight: 600 (Semibold)
line-height: 1.4
color: navy-700

/* H6 - Smallest Headings */
font-size: 1rem → 1.125rem → 1.25rem (16px → 18px → 20px)
font-weight: 600 (Semibold)
line-height: 1.5
color: navy-700
```

### Body Text (Inter Body)

```css
/* Paragraph - Standard Body */
font-size: 1.125rem → 1.25rem (18px → 20px)
font-weight: 400 (Regular)
line-height: 1.7
color: navy-600
max-width: 75ch

/* Lead Text - Introductory Paragraph */
font-family: DM Sans (display font)
font-size: 1.25rem → 1.5rem → 2rem (20px → 24px → 32px)
font-weight: 500 (Medium)
line-height: 1.5
letter-spacing: -0.01em
color: navy-700

/* Small Text */
font-size: 1rem → 1.125rem (16px → 18px)
font-weight: 400 (Regular)
line-height: 1.6
color: navy-500

/* Muted Text */
font-size: 0.875rem → 1rem (14px → 16px)
font-weight: 400 (Regular)
line-height: 1.6
color: navy-400
```

---

## 🎨 Utility Classes

### Hero Typography

```tsx
/* Hero Headline - Maximum impact */
<h1 className="hero-headline">
  Your Gateway to U.S. Universities
</h1>

/* Specs */
font-family: DM Sans
font-size: 3rem → 4rem → 5rem → 6rem (responsive)
font-weight: 700
line-height: 1.05
letter-spacing: -0.03em
color: navy-900
```

```tsx
/* Hero Subheadline - Supporting text */
<p className="hero-subheadline">
  Professional guidance for international students
</p>

/* Specs */
font-family: Inter
font-size: 1.25rem → 1.5rem → 2rem
font-weight: 400
line-height: 1.5
color: navy-600
max-width: 65ch
```

### Section Typography

```tsx
/* Section Title */
<h2 className="section-title">
  Our Services
</h2>

/* Specs */
font-family: DM Sans
font-size: 2rem → 2.5rem → 3rem → 4rem (responsive)
font-weight: 700
line-height: 1.15
letter-spacing: -0.02em
color: navy-900
```

```tsx
/* Section Subtitle */
<p className="section-subtitle">
  Comprehensive support for your study abroad journey
</p>

/* Specs */
font-family: Inter
font-size: 1.125rem → 1.25rem → 1.5rem
font-weight: 400
line-height: 1.6
color: navy-600
max-width: 65ch
```

### Card Typography

```tsx
/* Card Title */
<h3 className="card-title">
  University Application Support
</h3>

/* Specs */
font-family: DM Sans
font-size: 1.25rem → 1.5rem → 2rem
font-weight: 600
line-height: 1.3
letter-spacing: -0.015em
color: navy-900
```

```tsx
/* Card Description */
<p className="card-description">
  Expert guidance through the U.S. university application process
</p>

/* Specs */
font-family: Inter
font-size: 1rem → 1.125rem → 1.25rem
font-weight: 400
line-height: 1.6
color: navy-600
```

### Specialty Typography

```tsx
/* Eyebrow Text - Small labels above headings */
<span className="eyebrow">Our Services</span>

/* Specs */
font-family: DM Sans
font-size: 0.875rem → 1rem → 1.125rem
font-weight: 600
letter-spacing: 0.05em
text-transform: uppercase
color: gold-500
```

```tsx
/* Stat Number - Large numbers */
<div className="stat-number">98%</div>

/* Specs */
font-family: DM Sans
font-size: 2.5rem → 3rem → 4rem → 5rem
font-weight: 700
line-height: 1
letter-spacing: -0.03em
color: navy-900
```

```tsx
/* Stat Label - Below numbers */
<div className="stat-label">Success Rate</div>

/* Specs */
font-family: Inter
font-size: 0.875rem → 1rem → 1.125rem
font-weight: 500
text-transform: uppercase
letter-spacing: 0.05em
color: navy-500
```

```tsx
/* Quote Text - Testimonials */
<blockquote className="quote-text">
  "StudyFrontier provided honest guidance..."
</blockquote>

/* Specs */
font-family: Inter
font-size: 1.125rem → 1.25rem → 1.5rem
font-weight: 400
line-height: 1.6
color: navy-700
```

---

## 🎯 Component-Specific Typography

### Buttons

**All buttons use DM Sans display font:**

```tsx
<Button variant="default">Apply Now</Button>

/* Typography Specs */
font-family: DM Sans
font-weight: 600 (Semibold)
letter-spacing: -0.01em
font-size: 1rem (default), 0.875rem (sm), 1.125rem (lg), 1.25rem (xl)
line-height: 1.5
```

### Forms

**Labels (DM Sans):**
```tsx
<label>Full Name</label>

/* Specs */
font-family: DM Sans
font-size: 0.95rem
font-weight: 600
letter-spacing: -0.005em
color: navy-700
```

**Inputs (Inter):**
```tsx
<input type="text" placeholder="Enter your name" />

/* Specs */
font-family: Inter
font-size: 1rem
font-weight: 400
line-height: 1.5
color: navy-900
placeholder-color: navy-400
```

### Navigation

**Nav links:**
```tsx
<a href="/services">Services</a>

/* Specs */
font-family: Inter
font-weight: 500 (Medium)
color: navy-700
hover-color: gold-500
```

### Footer

```tsx
<p className="footer-text">© 2024 StudyFrontier</p>

/* Specs */
font-family: Inter
font-size: 0.875rem → 1rem
font-weight: 400
line-height: 1.6
color: navy-400
```

---

## 📊 Responsive Typography Scale

### Mobile (< 768px)

- **H1:** 48px (3rem)
- **H2:** 40px (2.5rem)
- **H3:** 24px (1.5rem)
- **H4:** 20px (1.25rem)
- **Body:** 18px (1.125rem)
- **Small:** 16px (1rem)

### Tablet (768px - 1023px)

- **H1:** 64px (4rem)
- **H2:** 48px (3rem)
- **H3:** 32px (2rem)
- **H4:** 24px (1.5rem)
- **Body:** 19px (1.188rem)
- **Small:** 17px (1.063rem)

### Desktop (1024px+)

- **H1:** 80px - 96px (5rem - 6rem)
- **H2:** 64px (4rem)
- **H3:** 40px (2.5rem)
- **H4:** 32px (2rem)
- **Body:** 20px (1.25rem)
- **Small:** 18px (1.125rem)

---

## 🎨 Typography Hierarchy Examples

### Homepage Hero

```tsx
<section className="bg-navy-900 text-white py-32">
  <div className="container mx-auto text-center">
    {/* Eyebrow */}
    <span className="eyebrow">Welcome to StudyFrontier</span>
    
    {/* Hero Headline */}
    <h1 className="hero-headline">
      Your Gateway to <span className="gold-gradient">U.S. Universities</span>
    </h1>
    
    {/* Hero Subheadline */}
    <p className="hero-subheadline mx-auto">
      Professional guidance for international students seeking academic excellence abroad
    </p>
    
    {/* CTA Buttons */}
    <div className="flex gap-4 justify-center">
      <Button variant="premium" size="lg">Start Your Journey</Button>
      <Button variant="outline" size="lg">Learn More</Button>
    </div>
  </div>
</section>
```

### Section with Cards

```tsx
<section className="bg-white py-20">
  <div className="container mx-auto">
    {/* Section Header */}
    <div className="text-center mb-16">
      <span className="eyebrow">What We Offer</span>
      <h2 className="section-title">Our Services</h2>
      <p className="section-subtitle mx-auto">
        Comprehensive support for every step of your study abroad journey
      </p>
    </div>
    
    {/* Service Cards */}
    <div className="grid grid-cols-3 gap-8">
      <Card>
        <CardHeader>
          <h3 className="card-title">Application Support</h3>
        </CardHeader>
        <CardContent>
          <p className="card-description">
            Expert guidance through the U.S. university application process
          </p>
        </CardContent>
      </Card>
    </div>
  </div>
</section>
```

### Stats Section

```tsx
<section className="bg-navy-50 py-20">
  <div className="container mx-auto">
    <div className="grid grid-cols-3 gap-8 text-center">
      <div>
        <div className="stat-number">98%</div>
        <div className="stat-label">Success Rate</div>
      </div>
      <div>
        <div className="stat-number">500+</div>
        <div className="stat-label">Students Helped</div>
      </div>
      <div>
        <div className="stat-number">50+</div>
        <div className="stat-label">Universities</div>
      </div>
    </div>
  </div>
</section>
```

### Testimonial

```tsx
<Card className="bg-navy-800 text-white p-8">
  <blockquote className="quote-text text-white">
    "StudyFrontier provided honest, strategic guidance that positioned me as a strong candidate. I'm now at UC Berkeley studying Data Science."
  </blockquote>
  <div className="mt-6">
    <p className="font-display font-semibold text-lg">Sara M.</p>
    <p className="text-navy-300 text-sm">UC Berkeley, Data Science</p>
  </div>
</Card>
```

---

## ✅ Typography Best Practices

### 1. **Font Pairing Consistency**

```tsx
/* ✅ GOOD - Consistent pairing */
<h2 className="font-display font-bold">Heading</h2>
<p className="font-body">Body text follows naturally</p>

/* ❌ BAD - Inconsistent fonts */
<h2 style={{fontFamily: 'Arial'}}>Heading</h2>
<p style={{fontFamily: 'Times New Roman'}}>Body text</p>
```

### 2. **Appropriate Font Sizes**

```tsx
/* ✅ GOOD - Clear hierarchy */
<h1 className="text-6xl">Main Title</h1>
<h2 className="text-4xl">Section Title</h2>
<p className="text-xl">Body text</p>

/* ❌ BAD - No hierarchy */
<h1 className="text-2xl">Main Title</h1>
<h2 className="text-xl">Section Title</h2>
<p className="text-xl">Body text</p>
```

### 3. **Line Length (Measure)**

```tsx
/* ✅ GOOD - Optimal reading width */
<p className="max-w-[75ch]">
  Long paragraph text that's easy to read...
</p>

/* ❌ BAD - Too wide */
<p className="w-full">
  Long paragraph text that spans entire screen...
</p>
```

### 4. **Line Height**

```tsx
/* ✅ GOOD - Generous line height */
<p className="leading-relaxed">  {/* 1.7 */}
  Body text with comfortable spacing
</p>

/* ❌ BAD - Cramped */
<p className="leading-tight">  {/* 1.25 */}
  Body text feels compressed
</p>
```

### 5. **Letter Spacing**

```tsx
/* ✅ GOOD - Tight on large headlines */
<h1 className="tracking-tight" style={{letterSpacing: '-0.025em'}}>
  Hero Headline
</h1>

/* ✅ GOOD - Wide on small labels */
<span className="uppercase tracking-wide" style={{letterSpacing: '0.05em'}}>
  LABEL TEXT
</span>

/* ❌ BAD - Normal tracking on large text */
<h1 className="tracking-normal">
  Hero Headline
</h1>
```

---

## 🚫 Typography Don'ts

### Font Usage

```tsx
/* ❌ DON'T mix too many fonts */
<h1 style={{fontFamily: 'DM Sans'}}>Title</h1>
<h2 style={{fontFamily: 'Roboto'}}>Subtitle</h2>
<p style={{fontFamily: 'Open Sans'}}>Body</p>

/* ✅ DO stick to system */
<h1 className="font-display">Title</h1>
<h2 className="font-display">Subtitle</h2>
<p className="font-body">Body</p>
```

### Font Weights

```tsx
/* ❌ DON'T use too many weights */
font-weight: 300, 350, 400, 450, 500, 550, 600, 650, 700

/* ✅ DO use strategic weights */
font-weight: 400 (body), 600 (emphasis), 700 (headlines)
```

### Text Sizes

```tsx
/* ❌ DON'T create unclear hierarchy */
<h1 className="text-3xl">Main</h1>
<h2 className="text-2xl">Section</h2>
<p className="text-2xl">Body</p>

/* ✅ DO maintain clear steps */
<h1 className="text-7xl">Main</h1>
<h2 className="text-5xl">Section</h2>
<p className="text-xl">Body</p>
```

### Colors

```tsx
/* ❌ DON'T use low contrast */
<p className="text-gray-300">Light text on white</p>

/* ✅ DO ensure readability */
<p className="text-navy-600">Readable text on white</p>
```

---

## 📱 Mobile Typography

### Special Considerations

1. **Reduce font sizes proportionally** (but not too small)
2. **Maintain hierarchy** (even at smaller sizes)
3. **Increase line height** slightly on mobile
4. **Shorter line lengths** (50-60ch instead of 75ch)
5. **Larger tap targets** for buttons (min 44x44px)

### Mobile Overrides

```css
/* Mobile-specific adjustments */
@media (max-width: 767px) {
  h1 {
    font-size: 2.5rem; /* 40px instead of 48px */
    line-height: 1.1;
  }
  
  p {
    font-size: 1rem; /* 16px instead of 18px */
    line-height: 1.75; /* Slightly more breathing room */
  }
  
  .hero-headline {
    font-size: 2.25rem; /* 36px */
    letter-spacing: -0.02em; /* Slightly less tight */
  }
}
```

---

## ♿ Accessibility

### Font Size Minimums

- **Body text:** Minimum 16px (1rem)
- **Small text:** Minimum 14px (0.875rem)
- **Button text:** Minimum 16px (1rem)
- **Input text:** Minimum 16px (prevents zoom on iOS)

### Contrast Requirements

All text meets WCAG AA (4.5:1) or AAA (7:1) standards:

- **navy-900 on white:** 16.1:1 ✅ AAA
- **navy-600 on white:** 7.1:1 ✅ AAA
- **navy-500 on white:** 4.7:1 ✅ AA (large text only)

### Font Features

```css
/* Enabled font features */
font-feature-settings: "rlig" 1, "calt" 1, "kern" 1;

/* What they do */
rlig: Required ligatures (fi, fl)
calt: Contextual alternates
kern: Kerning (letter spacing adjustments)
```

### Font Smoothing

```css
/* Better rendering on screens */
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
text-rendering: optimizeLegibility;
```

---

## 🎓 Quick Reference Cheat Sheet

### Most Used Classes

```tsx
/* Headlines */
<h1 className="hero-headline">              // Hero titles
<h2 className="section-title">              // Section titles
<h3 className="card-title">                 // Card titles

/* Body Text */
<p className="lead">                         // Intro paragraphs
<p className="text-xl text-navy-600">       // Standard body
<p className="text-small">                   // Small text
<p className="text-muted">                   // Muted/secondary

/* Specialty */
<span className="eyebrow">                   // Labels
<div className="stat-number">                // Large numbers
<blockquote className="quote-text">          // Quotes
<p className="footer-text">                  // Footer

/* Buttons (automatic) */
<Button>                                     // DM Sans, 600 weight
```

### Font Variables

```css
--font-display: DM Sans
--font-body: Inter
--font-arabic: Noto Sans Arabic
```

### Tailwind Classes

```tsx
font-display    // DM Sans
font-body       // Inter
font-sans       // Inter (same as body)
font-arabic     // Noto Sans Arabic (RTL)
```

---

## 📊 Typography Performance

### Font Loading Strategy

```tsx
// app/layout.tsx
import { DM_Sans, Inter } from 'next/font/google';

export const dmSans = DM_Sans({
  subsets: ['latin'],
  display: 'swap',          // Prevents FOIT (Flash of Invisible Text)
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

export const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
});
```

**Benefits:**
- ✅ Automatic font optimization by Next.js
- ✅ Self-hosted (no external requests)
- ✅ Font subsetting (only Latin characters loaded)
- ✅ Preloaded critical fonts
- ✅ CSS variables for easy access

---

## 🔄 Migration Guide

### From Old System to New

**Old (Inter everywhere):**
```tsx
<h1 className="text-4xl font-bold">Title</h1>
<p className="text-base">Body text</p>
```

**New (DM Sans + Inter):**
```tsx
<h1 className="text-6xl font-display font-bold">Title</h1>
<p className="text-xl font-body">Body text</p>
```

**Or use utility classes:**
```tsx
<h1 className="hero-headline">Title</h1>
<p className="text-xl">Body text</p>  {/* Auto Inter */}
```

---

## ✅ Implementation Checklist

### For Developers

- [x] DM Sans loaded in Next.js
- [x] Inter loaded with multiple weights
- [x] CSS variables configured
- [x] Global styles updated
- [x] Button component uses display font
- [x] Form elements use correct fonts
- [x] Utility classes available

### For Designers

- [ ] Update Figma with DM Sans + Inter
- [ ] Create typography component library
- [ ] Document all type styles
- [ ] Export design tokens
- [ ] Share with development team

### For Content Writers

- [ ] Review content for new sizes
- [ ] Adjust headline lengths if needed
- [ ] Ensure readability at larger sizes
- [ ] Test on mobile devices

---

**Version:** 1.0  
**Last Updated:** January 29, 2026  
**Related Documents:**
- BRAND_IDENTITY_BLUEPRINT.md
- COLOR_SYSTEM_DOCUMENTATION.md
- LOGO_SYSTEM_DOCUMENTATION.md

---

*Typography is the voice of your brand. DM Sans speaks with authority. Inter speaks with clarity. Together, they position StudyFrontier as modern, professional, and internationally sophisticated.* ✍️
