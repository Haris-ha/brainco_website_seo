'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
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
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showProductMenu, setShowProductMenu] = useState(false);

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
        { key: 'about_us', href: `/${locale}/company/about` },
        { key: 'contact_us', href: `/${locale}/company/contact` },
      ],
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-50 hidden w-full md:flex">
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[10px]" />

        {/* 导航内容 */}
        <div className="relative z-10 flex h-20 w-full items-center justify-between px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 2xl:px-60">
          {/* Logo */}
          <div className="flex items-center">
            <Link href={`/${locale}`} className="block w-[170px]">
              <Image
                src="/logo-desktop.webp"
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
            <ul className="mr-8 flex w-full justify-center 2xl:mr-16 2xl:px-16">
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
                          <span className="text-[#333] transition-colors duration-200 hover:text-black">{t(item.key)}</span>
                          {/* Hover 下划线 */}
                          <div
                            className={`absolute bottom-2 left-1/2 h-0.5 w-20 -translate-x-1/2 rounded-sm bg-[#333] transition-all duration-200 ${
                              showProductMenu ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                            }`}
                            style={{ height: '3px' }}
                          />
                        </>
                      )
                    : item.children
                      ? (
                          /* 公司菜单 */
                          <>
                            <span className="text-[#333] transition-colors duration-200 hover:text-black">{t(item.key)}</span>
                            {/* Hover 下划线 */}
                            <div
                              className="absolute bottom-2 left-1/2 h-0.5 w-20 -translate-x-1/2 scale-x-0 rounded-sm bg-[#333] transition-all duration-200 group-hover:scale-x-100"
                              style={{ height: '3px' }}
                            />
                            {/* 公司下拉菜单 */}
                            {activeDropdown === item.key && (
                              <div className="absolute top-16 left-1/2 w-[204px] -translate-x-1/2 pt-2.5">
                                <div className="flex h-[208px] flex-col items-center justify-center rounded-[14px] bg-white/30 backdrop-blur-[10px]">
                                  {item.children.map((child, childIndex) => (
                                    <Link
                                      key={child.href}
                                      href={child.href}
                                      className={`block text-2xl text-[#333] transition-colors duration-200 group-hover:!text-[#000] ${
                                        childIndex === 0 ? 'mb-[42px]' : ''
                                      }`}
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
                          <div className="group-hover:!text-[#000]">
                            <Link
                              href={item.href || `/${locale}`}
                              className="!text-[#333] transition-colors duration-200"
                            >
                              {t(item.key)}
                            </Link>
                            {/* Hover 下划线 */}
                            <div
                              className="absolute bottom-2 left-1/2 h-0.5 w-20 -translate-x-1/2 scale-x-0 rounded-sm bg-[#333] transition-all duration-200 group-hover:scale-x-100"
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
            <Link href={`/${locale}/purchase/cart`} className="block">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/G7UDx0MHZvyebaSK.png"
                alt={t('cart')}
                width={30}
                height={30}
                className="h-[30px] w-[30px] cursor-pointer transition-opacity hover:opacity-80"
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
