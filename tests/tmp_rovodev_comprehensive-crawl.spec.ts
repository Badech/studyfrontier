import { test, expect, Page } from '@playwright/test';

/**
 * Comprehensive Site Crawler
 * 
 * Tests:
 * 1. Header links (desktop + mobile)
 * 2. Footer links (desktop + mobile)
 * 3. Internal "Read more" links
 * 4. Resource cards
 * 5. Blog article links
 * 
 * Detects:
 * - 404 pages
 * - Empty content pages
 * - Fake/misleading links (#, javascript:void)
 * - Duplicate routes
 */

interface CrawlIssue {
  type: '404' | 'empty' | 'fake-link' | 'duplicate' | 'error';
  url: string;
  sourceUrl?: string;
  linkText?: string;
  viewport: string;
  details: string;
}

const issues: CrawlIssue[] = [];
const visitedUrls = new Set<string>();

async function checkPageContent(page: Page, url: string, viewport: string): Promise<void> {
  try {
    const response = await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 15000 });
    
    // Check for 404
    if (response?.status() === 404) {
      issues.push({
        type: '404',
        url,
        viewport,
        details: 'Page returned 404 status'
      });
      return;
    }

    // Wait for body to be visible
    await page.waitForSelector('body', { timeout: 5000 }).catch(() => {});

    // Check if page has meaningful content
    const bodyText = await page.locator('body').textContent();
    const hasContent = bodyText && bodyText.trim().length > 100;
    
    if (!hasContent) {
      issues.push({
        type: 'empty',
        url,
        viewport,
        details: 'Page has no meaningful content'
      });
    }

    // Check for error indicators
    const hasErrorHeading = await page.locator('h1:has-text("404"), h1:has-text("Not Found"), h1:has-text("Error")').count() > 0;
    if (hasErrorHeading) {
      issues.push({
        type: '404',
        url,
        viewport,
        details: 'Page shows error heading'
      });
    }
  } catch (error) {
    issues.push({
      type: 'error',
      url,
      viewport,
      details: `Failed to load: ${error}`
    });
  }
}

async function extractLinks(page: Page, selector: string, sourceUrl: string, viewport: string): Promise<string[]> {
  const urls: string[] = [];
  
  try {
    // Get all link hrefs at once with evaluate for speed
    const linkData = await page.evaluate((sel) => {
      const links = Array.from(document.querySelectorAll(`${sel} a[href]`));
      return links.map(link => ({
        href: link.getAttribute('href'),
        text: link.textContent?.trim() || ''
      }));
    }, selector);

    for (const { href, text } of linkData) {
      if (!href) continue;

      // Check for fake links
      if (href === '#' || href.startsWith('javascript:') || href === '') {
        const isComingSoon = text.toLowerCase().includes('coming soon');
        if (!isComingSoon) {
          issues.push({
            type: 'fake-link',
            url: href,
            sourceUrl,
            linkText: text || 'Unknown',
            viewport,
            details: 'Link goes nowhere (# or javascript:void)'
          });
        }
        continue;
      }

      // Skip external links
      if (href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')) {
        continue;
      }

      // Normalize internal links
      let normalizedUrl = href;
      if (!normalizedUrl.startsWith('/')) {
        normalizedUrl = '/' + normalizedUrl;
      }

      urls.push(normalizedUrl);
    }
  } catch (error) {
    console.error(`Error extracting links from ${selector}:`, error);
  }

  return urls;
}

test.describe('Comprehensive Site Crawl - Desktop', () => {
  test.use({ viewport: { width: 1440, height: 900 } });

  test('crawl all links from header, footer, and content', async ({ page }) => {
    test.setTimeout(120000); // 2 minutes timeout
    const viewport = 'Desktop (1440x900)';
    await page.goto('/');

    // 1. Extract and check header links
    console.log('🔍 Crawling header links...');
    const headerLinks = await extractLinks(page, 'header', '/', viewport);
    console.log(`Found ${headerLinks.length} header links`);

    for (const url of headerLinks) {
      if (!visitedUrls.has(url)) {
        visitedUrls.add(url);
        await checkPageContent(page, url, viewport);
      }
    }

    // 2. Go back to home and extract footer links
    await page.goto('/');
    console.log('🔍 Crawling footer links...');
    const footerLinks = await extractLinks(page, 'footer', '/', viewport);
    console.log(`Found ${footerLinks.length} footer links`);

    for (const url of footerLinks) {
      if (!visitedUrls.has(url)) {
        visitedUrls.add(url);
        await checkPageContent(page, url, viewport);
      }
    }

    // 3. Check blog page and extract article links
    await page.goto('/blog');
    console.log('🔍 Crawling blog article links...');
    const blogLinks = await extractLinks(page, 'main', '/blog', viewport);
    console.log(`Found ${blogLinks.length} blog article links`);

    for (const url of blogLinks) {
      if (url.includes('/blog/') && !visitedUrls.has(url)) {
        visitedUrls.add(url);
        await checkPageContent(page, url, viewport);
      }
    }

    // 4. Check resources page and extract resource links
    await page.goto('/resources');
    console.log('🔍 Crawling resource card links...');
    const resourceLinks = await extractLinks(page, 'main', '/resources', viewport);
    console.log(`Found ${resourceLinks.length} resource links`);

    for (const url of resourceLinks) {
      if (url.includes('/resources/') && !visitedUrls.has(url)) {
        visitedUrls.add(url);
        await checkPageContent(page, url, viewport);
      }
    }

    // 5. Check for "Read more" links on homepage
    await page.goto('/');
    console.log('🔍 Crawling "Read more" links...');
    const readMoreLinks = await page.locator('a:has-text("Read more"), a:has-text("Read More"), a:has-text("Learn more"), a:has-text("Learn More")').all();
    
    for (const link of readMoreLinks) {
      const href = await link.getAttribute('href');
      if (href && !href.startsWith('http') && !visitedUrls.has(href)) {
        visitedUrls.add(href);
        await checkPageContent(page, href, viewport);
      }
    }

    // Check for duplicates
    const urlCounts = new Map<string, number>();
    visitedUrls.forEach(url => {
      const normalized = url.replace(/\/$/, ''); // Remove trailing slash
      urlCounts.set(normalized, (urlCounts.get(normalized) || 0) + 1);
    });

    urlCounts.forEach((count, url) => {
      if (count > 1) {
        issues.push({
          type: 'duplicate',
          url,
          viewport,
          details: `URL appears ${count} times`
        });
      }
    });

    // Report issues
    console.log('\n📊 CRAWL RESULTS:');
    console.log(`Total URLs visited: ${visitedUrls.size}`);
    console.log(`Total issues found: ${issues.length}\n`);

    if (issues.length > 0) {
      console.log('❌ ISSUES FOUND:');
      issues.forEach((issue, index) => {
        console.log(`\n${index + 1}. [${issue.type.toUpperCase()}] ${issue.url}`);
        console.log(`   Viewport: ${issue.viewport}`);
        if (issue.sourceUrl) console.log(`   Found on: ${issue.sourceUrl}`);
        if (issue.linkText) console.log(`   Link text: "${issue.linkText}"`);
        console.log(`   Details: ${issue.details}`);
      });
    } else {
      console.log('✅ No issues found!');
    }

    // Fail test if critical issues found
    const criticalIssues = issues.filter(i => i.type === '404' || i.type === 'empty');
    expect(criticalIssues.length, `Found ${criticalIssues.length} critical issues (404s or empty pages)`).toBe(0);
  });
});

test.describe('Comprehensive Site Crawl - Mobile', () => {
  test.use({ viewport: { width: 390, height: 844 } });

  test('crawl all links on mobile viewport', async ({ page }) => {
    test.setTimeout(120000); // 2 minutes timeout
    const viewport = 'Mobile (390x844)';
    const mobileIssues: CrawlIssue[] = [];
    const mobileVisited = new Set<string>();

    await page.goto('/');

    // Open mobile menu if needed
    const menuButton = page.locator('button:has-text("Menu"), button[aria-label*="menu"], button[aria-label*="Menu"]').first();
    if (await menuButton.isVisible()) {
      await menuButton.click();
      await page.waitForTimeout(500);
    }

    // Extract header links (from mobile menu)
    console.log('🔍 [MOBILE] Crawling header links...');
    const headerLinks = await extractLinks(page, 'header, nav, [role="dialog"]', '/', viewport);
    console.log(`Found ${headerLinks.length} mobile header links`);

    for (const url of headerLinks) {
      if (!mobileVisited.has(url)) {
        mobileVisited.add(url);
        await checkPageContent(page, url, viewport);
      }
    }

    // Footer links
    await page.goto('/');
    console.log('🔍 [MOBILE] Crawling footer links...');
    const footerLinks = await extractLinks(page, 'footer', '/', viewport);
    
    for (const url of footerLinks) {
      if (!mobileVisited.has(url)) {
        mobileVisited.add(url);
        await checkPageContent(page, url, viewport);
      }
    }

    console.log(`\n📊 MOBILE CRAWL RESULTS:`);
    console.log(`Total URLs visited: ${mobileVisited.size}`);
    
    const mobileOnlyIssues = issues.filter(i => i.viewport === viewport);
    console.log(`Mobile-specific issues: ${mobileOnlyIssues.length}`);

    const criticalMobileIssues = mobileOnlyIssues.filter(i => i.type === '404' || i.type === 'empty');
    expect(criticalMobileIssues.length, `Found ${criticalMobileIssues.length} critical mobile issues`).toBe(0);
  });
});
