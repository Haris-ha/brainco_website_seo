'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ProductsMenuDesktop } from './ProductsMenuDesktop';

type NavItem = {
  key: string;
  href?: string;
  children?: Array<{
    key: string;
    href: string;
  }>;
};

export function DesktopNav({ locale }: { locale: string }) {
  const t = useTranslations('Navigation');
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showProductMenu, setShowProductMenu] = useState(false);

  // 判断是否是灵巧手产品页面
  const isRevoPage = pathname?.includes('/products/revo1') || pathname?.includes('/products/revo2');

  // 导航菜单配置
  const navItems: NavItem[] = [
    { key: 'home', href: `/${locale}` },
    { key: 'products' }, // 产品有特殊的下拉菜单
    { key: 'technology', href: `/${locale}/technology` },
    { key: 'news', href: `/${locale}/news` },
    { key: 'careers', href: `/${locale}/recruit` },
    {
      key: 'company',
      children: [
        { key: 'about_us', href: `/${locale}/about` },
        { key: 'contact_us', href: `/${locale}/contact` },
      ],
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-50 hidden w-full md:flex">
        <div className={`absolute inset-0 backdrop-blur-[10px] ${isRevoPage ? 'bg-black/80' : 'bg-white/30'}`} />

        {/* 导航内容 */}
        <div className="relative z-10 flex h-20 w-full items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-60">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="cursor-target block w-[170px]">
              <Image
                src={isRevoPage ? 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/TODgNdIJtLciUKpf.png' : '/logo-desktop.webp'}
                alt="BrainCo"
                width={170}
                height={51}
                priority
                className="h-auto w-[170px]"
              />
            </Link>
          </div>

          {/* 导航菜单 */}
          <nav className="flex flex-1">
            <ul className="mr-8 flex w-full justify-center px-48 2xl:mr-16 2xl:px-32">
              {navItems.map((item, _index) => (
                <li
                  key={item.key}
                  className="group relative flex h-20 w-full cursor-pointer items-center justify-around text-xl"
                  style={{ fontFamily: '\'PingFang SC-Regular\', \'PingFang SC\', sans-serif' }}
                  onMouseEnter={() => {
                    setActiveDropdown(item.key);
                    if (item.key === 'products') {
                      setShowProductMenu(true);
                    }
                  }}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    if (item.key === 'products') {
                      setShowProductMenu(false);
                    }
                  }}
                >
                  {/* 产品菜单 */}
                  {item.key === 'products'
                    ? (
                        <>
                          <span className={`cursor-target transition-colors duration-200 ${isRevoPage ? 'text-white hover:text-gray-200' : 'text-[#333] hover:text-black'}`}>{t(item.key)}</span>
                          {/* Hover 下划线 */}
                          <div
                            className={`absolute bottom-2 left-1/2 h-0.5 w-20 -translate-x-1/2 rounded-sm transition-all duration-200 ${
                              showProductMenu ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                            } ${isRevoPage ? 'bg-white' : 'bg-[#333]'}`}
                            style={{ height: '3px' }}
                          />
                        </>
                      )
                    : item.children
                      ? (
                          /* 公司菜单 */
                          <>
                            <span className={`cursor-target transition-colors duration-200 ${isRevoPage ? 'text-white hover:text-gray-200' : 'text-[#333] hover:text-black'}`}>{t(item.key)}</span>
                            {/* Hover 下划线 */}
                            <div
                              className={`absolute bottom-2 left-1/2 h-0.5 w-20 -translate-x-1/2 scale-x-0 rounded-sm transition-all duration-200 group-hover:scale-x-100 ${isRevoPage ? 'bg-white' : 'bg-[#333]'}`}
                              style={{ height: '3px' }}
                            />
                            {/* 公司下拉菜单 */}
                            {activeDropdown === item.key && (
                              <div className="absolute top-18 left-1/2 w-[180px] -translate-x-1/2 pt-2">
                                <div className={`flex h-[208px] flex-col items-center justify-center rounded-[14px] backdrop-blur-[10px] ${isRevoPage ? 'bg-black/60' : 'bg-white/30'}`}>
                                  {item.children.map((child, childIndex) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className={`cursor-target block text-2xl transition-colors duration-200 ${
                                        childIndex === 0 ? 'mb-[42px]' : ''
                                      } ${isRevoPage ? '!text-white hover:!text-gray-200' : '!text-[#333] hover:!text-[#000]'}`}
                                    >
                                      {t(child.key)}
                                    </Link>
                                  ))}
                                </div>
                              </div>
                            )}
                          </>
                        )
                      : (
                          /* 普通链接 */
                          <div className={isRevoPage ? 'group-hover:!text-gray-200' : 'group-hover:!text-[#000]'}>
                            <Link
                              href={item.href || `/${locale}`}
                              className={`cursor-target transition-colors duration-200 ${isRevoPage ? '!text-white' : '!text-[#333]'}`}
                            >
                              {t(item.key)}
                            </Link>
                            {/* Hover 下划线 */}
                            <div
                              className={`absolute bottom-2 left-1/2 h-0.5 w-20 -translate-x-1/2 scale-x-0 rounded-sm transition-all duration-200 group-hover:scale-x-100 ${isRevoPage ? 'bg-white' : 'bg-[#333]'}`}
                              style={{ height: '3px' }}
                            />
                          </div>
                        )}
                </li>
              ))}
            </ul>
          </nav>

          {/* 购物车图标 - 右侧对齐 */}
          <div className="flex items-center">
            <Link href={`/${locale}/purchase/cart`} className="cursor-target block">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/G7UDx0MHZvyebaSK.png"
                alt={t('cart')}
                width={30}
                height={30}
                className={`h-[30px] w-[30px] cursor-pointer transition-opacity hover:opacity-80 ${isRevoPage ? 'brightness-0 invert' : ''}`}
              />
            </Link>
          </div>
        </div>
      </header>

      {/* 产品下拉菜单 */}
      {showProductMenu && (
        <div
          onMouseEnter={() => setShowProductMenu(true)}
          onMouseLeave={() => setShowProductMenu(false)}
        >
          <ProductsMenuDesktop />
        </div>
      )}
    </>
  );
}
