# Quick Start Guide

## 🚀 Get Started in 3 Steps

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Environment (Optional)
```bash
# Copy example env file
cp .env.example .env.local

# Edit .env.local and add your WhatsApp number
NEXT_PUBLIC_WHATSAPP_NUMBER=+212XXXXXXXXX
```

### 3. Run Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) - you'll be redirected to `/en`

---

## 🌍 Test All Locales

- **English**: http://localhost:3000/en
- **French**: http://localhost:3000/fr
- **Arabic**: http://localhost:3000/ar (LTR layout)

---

## 🏗️ Build for Production

```bash
npm run build
npm start
```

---

## 🧪 Run Tests

```bash
# All tests
npm run test

# With UI
npm run test:ui
```

---

## 📁 Where to Add Content

### Add New Sections
Create in `components/sections/`:
- `Hero.tsx` (already in homepage)
- `Services.tsx`
- `Programs.tsx`
- `Testimonials.tsx`
- `FAQ.tsx`

### Add Forms
Create in `components/forms/`:
- `LeadForm.tsx` - Student inquiry form
- `PartnerForm.tsx` - University/partner form

### Add Translations
Edit `messages/*.json`:
- `messages/en.json` - English
- `messages/fr.json` - French
- `messages/ar.json` - Arabic

### Add Legal Pages
Create in `app/[locale]/`:
- `app/[locale]/privacy/page.tsx`
- `app/[locale]/terms/page.tsx`
- `app/[locale]/refund/page.tsx`

---

## 🎨 Customize Styles

### Colors
Edit `tailwind.config.ts` - change the color palette

### Typography
Edit `app/[locale]/layout.tsx` - change the font from Inter to your choice

### Theme
Edit `app/globals.css` - modify CSS variables for light/dark themes

---

## 🔧 Enable Optional Features

### Sentry Error Tracking
1. Get DSN from sentry.io
2. Add to `.env.local`:
   ```
   NEXT_PUBLIC_SENTRY_DSN=your-dsn-here
   ```
3. Uncomment initialization in `instrumentation.ts`

### Vercel Analytics
- Auto-enabled in production
- No configuration needed

---

## 📱 WhatsApp Integration

The WhatsApp button is the primary CTA. To customize:

1. Set your number in `.env.local`
2. Use `<WhatsAppButton />` component anywhere
3. Pass custom message: `<WhatsAppButton message="Custom text" />`

---

## 🎯 Key Components

```tsx
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { WhatsAppButton } from '@/components/whatsapp-button';
import { LocaleSwitcher } from '@/components/locale-switcher';
```

---

## 📚 Learn More

- [Next.js 14 Docs](https://nextjs.org/docs)
- [next-intl Docs](https://next-intl-docs.vercel.app/)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Radix UI Docs](https://www.radix-ui.com/docs/primitives)
- [Playwright Docs](https://playwright.dev/)

---

## 🆘 Common Issues

### Build fails with locale errors
Make sure you added `unstable_setRequestLocale(locale)` in your page components

### WhatsApp button doesn't work
Check that `NEXT_PUBLIC_WHATSAPP_NUMBER` is set in `.env.local`

### Styles not loading
Run `npm install` and ensure `tailwindcss` is installed

---

**Ready to build your education platform! 🎓**
