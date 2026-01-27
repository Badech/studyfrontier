import * as Sentry from '@sentry/nextjs';

export const onRouterTransitionStart = Sentry.captureRouterTransitionStart;

export function register() {
  if (process.env.NODE_ENV === 'production') {
    Sentry.init({
      dsn: process.env.NEXT_PUBLIC_SENTRY_DSN || '',
      tracesSampleRate: 0.1,
      replaysSessionSampleRate: 0.0,
      replaysOnErrorSampleRate: 0.0,
      environment: process.env.NODE_ENV,
      denyUrls: [
        /extensions\//i,
        /^chrome:\/\//i,
        /^moz-extension:\/\//i,
        /^safari-extension:/i,
      ],
      ignoreErrors: [
        'NetworkError',
        'Failed to fetch',
        'Load failed',
        'Network request failed',
        'The network connection was lost',
        'Request aborted',
        'ChunkLoadError',
        'Loading chunk',
        'ResizeObserver loop limit exceeded',
      ],
      beforeSend(event) {
        if (event.user) {
          delete event.user.email;
          delete event.user.ip_address;
          delete event.user.username;
        }

        const scrub = (value?: string | null) =>
          value
            ? value
                .replace(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/gi, '[redacted-email]')
                .replace(/\+?\d[\d\s()-]{7,}\d/g, '[redacted-phone]')
                .replace(/wa\.me\/[0-9]+/gi, 'wa.me/[redacted]')
            : value;

        if (event.message) {
          event.message = scrub(event.message) || event.message;
        }

        event.exception?.values?.forEach((exception) => {
          if (exception.value) {
            exception.value = scrub(exception.value) || exception.value;
          }
        });

        event.breadcrumbs?.forEach((crumb) => {
          if (crumb.message) {
            crumb.message = scrub(crumb.message) || crumb.message;
          }
        });

        if (event.request?.url) {
          event.request.url = scrub(event.request.url) || event.request.url;
        }

        return event;
      },
    });
  }
}
