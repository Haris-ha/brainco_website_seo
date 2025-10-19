'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutContentMobile() {
  const t = useTranslations('About');

  return (
    <div className="w-full bg-white">
      {/* Top Banner */}
      <div className="relative">
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/8YPFxdcLUlb4CDa7.webp"
          alt={t('page_title')}
          width={750}
          height={800}
          className="w-full object-cover"
        />
        <motion.div
          className="absolute top-0 left-0 flex h-[calc(100vh-80px)] w-full flex-col justify-center px-20 pr-5"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-[40px] font-bold text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            {t('page_title')}
          </motion.h1>
          <motion.p
            className="mt-5 text-base text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          >
            {t('intro_text')}
          </motion.p>
        </motion.div>
      </div>

      {/* Brand Culture Section */}
      <motion.div
        className="px-[42px] text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-fluid-2xl mt-[54px] mb-[14px] text-center font-bold">
          {t('brand_culture')}
        </h2>
        <dl>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <dt className="mt-[16px] mb-[18px] inline-block border-b-[3px] border-[#333] pr-1 pb-[6px] text-xl">
              {t('mission')}
            </dt>
            <dd className="mb-[6px] text-[#707070]">{t('mission_text')}</dd>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <dt className="mt-[38px] mb-[18px] inline-block border-b-[3px] border-[#333] pr-1 pb-[6px] text-xl">
              {t('vision')}
            </dt>
            <dd className="mb-[6px] text-[#707070]">{t('vision_text')}</dd>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            <dt className="mt-[38px] mb-[18px] inline-block border-b-[3px] border-[#333] pr-1 pb-[6px] text-xl">
              {t('values')}
            </dt>
            <dd className="mb-[6px] text-[#707070]">{t('values_1')}</dd>
            <dd className="mb-[6px] text-[#707070]">{t('values_2')}</dd>
            <dd className="mb-[6px] text-[#707070]">{t('values_3')}</dd>
            <dd className="mb-[6px] text-[#707070]">{t('values_4')}</dd>
          </motion.div>
        </dl>
      </motion.div>

      {/* Social Contribution Section */}
      <motion.div
        className="mt-[50px] mb-[50px] px-[42px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-fluid-2xl mt-[54px] mb-[14px] text-center font-bold">
          {t('social_contribution')}
        </h2>
        <ul>
          <motion.li
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/mZvimSaC46hEWw9I.webp"
              alt={t('social_contribution')}
              width={750}
              height={400}
              className="w-full object-cover"
            />
            <p className="mt-[10px] text-sm text-[#707070]">
              {t('contribution_text')}
            </p>
          </motion.li>
        </ul>
      </motion.div>
    </div>
  );
}
