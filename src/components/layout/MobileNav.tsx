'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

type NavItem = {
  key: string;
  href?: string;
  children?: Array<{
    titleKey?: string;
    key?: string;
    href?: string;
    children?: Array<{
      key: string;
      href: string;
    }>;
  }>;
};

type MobileNavProps = {
  locale: string;
  isOpen: boolean;
  onToggle: () => void;
  showHeader?: boolean; // 是否显示顶部导航栏（首页用）
};

export function MobileNav({ locale, isOpen, onToggle, showHeader = true }: MobileNavProps) {
  const t = useTranslations('Navigation');
  const [openMenus, setOpenMenus] = useState<{ [key: string]: boolean }>({});

  const toggleSubmenu = (menuName: string) => {
    setOpenMenus(prev => ({
      ...prev,
      [menuName]: !prev[menuName],
    }));
  };

  // 产品分类
  const productCategories = [
    {
      titleKey: 'intelligent_bionics',
      children: [
        { key: 'brain_robotics', href: `/${locale}/products/brain-robotics` },
        { key: 'mobius', href: `/${locale}/products/mobius` },
        { key: 'revo1', href: `/${locale}/products/revo1` },
        { key: 'revo2', href: `/${locale}/products/revo2` },
      ],
    },
    {
      titleKey: 'intelligent_health',
      children: [
        { key: 'easleep', href: `/${locale}/health/easleep` },
        { key: 'oxyzen', href: `/${locale}/health/oxyzen` },
        { key: 'focus_zen', href: `/${locale}/health/focus-zen` },
        { key: 'focus_xin', href: `/${locale}/health/focus-xin` },
        { key: 'starkids', href: `/${locale}/health/starkids` },
      ],
    },
    {
      titleKey: 'intelligent_education',
      children: [{ key: 'brain_ai', href: `/${locale}/education/brain-ai` }],
    },
  ];

  // 导航菜单配置
  const navItems: NavItem[] = [
    { key: 'products', children: productCategories },
    { key: 'technology', href: `/${locale}/technology` },
    { key: 'news', href: `/${locale}/news` },
    { key: 'careers', href: `/${locale}/careers` },
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
      {/* 顶部导航栏 - 仅在首页显示 */}
      {showHeader && (
        <header className={`fixed top-0 left-0 z-[60] flex h-20 w-full items-center px-6 md:hidden ${isOpen ? 'bg-white' : ''}`}>
          {/* 菜单按钮 */}
          <button
            type="button"
            onClick={onToggle}
            className="mr-3 flex h-[18px] w-[18px] flex-shrink-0 items-center justify-center"
            aria-label="Toggle menu"
          >
            <Image
              src={
                isOpen
                  ? 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/com/close.webp'
                  : 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/com/menu_white.png'
              }
              alt={t('menu')}
              width={18}
              height={18}
              className="h-[18px] w-[18px]"
            />
          </button>

          {/* Logo - 只在菜单打开时显示 */}
          {isOpen && (
            <Link href={`/${locale}`} className="flex-shrink-0">
              <Image
                src="/logo.webp"
                alt="BrainCo"
                width={120}
                height={36}
                priority
                className="h-auto w-[120px]"
              />
            </Link>
          )}

          {/* 购物车 - 只在菜单打开时显示 */}
          {isOpen && (
            <div className="ml-auto flex items-center">
              <Link href={`/${locale}/purchase/cart`}>
                <Image
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/G7UDx0MHZvyebaSK.png"
                  alt={t('cart')}
                  width={36}
                  height={36}
                  className="h-9 w-9 p-1.5"
                />
              </Link>
            </div>
          )}
        </header>
      )}

      {/* 移动端菜单 */}
      {isOpen && (
        <div className="animate-fade-in fixed top-20 left-0 z-[55] h-[calc(100vh-80px)] w-full overflow-y-auto bg-black/30">
          <div className="bg-white px-5 pb-8">
            <nav>
              <ul>
                {navItems.map(item => (
                  <li key={item.key}>
                    {/* 菜单项 */}
                    <div
                      className="flex h-[78px] items-center justify-between border-b border-gray-100"
                      onClick={() => {
                        if (item.children) {
                          toggleSubmenu(item.key);
                        }
                      }}
                    >
                      {item.href
                        ? (
                            <Link
                              href={item.href}
                              className="flex-1 text-lg text-[#333]"
                              onClick={onToggle}
                            >
                              {t(item.key)}
                            </Link>
                          )
                        : (
                            <span className="flex-1 text-lg text-[#333]">{t(item.key)}</span>
                          )}

                      <u
                        className={`iconfont text-sm text-[#aaa] no-underline ${
                          !item.children || openMenus[item.key]
                            ? 'icon-arrow-right-bold'
                            : ''
                        } ${
                          item.children && !openMenus[item.key]
                            ? 'icon-arrow-down-bold'
                            : ''
                        }`}
                      >
                      </u>
                    </div>

                    {/* 子菜单 */}
                    {item.children && openMenus[item.key] && (
                      <div className="pl-5">
                        {item.children.map((child, index) => (
                          <div key={child.titleKey || child.key || index}>
                            {/* 分类标题 */}
                            {child.titleKey && (
                              <div className="mt-7.5 mb-2.5 text-xs font-medium text-[#333]">
                                {t(child.titleKey)}
                              </div>
                            )}

                            {/* 无子级的链接 */}
                            {child.key && child.href && !child.children && (
                              <div className="mt-7.5 mb-2.5 text-sm">
                                <Link
                                  href={child.href}
                                  onClick={onToggle}
                                  className="block text-[#333]"
                                >
                                  {t(child.key)}
                                </Link>
                              </div>
                            )}

                            {/* 产品列表 */}
                            {child.children && (
                              <ul>
                                {child.children.map(product => (
                                  <li
                                    key={product.href}
                                    className="pl-7.5 leading-[2.5]"
                                  >
                                    <Link
                                      href={product.href}
                                      className="block text-sm text-[#666]"
                                      onClick={onToggle}
                                    >
                                      {t(product.key)}
                                    </Link>
                                  </li>
                                ))}
                              </ul>
                            )}
                          </div>
                        ))}
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      )}

      <style jsx>
        {`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-in;
        }
      `}
      </style>
    </>
  );
}
