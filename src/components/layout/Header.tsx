'use client';

import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import { DesktopNav } from '@/components/layout/DesktopNav';
import { MobileNav } from '@/components/layout/MobileNav';

type HeaderProps = {
  locale: string;
};

export function Header({ locale }: HeaderProps) {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [mounted, setMounted] = useState(false);

  // 判断是否是首页
  const isHomePage = pathname === `/${locale}` || pathname === '/';

  useEffect(() => {
    // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
    setMounted(true);

    // 检测是否是移动设备
    const checkMobile = () => {
      const userAgent = navigator.userAgent.toLowerCase();
      const mobileKeywords = ['android', 'iphone', 'ipad', 'ipod', 'blackberry', 'windows phone'];
      const isMobileDevice = mobileKeywords.some(keyword => userAgent.includes(keyword));
      const isSmallScreen = window.innerWidth < 768;
      // eslint-disable-next-line react-hooks-extra/no-direct-set-state-in-use-effect
      setIsMobile(isMobileDevice || isSmallScreen);
    };

    checkMobile();

    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return (
    <>
      {/* 桌面端导航 - 使用CSS隐藏/显示以避免初始渲染问题 */}
      <div className={isMobile && mounted ? 'hidden' : ''}>
        <DesktopNav locale={locale} />
      </div>

      {/* 移动端导航 */}
      {isMobile && (
        <>
          {isHomePage
            ? (
              // 首页：使用 MobileNav 的完整导航（包含汉堡图标）
                <MobileNav
                  locale={locale}
                  isOpen={mobileMenuOpen}
                  onToggle={() => setMobileMenuOpen(!mobileMenuOpen)}
                  showHeader={true}
                />
              )
            : (
              // 其他页面：显示固定白色导航栏
                <>
                  <header className="fixed top-0 left-0 z-50 flex h-24 w-full items-center justify-between bg-white px-8 shadow-sm">
                    {/* 左侧：汉堡菜单按钮 */}
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                        className="flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center"
                        aria-label="Toggle menu"
                      >
                        <Image
                          src={
                            mobileMenuOpen
                              ? 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/com/close.webp'
                              : 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/com/menu.webp'
                          }
                          alt="Menu"
                          width={22}
                          height={22}
                          className="h-[22px] w-[22px]"
                        />
                      </button>

                      {/* 中间：Logo */}
                      <a href={`/${locale}`} className="flex-shrink-0">
                        <Image
                          src="/logo.webp"
                          alt="BrainCo"
                          width={132}
                          height={40}
                          priority
                          className="h-auto w-[120px]"
                        />
                      </a>
                    </div>

                    {/* 右侧：购物车 */}
                    <a href={`/${locale}/cart`} className="flex items-center">
                      <Image
                        src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/G7UDx0MHZvyebaSK.png"
                        alt="购物车"
                        width={36}
                        height={36}
                        className="h-11 w-11 p-1.5"
                      />
                    </a>
                  </header>

                  {/* 移动端菜单（不显示顶部导航栏） */}
                  <MobileNav
                    locale={locale}
                    isOpen={mobileMenuOpen}
                    onToggle={() => setMobileMenuOpen(false)}
                    showHeader={false}
                  />
                </>
              )}
        </>
      )}
    </>
  );
}
