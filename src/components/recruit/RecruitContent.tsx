'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function RecruitContent() {
  const t = useTranslations('Recruit');
  const [transformValue, setTransformValue] = useState(0);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setTransformValue(window.innerWidth / 5);
    }
  }, []);

  const handlePrev = () => {
    if (typeof window !== 'undefined') {
      setTransformValue(window.innerWidth / 5);
    }
  };

  const handleNext = () => {
    if (typeof window !== 'undefined') {
      setTransformValue(-window.innerWidth / 5);
    }
  };

  return (
    <main className="w-full overflow-x-hidden bg-white">
      {/* Top Banner */}
      <header
        className="relative flex h-[880px] w-full items-center justify-center bg-cover bg-center"
        style={{
          backgroundImage:
            'url(https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/fwXXuwCQ9Z0O636D.webp)',
        }}
        role="img"
        aria-label="BrainCo 招聘页背景 - 加入我们 / BrainCo Recruitment Background - Join Us"
      >
        <motion.div
          className="flex flex-col items-center justify-center gap-6"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.h1
            className="flex flex-col items-center text-center text-[76px] leading-tight text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
            >
              {t('join_us')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
            >
              {t('change_world')}
            </motion.span>
          </motion.h1>
          <motion.span
            className="mt-8 text-2xl text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
          >
            {t('brain_tech_slogan')}
          </motion.span>
        </motion.div>
      </header>

      {/* Content List */}
      <section className="flex w-full justify-center bg-white" aria-labelledby="recruit-content-title">
        <h2 id="recruit-content-title" className="sr-only">招聘信息 / Recruitment Information</h2>
        <div className="flex flex-col items-center pt-[214px]">
          {/* Title Section */}
          <motion.span
            className="pb-[5px] text-[44px] font-medium text-[#2b2b2b]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {t('great_product_title_1')}
          </motion.span>
          <motion.span
            className="pt-[5px] text-[44px] font-medium text-[#2b2b2b]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            {t('great_product_title_2')}
          </motion.span>
          <motion.p
            className="mt-[50px] w-[654px] text-center text-2xl leading-10 text-[#838483]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {t('philosophy_paragraph')}
          </motion.p>

          <motion.span
            className="mt-[160px] max-w-[622px] text-center text-[44px] font-medium text-[#2b2b2b]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {t('nine_years_title')}
          </motion.span>
          <motion.p
            className="mt-[50px] h-[155px] w-[824px] text-center text-2xl leading-10 text-[#838483]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            {t('journey_paragraph')}
          </motion.p>

          {/* What We Offer */}
          <motion.h2
            className="mt-32 h-[90px] w-[622px] text-center text-[52px] leading-[75px] font-medium text-[#2b2b2b]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {t('what_we_offer')}
          </motion.h2>

          {/* Cards */}
          <motion.div
            className="mt-[100px] flex w-[1100px] justify-between"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <motion.div
              className="flex h-[372px] w-[353px] flex-col items-center justify-center rounded-[20px] bg-white shadow-[6px_7px_62px_1px_#ededed]"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
            >
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/KBEw9rk75UDa0f27.webp"
                alt={t('personalized_training')}
                width={100}
                height={100}
              />
              <span className="mt-[39px] h-[84px] w-[224px] text-center text-[28px] leading-[38px] text-[#2b2b2b]">
                {t('personalized_training')}
              </span>
            </motion.div>
            <motion.div
              className="flex h-[372px] w-[353px] flex-col items-center justify-center rounded-[20px] bg-white shadow-[6px_7px_62px_1px_#ededed]"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
            >
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/7FkZy7Pqx6Mc3qW2.webp"
                alt={t('competitive_salary')}
                width={100}
                height={100}
              />
              <span className="mt-[39px] h-[84px] w-[224px] text-center text-[28px] leading-[38px] text-[#2b2b2b]">
                {t('competitive_salary')}
              </span>
            </motion.div>
            <motion.div
              className="flex h-[372px] w-[353px] flex-col items-center justify-center rounded-[20px] bg-white shadow-[6px_7px_62px_1px_#ededed]"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, y: -10, transition: { duration: 0.3 } }}
            >
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/rqnSfilDvu8b7CBh.webp"
                alt={t('elite_environment')}
                width={100}
                height={100}
              />
              <span className="mt-[39px] h-[84px] w-[224px] text-center text-[28px] leading-[38px] text-[#2b2b2b]">
                {t('elite_environment')}
              </span>
            </motion.div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            className="mt-[123px] mb-[80px] flex h-[400px] w-[678px] flex-col justify-between text-center text-2xl leading-10 text-[#2b2b2b]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              {t('intro_1')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              {t('intro_2')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              {t('intro_3')}
            </motion.span>
          </motion.div>

          {/* Scenario Carousel */}
          <motion.div
            className="flex w-full justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <div className="relative">
              <motion.div
                className="-ml-20 flex"
                animate={{ x: transformValue }}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  x: { duration: 0.5, ease: 'easeInOut' },
                  opacity: { duration: 0.8, delay: 0.2 },
                  scale: { duration: 0.8, delay: 0.2 },
                }}
              >
                <motion.div
                  className="mr-[40px] flex items-center justify-center"
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
                >
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/sIZR2ml7GHJWwlMx.webp"
                    alt="Office 1"
                    width={1020}
                    height={405}
                    className="rounded-[10px] object-cover shadow-[6px_7px_62px_1px_#ededed]"
                  />
                </motion.div>
                <motion.div
                  className="mr-[20px] flex items-center justify-center"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
                >
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/q68z09sE7HdzUPWy.webp"
                    alt="Office 2"
                    width={1020}
                    height={405}
                    className="rounded-[10px] object-cover shadow-[6px_7px_62px_1px_#ededed]"
                  />
                </motion.div>
              </motion.div>

              {/* Navigation buttons */}
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous slide"
                className="cursor-target absolute top-1/2 left-[30px] z-[3] h-[62px] w-[62px] -translate-y-1/2 bg-[url('https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/pwdX3SFceyMKwR6G.webp')] bg-[length:62px_62px]"
              />
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next slide"
                className="cursor-target absolute top-1/2 right-[30px] z-[3] h-[62px] w-[62px] -translate-y-1/2 bg-[url('https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/s9xb8MwzcxMcD01n.webp')] bg-[length:62px_62px]"
              />
            </div>
          </motion.div>

          {/* Join Us Section */}
          <motion.div
            className="mt-[120px] h-[186px] w-[530px] text-center text-[129px] leading-[203px] text-[#e7e7e7]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, letterSpacing: '-20px' }}
              whileInView={{ opacity: 1, letterSpacing: '0px' }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease: 'easeOut' }}
            >
              JOIN US
            </motion.span>
          </motion.div>

          <motion.div
            className="mb-[100px] w-[582px] text-center text-[21px] leading-[31px] text-[#e7e7e7]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <span>{t('join_us_final')}</span>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
