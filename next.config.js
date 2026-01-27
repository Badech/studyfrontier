const createNextIntlPlugin = require('next-intl/plugin');
const { withSentryConfig } = require('@sentry/nextjs');
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [],
    unoptimized: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
 
const sentryWebpackPluginOptions = {
  silent: true,
  hideSourceMaps: true,
};
 
module.exports = withSentryConfig(withNextIntl(nextConfig), sentryWebpackPluginOptions);
