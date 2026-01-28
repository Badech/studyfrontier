const createNextIntlPlugin = require('next-intl/plugin');
const { withSentryConfig } = require('@sentry/nextjs');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  // Build will now fail on TypeScript and ESLint errors (as it should)
};
 
const sentryWebpackPluginOptions = {
  silent: true,
  hideSourceMaps: true,
};
 
module.exports = withSentryConfig(withNextIntl(nextConfig), sentryWebpackPluginOptions);
