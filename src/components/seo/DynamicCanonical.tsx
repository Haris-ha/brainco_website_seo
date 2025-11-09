'use client';

/**
 * 动态 Canonical URL 组件
 *
 * 在客户端导航时也能正确更新 canonical URL
 * 这个组件会在客户端动态添加/更新 <link rel="canonical"> 标签
 */

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

type DynamicCanonicalProps = {
  canonicalURL?: string;
  locale: string;
  pagePath: string;
};

export default function DynamicCanonical({ canonicalURL, locale, pagePath }: DynamicCanonicalProps) {
  const pathname = usePathname();

  useEffect(() => {
    // 优先使用 CMS 配置的 canonical URL（如果存在且有效）
    // 这样可以确保与服务端 Metadata API 使用相同的 canonical URL，避免冲突
    let canonical: string;
    
    if (canonicalURL && canonicalURL.trim()) {
      // 直接使用 CMS 配置的 canonical URL
      canonical = canonicalURL.trim();
    } else {
      // 如果没有配置，使用当前 pathname 构建（与服务端逻辑保持一致）
      const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://www.brainco.cn';
      canonical = `${baseUrl}${pathname}`;
    }

    // 查找现有的 canonical link 标签（可能是服务端 Metadata API 设置的）
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

    if (canonicalLink) {
      // 更新现有的 canonical link，确保使用正确的 URL
      canonicalLink.href = canonical;
    } else {
      // 如果不存在，创建新的 canonical link（这种情况应该很少，因为 Metadata API 应该已经设置了）
      canonicalLink = document.createElement('link');
      canonicalLink.rel = 'canonical';
      canonicalLink.href = canonical;
      document.head.appendChild(canonicalLink);
    }

    // 清理函数（当组件卸载时）
    return () => {
      // 不需要移除 canonical link，因为它会被下一个页面更新
    };
  }, [canonicalURL, pathname, locale, pagePath]);

  // 这个组件不渲染任何内容
  return null;
}
