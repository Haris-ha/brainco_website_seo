'use client';

import { useEffect, useState, useRef } from 'react';
import { usePathname } from 'next/navigation';

/**
 * 全局导航加载指示器
 * 根据实际页面加载进度显示顶部加载条，提供视觉反馈
 */
export function NavigationLoadingBar() {
  const pathname = usePathname();
  const [isLoading, setIsLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const previousPathnameRef = useRef<string | null>(null);
  const loadingStartTimeRef = useRef<number | null>(null);

  // 监听所有链接点击，提前显示加载指示器
  useEffect(() => {
    const handleLinkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href]');
      
      // 检查是否是内部链接（排除外部链接和锚点）
      if (link) {
        const href = link.getAttribute('href');
        // 只处理以 / 开头的内部链接，排除 # 锚点和 http/https 外部链接
        if (href && href.startsWith('/') && !href.startsWith('//') && !href.includes('#')) {
          // 记录加载开始时间
          loadingStartTimeRef.current = performance.now();
          // 立即显示加载条
          setIsLoading(true);
          setProgress(0);
          progressRef.current = 0;
        }
      }
    };

    document.addEventListener('click', handleLinkClick, true);
    return () => {
      document.removeEventListener('click', handleLinkClick, true);
    };
  }, []);

  useEffect(() => {
    // 如果路径没有变化，不显示加载条
    if (previousPathnameRef.current === pathname) {
      return;
    }
    
    previousPathnameRef.current = pathname;

    // 清理之前的定时器
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }

    // 当路径变化时，显示加载条
    setIsLoading(true);
    loadingStartTimeRef.current = performance.now();
    setProgress(0);
    progressRef.current = 0;

    // 根据页面加载状态更新进度
    const updateProgress = () => {
      const readyState = document.readyState;
      let currentProgress = progressRef.current;

      if (readyState === 'loading') {
        // 页面开始加载：0-30%
        currentProgress = Math.min(30, currentProgress + 5);
      } else if (readyState === 'interactive') {
        // DOM 加载完成：30-70%
        currentProgress = Math.min(70, currentProgress + 10);
      } else if (readyState === 'complete') {
        // 页面完全加载：70-100%
        currentProgress = Math.min(95, currentProgress + 5);
      }

      setProgress(currentProgress);
      progressRef.current = currentProgress;
    };

    // 初始进度更新
    updateProgress();

    // 定期检查页面加载状态
    intervalRef.current = setInterval(() => {
      updateProgress();
    }, 50);

    // 监听 DOMContentLoaded 事件（DOM 加载完成）
    const handleDOMContentLoaded = () => {
      setProgress(70);
      progressRef.current = 70;
    };

    // 监听页面完全加载完成
    const handleLoad = () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setProgress(100);
      progressRef.current = 100;
      timeoutRef.current = setTimeout(() => {
        setIsLoading(false);
        setProgress(0);
        progressRef.current = 0;
        loadingStartTimeRef.current = null;
      }, 200);
    };

    // 检查当前页面状态
    if (document.readyState === 'complete') {
      // 页面已经加载完成，立即完成进度条
      handleLoad();
    } else {
      // 监听页面加载事件
      if (document.readyState === 'interactive') {
        handleDOMContentLoaded();
      } else {
        document.addEventListener('DOMContentLoaded', handleDOMContentLoaded, { once: true });
      }
      window.addEventListener('load', handleLoad, { once: true });
    }

    // 备用：如果3秒后仍未完成，强制完成
    timeoutRef.current = setTimeout(() => {
      if (progressRef.current < 100) {
        if (intervalRef.current) {
          clearInterval(intervalRef.current);
        }
        setProgress(100);
        progressRef.current = 100;
        setTimeout(() => {
          setIsLoading(false);
          setProgress(0);
          progressRef.current = 0;
          loadingStartTimeRef.current = null;
        }, 200);
      }
    }, 3000);

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
      document.removeEventListener('DOMContentLoaded', handleDOMContentLoaded);
      window.removeEventListener('load', handleLoad);
    };
  }, [pathname]);

  if (!isLoading) {
    return null;
  }

  return (
    <div className="fixed top-0 left-0 z-[9999] h-0.5 w-full bg-transparent">
      <div
        className="h-full bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 transition-all duration-150 ease-out"
        style={{
          width: `${progress}%`,
          boxShadow: '0 0 8px rgba(31, 41, 55, 0.6), 0 0 16px rgba(31, 41, 55, 0.3)',
        }}
      />
    </div>
  );
}

