/**
 * SEO 数据类型定义
 * 对应 Strapi CMS 中的 page-seo 内容类型
 */

export type SEOImage = {
  id: number;
  name: string;
  alternativeText?: string;
  caption?: string;
  width: number;
  height: number;
  formats?: {
    thumbnail?: {
      url: string;
    };
    small?: {
      url: string;
    };
    medium?: {
      url: string;
    };
    large?: {
      url: string;
    };
  };
  hash: string;
  ext: string;
  mime: string;
  size: number;
  url: string;
  previewUrl?: string;
  provider: string;
  provider_metadata?: any;
  createdAt: string;
  updatedAt: string;
};

export type PageSEO = {
  id: number;
  documentId: string;
  pageName: string;
  pagePath: string;
  locale: 'zh-Hans' | 'en' | 'zh-Hant';
  metaTitle: string;
  metaDescription: string;
  keywords?: string;
  publisher?: string;
  metaRobots?: string;
  xRobotsTag?: 'index, follow' | 'noindex, nofollow' | 'index, nofollow' | 'noindex, follow';
  canonicalURL?: string;
  ogTitle?: string;
  ogDescription?: string;
  ogImage?: SEOImage;
  ogType?: 'website' | 'article' | 'product';
  twitterCard?: 'summary' | 'summary_large_image' | 'app' | 'player';
  twitterTitle?: string;
  twitterDescription?: string;
  twitterImage?: SEOImage;
  structuredData?: any;
  createdAt: string;
  updatedAt: string;
  publishedAt: string;
};

export type StrapiResponse<T> = {
  data: T[];
  meta: {
    pagination: {
      page: number;
      pageSize: number;
      pageCount: number;
      total: number;
    };
  };
};

export type SEOMetadata = {
  title: string;
  description: string;
  keywords?: string;
  publisher?: string;
  robots?: string;
  xRobotsTag?: string;
  canonical?: string;
  openGraph?: {
    title?: string;
    description?: string;
    type?: string;
    images?: Array<{
      url: string;
      width?: number;
      height?: number;
      alt?: string;
    }>;
  };
  twitter?: {
    card?: string;
    title?: string;
    description?: string;
    images?: string[];
  };
  alternates?: {
    canonical?: string;
    languages?: Record<string, string>;
  };
};
