'use client';

import { ChevronDown, ChevronRight } from 'lucide-react';
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
    {
      key: 'technology',
      children: [
        { key: 'brainco_cooperation', href: `/${locale}/technology?t=research` },
        { key: 'neuroscience_history', href: `/${locale}/technology?t=course` },
      ],
    },
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
      {/* 顶部导航栏 - 仅在首页显示 */}
      {showHeader && (
        <header className={`fixed top-0 left-0 z-[60] flex h-24 w-full items-center justify-between px-8 md:hidden ${isOpen ? 'bg-white shadow-sm' : ''}`}>
          {/* 左侧：汉堡菜单按钮和 Logo */}
          <div className="flex items-center gap-2">
            {/* 菜单按钮 */}
            <button
              type="button"
              onClick={onToggle}
              className="flex h-[22px] w-[22px] flex-shrink-0 items-center justify-center"
              aria-label="Toggle menu"
            >
              <Image
                src={
                  isOpen
                    ? 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/com/close.webp'
                    : 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/com/menu_white.png'
                }
                alt={t('menu')}
                width={22}
                height={22}
                className="h-[22px] w-[22px]"
              />
            </button>

            {/* Logo - 只在菜单打开时显示 */}
            {isOpen && (
              <Link href={`/${locale}`} className="flex-shrink-0">
                <Image
                  src="/logo.webp"
                  alt="BrainCo"
                  width={132}
                  height={40}
                  priority
                  className="h-auto w-[120px]"
                />
              </Link>
            )}
          </div>

          {/* 右侧：购物车 - 只在菜单打开时显示 */}
          {isOpen && (
            <Link href={`/${locale}/purchase/cart`} className="flex items-center">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/G7UDx0MHZvyebaSK.png"
                alt={t('cart')}
                width={36}
                height={36}
                className="h-11 w-11 p-1.5"
              />
            </Link>
          )}
        </header>
      )}

      {/* 移动端菜单 */}
      {isOpen && (
        <div className="animate-fade-in fixed top-24 left-0 z-[55] h-screen w-full overflow-y-auto bg-black/30">
          <div className="bg-white px-8 pb-8">
            <nav>
              <ul>
                {navItems.map((item, index) => (
                  <li key={item.key}>
                    {/* 菜单项 */}
                    <div
                      role="button"
                      tabIndex={0}
                      className={`flex h-[68px] items-center justify-between border-b border-gray-100 ${index === 0 ? 'border-t' : ''}`}
                      onClick={() => {
                        if (item.children) {
                          toggleSubmenu(item.key);
                        }
                      }}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          if (item.children) {
                            toggleSubmenu(item.key);
                          }
                        }
                      }}
                    >
                      {item.href
                        ? (
                            <Link
                              href={item.href}
                              className="flex-1 text-xl !text-[#333] no-underline hover:!text-[#333]"
                              onClick={onToggle}
                            >
                              {t(item.key)}
                            </Link>
                          )
                        : (
                            <span className="flex-1 text-xl text-[#333]">{t(item.key)}</span>
                          )}

                      {item.children && (
                        openMenus[item.key]
                          ? <ChevronRight className="h-6 w-6 text-[#333]" />
                          : <ChevronDown className="h-6 w-6 text-[#333]" />
                      )}
                    </div>

                    {/* 子菜单 */}
                    {item.children && openMenus[item.key] && (
                      <div className="pl-5">
                        {item.children.map((child, index) => (
                          <div key={child.titleKey || child.key || index}>
                            {/* 分类标题 */}
                            {child.titleKey && (
                              <div className="mt-4 mb-2.5 text-lg font-medium !text-[#333]">
                                {t(child.titleKey)}
                              </div>
                            )}

                            {/* 无子级的链接 */}
                            {child.key && child.href && !child.children && (
                              <div className="mt-4 mb-2.5 text-lg">
                                <Link
                                  href={child.href}
                                  onClick={onToggle}
                                  className="block !text-[#333] no-underline hover:!text-[#333]"
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
                                      className="block text-lg !text-[#666] no-underline hover:!text-[#666]"
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
