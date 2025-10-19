'use client';

import { useEffect, useState } from 'react';
import { HomeContent } from '@/components/home/HomeContent';
import { HomeContentMobile } from '@/components/home/HomeContentMobile';
import { Footer } from '../layout/Footer';

type HomePageClientProps = {
  locale: string;
};

export function HomePageClient({ locale }: HomePageClientProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    let isMountedLocal = true;
    setMounted(true);

    // 检测是否是移动设备
    const checkMobile = () => {
      if (!isMountedLocal) {
        return;
      }

      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
      const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword));
      const isSmallScreen = window.innerWidth < 768;

      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkMobile();

    // 监听窗口大小变化
    window.addEventListener('resize', checkMobile);
    return () => {
      isMountedLocal = false;
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#f5f5f5]">
      {/* 内容区域 */}
      <div className="flex flex-1 flex-col">
        {mounted && (isMobile ? <HomeContentMobile /> : <HomeContent />)}
      </div>

      {/* Footer */}
      <Footer locale={locale} />
    </div>
  );
}
