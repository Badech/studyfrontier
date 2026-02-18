import { BRAND_CONFIG } from '@/lib/config/brand';

/**
 * Environment variables validation and typing
 * 
 * Note: Contact details now use BRAND_CONFIG for single source of truth.
 * Environment variables are optional overrides only.
 */
export const env = {
  whatsapp: {
    // Use env var if provided, otherwise fall back to brand config
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || BRAND_CONFIG.whatsapp.numberE164,
    defaultMessage: process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE || BRAND_CONFIG.whatsapp.prefillText,
  },
  sentry: {
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },
  analytics: {
    enabled: process.env.NODE_ENV === 'production',
  },
  site: {
    url: process.env.NEXT_PUBLIC_SITE_URL || BRAND_CONFIG.websiteUrl,
  },
} as const;
