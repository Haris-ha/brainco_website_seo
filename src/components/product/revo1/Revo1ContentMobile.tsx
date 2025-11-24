'use client';

import type { Swiper as SwiperType } from 'swiper';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRef, useState } from 'react';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { abilityList, industryList, partnerMobile, qualityVideos, versionSpecs } from './data';
import 'swiper/css';

import 'swiper/css/pagination';

const imgPath = 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/';

export default function Revo1ContentMobile() {
  const t = useTranslations('Revo1');
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [qualityVideoStates, setQualityVideoStates] = useState([false, false, false]);
  const qualityVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const [bannerVideoLoaded, setBannerVideoLoaded] = useState(false);
  const bannerVideoRef = useRef<HTMLVideoElement | null>(null);

  const handleSlideChange = (swiper: SwiperType) => {
    setSwiperIndex(swiper.realIndex);
  };

  const handleQualityPlay = (index: number) => {
    const video = qualityVideoRefs.current[index];
    if (!video) {
      return;
    }

    const newStates = [false, false, false];

    // Pause all other videos
    qualityVideoRefs.current.forEach((v, i) => {
      if (v && i !== index) {
        v.pause();
      }
    });

    if (video.paused) {
      video.play();
      newStates[index] = true;
    } else {
      video.pause();
      newStates[index] = false;
    }

    setQualityVideoStates(newStates);
  };

  return (
    <main className="bg-black !text-white">
      {/* Banner Section */}
      <motion.header
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        role="img"
        aria-label="Revo1 智能灵巧手产品横幅 - 移动端 / Revo1 Intelligent Dexterous Hand Banner - Mobile"
      >
        <div className="relative mt-24 aspect-[16/9] w-full">
          <video
            ref={bannerVideoRef}
            autoPlay
            muted
            playsInline
            loop
            src={`${imgPath}pRLDxZVNwzckOPfn.mp4`}
            className="block h-full w-full"
            onLoadedData={() => setBannerVideoLoaded(true)}
            onCanPlay={() => setBannerVideoLoaded(true)}
            aria-label="Revo1 智能灵巧手产品演示视频 - 移动端 / Revo1 Intelligent Dexterous Hand Demo Video - Mobile"
          >
            <track kind="captions" />
          </video>
          {!bannerVideoLoaded && (
            <div className="absolute inset-0 flex items-center justify-center bg-black">
              <motion.div
                className="h-12 w-12 rounded-full border-4 border-white/30 border-t-white"
                animate={{ rotate: 360 }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  ease: 'linear',
                }}
              />
            </div>
          )}
        </div>
      </motion.header>

      {/* Product Info Section */}
      <section className="flex flex-col items-center justify-center bg-[#f5f5f5] py-8 pb-8 text-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <Image
            src={`${imgPath}yOnXsafVGAoJFLYz.webp`}
            alt="Revo1 智能灵巧手产品主图 - 移动端产品展示 / Revo1 Intelligent Dexterous Hand Main Product Image - Mobile Product Display"
            width={264}
            height={264}
          />
          <h1 className="text-fluid-4xl mt-7 font-medium">
            {t('product_name')}
            {' '}
            {t('product_model')}
          </h1>
          <p className="text-fluid-lg mt-2">{t('subtitle')}</p>
          <div className="mt-6 flex gap-6">
            <Link
              href="/contact#contact"
              className="flex h-[38px] w-[112px] items-center justify-center rounded-[20px] bg-[#1a74bf] !text-white"
              aria-label={`${t('contact_us')} - Revo1 智能灵巧手 / ${t('contact_us')} - Revo1 Intelligent Dexterous Hand`}
            >
              {t('contact_us')}
            </Link>
            <a
              href="https://www.brainco-hz.com/docs/revolimb-hand/revo1/parameters.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[38px] w-[112px] items-center justify-center rounded-[20px] border border-black !text-black"
              aria-label={`${t('documentation')} - Revo1 产品文档 / ${t('documentation')} - Revo1 Product Documentation`}
            >
              {t('documentation')}
            </a>
          </div>
        </motion.div>
      </section>

      {/* Industry Section */}
      <section className="bg-[#07111b] py-12 !text-white" aria-labelledby="industry-title-mobile">
        <motion.h2
          id="industry-title-mobile"
          className="text-fluid-3xl text-center font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('industry_title')}
        </motion.h2>
        <ul className="mt-10 pr-5 md:mx-auto md:max-w-[90vw]">
          {industryList.map((item, index) => (
            <motion.li
              key={item.icon}
              className="mb-14 pl-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Image
                src={item.icon}
                alt={`${t(`industry_${index + 1}_title` as any)} - Revo1 行业应用图标 / ${t(`industry_${index + 1}_title` as any)} - Revo1 Industry Application Icon`}
                width={40}
                height={40}
                className="-ml-3 block h-10"
              />
              <h3 className="text-fluid-xl mt-3 font-medium">
                {t(`industry_${index + 1}_title` as any)}
              </h3>
              <p className="text-fluid-base mt-2 text-gray-300">
                {t(`industry_${index + 1}_desc` as any)}
              </p>
              <ul className="mt-8 flex">
                {item.ability.map((subInfo, subIndex) => (
                  <li key={`${index}-${subIndex}`} className="flex-1">
                    <h4 className="text-fluid-sm font-medium text-gray-300">{t(subInfo.title as any)}</h4>
                    <div className="flex items-end leading-none">
                      <span className="text-fluid-3xl relative top-1.5 mr-0.5 font-bold text-gray-300">
                        {subInfo.data}
                      </span>
                      <s className="relative top-1 no-underline">
                        {subInfo.unit === 'ability_unit_seconds' ? t(subInfo.unit as any) : subInfo.unit}
                      </s>
                      {subInfo.extend && (
                        <p className="text-fluid-base relative top-1.5 ml-1 font-medium text-gray-300">
                          {subInfo.extend.startsWith('ability_') ? t(subInfo.extend as any) : subInfo.extend}
                        </p>
                      )}
                      {subInfo.connect && (
                        <b className="text-fluid-3xl relative top-1 ml-0.5 font-bold text-gray-300">
                          {subInfo.connect}
                        </b>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </motion.li>
          ))}
        </ul>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <Image
            src={`${imgPath}UqgpHWZSKbBvImds.webp`}
            alt="Revo1 智能灵巧手产品主图 - 产品外观展示 / Revo1 Intelligent Dexterous Hand Main Product Image - Product Appearance Display"
            width={210}
            height={210}
            className="mx-auto mt-10 block h-52"
          />
          <dl className="mt-10 flex justify-center">
            <div className="mr-18">
              <dt className="text-fluid-sm font-medium text-gray-300">{t('product_weight_label')}</dt>
              <dd className="text-fluid-3xl mt-2 flex items-end leading-none font-bold text-gray-300">
                {t('product_weight_value')}
                {' '}
                <span className="text-fluid-sm relative bottom-1 ml-1 font-normal">
                  {t('product_weight_unit')}
                </span>
              </dd>
            </div>
            <div>
              <dt className="text-fluid-sm font-medium text-gray-300">{t('active_joints_label')}</dt>
              <dd className="text-fluid-3xl mt-2 flex items-end leading-none font-bold text-gray-300">
                {t('active_joints_value')}
                {' '}
                <span className="text-fluid-sm relative bottom-1 ml-1 font-normal">
                  {t('active_joints_unit')}
                </span>
              </dd>
            </div>
          </dl>
        </motion.div>
      </section>

      {/* Ability Showcase Section */}
      <section className="bg-[#07111b] py-14 pb-12 !text-white" aria-labelledby="ability-title-mobile">
        <div className="w-full">
          <div className="px-8 text-center">
            {abilityList.map(
              (item, index) =>
                index === swiperIndex && (
                  <motion.div
                    key={item.img}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h2
                      id="ability-title-mobile"
                      className="text-fluid-3xl font-medium"
                    >
                      {t(`ability_${index + 1}_title` as any)}
                    </h2>
                    <p className="text-fluid-lg mt-3 mb-13 h-10 text-gray-300">
                      {t(`ability_${index + 1}_desc` as any)}
                    </p>
                  </motion.div>
                ),
            )}
          </div>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
            onSlideChange={handleSlideChange}
            className="mb-10"
          >
            {abilityList.map((item, videoIndex) => (
              <SwiperSlide key={item.img}>
                <div className="accuracy_bg">
                  <video
                    autoPlay
                    muted
                    loop
                    playsInline
                    src={item.mobileVideo}
                    className="w-full"
                    aria-label={`${t(`ability_${videoIndex + 1}_title` as any)} - Revo1 功能演示视频 - 移动端 / ${t(`ability_${videoIndex + 1}_title` as any)} - Revo1 Feature Demo Video - Mobile`}
                  >
                    <track kind="captions" />
                  </video>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-pagination-custom mt-4" />
        </div>
      </section>

      {/* Product Version Section */}
      <section className="bg-[#07111b] pt-12 pb-23 !text-white" aria-labelledby="version-title-mobile">
        <motion.h2
          id="version-title-mobile"
          className="text-fluid-3xl mb-6 text-center font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('version_title')}
        </motion.h2>
        <div className="sticky top-28 z-[30] h-[65px] md:ml-auto md:max-w-[84vw] md:px-0 w-full bg-[#07111b]">
          <ul className="flex gap-3 bg-[#07111b] px-6 pb-5 md:w-full max-w-[80vw] ml-auto">
            <li className="flex h-[45px] flex-1 items-center justify-center rounded-lg border border-[#bbb]">
              {t('version_basic')}
            </li>
            <li className="flex h-[45px] flex-1 items-center justify-center rounded-lg border border-[#bbb]">
              {t('version_tactile')}
            </li>
          </ul>
        </div>
        <motion.div
          className="px-8 md:px-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {versionSpecs.map((category, catIndex) => (
            <div key={category.category} className="mt-12">
              <h3 className="text-fluid-xl mt-15 mb-10 flex items-center border-b border-b-[#555] px-2 pb-2 leading-none font-bold first:mt-5">
                {t(category.category as any)}
              </h3>
              <dl>
                {category.specs.map((spec, specIndex) => (
                  <div
                    key={`${catIndex}-${specIndex}`}
                    className="mt-10 flex items-center gap-4 overflow-hidden px-2 text-base"
                  >
                    <dt className="mr-6 w-16 flex-[64px_0_0]">{t(spec.label as any)}</dt>
                    <dd className="min-w-[100px] flex-[max-content] text-center">
                      {spec.basic.startsWith('spec_') ? t(spec.basic as any) : spec.basic}
                    </dd>
                    <dd className="min-w-[100px] flex-[max-content] text-center">
                      {spec.tactile.startsWith('spec_') ? t(spec.tactile as any) : spec.tactile}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-12 pb-10 text-center text-black" aria-labelledby="experience-title-mobile">
        <motion.h2
          id="experience-title-mobile"
          className="text-fluid-3xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('experience_title')}
        </motion.h2>
        <motion.p
          className="text-fluid-base mt-6 px-6 md:px-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t('experience_desc')}
        </motion.p>
        <motion.div
          className="px-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Image
            src={`${imgPath}vNxgoGQhReYHayfI.webp`}
            alt={`Revo1 应用场景图片 1 - ${t('experience_title')} / Revo1 Application Scene Image 1 - ${t('experience_title')}`}
            width={296}
            height={296}
            className="mx-auto mt-10 h-74 w-auto"
          />
          <Image
            src={`${imgPath}vyhKagkQouWpRzCc.webp`}
            alt={`Revo1 应用场景图片 2 - ${t('experience_title')} / Revo1 Application Scene Image 2 - ${t('experience_title')}`}
            width={280}
            height={280}
            className="mx-auto mt-10 h-70 w-auto"
          />
        </motion.div>
      </section>

      {/* Quality Section */}
      <section className="bg-black pt-6 text-center !text-white" aria-labelledby="quality-title-mobile">
        <motion.h2
          id="quality-title-mobile"
          className="text-fluid-3xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('quality_title')}
        </motion.h2>
        <ul className="mt-6">
          {qualityVideos.map((videoSrc, index) => (
            <motion.li
              key={videoSrc}
              className={`relative mb-3 ${index === 2 ? 'h-[696px]' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <button
                type="button"
                onClick={() => handleQualityPlay(index)}
                className="absolute top-1/2 left-1/2 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
                aria-label={qualityVideoStates[index] ? '暂停视频 / Pause video' : '播放视频 / Play video'}
              >
                <Image
                  src={
                    qualityVideoStates[index]
                      ? `${imgPath}ObJSBxEMGvXUghHD.png`
                      : `${imgPath}VugdjKHnTrAozSPU.png`
                  }
                  alt={qualityVideoStates[index] ? '暂停视频 / Pause video' : '播放视频 / Play video'}
                  width={48}
                  height={48}
                  role="presentation"
                />
              </button>
              <video
                ref={(el) => {
                  qualityVideoRefs.current[index] = el;
                }}
                src={videoSrc}
                className="block h-full w-full object-cover"
                aria-label={`Revo1 质量展示视频 ${index + 1} - ${t('quality_title')} - 移动端 / Revo1 Quality Display Video ${index + 1} - ${t('quality_title')} - Mobile`}
              >
                <track kind="captions" />
              </video>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Partner Section */}
      <section className="bg-white pt-12 text-black" aria-labelledby="partner-title-mobile">
        <motion.h2
          id="partner-title-mobile"
          className="text-fluid-3xl text-center font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('partner_title')}
        </motion.h2>
        <motion.ul
          className="mt-10 flex flex-wrap items-center justify-evenly px-4 md:px-32"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {partnerMobile.map((logo, index) => (
            <motion.li
              key={logo}
              className="mb-8 flex h-16 min-w-[100px] justify-center md:w-[160px]"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.03, duration: 0.5 }}
            >
              <Image
                src={logo}
                alt={`Revo1 合作伙伴 Logo ${index + 1} - ${t('partner_title')} / Revo1 Partner Logo ${index + 1} - ${t('partner_title')}`}
                width={100}
                height={80}
                className="h-16 w-auto"
              />
            </motion.li>
          ))}
        </motion.ul>
        <motion.p
          className="text-fluid-base mt-10 px-4 text-center font-medium text-[#4d4d4d]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {t('partner_cta_text')}
        </motion.p>
        <motion.div
          className="mt-10 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link
            href="/contact#contact"
            className="flex h-10 w-33 items-center justify-center rounded-[20px] bg-[#1a74bf] !text-white"
            aria-label={`${t('contact_us')} - Revo1 智能灵巧手 / ${t('contact_us')} - Revo1 Intelligent Dexterous Hand`}
          >
            {t('contact_us')}
          </Link>
        </motion.div>
        <motion.span
          className="text-fluid-sm mt-6 mb-15 block px-8 text-center text-[#8d8d8d]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          {t('partner_email_note')}
        </motion.span>
      </section>

      <style jsx global>
        {`
        .swiper-pagination-custom {
          position: relative !important;
          display: flex;
          justify-content: center;
          gap: 12px;
          margin-top: 16px;
          bottom: auto !important;
          left: auto !important;
          transform: none !important;
        }
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: transparent;
          border: 1px solid #fff;
          opacity: 1;
          margin: 0;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          background: #fff;
        }
        .swiper-pagination {
          display: none !important;
        }
      `}
      </style>
    </main>
  );
}
