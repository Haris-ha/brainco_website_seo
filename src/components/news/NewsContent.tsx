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
    <div className="w-full overflow-x-hidden bg-white">
      <NewsHero isMobile={false} />

      <div className="relative mx-auto mt-[3.5vw] w-full max-w-[70vw] px-[4vw] pt-10 pb-[3vw] md:mt-[55px] md:pb-[60px] xl:px-[2vw]">
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
                <HotNewsCarousel hotNews={hotNews} isMobile={false} />
                <NewsList newsList={newsList} isMobile={false} />
                <WeChatQRCode />
              </>
            )}
      </div>

      <BackToTop />
    </div>
  );
}
