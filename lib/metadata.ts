import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://studyfrontier.com';
const SITE_NAME = 'StudyFrontier';

interface MetadataParams {
  locale: string;
  path: string;
}

/**
 * Generate page-specific metadata with i18n support
 * @param locale - Current locale (en, fr, ar)
 * @param namespace - Translation namespace (e.g., 'home', 'services')
 * @param path - Page path without locale (e.g., '/', '/services')
 */
export async function generatePageMetadata(
  locale: string,
  namespace: string,
  path: string
): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: `${namespace}.seo` });
  
  const title = t('title');
  const description = t('description');
  const canonicalUrl = `${SITE_URL}/${locale}${path}`;
  const ogImage = `${SITE_URL}/og/${namespace}-${locale}.png`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en': `${SITE_URL}/en${path}`,
        'fr': `${SITE_URL}/fr${path}`,
        'ar': `${SITE_URL}/ar${path}`,
      },
    },
    openGraph: {
      title,
      description,
      url: canonicalUrl,
      siteName: SITE_NAME,
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
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

/**
 * Generate default metadata for pages without custom metadata
 */
export async function generateDefaultMetadata(locale: string): Promise<Metadata> {
  return generatePageMetadata(locale, 'home', '/');
}
