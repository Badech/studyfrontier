import { test, expect, Page } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

/**
 * Quick Site Crawler - Faster version for immediate feedback
 * Tests main pages only, then we'll do full crawl
 */

interface QuickResult {
  url: string;
  status: number;
  viewport: string;
  locale: string;
  errors: string[];
  warnings: string[];
  internalLinks: string[];
  brokenLinks: string[];
}

const VIEWPORTS = {
  desktop: { width: 1440, height: 900, name: 'Desktop (1440x900)' },
  mobile: { width: 390, height: 844, name: 'Mobile (390x844)' },
};

const LOCALES = ['en', 'fr', 'ar'];

// Main pages to test
const MAIN_PAGES = [
  '/',
  '/why-studyfrontier',
  '/who-we-work-with',
  '/services',
  '/study-in-usa',
  '/resources',
  '/success-stories',
  '/case-studies',
  '/blog',
  '/about',
  '/contact',
  '/apply',
  '/faqs',
];

const results: QuickResult[] = [];
const allDiscoveredLinks = new Set<string>();

async function extractLinks(page: Page, currentLocale: string): Promise<string[]> {
  return await page.evaluate((locale) => {
    const anchors = Array.from(document.querySelectorAll('a[href]'));
    const links: string[] = [];
    
    anchors.forEach((anchor) => {
      const href = anchor.getAttribute('href');
      if (!href) return;
      
      // Only internal links
      if (
        href.startsWith('http') ||
        href.startsWith('mailto:') ||
        href.startsWith('tel:') ||
        href.startsWith('#')
      ) {
        return;
      }
      
      links.push(href);
    });
    
    return [...new Set(links)];
  }, currentLocale);
}

async function testPage(
  page: Page,
  url: string,
  locale: string,
  viewport: string
): Promise<QuickResult> {
  const result: QuickResult = {
    url,
    status: 0,
    viewport,
    locale,
    errors: [],
    warnings: [],
    internalLinks: [],
    brokenLinks: [],
  };
  
  try {
    const response = await page.goto(url, { 
      waitUntil: 'domcontentloaded',
      timeout: 15000 
    });
    
    result.status = response?.status() || 0;
    
    if (result.status >= 400) {
      result.errors.push(`HTTP ${result.status} error`);
    }
    
    // Extract links
    const links = await extractLinks(page, locale);
    result.internalLinks = links;
    links.forEach(link => allDiscoveredLinks.add(link));
    
    // Check for coming soon issues
    const comingSoonLinks = await page.locator('a:has-text("coming soon")').all();
    for (const link of comingSoonLinks) {
      const href = await link.getAttribute('href');
      if (href && href !== '#') {
        result.warnings.push(`"Coming Soon" is a clickable link: ${href}`);
      }
    }
    
    // Check for missing h1
    const h1Count = await page.locator('h1').count();
    if (h1Count === 0) {
      result.warnings.push('Missing H1 heading');
    }
    
  } catch (error: any) {
    result.errors.push(error.message);
  }
  
  return result;
}

test.describe('Quick Site Crawl', () => {
  test.setTimeout(120000);
  
  for (const [viewportKey, viewport] of Object.entries(VIEWPORTS)) {
    test.describe(`${viewport.name}`, () => {
      test.use({ viewport: { width: viewport.width, height: viewport.height } });
      
      for (const locale of LOCALES) {
        test(`Crawl main pages - ${locale.toUpperCase()}`, async ({ page }) => {
          console.log(`\n🔍 Testing ${locale.toUpperCase()} on ${viewport.name}`);
          
          for (const pagePath of MAIN_PAGES) {
            const url = locale === 'en' ? pagePath : `/${locale}${pagePath}`;
            console.log(`   Testing: ${url}`);
            
            const result = await testPage(page, url, locale, viewport.name);
            results.push(result);
            
            // Quick assertion
            expect(result.status, `${url} should return 200`).toBe(200);
          }
        });
      }
    });
  }
  
  test('Generate Quick Report', async () => {
    console.log('\n📊 Generating quick report...');
    
    const report = {
      timestamp: new Date().toISOString(),
      summary: {
        total_pages_tested: results.length,
        total_links_discovered: allDiscoveredLinks.size,
        pages_with_errors: results.filter(r => r.errors.length > 0).length,
        pages_with_warnings: results.filter(r => r.warnings.length > 0).length,
      },
      discovered_links: Array.from(allDiscoveredLinks).sort(),
      results,
    };
    
    // Save JSON report
    const reportsDir = path.join(process.cwd(), 'reports');
    if (!fs.existsSync(reportsDir)) {
      fs.mkdirSync(reportsDir, { recursive: true });
    }
    
    fs.writeFileSync(
      path.join(reportsDir, 'crawl-report.json'),
      JSON.stringify(report, null, 2)
    );
    
    // Generate Markdown
    const md: string[] = [];
    md.push('# Site Crawl Report (Quick Scan)\n');
    md.push(`**Generated:** ${new Date().toLocaleString()}\n`);
    md.push('## 📊 Summary\n');
    md.push(`- **Total pages tested:** ${report.summary.total_pages_tested}`);
    md.push(`- **Total links discovered:** ${report.summary.total_links_discovered}`);
    md.push(`- **Pages with errors:** ${report.summary.pages_with_errors}`);
    md.push(`- **Pages with warnings:** ${report.summary.pages_with_warnings}\n`);
    
    // Errors
    const errors = results.filter(r => r.errors.length > 0);
    if (errors.length > 0) {
      md.push('## ❌ Errors\n');
      errors.forEach(r => {
        md.push(`### ${r.url} (${r.viewport}, ${r.locale})`);
        md.push(`**Status:** ${r.status}`);
        r.errors.forEach(e => md.push(`- ${e}`));
        md.push('');
      });
    }
    
    // Warnings
    const warnings = results.filter(r => r.warnings.length > 0);
    if (warnings.length > 0) {
      md.push('## ⚠️ Warnings\n');
      warnings.forEach(r => {
        md.push(`### ${r.url} (${r.viewport}, ${r.locale})`);
        r.warnings.forEach(w => md.push(`- ${w}`));
        md.push('');
      });
    }
    
    // Discovered links
    md.push('## 🗺️ Discovered Links\n');
    md.push(`Total unique internal links: ${allDiscoveredLinks.size}\n`);
    Array.from(allDiscoveredLinks).sort().forEach(link => {
      md.push(`- ${link}`);
    });
    
    fs.writeFileSync(
      path.join(reportsDir, 'crawl-report.md'),
      md.join('\n')
    );
    
    console.log('✅ Reports saved:');
    console.log('   - reports/crawl-report.json');
    console.log('   - reports/crawl-report.md');
    console.log(`\n📈 Summary: ${report.summary.pages_with_errors} errors, ${report.summary.pages_with_warnings} warnings`);
  });
});
