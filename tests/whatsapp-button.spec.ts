import { test, expect } from '@playwright/test';

test.describe('WhatsApp button', () => {
  test('WhatsApp button should be present on desktop', async ({ page }) => {
    await page.goto('/en');
    
    // Desktop WhatsApp button in navbar
    const whatsappButton = page.getByRole('button', { name: /chat on whatsapp/i }).first();
    await expect(whatsappButton).toBeVisible();
  });

  test('WhatsApp button should be clickable and have correct attributes', async ({ page }) => {
    await page.goto('/en');
    
    const whatsappButton = page.getByRole('button', { name: /chat on whatsapp/i }).first();
    
    // Button should be enabled and clickable
    await expect(whatsappButton).toBeEnabled();
    
    // Click should not throw
    await whatsappButton.click();
  });

  test('WhatsApp button should be present on all locales', async ({ page }) => {
    const locales = [
      { code: 'en', text: /chat on whatsapp/i },
      { code: 'fr', text: /discuter sur whatsapp/i },
      { code: 'ar', text: /واتساب/i }
    ];
    
    for (const locale of locales) {
      await page.goto(`/${locale.code}`);
      const whatsappButton = page.getByRole('button', { name: locale.text }).first();
      await expect(whatsappButton).toBeVisible();
    }
  });

  test('floating WhatsApp button should be present on mobile', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/en');
    
    // Floating WhatsApp button should have aria-label
    const floatingButton = page.getByRole('button', { name: /contact us on whatsapp/i });
    await expect(floatingButton).toBeVisible();
  });

  test('WhatsApp button should open in new window', async ({ page, context }) => {
    await page.goto('/en');
    
    // Listen for new page/popup
    const popupPromise = context.waitForEvent('page');
    
    const whatsappButton = page.getByRole('button', { name: /chat on whatsapp/i }).first();
    await whatsappButton.click();
    
    // Wait for the popup
    const popup = await popupPromise;
    
    // Verify the URL contains WhatsApp
    await popup.waitForLoadState();
    const url = popup.url();
    expect(url).toContain('wa.me');
  });

  test('WhatsApp button should be accessible via keyboard', async ({ page }) => {
    await page.goto('/en');
    
    // Tab to the WhatsApp button (it should be in tab order)
    await page.keyboard.press('Tab');
    // Continue tabbing until we reach a WhatsApp button
    let attempts = 0;
    while (attempts < 20) {
      const focused = await page.evaluate(() => document.activeElement?.textContent);
      if (focused && /whatsapp/i.test(focused)) {
        break;
      }
      await page.keyboard.press('Tab');
      attempts++;
    }
    
    // Press Enter to activate
    await page.keyboard.press('Enter');
    
    // Should not throw and button should still be there
    const whatsappButton = page.getByRole('button', { name: /chat on whatsapp/i }).first();
    await expect(whatsappButton).toBeVisible();
  });

  test('WhatsApp button should have proper aria-label', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('/en');
    
    // Floating button should have aria-label
    const floatingButton = page.locator('button[aria-label*="WhatsApp"]').first();
    await expect(floatingButton).toBeVisible();
    
    const ariaLabel = await floatingButton.getAttribute('aria-label');
    expect(ariaLabel).toBeTruthy();
    expect(ariaLabel?.toLowerCase()).toContain('whatsapp');
  });

  test('WhatsApp button should be visible on all pages', async ({ page }) => {
    const pages = ['', '/services', '/programs', '/contact', '/faq'];
    
    for (const pagePath of pages) {
      await page.goto(`/en${pagePath}`);
      const whatsappButton = page.getByRole('button', { name: /chat on whatsapp/i }).first();
      await expect(whatsappButton).toBeVisible();
    }
  });
});
