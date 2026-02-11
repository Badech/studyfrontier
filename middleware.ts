import createMiddleware from 'next-intl/middleware';
import { locales } from './i18n';

export default createMiddleware({
  // A list of all locales that are supported
  locales,

  // Used when no locale matches
  defaultLocale: 'en',

  // Never use a prefix for the default locale
  localePrefix: 'always',
});

export const config = {
  // Match only internationalized pathnames
  matcher: ['/', '/(ar|en|fr)/:path*'],
};
