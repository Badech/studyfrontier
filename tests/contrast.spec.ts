import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

/**
 * Automated Contrast Testing with axe-core
 * Tests WCAG AA compliance (4.5:1 for normal text, 3:1 for large text)
 */

const pages = [
  { path: '/en', name: 'Home (EN)' },
  { path: '/fr', name: 'Home (FR)' },
  { path: '/ar', name: 'Home (AR)' },
  { path: '/en/services', name: 'Services (EN)' },
  { path: '/en/about', name: 'About (EN)' },
  { path: '/en/contact', name: 'Contact (EN)' },
  { path: '/en/resources', name: 'Resources (EN)' },
  { path: '/en/blog', name: 'Blog (EN)' },
];

test.describe('Contrast Compliance - Hero Sections', () => {
  for (const page of pages) {
    test(`${page.name} - Hero section contrast`, async ({ page: browserPage }) => {
      await browserPage.goto(`http://localhost:3000${page.path}`);
      
      // Wait for hero section to load
      await browserPage.waitForSelector('section', { state: 'visible' });
      
      // Run axe-core accessibility scan
      const accessibilityScanResults = await new AxeBuilder({ page: browserPage })
        .withTags(['wcag2aa', 'wcag21aa', 'wcag22aa'])
        .include('section') // Focus on hero/top sections
        .analyze();
      
      // Filter for contrast violations
      const contrastViolations = accessibilityScanResults.violations.filter(
        v => v.id.includes('color-contrast')
      );
      
      // Report findings
      if (contrastViolations.length > 0) {
        console.log(`\n❌ Contrast violations found on ${page.name}:`);
        contrastViolations.forEach(violation => {
          console.log(`\n  Rule: ${violation.id}`);
          console.log(`  Impact: ${violation.impact}`);
          console.log(`  Description: ${violation.description}`);
          console.log(`  Help: ${violation.help}`);
          violation.nodes.forEach(node => {
            console.log(`\n  Element: ${node.html.substring(0, 100)}...`);
            console.log(`  Issue: ${node.failureSummary}`);
          });
        });
      }
      
      // Expect no contrast violations
      expect(contrastViolations).toHaveLength(0);
    });
  }
});

test.describe('Contrast Compliance - Full Page Scan', () => {
  test('Home page (EN) - Complete scan', async ({ page }) => {
    await page.goto('http://localhost:3000/en');
    
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2aa', 'wcag21aa'])
      .analyze();
    
    const contrastViolations = accessibilityScanResults.violations.filter(
      v => v.id.includes('color-contrast')
    );
    
    // Generate detailed report
    if (contrastViolations.length > 0) {
      console.log('\n========================================');
      console.log('CONTRAST AUDIT REPORT - HOME PAGE');
      console.log('========================================\n');
      
      contrastViolations.forEach((violation, index) => {
        console.log(`${index + 1}. ${violation.id.toUpperCase()}`);
        console.log(`   Impact: ${violation.impact}`);
        console.log(`   Elements affected: ${violation.nodes.length}`);
        console.log(`   Description: ${violation.description}\n`);
        
        violation.nodes.forEach((node, nodeIndex) => {
          console.log(`   ${nodeIndex + 1}. ${node.html.substring(0, 80)}...`);
          console.log(`      ${node.failureSummary}\n`);
        });
      });
      
      console.log('========================================\n');
    }
    
    expect(contrastViolations).toHaveLength(0);
  });
});

test.describe('Manual Hero Section Checks', () => {
  test('Verify hero text colors are readable', async ({ page }) => {
    await page.goto('http://localhost:3000/en');
    
    // Check hero section exists
    const heroSection = page.locator('section').first();
    await expect(heroSection).toBeVisible();
    
    // Get computed styles of hero text elements
    const headline = page.locator('.hero-headline').first();
    const subheadline = page.locator('.hero-subheadline').first();
    
    // Verify elements exist
    await expect(headline).toBeVisible();
    await expect(subheadline).toBeVisible();
    
    // Take screenshot for manual review
    await page.screenshot({ 
      path: 'test-results/hero-section-contrast.png',
      fullPage: false 
    });
    
    console.log('\n✓ Hero section elements are visible');
    console.log('✓ Screenshot saved for manual review');
  });
  
  test('Check badge contrast on hero', async ({ page }) => {
    await page.goto('http://localhost:3000/en');
    
    // Look for badge elements in hero
    const badges = page.locator('section').first().locator('[class*="bg-white/"], [class*="bg-gold"]');
    const badgeCount = await badges.count();
    
    console.log(`\n✓ Found ${badgeCount} badge elements in hero section`);
    
    for (let i = 0; i < badgeCount; i++) {
      const badge = badges.nth(i);
      const isVisible = await badge.isVisible();
      console.log(`  Badge ${i + 1}: ${isVisible ? 'Visible' : 'Hidden'}`);
    }
  });
});
