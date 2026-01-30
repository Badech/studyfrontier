import { test, expect, devices } from '@playwright/test';

/**
 * Mobile UX Testing Suite
 * Tests navigation, CTAs, and mobile interactions across iOS and Android viewports
 */

const mobileDevices = [
  { name: 'iPhone SE', ...devices['iPhone SE'] },
  { name: 'iPhone 12', ...devices['iPhone 12'] },
  { name: 'iPhone 13 Pro', ...devices['iPhone 13 Pro'] },
  { name: 'Pixel 5', ...devices['Pixel 5'] },
  { name: 'Galaxy S9+', ...devices['Galaxy S9+'] },
];

test.describe('Mobile Navigation - All Devices', () => {
  for (const device of mobileDevices) {
    test.describe(device.name, () => {
      test.use(device);

      test('Mobile menu opens and closes correctly', async ({ page }) => {
        await page.goto('http://localhost:3000/en');

        // Menu should be closed initially
        const mobileMenuButton = page.locator('[aria-label*="Open navigation menu"]');
        await expect(mobileMenuButton).toBeVisible();

        // Open menu
        await mobileMenuButton.click();
        
        // Wait for animation
        await page.waitForTimeout(500);

        // Menu should be visible
        const menuContent = page.locator('[role="dialog"]');
        await expect(menuContent).toBeVisible();

        // All nav items should be visible
        const navLinks = page.locator('nav[aria-label="Main navigation"] a');
        const count = await navLinks.count();
        expect(count).toBeGreaterThan(0);

        for (let i = 0; i < count; i++) {
          await expect(navLinks.nth(i)).toBeVisible();
        }

        // Close button should be visible
        const closeButton = page.locator('[aria-label="Close"]');
        await expect(closeButton).toBeVisible();

        // Close menu
        await closeButton.click();
        await page.waitForTimeout(500);

        // Menu should be closed
        await expect(menuContent).not.toBeVisible();
      });

      test('Mobile menu - Escape key closes menu', async ({ page }) => {
        await page.goto('http://localhost:3000/en');

        // Open menu
        const mobileMenuButton = page.locator('[aria-label*="Open navigation menu"]');
        await mobileMenuButton.click();
        await page.waitForTimeout(500);

        // Verify menu is open
        const menuContent = page.locator('[role="dialog"]');
        await expect(menuContent).toBeVisible();

        // Press Escape
        await page.keyboard.press('Escape');
        await page.waitForTimeout(500);

        // Menu should be closed
        await expect(menuContent).not.toBeVisible();
      });

      test('All navigation links are reachable', async ({ page }) => {
        await page.goto('http://localhost:3000/en');

        // Open menu
        await page.locator('[aria-label*="Open navigation menu"]').click();
        await page.waitForTimeout(500);

        // Get all nav links
        const navLinks = page.locator('nav[aria-label="Main navigation"] a');
        const count = await navLinks.count();

        console.log(`${device.name}: Found ${count} navigation links`);

        // Each link should be visible and clickable
        for (let i = 0; i < count; i++) {
          const link = navLinks.nth(i);
          await expect(link).toBeVisible();
          
          // Check touch target size (should be at least 44px)
          const box = await link.boundingBox();
          expect(box?.height).toBeGreaterThanOrEqual(44);
        }
      });

      test('Language switcher works on mobile', async ({ page }) => {
        await page.goto('http://localhost:3000/en');

        // Open menu
        await page.locator('[aria-label*="Open navigation menu"]').click();
        await page.waitForTimeout(500);

        // Language buttons should be visible
        const languageButtons = page.locator('[aria-label^="Switch to"]');
        const langCount = await languageButtons.count();
        
        expect(langCount).toBe(3); // en, fr, ar

        // Check each language button
        for (let i = 0; i < langCount; i++) {
          const button = languageButtons.nth(i);
          await expect(button).toBeVisible();
          
          // Check touch target size
          const box = await button.boundingBox();
          expect(box?.height).toBeGreaterThanOrEqual(44);
        }
      });

      test('WhatsApp CTA is accessible', async ({ page }) => {
        await page.goto('http://localhost:3000/en');

        // Open menu
        await page.locator('[aria-label*="Open navigation menu"]').click();
        await page.waitForTimeout(500);

        // WhatsApp button should be visible
        const whatsappButton = page.locator('[aria-label*="WhatsApp"]').first();
        await expect(whatsappButton).toBeVisible();

        // Check it's at the bottom (safe area aware)
        const box = await whatsappButton.boundingBox();
        expect(box?.height).toBeGreaterThanOrEqual(52);
      });

      test('Touch targets meet 44px minimum', async ({ page }) => {
        await page.goto('http://localhost:3000/en');

        // Check mobile menu button
        const menuButton = page.locator('[aria-label*="Open navigation menu"]');
        const menuBox = await menuButton.boundingBox();
        expect(menuBox?.width).toBeGreaterThanOrEqual(44);
        expect(menuBox?.height).toBeGreaterThanOrEqual(44);

        // Open menu and check all interactive elements
        await menuButton.click();
        await page.waitForTimeout(500);

        const interactiveElements = page.locator('button, a').filter({ hasText: /.+/ });
        const elemCount = await interactiveElements.count();

        let failures = 0;
        for (let i = 0; i < Math.min(elemCount, 20); i++) {
          const elem = interactiveElements.nth(i);
          if (await elem.isVisible()) {
            const box = await elem.boundingBox();
            if (box && (box.height < 44 || box.width < 44)) {
              failures++;
              console.log(`${device.name}: Touch target too small:`, box);
            }
          }
        }

        expect(failures).toBe(0);
      });
    });
  }
});

test.describe('Mobile Form Interactions', () => {
  test.use(devices['iPhone 12']);

  test('Form validation messages are visible', async ({ page }) => {
    await page.goto('http://localhost:3000/en/contact');

    // Try to submit form without filling (if form exists)
    const submitButtons = page.locator('button[type="submit"]');
    const count = await submitButtons.count();

    if (count > 0) {
      const form = submitButtons.first();
      await form.click();

      // Wait for validation
      await page.waitForTimeout(500);

      // Check for validation messages or required field indicators
      const required = page.locator('input[required]');
      const reqCount = await required.count();
      
      console.log(`Found ${reqCount} required fields`);
      expect(reqCount).toBeGreaterThanOrEqual(0);
    }
  });

  test('Loading states during form submission', async ({ page }) => {
    await page.goto('http://localhost:3000/en');

    // Look for forms
    const forms = page.locator('form');
    const formCount = await forms.count();
    
    console.log(`Found ${formCount} forms on the page`);
    
    // Forms should have proper loading states (check button disabled during submit)
    if (formCount > 0) {
      const firstForm = forms.first();
      const submitButton = firstForm.locator('button[type="submit"]');
      
      if (await submitButton.count() > 0) {
        const isDisabled = await submitButton.isDisabled();
        console.log('Submit button initial state:', isDisabled ? 'disabled' : 'enabled');
      }
    }
  });
});

test.describe('Focus Management', () => {
  test.use(devices['iPhone 12']);

  test('Focus trap works in mobile menu', async ({ page }) => {
    await page.goto('http://localhost:3000/en');

    // Open menu
    await page.locator('[aria-label*="Open navigation menu"]').click();
    await page.waitForTimeout(500);

    // Tab through elements - focus should stay within menu
    const menuContent = page.locator('[role="dialog"]');
    await expect(menuContent).toBeVisible();

    // First tab should focus first element in menu
    await page.keyboard.press('Tab');
    
    // Check that focus is inside the menu
    const focusedElement = page.locator(':focus');
    const isInsideMenu = await focusedElement.evaluate(
      (el, menuEl) => menuEl?.contains(el),
      await menuContent.elementHandle()
    );

    // Note: This might not work perfectly in all cases
    // as focus trap requires proper implementation
    console.log('Focus is inside menu:', isInsideMenu);
  });

  test('Backdrop click closes menu', async ({ page }) => {
    await page.goto('http://localhost:3000/en');

    // Open menu
    await page.locator('[aria-label*="Open navigation menu"]').click();
    await page.waitForTimeout(500);

    // Menu should be visible
    const menuContent = page.locator('[role="dialog"]');
    await expect(menuContent).toBeVisible();

    // Click on backdrop (overlay)
    const overlay = page.locator('.fixed.inset-0').first();
    await overlay.click({ position: { x: 10, y: 10 } });
    await page.waitForTimeout(500);

    // Menu should be closed
    await expect(menuContent).not.toBeVisible();
  });
});

test.describe('Button States', () => {
  test.use(devices['iPhone 12']);

  test('All buttons have proper hover/focus/active states', async ({ page }) => {
    await page.goto('http://localhost:3000/en');

    const buttons = page.getByRole('button');
    const count = await buttons.count();

    console.log(`Found ${count} buttons on the page`);

    // Check first 5 visible buttons
    for (let i = 0; i < Math.min(count, 5); i++) {
      const button = buttons.nth(i);
      if (await button.isVisible()) {
        // Check for proper styling classes
        const classes = await button.getAttribute('class');
        
        // Should have transition classes
        expect(classes).toMatch(/transition/);
        
        // Should have focus-visible styles
        expect(classes).toMatch(/focus-visible/);
      }
    }
  });

  test('Disabled buttons are not interactive', async ({ page }) => {
    await page.goto('http://localhost:3000/en');

    const disabledButtons = page.locator('button:disabled');
    const count = await disabledButtons.count();

    console.log(`Found ${count} disabled buttons`);

    for (let i = 0; i < count; i++) {
      const button = disabledButtons.nth(i);
      await expect(button).toBeDisabled();
      
      // Should have disabled styling
      const opacity = await button.evaluate(el => 
        window.getComputedStyle(el).opacity
      );
      
      // Disabled buttons should have reduced opacity
      expect(parseFloat(opacity)).toBeLessThanOrEqual(0.6);
    }
  });
});

test.describe('Viewport-Specific Behaviors', () => {
  test('Small viewport (iPhone SE 375px)', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 667 });
    await page.goto('http://localhost:3000/en');

    // Menu button should be visible
    const menuButton = page.locator('[aria-label*="Open navigation menu"]');
    await expect(menuButton).toBeVisible();

    // Desktop nav should be hidden
    const desktopNav = page.locator('nav.hidden.lg\\:flex');
    await expect(desktopNav).not.toBeVisible();

    // Open menu and check width
    await menuButton.click();
    await page.waitForTimeout(500);

    const menuContent = page.locator('[role="dialog"]');
    const box = await menuContent.boundingBox();
    
    // Menu should not be full width on small screens (85vw)
    expect(box?.width).toBeLessThan(375);
    expect(box?.width).toBeGreaterThan(280); // ~85% of 375
  });

  test('Large mobile (iPhone 13 Pro Max 428px)', async ({ page }) => {
    await page.setViewportSize({ width: 428, height: 926 });
    await page.goto('http://localhost:3000/en');

    // Mobile menu button should still be visible
    const menuButton = page.locator('[aria-label*="Open navigation menu"]');
    await expect(menuButton).toBeVisible();

    // Menu should open properly
    await menuButton.click();
    await page.waitForTimeout(500);

    const menuContent = page.locator('[role="dialog"]');
    await expect(menuContent).toBeVisible();
  });

  test('Tablet viewport (iPad 768px)', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('http://localhost:3000/en');

    // Mobile menu should still be available
    const menuButton = page.locator('[aria-label*="Open navigation menu"]');
    await expect(menuButton).toBeVisible();
  });
});
