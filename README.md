# Edu Agency Platform

Professional study abroad consulting platform built with Next.js 14.2, TypeScript, and Tailwind CSS.

## Features

- 🌍 **Multi-language Support**: English, French, and Arabic (LTR)
- 📱 **Mobile-First Design**: Optimized for all devices
- ♿ **Accessibility**: WCAG compliant with automated testing
- 🎨 **Modern UI**: Radix UI components with Framer Motion animations
- 📊 **Analytics**: Vercel Analytics integration
- 🐛 **Error Tracking**: Sentry integration scaffold
- 🧪 **Testing**: Playwright with accessibility testing via axe

## Tech Stack

- **Framework**: Next.js 14.2 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4 + tailwindcss-animate
- **i18n**: next-intl 3.9
- **UI Components**: Radix UI
- **Icons**: Lucide React
- **Animation**: Framer Motion 11
- **Utilities**: CVA (Class Variance Authority)
- **Testing**: Playwright + @axe-core/playwright
- **Analytics**: Vercel Analytics
- **Error Tracking**: Sentry

## Getting Started

### Prerequisites

- Node.js 18.17.0 or later
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file based on `.env.example`:

```bash
cp .env.example .env.local
```

4. Configure your environment variables (especially WhatsApp number)

### Development

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser. You'll be redirected to `/en`.

### Building

Build the production application:

```bash
npm run build
```

Start the production server:

```bash
npm start
```

### Testing

Run Playwright tests:

```bash
npm run test
```

Run tests with UI:

```bash
npm run test:ui
```

### Linting

```bash
npm run lint
```

## Project Structure

```
├── app/
│   ├── [locale]/           # Locale-based routing
│   │   ├── layout.tsx      # Root layout with i18n
│   │   └── page.tsx        # Homepage
│   └── globals.css         # Global styles
├── components/
│   ├── ui/                 # Base UI components (Button, Card, etc.)
│   ├── sections/           # Page sections (Hero, Trust, etc.)
│   ├── forms/              # Forms (LeadForm, PartnerForm)
│   ├── whatsapp-button.tsx # WhatsApp CTA component
│   └── locale-switcher.tsx # Language switcher
├── lib/
│   ├── utils.ts            # Utility functions
│   ├── env.ts              # Environment variables
│   └── analytics.tsx       # Vercel Analytics wrapper
├── messages/
│   ├── en.json             # English translations
│   ├── fr.json             # French translations
│   └── ar.json             # Arabic translations
├── tests/
│   ├── accessibility.spec.ts # Accessibility tests
│   └── locale-routing.spec.ts # Routing tests
├── i18n.ts                 # i18n configuration
├── middleware.ts           # Next.js middleware for locale routing
└── next.config.js          # Next.js configuration
```

## Localization

The platform supports three languages:

- **English (en)**: Default locale
- **French (fr)**: Full French translation
- **Arabic (ar)**: Moroccan Darija in Arabic script, **LTR layout**

Note: Arabic locale intentionally uses LTR (left-to-right) layout as specified in requirements.

### Adding Translations

Edit the JSON files in the `messages/` directory:

- `messages/en.json`
- `messages/fr.json`
- `messages/ar.json`

## WhatsApp Integration

The platform features WhatsApp as the primary CTA. Configure in `.env.local`:

```env
NEXT_PUBLIC_WHATSAPP_NUMBER=+212XXXXXXXXX
NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE=Hello, I want to learn more
```

## Sentry Integration

Sentry is scaffolded but disabled by default. To enable:

1. Get your Sentry DSN from sentry.io
2. Add to `.env.local`:

```env
NEXT_PUBLIC_SENTRY_DSN=your-dsn-here
```

3. Uncomment the initialization in `instrumentation.ts`

## Vercel Analytics

Vercel Analytics is automatically enabled in production. No configuration needed.

## ICEF Compliance

The platform is designed to meet ICEF (International Consultants for Education and Fairs) standards:

- ✅ Transparent fee disclosure
- ✅ No visa guarantees
- ✅ Clear disclaimers
- ✅ Professional presentation
- ✅ Legal pages structure

## License

Private - All rights reserved

## Support

For questions or support, contact via WhatsApp using the configured number.
