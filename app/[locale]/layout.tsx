import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, unstable_setRequestLocale, getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { locales } from '@/i18n';
import { Analytics } from '@/lib/analytics';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { FloatingWhatsApp } from '@/components/floating-whatsapp';
import { SkipLink } from '@/components/skip-link';
import { StructuredData, getOrganizationSchema, getWebsiteSchema, getEducationalOrganizationSchema } from '@/lib/structured-data';
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'metadata.home' });
  
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://studyfrontier.com';
  const currentUrl = `${siteUrl}/${locale}`;
  
  return {
    title: t('title'),
    description: t('description'),
    keywords: t('keywords'),
    authors: [{ name: 'StudyFrontier', url: siteUrl }],
    creator: 'StudyFrontier',
    publisher: 'StudyFrontier',
    formatDetection: {
      email: false,
      address: false,
      telephone: false,
    },
    metadataBase: new URL(siteUrl),
    alternates: {
      canonical: currentUrl,
      languages: {
        'en': `${siteUrl}/en`,
        'fr': `${siteUrl}/fr`,
        'ar': `${siteUrl}/ar`,
      },
    },
    openGraph: {
      title: t('title'),
      description: t('description'),
      url: currentUrl,
      siteName: 'StudyFrontier',
      locale: locale,
      type: 'website',
      images: [
        {
          url: `${siteUrl}/images/og-image.png`,
          width: 1200,
          height: 630,
          alt: 'StudyFrontier - Study in USA',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: t('title'),
      description: t('description'),
      images: [`${siteUrl}/images/og-image.png`],
      creator: '@studyfrontier',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    icons: {
      icon: '/favicon.ico',
      apple: '/apple-touch-icon.png',
    },
    manifest: '/site.webmanifest',
    verification: {
      // Add your verification codes when ready
      // google: 'your-google-verification-code',
      // yandex: 'your-yandex-verification-code',
      // bing: 'your-bing-verification-code',
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Ensure that the incoming `locale` is valid
  if (!locales.includes(locale as any)) {
    notFound();
  }

  // Enable static rendering
  unstable_setRequestLocale(locale);

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <html lang={locale} dir="ltr" suppressHydrationWarning className="overflow-x-hidden">
      <head>
        <StructuredData data={getOrganizationSchema()} />
        <StructuredData data={getWebsiteSchema(locale)} />
        <StructuredData data={getEducationalOrganizationSchema()} />
      </head>
      <body className={`${inter.className} overflow-x-hidden`}>
        <NextIntlClientProvider messages={messages}>
          <SkipLink />
          <div className="flex min-h-screen flex-col overflow-x-hidden w-full">
            <Navbar />
            <main id="main-content" className="flex-1 overflow-x-hidden w-full" tabIndex={-1}>
              {children}
            </main>
            <Footer />
            <FloatingWhatsApp />
          </div>
          <Analytics />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
