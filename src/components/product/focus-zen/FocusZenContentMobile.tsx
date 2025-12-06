'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import AfterSalesMobile from '@/components/common/AfterSalesMobile';
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

export default function FocusZenContentMobile() {
  const t = useTranslations('FocusZen');
  const [product, setProduct] = useState<any>(null);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

  // Fetch product data from API
  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const productData = await findProductByIdentifier(null, productCode, productCode);
        if (productData && productData.price) {
          setProduct(productData);
        }
      } catch (error) {
        // 静默处理错误，避免影响页面显示
        // 购买栏可以在没有产品数据时仍然显示（使用默认或从其他地方获取）
        console.warn('Failed to fetch product data, purchase bar may not show:', error);
      }
    };
    fetchProduct();
  }, []);

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
    <main className="md:mx-auto">
      {/* Hero Banner Section */}
      <header
        role="img"
        aria-label="FocusZen 正念冥想产品 - 移动端 / FocusZen Mindfulness Product - Mobile"
        className="relative mt-24 flex min-h-[500px] items-end justify-center bg-cover bg-top md:min-h-[600px]"
        style={{
          backgroundImage: `url(${imageUrls.heroBannerMobile})`,
        }}
      >
        <div className="flex h-full flex-col items-center px-4 pb-16 text-center !text-white md:px-8">
          {/* 毛玻璃背景容器 */}
          <div className="rounded-2xl px-6 py-8 backdrop-blur-sm md:px-12 md:py-12">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-fluid-3xl mb-1 font-semibold md:text-[4.5vw]"
            >
              {t('hero_title')}
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-fluid-4xl mb-2 font-semibold md:text-[5vw]"
            >
              {t('hero_subtitle')}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mx-auto my-4 h-[1px] w-[60px] bg-white md:w-[80px]"
            />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-fluid-lg mb-4 md:text-[2.25vw]"
            >
              {t('hero_slogan_1')}
              ,
              {t('hero_slogan_2')}
            </motion.p>
          </div>
        </div>
      </header>

      {/* Device Features Section */}
      <section className="py-12 md:py-16">
        <div className="px-4 md:px-8">
          <Image
            src={imageUrls.deviceMain}
            alt="FocusZen 专注力训练正念设备 - 产品主图展示 / FocusZen Focus Training Mindfulness Device - Main Product Display"
            width={800}
            height={600}
            className="mx-auto mb-8 w-[80vw] md:mx-auto md:mb-12 md:w-[400px]"
          />

          <div className="flex flex-col items-center space-y-8 md:space-y-12">
            {deviceFeatures.map((feature, index) => (
              <motion.div
                key={feature.titleKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex w-full items-center justify-center space-x-4 md:space-x-6 md:pl-24"
              >
                <Image
                  src={feature.icon}
                  alt={`${t(feature.titleKey)} - FocusZen 功能特性图标 / ${t(feature.titleKey)} - FocusZen Feature Icon`}
                  width={58}
                  height={58}
                  className="flex-shrink-0 md:h-[82px] md:w-[82px]"
                />
                <div className="w-[45%] md:w-[50%]">
                  <h3 className="text-fluid-base mb-2 font-semibold md:!text-2xl">
                    {t(feature.titleKey)}
                  </h3>
                  <p className="text-fluid-base text-gray-700 md:!text-base">
                    {t(feature.desc1Key)}
                  </p>
                  <p className="text-fluid-base text-gray-700 md:!text-base">
                    {t(feature.desc2Key)}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Video Neurofeedback Section */}
      <section className="py-12 md:py-16">
        <div className="text-center">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-fluid-lg mb-1 font-normal md:!text-2xl"
          >
            {t('neuromindfulness_title')}
          </motion.p>
          <motion.h2
            id="neurofeedback-title-mobile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fluid-3xl mb-4 font-medium md:!text-3xl"
          >
            {t('neurofeedback_title')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-fluid-base mb-2 px-10 md:px-16 md:!text-base"
          >
            {t('neurofeedback_desc_1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-fluid-base mb-8 md:!text-base"
          >
            {t('neurofeedback_desc_2')}
          </motion.p>

          {/* Video */}
          <div className="relative mb-8 w-full md:mb-12">
            <video
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              poster={imageUrls.videoPoster}
              src={imageUrls.videoSrcMobile}
              className="w-full"
              aria-label="FocusZen 神经反馈训练演示视频 / FocusZen Neurofeedback Training Demo Video"
            />

            {/* Mindfulness Scenes Overlay */}
            <div className="absolute top-0 left-0 flex h-full w-full flex-col justify-around space-y-4 px-10 py-6 md:px-16 md:py-8">
              {mindfulnessScenes.map((scene, index) => (
                <motion.div
                  key={scene.nameKey}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative w-[14vw]"
                >
                  <Image
                    src={scene.image}
                    alt={`${t(scene.nameKey)} - FocusZen 正念场景示意图 / ${t(scene.nameKey)} - FocusZen Mindfulness Scene Illustration`}
                    width={58}
                    height={58}
                    className="rounded md:h-[110px] md:w-[110px]"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center !text-white">
                    <Image
                      src={scene.icon}
                      alt={`${t(scene.nameKey)} 场景图标 / ${t(scene.nameKey)} Scene Icon`}
                      width={12}
                      height={12}
                      className="mb-1 md:h-6 md:w-6"
                      role="presentation"
                    />
                    <span className="scale-75 transform text-fluid-sm md:scale-100 md:!text-base">
                      {t(scene.nameKey)}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Multi-Dimensional Report Section */}
      <section className="pb-12 md:pb-16">
        <div className="px-4 md:px-8">
          <div className="mb-8 text-center md:mb-12">
            <motion.h2
              id="report-title-mobile"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-fluid-3xl relative mb-8 inline-block pb-6 font-medium after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-[40px] after:-translate-x-1/2 after:bg-gray-900 after:content-[''] md:text-[3.75vw] md:after:w-[60px]"
            >
              {t('report_title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-fluid-base mx-auto mb-2 max-w-[80%] md:text-[2vw]"
            >
              {t('report_desc_1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-fluid-base mx-auto max-w-[80%] md:text-[2vw]"
            >
              {t('report_desc_2')}
            </motion.p>
          </div>

          <div className="relative h-[348px] md:mx-auto md:h-[450px] md:max-w-[72%]">
            <Image
              src={imageUrls.report1}
              alt="FocusZen 多维报告界面 1 - 专注力训练数据分析报告 / FocusZen Multi-Dimensional Report Interface 1 - Focus Training Data Analysis Report"
              width={180}
              height={300}
              className="absolute top-0 left-10 z-10 md:left-24 md:h-[370px] md:w-[220px]"
            />
            <Image
              src={imageUrls.report2}
              alt="FocusZen 多维报告界面 2 - 训练效果可视化图表 / FocusZen Multi-Dimensional Report Interface 2 - Training Effect Visualization Chart"
              width={180}
              height={300}
              className="absolute right-10 bottom-0 md:right-24 md:h-[370px] md:w-[220px]"
            />
          </div>
        </div>
      </section>

      {/* Premium Content Section */}
      <section className="bg-[#edf1f2] py-12 md:py-16">
        <div className="md:px-8">
          <div className="mb-8 text-center md:mb-12">
            <motion.h2
              id="content-title-mobile"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-fluid-3xl relative mb-8 inline-block pb-6 font-medium after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-[40px] after:-translate-x-1/2 after:bg-gray-900 after:content-[''] md:text-[3.75vw] md:after:w-[60px]"
            >
              {t('content_title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-fluid-base mx-auto mb-2 max-w-[80%] md:text-[2vw]"
            >
              {t('content_desc_1')}
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-fluid-base md:text-[2vw]"
            >
              {t('content_desc_2')}
            </motion.p>
          </div>

          <div className="relative h-[348px] md:mx-auto md:h-[450px] md:max-w-[72%]">
            <Image
              src={imageUrls.content1}
              alt="FocusZen 优质内容界面 1 - 正念冥想课程内容展示 / FocusZen Premium Content Interface 1 - Mindfulness Meditation Course Content Display"
              width={180}
              height={300}
              className="absolute top-0 left-16 z-10 md:left-24 md:h-[370px] md:w-[220px]"
            />
            <Image
              src={imageUrls.content2}
              alt="FocusZen 优质内容界面 2 - 训练课程内容详情 / FocusZen Premium Content Interface 2 - Training Course Content Details"
              width={180}
              height={300}
              className="absolute right-16 bottom-0 md:right-24 md:h-[370px] md:w-[220px]"
            />
          </div>
        </div>
      </section>

      {/* Group Mindfulness Mode Section */}
      <section className="py-12 md:py-16">
        <div className="relative">
          <div className="mb-8 text-center md:mb-12">
            <motion.h2
              id="group-mode-title-mobile"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-fluid-3xl relative mb-8 inline-block pb-6 font-semibold after:absolute after:bottom-0 after:left-1/2 after:h-[1px] after:w-[40px] after:-translate-x-1/2 after:bg-gray-900 after:content-[''] md:text-[3.75vw] md:after:w-[60px]"
            >
              {t('group_mode_title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-fluid-base mx-auto max-w-[80%] px-8 md:px-16 md:text-[2vw]"
            >
              {t('group_mode_desc_1')}
              {t('group_mode_desc_2')}
            </motion.p>
          </div>

          <div
            className="relative h-[290px] bg-cover bg-center md:mx-auto md:h-[380px]"
            style={{ backgroundImage: `url(${imageUrls.groupBg})` }}
          >
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <Image
                src={imageUrls.groupMain}
                alt="FocusZen 团体正念模式主图 - 多人协同训练场景 / FocusZen Group Mindfulness Mode Main Image - Multi-Person Collaborative Training Scene"
                width={212}
                height={230}
                className="md:h-[300px] md:w-[280px]"
              />
            </div>
            <Image
              src={imageUrls.groupScreen}
              alt="FocusZen 团体正念模式界面屏幕 - 训练数据实时显示 / FocusZen Group Mindfulness Mode Screen - Real-time Training Data Display"
              width={125}
              height={234}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 md:h-[310px] md:w-[165px]"
            />
            <Image
              src={imageUrls.groupAvatar1}
              alt="FocusZen 团体正念模式用户头像 1 / FocusZen Group Mindfulness Mode User Avatar 1"
              width={17}
              height={17}
              className="absolute top-20 right-24 md:top-24 md:right-32 md:h-[60px] md:w-[60px]"
              role="presentation"
            />
            <Image
              src={imageUrls.groupAvatar2}
              alt="FocusZen 团体正念模式用户头像 2 / FocusZen Group Mindfulness Mode User Avatar 2"
              width={30}
              height={30}
              className="absolute right-24 bottom-24 md:right-32 md:bottom-32 md:h-[70px] md:w-[70px]"
              role="presentation"
            />
            <Image
              src={imageUrls.groupAvatar3}
              alt="FocusZen 团体正念模式用户头像 3 / FocusZen Group Mindfulness Mode User Avatar 3"
              width={24}
              height={24}
              className="absolute bottom-20 left-20 md:bottom-24 md:left-28 md:h-[80px] md:w-[80px]"
              role="presentation"
            />
            <Image
              src={imageUrls.groupAvatar4}
              alt="FocusZen 团体正念模式用户头像 4 / FocusZen Group Mindfulness Mode User Avatar 4"
              width={37}
              height={37}
              className="absolute top-22 left-16 md:top-28 md:left-24 md:h-[90px] md:w-[70px]"
              role="presentation"
            />
          </div>
        </div>
      </section>

      {/* Community Practice Section */}
      <section className="py-12 md:py-16">
        <div className="px-4 md:px-8">
          <div className="mb-8 text-center md:mb-12">
            <motion.h2
              id="community-title-mobile"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-fluid-3xl mx-auto mb-8 max-w-[80%] font-semibold md:text-[3.75vw]"
            >
              {t('community_title')}
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-fluid-base mx-auto max-w-[80%] md:text-[2vw]"
            >
              {t('community_desc_1')}
              {t('community_desc_2')}
            </motion.p>
          </div>

          <div className="relative h-[300px] md:mx-auto md:h-[400px] md:max-w-[85%]">
            <Image
              src={imageUrls.community1}
              alt="FocusZen 社区练习场景 1 - 正念训练社区活动展示 / FocusZen Community Practice Scene 1 - Mindfulness Training Community Activity Display"
              width={131}
              height={237}
              className="absolute top-8 left-12 md:top-12 md:left-32 md:h-[315px] md:w-[175px]"
            />
            <Image
              src={imageUrls.community2}
              alt="FocusZen 社区练习场景 2 - 团体正念训练活动 / FocusZen Community Practice Scene 2 - Group Mindfulness Training Activity"
              width={131}
              height={237}
              className="absolute right-12 bottom-8 md:right-32 md:bottom-16 md:h-[315px] md:w-[175px]"
            />
            <Image
              src={imageUrls.community3}
              alt="FocusZen 社区练习场景 3 - 正念冥想社区互动 / FocusZen Community Practice Scene 3 - Mindfulness Meditation Community Interaction"
              width={131}
              height={237}
              className="absolute top-24 left-1/2 z-20 -translate-x-1/2 md:top-24 md:h-[315px] md:w-[175px]"
            />
            <Image
              src={imageUrls.community4}
              alt="FocusZen 社区练习装饰元素 1 / FocusZen Community Practice Decorative Element 1"
              width={44}
              height={58}
              className="absolute top-24 right-40 z-30 md:top-28 md:right-76 md:h-[77px] md:w-[58px]"
              role="presentation"
            />
            <Image
              src={imageUrls.community5}
              alt="FocusZen 社区练习装饰元素 2 / FocusZen Community Practice Decorative Element 2"
              width={49}
              height={66}
              className="absolute bottom-20 left-36 z-30 md:bottom-28 md:left-56 md:h-[88px] md:w-[65px]"
              role="presentation"
            />
          </div>
        </div>
      </section>

      {/* Business Solution Section */}
      <section className="relative bg-[#1c1d20] py-12 md:py-16">
        <Image
          src={imageUrls.businessBg}
          alt="FocusZen 商业解决方案背景图 / FocusZen Business Solution Background"
          width={800}
          height={600}
          className="w-full"
          role="presentation"
        />
        <div className="absolute inset-0 flex w-full items-center justify-end px-8 md:px-32">
          <div className="max-w-[180px] text-right !text-white md:max-w-[360px]">
            <motion.h2
              id="business-solution-title-mobile"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-fluid-2xl mb-2 font-semibold md:!text-3xl"
            >
              {t('business_solution_title')}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-fluid-sm mb-2 flex items-center justify-end space-x-2 md:!text-base"
            >
              <span className="relative pr-4 after:absolute after:top-1/2 after:right-0 after:h-4 after:w-[3px] after:-translate-y-1/2 after:bg-white after:content-[''] md:after:h-5 md:after:w-[4px]">
                {t('business_institution')}
              </span>
              <span>{t('business_institution_subtitle')}</span>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-fluid-sm mb-6 text-right text-[#8F9297] md:!text-base"
            >
              {t('business_desc')}
            </motion.p>

            <div className="-ml-4 flex justify-between gap-2 md:gap-3">
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
                    width={24}
                    height={24}
                    className="mb-1 md:h-[32px] md:w-[32px]"
                  />
                  <span className="text-[10px] font-bold md:text-[1.3vw]">
                    {t(item.nameKey)}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Training Data Section */}
      <section className="bg-[#edf1f2] py-12 text-center">
        <motion.h2
          id="training-title-mobile"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-fluid-3xl mx-auto mb-4 max-w-[90%] px-8 font-semibold md:px-16 md:text-[3.75vw]"
        >
          {t('training_title')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-fluid-base mx-auto mb-2 max-w-[80%] px-4 md:px-16 md:text-[2vw]"
        >
          {t('training_desc_1')}
        </motion.p>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-fluid-base mx-auto mb-6 max-w-[80%] px-4 md:px-16 md:text-[2vw]"
        >
          {t('training_desc_2')}
        </motion.p>

        <div className="relative px-4">
          <Image
            src={imageUrls.training1}
            alt="FocusZen 训练数据统计图 - 专注力训练效果数据分析 / FocusZen Training Data Statistics - Focus Training Effect Data Analysis"
            width={283}
            height={200}
            className="mx-auto"
          />
          <Image
            src={imageUrls.training2}
            alt="FocusZen 训练数据补充图表 / FocusZen Training Data Additional Chart"
            width={67}
            height={122}
            className="absolute right-7 bottom-0 md:right-72 md:bottom-0"
            role="presentation"
          />
        </div>
      </section>

      {/* Meditation Corner Section */}
      <section className="py-12">
        <div className="px-4 text-center">
          <motion.h2
            id="meditation-corner-title-mobile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-fluid-3xl mx-auto mb-8 max-w-[90%] font-semibold md:text-[3.75vw]"
          >
            <span className="relative pr-3 after:absolute after:top-1/2 after:right-0 after:h-6 after:w-[2px] after:-translate-y-1/2 after:bg-gray-900 after:content-[''] md:after:h-8 md:after:w-[3px]">
              {t('meditation_corner')}
            </span>
            <span className="ml-3">{t('meditation_corner_subtitle')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fluid-base mb-8 px-8 text-gray-600 md:px-16 md:text-[2vw]"
          >
            {t('meditation_corner_desc_1')}
            {t('meditation_corner_desc_2')}
          </motion.p>

          <div className="flex justify-center space-x-2">
            {meditationCornerImages.map((img, index) => (
              <motion.div
                key={img.url}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Image
                  src={img.url}
                  alt={`FocusZen 冥想角落场景 ${index + 1} - 正念冥想环境展示 / FocusZen Meditation Corner Scene ${index + 1} - Mindfulness Meditation Environment Display`}
                  width={800}
                  height={200}
                  className="h-full w-full rounded object-cover transition-transform"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Mindfulness Salon Section */}
      <section className="py-12 md:py-16">
        <div className="px-4 text-center md:px-8">
          <motion.h2
            id="salon-title-mobile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-fluid-3xl mx-auto mb-4 max-w-[90%] font-semibold md:text-[3.75vw]"
          >
            <span className="relative pr-3 after:absolute after:top-1/2 after:right-0 after:h-6 after:w-[2px] after:-translate-y-1/2 after:bg-gray-900 after:content-[''] md:after:h-8 md:after:w-[3px]">
              {t('salon_title')}
            </span>
            <span className="ml-3">{t('salon_subtitle')}</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-fluid-base mx-auto mb-2 max-w-[80%] md:text-[2vw]"
          >
            {t('salon_desc_1')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-fluid-base mx-auto mb-2 max-w-[80%] md:text-[2vw]"
          >
            {t('salon_desc_2')}
          </motion.p>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-fluid-base mx-auto mb-8 max-w-[80%] md:text-[2vw]"
          >
            {t('salon_desc_3')}
          </motion.p>

          <div className="grid grid-cols-3 gap-0 md:mx-auto md:max-w-[85%]">
            {salonImages.map((img, index) => (
              <motion.div
                key={img.url}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.03 }}
                className="relative"
              >
                <Image
                  src={img.url}
                  alt={img.labelKey
                    ? `FocusZen AI 正念沙龙场景 ${index + 1} - ${t(img.labelKey)} / FocusZen AI Mindfulness Salon Scene ${index + 1} - ${t(img.labelKey)}`
                    : `FocusZen AI 正念沙龙场景 ${index + 1} - 正念训练课程展示 / FocusZen AI Mindfulness Salon Scene ${index + 1} - Mindfulness Training Course Display`}
                  width={200}
                  height={150}
                  className="w-full"
                />
                {img.labelKey && (
                  <>
                    {/* 渐变模糊效果层 - 使用 mask 实现渐变模糊 */}
                    <div className="absolute right-0 bottom-0 left-0 h-16 bg-white/10 [mask-image:linear-gradient(to_top,black_60%,transparent_100%)] backdrop-blur-sm md:h-20" />
                    {/* 文字标签层 */}
                    <div className="absolute right-0 bottom-0 left-0 z-10 flex h-12 items-center justify-center leading-[1.2] md:h-16">
                      <span className="text-fluid-sm mx-auto block max-w-[80%] text-center font-semibold !text-white md:text-[2vw]">
                        {t(img.labelKey)}
                      </span>
                    </div>
                  </>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="pb-8 md:pb-12">
        <div className="px-4 text-center md:px-8">
          <motion.h2
            id="partners-title-mobile"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-fluid-3xl mx-auto mb-10 max-w-[90%] font-semibold md:!text-3xl"
          >
            {t('partners_title')}
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto max-w-[90%] md:mx-auto md:max-w-[85%]"
          >
            <Image
              src={imageUrls.partners}
              alt="FocusZen 合作伙伴展示 - 合作机构与品牌标识 / FocusZen Partners Display - Partner Institutions and Brand Logos"
              width={375}
              height={300}
              className="w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Fixed Bottom Purchase Bar */}
      {product && product.price && (
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: isScrolling || isAtBottom ? 100 : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed right-0 bottom-0 left-0 z-50 border-t border-gray-200 bg-white px-4 py-3 shadow-lg md:px-8"
        >
          <div className="flex items-center justify-between">
            <div className="ml-4 flex items-baseline">
              <span className="text-fluid-3xl font-medium text-gray-900 md:text-[3.75vw]">
                ¥
                {product.price / 100}
              </span>
              {product.oldPrice && (
                <span className="text-fluid-xl ml-1 text-gray-600 line-through md:text-[2.5vw]">
                  ¥
                  {product.oldPrice / 100}
                </span>
              )}
            </div>
            <div className="w-[120px]">
              <PurchaseButton product={product} isMobile />
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
