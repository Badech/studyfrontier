import { BRAND_CONFIG } from '@/lib/config/brand';

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || BRAND_CONFIG.websiteUrl;

type JsonLd = Record<string, any>;

export function getOrganizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: BRAND_CONFIG.brandName,
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description: 'Professional study abroad consulting for international students seeking to study in the USA',
    email: BRAND_CONFIG.email.primary,
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: BRAND_CONFIG.whatsapp.numberE164,
      email: BRAND_CONFIG.email.primary,
      contactType: 'Customer Service',
      availableLanguage: BRAND_CONFIG.languages.supported,
      areaServed: {
        '@type': 'Country',
        name: BRAND_CONFIG.location.country,
      },
    },
    sameAs: [
      // Add social media profiles when available
      // Example: 'https://www.instagram.com/studyfrontier',
    ].filter(Boolean),
    address: {
      '@type': 'PostalAddress',
      addressCountry: BRAND_CONFIG.location.countryCode,
      addressRegion: BRAND_CONFIG.location.country,
    },
    areaServed: {
      '@type': 'Country',
      name: BRAND_CONFIG.location.country,
    },
  };
}

export function getWebsiteSchema(locale: string): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: BRAND_CONFIG.brandName,
    url: `${siteUrl}/${locale}`,
    description: 'Study in the USA - Professional guidance for international students',
    inLanguage: locale,
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${siteUrl}/${locale}?q={search_term_string}`,
      },
      'query-input': 'required name=search_term_string',
    },
  };
}

export function getBreadcrumbSchema(
  locale: string,
  items: Array<{ name: string; url?: string }>
): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      ...(item.url && { item: `${siteUrl}${item.url}` }),
    })),
  };
}

export function getEducationalOrganizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: BRAND_CONFIG.brandName,
    url: siteUrl,
    description: 'Study abroad consulting agency helping international students apply to universities in the United States',
    areaServed: {
      '@type': 'Country',
      name: BRAND_CONFIG.location.country,
    },
    serviceType: [
      'Educational Consulting',
      'University Application Support',
      'Visa Preparation Guidance',
      'Document Review Services',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Education Consulting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'University Selection',
            description: 'Expert guidance on choosing universities and programs based on academic profile and career goals',
            serviceType: 'Educational Consulting',
            areaServed: {
              '@type': 'Country',
              name: BRAND_CONFIG.location.country,
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Application Support',
            description: 'Step-by-step assistance with university applications and document preparation',
            serviceType: 'Application Consulting',
            areaServed: {
              '@type': 'Country',
              name: BRAND_CONFIG.location.country,
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Document Review',
            description: 'Professional review of application documents to ensure completeness',
            serviceType: 'Document Services',
            areaServed: {
              '@type': 'Country',
              name: BRAND_CONFIG.location.country,
            },
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Visa Interview Preparation',
            description: 'Coaching and preparation for student visa interviews',
            serviceType: 'Visa Consulting',
            areaServed: {
              '@type': 'Country',
              name: BRAND_CONFIG.location.country,
            },
          },
        },
      ],
    },
  };
}

interface StructuredDataProps {
  data: JsonLd;
}

export function StructuredData({ data }: StructuredDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
