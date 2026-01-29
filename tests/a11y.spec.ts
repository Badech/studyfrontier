import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Accessibility Test Suite
 * 
 * Uses axe-core to scan for accessibility issues including:
 * - WCAG 2.0 Level A & AA compliance
 * - Color contrast issues
 * - Missing alt text
 * - Keyboard navigation
 * - ARIA attributes
 * - Semantic HTML
 */

const CRITICAL_PAGES = [
  '/',
  '/about',
  '/services',
  '/apply',
  '/contact',
];

test.describe('Accessibility Audit', () => {
  for (const route of CRITICAL_PAGES) {
    test(`should not have accessibility violations on ${route}`, async ({ page }) => {
      await page.goto(route);
      
      // Run axe accessibility scan
      const accessibilityScanResults = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa'])
        .analyze();
      
      // Log violations for debugging
      if (accessibilityScanResults.violations.length > 0) {
        console.log(`\n🔍 Accessibility violations on ${route}:`);
        accessibilityScanResults.violations.forEach((violation) => {
          console.log(`\n❌ ${violation.id}: ${violation.description}`);
          console.log(`   Impact: ${violation.impact}`);
          console.log(`   Help: ${violation.helpUrl}`);
          console.log(`   Elements affected: ${violation.nodes.length}`);
        });
      }
      
      // Fail test if critical or serious violations are found
      const criticalViolations = accessibilityScanResults.violations.filter(
        (v) => v.impact === 'critical' || v.impact === 'serious'
      );
      
      expect(criticalViolations, 
        `Found ${criticalViolations.length} critical/serious accessibility violations on ${route}`
      ).toHaveLength(0);
    });
  }
});

test.describe('Keyboard Navigation', () => {
  test('should support keyboard navigation on homepage', async ({ page }) => {
    await page.goto('/');
    
    // Tab through interactive elements
    await page.keyboard.press('Tab');
    
    // Check that focus is visible
    const focusedElement = await page.locator(':focus').first();
    await expect(focusedElement).toBeVisible();
  });
});

test.describe('Screen Reader Support', () => {
  test('should have proper heading hierarchy on homepage', async ({ page }) => {
    await page.goto('/');
    
    // Check for h1
    const h1Count = await page.locator('h1').count();
    expect(h1Count, 'Should have exactly one h1').toBe(1);
    
    // Check that h1 has content
    const h1Text = await page.locator('h1').first().textContent();
    expect(h1Text?.trim().length, 'h1 should have content').toBeGreaterThan(0);
  });
  
  test('should have proper landmark regions', async ({ page }) => {
    await page.goto('/');
    
    // Check for main landmark
    await expect(page.locator('main')).toBeVisible();
    
    // Check for header landmark
    await expect(page.locator('header')).toBeVisible();
    
    // Check for footer landmark
    await expect(page.locator('footer')).toBeVisible();
  });
});

test.describe('Image Accessibility', () => {
  test('should have alt text on all images', async ({ page }) => {
    await page.goto('/');
    
    // Get all img elements
    const images = await page.locator('img').all();
    
    for (const img of images) {
      const alt = await img.getAttribute('alt');
      const src = await img.getAttribute('src');
      
      // Alt attribute should exist (can be empty for decorative images)
      expect(alt, `Image ${src} should have alt attribute`).not.toBeNull();
    }
  });
});
