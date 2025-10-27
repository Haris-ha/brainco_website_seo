'use client';

import type { NewsItem as NewsItemType } from './types';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import NewsItem from './NewsItem';

type NewsListProps = {
  newsList: NewsItemType[];
  isMobile?: boolean;
};

export default function NewsList({ newsList, isMobile = false }: NewsListProps) {
  const t = useTranslations('News');

  if (newsList.length === 0) {
    return (
      <div className="text-fluid-lg py-[4vw] text-center text-[#999999] md:py-[60px]">
        {t('no_news')}
      </div>
    );
  }

  const containerVariants = {
    hidden: { opacity: 0.5 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.2,
        staggerChildren: 0.03,
      },
    },
  };

  return (
    <motion.ul
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-300px' }}
      className={`new-list grid auto-rows-fr gap-x-[2vw] gap-y-[2.5vw] md:gap-x-[38px] md:gap-y-[40px] ${
        isMobile ? 'grid-cols-2' : 'grid-cols-2'
      }`}
    >
      {newsList.map((item, index) => (
        <motion.li key={`${item.url}-${index}`} className="cursor-target flex h-full w-full">
          <NewsItem item={item} index={index} />
        </motion.li>
      ))}
    </motion.ul>
  );
}
