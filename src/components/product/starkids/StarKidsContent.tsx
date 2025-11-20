'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';

import AfterSales from '@/components/common/AfterSales';
import { findProductByIdentifier } from '@/lib/api';

import { imgBase, PRIMARY_COLOR, productCode, systemFeatures, trainingModules } from './data';
import PurchaseButton from './PurchaseButton';

export default function StarKidsContent() {
  const t = useTranslations('StarKids');
  const [product, setProduct] = useState<any>(null);

  // Fetch product data
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
    <main className="w-full overflow-hidden" style={{ color: '#333' }}>
      {/* Hero Banner Section */}
      <header className="relative mt-[5vw] flex justify-end">
        <picture className="relative">
          <img
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/XnquQobOARSTzZtY.webp"
            alt="StarKids 专注力训练系统产品展示 - 学生课堂训练场景 / StarKids attention training system - Student classroom training scene"
            className="w-full translate-x-[10vw]"
          />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent" />
        </picture>
        <div className="absolute top-0 bottom-0 left-0 flex w-full flex-col items-start justify-start pt-[5vw] pb-[6vw] pl-[8vw]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/wywzwe1R9ekMiMNs.webp"
              alt="StarKids 专注力训练系统 Logo / StarKids Attention Training System Logo"
              width={134}
              height={134}
              className="mb-[1vw] h-auto w-[10vw]"
            />
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-fluid-5xl mt-[0.5vw] leading-[1.4] font-normal"
          >
            {t('hero_title_1')}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-fluid-5xl mt-[0.5vw] leading-[1.4] font-normal"
          >
            {t('hero_title_2')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="text-fluid-4xl mt-[2vw]"
          >
            {t('hero_description')}
          </motion.p>
          {product && <PurchaseButton product={product} />}
        </div>
      </header>

      {/* System Overview Section */}
      <section className="mx-auto w-[80vw] max-w-[1600px]" aria-labelledby="system-overview-title">
        <div className="mt-[4.5vw] text-center">
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/mGWZ1YCsNC1Sa1r2.webp"
            alt="StarKids 智能训练系统图标 / StarKids intelligent training system icon"
            width={200}
            height={200}
            className="mx-auto h-auto w-[10.4vw]"
          />
          <h2
            id="system-overview-title"
            className="text-fluid-5xl mt-[2.6vw] font-medium"
            style={{ color: PRIMARY_COLOR }}
          >
            {t('system_title')}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="mt-[4.5vw] flex justify-center gap-[1vw]">
          {/* Left Features */}
          <div className="flex w-[40vw] flex-col justify-around gap-[2vw]">
            {systemFeatures.slice(0, 2).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h4
                  className="text-fluid-4xl font-medium"
                  style={{ color: PRIMARY_COLOR }}
                >
                  {t(feature.title)}
                </h4>
                <p
                  className="text-fluid-3xl mt-[0.5vw] h-[8vw]"
                  dangerouslySetInnerHTML={{
                    __html: t(feature.desc).replace(/\n/g, '<br/>'),
                  }}
                />
              </motion.div>
            ))}
          </div>

          {/* Center Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-[1vw]"
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/KbaHqVWNlEcPSrnj.webp"
              alt="StarKids 专注力训练头戴设备 - 脑电波实时监测装置 / StarKids attention training headset - Real-time EEG monitoring device"
              width={642}
              height={642}
              className="h-auto w-[40vw]"
            />
          </motion.div>

          {/* Right Features */}
          <div className="flex w-[40vw] flex-col justify-around gap-[2vw]">
            {systemFeatures.slice(2, 4).map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <h4
                  className="text-fluid-4xl font-medium"
                  style={{ color: PRIMARY_COLOR }}
                >
                  {t(feature.title)}
                </h4>
                <p
                  className="text-fluid-3xl mt-[0.5vw] h-[8vw]"
                  dangerouslySetInnerHTML={{
                    __html: t(feature.desc).replace(/\n/g, '<br/>'),
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Training Modules Section */}
      <section className="mt-[6.8vw]" aria-labelledby="training-modules-title">
        {/* Statistics Header */}
        <h2 id="training-modules-title" className="sr-only">训练模块统计 / Training Modules Statistics</h2>
        <div className="flex justify-around px-[2vw]">
          {[
            {
              number: t('stats_modules'),
              unit: t('stats_modules_unit'),
              label: t('stats_modules_label'),
            },
            {
              number: t('stats_goals'),
              unit: t('stats_goals_unit'),
              label: t('stats_goals_label'),
            },
            {
              number: t('stats_courses'),
              unit: t('stats_courses_unit'),
              label: t('stats_courses_label'),
            },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex w-[20vw] flex-col items-center justify-center text-center"
            >
              <div className="flex items-center">
                <span
                  className="text-fluid-7xl text-center leading-[1] font-medium"
                  style={{ color: PRIMARY_COLOR }}
                >
                  {stat.number}
                </span>
                <span
                  className="text-fluid-4xl ml-[0.5vw] text-center font-normal"
                  style={{ color: PRIMARY_COLOR }}
                >
                  {stat.unit}
                </span>
              </div>
              <p className="text-fluid-4xl mt-[0.7vw] leading-[1]">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Module Cards Grid */}
        <div className="mt-[1vw] grid grid-cols-3 justify-items-center gap-[2vw] px-[5vw]">
          {trainingModules.map((module, index) => {
            const isIndependent = !module.name;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`relative mt-[2.5vw] flex w-[26.8vw] flex-col items-center pb-[1.5vw] ${
                  !isIndependent ? 'module-card' : ''
                }`}
              >
                {!isIndependent && (
                  <div
                    className="absolute top-0 left-0 -z-10 h-[15.3vw] w-full rounded-[1.25vw]"
                    style={{ background: '#DEEFEE', bottom: 0 }}
                  />
                )}

                {module.name && (
                  <div
                    className="flex h-[2.6vw] w-[24.5vw] items-center justify-center rounded-[1.3vw] px-[0.15vw]"
                    style={{ background: PRIMARY_COLOR }}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[1.3vw] border border-dashed border-white">
                      <span className="text-fluid-2xl font-medium !text-white">
                        {t(module.name)}
                      </span>
                    </div>
                  </div>
                )}

                <div className={`mt-[1.4vw] flex flex-col items-center justify-center text-center ${isIndependent ? 'relative top-[3.1vw]' : ''}`}>
                  <Image
                    src={module.src}
                    alt={module.name ? `${t(module.name)} - 训练模块示意图 / Training module illustration` : 'StarKids 训练模块 / StarKids training module'}
                    width={400}
                    height={400}
                    className={`h-auto ${isIndependent ? 'w-[18.2vw]' : 'w-[20.8vw]'}`}
                  />
                  {module.desc && (
                    <p
                      className="text-fluid-2xl mt-[1.25vw] text-center"
                      dangerouslySetInnerHTML={{
                        __html: t(module.desc),
                      }}
                    />
                  )}
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Interactive Scene Section */}
      <section
        className="mx-[8.3vw] mt-[9.4vw] text-center"
        style={{ color: PRIMARY_COLOR }}
        aria-labelledby="interactive-scene-title"
      >
        <h2 id="interactive-scene-title" className="text-fluid-5xl font-medium">{t('interactive_title')}</h2>
        <p className="text-fluid-4xl">{t('interactive_subtitle')}</p>

        <figure className="relative mt-[4.5vw]">
          <video
            autoPlay
            muted
            playsInline
            loop
            className="relative z-[2] mx-auto w-[50vw] rounded-[1.25vw]"
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/OaqBxdIPlQRLrAoC.mp4"
            aria-label="StarKids 互动训练场景演示视频 / StarKids interactive training scene demo video"
          />
          <div className="relative -mt-[10.4vw]">
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/tHKNOlTbvxEspCrG.webp"
              alt="StarKids 互动训练场景背景图 / StarKids interactive scene background"
              role="presentation"
              width={1920}
              height={400}
              className="h-auto w-full"
            />
          </div>
        </figure>
      </section>

      {/* Training Mode Section */}
      <section
        className="mt-[7.8vw] bg-[#F4F4F4] pt-[5vw] text-center"
        style={{ color: PRIMARY_COLOR }}
        aria-labelledby="training-mode-title"
      >
        <h2 id="training-mode-title" className="text-fluid-5xl font-medium">{t('training_mode_title')}</h2>
        <p className="text-fluid-4xl">{t('training_mode_subtitle')}</p>

        <div className="mt-[6.25vw] flex items-center justify-center gap-[6.7vw] px-[5vw] pb-[4.7vw]">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/VvRspiJCtbEnhTwl.webp"
              alt="StarKids 训练模式界面展示 / StarKids training mode interface display"
              width={440}
              height={440}
              className="h-auto w-[22.9vw]"
            />
          </motion.div>

          <motion.video
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            controls
            className="mt-[3.6vw] w-[50vw] cursor-pointer rounded-[1.25vw]"
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/video/K9hDdccdM7rYrPwAgzska.mp4"
            aria-label="StarKids 训练模式演示视频 / StarKids training mode demo video"
          />
        </div>
      </section>

      {/* Training Recommend Section */}
      <section className="relative bg-[#F4F4F4] pb-[4.2vw]" aria-labelledby="training-recommend-title">
        <h2 id="training-recommend-title" className="sr-only">个性化训练推荐 / Personalized Training Recommendations</h2>
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/CzwFXWrxOTDvYSNJ.webp"
          alt="StarKids 训练推荐背景 / StarKids training recommendation background"
          role="presentation"
          width={1920}
          height={800}
          className="h-auto w-full"
        />

        <div className="relative mx-auto -mt-[14.6vw] flex w-[79.7vw] gap-[2.4vw]">
          {/* Left Assessment */}
          <div className="flex w-[39.1vw] flex-col">
            {/* First Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src={`${imgBase}nchNMCfyslDzZoXV.webp`}
                alt="StarKids 能力评估分析界面 / StarKids ability assessment analysis interface"
                width={750}
                height={400}
                className="h-auto w-full"
              />
            </motion.div>

            {/* Description Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-[5.2vw] mb-[2vw] flex justify-center"
            >
              <div className="flex w-[24vw] items-center justify-center rounded-[1.25vw] bg-white px-[1.25vw] py-[1.25vw] shadow-sm">
                <h3 className="text-fluid-2xl font-medium">{t('recommend_title')}</h3>
              </div>
            </motion.div>

            {/* Training List Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="mr-[1.9vw] self-end"
            >
              <Image
                src={`${imgBase}yCdOIDXFmoEiTMtP.webp`}
                alt="StarKids 个性化训练推荐列表 / StarKids personalized training recommendation list"
                width={684}
                height={400}
                className="h-auto w-[35.6vw]"
              />
            </motion.div>

            {/* Assessment Title */}
            <div className="mt-[8.6vw] flex items-center justify-center">
              <div
                className="flex h-[8vw] w-[40vw] items-center justify-center rounded-[2vw] px-[4.2vw] text-center !text-white"
                style={{ background: '#F06F67', width: '40vw' }}
              >
                <h5 className="text-fluid-3xl font-medium">
                  {t('recommend_assessment_1_title')}
                </h5>
              </div>
              <div className="ml-[6vw] flex w-[10vw] items-center justify-start gap-[0.5vw]">
                <i
                  className="h-[0.83vw] w-[0.83vw] rounded-full"
                  style={{ background: '#F06F67' }}
                />
                <i
                  className="h-[0.52vw] w-[0.52vw] rounded-full"
                  style={{ background: '#F06F67' }}
                />
                <i
                  className="h-[0.21vw] w-[0.21vw] rounded-full"
                  style={{ background: '#F06F67' }}
                />
              </div>
            </div>

            {/* Description */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-[1.8vw] flex justify-center self-start text-center"
            >
              <div className="w-[33vw] rounded-[1.25vw] bg-white px-[1.25vw] py-[1.25vw] shadow-sm">
                <p className="text-fluid-2xl">
                  {t('recommend_assessment_1_desc')}
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right Assessment */}
          <div className="mt-[8.3vw] ml-[2.4vw] flex flex-col">
            {/* Title */}
            <div className="flex items-center">
              <div className="mr-[5vw] flex flex-row-reverse items-center gap-[0.7vw]">
                <i className="h-[0.83vw] w-[0.83vw] rounded-full bg-white" />
                <i className="h-[0.52vw] w-[0.52vw] rounded-full bg-white" />
                <i className="h-[0.21vw] w-[0.21vw] rounded-full bg-white" />
              </div>
              <div
                className="flex items-center justify-center rounded-[2vw] px-[1.6vw] py-[1vw] text-center !text-white"
                style={{ background: '#F06F67' }}
              >
                <h5 className="text-fluid-3xl font-medium">
                  {t('recommend_assessment_2_title')}
                </h5>
              </div>
            </div>

            {/* Description with icon */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="relative mt-[5.5vw] ml-[-1vw] px-[1vw]"
            >
              <Image
                src={`${imgBase}xRVtLGqrlwFhPbkX.webp`}
                alt="StarKids 能力评估图标 / StarKids ability assessment icon"
                width={82}
                height={82}
                className="absolute top-[-2.1vw] left-[-0.5vw] h-auto w-[4.3vw]"
              />
              <div className="rounded-[1.25vw] bg-white px-[1.25vw] py-[1.25vw] shadow-sm">
                <p className="text-fluid-2xl font-medium">
                  {t('recommend_assessment_2_desc')}
                </p>
              </div>
            </motion.div>

            {/* Middle Image with Icon */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative mt-[1.25vw]"
            >
              <Image
                src={`${imgBase}xeyDUErpaJwiTOcK.webp`}
                alt="StarKids 能力评估可视化图表 - 多维度数据分析展示 / StarKids ability assessment visualization - Multi-dimensional data analysis display"
                width={700}
                height={400}
                className="h-auto w-full"
              />
              <Image
                src={`${imgBase}zDcmYNeoRXPqklFI.webp`}
                alt="StarKids 能力评估图标 2 / StarKids ability assessment icon 2"
                width={84}
                height={84}
                className="absolute -bottom-[3.65vw] -left-[3.75vw] h-auto w-[4.4vw]"
              />
            </motion.div>

            {/* Bottom Image */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-[12.5vw] -ml-[6.25vw]"
            >
              <Image
                src={`${imgBase}lTyVdaxzfswDWBhr.webp`}
                alt="StarKids 能力评估结果报告 - 训练效果分析图表 / StarKids ability assessment result report - Training effect analysis chart"
                width={798}
                height={600}
                className="h-auto w-[41.6vw]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Data Tracking Section */}
      <section className="mt-[4.7vw] text-center" style={{ color: PRIMARY_COLOR }} aria-labelledby="data-tracking-title">
        <h2 id="data-tracking-title" className="text-fluid-5xl font-medium">{t('track_title')}</h2>
        <p className="text-fluid-4xl">{t('track_subtitle')}</p>

        {/* Images Grid */}
        <div className="mt-[4.3vw] flex justify-center gap-[2vw]">
          <div className="flex flex-col gap-[2vw]">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/zQxSZGdYaDNICPAv.webp"
                alt="StarKids 训练数据追踪界面 - 专注力变化趋势图 / StarKids training data tracking - Attention change trend chart"
                width={770}
                height={400}
                className="h-auto w-[40vw]"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/RhENsbqKMcmaQtvf.webp"
                alt="StarKids 能力发展报告 - 多维度数据分析 / StarKids ability development report - Multi-dimensional data analysis"
                width={770}
                height={400}
                className="h-auto w-[40vw]"
              />
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/FvSgcKadYhxzoOyV.webp"
              alt="StarKids 长期训练效果追踪 - 成长曲线可视化 / StarKids long-term training effect tracking - Growth curve visualization"
              width={630}
              height={800}
              className="h-auto w-[32.8vw]"
            />
          </motion.div>
        </div>

        {/* Quantitative Data */}
        <div className="mx-auto mt-[2.5vw] flex w-[90vw] max-w-[1500px] items-center justify-center gap-[2.8vw]">
          <div className="w-[27vw] text-left" style={{ color: '#333' }}>
            <h3 className="text-fluid-4xl mb-[1.5vw] leading-[1.4]">
              {t('track_data_title')}
            </h3>
            <p className="text-fluid-2xl mb-[1.25vw] leading-[1.4]">
              {t('track_data_desc_1')}
            </p>
            <p className="text-fluid-2xl leading-[1.4]">
              {t('track_data_desc_2')}
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/BrHmkDChpJGbiYIM.webp"
              alt="StarKids 量化数据分析 - 科学训练效果统计 / StarKids quantitative data analysis - Scientific training effect statistics"
              width={872}
              height={600}
              className="h-auto w-[45.4vw]"
            />
          </motion.div>
        </div>
      </section>

      {/* Scientific Intervention Section */}
      <section className="mt-[7.3vw]" aria-labelledby="scientific-intervention-title">
        <h2
          id="scientific-intervention-title"
          className="text-fluid-5xl text-center font-medium"
          style={{ color: PRIMARY_COLOR }}
        >
          {t('intervene_title')}
        </h2>

        <div className="mx-auto mt-[11.7vw] flex w-[85.2vw] gap-[2.6vw] rounded-[1.8vw] bg-[#FAFAFA] py-[5vw] pl-[3.1vw]">
          {/* Left Content */}
          <div className="w-[51.6vw]">
            <p className="text-fluid-3xl relative inline-block">
              {t('intervene_research_tag')}
            </p>
            <p className="text-fluid-3xl relative mt-[1vw] inline-block">
              {t('intervene_effectiveness')}
              <span className="ml-[1vw] pl-[1vw] text-[5.2vw] font-bold">
                {t('intervene_percentage')}
              </span>
              <span className="text-[5.2vw] font-bold">
                {t('intervene_percentage_unit')}
              </span>
              <sup className="absolute top-[2.6vw] right-[0.5vw]">
                {t('intervene_superscript')}
              </sup>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="my-[3.5vw]"
            >
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/qOmRUTiVKrsagSot.webp"
                alt="StarKids 科学干预研究论文 - 专注力训练效果验证报告 / StarKids scientific intervention research paper - Focus training effectiveness validation report"
                width={954}
                height={400}
                className="h-auto w-[49.7vw]"
              />
            </motion.div>

            <p className="text-fluid-2xl px-[3vw] pr-[1.25vw] font-medium">
              {t('intervene_paper')}
            </p>
          </div>

          {/* Right Content */}
          <div className="relative -mt-[13vw] w-[26.3vw]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
            >
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/KwxaFOfRGIgTbuMt.webp"
                alt="StarKids 医院认证证书 - 专业医疗机构认可 / StarKids hospital certification - Professional medical institution recognition"
                width={506}
                height={600}
                className="h-auto w-[26.4vw]"
              />
            </motion.div>

            <p className="text-fluid-2xl mt-[1.8vw] mb-[0.8vw] font-medium">
              {t('intervene_disclaimer')}
            </p>
            <p className="text-fluid-2xl mb-[0.8vw] font-medium">
              {t('intervene_hospital_desc')}
            </p>
            <span className="block text-[0.83vw]">
              {t('intervene_study_details')}
            </span>
          </div>
        </div>
      </section>

      {/* Authentication Section */}
      <div className="mx-auto mt-[4.7vw] w-[78.1vw] text-center">
        <h3 className="text-fluid-5xl font-medium" style={{ color: PRIMARY_COLOR }}>
          {t('auth_title')}
        </h3>
        <p className="text-fluid-4xl" style={{ color: PRIMARY_COLOR }}>
          {t('auth_subtitle')}
        </p>

        <div className="mt-[5.2vw] flex flex-wrap justify-center gap-[2.2vw]">
          {/* 2024 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="w-[27.6vw] rounded-[2.1vw] bg-[#F8FAFA] px-[3.9vw] py-[2.6vw] text-left"
          >
            <h4 className="text-fluid-4xl font-medium">{t('auth_2024')}</h4>
            <p className="text-fluid-2xl mt-[1vw] font-medium text-[#808080]">
              {t('auth_2024_desc')}
            </p>
            <div className="mt-[2.2vw] flex flex-col items-center gap-[0.6vw]">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/dTvPhEKHBxpoqLCc.webp"
                alt="StarKids 2024年获奖证书 1 - 产品认证与资质 / StarKids 2024 Award Certificate 1 - Product certification and qualification"
                width={400}
                height={300}
                className="h-auto w-full"
              />
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/hWfHacAqbVUspKEM.webp"
                alt="StarKids 2024年获奖证书 2 - 产品认证与资质 / StarKids 2024 Award Certificate 2 - Product certification and qualification"
                width={400}
                height={300}
                className="h-auto w-full"
              />
            </div>
          </motion.div>

          {/* 2023 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="w-[43.8vw] rounded-[2.1vw] bg-[#F8FAFA] px-[3.9vw] py-[2.6vw] text-left"
          >
            <h4 className="text-fluid-4xl font-medium">{t('auth_2023')}</h4>
            <div className="mt-[0.5vw] flex items-start gap-[3vw]">
              <div>
                <p className="text-fluid-2xl font-medium text-[#808080]">
                  {t('auth_2023_award1')}
                </p>
                <Image
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/CmUhctZKRTbFDOPg.webp"
                  alt="StarKids 2023年获奖证书 1 - 产品认证与资质 / StarKids 2023 Award Certificate 1 - Product certification and qualification"
                  width={300}
                  height={400}
                  className="mt-[2.2vw] h-auto w-full"
                />
              </div>
              <div>
                <p className="text-fluid-2xl font-medium text-[#808080]">
                  {t('auth_2023_award2')}
                </p>
                <Image
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/TXJdLBpEwSQHAvMP.webp"
                  alt="StarKids 2023年获奖证书 2 - 产品认证与资质 / StarKids 2023 Award Certificate 2 - Product certification and qualification"
                  width={300}
                  height={400}
                  className="mt-[2.2vw] h-auto w-full"
                />
              </div>
            </div>
          </motion.div>

          {/* 2021 */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="w-[27.6vw] rounded-[2.1vw] bg-[#F8FAFA] px-[3.9vw] py-[2.6vw] text-left"
          >
            <h4 className="text-fluid-4xl font-medium">{t('auth_2021')}</h4>
            <p className="text-fluid-2xl mt-[1vw] font-medium text-[#808080]">
              {t('auth_2021_desc')}
            </p>
            <div className="mt-[2.2vw]">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/yaOeohKIbsqfcESC.webp"
                alt="StarKids 2021年获奖证书 - 产品认证与资质 / StarKids 2021 Award Certificate - Product certification and qualification"
                width={400}
                height={300}
                className="h-auto w-full"
              />
            </div>
          </motion.div>

          {/* Patents */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="w-[43.8vw] rounded-[2.1vw] bg-[#F8FAFA] px-[3.9vw] py-[2.6vw] text-left"
          >
            <p className="text-fluid-3xl text-[#333]">
              {t('auth_patents_line1')}
            </p>
            <p className="text-fluid-3xl text-[#333]">
              {t('auth_patents_line2')}
            </p>
            <div className="mt-[2.2vw]">
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/UBwARODtFyLpPivg.webp"
                alt="StarKids 产品专利证书 - 技术创新与知识产权 / StarKids product patents - Technical innovation and intellectual property"
                width={600}
                height={400}
                className="h-auto w-full"
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* After Sales Component */}
      <div className="mt-[5vw]">
        <AfterSales
          is30Days
        />
      </div>
    </main>
  );
}
