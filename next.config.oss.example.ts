/**
 * Next.js 配置文件 - 支持 OSS 静态资源托管
 *
 * 使用方法：
 * 1. 将此文件内容合并到你的 next.config.ts
 * 2. 或直接替换 next.config.ts（备份原文件）
 */

import type { NextConfig } from 'next';
import withBundleAnalyzer from '@next/bundle-analyzer';
import { codeInspectorPlugin } from 'code-inspector-plugin';
import createNextIntlPlugin from 'next-intl/plugin';
import './src/libs/Env';

// 定义基础 Next.js 配置
const baseConfig: NextConfig = {
  // ========================================
  // OSS CDN 配置（重要）
  // ========================================
  // 生产环境使用 CDN，开发环境使用本地
  assetPrefix: process.env.NODE_ENV === 'production'
    ? process.env.NEXT_PUBLIC_CDN_URL || ''
    : '',

  eslint: {
    dirs: ['.'],
    ignoreDuringBuilds: true,
  },
  turbopack: {
    rules: codeInspectorPlugin({
      bundler: 'turbopack',
    }),
  },
  poweredByHeader: false,
  reactStrictMode: true,

  // 图片配置
  images: {
    unoptimized: true,
    remotePatterns: [
      // OSS 原始域名
      {
        protocol: 'https',
        hostname: 'website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com',
        port: '',
        pathname: '/**',
      },
      // CDN 域名
      {
        protocol: 'https',
        hostname: 'cdn.brainco.com', // 替换为你的 CDN 域名
        port: '',
        pathname: '/**',
      },
      // 其他 OSS Bucket
      {
        protocol: 'https',
        hostname: 'brainco-common-public.oss-cn-hangzhou.aliyuncs.com',
        port: '',
        pathname: '/**',
      },
      // 网站域名
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

  // 输出配置
  output: 'standalone', // 可选：用于 Docker 部署

  // 压缩配置
  compress: true,

  // 自定义 headers
  async headers() {
    return [
      {
        // 为所有 API 路由添加 CORS 头
        source: '/api/:path*',
        headers: [
          { key: 'Access-Control-Allow-Credentials', value: 'true' },
          { key: 'Access-Control-Allow-Origin', value: '*' },
          { key: 'Access-Control-Allow-Methods', value: 'GET,DELETE,PATCH,POST,PUT' },
          { key: 'Access-Control-Allow-Headers', value: 'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version' },
        ],
      },
    ];
  },
};

// 初始化 Next-Intl 插件
let configWithPlugins = createNextIntlPlugin('./src/libs/I18n.ts')(baseConfig);

// 条件性启用 bundle 分析
if (process.env.ANALYZE === 'true') {
  configWithPlugins = withBundleAnalyzer()(configWithPlugins);
}

const nextConfig = configWithPlugins;
export default nextConfig;
