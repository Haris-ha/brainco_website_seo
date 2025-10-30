/**
 * 结构化数据组件
 * 在页面中添加 JSON-LD 格式的 Schema.org 数据
 */

import type { PageSEO } from '@/types/seo';
import Script from 'next/script';

type StructuredDataProps = {
  seoData: PageSEO | null;
  additionalSchema?: any;
};

/**
 * 生成网页信息的结构化数据
 */
function generateWebPageSchema(seoData: PageSEO) {
  // Publisher 硬编码为 BrainCo
  const publisherName = 'BrainCo';

  return {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    'name': seoData.metaTitle,
    'description': seoData.metaDescription,
    'url': seoData.canonicalURL || undefined,
    'inLanguage': seoData.locale === 'zh-Hans' ? 'zh-CN' : seoData.locale === 'zh-Hant' ? 'zh-TW' : 'en-US',
    'publisher': {
      '@type': 'Organization',
      'name': publisherName,
      'url': 'https://www.brainco.cn',
      'logo': {
        '@type': 'ImageObject',
        'url': 'https://www.brainco.cn/logo.webp',
      },
    },
  };
}

export default function StructuredData({ seoData, additionalSchema }: StructuredDataProps) {
  if (!seoData) {
    return null;
  }

  // 合并所有结构化数据
  const schemas = [];

  // 1. 从 CMS 获取的结构化数据（Organization/Publisher 信息）
  if (seoData.structuredData) {
    schemas.push(seoData.structuredData);
  }

  // 2. 网页基本信息
  schemas.push(generateWebPageSchema(seoData));

  // 3. 额外的结构化数据（页面特定的，如 Product、Article 等）
  if (additionalSchema) {
    schemas.push(additionalSchema);
  }

  return (
    <>
      {schemas.map((schema, index) => (
        <Script
          key={`schema-${index}`}
          id={`schema-${index}`}
          type="application/ld+json"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(schema),
          }}
        />
      ))}
    </>
  );
}
