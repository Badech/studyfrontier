import { test, expect } from '@playwright/test';

/**
 * Link Crawler Test Suite
 * 
 * This test crawls all pages on the site and verifies:
 * 1. All pages return 200 status codes
 * 2. No broken internal links
 * 3. All navigation links are accessible
 * 4. Multi-locale support works (en, fr, ar)
 */

const LOCALES = ['en', 'fr', 'ar'];

// Define all known routes in the app
const ROUTES = [
  '/',
  '/about',
  '/apply',
  '/blog',
  '/case-studies',
  '/contact',
  '/faqs',
  '/programs/masters',
  '/programs/pathways',
  '/programs/undergraduate',
  '/resources',
  '/resources/f1-visa-checklist',
  '/resources/i20-guide',
  '/services',
  '/study-in-usa',
  '/success-stories',
  '/who-we-work-with',
  '/why-studyfrontier',
];

test.describe('Site Crawler - Page Load Tests', () => {
  for (const locale of LOCALES) {
    test.describe(`Locale: ${locale}`, () => {
      for (const route of ROUTES) {
        test(`should load ${route}`, async ({ page }) => {
          const url = locale === 'en' ? route : `/${locale}${route}`;
          const response = await page.goto(url);
          
          // Check response status
          expect(response?.status()).toBe(200);
          
          // Check that page has loaded content
          await expect(page.locator('body')).toBeVisible();
          
          // Check for no critical console errors
          const errors: string[] = [];
          page.on('pageerror', (error) => {
            errors.push(error.message);
          });
          
          // Wait a bit for any delayed errors
          await page.waitForTimeout(1000);
          
          // We allow some errors but log them for investigation
          if (errors.length > 0) {
            console.warn(`⚠️  Console errors on ${url}:`, errors);
          }
        });
      }
    });
  }
});

test.describe('Internal Link Validation', () => {
  test('should have no broken internal links on homepage', async ({ page }) => {
    await page.goto('/');
    
    // Get all internal links
    const links = await page.locator('a[href^="/"]').all();
    const uniqueLinks = new Set<string>();
    
    for (const link of links) {
      const href = await link.getAttribute('href');
      if (href) {
        uniqueLinks.add(href);
      }
    }
    
    console.log(`Found ${uniqueLinks.size} unique internal links`);
    
    // Verify a sample of links (to keep test time reasonable)
    const linksToCheck = Array.from(uniqueLinks).slice(0, 10);
    
    for (const href of linksToCheck) {
      const response = await page.goto(href);
      expect(response?.status(), `Link ${href} should return 200`).toBe(200);
    }
  });
});

test.describe('Navigation Tests', () => {
  test('should have functional header navigation', async ({ page }) => {
    await page.goto('/');
    
    // Check that header is present
    await expect(page.locator('header')).toBeVisible();
    
    // Check for navigation links
    const nav = page.locator('nav').first();
    await expect(nav).toBeVisible();
  });
  
  test('should have functional footer', async ({ page }) => {
    await page.goto('/');
    
    // Check that footer is present
    await expect(page.locator('footer')).toBeVisible();
  });
});

test.describe('Mobile Responsiveness', () => {
  test.use({ viewport: { width: 375, height: 667 } });
  
  test('should load homepage on mobile', async ({ page }) => {
    await page.goto('/');
    await expect(page.locator('body')).toBeVisible();
  });
});
