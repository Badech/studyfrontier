import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://studyfrontier.com';

interface MetadataConfig {
  namespace: string;
  path: string;
}

export async function generateMetadataForPage(
  locale: string,
  config: MetadataConfig
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `${config.namespace}.seo` });
  
  const title = t('title');
  const description = t('description');
  const ogImage = `${SITE_URL}/og/${config.namespace}-${locale}.png`;

  return {
    title,
    description,
    alternates: {
      canonical: `/${locale}${config.path}`,
      languages: {
        'en': `/en${config.path}`,
        'fr': `/fr${config.path}`,
        'ar': `/ar${config.path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: `${SITE_URL}/${locale}${config.path}`,
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
  };
}
