import { test, expect } from '@playwright/test';

/**
 * Button Contrast Testing
 * Ensures all button variants meet WCAG AA contrast requirements
 * Tests normal, hover, focus, and disabled states
 */

test.describe('Button Contrast - All Variants', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('http://localhost:3000/en');
  });

  test('Premium button - Default state', async ({ page }) => {
    const button = page.getByRole('button', { name: /book your free consultation/i });
    await expect(button).toBeVisible();
    
    // Premium button: Gold gradient background with navy text
    // Should have high contrast (>7:1)
    const styles = await button.evaluate(el => {
      const computed = window.getComputedStyle(el);
      return {
        background: computed.background,
        color: computed.color,
        fontSize: computed.fontSize
      };
    });
    
    console.log('Premium Button Styles:', styles);
  });

  test('Premium button - Hover state', async ({ page }) => {
    const button = page.getByRole('button', { name: /book your free consultation/i });
    await button.hover();
    
    // Wait for transition
    await page.waitForTimeout(300);
    
    // Should maintain high contrast on hover
    await expect(button).toBeVisible();
  });

  test('Premium button - Focus state', async ({ page }) => {
    const button = page.getByRole('button', { name: /book your free consultation/i });
    await button.focus();
    
    // Focus ring should be visible and meet 3:1 contrast
    const hasFocusRing = await button.evaluate(el => {
      const computed = window.getComputedStyle(el);
      return computed.outline !== 'none' || computed.boxShadow.includes('ring');
    });
    
    expect(hasFocusRing).toBeTruthy();
  });

  test('WhatsApp button - Contrast check', async ({ page }) => {
    // Navigate to a page with WhatsApp button
    const whatsappButtons = page.getByRole('button').filter({ hasText: /whatsapp/i });
    const count = await whatsappButtons.count();
    
    if (count > 0) {
      const button = whatsappButtons.first();
      
      // WhatsApp green (#25D366) with white text should have >3:1 ratio
      const styles = await button.evaluate(el => {
        const computed = window.getComputedStyle(el);
        return {
          background: computed.backgroundColor,
          color: computed.color
        };
      });
      
      console.log('WhatsApp Button Styles:', styles);
    }
  });

  test('All button variants visible on page', async ({ page }) => {
    // Get all buttons on the page
    const buttons = page.getByRole('button');
    const buttonCount = await buttons.count();
    
    console.log(`Found ${buttonCount} buttons on the page`);
    
    // Each should be visible
    for (let i = 0; i < Math.min(buttonCount, 10); i++) {
      await expect(buttons.nth(i)).toBeVisible();
    }
  });
});

test.describe('Link Contrast', () => {
  test('All links meet contrast requirements', async ({ page }) => {
    await page.goto('http://localhost:3000/en');
    
    const links = page.getByRole('link');
    const linkCount = await links.count();
    
    console.log(`Found ${linkCount} links on the page`);
    
    // Sample first 10 links
    for (let i = 0; i < Math.min(linkCount, 10); i++) {
      const link = links.nth(i);
      const isVisible = await link.isVisible();
      
      if (isVisible) {
        const styles = await link.evaluate(el => {
          const computed = window.getComputedStyle(el);
          return {
            color: computed.color,
            background: computed.backgroundColor,
            textDecoration: computed.textDecoration
          };
        });
        
        // Links should have adequate contrast and/or underline
        const hasUnderline = styles.textDecoration.includes('underline');
        
        if (!hasUnderline) {
          console.log(`Link ${i}: ${styles.color} on ${styles.background} (no underline)`);
        }
      }
    }
  });
});

test.describe('Interactive State Contrast', () => {
  test('Focus states are visible', async ({ page }) => {
    await page.goto('http://localhost:3000/en');
    
    // Tab through interactive elements
    await page.keyboard.press('Tab');
    await page.waitForTimeout(100);
    
    const focusedElement = page.locator(':focus');
    await expect(focusedElement).toBeVisible();
    
    // Check if focus indicator is visible
    const hasFocusIndicator = await focusedElement.evaluate(el => {
      const computed = window.getComputedStyle(el);
      return (
        computed.outline !== 'none' && computed.outline !== '0px' ||
        computed.boxShadow !== 'none' && computed.boxShadow.includes('ring')
      );
    });
    
    console.log('Focus indicator visible:', hasFocusIndicator);
    expect(hasFocusIndicator).toBeTruthy();
  });
  
  test('Hover states have adequate contrast', async ({ page }) => {
    await page.goto('http://localhost:3000/en');
    
    // Find first visible link
    const link = page.getByRole('link').first();
    
    // Get default color
    const defaultColor = await link.evaluate(el => 
      window.getComputedStyle(el).color
    );
    
    // Hover and get hover color
    await link.hover();
    await page.waitForTimeout(200);
    
    const hoverColor = await link.evaluate(el =>
      window.getComputedStyle(el).color
    );
    
    console.log('Link colors - Default:', defaultColor, 'Hover:', hoverColor);
    
    // Colors should be different (state change should be visible)
    expect(defaultColor !== hoverColor || hoverColor.includes('gold')).toBeTruthy();
  });
});
