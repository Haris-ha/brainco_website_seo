'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { DesktopNav } from '../layout/DesktopNav';
import { MobileNav } from '../layout/MobileNav';
import { Footer } from '../layout/Footer';
import { HomeContent } from './HomeContent';
import { HomeContentMobile } from './HomeContentMobile';

type HomePageClientProps = {
  locale: string;
};

export function HomePageClient({ locale }: HomePageClientProps) {
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    let isMountedLocal = true;

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
    setMounted(true);

    // 监听窗口大小变化
    window.addEventListener('resize', checkMobile);
    return () => {
      isMountedLocal = false;
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  // 避免水合不匹配，先不渲染任何内容
  if (!mounted) {
    return null;
  }

  return (
    <div className="relative flex min-h-screen flex-col overflow-hidden bg-[#f5f5f5]">
      {/* 桌面版导航栏 */}
      {!isMobile && <DesktopNav locale={locale} />}

      {/* 移动端导航 */}
      {isMobile && (
        <>
          {/* 移动端浮动菜单按钮 */}
          {!showMobileNav && (
            <div className="absolute top-0 left-0 z-50 flex h-[80px] items-center pl-[25px]">
              <button
                type="button"
                onClick={() => setShowMobileNav(true)}
                className="flex h-[18px] w-[18px] items-center justify-center"
              >
                <Image
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/com/menu_white.png"
                  alt="Menu"
                  width={18}
                  height={18}
                  className="h-full w-full"
                />
              </button>
            </div>
          )}

          {/* 移动端导航组件 */}
          {showMobileNav && (
            <MobileNav
              locale={locale}
              isOpen={showMobileNav}
              onToggle={() => setShowMobileNav(false)}
            />
          )}
        </>
      )}

      {/* 内容区域 */}
      <div className="flex flex-1 flex-col">
        {isMobile ? <HomeContentMobile /> : <HomeContent />}
      </div>

      {/* Footer */}
      <Footer locale={locale} />
    </div>
  );
}
