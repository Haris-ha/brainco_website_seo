/**
 * 结构化数据组件
 * 在页面中添加 JSON-LD 格式的 Schema.org 数据
 * 
 * 所有 Schema 数据都应该在 CMS 中配置，而不是在代码中硬编码
 * 这样可以动态修改，无需重新部署
 */

import type { PageSEO } from '@/types/seo';

type StructuredDataProps = {
  seoData: PageSEO | null;
};

/**
 * 生成默认的网页信息结构化数据（作为后备）
 * 仅在 CMS 中没有配置 structuredData 时使用
 */
function generateWebPageSchema(seoData: PageSEO) {
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

/**
 * 结构化数据组件
 * 
 * 工作原理：
 * 1. 优先使用 CMS 中配置的 structuredData（推荐方式）
 * 2. 如果 CMS 中没有配置，使用默认的 WebPage Schema
 * 
 * CMS 配置说明：
 * - structuredData 字段可以是单个 Schema 对象或 Schema 对象数组
 * - 支持多语言配置（zh-Hans, en, zh-Hant）
 * - 可以在 Strapi 后台的 Page SEO 中直接编辑
 * 
 * 注意：
 * - 使用原生 <script> 标签而不是 Next.js Script 组件
 * - 这样可以确保在客户端导航时也能正确更新 Schema 数据
 * - 使用 suppressHydrationWarning 避免服务端和客户端渲染差异警告
 */
export default function StructuredData({ seoData }: StructuredDataProps) {
  if (!seoData) {
    return null;
  }

  const schemas: any[] = [];

  // 优先使用 CMS 中配置的 structuredData
  if (seoData.structuredData) {
    // structuredData 可以是单个对象或数组
    if (Array.isArray(seoData.structuredData)) {
      schemas.push(...seoData.structuredData);
    } else {
      schemas.push(seoData.structuredData);
    }
  } else {
    // 如果 CMS 中没有配置，使用默认的 WebPage Schema
    schemas.push(generateWebPageSchema(seoData));
  }

  // 过滤掉空值
  const validSchemas = schemas.filter(schema => schema && Object.keys(schema).length > 0);

  if (validSchemas.length === 0) {
    return null;
  }

  return (
    <>
      {validSchemas.map((schema, index) => {
        // 使用 pagePath 和 locale 生成唯一的 key，确保页面切换时重新渲染
        const uniqueKey = `schema-${seoData.pagePath}-${seoData.locale}-${index}`;
        
        return (
          <script
            key={uniqueKey}
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(schema),
            }}
            suppressHydrationWarning
          />
        );
      })}
    </>
  );
}
