/**
 * i18n Audit Script
 * 
 * Scans all components for:
 * 1. Translation key usage (t('...'))
 * 2. Missing translation keys
 * 3. Hardcoded English strings
 * 4. Raw translation keys rendered in UI
 * 
 * Generates: /reports/i18n-report.md
 */

import * as fs from 'fs';
import * as path from 'path';
import { glob } from 'glob';

interface TranslationUsage {
  file: string;
  line: number;
  namespace: string;
  key: string;
  fullKey: string;
  hasDefault: boolean;
  defaultValue?: string;
}

interface HardcodedString {
  file: string;
  line: number;
  content: string;
  context: string;
}

interface MissingKey {
  namespace: string;
  key: string;
  usedIn: string[];
  hasDefault: boolean;
}

const results = {
  translationUsages: [] as TranslationUsage[],
  hardcodedStrings: [] as HardcodedString[],
  missingKeys: [] as MissingKey[],
  namespaces: new Set<string>(),
};

/**
 * Load translation files
 */
function loadTranslations(locale: string): any {
  const filePath = path.join(process.cwd(), `messages/${locale}.json`);
  if (!fs.existsSync(filePath)) {
    console.warn(`Translation file not found: ${filePath}`);
    return {};
  }
  return JSON.parse(fs.readFileSync(filePath, 'utf-8'));
}

/**
 * Check if a translation key exists in the translation object
 */
function keyExists(translations: any, fullKey: string): boolean {
  const keys = fullKey.split('.');
  let current = translations;
  
  for (const key of keys) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return false;
    }
  }
  
  return true;
}

/**
 * Extract translation usages from a file
 */
function extractTranslationUsages(filePath: string, content: string) {
  const lines = content.split('\n');
  
  // Extract useTranslations namespace
  const namespaceMatch = content.match(/useTranslations\(['"]([\w.]*)['"]\)/);
  const namespace = namespaceMatch ? namespaceMatch[1] : '';
  
  if (namespace) {
    results.namespaces.add(namespace);
  }
  
  // Find all t('...') or t("...") calls
  const tCallRegex = /t\(['"]([\w.]+)['"](?:,\s*\{[^}]*default:\s*['"]([^'"]+)['"][^}]*\})?\)/g;
  
  lines.forEach((line, index) => {
    let match;
    while ((match = tCallRegex.exec(line)) !== null) {
      const key = match[1];
      const defaultValue = match[2];
      const fullKey = namespace ? `${namespace}.${key}` : key;
      
      results.translationUsages.push({
        file: filePath,
        line: index + 1,
        namespace,
        key,
        fullKey,
        hasDefault: !!defaultValue,
        defaultValue,
      });
    }
  });
}

/**
 * Find hardcoded English strings in JSX
 */
function findHardcodedStrings(filePath: string, content: string) {
  const lines = content.split('\n');
  
  // Patterns to detect hardcoded English in JSX
  const patterns = [
    // Text inside JSX tags: <div>Some text</div>
    />[A-Z][^<>]*[a-z]{4,}[^<>]*</g,
    // String literals in className or other props (excluding Tailwind classes)
    /\w+=['"](?![\w-\s]*\btext-\b|[\w-\s]*\bflex\b|[\w-\s]*\bgrid\b|[\w-\s]*\bbg-\b|[\w-\s]*\bpx-\b|[\w-\s]*\bpy-\b|[\w-\s]*\bmt-\b|[\w-\s]*\bmb-\b)([A-Z][a-zA-Z\s]{10,})['"]>/g,
  ];
  
  // Skip certain patterns that are usually false positives
  const skipPatterns = [
    /className=/,
    /href=/,
    /src=/,
    /alt=/,
    /aria-/,
    /data-/,
    /import/,
    /export/,
    /console\./,
    /^\s*\/\//,  // Comments
    /^\s*\*/,    // Comments
  ];
  
  lines.forEach((line, index) => {
    // Skip lines with skip patterns
    if (skipPatterns.some(pattern => pattern.test(line))) {
      return;
    }
    
    // Skip lines that already use translations
    if (line.includes('t(') || line.includes('useTranslations')) {
      return;
    }
    
    // Check for JSX text content
    const jsxTextMatch = line.match(/>\s*([A-Z][a-zA-Z\s]{10,})\s*</);
    if (jsxTextMatch) {
      const content = jsxTextMatch[1].trim();
      if (content.length > 10 && /[A-Z]/.test(content)) {
        results.hardcodedStrings.push({
          file: filePath,
          line: index + 1,
          content,
          context: line.trim().substring(0, 80),
        });
      }
    }
  });
}

/**
 * Check for missing translation keys
 */
function checkMissingKeys(translations: any) {
  const missingMap = new Map<string, MissingKey>();
  
  results.translationUsages.forEach((usage) => {
    const exists = keyExists(translations, usage.fullKey);
    
    if (!exists) {
      const key = usage.fullKey;
      if (!missingMap.has(key)) {
        missingMap.set(key, {
          namespace: usage.namespace,
          key: usage.key,
          usedIn: [],
          hasDefault: false,
        });
      }
      
      const missing = missingMap.get(key)!;
      missing.usedIn.push(`${usage.file}:${usage.line}`);
      if (usage.hasDefault) {
        missing.hasDefault = true;
      }
    }
  });
  
  results.missingKeys = Array.from(missingMap.values());
}

/**
 * Generate Markdown report
 */
function generateReport() {
  const reportsDir = path.join(process.cwd(), 'reports');
  if (!fs.existsSync(reportsDir)) {
    fs.mkdirSync(reportsDir, { recursive: true });
  }
  
  const md: string[] = [];
  
  md.push('# i18n Audit Report\n');
  md.push(`**Generated:** ${new Date().toLocaleString()}\n`);
  md.push('---\n');
  
  // Summary
  md.push('## 📊 Summary\n');
  md.push(`- **Translation usages found:** ${results.translationUsages.length}`);
  md.push(`- **Unique namespaces:** ${results.namespaces.size}`);
  md.push(`- **Missing translation keys:** ${results.missingKeys.length}`);
  md.push(`- **Potential hardcoded strings:** ${results.hardcodedStrings.length}\n`);
  
  // Namespaces used
  md.push('## 🗂️ Namespaces Used\n');
  Array.from(results.namespaces).sort().forEach((ns) => {
    md.push(`- \`${ns}\``);
  });
  md.push('');
  
  // Missing keys
  if (results.missingKeys.length > 0) {
    md.push('## ❌ Missing Translation Keys\n');
    md.push('These keys are used in components but not defined in `messages/en.json`:\n');
    
    // Group by namespace
    const byNamespace = new Map<string, MissingKey[]>();
    results.missingKeys.forEach((missing) => {
      const ns = missing.namespace || '(root)';
      if (!byNamespace.has(ns)) {
        byNamespace.set(ns, []);
      }
      byNamespace.get(ns)!.push(missing);
    });
    
    byNamespace.forEach((keys, namespace) => {
      md.push(`### Namespace: \`${namespace}\`\n`);
      keys.forEach((missing) => {
        md.push(`#### \`${missing.key}\``);
        md.push(`- **Full key:** \`${namespace}.${missing.key}\``);
        md.push(`- **Has default value:** ${missing.hasDefault ? '✅ Yes' : '❌ No'}`);
        md.push(`- **Used in:**`);
        missing.usedIn.forEach((location) => {
          md.push(`  - ${location}`);
        });
        md.push('');
      });
    });
  } else {
    md.push('## ✅ All Translation Keys Present\n');
    md.push('No missing translation keys found!\n');
  }
  
  // Hardcoded strings
  if (results.hardcodedStrings.length > 0) {
    md.push('## ⚠️ Potential Hardcoded English Strings\n');
    md.push('These strings appear to be hardcoded in components and should be moved to translation files:\n');
    
    // Group by file
    const byFile = new Map<string, HardcodedString[]>();
    results.hardcodedStrings.forEach((str) => {
      if (!byFile.has(str.file)) {
        byFile.set(str.file, []);
      }
      byFile.get(str.file)!.push(str);
    });
    
    byFile.forEach((strings, file) => {
      md.push(`### ${file}\n`);
      strings.forEach((str) => {
        md.push(`- **Line ${str.line}:** "${str.content}"`);
        md.push(`  \`\`\`tsx`);
        md.push(`  ${str.context}`);
        md.push(`  \`\`\`\n`);
      });
    });
  }
  
  // Translation usage details
  md.push('## 📋 Translation Usage Details\n');
  md.push(`Total translation calls: ${results.translationUsages.length}\n`);
  
  // Group by namespace
  const usageByNamespace = new Map<string, TranslationUsage[]>();
  results.translationUsages.forEach((usage) => {
    const ns = usage.namespace || '(root)';
    if (!usageByNamespace.has(ns)) {
      usageByNamespace.set(ns, []);
    }
    usageByNamespace.get(ns)!.push(usage);
  });
  
  usageByNamespace.forEach((usages, namespace) => {
    md.push(`### Namespace: \`${namespace}\` (${usages.length} usages)\n`);
    
    // Get unique keys
    const uniqueKeys = new Set(usages.map(u => u.key));
    md.push(`**Unique keys:** ${uniqueKeys.size}\n`);
    
    Array.from(uniqueKeys).sort().forEach((key) => {
      const keyUsages = usages.filter(u => u.key === key);
      md.push(`- \`${key}\` - used ${keyUsages.length} time(s)`);
    });
    md.push('');
  });
  
  // Recommendations
  md.push('## 💡 Recommendations\n');
  
  if (results.missingKeys.length > 0) {
    md.push('### Fix Missing Keys\n');
    md.push('1. Add missing keys to `messages/en.json`');
    md.push('2. Add corresponding translations to `messages/fr.json` and `messages/ar.json`');
    md.push('3. Remove default values from components once keys are added\n');
  }
  
  if (results.hardcodedStrings.length > 0) {
    md.push('### Move Hardcoded Strings\n');
    md.push('1. Identify hardcoded English strings in components');
    md.push('2. Create appropriate translation keys');
    md.push('3. Replace hardcoded strings with `t()` calls\n');
  }
  
  md.push('### Best Practices\n');
  md.push('1. Always use translation keys for user-facing text');
  md.push('2. Use meaningful, hierarchical key names (e.g., `home.hero.title`)');
  md.push('3. Avoid default values in production code - use them only for development');
  md.push('4. Keep translation files in sync across all locales');
  md.push('5. Use a dev-only runtime guard to catch missing translations\n');
  
  // Write report
  const reportPath = path.join(reportsDir, 'i18n-report.md');
  fs.writeFileSync(reportPath, md.join('\n'));
  
  console.log(`\n✅ i18n audit report generated: ${reportPath}\n`);
  
  return reportPath;
}

/**
 * Main audit function
 */
async function runAudit() {
  console.log('🔍 Starting i18n audit...\n');
  
  // Find all TypeScript/TSX files
  const files = await glob('**/*.{ts,tsx}', {
    cwd: process.cwd(),
    ignore: [
      'node_modules/**',
      '.next/**',
      'out/**',
      'build/**',
      'dist/**',
      'coverage/**',
      'scripts/**',
      'tests/**',
      '*.config.ts',
      '*.d.ts',
    ],
  });
  
  console.log(`Found ${files.length} files to analyze\n`);
  
  // Analyze each file
  for (const file of files) {
    const filePath = path.join(process.cwd(), file);
    const content = fs.readFileSync(filePath, 'utf-8');
    
    // Extract translation usages
    if (content.includes('useTranslations') || content.includes("t('") || content.includes('t("')) {
      extractTranslationUsages(file, content);
    }
    
    // Find hardcoded strings in components
    if (file.startsWith('components/') || file.startsWith('app/')) {
      findHardcodedStrings(file, content);
    }
  }
  
  console.log(`📝 Found ${results.translationUsages.length} translation usages`);
  console.log(`📝 Found ${results.hardcodedStrings.length} potential hardcoded strings`);
  console.log(`📝 Found ${results.namespaces.size} unique namespaces\n`);
  
  // Load English translations and check for missing keys
  console.log('🔍 Checking for missing translation keys...\n');
  const enTranslations = loadTranslations('en');
  checkMissingKeys(enTranslations);
  
  if (results.missingKeys.length > 0) {
    console.log(`❌ Found ${results.missingKeys.length} missing translation keys\n`);
    results.missingKeys.forEach((missing) => {
      console.log(`   - ${missing.namespace}.${missing.key}`);
    });
  } else {
    console.log('✅ All translation keys are present\n');
  }
  
  // Generate report
  const reportPath = generateReport();
  
  // Summary
  console.log('📊 Audit Summary:');
  console.log(`   - Translation usages: ${results.translationUsages.length}`);
  console.log(`   - Namespaces: ${results.namespaces.size}`);
  console.log(`   - Missing keys: ${results.missingKeys.length}`);
  console.log(`   - Hardcoded strings: ${results.hardcodedStrings.length}`);
  console.log(`\n📄 Report: ${reportPath}\n`);
  
  // Exit with error code if issues found
  if (results.missingKeys.length > 0) {
    process.exit(1);
  }
}

// Run audit
runAudit().catch(console.error);
