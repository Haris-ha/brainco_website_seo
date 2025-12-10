'use client';

import type { Swiper as SwiperType } from 'swiper';
import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import {
  abilityList,
  experienceImages,
  industryList,
  partner,
  qualityVideos,
  versionSpecs,
} from './data';
import 'swiper/css';

import 'swiper/css/pagination';

export default function Revo1Content() {
  const locale = useLocale();
  const t = useTranslations('Revo1');

  // 根据语言环境构建文档链接
  // 根据语言环境构建文档链接
  const documentationUrl = locale === 'en-US'
    ? 'https://www.brainco-hz.com/docs/revolimb-hand/en/revo1/parameters.html'
    : 'https://www.brainco-hz.com/docs/revolimb-hand/revo1/parameters.html';
  const [playStatus, setPlayStatus] = useState(false);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [qualityVideoStates, setQualityVideoStates] = useState([false, false, false]);
  const bannerVideoRef = useRef<HTMLVideoElement>(null);
  const qualityVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const swiperRef = useRef<SwiperType | null>(null);

  const handlePlay = () => {
    if (bannerVideoRef.current) {
      if (bannerVideoRef.current.paused) {
        bannerVideoRef.current.play();
        setPlayStatus(true);
      } else {
        bannerVideoRef.current.pause();
        setPlayStatus(false);
      }
    }
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

  const handleSlideChange = (swiper: SwiperType) => {
    setSwiperIndex(swiper.realIndex);
  };

  useEffect(() => {
    // Auto-play banner video on load
    if (bannerVideoRef.current) {
      bannerVideoRef.current.play();
      setPlayStatus(true);
    }
  }, []);

  useEffect(() => {
    // Ensure pagination is properly initialized after Swiper is ready
    const timer = setTimeout(() => {
      if (swiperRef.current) {
        const paginationEl = document.querySelector('.swiper-pagination-custom') as HTMLElement;
        if (paginationEl && swiperRef.current.pagination) {
          swiperRef.current.pagination.el = paginationEl;
          swiperRef.current.pagination.render();
          swiperRef.current.pagination.update();
        }
      }
    }, 100);
    return () => clearTimeout(timer);
  }, [swiperIndex]);

  return (
    <main className="bg-[#090909] !text-white">
      {/* Banner Section */}
      <motion.header
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          ref={bannerVideoRef}
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/pRLDxZVNwzckOPfn.mp4"
          poster="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/IORetzNrwTCBpifG.webp"
          aria-label="Revo1 智能灵巧手产品演示视频 / Revo1 Intelligent Dexterous Hand Demo Video"
          loop
          muted
          className="block h-auto w-full object-cover"
        />
        <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-end pb-50 !text-white 2xl:pb-70">
          <motion.h1
            className="text-fluid-6xl font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('product_name')}
            {' '}
            <span className="font-bold">{t('product_model')}</span>
          </motion.h1>
          <motion.p
            className="text-fluid-3xl mt-4"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
          >
            {t('subtitle')}
          </motion.p>
          <motion.div
            className="mt-14 flex gap-14"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
          >
            <Link
              href="/contact#contact"
              className="cursor-target text-fluid-3xl flex h-[76px] w-[284px] items-center justify-center rounded-[45px] bg-[#1a74bf] font-semibold !text-white transition-transform hover:scale-105"
              aria-label={`${t('contact_us')} - Revo1 智能灵巧手 / ${t('contact_us')} - Revo1 Intelligent Dexterous Hand`}
            >
              {t('contact_us')}
            </Link>
            <a
              href={documentationUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target text-fluid-3xl flex h-[76px] w-[284px] items-center justify-center rounded-[45px] border-[2px] border-white font-semibold !text-white transition-transform hover:scale-105"
              aria-label={`${t('documentation')} - Revo1 产品文档 / ${t('documentation')} - Revo1 Product Documentation`}
            >
              {t('documentation')}
            </a>
          </motion.div>
        </div>
        <button
          type="button"
          onClick={handlePlay}
          className="cursor-target absolute right-16 bottom-16 h-[72px] w-[72px] transition-transform hover:scale-110"
          aria-label={playStatus ? '暂停视频 / Pause video' : '播放视频 / Play video'}
        >
          <Image
            src={
              playStatus
                ? 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/ObJSBxEMGvXUghHD.png'
                : 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/GzimPDMCAITjyxla.png'
            }
            alt={playStatus ? '暂停视频 / Pause video' : '播放视频 / Play video'}
            width={72}
            height={72}
            role="presentation"
          />
        </button>
      </motion.header>

      {/* Industry Empowerment Section */}
      <section className="bg-black pt-40 pb-20 !text-white" aria-labelledby="industry-title">
        <motion.h2
          id="industry-title"
          className="text-fluid-5xl text-center font-medium capitalize"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('industry_title')}
        </motion.h2>
        <div className="mx-auto mt-32 flex w-full max-w-[80%] justify-center gap-8 text-[#c7cdd4] 2xl:max-w-[70%]">
          <div className="grid w-2/3 grid-cols-2 gap-16">
            {industryList.map((item, index) => (
              <motion.div
                key={item.icon}
                className="flex flex-col"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Image
                  src={item.icon}
                  alt={`${t(`industry_${index + 1}_title` as any)} - Revo1 行业应用图标 / ${t(`industry_${index + 1}_title` as any)} - Revo1 Industry Application Icon`}
                  width={80}
                  height={80}
                  className="mb-4 h-20 w-20 object-contain"
                />
                <h3 className="text-fluid-3xl mb-3 leading-tight font-semibold text-white">
                  {t(`industry_${index + 1}_title` as any)}
                </h3>
                <p
                  className="text-fluid-lg mb-6 leading-relaxed text-[##8F9297]"
                  dangerouslySetInnerHTML={{ __html: t(`industry_${index + 1}_desc` as any) }}
                />
                <div className="flex flex-col gap-4 text-[#C7CDD4]">
                  {item.ability.map((subInfo, subIndex) => (
                    <div
                      key={`${index}-${subIndex}`}
                      className="flex flex-col"
                    >
                      <h4 className="text-fluid-xl mb-1 font-semibold">{t(subInfo.title as any)}</h4>
                      <div className="flex items-end leading-none">
                        <span className="text-fluid-3xl xl:text-fluid-4xl relative top-1 pr-1 font-bold xl:pr-2">
                          {subInfo.data}
                        </span>
                        <span className={`text-fluid-base no-underline ${subInfo.connect ? 'font-bold' : ''}`}>
                          {subInfo.unit === 'ability_unit_seconds' ? t(subInfo.unit as any) : subInfo.unit}
                        </span>
                        {subInfo.extend && (
                          <p className="text-fluid-base ml-1 font-bold xl:ml-2">{subInfo.extend.startsWith('ability_') ? t(subInfo.extend as any) : subInfo.extend}</p>
                        )}
                        {subInfo.connect && (
                          <b className="text-fluid-3xl xl:text-fluid-4xl relative top-1 ml-1 font-bold xl:ml-2">
                            {subInfo.connect}
                          </b>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="flex w-1/3 flex-shrink-0 flex-col items-center"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/OpdcfbPwGNAqTaol.webp"
              alt="Revo1 智能灵巧手产品主图 - 产品外观展示 / Revo1 Intelligent Dexterous Hand Main Product Image - Product Appearance Display"
              width={360}
              height={360}
              className="ml-1 xl:ml-2 xl:h-[280px] xl:w-[280px] 2xl:h-[360px] 2xl:w-[360px]"
            />
            <p className="text-fluid-xl mt-6 mb-1 pl-[60px] font-semibold text-[#c7cdd4] xl:mt-12">
              {t('product_weight_label')}
            </p>
            <p className="text-fluid-3xl xl:text-fluid-4xl flex items-end pl-[60px] font-bold text-[#c7cdd4]">
              {t('product_weight_value')}
              {' '}
              <span className="text-fluid-base xl:text-fluid-base relative bottom-1 ml-1 xl:ml-1">
                {t('product_weight_unit')}
              </span>
            </p>
            <p className="text-fluid-xl mt-2 pl-[60px] font-semibold text-[#c7cdd4]">
              {t('active_joints_label')}
            </p>
            <p className="text-fluid-3xl xl:text-fluid-4xl flex items-end pl-[60px] font-bold text-[#c7cdd4]">
              {t('active_joints_value')}
              {' '}
              <span className="text-fluid-base xl:text-fluid-base relative bottom-1 ml-1 xl:ml-1">
                {t('active_joints_unit')}
              </span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Ability Showcase Section */}
      <section className="bg-black py-36 pb-25 !text-white" aria-labelledby="ability-title">
        <div className="mx-auto w-[90%] max-w-[960px] px-4 2xl:max-w-[70%]">
          <div className="text-center">
            {abilityList.map(
              (item, index) =>
                index === swiperIndex && (
                  <motion.div
                    key={item.img}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                    className="mx-auto max-w-[90%]"
                  >
                    <h2
                      id="ability-title"
                      className="text-fluid-5xl font-medium"
                    >
                      {t(`ability_${index + 1}_title` as any)}
                    </h2>
                    <p className="text-fluid-2xl mx-auto mt-3 mb-14 max-w-[90%] text-[#c7cdd4]">
                      {t(`ability_${index + 1}_desc` as any)}
                    </p>
                  </motion.div>
                ),
            )}
          </div>
          <div className="relative">
            <Swiper
              modules={[Pagination, Autoplay]}
              pagination={{ clickable: true, el: '.swiper-pagination-custom' }}
              onSlideChange={handleSlideChange}
              onSwiper={(swiper) => {
                swiperRef.current = swiper;
                // Initialize pagination after a short delay to ensure DOM is ready
                setTimeout(() => {
                  const paginationEl = document.querySelector('.swiper-pagination-custom') as HTMLElement;
                  if (paginationEl && swiper.pagination) {
                    swiper.pagination.el = paginationEl;
                    swiper.pagination.render();
                    swiper.pagination.update();
                  }
                }, 50);
              }}
              className="pb-8"
            >
              {abilityList.map((item, videoIndex) => (
                <SwiperSlide key={item.img}>
                  <div className="accuracy_bg">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      src={item.video}
                      className="h-auto w-full"
                      aria-label={`${t(`ability_${videoIndex + 1}_title` as any)} - Revo1 功能演示视频 / ${t(`ability_${videoIndex + 1}_title` as any)} - Revo1 Feature Demo Video`}
                    >
                      <track kind="captions" />
                    </video>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination-custom mt-8" />
          </div>
        </div>
      </section>

      {/* Product Version Section */}
      <section className="bg-black py-20 !text-white" aria-labelledby="version-title">
        <div className="mx-auto w-[90%] max-w-[1200px] border-t border-[#666] pt-20 2xl:max-w-[70%]">
          <motion.h2
            id="version-title"
            className="text-fluid-5xl mb-24 text-center font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('version_title')}
          </motion.h2>
          <div className="sticky top-20 z-10 h-auto overflow-hidden bg-black px-4">
            <div className="mx-auto w-full max-w-[95%] pb-2 xl:max-w-[90%]">
              <ul className="flex flex-wrap items-start gap-8">
                <span className="mr-4 w-full flex-[100%_0_0] font-medium xl:mr-0 xl:w-[280px] xl:flex-[280px_0_0]" />
                <li className="text-fluid-2xl xl:text-fluid-3xl flex h-[60px] flex-1 items-center justify-center rounded-[12px] border-[0.5px] border-[#8B8B8B] bg-white/10 font-semibold !text-white xl:h-[76px]">
                  {t('version_basic')}
                </li>
                <li className="text-fluid-2xl xl:text-fluid-3xl flex h-[60px] flex-1 items-center justify-center rounded-[12px] border-[0.5px] border-[#8B8B8B] bg-white/10 font-semibold !text-white xl:h-[76px]">
                  {t('version_tactile')}
                </li>
              </ul>
            </div>
          </div>
          <motion.div
            className="mx-auto mt-15 w-full max-w-[95%] pb-36 xl:max-w-[90%] "
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {versionSpecs.map((category, catIndex) => (
              <div key={category.category} className="mt-36">
                <h3 className="text-fluid-4xl mt-32 mb-20 border-b border-b-[#333] pb-3 leading-none font-semibold first:mt-0">
                  {t(category.category as any)}
                </h3>
                <dl className="mt-10 first:mt-0 xl:mt-14">
                  {category.specs.map((spec, specIndex) => (
                    <div
                      key={`${catIndex}-${specIndex}`}
                      className="text-fluid-xl xl:text-fluid-2xl mt-10 flex flex-wrap items-start gap-4 first:mt-0 xl:mt-14"
                    >
                      <dt className="mr-4 w-full flex-[100%_0_0] font-medium xl:mr-0 xl:w-[280px] xl:flex-[280px_0_0]">{t(spec.label as any)}</dt>
                      <dd className="mt-2 flex-1 pl-32 text-left xl:mt-0 2xl:pr-4">{spec.basic.startsWith('spec_') ? t(spec.basic as any) : spec.basic}</dd>
                      <dd className="mt-2 flex-1 pl-32 text-left xl:mt-0 2xl:pr-4">{spec.tactile.startsWith('spec_') ? t(spec.tactile as any) : spec.tactile}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative mx-auto flex h-full w-full max-w-[100vw] justify-between overflow-hidden bg-white pt-40 pr-40 pl-60 text-black" aria-labelledby="experience-title">
        <div>
          <motion.h2
            id="experience-title"
            className="text-fluid-5xl absolute top-30 left-1/2 -translate-x-1/2 font-semibold capitalize"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('experience_title')}
          </motion.h2>
          <motion.p
            className="text-fluid-xl xl:text-fluid-2xl mx-auto mt-45 -mr-40 text-[#111827]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('experience_desc')}
          </motion.p>
          <motion.ul
            className="mt-12 -mr-40 flex w-full items-center gap-10 xl:mt-20"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {experienceImages.map((img, index) => (
              <motion.li
                key={img}
                className="flex-shrink-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                <img
                  src={img}
                  alt={`Revo1 应用场景 ${index + 1} - ${t('experience_title')} / Revo1 Application Scene ${index + 1} - ${t('experience_title')}`}
                  className="!h-40 w-auto object-contain"
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/PRZobAtBlFTjULiC.webp"
          alt="Revo1 智能灵巧手应用体验展示图 - 产品使用场景 / Revo1 Intelligent Dexterous Hand Application Experience Display - Product Usage Scene"
          width={600}
          height={600}
          className="h-auto max-w-[40%]"
        />
      </section>

      {/* Quality Section */}
      <section className="bg-black py-20 pb-34 !text-white" aria-labelledby="quality-title">
        <motion.h2
          id="quality-title"
          className="text-fluid-5xl mb-16 text-center font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('quality_title')}
        </motion.h2>
        <div className="flex justify-center px-4 xl:px-8">
          <div className="mr-4 flex w-full max-w-[55%] flex-col xl:mr-10 xl:max-w-[600px]">
            {[0, 1].map(index => (
              <motion.div
                key={index}
                className="relative mb-8 last:mb-0"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <button
                  type="button"
                  onClick={() => handleQualityPlay(index)}
                  className="cursor-target absolute top-1/2 left-1/2 z-10 h-15 w-15 -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110"
                  aria-label={qualityVideoStates[index] ? '暂停视频 / Pause video' : '播放视频 / Play video'}
                >
                  <Image
                    src={
                      qualityVideoStates[index]
                        ? 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/ObJSBxEMGvXUghHD.png'
                        : 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/VugdjKHnTrAozSPU.png'
                    }
                    alt={qualityVideoStates[index] ? '暂停视频 / Pause video' : '播放视频 / Play video'}
                    width={60}
                    height={60}
                    role="presentation"
                  />
                </button>
                <video
                  ref={(el) => {
                    qualityVideoRefs.current[index] = el;
                  }}
                  src={qualityVideos[index]}
                  className="block w-full rounded-[24px]"
                  aria-label={`Revo1 质量展示视频 ${index + 1} - ${t('quality_title')} / Revo1 Quality Display Video ${index + 1} - ${t('quality_title')}`}
                >
                  <track kind="captions" />
                </video>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="relative w-full max-w-[360px] overflow-hidden rounded-[24px] xl:max-w-[390px]"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <button
              type="button"
              onClick={() => handleQualityPlay(2)}
              className="cursor-target absolute top-1/2 left-1/2 z-10 h-15 w-15 -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110"
              aria-label={qualityVideoStates[2] ? '暂停视频 / Pause video' : '播放视频 / Play video'}
            >
              <Image
                src={
                  qualityVideoStates[2]
                    ? 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/ObJSBxEMGvXUghHD.png'
                    : 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/VugdjKHnTrAozSPU.png'
                }
                alt={qualityVideoStates[2] ? '暂停视频 / Pause video' : '播放视频 / Play video'}
                width={60}
                height={60}
                role="presentation"
              />
            </button>
            <video
              ref={(el) => {
                qualityVideoRefs.current[2] = el;
              }}
              src={qualityVideos[2]}
              className="h-full w-full max-w-[380px] rounded-[24px] object-cover xl:max-w-[460px]"
              aria-label={`Revo1 质量展示视频 3 - ${t('quality_title')} / Revo1 Quality Display Video 3 - ${t('quality_title')}`}
            >
              <track kind="captions" />
            </video>
          </motion.div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="bg-white pb-25 text-black" aria-labelledby="partner-title">
        <motion.h2
          id="partner-title"
          className="text-fluid-5xl pt-20 text-center font-semibold"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('partner_title')}
        </motion.h2>

        {/* Logo 静态布局 */}
        <div className="mx-auto mt-20 max-w-[90%] px-20">
          {/* 第一行 - 4个logo */}
          <div className="mb-20 flex items-center justify-center gap-20">
            {partner.slice(0, 4).map((logo, index) => (
              <motion.div
                key={`partner-row1-${index}`}
                className="flex h-32 w-64 items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1, ease: 'easeOut' }}
              >
                <Image
                  src={logo}
                  alt={`Revo1 合作伙伴 Logo ${index + 1} - ${t('partner_title')} / Revo1 Partner Logo ${index + 1} - ${t('partner_title')}`}
                  width={256}
                  height={128}
                  className="h-auto max-h-32 w-auto max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
          {/* 第二行 - 4个logo */}
          <div className="flex items-center justify-center gap-20">
            {partner.slice(4, 8).map((logo, index) => (
              <motion.div
                key={`partner-row2-${index}`}
                className="flex h-32 w-64 items-center justify-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6 + index * 0.1, ease: 'easeOut' }}
              >
                <Image
                  src={logo}
                  alt={`Revo1 合作伙伴 Logo ${index + 5} - ${t('partner_title')} / Revo1 Partner Logo ${index + 5} - ${t('partner_title')}`}
                  width={256}
                  height={128}
                  className="h-auto max-h-32 w-auto max-w-full object-contain"
                />
              </motion.div>
            ))}
          </div>
        </div>

        <motion.p
          className="text-fluid-2xl mt-30 text-center font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {t('partner_cta_text')}
        </motion.p>
        <motion.div
          className="mt-32 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link
            href="/contact#contact"
            className="cursor-target text-fluid-3xl flex h-16 w-66 items-center justify-center rounded-[32px] bg-[#1a74bf] !text-white transition-transform hover:scale-105"
            aria-label={`${t('contact_us')} - Revo1 智能灵巧手 / ${t('contact_us')} - Revo1 Intelligent Dexterous Hand`}
          >
            {t('contact_us')}
          </Link>
        </motion.div>
        <motion.span
          className="text-fluid-xl mt-10 block text-center text-[#8d8d8d]"
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
          display: flex !important;
          justify-content: center;
          align-items: center;
          gap: 12px;
          margin-top: 16px;
          bottom: auto !important;
          left: auto !important;
          transform: none !important;
          width: 100% !important;
          z-index: 10 !important;
        }
        .swiper-pagination-custom .swiper-pagination-bullet {
          width: 8px !important;
          height: 8px !important;
          background: transparent !important;
          border: 1px solid #fff !important;
          opacity: 1 !important;
          margin: 0 !important;
          cursor: pointer;
          border-radius: 50% !important;
          transition: all 0.3s ease !important;
        }
        .swiper-pagination-custom .swiper-pagination-bullet-active {
          width: 24px !important;
          height: 8px !important;
          background: #fff !important;
          border-color: #fff !important;
          border-radius: 4px !important;
        }
        .swiper-pagination {
          display: none !important;
        }
        .swiper-wrapper {
          position: relative;
        }
      `}
      </style>
    </main>
  );
}
