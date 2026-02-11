import { test, expect } from '@playwright/test';

test.describe('Locale routing', () => {
  test('should redirect root to /en', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/en');
  });

  test('should render English version', async ({ page }) => {
    await page.goto('/en');
    await expect(page.locator('h1').first()).toContainText('Study');
  });

  test('should render French version', async ({ page }) => {
    await page.goto('/fr');
    await expect(page.locator('h1').first()).toContainText('Étud');
  });

  test('should render Arabic version (LTR)', async ({ page }) => {
    await page.goto('/ar');
    await expect(page.locator('h1').first()).toContainText('ادرس');
    
    // Verify that dir is set to ltr, not rtl
    const htmlElement = page.locator('html');
    const dir = await htmlElement.getAttribute('dir');
    expect(dir).toBe('ltr');
  });

  test('locale switcher should work from English to French', async ({ page }) => {
    await page.goto('/en');
    
    // Click French locale button
    await page.getByRole('button', { name: 'Français' }).click();
    await expect(page).toHaveURL('/fr');
    await expect(page.locator('h1').first()).toContainText('Étud');
  });

  test('locale switcher should work from French to Arabic', async ({ page }) => {
    await page.goto('/fr');
    
    // Click Arabic locale button
    await page.getByRole('button', { name: 'العربية' }).click();
    await expect(page).toHaveURL('/ar');
    await expect(page.locator('h1').first()).toContainText('ادرس');
  });

  test('locale switcher should work from Arabic to English', async ({ page }) => {
    await page.goto('/ar');
    
    // Click English locale button
    await page.getByRole('button', { name: 'English' }).click();
    await expect(page).toHaveURL('/en');
    await expect(page.locator('h1').first()).toContainText('Study');
  });

  test('locale switcher preserves page path when switching locales', async ({ page }) => {
    await page.goto('/en/services');
    
    // Switch to French
    await page.getByRole('button', { name: 'Français' }).click();
    await expect(page).toHaveURL('/fr/services');
    
    // Switch to Arabic
    await page.getByRole('button', { name: 'العربية' }).click();
    await expect(page).toHaveURL('/ar/services');
  });

  test('all navigation links should be translated in each locale', async ({ page }) => {
    // English
    await page.goto('/en');
    await expect(page.getByRole('link', { name: 'Services' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Programs' })).toBeVisible();
    
    // French
    await page.goto('/fr');
    await expect(page.getByRole('link', { name: 'Services' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Programmes' })).toBeVisible();
    
    // Arabic
    await page.goto('/ar');
    await expect(page.getByRole('link', { name: 'الخدمات' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'البرامج' })).toBeVisible();
  });
});
