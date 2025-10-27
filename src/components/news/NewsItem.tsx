'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import type { NewsItem as NewsItemType } from './types';

interface NewsItemProps {
  item: NewsItemType;
  index?: number;
}

export default function NewsItem({ item, index = 0 }: NewsItemProps) {
  return (
    <motion.a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ opacity: 0.3, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.05 }}
      transition={{ duration: 0.3, delay: Math.min(index * 0.05, 0.3) }}
      whileHover={{ scale: 1.02 }}
      className="group block h-full w-full cursor-pointer bg-[#FAFAFA] transition-shadow hover:shadow-lg"
    >
      <div className="news-single flex h-full w-full flex-col overflow-hidden rounded-[10px]">
        <div className="relative aspect-[560/330] w-full flex-shrink-0 overflow-hidden">
          <Image
            src={item.img}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
            sizes="(max-width: 768px) 50vw, 560px"
            loading="lazy"
          />
        </div>
        <div className="flex flex-1 flex-col px-[1.5vw] pb-[2.5vw] pt-[1.5vw] md:px-[30px] md:pb-[36px] md:pt-[24px]">
          <div className="text-fluid-lg mb-[0.5vw] line-clamp-2 flex-1 font-medium text-[#333333] md:mb-[8px]">
            {item.title}
          </div>
          <div className="text-fluid-sm mt-auto text-[#999999]">{item.time}</div>
        </div>
      </div>
    </motion.a>
  );
}

