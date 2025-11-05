'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function WeChatQRCode() {
  const t = useTranslations('News');

  return (
    <motion.aside
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="absolute top-[5vw] right-[-180px] hidden w-[180px] rounded-xl xl:block"
      aria-label="微信公众号二维码 / WeChat QR Code"
    >
      <div className="flex flex-col items-center justify-center rounded-xl bg-[#f8f8f8] px-[20px] py-[20px]">
        <figure className="relative mb-[16px] aspect-square w-[140px] bg-white p-[8px]">
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/brainco_code.jpg"
            alt="BrainCo 微信公众号二维码 - 扫码关注获取最新资讯 / BrainCo WeChat Official Account QR Code"
            fill
            className="object-contain"
            sizes="160px"
            loading="lazy"
          />
        </figure>
        <p className="text-fluid-base text-center text-[#333333]">{t('wechat_scan')}</p>
        <p className="text-fluid-base text-center text-[#333333]">{t('wechat_follow')}</p>
      </div>
    </motion.aside>
  );
}
