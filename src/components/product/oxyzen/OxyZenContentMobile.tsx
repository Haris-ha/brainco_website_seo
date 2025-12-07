'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AfterSalesMobile from '@/components/common/AfterSalesMobile';
import PurchaseButton from './PurchaseButton';

type OxyZenContentMobileProps = {
  productInfo?: any;
};

export default function OxyZenContentMobile({ productInfo }: OxyZenContentMobileProps) {
  const t = useTranslations('OxyZen');
  const locale = useLocale();
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // 9D解析维度位置配置 - 爱心弧度等距分布
  // 你可以在这里调整每个维度的 left/right 值来适配不同语言的文本宽度
  const dimensionPositions: Record<string, Record<string, string>> = {
    'zh-CN': {
      dimension_1: 'top-[-16vw] left-[0vw]', // 左上 - 略微向内
      dimension_2: 'top-[0vw] left-[-6vw]', // 左中上 - 向外
      dimension_3: 'top-[18vw] left-[-6vw]', // 左中 - 最外侧（爱心最宽处）
      dimension_4: 'top-[37vw] left-[-6vw]', // 左中下 - 向内收
      dimension_5: 'bottom-[0vw] left-1/2 -translate-x-1/2', // 底部中间 - 爱心尖端
      dimension_6: 'top-[37vw] right-[-6vw]', // 右中下 - 向内收（对称）
      dimension_7: 'top-[18vw] right-[-6vw]', // 右中 - 最外侧（对称）
      dimension_8: 'top-[0vw] right-[-6vw]', // 右中上 - 向外（对称）
      dimension_9: 'top-[-16vw] right-[-4vw]', // 右上 - 略微向内（对称）
    },
    'en-US': {
      dimension_1: 'top-[-16vw] left-[-6vw]', // 左上 - 略微向内
      dimension_2: 'top-[0vw] left-[-11vw]', // 左中上 - 向外
      dimension_3: 'top-[18vw] left-[-10vw]', // 左中 - 最外侧（爱心最宽处）
      dimension_4: 'top-[37vw] left-[-10vw]', // 左中下 - 向内收
      dimension_5: 'bottom-[0vw] left-1/2 -translate-x-1/2', // 底部中间 - 爱心尖端
      dimension_6: 'top-[37vw] right-[-12vw]', // 右中下 - 向内收（对称）
      dimension_7: 'top-[18vw] right-[-11vw]', // 右中 - 最外侧（对称）
      dimension_8: 'top-[0vw] right-[-12vw]', // 右中上 - 向外（对称）
      dimension_9: 'top-[-16vw] right-[-8vw]', // 右上 - 略微向内（对称）
    },
    // 可以添加更多语言配置
    // 'zh-TW': { ... },
  };

  // 获取当前语言的配置，如果没有则使用默认配置（中文）
  const getDimensionStyle = (label: string) => {
    const defaultConfig = dimensionPositions['zh-CN']!;
    const langConfig = dimensionPositions[locale] || defaultConfig;
    return langConfig[label] || defaultConfig[label] || '';
  };

  // Handle scroll detection and bottom detection
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);

      // Check if scrolled to bottom
      const threshold = 10; // Small threshold for bottom detection
      const isBottom = window.innerHeight + window.scrollY
        >= document.documentElement.scrollHeight - threshold;
      setIsAtBottom(isBottom);

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
        // Re-check bottom when scroll stops
        const isStillBottom = window.innerHeight + window.scrollY
          >= document.documentElement.scrollHeight - threshold;
        setIsAtBottom(isStillBottom);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <main className="overflow-hidden bg-white text-[#333]">
      {/* Hero Banner */}
      <header className="relative mt-24" role="img" aria-label="OxyZen 正念冥想产品 - 移动端 / OxyZen Mindfulness Product - Mobile">
        <Image
          src="https://www.brainco.cn/news-images/hero_oz.jpg"
          alt={`${t('product_name')} - OxyZen 氧气能量补充设备 - 移动端产品展示 / ${t('product_name')} - OxyZen Oxygen Energy Device - Mobile Product Display`}
          width={750}
          height={1000}
          className="h-auto w-full"
          priority
        />
        <div className="absolute top-0 right-0 bottom-0 flex w-1/2 flex-col items-start justify-center px-6 md:px-12">
          <motion.h1
            className="text-fluid-4xl mb-3 text-left font-bold text-[#333] md:text-[4.5vw]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('product_name')}
          </motion.h1>
          <motion.p
            className="text-fluid-lg mb-1 text-left text-[#333] md:text-[2.25vw]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('tagline_1')}
          </motion.p>
          <motion.p
            className="text-fluid-lg mb-4 text-left text-[#333] md:text-[2.25vw]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t('tagline_2')}
          </motion.p>
        </div>
      </header>

      {/* Product Image */}
      <Image
        src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/oxyzen/wear.webp"
        alt="OxyZen 产品佩戴展示图 - 氧气能量补充设备使用场景 / OxyZen Product Wearing Display - Oxygen Energy Device Usage Scene"
        width={750}
        height={500}
        className="h-auto w-full"
      />

      {/* Award */}
      <section className="px-6 py-6 text-center md:px-12 md:py-12">
        <motion.p
          className="text-fluid-base mb-4 md:text-[2vw] max-w-[80%] mx-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          {t('award_text')}
        </motion.p>
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://www.brainco.cn/news-images/reward.png"
            alt="OxyZen 奖项标识 / OxyZen Award Badges"
            width={400}
            height={224}
            className="mx-auto h-auto w-[80%] max-w-[400px] md:w-[60%]"
          />
        </motion.div>

        {/* <motion.div
          className="mb-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/5fiJCWcxEy5VLUxa.webp"
            alt="OxyZen 获奖标识 / OxyZen Award Logo"
            width={290}
            height={100}
            className="mx-auto h-auto w-[60%] max-w-[200px] md:w-[40%]"
          />
        </motion.div> */}

      </section>

      {/* Data Collection */}
      <section className="px-6 py-9 text-center md:px-12 md:py-12">
        <motion.h2
          id="data-collection-title-mobile"
          className="text-fluid-3xl mb-4 font-medium md:text-[3.75vw]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('data_collection_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-base px-4 leading-relaxed md:px-8 md:text-[2vw]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          dangerouslySetInnerHTML={{
            __html: `${t('data_collection_desc_1')}<br />${t('data_collection_desc_2')}`,
          }}
        />
      </section>

      {/* Icons Row */}
      <div className="flex justify-center gap-8 px-6 pb-5 md:gap-12 md:px-12 md:pb-8">
        {[
          { icon: 'https://www.brainco.cn/news-images/eeg.png', label: 'eeg' },
          { icon: 'https://www.brainco.cn/news-images/Heart rate.png', label: 'heart_rate' },
          { icon: 'https://www.brainco.cn/news-images/Blood oxygen.png', label: 'blood_oxygen' },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            className="flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <Image
              src={item.icon}
              alt={`${t(item.label as any)} - OxyZen 数据采集功能图标 / ${t(item.label as any)} - OxyZen Data Collection Feature Icon`}
              width={15}
              height={15}
              className="mr-2 h-8 w-8 md:mr-2 md:h-8 md:w-8"
            />
            <span className="text-fluid-base whitespace-nowrap md:text-[2vw]">{t(item.label as any)}</span>
          </motion.div>
        ))}
      </div>

      {/* Device Image */}
      <div className="px-[18.66vw] md:px-[25vw]">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/oxyzen/device.webp"
            alt="OxyZen 数据采集设备展示图 - 多维度健康数据监测 / OxyZen Data Collection Device Display - Multi-dimensional Health Data Monitoring"
            width={500}
            height={400}
            className="h-auto w-full md:mx-auto md:max-w-[50vw]"
          />
        </motion.div>
      </div>

      {/* Design Features */}
      <section className="bg-[#edf1f2] px-4 py-6 md:px-[5vw] md:py-[5vw]">
        <div className="mx-auto grid max-w-full grid-cols-5 grid-rows-5 gap-[2vw] md:max-w-[85vw] md:gap-[1.5vw]">
          {/* 左上：Detachable Magnetic Design */}
          <motion.div
            className="col-span-3 row-span-3 flex flex-col items-start justify-start rounded-2xl bg-white p-4 md:rounded-[2vw] md:p-[3vw]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-fluid-2xl mb-2 font-semibold text-[#111827] md:mb-4">{t('design_magnetic_title')}</h3>
            <div className="text-fluid-sm mb-3 space-y-2 leading-relaxed text-[#333] md:mb-6 md:space-y-4">
              {t('design_magnetic_desc').split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/LewVPJHtk60Dy2hS.webp"
              alt={`${t('design_magnetic_title')} - OxyZen 磁吸设计示意图 / ${t('design_magnetic_title')} - OxyZen Magnetic Design Illustration`}
              width={568}
              height={300}
              className="mt-auto h-auto w-full object-contain"
            />
          </motion.div>

          {/* 右上：Comfortable & Skin-friendly */}
          <motion.div
            className="col-span-2 row-span-3 flex flex-col items-start justify-start rounded-2xl bg-white p-4 md:rounded-[2vw] md:p-[3vw]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <h3 className="text-fluid-2xl mb-2 font-semibold text-[#111827] md:mb-4">{t('design_comfortable_title')}</h3>
            <div className="text-fluid-sm mb-3 space-y-2 leading-relaxed text-[#333] md:mb-6 md:space-y-4">
              {t('design_comfortable_desc').split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/CrrdayolPeH3kgXx.webp"
              alt={`${t('design_comfortable_title')} - OxyZen 舒适设计示意图 / ${t('design_comfortable_title')} - OxyZen Comfortable Design Illustration`}
              width={275}
              height={200}
              className="mx-auto mt-auto h-auto w-[80%] object-contain"
            />
          </motion.div>

          {/* 左下：多彩头带图片 */}
          <motion.div
            className="col-span-3 row-span-2 flex items-center justify-center overflow-hidden rounded-2xl bg-white pb-2 md:rounded-[2vw] md:pb-[2vw]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/beazFEGimF59Rbvo.webp"
              alt="OxyZen 设计特性展示图 - 产品外观与功能展示 / OxyZen Design Features Display - Product Appearance and Functionality"
              width={736}
              height={400}
              className="h-full w-full object-cover"
            />
          </motion.div>

          {/* 右下：Lightweight & Portable */}
          <motion.div
            className="col-span-2 row-span-2 flex flex-col items-start justify-start rounded-2xl bg-white p-4 md:rounded-[2vw] md:p-[3vw]"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <h3 className="text-fluid-2xl mb-2 font-semibold text-[#111827] md:mb-4">{t('design_portable_title')}</h3>
            <div className="text-fluid-sm mb-3 space-y-2 leading-relaxed text-[#333] md:mb-10 md:space-y-4">
              {t('design_portable_desc').split('\n').map((line, index) => (
                <p key={index}>{line}</p>
              ))}
            </div>
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/SEH2rPIKwdnQxgx1.webp"
              alt={`${t('design_portable_title')} - OxyZen 便携设计示意图 / ${t('design_portable_title')} - OxyZen Portable Design Illustration`}
              width={390}
              height={300}
              className="mt-auto h-auto w-full object-contain"
            />
          </motion.div>
        </div>
      </section>

      {/* 3D Indicators */}
      <section className="px-6 py-9 text-center md:px-12 md:py-12">
        <motion.h2
          id="indicators-title-mobile"
          className="text-fluid-3xl relative mb-2.5 pb-2.5 font-medium after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-10 after:-translate-x-1/2 after:bg-[#333] md:mb-4 md:pb-4 md:text-[3.75vw] md:after:h-[2px] md:after:w-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('indicators_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-base px-4 py-4 leading-relaxed md:px-8 md:py-6 md:text-[2vw]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          dangerouslySetInnerHTML={{
            __html: `${t('indicators_desc_1')}<br />${t('indicators_desc_2')}`,
          }}
        />
      </section>

      {/* Icons Row 2 */}
      <div className="flex justify-center gap-4 px-6 pb-5 md:gap-12 md:px-12 md:pb-8">
        {[
          { icon: 'https://www.brainco.cn/news-images/meditation state.png', label: 'mindfulness_index' },
          { icon: 'https://www.brainco.cn/news-images/Heart rate.png', label: 'heart_rate' },
          { icon: 'https://www.brainco.cn/news-images/Blood oxygen.png', label: 'blood_oxygen' },
        ].map((item, index) => (
          <motion.div
            key={item.label}
            className="flex items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.6 }}
          >
            <Image
              src={item.icon}
              alt={`${t(item.label as any)} - OxyZen 3D指标功能图标 / ${t(item.label as any)} - OxyZen 3D Indicator Feature Icon`}
              width={15}
              height={15}
              className="mr-1 h-12 w-12 md:mr-2 md:h-14 md:w-14"
            />
            <span className="text-fluid-base whitespace-nowrap md:text-[2vw]">{t(item.label as any)}</span>
          </motion.div>
        ))}
      </div>

      {/* App Image */}
      <div className="px-[18.66vw] md:px-[25vw] mb-10">
        <Image
          src="https://www.brainco.cn/news-images/screen_home.png"
          alt="OxyZen 3D指标应用界面展示 - 健康数据可视化 / OxyZen 3D Indicators App Interface Display - Health Data Visualization"
          width={500}
          height={400}
          className="h-auto w-full md:mx-auto md:max-w-[50vw]"
        />
      </div>

      {/* 9D Parsing */}
      <section className="bg-[#F6F6F6] px-6 py-10 text-center md:px-12 md:py-12">
        <motion.h2
          id="parsing-title-mobile"
          className="text-fluid-3xl mb-4 font-medium md:mb-6 md:text-[3.75vw]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('parsing_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-base px-4 py-4 leading-relaxed md:px-8 md:py-6 md:text-[2vw]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          dangerouslySetInnerHTML={{
            __html: `${t('parsing_desc_1')}<br/>${t('parsing_desc_2')}`,
          }}
        />

        {/* Circular Layout */}
        <div className="relative mx-auto mt-22 h-[53.33vw] w-[90.66vw] rounded-full p-[2.66vw] md:mt-28 md:h-[45vw] md:w-[70vw] md:p-[3vw]">

          {/* 左侧第一张手机截图 - 最低 */}
          <motion.div
            className="absolute top-0 left-1/2 z-10 -translate-x-[33vw] -translate-y-[10vw] md:-translate-x-[28vw] md:-translate-y-[8vw]"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            <Image
              src="https://www.brainco.cn/news-images/report1.png"
              alt="OxyZen 9D解析维度图 1 - 健康数据分析维度 / OxyZen 9D Parsing Dimension 1 - Health Data Analysis Dimension"
              width={96}
              height={80}
              className="h-auto w-[25.6vw] md:w-[20vw]"
              role="presentation"
            />
          </motion.div>
          {/* 中间第二张手机截图 - 最高 */}
          <motion.div
            className="absolute top-0 left-1/2 -translate-x-[12.8vw] -translate-y-[16vw] md:-translate-x-[10vw] md:-translate-y-[14vw]"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            <Image
              src="https://www.brainco.cn/news-images/report2.png"
              alt="OxyZen 9D解析维度图 2 - 健康数据分析维度 / OxyZen 9D Parsing Dimension 2 - Health Data Analysis Dimension"
              width={96}
              height={80}
              className="h-auto w-[25.6vw] md:w-[20vw]"
              role="presentation"
            />
          </motion.div>
          {/* 右侧第三张手机截图 - 比第一张稍高 */}
          <motion.div
            className="absolute top-0 left-1/2 translate-x-[7vw] -translate-y-[12vw] md:translate-x-[8vw] md:-translate-y-[10vw]"
            initial={{ opacity: 0, y: 30, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <Image
              src="https://www.brainco.cn/news-images/report3.png"
              alt="OxyZen 9D解析维度图 3 - 健康数据分析维度 / OxyZen 9D Parsing Dimension 3 - Health Data Analysis Dimension"
              width={96}
              height={80}
              className="h-auto w-[25.6vw] md:w-[20vw]"
              role="presentation"
            />
          </motion.div>
          {/* 中心莲花图 */}
          <motion.div
            className="absolute top-[60%] left-1/2 z-20 -translate-x-1/2 -translate-y-[10.66vw] md:-translate-y-[8.5vw]"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 1, ease: 'easeOut' }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Tyw4f2mxbbxhy7kD.png"
              alt="OxyZen 9D解析中心图 - 多维度健康数据分析 / OxyZen 9D Parsing Center - Multi-dimensional Health Data Analysis"
              width={107}
              height={100}
              className="h-auto w-[28.53vw] md:w-[22vw]"
            />
          </motion.div>

          <ul className="absolute top-0 left-0 h-full w-full">
            {[
              'dimension_1',
              'dimension_2',
              'dimension_3',
              'dimension_4',
              'dimension_5',
              'dimension_6',
              'dimension_7',
              'dimension_8',
              'dimension_9',
            ].map((label, index) => (
              <motion.li
                key={label}
                className={`text-fluid-xl absolute flex h-10 items-center justify-center rounded-full bg-gradient-to-b from-[#edfdfd] to-[#82c8c4] px-4 md:h-12 md:px-5 md:text-[2.5vw] ${getDimensionStyle(label)}`}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 0.5 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
              >
                {t(label as any)}
              </motion.li>
            ))}
          </ul>
        </div>
      </section>

      {/* Sleep Content */}
      <section className="relative">
        <Image
          src="https://www.brainco.cn/news-images/group_mindfulness.jpg"
          alt="OxyZen 睡眠内容背景图 - 优质睡眠内容展示 / OxyZen Sleep Content Background - Premium Sleep Content Display"
          width={750}
          height={500}
          className="h-auto w-full"
          role="presentation"
        />
        <div className="absolute top-0 right-0 left-0 px-4 pt-2 text-center !text-[#333] md:px-12 md:pt-16">
          <motion.h2
            id="content-title-mobile"
            className="text-fluid-2xl mb-1 font-medium md:mb-4 md:text-[2.5vw]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('content_title')}
          </motion.h2>
          <motion.p
            className="text-fluid-base md:text-[2vw]"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('content_desc_1')}
            {t('content_desc_2')}
          </motion.p>
        </div>
      </section>

      {/* Fixed Bottom Purchase Bar */}
      {productInfo && (
        <motion.div
          initial={{ y: 100 }}
          animate={{ y: isScrolling || isAtBottom ? 100 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white px-4 py-3 shadow-lg md:px-8"
        >
          <div className="flex items-center justify-between">
            <div className="ml-4 flex items-baseline">
              <span className="text-fluid-3xl font-medium text-gray-900 md:text-[3.75vw]">
                ¥
                {productInfo.price / 100}
              </span>
              {productInfo.oldPrice && (
                <span className="text-fluid-xl ml-1 text-gray-600 line-through md:text-[2.5vw]">
                  ¥
                  {productInfo.oldPrice / 100}
                </span>
              )}
            </div>
            <div className="w-[120px]">
              <PurchaseButton product={productInfo} isMobile />
            </div>
          </div>
        </motion.div>
      )}

      {/* After Sales */}
      <div className="md:px-[60px]">
        <AfterSalesMobile />
      </div>
    </main>
  );
}
