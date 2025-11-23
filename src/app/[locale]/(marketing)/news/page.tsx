import type { Metadata } from 'next';
import { setRequestLocale } from 'next-intl/server';
import NewsPageClient from '@/components/news/NewsPageClient';
import DynamicCanonical from '@/components/seo/DynamicCanonical';
import StructuredData from '@/components/seo/StructuredData';
import { createPageMetadata } from '@/lib/metadata';
import { getNewsList, getPageSEOForStructuredData } from '@/lib/seo';
import { formatDate } from '@/lib/utils';

type NewsPageProps = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const params = await props.params;

  return createPageMetadata(params, 'news', {
    title: '新闻中心 - BrainCo',
    description: 'BrainCo 最新新闻和动态',
  });
}

export default async function NewsPage(props: NewsPageProps) {
  const { locale } = await props.params;
  setRequestLocale(locale);

  // 获取 SEO 数据用于结构化数据
  const seoData = await getPageSEOForStructuredData('/news', locale);

  // 获取新闻数据（服务端渲染）
  const newsListData = await getNewsList(locale, { pageSize: 200 });

  // 计算一个月前的日期
  const oneMonthAgo = new Date();
  oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);

  // 过滤出最近一个月的新闻
  const recentNewsListData = newsListData
    .filter((item) => {
      if (!item.newsDate) {
        return false;
      }
      const newsDate = new Date(item.newsDate);
      return newsDate >= oneMonthAgo;
    })
    // 按照时间降序排序（最新的在前）
    .sort((a, b) => {
      if (!a.newsDate || !b.newsDate) {
        return 0;
      }
      const dateA = new Date(a.newsDate).getTime();
      const dateB = new Date(b.newsDate).getTime();
      return dateB - dateA; // 降序：最新的在前
    });

  // 分离热门新闻和普通新闻（Strapi v5 扁平化结构）
  // 热门新闻：isHot 为 true 的新闻，用于 carousel（已按时间排序）
  const hotNews = recentNewsListData
    .filter(item => item?.isHot)
    .map(item => ({
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      time: formatDate(item.newsDate, 'YYYY-MM-DD'),
      img: item.coverImage || item.coverImageUrl || '',
      url: item.externalUrl,
      externalUrl: item.externalUrl,
      hot: item.isHot,
      sortIndex: item.sortIndex,
    }));

  // 列表新闻：包含所有新闻（包括热门和非热门），这样热门新闻会同时显示在列表和 carousel 中（已按时间排序）
  const regularNews = recentNewsListData
    .filter(item => item)
    .map(item => ({
      id: item.id,
      documentId: item.documentId,
      title: item.title,
      time: formatDate(item.newsDate, 'YYYY-MM-DD'),
      img: item.coverImage || item.coverImageUrl || '',
      url: item.externalUrl,
      externalUrl: item.externalUrl,
      hot: item.isHot,
      sortIndex: item.sortIndex,
    }));

  // 生成新闻列表的结构化数据（NewsArticle）- Strapi v5 扁平化结构
  const newsStructuredData = {
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    'itemListElement': recentNewsListData
      .filter(news => news?.title)
      .map((news, index) => ({
        '@type': 'ListItem',
        'position': index + 1,
        'item': {
          '@type': 'NewsArticle',
          'headline': news.title,
          'image': news.coverImage || news.coverImageUrl,
          'datePublished': news.newsDate,
          'url': news.externalUrl,
          'publisher': {
            '@type': 'Organization',
            'name': 'BrainCo',
            'logo': {
              '@type': 'ImageObject',
              'url': 'https://www.brainco.cn/logo.webp',
            },
          },
        },
      })),
  };

  return (
    <>
      {/* 添加结构化数据 - 直接从 CMS 获取 */}
      <DynamicCanonical canonicalURL={seoData?.canonicalURL} locale={locale} pagePath="/news" />
      <StructuredData seoData={seoData} />
      {/* 添加新闻列表的结构化数据 */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(newsStructuredData),
        }}
      />
      <NewsPageClient initialHotNews={hotNews} initialNewsList={regularNews} />
    </>
  );
}
