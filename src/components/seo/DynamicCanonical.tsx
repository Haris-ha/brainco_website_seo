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
    // 如果提供了 canonical URL，使用它
    // 否则使用当前 pathname 构建
    const canonical = canonicalURL || `${process.env.NEXT_PUBLIC_SITE_URL || 'https://www.brainco.cn'}${pathname}`;

    // 查找现有的 canonical link 标签
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement;

    if (canonicalLink) {
      // 更新现有的 canonical link
      canonicalLink.href = canonical;
    } else {
      // 创建新的 canonical link
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
