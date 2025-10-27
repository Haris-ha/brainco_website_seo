'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function WeChatQRCode() {
  const t = useTranslations('News');

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="qrcode absolute top-[5vw] -right-[180px] hidden w-[180px] rounded-xl xl:block"
    >
      <div className="sticky top-[100px] flex flex-col items-center justify-center rounded-xl bg-[#f8f8f8] px-[20px] py-[20px]">
        <div className="relative mb-[16px] aspect-square w-[140px] bg-white p-[8px]">
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/brainco_code.jpg"
            alt={t('wechat_scan')}
            fill
            className="object-contain"
            sizes="160px"
            loading="lazy"
          />
        </div>
        <p className="text-fluid-sm text-center text-[#333333]">{t('wechat_scan')}</p>
        <p className="text-fluid-sm text-center text-[#333333]">{t('wechat_follow')}</p>
      </div>
    </motion.div>
  );
}
