'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

interface AfterSalesProps {
  text?: string;
  text2?: string;
}

export default function AfterSales({ text, text2 }: AfterSalesProps) {
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
    <ul className="flex justify-center gap-[3.125vw] py-[3.125vw]">
      {items.map((item, index) => (
        <motion.li
          key={index}
          className="flex items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.2, duration: 0.6 }}
        >
          <Image
            src={item.icon}
            alt=""
            width={78}
            height={78}
            className="h-auto w-[4.0625vw] min-w-[50px] max-w-[78px]"
          />
          <span className="text-fluid-2xl ml-[1.145vw] max-w-[26vw] text-left">
            {item.name}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}

