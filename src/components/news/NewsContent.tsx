'use client';

import type { NewsApiResponse, NewsItem } from './types';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import HotNewsCarousel from './HotNewsCarousel';
import NewsHero from './NewsHero';
import NewsList from './NewsList';
import WeChatQRCode from './WeChatQRCode';

export default function NewsContent() {
  const t = useTranslations('News');
  const [hotNews, setHotNews] = useState<NewsItem[]>([]);
  const [newsList, setNewsList] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNews = async () => {
      try {
        const response = await fetch(
          'https://bc-api.brainco.cn/rsc/api/news?pageNo=1&pageSize=2000',
        );
        const data: NewsApiResponse = await response.json();

        if (data && data.data && data.data.list.length) {
          // Filter and sort hot news
          const hot = data.data.list
            .filter(item => item.hot)
            .sort((a, b) => a.sortIndex - b.sortIndex)
            .map(item => ({
              title: item.title,
              time: new Date(item.newsDate)
                .toLocaleDateString()
                .replace(/\//g, '-'),
              img: item.icon,
              url: item.url,
              hot: item.hot,
              sortIndex: item.sortIndex,
            }));

          // Filter and sort regular news
          const regular = data.data.list
            .filter(item => !item.hot)
            .sort((a, b) => a.sortIndex - b.sortIndex)
            .map(item => ({
              title: item.title,
              time: new Date(item.newsDate)
                .toLocaleDateString()
                .replace(/\//g, '-'),
              img: item.icon,
              url: item.url,
              hot: item.hot,
              sortIndex: item.sortIndex,
            }));

          setHotNews(hot);
          setNewsList(regular);
        }
      } catch (error) {
        console.error('Failed to fetch news:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchNews();
  }, []);

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
    </div>
  );
}
