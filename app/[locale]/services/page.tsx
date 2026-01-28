import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';
import ServicesPageClient from './ServicesPageClient';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://studyfrontier.com';

export async function generateMetadata({ 
  params: { locale } 
}: { 
  params: { locale: string } 
}): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: 'services.seo' });
  
  const title = t('title');
  const description = t('description');
  const path = '/services';
  const ogImage = `${SITE_URL}/og/services-${locale}.png`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${path}`,
      languages: {
        'en': `/en${path}`,
        'fr': `/fr${path}`,
        'ar': `/ar${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}${path}`,
      siteName: 'StudyFrontier',
      images: [{ url: ogImage, width: 1200, height: 630, alt: title }],
      locale: locale === 'ar' ? 'ar_MA' : locale === 'fr' ? 'fr_FR' : 'en_US',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogImage],
    },
  };
}

export default function ServicesPage() {
  return <ServicesPageClient />;
}

