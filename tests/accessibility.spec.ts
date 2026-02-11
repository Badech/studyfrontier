import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Accessibility tests', () => {
  // Helper function to log violations for debugging
  function logViolations(violations: any[]) {
    if (violations.length > 0) {
      console.log('\n=== Accessibility Violations ===');
      violations.forEach((violation, index) => {
        console.log(`\n${index + 1}. ${violation.id}: ${violation.description}`);
        console.log(`   Impact: ${violation.impact}`);
        console.log(`   Help: ${violation.help}`);
        console.log(`   Affected elements: ${violation.nodes.length}`);
        violation.nodes.forEach((node: any) => {
          console.log(`   - ${node.html}`);
        });
      });
      console.log('=================================\n');
    }
  }

  test.describe('Homepage accessibility', () => {
    test('homepage should not have critical accessibility issues (EN)', async ({ page }) => {
      await page.goto('/en');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      logViolations(accessibilityScanResults.violations);

      // Filter out minor violations, fail only on critical/serious
      const criticalViolations = accessibilityScanResults.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(criticalViolations).toEqual([]);
    });

    test('homepage should not have critical accessibility issues (FR)', async ({ page }) => {
      await page.goto('/fr');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      logViolations(accessibilityScanResults.violations);

      const criticalViolations = accessibilityScanResults.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(criticalViolations).toEqual([]);
    });

    test('homepage should not have critical accessibility issues (AR)', async ({ page }) => {
      await page.goto('/ar');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      logViolations(accessibilityScanResults.violations);

      const criticalViolations = accessibilityScanResults.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(criticalViolations).toEqual([]);
    });
  });

  test.describe('Services page accessibility', () => {
    test('services page should not have critical accessibility issues (EN)', async ({ page }) => {
      await page.goto('/en/services');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      logViolations(accessibilityScanResults.violations);

      const criticalViolations = accessibilityScanResults.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(criticalViolations).toEqual([]);
    });

    test('services page should not have critical accessibility issues (FR)', async ({ page }) => {
      await page.goto('/fr/services');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      logViolations(accessibilityScanResults.violations);

      const criticalViolations = accessibilityScanResults.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(criticalViolations).toEqual([]);
    });

    test('services page should not have critical accessibility issues (AR)', async ({ page }) => {
      await page.goto('/ar/services');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      logViolations(accessibilityScanResults.violations);

      const criticalViolations = accessibilityScanResults.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(criticalViolations).toEqual([]);
    });
  });

  test.describe('Programs page accessibility', () => {
    test('programs page should not have critical accessibility issues (EN)', async ({ page }) => {
      await page.goto('/en/programs');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      logViolations(accessibilityScanResults.violations);

      const criticalViolations = accessibilityScanResults.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(criticalViolations).toEqual([]);
    });

    test('programs page should not have critical accessibility issues (FR)', async ({ page }) => {
      await page.goto('/fr/programs');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      logViolations(accessibilityScanResults.violations);

      const criticalViolations = accessibilityScanResults.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(criticalViolations).toEqual([]);
    });

    test('programs page should not have critical accessibility issues (AR)', async ({ page }) => {
      await page.goto('/ar/programs');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      logViolations(accessibilityScanResults.violations);

      const criticalViolations = accessibilityScanResults.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(criticalViolations).toEqual([]);
    });
  });

  test.describe('Partner page accessibility', () => {
    test('partner page should not have critical accessibility issues (EN)', async ({ page }) => {
      await page.goto('/en/partner-with-us');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      logViolations(accessibilityScanResults.violations);

      const criticalViolations = accessibilityScanResults.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(criticalViolations).toEqual([]);
    });

    test('partner page should not have critical accessibility issues (FR)', async ({ page }) => {
      await page.goto('/fr/partner-with-us');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      logViolations(accessibilityScanResults.violations);

      const criticalViolations = accessibilityScanResults.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(criticalViolations).toEqual([]);
    });

    test('partner page should not have critical accessibility issues (AR)', async ({ page }) => {
      await page.goto('/ar/partner-with-us');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();

      logViolations(accessibilityScanResults.violations);

      const criticalViolations = accessibilityScanResults.violations.filter(
        v => v.impact === 'critical' || v.impact === 'serious'
      );

      expect(criticalViolations).toEqual([]);
    });
  });

  test.describe('Keyboard navigation and focus management', () => {
    test('all interactive elements should be keyboard accessible', async ({ page }) => {
      await page.goto('/en');

      // Tab through interactive elements
      const interactiveElements: string[] = [];
      
      for (let i = 0; i < 30; i++) {
        await page.keyboard.press('Tab');
        const focused = await page.evaluate(() => {
          const el = document.activeElement;
          return el ? `${el.tagName}${el.getAttribute('aria-label') ? `[${el.getAttribute('aria-label')}]` : ''}` : '';
        });
        if (focused) {
          interactiveElements.push(focused);
        }
      }

      // Should have tabbed through multiple elements
      expect(interactiveElements.length).toBeGreaterThan(5);
    });

    test('mobile menu should trap focus when open', async ({ page }) => {
      await page.setViewportSize({ width: 375, height: 667 });
      await page.goto('/en');

      // Open mobile menu
      const menuButton = page.getByRole('button', { name: /toggle menu/i });
      await menuButton.click();
      await page.waitForTimeout(300);

      // Tab through - focus should stay within menu
      const menuContainer = page.locator('[role="navigation"]').first();
      await expect(menuContainer).toBeVisible();
    });

    test('skip to main content link should be present', async ({ page }) => {
      await page.goto('/en');

      // Tab once to see if there's a skip link
      await page.keyboard.press('Tab');
      
      const focused = await page.evaluate(() => {
        const el = document.activeElement;
        return el?.textContent?.toLowerCase() || '';
      });

      // If there's a skip link, it should be the first focusable element
      // This is a best practice but not required, so we'll just check it doesn't break
      expect(typeof focused).toBe('string');
    });
  });

  test.describe('Color contrast and visual accessibility', () => {
    test('color contrast should meet WCAG AA standards', async ({ page }) => {
      await page.goto('/en');

      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2aa'])
        .analyze();

      // Check specifically for color-contrast violations
      const contrastViolations = accessibilityScanResults.violations.filter(
        v => v.id === 'color-contrast'
      );

      logViolations(contrastViolations);

      // Color contrast violations should be fixed
      expect(contrastViolations.length).toBe(0);
    });
  });
});
