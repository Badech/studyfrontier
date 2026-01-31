import { test, expect } from '@playwright/test';

test.describe('Manual Issue Detection', () => {
  test('check blog article links behavior', async ({ page }) => {
    await page.goto('/blog');
    
    // Get first "Read more" link
    const firstArticleLink = page.locator('a:has-text("Read more"), a:has-text("Read More")').first();
    const href = await firstArticleLink.getAttribute('href');
    
    console.log('Blog article link:', href);
    
    // Click and check where it goes
    await firstArticleLink.click();
    await page.waitForURL('**/*', { timeout: 5000 });
    
    const currentUrl = page.url();
    console.log('Redirected to:', currentUrl);
    
    // Check if it redirects to coming-soon
    const isComingSoon = currentUrl.includes('/coming-soon');
    console.log('Goes to coming soon?', isComingSoon);
    
    if (isComingSoon) {
      console.log('❌ ISSUE: Blog articles redirect to Coming Soon instead of showing content');
    }
  });

  test('check resource cards with # links', async ({ page }) => {
    await page.goto('/resources');
    
    // Get all resource card links
    const allLinks = await page.evaluate(() => {
      const links = Array.from(document.querySelectorAll('main a[href]'));
      return links.map(link => ({
        href: link.getAttribute('href'),
        text: link.textContent?.trim().substring(0, 50),
        isClickable: !link.classList.contains('cursor-not-allowed'),
        parentClasses: link.parentElement?.className
      }));
    });
    
    console.log('Resource links found:', allLinks.length);
    
    const fakeLinks = allLinks.filter(l => l.href === '#' && l.isClickable);
    console.log('Fake clickable links (href=#):', fakeLinks.length);
    
    if (fakeLinks.length > 0) {
      console.log('❌ ISSUE: Found clickable links that go to #');
      fakeLinks.forEach(link => {
        console.log('  -', link.text);
      });
    }
  });

  test('check all routes return 200 and have content', async ({ page }) => {
    const routes = [
      '/blog',
      '/blog/study-in-usa-complete-guide',
      '/blog/f1-visa-interview-tips',
      '/resources',
      '/resources/f1-visa-checklist',
      '/resources/i20-guide',
      '/coming-soon'
    ];

    for (const route of routes) {
      console.log(`\nChecking: ${route}`);
      const response = await page.goto(route);
      const status = response?.status();
      console.log(`  Status: ${status}`);
      
      const h1 = await page.locator('h1').first().textContent();
      console.log(`  H1: ${h1}`);
      
      const bodyLength = (await page.locator('body').textContent())?.length || 0;
      console.log(`  Body length: ${bodyLength} chars`);
      
      if (status !== 200) {
        console.log(`  ❌ ISSUE: Returns status ${status}`);
      }
      
      if (bodyLength < 100) {
        console.log(`  ❌ ISSUE: Empty or very short content`);
      }
    }
  });
});
