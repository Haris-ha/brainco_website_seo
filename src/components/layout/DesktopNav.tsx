'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import { ProductsMenuDesktop } from './ProductsMenuDesktop';

type NavItem = {
  name: string;
  href?: string;
  children?: Array<{
    name: string;
    href: string;
  }>;
};

export function DesktopNav({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [showProductMenu, setShowProductMenu] = useState(false);

  // 导航菜单配置
  const navItems: NavItem[] = [
    { name: '首页', href: '/' },
    { name: '产品' }, // 产品有特殊的下拉菜单
    { name: '技术', href: '/technology' },
    { name: '新闻', href: '/news' },
    { name: '招募', href: '/careers' },
    {
      name: '公司',
      children: [
        { name: '关于我们', href: '/company/about' },
        { name: '联系我们', href: '/company/contact' },
      ],
    },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 z-50 hidden w-full md:flex">
        {/* 毛玻璃背景 */}
        <div className="absolute inset-0 bg-white/30 backdrop-blur-[10px]" />

        {/* 导航内容 */}
        <div className="relative z-10 flex h-20 w-full items-center pl-60">
          {/* Logo */}
          <div className="mr-0 flex items-center">
            <Link href="/" className="block w-[170px]">
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
            <ul className="flex">
              {navItems.map((item, index) => (
                <li
                  key={item.name}
                  className="group relative flex h-20 w-[140px] cursor-pointer items-center justify-center text-2xl"
                  onMouseEnter={() => {
                    setActiveDropdown(item.name);
                    if (item.name === '产品') {
                      setShowProductMenu(true);
                    }
                  }}
                  onMouseLeave={() => {
                    setActiveDropdown(null);
                    if (item.name === '产品') {
                      setShowProductMenu(false);
                    }
                  }}
                >
                  {/* 产品菜单 */}
                  {item.name === '产品' ? (
                    <>
                      <span className="font-normal">{item.name}</span>
                      {/* Hover 下划线 */}
                      <div
                        className={`absolute bottom-2.5 left-1/2 h-0.5 w-20 -translate-x-1/2 rounded-sm bg-[#333] transition-all duration-200 ${
                          showProductMenu ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                    </>
                  ) : item.children ? (
                    /* 公司菜单 */
                    <>
                      <span className="font-normal">{item.name}</span>
                      {/* Hover 下划线 */}
                      <div
                        className={`absolute bottom-2.5 left-1/2 h-0.5 w-20 -translate-x-1/2 rounded-sm bg-[#333] transition-all duration-200 ${
                          activeDropdown === item.name ? 'scale-x-100' : 'scale-x-0'
                        }`}
                      />
                      {/* 公司下拉菜单 */}
                      {activeDropdown === item.name && (
                        <div className="absolute top-20 left-1/2 w-[204px] -translate-x-1/2 pt-2.5">
                          <div className="flex h-[208px] flex-col items-center justify-center rounded-[14px] bg-white/30 backdrop-blur-[10px]">
                            {item.children.map((child, childIndex) => (
                              <Link
                                key={child.href}
                                href={child.href}
                                className={`block text-2xl hover:opacity-80 ${
                                  childIndex === 0 ? 'mb-[42px]' : ''
                                }`}
                              >
                                {child.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      )}
                    </>
                  ) : (
                    /* 普通链接 */
                    <>
                      <Link
                        href={item.href || '/'}
                        className="font-normal transition-opacity hover:opacity-80"
                      >
                        {item.name}
                      </Link>
                      {/* Hover 下划线 */}
                      <div
                        className={`absolute bottom-2.5 left-1/2 h-0.5 w-20 -translate-x-1/2 rounded-sm bg-[#333] transition-all duration-200 ${
                          activeDropdown === item.name || pathname === item.href
                            ? 'scale-x-100'
                            : 'scale-x-0'
                        }`}
                      />
                    </>
                  )}
                </li>
              ))}
            </ul>
          </nav>

          {/* 购物车图标 */}
          <div className="mr-[30vw] flex items-center">
            <Link href="/purchase/cart" className="block">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/G7UDx0MHZvyebaSK.png"
                alt="购物车"
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
