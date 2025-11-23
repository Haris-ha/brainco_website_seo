'use client';

import type { NewsItem } from './types';
import { useEffect, useState } from 'react';
import { useIsMobile } from '@/hooks/useIsMobile';
import NewsContent from './NewsContent';
import NewsContentMobile from './NewsContentMobile';

type NewsPageClientProps = {
  initialHotNews?: NewsItem[];
  initialNewsList?: NewsItem[];
};

export default function NewsPageClient({
  initialHotNews = [],
  initialNewsList = [],
}: NewsPageClientProps) {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // 避免水合不匹配，先不渲染任何内容
  if (!mounted) {
    return null;
  }

  return isMobile
    ? <NewsContentMobile initialHotNews={initialHotNews} initialNewsList={initialNewsList} />
    : <NewsContent initialHotNews={initialHotNews} initialNewsList={initialNewsList} />;
}
