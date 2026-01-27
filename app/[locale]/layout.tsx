import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { setRequestLocale } from 'next-intl/server';
import { locales } from '@/i18n';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { WhatsAppFloat } from '@/components/WhatsAppFloat';
import { OrganizationSchema, ServiceSchema } from '@/components/Schema';
import { inter, arabic } from '../layout';
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
    <html lang={locale} dir={isRTL ? 'rtl' : 'ltr'}>
      <head>
        <OrganizationSchema />
        <ServiceSchema />
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1e3a8a" />
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
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
