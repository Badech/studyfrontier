#!/usr/bin/env ts-node

/**
 * Full Audit Script
 * 
 * Runs comprehensive quality checks:
 * - TypeScript type checking
 * - ESLint linting
 * - Playwright crawl tests
 * - Accessibility tests
 * - i18n audit
 * 
 * Outputs all reports to /reports/ directory
 */

import { execSync } from 'child_process';
import * as fs from 'fs';
import * as path from 'path';

// ANSI color codes
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m',
};

function log(message: string, color: string = colors.reset) {
  console.log(`${color}${message}${colors.reset}`);
}

function logSection(title: string) {
  console.log('\n');
  log('━'.repeat(80), colors.cyan);
  log(title, colors.bright + colors.cyan);
  log('━'.repeat(80), colors.cyan);
  console.log('');
}

function logSuccess(message: string) {
  log(`✓ ${message}`, colors.green);
}

function logError(message: string) {
  log(`✗ ${message}`, colors.red);
}

function logWarning(message: string) {
  log(`⚠ ${message}`, colors.yellow);
}

function logInfo(message: string) {
  log(`ℹ ${message}`, colors.blue);
}

// Ensure reports directory exists
const reportsDir = path.join(process.cwd(), 'reports');
if (!fs.existsSync(reportsDir)) {
  fs.mkdirSync(reportsDir, { recursive: true });
  logSuccess('Created /reports/ directory');
}

// Create timestamped subdirectory
const timestamp = new Date().toISOString().replace(/[:.]/g, '-').split('T')[0];
const runId = new Date().toISOString().replace(/[:.]/g, '-');
const reportDir = path.join(reportsDir, runId);
fs.mkdirSync(reportDir, { recursive: true });

logSection('🔍 FULL AUDIT STARTED');
logInfo(`Report directory: /reports/${runId}/`);
logInfo(`Timestamp: ${new Date().toISOString()}`);

const results: Array<{ name: string; status: 'pass' | 'fail' | 'warn'; time: number; error?: string }> = [];

/**
 * Run a command and capture output
 */
function runCommand(
  name: string,
  command: string,
  outputFile: string,
  options: { critical?: boolean } = {}
): boolean {
  const startTime = Date.now();
  logSection(`${name}`);
  logInfo(`Running: ${command}`);

  try {
    const output = execSync(command, {
      encoding: 'utf-8',
      stdio: 'pipe',
      maxBuffer: 10 * 1024 * 1024, // 10MB buffer
    });

    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    // Save output to file
    const outputPath = path.join(reportDir, outputFile);
    fs.writeFileSync(outputPath, output);

    logSuccess(`${name} completed in ${duration}s`);
    logInfo(`Report saved: /reports/${runId}/${outputFile}`);

    results.push({ name, status: 'pass', time: endTime - startTime });
    return true;
  } catch (error: any) {
    const endTime = Date.now();
    const duration = ((endTime - startTime) / 1000).toFixed(2);

    // Save error output
    const errorOutput = error.stdout || error.stderr || error.message;
    const outputPath = path.join(reportDir, outputFile);
    fs.writeFileSync(outputPath, errorOutput);

    if (options.critical) {
      logError(`${name} FAILED in ${duration}s (CRITICAL)`);
    } else {
      logWarning(`${name} had issues in ${duration}s`);
    }
    logInfo(`Report saved: /reports/${runId}/${outputFile}`);

    results.push({
      name,
      status: options.critical ? 'fail' : 'warn',
      time: endTime - startTime,
      error: error.message,
    });

    return false;
  }
}

// ============================================================================
// 1. TypeScript Type Checking
// ============================================================================
runCommand(
  '1️⃣ TypeScript Type Check',
  'tsc --noEmit --pretty',
  '01-typecheck.txt',
  { critical: true }
);

// ============================================================================
// 2. ESLint
// ============================================================================
runCommand(
  '2️⃣ ESLint',
  'next lint --max-warnings 0',
  '02-lint.txt',
  { critical: true }
);

// ============================================================================
// 3. Playwright Crawl Tests
// ============================================================================
runCommand(
  '3️⃣ Playwright Crawl Tests',
  'playwright test tests/full-crawl.spec.ts --reporter=line',
  '03-crawl.txt',
  { critical: false }
);

// ============================================================================
// 4. Accessibility Tests
// ============================================================================
runCommand(
  '4️⃣ Accessibility Tests',
  'playwright test tests/a11y.spec.ts --reporter=line',
  '04-a11y.txt',
  { critical: false }
);

// ============================================================================
// 5. Contrast Tests
// ============================================================================
runCommand(
  '5️⃣ Contrast Tests',
  'playwright test tests/contrast.spec.ts --reporter=line',
  '05-contrast.txt',
  { critical: false }
);

// ============================================================================
// 6. Mobile UX Tests
// ============================================================================
runCommand(
  '6️⃣ Mobile UX Tests',
  'playwright test tests/mobile-ux.spec.ts --reporter=line',
  '06-mobile-ux.txt',
  { critical: false }
);

// ============================================================================
// 7. i18n Audit
// ============================================================================
runCommand(
  '7️⃣ i18n Audit',
  'ts-node scripts/i18n-audit.ts',
  '07-i18n-audit.txt',
  { critical: false }
);

// ============================================================================
// Generate Summary Report
// ============================================================================
logSection('📊 GENERATING SUMMARY REPORT');

const totalTests = results.length;
const passedTests = results.filter((r) => r.status === 'pass').length;
const failedTests = results.filter((r) => r.status === 'fail').length;
const warnTests = results.filter((r) => r.status === 'warn').length;
const totalTime = results.reduce((sum, r) => sum + r.time, 0);

const summary = `
╔════════════════════════════════════════════════════════════════════╗
║                                                                    ║
║                    FULL AUDIT SUMMARY REPORT                       ║
║                                                                    ║
╚════════════════════════════════════════════════════════════════════╝

Date: ${new Date().toISOString()}
Report Directory: /reports/${runId}/

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
OVERVIEW
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

Total Tests:    ${totalTests}
✓ Passed:       ${passedTests}
✗ Failed:       ${failedTests}
⚠ Warnings:     ${warnTests}
Total Time:     ${(totalTime / 1000).toFixed(2)}s

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
DETAILED RESULTS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${results
  .map((r, i) => {
    const status =
      r.status === 'pass' ? '✓ PASS' : r.status === 'fail' ? '✗ FAIL' : '⚠ WARN';
    const duration = (r.time / 1000).toFixed(2);
    return `${i + 1}. ${r.name}
   Status: ${status}
   Time: ${duration}s
   ${r.error ? `Error: ${r.error}` : ''}`;
  })
  .join('\n\n')}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
REPORTS GENERATED
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

1. TypeScript:      /reports/${runId}/01-typecheck.txt
2. ESLint:          /reports/${runId}/02-lint.txt
3. Crawl Tests:     /reports/${runId}/03-crawl.txt
4. A11y Tests:      /reports/${runId}/04-a11y.txt
5. Contrast Tests:  /reports/${runId}/05-contrast.txt
6. Mobile UX Tests: /reports/${runId}/06-mobile-ux.txt
7. i18n Audit:      /reports/${runId}/07-i18n-audit.txt
8. Summary:         /reports/${runId}/00-SUMMARY.txt

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
NEXT STEPS
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

${
  failedTests > 0
    ? `⚠️  CRITICAL: ${failedTests} test(s) failed. Please review and fix before deploying.`
    : '✅ All critical tests passed!'
}

${
  warnTests > 0
    ? `ℹ️  ${warnTests} test(s) have warnings. Review when possible.`
    : ''
}

View full reports in: /reports/${runId}/

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

// Save summary
const summaryPath = path.join(reportDir, '00-SUMMARY.txt');
fs.writeFileSync(summaryPath, summary);

// Print summary to console
console.log(summary);

// Create latest symlink (optional, for convenience)
const latestLink = path.join(reportsDir, 'latest');
if (fs.existsSync(latestLink)) {
  fs.unlinkSync(latestLink);
}
try {
  fs.symlinkSync(runId, latestLink, 'dir');
  logInfo('Created symlink: /reports/latest/ -> /reports/' + runId + '/');
} catch (e) {
  // Symlinks might not work on Windows, ignore error
}

// Exit with appropriate code
if (failedTests > 0) {
  logError(`\nAudit completed with ${failedTests} CRITICAL failure(s)`);
  process.exit(1);
} else if (warnTests > 0) {
  logWarning(`\nAudit completed with ${warnTests} warning(s)`);
  process.exit(0);
} else {
  logSuccess('\nAudit completed successfully! All tests passed. ✨');
  process.exit(0);
}
