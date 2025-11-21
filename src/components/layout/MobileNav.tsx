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
      {/* 顶部导航栏 - 仅在首页显示 */}
      {showHeader && (
        <div className={`fixed top-0 left-0 z-[60] flex h-24 w-full items-center justify-between px-8 transition-all duration-300 lg:hidden ${isOpen ? 'bg-white shadow-sm' : ''}`}>
          {/* 左侧：汉堡菜单按钮和 Logo */}
          <div className="flex items-center gap-2">
            {/* 菜单按钮 */}
            <button
              type="button"
              onClick={onToggle}
              className="relative flex h-[20px] w-[20px] flex-shrink-0 items-center justify-center"
              aria-label={isOpen ? '关闭菜单 / Close menu' : '打开菜单 / Open menu'}
              aria-expanded={isOpen}
            >
              <div className={`transition-transform duration-500 ${isOpen ? 'rotate-180' : 'rotate-0'}`}>
                <Image
                  src={
                    isOpen
                      ? 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/com/close.webp'
                      : 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/com/menu_white.png'
                  }
                  alt={isOpen ? '关闭菜单图标 / Close menu icon' : '菜单图标 / Menu icon'}
                  width={20}
                  height={20}
                  className={isOpen ? 'h-[18px] w-[18px]' : 'h-[22px] w-[22px]'}
                />
              </div>
            </button>

            {/* Logo - 只在菜单打开时显示 */}
            {isOpen && (
              <Link href={`/${locale}`} prefetch={true} className="animate-slide-in-right flex-shrink-0" aria-label="BrainCo 首页 / BrainCo Homepage">
                <Image
                  src="/logo.webp"
                  alt="BrainCo - 强脑科技 Logo / BrainCo Logo"
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
            <Link href={`/${locale}/cart`} prefetch={true}  className="animate-slide-in-left flex items-center" aria-label="查看购物车 / View shopping cart">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/G7UDx0MHZvyebaSK.png"
                alt="购物车图标 / Shopping cart icon"
                width={36}
                height={36}
                className="h-11 w-11 p-1.5"
              />
            </Link>
          )}
        </div>
      )}

      {/* 移动端菜单 */}
      {isOpen && (
        <nav className="animate-fade-in fixed top-24 left-0 z-[55] h-screen w-full overflow-y-auto bg-black/30 lg:hidden" aria-label="移动端主导航菜单 / Mobile main navigation menu">
          <div className="animate-slide-down bg-white px-8 pb-8">
            <ul>
              {navItems.map((item, itemIndex) => (
                <li
                  key={item.key}
                  className="animate-slide-down"
                  style={{ animationDelay: `${itemIndex * 0.05}s` }}
                >
                  {/* 菜单项 */}
                  <div
                    role="button"
                    tabIndex={0}
                    className="flex min-h-[72px] items-center justify-between border-b border-gray-100 px-2 transition-colors active:bg-gray-50"
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
                            prefetch={true}
                            className="text-fluid-2xl flex-1 !text-[#333] no-underline hover:!text-[#333]"
                            onClick={onToggle}
                          >
                            {t(item.key)}
                          </Link>
                        )
                      : (
                          <span className="text-fluid-2xl flex-1 text-[#333]">{t(item.key)}</span>
                        )}

                    {item.children && (
                      <div className={`transition-transform duration-300 ${openMenus[item.key] ? 'rotate-180' : 'rotate-0'}`}>
                        {openMenus[item.key]
                          ? <ChevronRight className="h-6 w-6 text-[#333]" />
                          : <ChevronDown className="h-6 w-6 text-[#333]" />}
                      </div>
                    )}
                  </div>

                  {/* 子菜单 */}
                  {item.children && openMenus[item.key] && (
                    <div className="animate-slide-down overflow-hidden pl-5">
                      {item.children.map((child, index) => (
                        <div
                          key={child.titleKey || child.key || index}
                          className="animate-fade-in"
                          style={{ animationDelay: `${index * 0.03}s` }}
                        >
                          {/* 分类标题 */}
                          {child.titleKey && (
                            <div className="text-fluid-xl mt-5 mb-3 font-semibold !text-[#333]">
                              {t(child.titleKey)}
                            </div>
                          )}

                          {/* 无子级的链接 */}
                          {child.key && child.href && !child.children && (
                            <Link
                              href={child.href}
                              prefetch={true}
                              onClick={onToggle}
                              className="text-fluid-lg mt-3 block min-h-[48px] leading-[48px] !text-[#333] no-underline hover:!text-[#333] active:bg-gray-50"
                            >
                              {t(child.key)}
                            </Link>
                          )}

                          {/* 产品列表 */}
                          {child.children && (
                            <ul>
                              {child.children.map((product, productIndex) => (
                                <li
                                  key={product.href}
                                  className="animate-fade-in"
                                  style={{ animationDelay: `${(index + productIndex) * 0.02}s` }}
                                >
                                  <Link
                                    href={product.href}
                                    prefetch={true}
                                    className="text-fluid-lg block min-h-[42px] pl-5 leading-[42px] !text-[#666] no-underline transition-colors hover:!text-[#333] active:bg-gray-50"
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
          </div>
        </nav>
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

        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fade-in {
          animation: fadeIn 0.4s ease-in;
        }

        .animate-slide-in-right {
          animation: slideInRight 0.4s ease-out;
        }

        .animate-slide-in-left {
          animation: slideInLeft 0.4s ease-out;
        }

        .animate-slide-down {
          animation: slideDown 0.3s ease-out;
        }
      `}
      </style>
    </>
  );
}
