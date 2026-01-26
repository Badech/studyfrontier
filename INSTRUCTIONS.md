# StudyFrontier - Setup & Usage Instructions

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

This will install:
- Next.js 14 (App Router)
- React 18
- Tailwind CSS
- Framer Motion (animations)
- next-intl (internationalization)
- Lucide React (icons)
- shadcn/ui components

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
studyfrontier/
├── app/
│   ├── [locale]/              # Localized routes
│   │   ├── page.tsx           # Home page
│   │   ├── about/page.tsx     # About page
│   │   ├── services/page.tsx  # Services page
│   │   ├── faqs/page.tsx      # FAQs page
│   │   ├── apply/page.tsx     # Apply page
│   │   ├── contact/page.tsx   # Contact page
│   │   └── layout.tsx         # Layout with header/footer
│   ├── globals.css            # Global styles
│   ├── layout.tsx             # Root layout
│   └── sitemap.ts             # Auto-generated sitemap
├── components/
│   ├── ui/                    # shadcn/ui components
│   │   ├── button.tsx
│   │   └── card.tsx
│   ├── Header.tsx             # Navigation header
│   ├── Footer.tsx             # Site footer
│   ├── LanguageSwitcher.tsx   # Language selector
│   ├── WhatsAppFloat.tsx      # Floating WhatsApp button
│   ├── AnimatedSection.tsx    # Fade-in animations
│   └── Schema.tsx             # SEO Schema.org markup
├── messages/
│   ├── en.json                # English translations
│   ├── fr.json                # French translations
│   └── ar.json                # Arabic (Darija) translations
├── lib/
│   └── utils.ts               # Utility functions
├── public/
│   ├── logo.png               # Logo (replace with real logo)
│   ├── favicon.ico            # Favicon
│   └── robots.txt             # SEO robots file
├── i18n.ts                    # i18n configuration
├── middleware.ts              # Next.js middleware for i18n
├── tailwind.config.ts         # Tailwind configuration
├── next.config.js             # Next.js configuration
└── package.json               # Dependencies
```

## 🌍 Language System

The site supports 3 languages:

- **English** (en) - Default
- **French** (fr)
- **Arabic/Darija** (ar) - RTL support included

### How to Edit Translations

All text content is in `messages/*.json` files. To change text:

1. Open the appropriate language file
2. Find the key you want to edit
3. Update the value
4. Restart dev server (changes auto-reload)

Example:
```json
{
  "nav": {
    "home": "Home"  // Change this to update nav text
  }
}
```

## 🎨 Design System

### Colors

Based on the logo (navy, white, gold):

```css
Navy:    #1e3a8a (primary)
Gold:    #fbbf24 → #d97706 (gradient)
White:   #ffffff
```

### Typography

- Headlines: Bold, large (60px+ on desktop)
- Body: 16-18px, relaxed line-height
- Font: System fonts (optimized for speed)

### Spacing

Generous white space throughout:
- Section padding: py-20 to py-24
- Container: max-w-7xl with px-4 to px-8
- Component gaps: gap-6 to gap-12

## 🔧 Customization

### Update Contact Information

**WhatsApp Number:**
Files to update:
- `components/Header.tsx` (line 10)
- `components/WhatsAppFloat.tsx` (line 5)
- `app/[locale]/page.tsx` (line 16)
- `app/[locale]/apply/page.tsx` (line 9)
- `app/[locale]/contact/page.tsx` (line 9)

**Email & Location:**
Update in all `messages/*.json` files:
```json
{
  "contact": {
    "info": {
      "email": "contact@studyfrontier.com",
      "location": "Kenitra, Morocco"
    }
  }
}
```

### Replace Logo

Replace `public/logo.png` with your actual logo file (recommended size: 512x512px, PNG with transparency).

### Add New Pages

1. Create new page in `app/[locale]/your-page/page.tsx`
2. Add translations to all `messages/*.json` files
3. Add link to navigation in `components/Header.tsx`
4. Add link to footer in `components/Footer.tsx`

### Modify Colors

Edit `tailwind.config.ts`:
```typescript
colors: {
  navy: { ... },  // Update navy shades
  gold: { ... },  // Update gold shades
}
```

## 📱 WhatsApp Integration

The site uses WhatsApp for lead generation (no forms).

**Features:**
- Floating button on all pages
- Primary CTA buttons throughout
- Pulse animation to draw attention

**Phone Number Format:**
Use international format without + or spaces: `212708026571`

## 🔍 SEO

### Built-in SEO Features

- ✅ Meta titles & descriptions on all pages
- ✅ OpenGraph tags for social sharing
- ✅ Schema.org structured data
- ✅ Sitemap auto-generation
- ✅ robots.txt included
- ✅ Fast page loads (Lighthouse optimized)

### Update SEO Content

Edit metadata in `messages/*.json`:
```json
{
  "metadata": {
    "home": {
      "title": "Your Title",
      "description": "Your Description"
    }
  }
}
```

## 🎬 Animations

All animations use Framer Motion:

- Fade-in on scroll (AnimatedSection component)
- Button hover effects (CSS transitions)
- Card lift on hover (card-lift class)
- WhatsApp button pulse (whatsapp-pulse animation)

## 🚀 Deployment

See `DEPLOYMENT.md` for detailed deployment instructions.

**Quick Deploy to Vercel:**
```bash
npm i -g vercel
vercel
```

## ⚡ Performance

Target metrics (Lighthouse):
- Performance: 90+
- Accessibility: 95+
- Best Practices: 95+
- SEO: 100

Optimizations included:
- Next.js Image component
- Code splitting
- Static generation
- Font optimization
- CSS purging (Tailwind)

## 🎯 Conversion Optimization

### High-Ticket Consulting Strategy

- No forms (reduces friction)
- WhatsApp-only contact (instant connection)
- Multiple CTAs (every section)
- Trust signals (transparency section)
- Professional design (premium feel)
- Clear value proposition

### CTA Placement

1. Hero section - Primary
2. End of each section - Secondary
3. Floating button - Always visible
4. Apply page - Dedicated CTA
5. Contact page - Alternative method

## 📊 Partner Approval (ApplyBoard/AbroadApply)

The site includes all required trust elements:

✅ Ethical consulting statement
✅ Accredited universities only
✅ No visa guarantees disclosure
✅ University network section
✅ Professional branding
✅ Clear contact information

## 🛠️ Troubleshooting

**Build errors:**
```bash
rm -rf .next node_modules
npm install
npm run build
```

**Port in use:**
```bash
npm run dev -- -p 3001
```

**Translation not showing:**
- Check the key exists in all language files
- Restart dev server
- Clear browser cache

## 📞 Support

For technical questions:
- Next.js: https://nextjs.org/docs
- Tailwind: https://tailwindcss.com/docs
- Framer Motion: https://www.framer.com/motion
- next-intl: https://next-intl-docs.vercel.app

---

**Ready to launch!** 🚀
