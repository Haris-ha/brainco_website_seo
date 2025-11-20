'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function RecruitContentMobile() {
  const t = useTranslations('Recruit');

  return (
    <main className="w-full bg-white">
      {/* Top Banner */}
      <header className="relative pb-[40px]">
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/8A2MXC4jP6f5cPJc.webp"
          alt="BrainCo 招聘页面背景图 - 加入我们改变世界 / BrainCo Recruitment Page Background - Join Us to Change the World"
          width={750}
          height={600}
          className="w-full"
        />
        <motion.div
          className="absolute top-0 left-1/2 flex h-full w-[230px] -translate-x-1/2 flex-col items-start justify-center pt-[130px] !text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-fluid-5xl mb-[34px] flex w-full flex-col items-center justify-center text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
          >
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.7, ease: 'easeOut' }}
            >
              {t('join_us')}
            </motion.span>
            <motion.span
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.9, ease: 'easeOut' }}
            >
              {t('change_world')}
            </motion.span>
          </motion.h1>
          <motion.div
            className="text-fluid-base mb-[58px] w-full text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.1, ease: 'easeOut' }}
          >
            {t('brain_tech_slogan')}
          </motion.div>
        </motion.div>
      </header>

      {/* Content List */}
      <section className="w-full" aria-labelledby="recruit-mobile-content-title">
        <h2 id="recruit-mobile-content-title" className="sr-only">招聘信息 / Recruitment Information</h2>
        <div className="flex flex-col">
          {/* Titles */}
          <motion.span
            className="text-fluid-2xl mx-auto block px-[42px] text-center font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {t('great_product_title_1')}
          </motion.span>
          <motion.span
            className="text-fluid-2xl mx-auto block px-[42px] text-center font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            {t('great_product_title_2')}
          </motion.span>

          <motion.p
            className="text-fluid-base mx-0 my-[30px] px-[42px] text-center text-[#656565]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {t('philosophy_paragraph')}
          </motion.p>

          <motion.span
            className="text-fluid-2xl mx-auto mt-[40px] block px-[42px] text-center font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {t('nine_years_title')}
          </motion.span>

          <motion.p
            className="text-fluid-base mx-0 my-[30px] px-[42px] text-center text-[#656565]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            {t('journey_paragraph')}
          </motion.p>

          {/* What We Offer */}
          <motion.h2
            className="text-fluid-3xl mx-auto mt-[40px] block px-[42px] text-center font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            {t('what_we_offer')}
          </motion.h2>

          {/* Cards */}
          <motion.div
            className="mt-[20px] flex justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <motion.div
              className="mr-[6px] flex w-[96px] flex-[96px_0_0] flex-col items-center rounded-[10px] bg-white px-0 py-[14px] shadow-[6px_7px_62px_1px_#ededed]"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/KBEw9rk75UDa0f27.webp"
                alt="个性化定制化培养图标 / Personalized and Customized Training Icon"
                width={26}
                height={26}
                className="mb-[10px]"
              />
              <span className="text-fluid-base scale-[0.7] text-center">
                {t('personalized_training')}
              </span>
            </motion.div>
            <motion.div
              className="mr-[6px] flex w-[96px] flex-[96px_0_0] flex-col items-center rounded-[10px] bg-white px-0 py-[14px] shadow-[6px_7px_62px_1px_#ededed]"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/7FkZy7Pqx6Mc3qW2.webp"
                alt="有竞争力薪资待遇图标 / Competitive Compensation Icon"
                width={26}
                height={26}
                className="mb-[10px]"
              />
              <span className="text-fluid-base scale-[0.7] text-center">
                {t('competitive_salary')}
              </span>
            </motion.div>
            <motion.div
              className="flex w-[96px] flex-[96px_0_0] flex-col items-center rounded-[10px] bg-white px-0 py-[14px] shadow-[6px_7px_62px_1px_#ededed]"
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4, ease: 'easeOut' }}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/rqnSfilDvu8b7CBh.webp"
                alt="小而美精英研发环境图标 / Small but Excellent Elite R&D Environment Icon"
                width={26}
                height={26}
                className="mb-[10px]"
              />
              <span className="text-fluid-base scale-[0.7] text-center">
                {t('elite_environment')}
              </span>
            </motion.div>
          </motion.div>

          {/* Introduction */}
          <motion.div
            className="text-fluid-lg mt-[40px] px-[42px]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <motion.span
              className="mb-[30px] block text-[#656565]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1, ease: 'easeOut' }}
            >
              {t('intro_1')}
            </motion.span>
            <motion.span
              className="mb-[30px] block text-[#656565]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              {t('intro_2')}
            </motion.span>
            <motion.span
              className="mb-[30px] block text-[#656565]"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              {t('intro_3')}
            </motion.span>
          </motion.div>

          {/* Pictures */}
          <motion.div
            className="flex flex-col items-center justify-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
            >
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/sIZR2ml7GHJWwlMx.webp"
                alt="BrainCo 办公环境场景 - 团队协作 / BrainCo Office Environment - Team Collaboration"
                width={360}
                height={120}
                className="rounded-[10px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: 'easeOut' }}
            >
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/q68z09sE7HdzUPWy.webp"
                alt="BrainCo 办公环境场景 - 工作空间 / BrainCo Office Environment - Workspace"
                width={360}
                height={120}
                className="mb-[10px] rounded-[10px]"
              />
            </motion.div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
