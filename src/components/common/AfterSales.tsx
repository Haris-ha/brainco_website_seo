'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

type AfterSalesProps = {
  text?: string;
  text2?: string;
  is15Days?: boolean;
  is30Days?: boolean;
};

export default function AfterSales({ text, text2, is15Days = false, is30Days = false }: AfterSalesProps) {
  const t = useTranslations('AfterSales');

  const items = [
    {
      icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/5B2KrdV7wx3vmHWu.webp',
      name: text || is15Days ? t('return_policy_15_days') : is30Days ? t('return_policy_30_days') : t('return_policy'),
    },
    {
      icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/USr4HQ6CoExPOjgn.webp',
      name: text2 || is15Days ? t('customer_service_15_days') : is30Days ? t('customer_service_30_days') : t('customer_service'),
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
            alt={index === 0
              ? `${item.name} - 退货政策图标 / ${item.name} - Return Policy Icon`
              : `${item.name} - 客户服务图标 / ${item.name} - Customer Service Icon`}
            width={78}
            height={78}
            className="h-auto w-[5vw] max-w-[96px] min-w-[50px]"
          />
          <span className="text-fluid-2xl ml-[1.145vw] max-w-[30vw] text-left">
            {item.name}
          </span>
        </motion.li>
      ))}
    </ul>
  );
}
