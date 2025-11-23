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
    <main className="w-full overflow-x-hidden bg-white">
      <NewsHero isMobile />

      <section className="mx-auto mt-[8vw] w-full px-[4vw] pb-[8vw] md:mt-[60px] md:max-w-[90vw] md:px-[40px] md:pb-[80px]" aria-labelledby="news-mobile-section-title">
        <h2 id="news-mobile-section-title" className="sr-only">新闻列表 / News List</h2>
        {/* <motion.h5
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-fluid-2xl mb-[4vw] text-center font-bold text-[#333333] md:text-3xl md:mb-[30px]"
        >
          {t('all_news')}
        </motion.h5> */}

        {loading
          ? (
              <div className="text-fluid-xl py-[8vw] text-center text-[#999999] md:py-[80px] md:text-2xl">
                {t('loading')}
              </div>
            )
          : (
              <>
                <HotNewsCarousel hotNews={hotNews} isMobile />
                <div className="mt-[4vw] md:mt-[40px]">
                  <NewsList newsList={newsList} isMobile />
                </div>
              </>
            )}
      </section>

      <BackToTop />
    </main>
  );
}
