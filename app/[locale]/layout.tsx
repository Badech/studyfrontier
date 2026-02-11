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
import "../globals.css";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }) {
  const t = await getTranslations({ locale, namespace: 'metadata.home' });
  
  return {
    title: t('title'),
    description: t('description'),
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
    <html lang={locale} dir="ltr" suppressHydrationWarning>
      <body className={inter.className}>
        <NextIntlClientProvider messages={messages}>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">
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
