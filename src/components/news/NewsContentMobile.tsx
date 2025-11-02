'use client';

import type { NewsItem } from './types';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import BackToTop from '@/components/common/BackToTop';
import HotNewsCarousel from './HotNewsCarousel';
import NewsHero from './NewsHero';
import NewsList from './NewsList';

type NewsContentMobileProps = {
  initialHotNews?: NewsItem[];
  initialNewsList?: NewsItem[];
};

export default function NewsContentMobile({
  initialHotNews = [],
  initialNewsList = [],
}: NewsContentMobileProps) {
  const t = useTranslations('News');
  const [hotNews] = useState<NewsItem[]>(initialHotNews);
  const [newsList] = useState<NewsItem[]>(initialNewsList);
  const loading = false; // 数据已在服务端获取，不需要loading状态

  return (
    <div className="w-full overflow-x-hidden bg-white">
      <NewsHero isMobile />

      <div className="mx-auto mt-[8vw] w-full px-[4vw] pb-[8vw]">
        {/* <motion.h5
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-fluid-2xl mb-[4vw] text-center font-bold text-[#333333]"
        >
          {t('all_news')}
        </motion.h5> */}

        {loading
          ? (
              <div className="text-fluid-xl py-[8vw] text-center text-[#999999]">
                {t('loading')}
              </div>
            )
          : (
              <>
                <HotNewsCarousel hotNews={hotNews} isMobile />
                <div className="mt-[4vw]">
                  <NewsList newsList={newsList} isMobile />
                </div>
              </>
            )}
      </div>

      <BackToTop />
    </div>
  );
}
