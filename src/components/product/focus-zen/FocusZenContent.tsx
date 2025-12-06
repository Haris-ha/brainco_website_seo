'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AfterSales from '@/components/common/AfterSales';
import { SalonImageWithLabel } from '@/components/common/SalonImageWithLabel';
import { findProductByIdentifier } from '@/lib/api';
import {
  deviceFeatures,
  imageUrls,
  meditationCornerImages,
  mindfulnessScenes,
  productCode,
  salonImages,
  solutionItems,
} from './data';
import PurchaseButton from './PurchaseButton';

export default function FocusZenContent() {
  const t = useTranslations('FocusZen');
  const locale = useLocale();
  const [product, setProduct] = useState<any>(null);

  // Fetch product data from API
  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await findProductByIdentifier(null, productCode, productCode);
      if (productData) {
        setProduct(productData);
      }
    };
    fetchProduct();
  }, []);

  return (
    <main className="overflow-x-hidden">
      {/* Hero Banner Section */}
      <header className="relative flex justify-end">
        <picture className="relative">
          <img
            src={imageUrls.heroBanner}
            alt="FocusZen 专注力训练正念放松设备 - 居家冥想场景 / FocusZen Focus Training & Mindfulness Relaxation Device - Home Meditation Scene"
            className="w-full"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent" />
        </picture>
        <div className={`absolute top-0 bottom-0 left-0 flex w-full flex-col items-start justify-start pt-[16vw] pb-[6vw] ${locale === 'zh-CN' ? 'pl-[16vw]' : 'pl-[12vw]'}`}>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-fluid-5xl mt-[0.5vw] leading-[1.4] font-bold"
          >
            {t('hero_title')}
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-fluid-5xl mt-[0.5vw] leading-[1.4] whitespace-pre-wrap"
          >
            {t('hero_subtitle')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-fluid-2xl mt-[2vw]"
          >
            {t('hero_slogan_1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-fluid-2xl mt-[0.5vw]"
          >
            {t('hero_slogan_2')}
          </motion.p>

          {/* 价格显示 */}
          {product && (
            <>
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7 }}
                className="mt-[2vw] flex items-baseline"
              >
                <span className="text-fluid-4xl font-medium">
                  ¥
                  {product.price / 100}
                </span>
                {product.oldPrice && (
                  <span className="text-fluid-2xl ml-6 text-gray-500 line-through">
                    ¥
                    {product.oldPrice / 100}
                  </span>
                )}
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="mt-[2vw]"
              >
                <PurchaseButton product={product} />
              </motion.div>
            </>
          )}
        </div>
      </header>

      {/* Device Features Section */}
      <section className="relative h-[600px] overflow-hidden pt-[100px] pb-[100px] 2xl:h-[880px] 2xl:pt-[100px] 2xl:pb-[100px]">
        {/* Circular background decoration - Arc */}
        <div className="absolute top-[-411px] left-[-980px] h-[1120px] w-[1700px] rounded-[100%] border border-[#707070]" />

        {/* Large Device Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative ml-[10vw]"
        >
          <Image
            src={imageUrls.deviceMain}
            alt="FocusZen 专注力训练正念设备 - 产品主图展示 / FocusZen Focus Training Mindfulness Device - Main Product Display"
            width={1435}
            height={1000}
            className="w-[30vw]"
            priority
          />
        </motion.div>

        {/* Feature Items on the Arc */}
        <div className="absolute top-0 left-[600px] flex h-full flex-col justify-center gap-16 2xl:left-[1000px] 2xl:gap-24">
          {deviceFeatures.map((feature, index) => {
            const marginClasses = [
              'ml-[90px]',
              'ml-[68px]',
              'ml-[-10px]',
            ];

            return (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className={`flex items-start ${marginClasses[index]} mr-6`}
              >
                <Image
                  src={feature.icon}
                  alt={`${t(feature.titleKey)} - FocusZen 功能特性图标 / ${t(feature.titleKey)} - FocusZen Feature Icon`}
                  width={72}
                  height={72}
                  className="relative z-10 mr-4 w-[58px] flex-shrink-0 2xl:mr-5 2xl:w-[72px]"
                />
                <div className="mt-2">
                  <h3 className="text-fluid-4xl 2xl:text-fluid-4xl mb-3 font-semibold text-[#111827] 2xl:mb-4">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-fluid-xl text-[#333]">
                    {t(feature.desc1Key)}
                  </p>
                  <p className="text-fluid-xl text-[#333]">
                    {t(feature.desc2Key)}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Video Neurofeedback Section */}
      <section className="relative mt-10 w-full overflow-hidden">
        {/* Background Video */}
        <video
          muted
          autoPlay
          loop
          playsInline
          webkit-playsinline="true"
          x5-video-player-type="h5-page"
          controls={false}
          preload="metadata"
          poster={imageUrls.videoPoster}
          src={imageUrls.videoSrc}
          className="w-full object-contain"
          aria-label="FocusZen 神经反馈训练演示视频 / FocusZen Neurofeedback Training Demo Video"
        />

        {/* Left side - Text Content (Absolute positioned) */}
        <div className="absolute -top-20 left-20 flex h-full w-[400px] flex-col justify-center pt-[250px]">
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-fluid-4xl mb-0 flex items-start leading-tight font-semibold"
          >
            {t('neuromindfulness_title')}
            <span className="text-fluid-sm ml-1 leading-none">
              {t('neuromindfulness_trademark')}
            </span>
          </motion.p>
          <motion.h2
            id="neurofeedback-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-fluid-4xl relative mb-6 pb-12 leading-tight font-semibold after:absolute after:bottom-0 after:left-0 after:h-[5px] after:w-[40px] after:bg-gray-900 after:content-['']"
          >
            {t('neurofeedback_title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-fluid-xl mb-4 font-light"
          >
            {t('neurofeedback_desc_1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-fluid-xl font-light"
          >
            {t('neurofeedback_desc_2')}
          </motion.p>

          {/* Mindfulness Scenes */}
          <div className="mt-[60px] flex space-x-4">
            {mindfulnessScenes.map((scene, index) => (
              <motion.div
                key={scene.nameKey}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative w-[88px] flex-shrink-0"
              >
                <Image
                  src={scene.image}
                  alt={`${t(scene.nameKey)} - FocusZen 正念场景示意图 / ${t(scene.nameKey)} - FocusZen Mindfulness Scene Illustration`}
                  width={88}
                  height={88}
                  className="cursor-target rounded-lg transition-transform hover:scale-105"
                />
                <div className="absolute inset-0 flex flex-col items-center justify-center !text-white">
                  <Image
                    src={scene.icon}
                    alt={`${t(scene.nameKey)} 场景图标 / ${t(scene.nameKey)} Scene Icon`}
                    width={18}
                    height={18}
                    className="mb-2"
                    role="presentation"
                  />
                  <span className="text-fluid-sm text-center">{t(scene.nameKey)}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Multi-Dimensional Report Section */}
      <section className="flex h-screen min-h-[800px] items-center justify-center overflow-hidden px-32 py-24">
        <div className="mx-auto flex w-full max-w-[90%] items-center justify-center gap-20 2xl:gap-32">
          <div className="relative h-[600px] w-[560px] flex-shrink-0 scale-[0.8] 2xl:h-[750px] 2xl:w-[700px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute -top-20 left-0 z-10"
            >
              <Image
                src={imageUrls.report1}
                alt="FocusZen 多维报告界面 1 - 专注力训练数据分析报告 / FocusZen Multi-Dimensional Report Interface 1 - Focus Training Data Analysis Report"
                width={340}
                height={560}
                className="h-auto w-[340px] 2xl:w-[420px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-0 bottom-0"
            >
              <Image
                src={imageUrls.report2}
                alt="FocusZen 多维报告界面 2 - 训练效果可视化图表 / FocusZen Multi-Dimensional Report Interface 2 - Training Effect Visualization Chart"
                width={340}
                height={560}
                className="h-auto w-[340px] 2xl:w-[420px]"
              />
            </motion.div>
          </div>

          <div className="max-w-[600px] pr-20">
            <motion.h2
              id="report-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-fluid-4xl relative mb-12 pb-12 font-semibold text-[#111827] after:absolute after:bottom-0 after:left-0 after:h-[5px] after:w-[40px] after:bg-gray-900 after:content-['']"
            >
              {t('report_title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-fluid-2xl mb-4 text-[#333]"
            >
              {t('report_desc_1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-fluid-2xl text-[#333]"
            >
              {t('report_desc_2')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Premium Content Section */}
      <section className="flex h-screen min-h-[800px] items-center justify-center overflow-hidden bg-[#edf1f2] px-32 pt-24">
        <div className="mx-auto flex w-full max-w-[90%] items-center justify-center gap-20 2xl:gap-32">
          <div className="max-w-[600px] pl-20">
            <motion.h2
              id="content-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-fluid-4xl relative mb-12 pb-12 text-left font-semibold text-[#111827] after:absolute after:bottom-0 after:left-0 after:h-[5px] after:w-[40px] after:bg-gray-900 after:content-['']"
            >
              {t('content_title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-fluid-2xl mb-4 text-left text-[#333]"
            >
              {t('content_desc_1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-fluid-2xl text-left text-[#333]"
            >
              {t('content_desc_2')}
            </motion.p>
          </div>

          <div className="relative h-[600px] w-[560px] flex-shrink-0 scale-[0.8] 2xl:h-[750px] 2xl:w-[700px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="absolute -top-20 left-0 z-10"
            >
              <Image
                src={imageUrls.content1}
                alt="FocusZen 优质内容界面 1 - 正念冥想课程内容展示 / FocusZen Premium Content Interface 1 - Mindfulness Meditation Course Content Display"
                width={340}
                height={560}
                className="h-auto w-[340px] 2xl:w-[420px]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="absolute right-0 bottom-0"
            >
              <Image
                src={imageUrls.content2}
                alt="FocusZen 优质内容界面 2 - 训练课程内容详情 / FocusZen Premium Content Interface 2 - Training Course Content Details"
                width={340}
                height={560}
                className="h-auto w-[340px] 2xl:w-[420px]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Group Mindfulness Mode Section */}
      <section className="relative h-screen min-h-[800px] overflow-hidden">
        <Image
          src={imageUrls.groupBg}
          alt="FocusZen 团体正念模式背景图 / FocusZen Group Mindfulness Mode Background"
          width={1920}
          height={1080}
          className="h-full w-full object-cover"
          role="presentation"
        />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center justify-center gap-10 2xl:gap-22">
            {/* Phone and avatars */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative scale-[0.65] 2xl:scale-[0.75]"
            >
              <Image
                src={imageUrls.groupMain}
                alt="FocusZen 团体正念模式主图 - 多人协同训练场景 / FocusZen Group Mindfulness Mode Main Image - Multi-Person Collaborative Training Scene"
                width={828}
                height={900}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 2xl:scale-100">
                <Image
                  src={imageUrls.groupScreen}
                  alt="FocusZen 团体正念模式界面屏幕 - 训练数据实时显示 / FocusZen Group Mindfulness Mode Screen - Real-time Training Data Display"
                  width={495}
                  height={920}
                />
              </div>
              {/* Avatar decorations */}
              <Image
                src={imageUrls.groupAvatar1}
                alt="FocusZen 团体正念模式用户头像 1 / FocusZen Group Mindfulness Mode User Avatar 1"
                width={67}
                height={67}
                className="absolute top-36 right-24"
                role="presentation"
              />
              <Image
                src={imageUrls.groupAvatar2}
                alt="FocusZen 团体正念模式用户头像 2 / FocusZen Group Mindfulness Mode User Avatar 2"
                width={120}
                height={120}
                className="absolute right-8 bottom-48"
                role="presentation"
              />
              <Image
                src={imageUrls.groupAvatar3}
                alt="FocusZen 团体正念模式用户头像 3 / FocusZen Group Mindfulness Mode User Avatar 3"
                width={95}
                height={95}
                className="absolute bottom-32 left-14"
                role="presentation"
              />
              <Image
                src={imageUrls.groupAvatar4}
                alt="FocusZen 团体正念模式用户头像 4 / FocusZen Group Mindfulness Mode User Avatar 4"
                width={144}
                height={144}
                className="absolute top-44 left-0"
                role="presentation"
              />
            </motion.div>

            {/* Text content */}
            <div className="max-w-[500px] pr-20 !text-white">
              <motion.h2
                id="group-mode-title"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-fluid-4xl relative mb-12 pb-12 font-semibold after:absolute after:bottom-0 after:left-0 after:h-[5px] after:w-[40px] after:bg-white after:content-['']"
              >
                {t('group_mode_title')}
              </motion.h2>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-fluid-2xl mb-4 w-full max-w-[300px] text-left font-light"
              >
                {t('group_mode_desc_1')}
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-fluid-2xl w-full max-w-[300px] text-left font-light"
              >
                {t('group_mode_desc_2')}
              </motion.p>
            </div>
          </div>
        </div>
      </section>

      {/* Community Practice Section */}
      <section className="flex h-screen min-h-[800px] items-center justify-center overflow-hidden py-24">
        <div className="mx-auto flex w-full max-w-[90%] items-center justify-center gap-10 px-8 2xl:gap-22">
          <div className="ml-32 max-w-[600px] min-w-[360px]">
            <motion.h2
              id="community-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-fluid-4xl relative mb-12 w-full pb-12 text-left font-semibold after:absolute after:bottom-0 after:left-0 after:h-[5px] after:w-[40px] after:bg-gray-900 after:content-['']"
            >
              {t('community_title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-fluid-2xl text-left font-light"
            >
              {t('community_desc_1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-fluid-2xl text-left font-light"
            >
              {t('community_desc_2')}
            </motion.p>
          </div>

          <div className="relative h-[800px] w-[880px] scale-[0.6] 2xl:scale-[0.75]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Image
                src={imageUrls.community1}
                alt="FocusZen 社区练习场景 1 - 正念训练社区活动展示 / FocusZen Community Practice Scene 1 - Mindfulness Training Community Activity Display"
                width={420}
                height={600}
                className="absolute bottom-0 -left-1/5"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <Image
                src={imageUrls.community2}
                alt="FocusZen 社区练习场景 2 - 团体正念训练活动 / FocusZen Community Practice Scene 2 - Group Mindfulness Training Activity"
                width={420}
                height={600}
                className="absolute -right-1/5 bottom-24"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="z-20"
            >
              <Image
                src={imageUrls.community3}
                alt="FocusZen 社区练习场景 3 - 正念冥想社区互动 / FocusZen Community Practice Scene 3 - Mindfulness Meditation Community Interaction"
                width={420}
                height={600}
                className="absolute top-42 left-1/2 -translate-x-1/2"
              />
            </motion.div>
            <Image
              src={imageUrls.community4}
              alt="FocusZen 社区练习装饰元素 1 / FocusZen Community Practice Decorative Element 1"
              width={140}
              height={160}
              className="absolute top-24 right-56 z-30"
              role="presentation"
            />
            <Image
              src={imageUrls.community5}
              alt="FocusZen 社区练习装饰元素 2 / FocusZen Community Practice Decorative Element 2"
              width={158}
              height={180}
              className="absolute bottom-52 left-20 z-30"
              role="presentation"
            />
          </div>
        </div>
      </section>

      {/* Business Solution Section */}
      <section className="relative">
        <Image
          src={imageUrls.businessBg}
          alt="FocusZen 商业解决方案背景图 / FocusZen Business Solution Background"
          width={1920}
          height={1080}
          className="w-full"
          role="presentation"
        />
        <div className="absolute inset-0 flex items-center justify-end px-32 2xl:px-64">
          <div className="max-w-[40vw] text-right !text-white">
            <motion.h2
              id="business-solution-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-fluid-5xl mb-4 font-normal"
            >
              {t('business_solution_title')}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-fluid-3xl mb-4 flex items-center justify-end space-x-4 text-white"
            >
              <span className="relative pr-4 after:absolute after:top-1/2 after:right-0 after:h-8 after:w-[3px] after:-translate-y-1/2 after:bg-white after:content-['']">
                {t('business_institution')}
              </span>
              <span>{t('business_institution_subtitle')}</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-fluid-lg mb-16 whitespace-pre-line text-[#8F9297]"
            >
              {t('business_desc')}
            </motion.p>

            <div className="flex w-full justify-between">
              {solutionItems.map((item, index) => (
                <motion.div
                  key={item.nameKey}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex flex-col items-center"
                >
                  <Image
                    src={item.icon}
                    alt={`${t(item.nameKey)} - FocusZen 商业解决方案图标 / ${t(item.nameKey)} - FocusZen Business Solution Icon`}
                    width={64}
                    height={64}
                    className="mb-2"
                  />
                  <span className="text-fluid-3xl font-bold">
                    {t(item.nameKey)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Data Section */}
      <section className="mb-24 bg-[#edf1f2] pt-24 text-center">
        <motion.h2
          id="training-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-fluid-5xl mb-6 font-semibold whitespace-pre-line text-[#333] capitalize"
        >
          {t('training_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-fluid-2xl mb-4 text-[#333]"
        >
          {t('training_desc_1')}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-fluid-2xl mb-8 text-[#333]"
        >
          {t('training_desc_2')}
        </motion.p>

        <div className="relative mx-auto mt-8 flex max-w-4xl justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src={imageUrls.training1}
              alt="FocusZen 训练数据统计图 - 专注力训练效果数据分析 / FocusZen Training Data Statistics - Focus Training Effect Data Analysis"
              width={1020}
              height={600}
            />
          </motion.div>
          <Image
            src={imageUrls.training2}
            alt="FocusZen 训练数据补充图表 / FocusZen Training Data Additional Chart"
            width={200}
            height={200}
            className="absolute -right-16 -bottom-16"
            role="presentation"
          />
        </div>
      </section>

      {/* Meditation Corner Section */}
      <section className="py-24">
        <div>
          <div className="mx-auto mb-16 max-w-[90%] px-8 text-center">
            <motion.h2
              id="meditation-corner-title"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-fluid-5xl mb-10 flex items-center justify-center space-x-4 font-semibold text-[#333]"
            >
              <span className="relative pr-5 after:absolute after:top-1/2 after:right-0 after:h-12 after:w-1 after:-translate-y-1/2 after:bg-[#333] after:content-['']">
                {t('meditation_corner')}
              </span>
              <span>{t('meditation_corner_subtitle')}</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-fluid-xl mx-auto mb-16 max-w-[800px] text-[#333]"
            >
              {t('meditation_corner_desc_1')}
            </motion.p>
          </div>
          {/* <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-fluid-xl mb-12 text-[#333]"
          >
            {t('meditation_corner_desc_2')}
          </motion.p> */}

          <div className="flex w-full gap-4">
            {meditationCornerImages.map((img, index) => (
              <motion.div
                key={img.url}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="relative h-[600px] flex-1 overflow-hidden"
              >
                <Image
                  src={img.url}
                  alt={`FocusZen 冥想角落场景 ${index + 1} - 正念冥想环境展示 / FocusZen Meditation Corner Scene ${index + 1} - Mindfulness Meditation Environment Display`}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform"
                  style={{ objectPosition: 'center' }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Mindfulness Salon Section */}
      <section className="py-24">
        <div className="mx-auto max-w-[90%] px-8 text-center">
          <motion.h2
            id="salon-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-fluid-5xl mb-12 flex items-center justify-center space-x-4 font-semibold"
          >
            <span className="relative pr-6 after:absolute after:top-1/2 after:right-0 after:h-8 after:w-[2px] after:-translate-y-1/2 after:bg-gray-900 after:content-['']">
              {t('salon_title')}
            </span>
            <span>{t('salon_subtitle')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-fluid-2xl mb-2 font-light"
          >
            {t('salon_desc_1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-fluid-2xl mb-2 font-light"
          >
            {t('salon_desc_2')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-fluid-2xl mb-24 font-light"
          >
            {t('salon_desc_3')}
          </motion.p>

          <div className="grid grid-cols-3 gap-1">
            {salonImages.map((img, index) => (
              <motion.div
                key={img.url}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                {img.labelKey
                  ? (
                      <SalonImageWithLabel
                        src={img.url}
                        alt={`FocusZen AI 正念沙龙场景 ${index + 1} - ${t(img.labelKey)} / FocusZen AI Mindfulness Salon Scene ${index + 1} - ${t(img.labelKey)}`}
                        label={t(img.labelKey)}
                        width={640}
                        height={480}
                      />
                    )
                  : (
                      <Image
                        src={img.url}
                        alt={`FocusZen AI 正念沙龙场景 ${index + 1} - 正念训练课程展示 / FocusZen AI Mindfulness Salon Scene ${index + 1} - Mindfulness Training Course Display`}
                        width={640}
                        height={480}
                        className="w-full"
                      />
                    )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="pt-24">
        <div className="mx-auto max-w-7xl px-8 text-center">
          <motion.h2
            id="partners-title"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-fluid-5xl mb-12 font-normal"
          >
            {t('partners_title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src={imageUrls.partners}
              alt="FocusZen 合作伙伴展示 - 合作机构与品牌标识 / FocusZen Partners Display - Partner Institutions and Brand Logos"
              width={1115}
              height={600}
            />
          </motion.div>
        </div>
      </section>

      {/* AfterSales Section */}
      <AfterSales />
    </main>
  );
}
