'use client';

import type { NewsApiResponse, NewsItem } from './types';
import { useTranslations } from 'next-intl';
import { useEffect, useState } from 'react';
import HotNewsCarousel from './HotNewsCarousel';
import NewsHero from './NewsHero';
import NewsList from './NewsList';

export default function NewsContentMobile() {
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
      <NewsHero isMobile />

      <div className="mx-auto mt-[8vw] w-full px-[4vw] pt-10 pb-[8vw]">
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
              <div className="text-fluid-base py-[8vw] text-center text-[#999999]">
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
    </div>
  );
}
