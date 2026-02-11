import { test, expect } from '@playwright/test';

test.describe('Mobile menu', () => {
  test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE viewport

  test('mobile menu button should be visible on mobile', async ({ page }) => {
    await page.goto('/en');
    
    // Toggle menu button should be visible
    const menuButton = page.getByRole('button', { name: /toggle menu/i });
    await expect(menuButton).toBeVisible();
  });

  test('mobile menu should open when toggle button is clicked', async ({ page }) => {
    await page.goto('/en');
    
    // Menu should be closed initially (nav links not visible)
    const servicesLink = page.getByRole('link', { name: 'Services' }).first();
    await expect(servicesLink).not.toBeVisible();
    
    // Click toggle button
    const menuButton = page.getByRole('button', { name: /toggle menu/i });
    await menuButton.click();
    
    // Wait for animation
    await page.waitForTimeout(300);
    
    // Menu links should now be visible
    await expect(servicesLink).toBeVisible();
    await expect(page.getByRole('link', { name: 'Programs' }).first()).toBeVisible();
    await expect(page.getByRole('link', { name: 'FAQ' }).first()).toBeVisible();
  });

  test('mobile menu should close when toggle button is clicked again', async ({ page }) => {
    await page.goto('/en');
    
    const menuButton = page.getByRole('button', { name: /toggle menu/i });
    
    // Open menu
    await menuButton.click();
    await page.waitForTimeout(300);
    
    const servicesLink = page.getByRole('link', { name: 'Services' }).first();
    await expect(servicesLink).toBeVisible();
    
    // Close menu
    await menuButton.click();
    await page.waitForTimeout(300);
    
    // Menu should be closed
    await expect(servicesLink).not.toBeVisible();
  });

  test('mobile menu should close when a navigation link is clicked', async ({ page }) => {
    await page.goto('/en');
    
    const menuButton = page.getByRole('button', { name: /toggle menu/i });
    
    // Open menu
    await menuButton.click();
    await page.waitForTimeout(300);
    
    // Click a navigation link
    const servicesLink = page.getByRole('link', { name: 'Services' }).first();
    await servicesLink.click();
    
    // Wait for navigation
    await page.waitForURL('/en/services');
    
    // Go back to home
    await page.goto('/en');
    
    // Menu should be closed (links not visible in collapsed state)
    await expect(page.getByRole('link', { name: 'Programs' }).first()).not.toBeVisible();
  });

  test('mobile menu should work in all locales', async ({ page }) => {
    const locales = [
      { code: 'en', link: 'Services' },
      { code: 'fr', link: 'Services' },
      { code: 'ar', link: 'الخدمات' }
    ];
    
    for (const locale of locales) {
      await page.goto(`/${locale.code}`);
      
      const menuButton = page.getByRole('button', { name: /toggle menu|basculer le menu|تبديل القائمة/i });
      await menuButton.click();
      await page.waitForTimeout(300);
      
      const link = page.getByRole('link', { name: locale.link }).first();
      await expect(link).toBeVisible();
      
      // Close menu
      await menuButton.click();
      await page.waitForTimeout(300);
    }
  });

  test('mobile menu should show locale switcher', async ({ page }) => {
    await page.goto('/en');
    
    // Open menu
    const menuButton = page.getByRole('button', { name: /toggle menu/i });
    await menuButton.click();
    await page.waitForTimeout(300);
    
    // Locale switcher buttons should be visible
    await expect(page.getByRole('button', { name: 'English' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Français' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'العربية' })).toBeVisible();
  });
});
