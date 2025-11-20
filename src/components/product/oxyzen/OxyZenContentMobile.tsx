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

  // 9D解析维度位置配置 - 根据语言调整每个圈的水平定位
  // 你可以在这里调整每个维度的 left/right 值来适配不同语言的文本宽度
  const dimensionPositions: Record<string, Record<string, string>> = {
    'zh-CN': {
      dimension_1: 'top-0 left-[-3.33vw]',
      dimension_2: 'top-1/4 left-[-8.33vw]',
      dimension_3: 'top-1/2 left-[-7.33vw]',
      dimension_4: 'bottom-[5.33vw] left-[6vw]',
      dimension_5: 'bottom-[-4] left-[40%]',
      dimension_6: 'right-[0] bottom-[5.33vw]',
      dimension_7: 'right-[-6.33vw] top-1/2',
      dimension_8: 'right-[-6.33vw] top-1/4',
      dimension_9: 'right-[0] top-0',
    },
    'en-US': {
      dimension_1: 'top-0 left-[-9.33vw]',
      dimension_2: 'top-1/4 left-[-12.33vw]',
      dimension_3: 'top-1/2 left-[-7.33vw]',
      dimension_4: 'bottom-[5.33vw] left-[-5vw]',
      dimension_5: 'bottom-[-4] left-[40%]',
      dimension_6: 'right-[-10.33vw] bottom-[5.33vw]',
      dimension_7: 'right-[-8.33vw] top-1/2',
      dimension_8: 'right-[-10.33vw] top-1/4',
      dimension_9: 'right-[-10.33vw] top-0',
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
    <main className="bg-white text-[#333]">
      {/* Hero Banner */}
      <header className="relative mt-24" role="img" aria-label="OxyZen 正念冥想产品 - 移动端 / OxyZen Mindfulness Product - Mobile">
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Iq43zFOho6u9SW5N.png"
          alt={`${t('product_name')} - OxyZen 氧气能量补充设备 - 移动端产品展示 / ${t('product_name')} - OxyZen Oxygen Energy Device - Mobile Product Display`}
          width={750}
          height={1000}
          className="h-auto w-full"
        />
        <div className="absolute top-0 right-0 left-0 pt-10 text-center">
          <motion.h1
            className="text-fluid-4xl font-normal !text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            {t('product_name')}
          </motion.h1>
          <motion.h2
            id="product-subtitle-mobile"
            className="text-fluid-3xl mt-2 font-normal"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('product_subtitle')}
          </motion.h2>
          <motion.p
            className="text-fluid-lg mt-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {t('tagline_1')}
            {' '}
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
      <section className="px-6 py-9 text-center">
        <motion.p
          className="text-fluid-base"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('award_text')}
        </motion.p>
      </section>

      {/* Data Collection */}
      <section className="px-6 py-9 text-center">
        <motion.h2
          id="data-collection-title-mobile"
          className="text-fluid-3xl mb-4 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('data_collection_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-base px-4 leading-relaxed"
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
      <div className="flex justify-center gap-8 px-6 py-5">
        {[
          { icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/oxyzen/brain.webp', label: 'eeg' },
          { icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/oxyzen/heart.webp', label: 'heart_rate' },
          { icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/oxyzen/blood.webp', label: 'blood_oxygen' },
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
              className="mr-2 h-auto w-auto"
            />
            <span className="text-fluid-base whitespace-nowrap">{t(item.label as any)}</span>
          </motion.div>
        ))}
      </div>

      {/* Device Image */}
      <div className="px-[18.66vw]">
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
            className="h-auto w-full"
          />
        </motion.div>
      </div>

      {/* Design Features */}
      <section className="mt-12 bg-[#edf1f2] px-5 py-5">
        {/* Card 1 */}
        <div className="mb-5 flex gap-5">
          <motion.div
            className="w-[51.73vw] rounded-xl bg-white px-5 py-5 text-center"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-fluid-xl mb-2 font-medium">{t('design_magnetic_title')}</h3>
            <p
              className="text-fluid-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('design_magnetic_desc').replace(/\n/g, ' ') }}
            />
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/oxyzen/style1.webp"
              alt={`${t('design_magnetic_title')} - OxyZen 磁吸设计示意图 / ${t('design_magnetic_title')} - OxyZen Magnetic Design Illustration`}
              width={149}
              height={76}
              className="mx-auto mt-1 h-auto w-[39.73vw]"
            />
          </motion.div>

          <motion.div
            className="w-[35.73vw] rounded-xl bg-white px-5 py-5 text-center"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-fluid-xl mb-2 font-medium">{t('design_comfortable_title')}</h3>
            <p
              className="text-fluid-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('design_comfortable_desc').replace(/\n/g, ' ') }}
            />
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/oxyzen/style2.webp"
              alt={`${t('design_comfortable_title')} - OxyZen 舒适设计示意图 / ${t('design_comfortable_title')} - OxyZen Comfortable Design Illustration`}
              width={73}
              height={52}
              className="mx-auto mt-1 h-auto w-[19.46vw]"
            />
          </motion.div>
        </div>

        {/* Cards 2 */}
        <div className="flex gap-5">
          <motion.div
            className="flex items-center justify-center overflow-hidden rounded-xl bg-white"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/oxyzen/style3.webp"
              alt="OxyZen 设计特性展示图 - 产品外观与功能展示 / OxyZen Design Features Display - Product Appearance and Functionality"
              width={206}
              height={200}
              className="h-auto w-full"
            />
          </motion.div>

          <motion.div
            className="w-[32vw] rounded-xl bg-white px-5 py-5 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1, duration: 0.8 }}
          >
            <h3 className="text-fluid-xl mb-2 font-medium">{t('design_portable_title')}</h3>
            <p
              className="text-fluid-base leading-relaxed"
              dangerouslySetInnerHTML={{ __html: t('design_portable_desc').replace(/\n/g, ' ') }}
            />
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/oxyzen/style4.webp"
              alt={`${t('design_portable_title')} - OxyZen 便携设计示意图 / ${t('design_portable_title')} - OxyZen Portable Design Illustration`}
              width={102}
              height={100}
              className="mx-auto mt-1 h-auto w-[27.2vw]"
            />
          </motion.div>
        </div>
      </section>

      {/* 3D Indicators */}
      <section className="px-6 py-9 text-center">
        <motion.h2
          id="indicators-title-mobile"
          className="text-fluid-3xl relative mb-2.5 pb-2.5 font-medium after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-10 after:-translate-x-1/2 after:bg-[#333]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('indicators_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-base px-4 py-4 leading-relaxed"
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
      <div className="flex justify-center gap-4 px-6 pb-5">
        {[
          { icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/oxyzen/chart.webp', label: 'mindfulness_index' },
          { icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/oxyzen/heart.webp', label: 'heart_rate' },
          { icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/oxyzen/blood.webp', label: 'blood_oxygen' },
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
              className="mr-2 h-auto w-auto"
            />
            <span className="text-fluid-base whitespace-nowrap">{t(item.label as any)}</span>
          </motion.div>
        ))}
      </div>

      {/* App Image */}
      <div className="px-[18.66vw]">
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/oxyzen/app.webp"
          alt="OxyZen 3D指标应用界面展示 - 健康数据可视化 / OxyZen 3D Indicators App Interface Display - Health Data Visualization"
          width={500}
          height={400}
          className="h-auto w-full"
        />
      </div>

      {/* 9D Parsing */}
      <section className="px-6 py-10 text-center">
        <motion.h2
          id="parsing-title-mobile"
          className="text-fluid-3xl mb-4 font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('parsing_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-base px-4 py-4 leading-relaxed"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          dangerouslySetInnerHTML={{
            __html: `${t('parsing_desc_1')}<br/>${t('parsing_desc_2')}`,
          }}
        />

        {/* Circular Layout */}
        <div className="relative mx-auto mt-22 h-[53.33vw] w-[90.66vw] rounded-full border border-[#d8d6d6] p-[2.66vw]">
          <div className="h-full w-full rounded-full border border-[#d8d6d6]" />

          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/WAowa05JcAyTF6AL.webp"
            alt="OxyZen 9D解析维度图 1 - 健康数据分析维度 / OxyZen 9D Parsing Dimension 1 - Health Data Analysis Dimension"
            width={96}
            height={80}
            className="absolute top-0 left-1/2 z-10 h-auto w-[25.6vw] -translate-x-[25.6vw] -translate-y-[14.66vw]"
            role="presentation"
          />
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Ls3phK4hHBivlNDI.webp"
            alt="OxyZen 9D解析维度图 2 - 健康数据分析维度 / OxyZen 9D Parsing Dimension 2 - Health Data Analysis Dimension"
            width={96}
            height={80}
            className="absolute top-0 left-1/2 h-auto w-[25.6vw] -translate-x-[5.33vw] -translate-y-[10.33vw]"
            role="presentation"
          />
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Tyw4f2mxbbxhy7kD.png"
            alt="OxyZen 9D解析中心图 - 多维度健康数据分析 / OxyZen 9D Parsing Center - Multi-dimensional Health Data Analysis"
            width={107}
            height={100}
            className="absolute top-1/2 left-1/2 z-20 h-auto w-[28.53vw] -translate-x-1/2 -translate-y-[10.66vw]"
          />

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
                className={`text-fluid-xl absolute flex h-10 px-4 items-center justify-center rounded-full bg-gradient-to-b from-[#edfdfd] to-[#82c8c4] ${getDimensionStyle(label)}`}
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
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/oxyzen/more.webp"
          alt="OxyZen 睡眠内容背景图 - 优质睡眠内容展示 / OxyZen Sleep Content Background - Premium Sleep Content Display"
          width={750}
          height={500}
          className="h-auto w-full"
          role="presentation"
        />
        <div className="absolute top-0 right-0 left-0 px-4 pt-10 text-center !text-white">
          <motion.h2
            id="content-title-mobile"
            className="text-fluid-3xl mb-2.5 font-medium"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('content_title')}
          </motion.h2>
          <motion.p
            className="text-fluid-base"
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
          className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white px-4 py-3 shadow-lg"
        >
          <div className="flex items-center justify-between">
            <div className="ml-4 flex items-baseline">
              <span className="text-fluid-3xl font-medium text-gray-900">
                ¥
                {productInfo.price / 100}
              </span>
              {productInfo.oldPrice && (
                <span className="text-fluid-xl ml-1 text-gray-600 line-through">
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
      <AfterSalesMobile />
    </main>
  );
}
