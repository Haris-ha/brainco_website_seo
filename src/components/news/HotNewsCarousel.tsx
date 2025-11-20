'use client';

import type { NewsItem } from './types';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';
import { SimpleCarousel } from '@/components/ui/SimpleCarousel';

type HotNewsCarouselProps = {
  hotNews: NewsItem[];
  isMobile?: boolean;
};

export default function HotNewsCarousel({ hotNews, isMobile = false }: HotNewsCarouselProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [arrowTop, setArrowTop] = useState<string>('50%');
  const router = useRouter();
  const locale = useLocale();

  // 计算箭头按钮相对于图片容器的位置
  useEffect(() => {
    const updateArrowPosition = () => {
      if (!carouselRef.current) {
        return;
      }

      // 查找SimpleCarousel的实际容器（第一个子元素）
      const carouselContainer = carouselRef.current.querySelector('[class*="relative overflow-hidden"]');
      if (!carouselContainer || !(carouselContainer instanceof HTMLElement)) {
        return;
      }

      // 查找第一个图片容器
      const firstItem = carouselContainer.querySelector('[class*="aspect-[16/9]"]');
      if (firstItem instanceof HTMLElement) {
        const carouselRect = carouselContainer.getBoundingClientRect();
        const imageRect = firstItem.getBoundingClientRect();

        // 计算图片容器的中心点相对于轮播容器的位置
        const imageCenter = imageRect.top + imageRect.height / 2 - carouselRect.top;
        setArrowTop(`${imageCenter}px`);
      }
    };

    updateArrowPosition();
    window.addEventListener('resize', updateArrowPosition);

    // 使用 ResizeObserver 监听容器大小变化
    let resizeObserver: ResizeObserver | null = null;
    if (carouselRef.current && typeof ResizeObserver !== 'undefined') {
      resizeObserver = new ResizeObserver(() => {
        updateArrowPosition();
      });
      resizeObserver.observe(carouselRef.current);
    }

    // 延迟执行以确保图片已加载和DOM渲染完成
    const timer1 = setTimeout(updateArrowPosition, 100);
    const timer2 = setTimeout(updateArrowPosition, 300);
    const timer3 = setTimeout(updateArrowPosition, 500);

    return () => {
      window.removeEventListener('resize', updateArrowPosition);
      if (resizeObserver) {
        resizeObserver.disconnect();
      }
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [hotNews]);

  if (hotNews.length === 0) {
    return null;
  }

  const handleImageClick = (item: NewsItem, e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // 检查是否是拖动操作
    const target = e.currentTarget;
    const isDragging = target.closest('[data-dragging="true"]');
    if (isDragging) {
      return;
    }

    // 如果有 documentId，直接跳转到站内；否则直接跳转外部链接
    if (item.documentId) {
      router.push(`/${locale}/news/${item.documentId}`);
    } else {
      window.open(item.url || item.externalUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const carouselItems = hotNews.map((item, index) => (
    <div
      key={item.documentId || item.url || `hot-news-${index}`}
      className="block w-full"
    >
      <div className="mx-auto w-full max-w-full">
        <div
          className="relative aspect-[16/9] w-full cursor-pointer overflow-hidden rounded-[10px]"
          onClick={e => handleImageClick(item, e)}
        >
          <Image
            src={item.img}
            alt={`${item.title} - 热点新闻配图 / Hot news image`}
            fill
            className="object-cover transition-transform duration-500 hover:scale-105"
            sizes="(max-width: 768px) 90vw, 1200px"
            priority={index === 0}
            draggable={false}
            onClick={e => handleImageClick(item, e)}
            style={{ cursor: 'pointer' }}
          />
        </div>
        <div
          className={`text-center ${
            isMobile ? 'px-[2vw] pt-[2.5vw]' : 'px-[2vw] pt-[24px] md:px-[30px]'
          }`}
        >
          <div
            className={`font-medium text-[#333333] ${
              isMobile ? 'text-fluid-base mb-[1vw]' : 'text-fluid-2xl mb-[1.5vw]'
            }`}
          >
            {item.title}
          </div>
          <div className={`${isMobile ? 'text-fluid-lg' : 'text-fluid-xl'} mb-0 text-[#999999] xl:mb-[1vw]`}>{item.time}</div>
        </div>
      </div>
    </div>
  ));

  return (
    <>
      <motion.section
        initial={{ opacity: 0.5, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-200px' }}
        transition={{ duration: 0.3 }}
        className="mb-[2vw] bg-[#FAFAFA] pb-[3vw] md:mb-[40px] md:pb-[40px]"
        aria-label="热点新闻轮播 / Hot news carousel"
      >
        <div ref={carouselRef}>
          <SimpleCarousel
            items={carouselItems}
            autoplay
            autoplayDelay={5000}
            className="w-full"
            showIndicators
            showArrows
            enableDrag={false}
            style={{ '--carousel-arrow-top': arrowTop } as React.CSSProperties}
          />
        </div>
      </motion.section>

    </>
  );
}
