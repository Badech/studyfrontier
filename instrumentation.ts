// Sentry instrumentation hook
// This file is used to initialize Sentry on both server and client

export async function register() {
  if (process.env.NEXT_RUNTIME === 'nodejs') {
    // Server-side Sentry initialization
    // Uncomment when SENTRY_DSN is configured
    // await import('./sentry.server.config');
  }

  if (process.env.NEXT_RUNTIME === 'edge') {
    // Edge runtime Sentry initialization
    // Uncomment when SENTRY_DSN is configured
    // await import('./sentry.edge.config');
  }
}
