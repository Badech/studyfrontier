export function OrganizationSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'EducationalOrganization',
    name: 'StudyFrontier',
    description: 'An international education consulting agency helping students access U.S. universities.',
    url: 'https://studyfrontier.com',
    logo: 'https://studyfrontier.com/logo.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Kenitra',
      addressCountry: 'MA'
    },
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+212-708-026-571',
      contactType: 'Customer Service',
      email: 'contact@studyfrontier.com',
      availableLanguage: ['English', 'French', 'Arabic']
    },
    sameAs: [
      'https://wa.me/212708026571'
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema() {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Service',
    serviceType: 'International Education Consulting',
    provider: {
      '@type': 'EducationalOrganization',
      name: 'StudyFrontier'
    },
    areaServed: {
      '@type': 'Country',
      name: 'Morocco'
    },
    audience: {
      '@type': 'EducationalAudience',
      educationalRole: 'student'
    },
    offers: {
      '@type': 'Offer',
      description: 'University admissions consulting, F-1 visa preparation, pathway programs, and pre-departure guidance'
    }
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
