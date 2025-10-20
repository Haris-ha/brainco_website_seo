'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function MobiusContent() {
  const t = useTranslations('Mobius');

  const scenarios = [
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Oi87dQeNPAgJyTbm.webp', name: t('scenario_stop') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/gFf61GIPoM02TQyU.webp', name: t('scenario_upstairs') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/nRkCQyHxhiU1pm7r.webp', name: t('scenario_downslope') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/6tlmX0a5pAWwfGDL.webp', name: t('scenario_sit') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/seVWwEFIqhoMrXxp.webp', name: t('scenario_stand') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/9vrlIf8Uj3k2dV7J.webp', name: t('scenario_fast_walk') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/cf2AsK8QumqPvEpW.webp', name: t('scenario_obstacle') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Zqms57UeQjGI6zwR.webp', name: t('scenario_walk') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/UwhYf0j9KBtxFaHR.webp', name: t('scenario_downstairs') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/9J7a4uq0grB5Zi32.webp', name: t('scenario_slow_walk') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/wAepvfnIuEiWys7d.webp', name: t('scenario_seat') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/dBs6nGUbH0PXK3M8.webp', name: t('scenario_lean') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/lauqZ5KFd4LcPsVW.webp', name: t('scenario_kneel') },
    { img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/NK6B7nd593VUWXR0.webp', name: t('scenario_run') },
  ];

  const patents = [
    { count: t('patent_application_value'), unit: t('unit'), desc: t('patent_application') },
    { count: t('patent_authorized_value'), unit: t('unit'), desc: t('patent_authorized') },
    { count: t('patent_invention_value'), unit: t('unit'), desc: t('patent_invention') },
    { count: t('patent_utility_value'), unit: t('unit'), desc: t('patent_utility') },
    { count: t('patent_design_value'), unit: t('unit'), desc: t('patent_design') },
  ];

  return (
    <div className="w-full bg-white">
      {/* Hero Banner */}
      <div className="relative w-full">
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/QhGk39MAOtN7E0UZ.webp"
          alt={t('product_name')}
          width={1920}
          height={1080}
          sizes="100vw"
          className="h-screen w-full object-cover"
          priority
        />
        <div className="absolute right-[40px] bottom-52 flex h-full w-[380px] flex-col justify-center pt-[250px] 2xl:right-[100px]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/wgjcXaxT6UzSDlf2.png"
              alt="Mobius Logo"
              width={116}
              height={116}
              sizes="116px"
              className="mb-[30px] h-auto w-[116px]"
            />
          </motion.div>
          <motion.h1
            className="text-fluid-7xl mb-[30px] font-medium text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
          >
            {t('product_name')}
          </motion.h1>
          <motion.p
            className="text-fluid-xl leading-[1.6] text-black"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
          >
            {t('intro_text')}
          </motion.p>
        </div>
      </div>

      {/* Comparison Images */}
      <div className="mt-[30px] flex gap-[32px] px-[40px]">
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/hudSxGrayEtM0V6H.webp"
            alt="Comparison 1"
            width={900}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full"
          />
        </motion.div>
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/kKxyGzYX0ncr75vT.webp"
            alt="Comparison 2"
            width={900}
            height={600}
            sizes="(max-width: 768px) 100vw, 50vw"
            className="h-auto w-full"
          />
        </motion.div>
      </div>

      {/* Features */}
      <motion.div
        className="mx-auto mt-[120px] flex w-full max-w-screen flex-col items-center justify-center px-40"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/LRBPHu6DpZ0UbdEj.webp"
          alt="Features 1"
          width={1200}
          height={800}
          className="h-auto w-full max-w-screen"
        />
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/bZ8KQE79LB1YUpsc.webp"
          alt="Features 2"
          width={1200}
          height={800}
          className="mt-40 h-auto w-full"
        />
      </motion.div>

      <motion.div
        className="mt-[150px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/7IYc9t58RFg3BXpP.webp"
          alt="Product Detail"
          width={1920}
          height={1080}
          sizes="100vw"
          className="h-auto w-full"
        />
      </motion.div>

      {/* Applicable Scenarios */}
      <div className="mx-auto mt-[80px] w-full max-w-[1360px] px-40">
        <motion.h2
          className="text-fluid-6xl text-center font-normal text-[#333333]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {t('scenario_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-xl mt-[20px] text-center leading-[2] text-[#333333]"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
        >
          {t('scenario_desc')}
        </motion.p>

        <div className="mt-[88px] grid grid-cols-4 gap-x-6 gap-y-12 md:grid-cols-7 md:gap-x-8 md:gap-y-20">
          {scenarios.map((scenario, index) => (
            <motion.div
              key={scenario.name}
              className="flex flex-col items-center"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.05, ease: 'easeOut' }}
            >
              <div className="flex w-full items-center justify-center">
                <Image
                  src={scenario.img}
                  alt={scenario.name}
                  width={180}
                  height={180}
                  className="h-auto max-h-full w-auto max-w-full object-contain"
                />
              </div>
              <span className="text-fluid-lg mt-4 rounded-[22px] bg-[#f4f4f4] px-4 py-2 text-center text-[#3b3b3b] md:mt-6">
                {scenario.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Parameters */}
      <motion.div
        className="mx-auto mt-[100px] w-full max-w-[1220px] px-40"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/PKYDQvobujXni8lH.webp"
          alt="Parameters"
          width={1200}
          height={800}
          // sizes="(max-width: 768px) 100vw, (max-width: 1220px) 90vw, 1220px"
          className="h-auto w-full"
        />
      </motion.div>

      {/* Representative Images */}
      <motion.div
        className="mx-auto mt-[225px] flex w-full max-w-[1400px] flex-col items-center px-40"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/YW1MU4kHgtEdJZq0.webp"
          alt="Representative 1"
          width={1285}
          height={800}
          sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1400px"
          className="mx-40 h-auto w-full"
        />
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/9nMV0rdFUhpx4iQB.webp"
          alt="Representative 2"
          width={1400}
          height={800}
          sizes="(max-width: 768px) 100vw, (max-width: 1400px) 90vw, 1400px"
          className="mt-[190px] ml-40 h-auto w-full"
        />
      </motion.div>

      {/* App */}
      <motion.div
        className="mt-[158px]"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/NPjg1vKSMQw2OVui.webp"
          alt="App Preview"
          width={1920}
          height={1080}
          sizes="100vw"
          className="h-auto w-full"
        />
        <div className="mx-auto mt-[120px] w-full max-w-[1496px] px-40">
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/RSHmF7DV89GhPiO0.webp"
            alt="App Features"
            width={1496}
            height={1000}
            sizes="(max-width: 768px) 100vw, (max-width: 1496px) 90vw, 1496px"
            className="h-auto w-full"
          />
        </div>
      </motion.div>

      {/* Patents */}
      <motion.div
        className="mx-auto mt-[150px] mb-[150px] w-full max-w-[1500px] px-4 text-center"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-fluid-6xl mb-[24px] px-40 font-normal text-[#333333]">
          {t('patent_title')}
        </h2>
        <div className="mt-[160px] flex h-full items-center justify-center px-40">
          {/* Left: Patent Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className="-mr-10 hidden w-[500px] flex-shrink-0 lg:block"
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/fC7y3OzorWYn9Vmb.webp"
              alt="Patents"
              width={1200}
              height={600}
              className="h-auto w-full"
            />
          </motion.div>

          {/* Right: Patent Data - Top 2, Bottom 3, Right Aligned */}
          <div className="flex flex-1 flex-col justify-between self-stretch">
            {/* Top Row - 2 items, right aligned */}
            <div className="mt-30 grid grid-cols-3 gap-8 md:gap-10 2xl:mt-20">
              <div className="col-span-1"></div>
              {patents.slice(0, 2).map((patent, index) => (
                <motion.div
                  key={patent.desc}
                  className="col-span-1 text-left"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1, ease: 'easeOut' }}
                >
                  <h3 className="text-fluid-7xl leading-none text-[#333333]">
                    {patent.count}
                    <span className="text-fluid-3xl">{patent.unit}</span>
                  </h3>
                  <p className="text-fluid-4xl mt-[8px] text-[#333333]">{patent.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Bottom Row - 3 items */}
            <div className="grid grid-cols-3 gap-8 md:gap-10">
              {patents.slice(2).map((patent, index) => (
                <motion.div
                  key={patent.desc}
                  className="col-span-1 text-left"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: (index + 2) * 0.1, ease: 'easeOut' }}
                >
                  <h3 className="text-fluid-7xl leading-none text-[#333333]">
                    {patent.count}
                    <span className="text-fluid-3xl">{patent.unit}</span>
                  </h3>
                  <p className="text-fluid-4xl mt-[8px] text-[#333333]">{patent.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
