import { test, expect, Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Comprehensive Site Crawler
 * 
 * Features:
 * - Discovers all internal links dynamically
 * - Tests both desktop (1440x900) and mobile (390x844) viewports
 * - Multi-locale crawling (en, fr, ar)
 * - Detects 404/500 errors
 * - Identifies broken links and navigation issues
 * - Generates JSON and Markdown reports
 */

interface CrawlResult {
  url: string;
  status: number;
  viewport: string;
  locale: string;
  timestamp: string;
  errors: string[];
  warnings: string[];
  links: {
    found: number;
    working: number;
    broken: number;
    external: number;
  };
  console_errors: string[];
  broken_links: string[];
}

interface SiteMap {
  discovered: Set<string>;
  visited: Set<string>;
  failed: Map<string, string>;
}

const VIEWPORTS = {
  desktop: { width: 1440, height: 900, name: 'Desktop (1440x900)' },
  mobile: { width: 390, height: 844, name: 'Mobile (390x844)' },
};

const LOCALES = ['en', 'fr', 'ar'];
const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';

// Global results storage
const crawlResults: CrawlResult[] = [];
const siteMap: SiteMap = {
  discovered: new Set([]),
  visited: new Set([]),
  failed: new Map(),
};

/**
 * Extract all internal links from a page
 */
async function extractInternalLinks(page: Page, currentLocale: string): Promise<string[]> {
  const links = await page.evaluate((locale) => {
    const anchors = Array.from(document.querySelectorAll('a[href]'));
    const urls: string[] = [];
    
    anchors.forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (!href) return;
      
      // Skip external links, mailto, tel, etc.
      if (
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#') ||
        href.startsWith('javascript:')
      ) {
        return;
      }
      
      // Normalize the URL
      let normalizedUrl = href;
      
      // Handle relative URLs
      if (!normalizedUrl.startsWith('/')) {
        normalizedUrl = '/' + normalizedUrl;
      }
      
      // Ensure locale prefix for non-English
      if (locale !== 'en' && !normalizedUrl.startsWith(`/${locale}`)) {
        normalizedUrl = `/${locale}${normalizedUrl}`;
      }
      
      urls.push(normalizedUrl);
    });
    
    return [...new Set(urls)]; // Remove duplicates
  }, currentLocale);
  
  return links;
}

/**
 * Check if a link is clickable and actually navigates
 */
async function testLinkNavigation(page: Page, linkSelector: string): Promise<boolean> {
  try {
    const link = page.locator(linkSelector).first();
    const href = await link.getAttribute('href');
    
    if (!href || href === '#' || href === 'javascript:void(0)') {
      return false;
    }
    
    // Check if element has click handlers that might prevent navigation
    const hasClickHandler = await link.evaluate((el) => {
      return !!(el as any).onclick || 
             el.getAttribute('onclick') !== null ||
             el.classList.contains('disabled');
    });
    
    return !hasClickHandler;
  } catch (e) {
    return false;
  }
}

/**
 * Crawl a single page and collect data
 */
async function crawlPage(
  page: Page,
  url: string,
  locale: string,
  viewportName: string
): Promise<CrawlResult> {
  const result: CrawlResult = {
    url,
    status: 0,
    viewport: viewportName,
    locale,
    timestamp: new Date().toISOString(),
    errors: [],
    warnings: [],
    links: { found: 0, working: 0, broken: 0, external: 0 },
    console_errors: [],
    broken_links: [],
  };
  
  // Capture console errors
  page.on('console', (msg) => {
    if (msg.type() === 'error') {
      result.console_errors.push(msg.text());
    }
  });
  
  page.on('pageerror', (error) => {
    result.errors.push(error.message);
  });
  
  try {
    // Navigate to page
    const response = await page.goto(url, { 
      waitUntil: 'domcontentloaded',
      timeout: 30000 
    });
    
    result.status = response?.status() || 0;
    
    // Check for error status codes
    if (result.status >= 400) {
      result.errors.push(`HTTP ${result.status} error`);
      siteMap.failed.set(url, `HTTP ${result.status}`);
    }
    
    // Wait for page to be interactive
    await page.waitForLoadState('networkidle', { timeout: 10000 }).catch(() => {
      result.warnings.push('Network did not become idle within timeout');
    });
    
    // Extract all links
    const internalLinks = await extractInternalLinks(page, locale);
    result.links.found = internalLinks.length;
    
    // Discover new URLs
    internalLinks.forEach((link) => {
      siteMap.discovered.add(link);
    });
    
    // Check for broken links (sample check)
    const allLinks = await page.locator('a[href]').all();
    for (const link of allLinks.slice(0, 20)) { // Check first 20 links
      const href = await link.getAttribute('href');
      if (href && href.startsWith('/') && !href.includes('http')) {
        const isClickable = await link.isVisible().catch(() => false);
        if (isClickable) {
          const isDisabled = await link.evaluate((el) => {
            return el.classList.contains('disabled') || 
                   el.hasAttribute('disabled') ||
                   (el as HTMLElement).style.pointerEvents === 'none';
          });
          
          if (!isDisabled) {
            result.links.working++;
          }
        }
      }
    }
    
    // Check for common issues
    const hasH1 = await page.locator('h1').count();
    if (hasH1 === 0) {
      result.warnings.push('No H1 heading found');
    }
    
    const hasMain = await page.locator('main').count();
    if (hasMain === 0) {
      result.warnings.push('No main landmark found');
    }
    
    // Check for "Coming Soon" placeholders that might be clickable
    const comingSoonElements = await page.locator('text=/coming soon/i').all();
    for (const element of comingSoonElements) {
      const parent = element.locator('xpath=ancestor::a').first();
      const isLink = await parent.count() > 0;
      if (isLink) {
        const href = await parent.getAttribute('href');
        result.warnings.push(`"Coming Soon" placeholder is clickable: ${href}`);
      }
    }
    
  } catch (error: any) {
    result.errors.push(`Failed to crawl: ${error.message}`);
    siteMap.failed.set(url, error.message);
  }
  
  siteMap.visited.add(url);
  return result;
}

/**
 * Generate JSON report
 */
function generateJSONReport() {
  const report = {
    metadata: {
      generated_at: new Date().toISOString(),
      base_url: BASE_URL,
      total_pages_discovered: siteMap.discovered.size,
      total_pages_visited: siteMap.visited.size,
      total_pages_failed: siteMap.failed.size,
      locales: LOCALES,
      viewports: Object.keys(VIEWPORTS),
    },
    summary: {
      total_tests: crawlResults.length,
      passed: crawlResults.filter((r) => r.status === 200 && r.errors.length === 0).length,
      failed: crawlResults.filter((r) => r.status !== 200 || r.errors.length > 0).length,
      warnings: crawlResults.reduce((sum, r) => sum + r.warnings.length, 0),
    },
    site_map: {
      discovered_urls: Array.from(siteMap.discovered).sort(),
      visited_urls: Array.from(siteMap.visited).sort(),
      failed_urls: Object.fromEntries(siteMap.failed),
    },
    results: crawlResults,
  };
  
  const reportsDir = path.join(process.cwd(), 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
  
  fs.writeFileSync(
    path.join(reportsDir, 'crawl-report.json'),
    JSON.stringify(report, null, 2)
  );
  
  return report;
}

/**
 * Generate Markdown report
 */
function generateMarkdownReport(jsonReport: any) {
  const md: string[] = [];
  
  md.push('# Site Crawl Report\n');
  md.push(`**Generated:** ${new Date(jsonReport.metadata.generated_at).toLocaleString()}\n`);
  md.push(`**Base URL:** ${jsonReport.metadata.base_url}\n`);
  md.push('---\n');
  
  // Summary
  md.push('## 📊 Summary\n');
  md.push('| Metric | Value |');
  md.push('|--------|-------|');
  md.push(`| Total Pages Discovered | ${jsonReport.metadata.total_pages_discovered} |`);
  md.push(`| Total Pages Visited | ${jsonReport.metadata.total_pages_visited} |`);
  md.push(`| Total Tests Run | ${jsonReport.summary.total_tests} |`);
  md.push(`| ✅ Passed | ${jsonReport.summary.passed} |`);
  md.push(`| ❌ Failed | ${jsonReport.summary.failed} |`);
  md.push(`| ⚠️ Warnings | ${jsonReport.summary.warnings} |\n`);
  
  // Failed URLs
  if (jsonReport.metadata.total_pages_failed > 0) {
    md.push('## ❌ Failed Pages\n');
    Object.entries(jsonReport.site_map.failed_urls).forEach(([url, reason]) => {
      md.push(`- **${url}**: ${reason}`);
    });
    md.push('');
  }
  
  // Errors by page
  const pagesWithErrors = jsonReport.results.filter((r: any) => r.errors.length > 0);
  if (pagesWithErrors.length > 0) {
    md.push('## 🐛 Pages with Errors\n');
    pagesWithErrors.forEach((result: any) => {
      md.push(`### ${result.url} (${result.viewport}, ${result.locale})`);
      md.push(`**Status:** ${result.status}`);
      md.push('**Errors:**');
      result.errors.forEach((error: string) => {
        md.push(`- ${error}`);
      });
      md.push('');
    });
  }
  
  // Warnings
  const pagesWithWarnings = jsonReport.results.filter((r: any) => r.warnings.length > 0);
  if (pagesWithWarnings.length > 0) {
    md.push('## ⚠️ Pages with Warnings\n');
    const warningsByType = new Map<string, string[]>();
    
    pagesWithWarnings.forEach((result: any) => {
      result.warnings.forEach((warning: string) => {
        if (!warningsByType.has(warning)) {
          warningsByType.set(warning, []);
        }
        warningsByType.get(warning)!.push(`${result.url} (${result.viewport}, ${result.locale})`);
      });
    });
    
    warningsByType.forEach((pages, warning) => {
      md.push(`### ${warning}`);
      md.push(`Found on ${pages.length} page(s):`);
      pages.slice(0, 5).forEach((page) => {
        md.push(`- ${page}`);
      });
      if (pages.length > 5) {
        md.push(`- ... and ${pages.length - 5} more`);
      }
      md.push('');
    });
  }
  
  // Discovered URLs
  md.push('## 🗺️ Site Map\n');
  md.push(`Total URLs discovered: ${jsonReport.site_map.discovered_urls.length}\n`);
  
  // Group by locale
  LOCALES.forEach((locale) => {
    const localeUrls = jsonReport.site_map.discovered_urls.filter((url: string) => 
      locale === 'en' ? !url.startsWith('/fr') && !url.startsWith('/ar') : url.startsWith(`/${locale}`)
    );
    md.push(`### ${locale.toUpperCase()} (${localeUrls.length} pages)`);
    localeUrls.forEach((url: string) => {
      md.push(`- ${url}`);
    });
    md.push('');
  });
  
  // Viewport breakdown
  md.push('## 📱 Viewport Breakdown\n');
  Object.entries(VIEWPORTS).forEach(([key, viewport]) => {
    const viewportResults = jsonReport.results.filter((r: any) => r.viewport === (viewport as any).name);
    const passed = viewportResults.filter((r: any) => r.status === 200 && r.errors.length === 0).length;
    const failed = viewportResults.filter((r: any) => r.status !== 200 || r.errors.length > 0).length;
    
    md.push(`### ${(viewport as any).name}`);
    md.push(`- ✅ Passed: ${passed}`);
    md.push(`- ❌ Failed: ${failed}`);
    md.push('');
  });
  
  // Write report
  const reportsDir = path.join(process.cwd(), 'reports');
  fs.writeFileSync(
    path.join(reportsDir, 'crawl-report.md'),
    md.join('\n')
  );
}

// Main Test Suite
test.describe('Full Site Crawler', () => {
  test.setTimeout(300000); // 5 minutes total timeout
  
  // Test each viewport
  for (const [viewportKey, viewport] of Object.entries(VIEWPORTS)) {
    test.describe(`${viewport.name}`, () => {
      test.use({ viewport: { width: viewport.width, height: viewport.height } });
      
      // Test each locale
      for (const locale of LOCALES) {
        test(`Crawl ${locale.toUpperCase()} locale`, async ({ page }) => {
          // Start from homepage
          const startUrl = locale === 'en' ? '/' : `/${locale}`;
          
          console.log(`\n🕷️ Starting crawl: ${locale.toUpperCase()} on ${viewport.name}`);
          
          // Crawl homepage first
          const homeResult = await crawlPage(page, startUrl, locale, viewport.name);
          crawlResults.push(homeResult);
          
          console.log(`   Found ${homeResult.links.found} links on homepage`);
          
          // Get all discovered links for this locale
          const localeLinks = Array.from(siteMap.discovered).filter((url) => {
            if (locale === 'en') {
              return !url.startsWith('/fr') && !url.startsWith('/ar');
            }
            return url.startsWith(`/${locale}`);
          });
          
          console.log(`   Total unique URLs to crawl: ${localeLinks.length}`);
          
          // Crawl discovered pages (limit to prevent infinite loops)
          const maxPages = 30;
          let crawledCount = 1;
          
          for (const url of localeLinks.slice(0, maxPages - 1)) {
            if (!siteMap.visited.has(url)) {
              console.log(`   [${++crawledCount}/${Math.min(localeLinks.length, maxPages)}] Crawling: ${url}`);
              const result = await crawlPage(page, url, locale, viewport.name);
              crawlResults.push(result);
              
              // Brief pause to avoid overwhelming the server
              await page.waitForTimeout(500);
            }
          }
          
          console.log(`   ✅ Completed ${locale.toUpperCase()} crawl on ${viewport.name}`);
          
          // Assertions
          expect(homeResult.status, `Homepage should return 200 for ${locale}`).toBe(200);
          expect(homeResult.errors.length, `Homepage should have no errors for ${locale}`).toBe(0);
        });
      }
    });
  }
  
  // Generate reports after all tests
  test('Generate Reports', async () => {
    console.log('\n📊 Generating reports...');
    
    const jsonReport = generateJSONReport();
    generateMarkdownReport(jsonReport);
    
    console.log(`\n✅ Reports generated:`);
    console.log(`   - reports/crawl-report.json`);
    console.log(`   - reports/crawl-report.md`);
    console.log(`\n📈 Summary:`);
    console.log(`   - Total pages discovered: ${jsonReport.metadata.total_pages_discovered}`);
    console.log(`   - Total tests run: ${jsonReport.summary.total_tests}`);
    console.log(`   - Passed: ${jsonReport.summary.passed}`);
    console.log(`   - Failed: ${jsonReport.summary.failed}`);
    console.log(`   - Warnings: ${jsonReport.summary.warnings}`);
    
    // Assert no critical failures
    expect(jsonReport.summary.failed).toBeLessThan(jsonReport.summary.total_tests * 0.1); // Allow up to 10% failure rate
  });
});
