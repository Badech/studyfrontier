import { NextIntlClientProvider } from 'next-intl';
import { TranslationGuard } from '@/components/TranslationGuard';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { OrganizationSchema, ServiceSchema } from '@/components/Schema';
import { dmSans, inter, arabic } from '../layout';
import '../globals.css';

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  const messages = await getMessages();

  const isRTL = locale === 'ar';
  const fontClassName = `${inter.className} ${isRTL ? arabic.className : ''}`.trim();

  return (
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'} className={`${dmSans.variable} ${inter.variable} ${arabic.variable}`}>
      <head>
        <OrganizationSchema />
        <ServiceSchema />
        
        {/* Modern SVG Favicon - Auto dark mode support */}
        <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
        <link rel="alternate icon" type="image/svg+xml" href="/favicon-light.svg" media="(prefers-color-scheme: dark)" />
        
        {/* Fallback PNG favicons for older browsers */}
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16.png" />
        
        {/* Apple Touch Icon - Premium design */}
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.svg" />
        
        {/* Android Chrome Icons */}
        <link rel="icon" type="image/svg+xml" sizes="192x192" href="/icon-192.svg" />
        <link rel="icon" type="image/svg+xml" sizes="512x512" href="/icon-512.svg" />
        
        {/* Web App Manifest */}
        <link rel="manifest" href="/site.webmanifest" />
        
        {/* Theme Colors - Navy brand color */}
        <meta name="theme-color" content="#172554" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1e3a8a" media="(prefers-color-scheme: dark)" />
        
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={`${fontClassName} antialiased`}>
        <NextIntlClientProvider messages={messages}>
          {/* Skip to Content Link for Accessibility */}
          <a href="#main-content" className="skip-to-content">
            Skip to main content
          </a>
          
          <Header locale={locale} />
          
          <main id="main-content" className="min-h-screen pt-20" role="main">
            {children}
          </main>
          
          <Footer locale={locale} />
          <WhatsAppFloat />
          <TranslationGuard />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
