# Required SEO Assets

This folder should contain the following images for proper SEO and social sharing:

## Required Images

### 1. OG Image (og-image.png)
- **Size**: 1200x630 px
- **Format**: PNG or JPG
- **Usage**: Open Graph, Twitter Cards, LinkedIn previews
- **Content**: Brand name, tagline, visual identity
- **Current**: ⚠️ MISSING - Create or upload

**Recommended Content:**
```
StudyFrontier
Study in USA - Expert Guidance for Moroccan Students
[Background with education/Morocco theme]
```

### 2. Logo (logo.png)
- **Size**: 512x512 px minimum (square)
- **Format**: PNG with transparency
- **Usage**: Structured data, schema.org
- **Current**: ⚠️ MISSING - Create or upload

### 3. Favicon Files
Located in `/public/`:
- **favicon.ico** (16x16, 32x32, 48x48 multi-size ICO)
- **apple-touch-icon.png** (180x180 px)
- **android-chrome-192x192.png** (192x192 px)
- **android-chrome-512x512.png** (512x512 px)

**Current Status**: ⚠️ All MISSING

## Quick Setup

### Option 1: Use a Favicon Generator
1. Visit https://realfavicongenerator.net/
2. Upload your logo (512x512 px PNG recommended)
3. Customize settings
4. Download and extract to `/public/`

### Option 2: Manual Creation
Create the following files and place in `/public/`:

```
public/
├── favicon.ico
├── apple-touch-icon.png
├── android-chrome-192x192.png
├── android-chrome-512x512.png
└── images/
    ├── og-image.png
    └── logo.png
```

## Design Guidelines

### OG Image
- **Background**: Brand colors (primary color from tailwind.config.ts)
- **Text**: Large, readable font
- **Logo**: Include brand logo
- **Avoid**: Small text, too much detail

### Logo
- **Style**: Simple, recognizable
- **Format**: PNG with transparency
- **Colors**: Consistent with brand identity
- **Icon**: GraduationCap (Lucide) can be used as base

## Color Reference
From your brand config:
- **Primary**: Check `tailwind.config.ts` for exact hex values
- **Background**: White (#ffffff)
- **Text**: Dark/foreground color

## Testing
After adding images:
1. Test OG preview: https://www.opengraph.xyz/
2. Test Twitter Cards: https://cards-dev.twitter.com/validator
3. Test LinkedIn preview: Share a link in LinkedIn
4. Validate structured data: https://validator.schema.org/

## Current Placeholders
Until real images are created, the app references these files.
Update them ASAP for production deployment.
