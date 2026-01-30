/**
 * Deep i18n Scanner - Finds ALL hardcoded English text
 * Scans every page systematically
 */

import fs from 'fs';
import path from 'path';

interface HardcodedIssue {
  file: string;
  line: number;
  code: string;
  hardcodedText: string;
  severity: 'high' | 'medium' | 'low';
}

const issues: HardcodedIssue[] = [];

function extractQuotedStrings(line: string): string[] {
  const patterns = [
    /"([^"]{10,})"/g,  // Double quotes with 10+ chars
    /'([^']{10,})'/g,  // Single quotes with 10+ chars
    /`([^`]{10,})`/g,  // Backticks with 10+ chars
  ];
  
  const found: string[] = [];
  patterns.forEach(pattern => {
    const matches = line.matchAll(pattern);
    for (const match of matches) {
      if (match[1]) found.push(match[1]);
    }
  });
  
  return found;
}

function isHardcodedEnglish(text: string, line: string): boolean {
  // Skip if it's clearly a translation call
  if (line.includes('t(') || line.includes('useTranslations') || line.includes('getTranslations')) {
    return false;
  }
  
  // Skip imports, comments, file paths
  if (line.trim().startsWith('import') || 
      line.trim().startsWith('//') ||
      line.trim().startsWith('*') ||
      line.includes('from \'') ||
      line.includes('from "') ||
      text.includes('/') && text.includes('.')) {
    return false;
  }
  
  // Skip CSS classes, tailwind, technical terms
  if (line.includes('className') || 
      text.match(/^[a-z-]+$/) || // kebab-case (likely CSS)
      text.match(/^[A-Z][a-z]+([A-Z][a-z]+)+$/) || // PascalCase
      text.includes('px-') || text.includes('py-') || text.includes('bg-')) {
    return false;
  }
  
  // Check if it looks like English prose
  const englishWords = /\b(the|and|or|for|with|from|your|our|you|we|this|that|are|is|have|has|will|can|about|more|get|all|new|free|learn|start|help|contact|apply|success|study)\b/i;
  const hasMultipleWords = text.split(/\s+/).length >= 3;
  const hasEnglishWords = englishWords.test(text);
  
  return hasMultipleWords && hasEnglishWords;
}

function scanFile(filePath: string) {
  const content = fs.readFileSync(filePath, 'utf-8');
  const lines = content.split('\n');
  
  lines.forEach((line, index) => {
    const strings = extractQuotedStrings(line);
    
    strings.forEach(str => {
      if (isHardcodedEnglish(str, line)) {
        const severity = str.length > 50 ? 'high' : str.split(' ').length > 5 ? 'medium' : 'low';
        
        issues.push({
          file: filePath,
          line: index + 1,
          code: line.trim().substring(0, 100),
          hardcodedText: str,
          severity,
        });
      }
    });
  });
}

function scanDirectory(dir: string) {
  if (!fs.existsSync(dir)) return;
  
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  
  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);
    
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      scanDirectory(fullPath);
    } else if (entry.isFile() && (entry.name.endsWith('.tsx') || entry.name.endsWith('.ts')) && !entry.name.includes('.spec.')) {
      scanFile(fullPath);
    }
  }
}

console.log('\n🔍 Starting DEEP scan for hardcoded English text...\n');

scanDirectory('app/[locale]');
scanDirectory('components');

// Sort by severity
const high = issues.filter(i => i.severity === 'high');
const medium = issues.filter(i => i.severity === 'medium');
const low = issues.filter(i => i.severity === 'low');

console.log('📊 DEEP SCAN RESULTS:');
console.log(`  🔴 High Priority: ${high.length}`);
console.log(`  🟡 Medium Priority: ${medium.length}`);
console.log(`  🟢 Low Priority: ${low.length}`);
console.log(`  📝 Total Issues: ${issues.length}\n`);

if (high.length > 0) {
  console.log('\n🔴 HIGH PRIORITY (Long text blocks):');
  high.forEach((issue, idx) => {
    console.log(`\n${idx + 1}. ${issue.file}:${issue.line}`);
    console.log(`   Text: "${issue.hardcodedText.substring(0, 80)}..."`);
    console.log(`   Code: ${issue.code.substring(0, 80)}`);
  });
}

if (medium.length > 0) {
  console.log('\n\n🟡 MEDIUM PRIORITY (Sentences):');
  medium.slice(0, 20).forEach((issue, idx) => {
    console.log(`\n${idx + 1}. ${issue.file}:${issue.line}`);
    console.log(`   Text: "${issue.hardcodedText}"`);
  });
  if (medium.length > 20) {
    console.log(`\n   ... and ${medium.length - 20} more`);
  }
}

// Group by file
const byFile = issues.reduce((acc, issue) => {
  if (!acc[issue.file]) acc[issue.file] = [];
  acc[issue.file].push(issue);
  return acc;
}, {} as Record<string, HardcodedIssue[]>);

console.log('\n\n📁 FILES WITH ISSUES:');
Object.entries(byFile)
  .sort((a, b) => b[1].length - a[1].length)
  .forEach(([file, fileIssues]) => {
    console.log(`\n  ${file}: ${fileIssues.length} issues`);
  });

// Save report
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    total: issues.length,
    high: high.length,
    medium: medium.length,
    low: low.length,
  },
  byFile,
  allIssues: issues,
};

fs.writeFileSync('tmp_rovodev_deep_scan_report.json', JSON.stringify(report, null, 2));
console.log('\n✅ Detailed report saved to: tmp_rovodev_deep_scan_report.json\n');
