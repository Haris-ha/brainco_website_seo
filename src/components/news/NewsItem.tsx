'use client';

import type { NewsItem as NewsItemType } from './types';
import { motion } from 'framer-motion';
import { useLocale } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

type NewsItemProps = {
  item: NewsItemType;
  index?: number;
  isMobile?: boolean;
};

export default function NewsItem({ item, index = 0, isMobile = false }: NewsItemProps) {
  const router = useRouter();
  const locale = useLocale();

  const handleCardClick = (e: React.MouseEvent) => {
    // PC端：整个卡片可点击；移动端：也支持整个卡片点击
    e.preventDefault();
    e.stopPropagation();
    
    // 如果有 documentId，直接跳转到站内；否则直接跳转外部链接
    if (item.documentId) {
      router.push(`/${locale}/news/${item.documentId}`);
    } else {
      window.open(item.url || item.externalUrl, '_blank', 'noopener,noreferrer');
    }
  };

  const handleImageClick = (e: React.MouseEvent) => {
    // 保留图片点击功能（向后兼容）
    e.preventDefault();
    e.stopPropagation();
    handleCardClick(e);
  };


  return (
    <motion.article
      initial={{ opacity: 0.3, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
      whileHover={{ scale: 1.02 }}
      className="h-full w-full bg-[#FAFAFA] transition-shadow hover:shadow-lg"
      onClick={handleCardClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="relative flex h-full w-full flex-col overflow-hidden rounded-[10px]">
        <figure className="relative aspect-[560/330] w-full flex-shrink-0 overflow-hidden">
          <Image
            src={item.img}
            alt={`${item.title} - 新闻配图 / News image`}
            fill
            className="object-cover transition-transform duration-300 hover:scale-105"
            sizes="(max-width: 768px) 50vw, 560px"
            loading="lazy"
            onClick={handleImageClick}
            style={{ cursor: 'pointer' }}
          />
        </figure>
        <div className={`flex flex-1 flex-col ${isMobile ? 'px-[2vw] pt-[2vw] pb-[3vw]' : 'px-[1.5vw] pt-[1.5vw] pb-[2.5vw] md:px-[30px] md:pt-[24px] md:pb-[36px]'}`}>
          <h3 className={`${isMobile ? 'text-fluid-base' : 'text-fluid-xl'} mb-[1vw] line-clamp-2 flex-1 font-medium text-[#333333] md:mb-[8px]`}>
            {item.title}
          </h3>
          <time className={`${isMobile ? 'text-fluid-base' : 'text-fluid-xl'} mt-auto text-[#999999]`}>{item.time}</time>
        </div>
      </div>

    </motion.article>
  );
}
