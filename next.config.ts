import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import createNextIntlPlugin from 'next-intl/plugin';
import './src/libs/Env';

const baseConfig: NextConfig = {
  // 添加 CDN 域名配置
  assetPrefix:
    process.env.NODE_ENV === 'production'
      ? process.env.NEXT_PUBLIC_CDN_URL
      : '',
  turbopack: {
    rules: codeInspectorPlugin({
      bundler: 'turbopack',
    }),
  },
  poweredByHeader: false,
  reactStrictMode: true,
  images: {
    unoptimized: true,
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
      {
        protocol: 'https',
        hostname: 'www.brainco.cn',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'brainco.cn',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'bc-api.brainco.cn',
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
