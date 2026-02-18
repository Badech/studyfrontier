import { MetadataRoute } from 'next';
import { locales } from '@/i18n';

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://studyfrontier.com';
  
  // Define all pages
  const pages = ['', '/privacy', '/terms', '/refund', '/cookies', '/about'];
  
  // Generate URLs for all locales and pages
  const urls: MetadataRoute.Sitemap = [];
  
  // Add root redirect
  urls.push({
    url: siteUrl,
    lastModified: new Date(),
    changeFrequency: 'monthly',
    priority: 1,
  });
  
  // Add all locale-specific pages
  locales.forEach((locale) => {
    pages.forEach((page) => {
      urls.push({
        url: `${siteUrl}/${locale}${page}`,
        lastModified: new Date(),
        changeFrequency: page === '' ? 'weekly' : 'monthly',
        priority: page === '' ? 1 : 0.8,
        alternates: {
          languages: Object.fromEntries(
            locales.map((l) => [l, `${siteUrl}/${l}${page}`])
          ),
        },
      });
    });
  });
  
  return urls;
}
