'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

type NewsHeroProps = {
  isMobile?: boolean;
};

export default function NewsHero({ isMobile = false }: NewsHeroProps) {
  const t = useTranslations('News');

  const backgroundImage = isMobile
    ? 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/E93mTVVGcTNmeNNH.webp'
    : 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/MEA2KfGAaHXWKFa4.jpeg';

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
      className={`relative flex w-full items-center justify-center ${
        isMobile ? 'md:h-[50vh] md:min-h-[300px]' : ''
      }`}
      style={{
        height: isMobile ? '40vh' : '50vh',
        minHeight: isMobile ? '200px' : '300px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: isMobile ? 24 : '0',
      }}
    >
      {/* 背景图描述（仅对屏幕阅读器可见） */}
      <span className="sr-only">BrainCo 新闻中心背景 / BrainCo News Center Background</span>
      {/* 半透明遮罩层，确保文字对比度 */}
      <div className="absolute inset-0 bg-black/30" aria-hidden="true" />
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`relative z-10 text-center font-bold !text-white drop-shadow-[0_2px_8px_rgba(0,0,0,0.5)] ${
          isMobile
            ? 'text-fluid-5xl md:text-5xl lg:text-6xl'
            : 'text-fluid-7xl'
        }`}
      >
        {t('page_title')}
      </motion.h1>
    </motion.header>
  );
}
