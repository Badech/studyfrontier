/**
 * Standalone Site Crawler Script
 * Run with: npx ts-node scripts/crawl-site.ts
 */

import { chromium } from '@playwright/test';
import * as fs from 'fs';
import * as path from 'path';

const BASE_URL = process.env.BASE_URL || 'http://localhost:3000';
const LOCALES = ['en', 'fr', 'ar'];
const VIEWPORTS = {
  desktop: { width: 1440, height: 900 },
  mobile: { width: 390, height: 844 },
};

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

interface PageResult {
  url: string;
  fullUrl: string;
  status: number;
  locale: string;
  viewport: string;
  errors: string[];
  warnings: string[];
  links: string[];
  timestamp: string;
}

const results: PageResult[] = [];
const allLinks = new Set<string>();

async function crawl() {
  console.log('🕷️  Starting Site Crawler\n');
  console.log(`Base URL: ${BASE_URL}`);
  console.log(`Locales: ${LOCALES.join(', ')}`);
  console.log(`Viewports: ${Object.keys(VIEWPORTS).join(', ')}\n`);
  
  const browser = await chromium.launch({ headless: true });
  
  for (const [viewportName, viewport] of Object.entries(VIEWPORTS)) {
    console.log(`\n📱 Testing ${viewportName} (${viewport.width}x${viewport.height})`);
    
    const context = await browser.newContext({ viewport });
    const page = await context.newPage();
    
    for (const locale of LOCALES) {
      console.log(`\n  🌍 Locale: ${locale.toUpperCase()}`);
      
      for (const pagePath of MAIN_PAGES) {
        const url = locale === 'en' ? pagePath : `/${locale}${pagePath}`;
        const fullUrl = `${BASE_URL}${url}`;
        
        const result: PageResult = {
          url,
          fullUrl,
          status: 0,
          locale,
          viewport: viewportName,
          errors: [],
          warnings: [],
          links: [],
          timestamp: new Date().toISOString(),
        };
        
        try {
          process.stdout.write(`    Testing ${url}...`);
          
          const response = await page.goto(fullUrl, { 
            waitUntil: 'domcontentloaded',
            timeout: 10000 
          });
          
          result.status = response?.status() || 0;
          
          if (result.status !== 200) {
            result.errors.push(`HTTP ${result.status}`);
            console.log(` ❌ ${result.status}`);
          } else {
            console.log(` ✅ ${result.status}`);
          }
          
          // Extract links
          const links = await page.evaluate(() => {
            const anchors = Array.from(document.querySelectorAll('a[href]'));
            return anchors
              .map(a => a.getAttribute('href'))
              .filter(href => 
                href && 
                !href.startsWith('http') && 
                !href.startsWith('mailto:') && 
                !href.startsWith('tel:') &&
                !href.startsWith('#')
              ) as string[];
          });
          
          result.links = [...new Set(links)];
          result.links.forEach(link => allLinks.add(link));
          
          // Check for warnings
          const comingSoonCount = await page.locator('text=/coming soon/i').count();
          if (comingSoonCount > 0) {
            result.warnings.push(`Contains ${comingSoonCount} "Coming Soon" text`);
          }
          
          const h1Count = await page.locator('h1').count();
          if (h1Count === 0) {
            result.warnings.push('Missing H1 heading');
          } else if (h1Count > 1) {
            result.warnings.push(`Multiple H1 headings (${h1Count})`);
          }
          
        } catch (error: any) {
          result.errors.push(error.message);
          console.log(` ❌ Error: ${error.message.substring(0, 50)}`);
        }
        
        results.push(result);
        
        // Brief pause
        await page.waitForTimeout(100);
      }
    }
    
    await context.close();
  }
  
  await browser.close();
  
  // Generate reports
  console.log('\n\n📊 Generating Reports...\n');
  generateReports();
}

function generateReports() {
  const reportsDir = path.join(process.cwd(), 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
  
  const summary = {
    total_pages: results.length,
    successful: results.filter(r => r.status === 200 && r.errors.length === 0).length,
    errors: results.filter(r => r.errors.length > 0).length,
    warnings: results.filter(r => r.warnings.length > 0).length,
    total_links_discovered: allLinks.size,
  };
  
  // JSON Report
  const jsonReport = {
    metadata: {
      generated_at: new Date().toISOString(),
      base_url: BASE_URL,
      locales: LOCALES,
      viewports: VIEWPORTS,
    },
    summary,
    discovered_links: Array.from(allLinks).sort(),
    results,
  };
  
  fs.writeFileSync(
    path.join(reportsDir, 'crawl-report.json'),
    JSON.stringify(jsonReport, null, 2)
  );
  
  // Markdown Report
  const md: string[] = [];
  md.push('# Site Crawl Report\n');
  md.push(`**Generated:** ${new Date().toLocaleString()}`);
  md.push(`**Base URL:** ${BASE_URL}\n`);
  
  md.push('## 📊 Summary\n');
  md.push(`- **Total pages tested:** ${summary.total_pages}`);
  md.push(`- **✅ Successful:** ${summary.successful}`);
  md.push(`- **❌ Errors:** ${summary.errors}`);
  md.push(`- **⚠️ Warnings:** ${summary.warnings}`);
  md.push(`- **🔗 Links discovered:** ${summary.total_links_discovered}\n`);
  
  // Errors section
  const errorsResults = results.filter(r => r.errors.length > 0);
  if (errorsResults.length > 0) {
    md.push('## ❌ Pages with Errors\n');
    errorsResults.forEach(r => {
      md.push(`### ${r.url}`);
      md.push(`- **Status:** ${r.status}`);
      md.push(`- **Viewport:** ${r.viewport}`);
      md.push(`- **Locale:** ${r.locale}`);
      md.push('- **Errors:**');
      r.errors.forEach(e => md.push(`  - ${e}`));
      md.push('');
    });
  }
  
  // Warnings section
  const warningsResults = results.filter(r => r.warnings.length > 0);
  if (warningsResults.length > 0) {
    md.push('## ⚠️ Pages with Warnings\n');
    
    // Group warnings by type
    const warningGroups = new Map<string, PageResult[]>();
    warningsResults.forEach(r => {
      r.warnings.forEach(w => {
        if (!warningGroups.has(w)) {
          warningGroups.set(w, []);
        }
        warningGroups.get(w)!.push(r);
      });
    });
    
    warningGroups.forEach((pages, warning) => {
      md.push(`### ${warning}`);
      md.push(`Found on ${pages.length} page(s):`);
      pages.slice(0, 10).forEach(p => {
        md.push(`- ${p.url} (${p.viewport}, ${p.locale})`);
      });
      if (pages.length > 10) {
        md.push(`- ... and ${pages.length - 10} more`);
      }
      md.push('');
    });
  }
  
  // Viewport comparison
  md.push('## 📱 Viewport Comparison\n');
  Object.keys(VIEWPORTS).forEach(viewport => {
    const viewportResults = results.filter(r => r.viewport === viewport);
    const successful = viewportResults.filter(r => r.status === 200 && r.errors.length === 0).length;
    const failed = viewportResults.filter(r => r.errors.length > 0).length;
    
    md.push(`### ${viewport}`);
    md.push(`- ✅ Passed: ${successful}`);
    md.push(`- ❌ Failed: ${failed}`);
    md.push('');
  });
  
  // Discovered links
  md.push('## 🗺️ Discovered Links\n');
  md.push(`Total unique internal links: ${allLinks.size}\n`);
  
  LOCALES.forEach(locale => {
    const localeLinks = Array.from(allLinks)
      .filter(link => locale === 'en' ? 
        !link.startsWith('/fr') && !link.startsWith('/ar') : 
        link.startsWith(`/${locale}`)
      )
      .sort();
    
    if (localeLinks.length > 0) {
      md.push(`### ${locale.toUpperCase()} (${localeLinks.length} links)`);
      localeLinks.forEach(link => md.push(`- ${link}`));
      md.push('');
    }
  });
  
  fs.writeFileSync(
    path.join(reportsDir, 'crawl-report.md'),
    md.join('\n')
  );
  
  console.log('✅ Reports generated:');
  console.log('   - reports/crawl-report.json');
  console.log('   - reports/crawl-report.md\n');
  
  console.log('📈 Summary:');
  console.log(`   - Total pages: ${summary.total_pages}`);
  console.log(`   - Successful: ${summary.successful}`);
  console.log(`   - Errors: ${summary.errors}`);
  console.log(`   - Warnings: ${summary.warnings}`);
  console.log(`   - Links discovered: ${summary.total_links_discovered}`);
}

// Run crawler
crawl().catch(console.error);
