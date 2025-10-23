'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface AfterSalesMobileProps {
  text?: string;
  text2?: string;
}

export default function AfterSalesMobile({ text, text2 }: AfterSalesMobileProps) {
  const t = useTranslations('AfterSales');

  const items = [
    {
      icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/5B2KrdV7wx3vmHWu.webp',
      name: text || t('return_policy'),
    },
    {
      icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/USr4HQ6CoExPOjgn.webp',
      name: text2 || t('customer_service'),
    },
  ];

  return (
    <ul className="flex flex-col justify-center px-8 py-10">
      {items.map((item, index) => (
        <motion.li
          key={index}
          className={`flex items-center ${index === 0 ? 'mb-7' : ''}`}
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
        >
          <Image
            src={item.icon}
            alt=""
            width={40}
            height={40}
            className="h-auto w-10 flex-shrink-0"
          />
          <span className="text-fluid-sm ml-2.5 text-left">
            {item.name}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

