# StudyFrontier

A premium international education consulting website built with Next.js 14, Tailwind CSS, and shadcn/ui.

## Features

- 🌍 Full internationalization (English, French, Darija/Arabic)
- 🎨 Premium design with navy, white, and gold gradient color scheme
- 📱 Fully responsive and mobile-optimized
- ⚡ Next.js 14 App Router for optimal performance
- 🎭 Smooth animations with Framer Motion
- 📈 SEO optimized with Schema.org markup
- 💬 WhatsApp integration for high-conversion lead generation
- ♿ Accessible and WCAG compliant

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** Tailwind CSS
- **Components:** shadcn/ui
- **Animations:** Framer Motion
- **i18n:** next-intl
- **Language:** TypeScript
- **Deployment:** Vercel-ready

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
├── app/                    # Next.js App Router pages
│   ├── [locale]/          # Localized routes
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # shadcn/ui components
│   └── ...               # Custom components
├── messages/             # i18n translations
│   ├── en.json
│   ├── fr.json
│   └── ar.json
├── lib/                  # Utility functions
└── public/              # Static assets
```

## Internationalization

The site supports three languages:
- English (en) - Default
- French (fr)
- Darija/Arabic (ar)

All content is managed through JSON files in the `messages/` directory.

## Deployment

This project is optimized for deployment on Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new)

## Contact

**StudyFrontier**  
Kenitra, Morocco  
Email: contact@studyfrontier.com  
Phone: +212 708 026 571

---

© 2024 StudyFrontier. All rights reserved.
