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
      className="relative flex w-full items-center justify-center"
      style={{
        height: isMobile ? '40vh' : '100vh',
        minHeight: isMobile ? '200px' : '320px',
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        marginTop: isMobile ? 24 : '0',
      }}
      role="img"
      aria-label="BrainCo 新闻中心背景 / BrainCo News Center Background"
    >
      <motion.h1
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className={`text-center font-bold text-white  ${
          isMobile
            ? 'text-fluid-5xl'
            : 'text-fluid-7xl'
        }`}
      >
        {t('page_title')}
      </motion.h1>
    </motion.header>
  );
}
