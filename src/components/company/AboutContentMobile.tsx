'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutContentMobile() {
  const t = useTranslations('About');

  return (
    <main className="w-full bg-white overflow-hidden">
      {/* Top Banner */}
      <header className="relative">
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/8YPFxdcLUlb4CDa7.webp"
          alt="BrainCo 关于我们页面背景 - 团队办公场景 / BrainCo About Us Background - Team Office"
          width={750}
          height={800}
          className="w-full object-cover md:max-h-[800px]"
        />
        <motion.div
          className="absolute top-0 left-0 flex h-full w-full flex-col justify-center px-20 backdrop-blur-[3px] md:max-h-[800px] md:backdrop-blur-[6px]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-fluid-5xl text-center font-bold !text-white md:scale-130"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            {t('page_title')}
          </motion.h1>
          <motion.p
            className="text-fluid-base mt-5 text-center !text-white md:scale-130 md:px-40 md:mt-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          >
            {t('intro_text')}
          </motion.p>
        </motion.div>
      </header>

      {/* Brand Culture Section */}
      <motion.section
        className="px-[42px] text-center md:scale-130 md:py-20"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        aria-labelledby="brand-culture-title-mobile"
      >
        <h2 id="brand-culture-title-mobile" className="text-fluid-2xl mt-[54px] mb-[14px] text-center font-bold">
          {t('brand_culture')}
        </h2>
        <dl>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
          >
            <dt className="text-fluid-xl mt-[16px] mb-[18px] inline-block border-b-[3px] border-[#333] pr-1 pb-[6px]">
              {t('mission')}
            </dt>
            <dd className="text-fluid-base mb-[6px] text-[#656565]">{t('mission_text')}</dd>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
          >
            <dt className="text-fluid-xl mt-[38px] mb-[18px] inline-block border-b-[3px] border-[#333] pr-1 pb-[6px]">
              {t('vision')}
            </dt>
            <dd className="text-fluid-base mb-[6px] text-[#656565]">{t('vision_text')}</dd>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
          >
            <dt className="text-fluid-xl mt-[38px] mb-[18px] inline-block border-b-[3px] border-[#333] pr-1 pb-[6px]">
              {t('values')}
            </dt>
            <dd className="text-fluid-base mb-[6px] text-[#656565]">{t('values_1')}</dd>
            <dd className="text-fluid-base mb-[6px] text-[#656565]">{t('values_2')}</dd>
            <dd className="text-fluid-base mb-[6px] text-[#656565]">{t('values_3')}</dd>
            <dd className="text-fluid-base mb-[6px] text-[#656565]">{t('values_4')}</dd>
          </motion.div>
        </dl>
      </motion.section>

      {/* Social Contribution Section */}
      <motion.div
        className="mt-[50px] mb-[50px] px-[42px]"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-fluid-2xl mt-[54px] mb-[14px] text-center font-bold md:scale-130">
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
              className="w-full rounded-sm object-cover"
            />
            <p className="text-fluid-base mt-[10px] text-center text-[#656565]">
              {t('contribution_text')}
            </p>
          </motion.li>
        </ul>
      </motion.div>
    </main>
  );
}
