'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function AboutContent() {
  const t = useTranslations('About');

  return (
    <main className="w-full bg-white">
      {/* Top Banner */}
      <header
        className="relative flex h-screen w-full flex-col items-center justify-end bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/lQh40fjPTJJQ5w5y.webp)',
        }}
        role="img"
        aria-label="BrainCo 团队办公场景 / BrainCo Team Office Scene"
      >
        <motion.div
          className="flex flex-col items-center pb-[60px] 2xl:pb-[120px]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-fluid-7xl leading-[92px] text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            {t('page_title')}
          </motion.h1>
          <motion.p
            className="text-fluid-2xl mt-[36px] w-[740px] text-center leading-[34px] text-white 2xl:mt-[47px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
          >
            {t('intro_text')}
          </motion.p>
        </motion.div>
      </header>

      {/* Brand Culture Section */}
      <section className="flex h-[680px] w-full items-center justify-center bg-white 2xl:h-[880px]" aria-labelledby="brand-culture-title">
        <div className="flex w-4/5 items-center">
          <motion.div
            className="ml-[40px] flex w-1/2 flex-col justify-between 2xl:ml-[100px]"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 id="brand-culture-title" className="text-fluid-6xl mb-[40px] leading-[80px] font-medium text-[#333333] 2xl:mb-[80px]">
              {t('brand_culture')}
            </h2>
            <div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              >
                <h3 className="text-2xl leading-10 font-medium text-[#333333]">
                  {t('mission')}
                </h3>
                <div className="my-[9px] h-px w-[48px] border-t-[2px] border-[#333333]" />
                <p className="w-[461px] text-xl leading-[34px] text-[#707070]">
                  {t('mission_text')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              >
                <h3 className="mt-[40px] text-2xl leading-10 font-medium text-[#333333]">
                  {t('vision')}
                </h3>
                <div className="my-[9px] h-px w-[48px] border-t-[2px] border-[#333333]" />
                <p className="w-[461px] text-xl leading-[34px] text-[#707070]">
                  {t('vision_text')}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              >
                <h3 className="mt-[40px] text-2xl leading-10 font-medium text-[#333333]">
                  {t('values')}
                </h3>
                <div className="my-[9px] h-px w-[48px] border-t-[2px] border-[#333333]" />
                <div className="w-[461px] text-xl leading-[34px] text-[#707070]">
                  <p>{t('values_1')}</p>
                  <p>{t('values_2')}</p>
                  <p>{t('values_3')}</p>
                  <p>{t('values_4')}</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
          <motion.div
            className="flex w-1/2 items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/6jQXUJYZkMrzmswu.webp"
              alt={t('brand_culture')}
              width={659}
              height={711}
              className="object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* Social Contribution Section */}
      <div className="flex min-h-[680px] w-full items-center justify-center bg-white py-20 2xl:min-h-[880px]">
        <div className="flex w-4/5 items-center">
          <motion.div
            className="flex w-1/2 items-center justify-center"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/5m3wubcuKufndRpU.webp"
              alt={t('social_contribution')}
              width={659}
              height={711}
              className="object-contain"
            />
          </motion.div>
          <motion.div
            className="ml-[100px] flex w-1/2 flex-col justify-between"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <h2 className="text-fluid-6xl mb-[60px] leading-[80px] font-medium text-[#333333] 2xl:mb-[100px]">
              {t('social_contribution')}
            </h2>
            <motion.div
              className="group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <div className="mb-[40px] h-px w-[48px] border-t-[2px] border-[#333333]" />
              <p className="[display:-webkit-box] text-xl leading-[34px] text-[#707070] transition-all duration-300 [-webkit-box-orient:vertical] [-webkit-line-clamp:11] group-hover:[-webkit-line-clamp:unset] md:overflow-hidden md:text-ellipsis">
                {t('contribution_text')}
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
