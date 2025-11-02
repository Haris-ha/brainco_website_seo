'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { LanguageSelector } from './LanguageSelector';

type FooterProps = {
  locale: string;
};

export function Footer({ locale }: FooterProps) {
  const t = useTranslations('Footer');
  const [showWechatQR, setShowWechatQR] = useState(false);
  const [isHangzhou] = useState(false); // 可以根据实际需求动态判断
  const [hoveredIcon, setHoveredIcon] = useState<string | null>(null);

  // 产品导航数据
  const productNavigation = [
    {
      title: t('intelligent_bionics'),
      items: [
        { title: t('brain_robotics'), href: `/${locale}/products/brain-robotics` },
        { title: t('mobius'), href: `/${locale}/products/mobius` },
        { title: t('dexterous_revo1'), href: `/${locale}/products/revo1` },
        { title: t('dexterous_revo2'), href: `/${locale}/products/revo2` },
      ],
    },
    {
      title: t('intelligent_health'),
      items: [
        { title: t('easleep'), href: `/${locale}/health/easleep` },
        { title: t('oxyzen'), href: `/${locale}/health/oxyzen` },
        { title: t('focus_zen'), href: `/${locale}/health/focus-zen` },
        { title: t('focus_xin'), href: `/${locale}/health/focus-xin` },
        { title: t('starkids'), href: `/${locale}/health/starkids` },
      ],
    },
    {
      title: t('intelligent_education'),
      items: [{ title: t('brain_ai'), href: `/${locale}/education/brain-ai` }],
    },
  ];

  const otherNavigation = [
    {
      title: t('technology'),
      items: [
        {
          title: t('brainco_cooperation'),
          href: `/${locale}/technology?t=research`,
        },
        {
          title: t('neuroscience_history'),
          href: `/${locale}/technology?t=course`,
        },
      ],
    },
    {
      title: t('company_news'),
      items: [{ title: t('company_news'), href: `/${locale}/news/press-center` }],
    },
    {
      title: t('about_brainco'),
      items: [
        { title: t('about_brainco'), href: `/${locale}/about` },
        { title: t('contact_us'), href: `/${locale}/contact` },
      ],
    },
    {
      title: t('purchase'),
      items: [{ title: t('my_orders'), href: `/${locale}/orders` }],
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* 桌面端Footer */}
      <footer className="hidden bg-gray-50 md:block">
        <div className="mx-auto w-full max-w-7xl px-4 pt-12">
          {/* Logo和社交媒体图标 */}
          <div className="flex items-center justify-between border-b border-gray-300 pb-12">
            <Image
              src="/icons/logo.pc.webp"
              alt="BrainCo Logo"
              width={260}
              height={60}
              className="h-auto w-64"
            />
            <div className="flex items-center gap-9">
              <button
                type="button"
                className="cursor-target relative cursor-pointer transition-opacity"
                onMouseEnter={() => {
                  setShowWechatQR(true);
                  setHoveredIcon('wechat');
                }}
                onMouseLeave={() => {
                  setShowWechatQR(false);
                  setHoveredIcon(null);
                }}
              >
                <Image
                  src={
                    hoveredIcon === 'wechat'
                      ? 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/icon/xnCVb1j5kU42BaXe.png'
                      : 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/icon/MAqhgUP8Tto47vOE.webp'
                  }
                  alt="WeChat"
                  width={38}
                  height={38}
                  className="h-9 w-9"
                />
                {showWechatQR && (
                  <div className="absolute -top-20 -left-42 z-10 flex w-40 flex-col items-center justify-center rounded-3xl bg-white p-4 text-center shadow-lg">
                    <Image
                      src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/brainco_code.jpg"
                      alt="WeChat QR Code"
                      width={100}
                      height={100}
                      className="mb-2 size-25"
                    />
                    <p className="text-sm text-gray-600">
                      {t('wechat_qrcode_title')}
                      {' '}
                      <br />
                      {' '}
                      {t('wechat_qrcode_subtitle')}
                    </p>
                  </div>
                )}
              </button>
              <a
                href="https://weibo.com/6552733338/profile?topnav=1&wvr=6"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target transition-opacity"
                onMouseEnter={() => setHoveredIcon('weibo')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Image
                  src={
                    hoveredIcon === 'weibo'
                      ? 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/icon/P6e3qoz5GSivXHg0.png'
                      : 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/icon/oK7ABeigxqT2Q1dc.webp'
                  }
                  alt="Weibo"
                  width={38}
                  height={38}
                  className="h-9 w-9"
                />
              </a>
              <a
                href="https://www.zhihu.com/org/braincoqiang-nao-ke-ji"
                target="_blank"
                rel="noopener noreferrer"
                className="cursor-target transition-opacity"
                onMouseEnter={() => setHoveredIcon('zhihu')}
                onMouseLeave={() => setHoveredIcon(null)}
              >
                <Image
                  src={
                    hoveredIcon === 'zhihu'
                      ? 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/icon/LQFg74EN263VqB1J.png'
                      : 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/icon/8iAJUbz6FgXm4qXc.webp'
                  }
                  alt="Zhihu"
                  width={65}
                  height={38}
                  className="h-9 w-16"
                />
              </a>
            </div>
          </div>

          {/* 导航链接 */}
          <div className="mt-16 flex justify-between">
            {/* 产品栏 */}
            <div>
              <h4 className="mb-10 text-2xl font-medium !text-[#666]">
                {t('products')}
              </h4>
              {productNavigation.map(section => (
                <div key={section.title} className="mt-10 first:mt-0">
                  <h5 className="mb-4 text-xl font-medium !text-[#666]">
                    {section.title}
                  </h5>
                  {section.items.map(item => (
                    <motion.div
                      key={item.href}
                      className="mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                      <Link
                        href={item.href}
                        className="cursor-target group relative inline-block text-xl !text-[#666] transition-colors duration-200"
                      >
                        {item.title}
                        <div className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#666] transition-all duration-300 ease-in-out group-hover:w-full" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>

            {/* 技术栏 */}
            <div>
              {otherNavigation.slice(0, 1).map(section => (
                <div key={section.title} className="mb-20">
                  <h4 className="mb-10 text-2xl font-medium !text-[#666]">
                    {section.title}
                  </h4>
                  {section.items.map(item => (
                    <motion.div
                      key={item.href}
                      className="mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                      <Link
                        href={item.href}
                        className="cursor-target group relative inline-block text-xl !text-[#666] transition-colors duration-200"
                      >
                        {item.title}
                        <div className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#666] transition-all duration-300 ease-in-out group-hover:w-full" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>

            {/* 其他栏 */}
            <div className="flex flex-col justify-between">
              {otherNavigation.slice(1).map((section, index) => (
                <div key={section.title} className={index > 0 ? 'mt-20' : ''}>
                  <h4 className="mb-10 text-2xl font-medium !text-[#666]">
                    {section.title}
                  </h4>
                  {section.items.map(item => (
                    <motion.div
                      key={item.href}
                      className="mb-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, ease: 'easeOut' }}
                    >
                      <Link
                        href={item.href}
                        className="cursor-target group relative inline-block text-xl !text-[#666] transition-colors duration-200"
                      >
                        {item.title}
                        <div className="absolute -bottom-1 left-0 h-[2px] w-0 bg-[#666] transition-all duration-300 ease-in-out group-hover:w-full" />
                      </Link>
                    </motion.div>
                  ))}
                </div>
              ))}

              {/* 语言切换 */}
              <div className="mt-10">
                <h4 className="mb-6 text-2xl font-medium !text-[#666]">
                  {locale === 'zh-CN' ? '语言' : locale === 'en-US' ? 'Language' : '語言'}
                </h4>
                <LanguageSelector />
              </div>
            </div>
          </div>

          {/* 版权信息 */}
          <div className="mt-20 pb-12 text-center">
            <p className="text-xl !text-gray-500">
              {isHangzhou
                ? t('copyright_hangzhou')
                : t('copyright_shenzhen')}
              {' '}
              <a
                href="https://beian.miit.gov.cn/#/Integrated/index"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-gray-500 hover:!text-gray-700"
              >
                {isHangzhou ? t('icp_hangzhou') : t('icp_shenzhen')}
              </a>
              {!isHangzhou && ` ${t('public_security')}`}
            </p>
          </div>
        </div>
      </footer>

      {/* 移动端Footer */}
      <footer className="bg-gray-50 md:hidden">
        <div className="w-full px-10 py-5">
          {/* 返回顶部 */}
          <button
            type="button"
            onClick={scrollToTop}
            className="flex w-full flex-col items-center justify-center pt-5 text-gray-600"
          >
            <span className="text-fluid-lg mb-1">↑</span>
            <span className="text-fluid-lg">{t('back_to_top')}</span>
          </button>

          {/* 导航链接 */}
          <div className="mt-9 flex gap-8">
            {/* 产品栏 */}
            <div className="flex-[3]">
              <h4 className="text-fluid-lg mb-6 font-semibold !text-[#333]">
                {t('products')}
              </h4>
              {productNavigation.map(section => (
                <div key={section.title} className="mt-6 first:mt-0">
                  <h5 className="mb-3 text-[12px] font-semibold !text-[#333]">
                    {section.title}
                  </h5>
                  {section.items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="mb-2.5 block text-[10px] !text-[#666]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>

            {/* 其他栏 */}
            <div className="flex-[2]">
              {otherNavigation.map(section => (
                <div key={section.title} className="mb-6 first:mb-2">
                  <h4 className="text-fluid-lg mb-2 font-semibold !text-[#333]">
                    {section.title}
                  </h4>
                  {section.items.map(item => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="mb-2.5 block text-[10px] !text-[#666]"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* 社交媒体 */}
          <div className="mt-11 flex items-center justify-center">
            <span className="text-fluid-lg mr-6">{t('follow_us')}</span>
            <div className="flex items-center gap-5">
              <button
                type="button"
                onClick={() => setShowWechatQR(true)}
                className="flex items-center"
              >
                <Image
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/icon/MAqhgUP8Tto47vOE.webp"
                  alt="WeChat"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </button>
              <a
                href="https://weibo.com/6552733338/profile?topnav=1&wvr=6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/icon/oK7ABeigxqT2Q1dc.webp"
                  alt="Weibo"
                  width={20}
                  height={20}
                  className="h-5 w-5"
                />
              </a>
              <a
                href="https://www.zhihu.com/org/braincoqiang-nao-ke-ji"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/icon/8iAJUbz6FgXm4qXc.webp"
                  alt="Zhihu"
                  width={36}
                  height={20}
                  className="h-5 w-9"
                />
              </a>
            </div>
          </div>

          {/* Logo */}
          <div className="mt-10 flex justify-center md:mt-14">
            <Image
              src="/icons/logo.pc.webp"
              alt="BrainCo Logo"
              width={106}
              height={25}
              className="h-auto w-[106px]"
            />
          </div>

          {/* 语言切换 */}
          <div className="mb-6 flex flex-col items-center gap-2 md:mt-6 md:mb-0">
            {/* <span className="text-fluid-lg font-semibold !text-[#666]">
              {locale === 'zh-CN' ? '语言' : locale === 'en-US' ? 'Language' : '語言'}
            </span> */}
            <LanguageSelector />
          </div>

          {/* 版权信息 */}
          <div className="mt-2.5 px-5 pb-5 text-center">
            <p className="text-[10px] !text-gray-500">
              {isHangzhou
                ? t('copyright_hangzhou')
                : t('copyright_shenzhen')}
              {' '}
              <a
                href="https://beian.miit.gov.cn/#/Integrated/index"
                target="_blank"
                rel="noopener noreferrer"
                className="!text-gray-500"
              >
                {isHangzhou ? t('icp_hangzhou') : t('icp_shenzhen')}
              </a>
              {!isHangzhou && ` ${t('public_security')}`}
            </p>
          </div>
        </div>

        {/* 微信二维码弹窗（移动端） */}
        {showWechatQR && (
          <button
            type="button"
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
            onClick={() => setShowWechatQR(false)}
            onKeyDown={e => e.key === 'Escape' && setShowWechatQR(false)}
          >
            <div className="absolute bottom-24 flex w-60 flex-col items-center justify-center rounded-3xl bg-white p-4 text-center shadow-lg">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/brainco_code.jpg"
                alt="WeChat QR Code"
                width={100}
                height={100}
                className="mb-2 size-25"
              />
              <p className="text-fluid-lg text-gray-600">
                {t('wechat_qrcode_title')}
                {' '}
                <br />
                {' '}
                {t('wechat_qrcode_subtitle')}
              </p>
            </div>
          </button>
        )}
      </footer>
    </>
  );
}
