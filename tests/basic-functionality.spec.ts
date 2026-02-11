import { test, expect } from '@playwright/test';

test.describe('Basic functionality smoke tests', () => {
  test('homepage loads successfully in all locales', async ({ page }) => {
    const locales = ['en', 'fr', 'ar'];
    
    for (const locale of locales) {
      await page.goto(`/${locale}`);
      await expect(page.locator('h1').first()).toBeVisible();
      await expect(page.locator('nav')).toBeVisible();
      await expect(page.locator('footer')).toBeVisible();
    }
  });

  test('all main pages are accessible', async ({ page }) => {
    const pages = [
      '/en',
      '/en/services',
      '/en/programs',
      '/en/how-it-works',
      '/en/faq',
      '/en/contact',
      '/en/partner-with-us'
    ];
    
    for (const pagePath of pages) {
      await page.goto(pagePath);
      expect(page.url()).toContain(pagePath);
      await expect(page.locator('main')).toBeVisible();
    }
  });

  test('navigation links work', async ({ page }) => {
    await page.goto('/en');
    
    // Click Services
    await page.getByRole('link', { name: 'Services' }).first().click();
    await expect(page).toHaveURL('/en/services');
    
    // Click Programs
    await page.getByRole('link', { name: 'Programs' }).first().click();
    await expect(page).toHaveURL('/en/programs');
  });

  test('page has valid HTML lang attribute', async ({ page }) => {
    await page.goto('/en');
    const lang = await page.locator('html').getAttribute('lang');
    expect(lang).toBe('en');
    
    await page.goto('/fr');
    const langFr = await page.locator('html').getAttribute('lang');
    expect(langFr).toBe('fr');
    
    await page.goto('/ar');
    const langAr = await page.locator('html').getAttribute('lang');
    expect(langAr).toBe('ar');
  });
});
