/**
 * Translation Guard Component
 * 
 * Shows a dev-only panel with missing translations.
 * Include once in your root layout.
 */

'use client';

import { TranslationDevPanel } from '@/lib/i18n-guard';

export function TranslationGuard() {
  if (process.env.NODE_ENV === 'production') {
    return null;
  }

  return <TranslationDevPanel />;
}
