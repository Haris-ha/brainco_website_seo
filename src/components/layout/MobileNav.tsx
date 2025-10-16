'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Logo } from '../Logo';

type NavItem = {
  name: string;
  href?: string;
  children?: Array<{
    title?: string;
    name?: string;
    href?: string;
    children?: Array<{
      name: string;
      href: string;
    }>;
  }>;
};

type MobileNavProps = {
  locale: string;
  isOpen: boolean;
  onToggle: () => void;
};

export function MobileNav({ locale, isOpen, onToggle }: MobileNavProps) {
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
      title: '智能仿生',
      children: [
        { name: '智能仿生手', href: '/products/brain-robotics' },
        { name: '轻凌智能仿生腿', href: '/products/mobius' },
        { name: '仿生灵巧手 Revo 1', href: '/products/revo1' },
        { name: '仿生灵巧手 Revo 2', href: '/products/revo2' },
      ],
    },
    {
      title: '智能健康',
      children: [
        { name: 'Easleep 深海豚脑机智能安睡仪', href: '/health/easleep' },
        { name: 'OxyZen 仰憩助眠舒压系统', href: '/health/oxyzen' },
        { name: 'FocusZen 正念舒压系统', href: '/health/focus-zen' },
        { name: '专注欣 脑机接口注意力训练系统', href: '/health/focus-xin' },
        { name: 'Starkids 开星果脑机社交沟通训练系统', href: '/health/starkids' },
      ],
    },
    {
      title: '智能教育',
      children: [{ name: 'BrainAI 人工智能脑科学课程', href: '/education/brain-ai' }],
    },
  ];

  // 导航菜单配置
  const navItems: NavItem[] = [
    { name: '产品', children: productCategories },
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
    <header className="fixed left-0 top-0 z-50 flex h-20 w-full items-center bg-white px-6 shadow-[0_1px_2px_1px_rgba(0,0,0,0.16)] md:hidden">
      {/* 菜单按钮 */}
      <button
        onClick={onToggle}
        className="mr-3 flex h-[18px] w-[18px] items-center justify-center"
        aria-label="Toggle menu"
      >
        <Image
          src={
            isOpen
              ? 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/com/close.webp'
              : 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/com/menu.webp'
          }
          alt="Menu"
          width={18}
          height={18}
          className="h-[18px] w-[18px]"
        />
      </button>

      {/* Logo */}
      <Link href="/" className="flex-shrink-0">
        <Image
          src="/logo.webp"
          alt="BrainCo"
          width={120}
          height={36}
          priority
          className="h-auto w-[120px]"
        />
      </Link>

      {/* 购物车 */}
      <div className="ml-auto flex items-center">
        <Link href="/purchase/cart">
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/G7UDx0MHZvyebaSK.png"
            alt="购物车"
            width={36}
            height={36}
            className="h-9 w-9 p-1.5"
          />
        </Link>
      </div>

      {/* 移动端菜单 */}
      {isOpen && (
        <div className="animate-fade-in absolute left-0 top-20 h-[calc(100vh-80px)] w-full overflow-y-auto bg-black/30">
          <div className="bg-white px-5 pb-8">
            <nav>
              <ul>
                {navItems.map(item => (
                  <li key={item.name}>
                    {/* 菜单项 */}
                    <div
                      className="flex h-[78px] items-center justify-between border-b border-gray-100"
                      onClick={() => {
                        if (item.children) {
                          toggleSubmenu(item.name);
                        }
                      }}
                    >
                      {item.href ? (
                        <Link
                          href={item.href}
                          className="flex-1 text-lg"
                          onClick={onToggle}
                        >
                          {item.name}
                        </Link>
                      ) : (
                        <span className="flex-1 text-lg">{item.name}</span>
                      )}

                      {item.children && (
                        <button
                          className="ml-auto text-sm text-gray-400"
                          aria-label={`Toggle ${item.name}`}
                        >
                          {openMenus[item.name] ? (
                            <span className="iconfont">▼</span>
                          ) : (
                            <span className="iconfont">▶</span>
                          )}
                        </button>
                      )}
                    </div>

                    {/* 子菜单 */}
                    {item.children && openMenus[item.name] && (
                      <div className="pl-5">
                        {item.children.map((child, index) => (
                          <div key={child.title || child.name || index}>
                            {/* 分类标题 */}
                            {child.title && (
                              <div className="mb-2.5 mt-7 text-xs font-medium text-[#333]">
                                {child.title}
                              </div>
                            )}

                            {/* 无子级的链接 */}
                            {child.name && child.href && !child.children && (
                              <div className="mb-2.5 mt-7 text-sm text-[#333]">
                                <Link
                                  href={child.href}
                                  onClick={onToggle}
                                  className="block"
                                >
                                  {child.name}
                                </Link>
                              </div>
                            )}

                            {/* 产品列表 */}
                            {child.children && (
                              <ul>
                                {child.children.map(product => (
                                  <li
                                    key={product.href}
                                    className="pl-7 leading-[2.5]"
                                  >
                                    <Link
                                      href={product.href}
                                      className="block text-sm text-[#666]"
                                      onClick={onToggle}
                                    >
                                      {product.name}
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

      <style jsx>{`
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
      `}</style>
    </header>
  );
}

