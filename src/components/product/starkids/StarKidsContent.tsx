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
    <div className="w-full" style={{ color: '#333' }}>
      {/* Hero Banner Section */}
      <section className="relative mt-[5vw] flex justify-end">
        <picture>
          <img
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/XnquQobOARSTzZtY.webp"
            alt="StarKids Banner"
            className="w-full"
          />
        </picture>
        <div className="absolute top-0 bottom-0 left-0 flex w-full flex-col items-start justify-start pt-[5vw] pb-[6vw] pl-[12.5vw]">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/wywzwe1R9ekMiMNs.webp"
              alt={t('hero_logo_alt')}
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
      </section>

      {/* System Overview Section */}
      <article className="mx-auto w-[80vw] max-w-[1600px]">
        <div className="mt-[4.5vw] text-center">
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/mGWZ1YCsNC1Sa1r2.webp"
            alt={t('system_icon_alt')}
            width={200}
            height={200}
            className="mx-auto h-auto w-[10.4vw]"
          />
          <h2
            className="text-fluid-5xl mt-[2.6vw] font-medium"
            style={{ color: PRIMARY_COLOR }}
          >
            {t('system_title')}
          </h2>
        </div>

        {/* Features Grid */}
        <div className="mt-[4.5vw] flex justify-center gap-[1vw]">
          {/* Left Features */}
          <div className="flex w-[40vw] flex-col justify-around">
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
                  className="text-fluid-3xl mt-[0.5vw]"
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
              alt="StarKids Device"
              width={642}
              height={642}
              className="h-auto w-[40vw]"
            />
          </motion.div>

          {/* Right Features */}
          <div className="flex w-[40vw] flex-col justify-around">
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
                  className="text-fluid-3xl mt-[0.5vw]"
                  dangerouslySetInnerHTML={{
                    __html: t(feature.desc).replace(/\n/g, '<br/>'),
                  }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </article>

      {/* Training Modules Section */}
      <div className="mt-[4.8vw]">
        {/* Statistics Header */}
        <div className="flex justify-center gap-[10vw]">
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
              className="flex flex-col items-center"
            >
              <div className="flex items-center">
                <span
                  className="text-fluid-7xl leading-[1] font-medium"
                  style={{ color: PRIMARY_COLOR }}
                >
                  {stat.number}
                </span>
                <span
                  className="text-fluid-4xl ml-[0.5vw] font-normal"
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
                    className="flex h-[2.6vw] w-[18.5vw] items-center justify-center rounded-[1.3vw] px-[0.15vw]"
                    style={{ background: PRIMARY_COLOR }}
                  >
                    <div className="flex h-full w-full items-center justify-center rounded-[1.3vw] border border-dashed border-white">
                      <span className="text-fluid-2xl font-medium text-white">
                        {t(module.name)}
                      </span>
                    </div>
                  </div>
                )}

                <div className={`mt-[1.4vw] ${isIndependent ? 'relative top-[3.1vw]' : ''}`}>
                  <Image
                    src={module.src}
                    alt={module.name ? t(module.name) : 'Training module'}
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
      </div>

      {/* Interactive Scene Section */}
      <div
        className="mx-[8.3vw] mt-[9.4vw] text-center"
        style={{ color: PRIMARY_COLOR }}
      >
        <h3 className="text-fluid-5xl font-medium">{t('interactive_title')}</h3>
        <p className="text-fluid-4xl">{t('interactive_subtitle')}</p>

        <div className="relative mt-[4.5vw]">
          <video
            autoPlay
            muted
            playsInline
            loop
            className="relative z-[2] mx-auto w-[50vw] rounded-[1.25vw]"
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/OaqBxdIPlQRLrAoC.mp4"
          />
          <div className="relative -mt-[10.4vw]">
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/tHKNOlTbvxEspCrG.webp"
              alt="Interactive scene background"
              width={1920}
              height={400}
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>

      {/* Training Mode Section */}
      <div
        className="mt-[7.8vw] bg-[#F4F4F4] pt-[5vw] text-center"
        style={{ color: PRIMARY_COLOR }}
      >
        <h3 className="text-fluid-5xl font-medium">{t('training_mode_title')}</h3>
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
              alt="Training mode"
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
          />
        </div>
      </div>

      {/* Training Recommend Section */}
      <div className="relative bg-[#F4F4F4] pb-[4.2vw]">
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/CzwFXWrxOTDvYSNJ.webp"
          alt="Recommendation background"
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
                alt="Assessment header"
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
              <div className="flex w-[20vw] items-center justify-center rounded-[1.25vw] bg-white px-[1.25vw] py-[1.25vw] shadow-sm">
                <p className="text-fluid-2xl font-medium">{t('recommend_title')}</p>
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
                alt="Training list"
                width={684}
                height={400}
                className="h-auto w-[35.6vw]"
              />
            </motion.div>

            {/* Assessment Title */}
            <div className="mt-[8.6vw] flex items-center pl-[5.1vw]">
              <div
                className="flex h-[3.9vw] w-[23.3vw] items-center justify-center rounded-[2vw] px-[4.2vw] text-center text-white"
                style={{ background: '#F06F67' }}
              >
                <h5 className="text-fluid-3xl font-medium">
                  {t('recommend_assessment_1_title')}
                </h5>
              </div>
              <div className="ml-[1.7vw] flex items-center gap-[0.7vw]">
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
              className="mt-[1.8vw] self-start pl-[4.4vw]"
            >
              <div className="w-[29vw] rounded-[1.25vw] bg-white px-[1.25vw] py-[1.25vw] shadow-sm">
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
                className="flex items-center justify-center rounded-[2vw] px-[1.6vw] py-[1vw] text-center text-white"
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
              className="relative mt-[5.5vw] -ml-[1vw] px-[1vw]"
            >
              <Image
                src={`${imgBase}xRVtLGqrlwFhPbkX.webp`}
                alt="Assessment icon"
                width={82}
                height={82}
                className="absolute -top-[2.1vw] -left-[0.5vw] h-auto w-[4.3vw]"
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
                alt="Assessment visualization"
                width={700}
                height={400}
                className="h-auto w-full"
              />
              <Image
                src={`${imgBase}zDcmYNeoRXPqklFI.webp`}
                alt="Assessment icon 2"
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
                alt="Assessment result"
                width={798}
                height={600}
                className="h-auto w-[41.6vw]"
              />
            </motion.div>
          </div>
        </div>
      </div>

      {/* Data Tracking Section */}
      <div className="mt-[4.7vw] text-center" style={{ color: PRIMARY_COLOR }}>
        <h3 className="text-fluid-5xl font-medium">{t('track_title')}</h3>
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
                alt="Tracking data 1"
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
                alt="Tracking data 2"
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
              alt="Tracking data 3"
              width={630}
              height={800}
              className="h-auto w-[32.8vw]"
            />
          </motion.div>
        </div>

        {/* Quantitative Data */}
        <div className="mx-auto mt-[2.5vw] flex w-[90vw] max-w-[1500px] items-center justify-center gap-[2.8vw]">
          <div className="w-[27vw] text-left" style={{ color: '#333' }}>
            <h4 className="text-fluid-4xl mb-[1.5vw] leading-[1.4]">
              {t('track_data_title')}
            </h4>
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
              alt="Quantitative data"
              width={872}
              height={600}
              className="h-auto w-[45.4vw]"
            />
          </motion.div>
        </div>
      </div>

      {/* Scientific Intervention Section */}
      <div className="mt-[7.3vw]">
        <h3
          className="text-fluid-5xl text-center font-medium"
          style={{ color: PRIMARY_COLOR }}
        >
          {t('intervene_title')}
        </h3>

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
                alt="Research paper"
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
                alt="Hospital certification"
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
      </div>

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
                alt="2024 Award 1"
                width={400}
                height={300}
                className="h-auto w-full"
              />
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/hWfHacAqbVUspKEM.webp"
                alt="2024 Award 2"
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
                  alt="2023 Award 1"
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
                  alt="2023 Award 2"
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
                alt="2021 Award"
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
                alt="Patents"
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
          text={t('after_sales_text')}
          text2={t('after_sales_note')}
        />
      </div>
    </div>
  );
}
