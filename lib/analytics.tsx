'use client';

import { Analytics as VercelAnalytics } from '@vercel/analytics/react';

/**
 * Vercel Analytics wrapper component
 * Only loads analytics in production
 */
export function Analytics() {
  if (process.env.NODE_ENV !== 'production') {
    return null;
  }

  return <VercelAnalytics />;
}
