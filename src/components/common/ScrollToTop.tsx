'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * 全局滚动到顶部组件
 * 在页面加载或路由变化时自动滚动到顶部
 */
export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    // 立即滚动到顶部（用于路由变化）
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });

    // 延迟再次检查，确保页面完全加载后也在顶部
    const timer = setTimeout(() => {
      // 如果页面有 hash，不滚动到顶部（让浏览器处理 hash 滚动）
      if (!window.location.hash) {
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'instant',
        });
      }
    }, 100);

    return () => clearTimeout(timer);
  }, [pathname]);

  // 处理页面首次加载
  useEffect(() => {
    // 只在没有 hash 的情况下滚动到顶部
    if (!window.location.hash) {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant',
      });
    }
  }, []);

  return null;
}

