'use client';

import type { NewsItem } from './types';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import BackToTop from '@/components/common/BackToTop';
import HotNewsCarousel from './HotNewsCarousel';
import NewsHero from './NewsHero';
import NewsList from './NewsList';
import WeChatQRCode from './WeChatQRCode';

type NewsContentProps = {
  initialHotNews?: NewsItem[];
  initialNewsList?: NewsItem[];
};

export default function NewsContent({
  initialHotNews = [],
  initialNewsList = [],
}: NewsContentProps) {
  const t = useTranslations('News');
  const [hotNews] = useState<NewsItem[]>(initialHotNews);
  const [newsList] = useState<NewsItem[]>(initialNewsList);
  const loading = false; // 数据已在服务端获取，不需要loading状态

  return (
    <main className="w-full bg-white">
      <NewsHero isMobile={false} />

      <section className="relative mx-auto mt-[3.5vw] w-full overflow-x-hidden px-[4vw] pt-10 pb-[3vw] md:mt-[55px] md:pb-[12vw] xl:overflow-x-visible xl:px-[2vw]" aria-labelledby="news-section-title">
        <h2 id="news-section-title" className="sr-only">新闻列表 / News List</h2>
        {/* <motion.h5
          initial={{ opacity: 0.7, y: -5 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.2 }}
          className="text-fluid-4xl mb-[2vw] text-center font-normal text-[#333333] md:mb-[30px]"
        >
          {t('page_title')}
        </motion.h5> */}

        {loading
          ? (
              <div className="text-fluid-lg py-[4vw] text-center text-[#999999] md:py-[60px]">
                {t('loading')}
              </div>
            )
          : (
              <>
                <div className="relative mx-auto max-w-[65%]">
                  <HotNewsCarousel hotNews={hotNews} isMobile={false} />
                  <WeChatQRCode />
                </div>
                <div className="mx-auto mt-[6vw] max-w-[85%]">
                  <NewsList newsList={newsList} isMobile={false} />
                </div>
              </>
            )}
      </section>

      <BackToTop />
    </main>
  );
}
