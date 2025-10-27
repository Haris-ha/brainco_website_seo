'use client';

import type { NewsItem } from './types';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { SimpleCarousel } from '@/components/ui/SimpleCarousel';

type HotNewsCarouselProps = {
  hotNews: NewsItem[];
  isMobile?: boolean;
};

export default function HotNewsCarousel({ hotNews, isMobile = false }: HotNewsCarouselProps) {
  if (hotNews.length === 0) {
    return null;
  }

  const carouselItems = hotNews.map((item, index) => (
    <div
      key={`${item.url}-${index}`}
      className="group block w-full cursor-pointer"
      onClick={(e) => {
        // 检查是否是拖动操作
        const target = e.currentTarget;
        const isDragging = target.closest('[data-dragging="true"]');
        if (!isDragging) {
          window.open(item.url, '_blank', 'noopener,noreferrer');
        }
      }}
    >
      <div className="mx-auto w-full max-w-full">
        <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[10px]">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 768px) 90vw, 1200px"
            priority={index === 0}
            draggable={false}
          />
        </div>
        <div
          className={`text-center ${
            isMobile ? 'px-[2vw] pt-[2vw]' : 'px-[2vw] pt-[1.5vw] md:px-[30px] md:pt-[24px]'
          }`}
        >
          <div
            className={`font-medium text-[#333333] ${
              isMobile ? 'text-fluid-sm mb-[1vw]' : 'text-fluid-2xl mb-[1.5vw]'
            }`}
          >
            {item.title}
          </div>
          <div className="text-fluid-lg mb-[1vw] text-[#999999]">{item.time}</div>
        </div>
      </div>
    </div>
  ));

  return (
    <motion.div
      initial={{ opacity: 0.5, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-200px' }}
      transition={{ duration: 0.3 }}
      className="mb-[2vw] bg-[#FAFAFA] pb-[3vw] md:mb-[40px] md:pb-[40px]"
    >
      <SimpleCarousel
        items={carouselItems}
        autoplay
        autoplayDelay={5000}
        className="w-full"
        showIndicators
        showArrows
        enableDrag={false}
      />
    </motion.div>
  );
}
