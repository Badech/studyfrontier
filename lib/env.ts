// Environment variables validation and typing
export const env = {
  whatsapp: {
    number: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '+212600000000',
    defaultMessage: process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE || 
      'Hello, I want to learn more about study abroad programs',
  },
  sentry: {
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
  },
  analytics: {
    enabled: process.env.NODE_ENV === 'production',
  },
} as const;
