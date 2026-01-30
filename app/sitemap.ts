import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://studyfrontier.com';
  const languages = ['en', 'fr', 'ar'];
  const pages = [
    '',
    '/about',
    '/services',
    '/contact',
    '/apply',
    '/faqs',
    '/blog',
    '/resources',
    '/case-studies',
    '/success-stories',
    '/study-in-usa',
    '/who-we-work-with',
    '/why-studyfrontier',
    '/programs/undergraduate',
    '/programs/masters',
    '/programs/pathways',
    '/resources/f1-visa-checklist',
    '/resources/i20-guide',
  ];

  const routes: MetadataRoute.Sitemap = [];

  languages.forEach((lang) => {
    pages.forEach((page) => {
      routes.push({
        url: `${baseUrl}/${lang}${page}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: page === '' ? 1 : 0.8,
      });
    });
  });

  return routes;
}
