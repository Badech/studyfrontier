/**
 * i18n Runtime Guard
 * 
 * Dev-only utility to detect and log missing translation keys.
 * Shows visual indicators in development, silent in production.
 */

'use client';

import { useEffect } from 'react';

interface MissingTranslationEvent {
  key: string;
  namespace: string;
  component: string;
  timestamp: number;
}

// Track missing translations to avoid duplicate logs
const missingTranslations = new Map<string, MissingTranslationEvent>();

/**
 * Log missing translation key (dev only)
 */
export function logMissingTranslation(
  key: string,
  namespace: string = '',
  component: string = 'Unknown'
) {
  if (process.env.NODE_ENV === 'production') return;

  const fullKey = namespace ? `${namespace}.${key}` : key;
  
  if (!missingTranslations.has(fullKey)) {
    const event: MissingTranslationEvent = {
      key,
      namespace,
      component,
      timestamp: Date.now(),
    };
    
    missingTranslations.set(fullKey, event);
    
    // Log with clear formatting
    console.warn(
      `%c[i18n] Missing Translation Key`,
      'color: #ff6b6b; font-weight: bold;',
      `\n  Key: ${key}`,
      namespace ? `\n  Namespace: ${namespace}` : '',
      `\n  Full Key: ${fullKey}`,
      `\n  Component: ${component}`,
      `\n  Add to messages/en.json under "${namespace || 'root'}"`
    );
  }
}

/**
 * Get all missing translations (for debugging)
 */
export function getMissingTranslations(): MissingTranslationEvent[] {
  return Array.from(missingTranslations.values());
}

/**
 * Clear missing translations log
 */
export function clearMissingTranslations() {
  missingTranslations.clear();
}

/**
 * Visual indicator component for missing translations (dev only)
 */
export function MissingTranslationBadge({ translationKey }: { translationKey: string }) {
  if (process.env.NODE_ENV === 'production') return null;

  return (
    <span
      className="inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono bg-red-100 text-red-700 border border-red-300 rounded"
      title={`Missing translation: ${translationKey}`}
    >
      ⚠️ {translationKey}
    </span>
  );
}

/**
 * Dev panel to show all missing translations
 */
export function TranslationDevPanel() {
  if (process.env.NODE_ENV === 'production') return null;

  const missing = getMissingTranslations();

  if (missing.length === 0) return null;

  return (
    <div className="fixed bottom-4 right-4 max-w-md bg-red-50 border-2 border-red-300 rounded-lg shadow-lg p-4 z-50">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-red-900 text-sm">
          ⚠️ Missing Translations ({missing.length})
        </h3>
        <button
          onClick={clearMissingTranslations}
          className="text-xs text-red-600 hover:text-red-800 underline"
        >
          Clear
        </button>
      </div>
      <div className="max-h-48 overflow-y-auto space-y-1">
        {missing.map((item) => {
          const fullKey = item.namespace ? `${item.namespace}.${item.key}` : item.key;
          return (
            <div
              key={fullKey}
              className="text-xs font-mono bg-white p-2 rounded border border-red-200"
            >
              <div className="font-semibold text-red-900">{fullKey}</div>
              <div className="text-gray-600 text-[10px]">in {item.component}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

/**
 * Hook to monitor and report missing translations
 */
export function useTranslationGuard(namespace: string, component: string) {
  useEffect(() => {
    if (process.env.NODE_ENV === 'production') return;

    // Log component mount with namespace
    console.log(
      `%c[i18n] Component Mounted`,
      'color: #51cf66;',
      `\n  Component: ${component}`,
      `\n  Namespace: ${namespace}`
    );
  }, [namespace, component]);
}

/**
 * Enhanced useTranslations wrapper with guard
 */
export function createGuardedTranslations<T extends Function>(
  useTranslations: T,
  namespace: string,
  componentName: string
): T {
  return ((...args: any[]) => {
    const t = (useTranslations as any)(...args);
    
    if (process.env.NODE_ENV === 'production') {
      return t;
    }

    // Wrap t() to detect missing keys
    return new Proxy(t, {
      apply(target, thisArg, argumentsList) {
        const key = argumentsList[0];
        const options = argumentsList[1];
        
        try {
          const result = Reflect.apply(target, thisArg, argumentsList);
          
          // If result equals the key, it might be missing
          if (result === key || result === `${namespace}.${key}`) {
            logMissingTranslation(key, namespace, componentName);
          }
          
          return result;
        } catch (error) {
          logMissingTranslation(key, namespace, componentName);
          return key; // Fallback to key if translation fails
        }
      },
    });
  }) as T;
}
