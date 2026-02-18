const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://studyfrontier.com';

type JsonLd = Record<string, any>;

export function getOrganizationSchema(): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'StudyFrontier',
    url: siteUrl,
    logo: `${siteUrl}/images/logo.png`,
    description: 'Professional study abroad consulting for Moroccan students seeking to study in the USA',
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+212XXXXXXXXX',
      contactType: 'Customer Service',
      availableLanguage: ['English', 'French', 'Arabic'],
      areaServed: 'MA',
    },
    sameAs: [
      // Add your social media profiles here when ready
      // 'https://www.facebook.com/studyfrontier',
      // 'https://www.instagram.com/studyfrontier',
      // 'https://www.linkedin.com/company/studyfrontier',
    ],
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'MA',
      addressRegion: 'Morocco',
    },
  };
}

export function getWebsiteSchema(locale: string): JsonLd {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'StudyFrontier',
    url: `${siteUrl}/${locale}`,
    description: 'Study in the USA - Professional guidance for Moroccan students',
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
    name: 'StudyFrontier',
    url: siteUrl,
    description: 'Study abroad consulting agency helping Moroccan students apply to universities in the United States',
    areaServed: {
      '@type': 'Country',
      name: 'Morocco',
    },
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Education Consulting Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'University Application Guidance',
            description: 'Expert guidance on US university applications',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Visa Support',
            description: 'Support with student visa application process',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Scholarship Assistance',
            description: 'Help finding and applying for scholarships',
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
