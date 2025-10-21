import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import createNextIntlPlugin from 'next-intl/plugin';
import './src/libs/Env';

// Define the base Next.js configuration
const baseConfig: NextConfig = {
  eslint: {
    dirs: ['.'],
  },
  turbopack: {
    rules: codeInspectorPlugin({
      bundler: 'turbopack',
    }),
  },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'brainco-common-public.oss-cn-hangzhou.aliyuncs.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

// Initialize the Next-Intl plugin
let configWithPlugins = createNextIntlPlugin('./src/libs/I18n.ts')(baseConfig);

// Conditionally enable bundle analysis
if (process.env.ANALYZE === 'true') {
  configWithPlugins = withBundleAnalyzer()(configWithPlugins);
}

const nextConfig = configWithPlugins;
export default nextConfig;
