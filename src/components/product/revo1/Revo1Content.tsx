'use client';

import type { Swiper as SwiperType } from 'swiper';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useMemo, useRef, useState } from 'react';
import { Autoplay, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import LogoLoopComponent from '@/components/ui/LogoLoop/LogoLoop';
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

// Type assertion for JSX component without TypeScript definitions
const LogoLoop = LogoLoopComponent as any;

export default function Revo1Content() {
  const t = useTranslations('Revo1');
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

  // 将 partner 数组转换为 LogoLoop 格式
  const partnerLogos = useMemo(() => {
    return partner.map((src, index) => ({
      src,
      alt: `Partner ${index + 1}`,
      height: 140,
    }));
  }, []);

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
    <div className="bg-black text-white">
      {/* Banner Section */}
      <motion.section
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          ref={bannerVideoRef}
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/pRLDxZVNwzckOPfn.mp4"
          poster="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/IORetzNrwTCBpifG.webp"
          loop
          muted
          className="block h-auto w-full object-cover"
        />
        <div className="absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center !text-white">
          <motion.h2
            className="text-fluid-6xl font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('product_name')}
            {' '}
            <span className="ml-6 font-bold">{t('product_model')}</span>
          </motion.h2>
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
              className="cursor-target text-fluid-3xl flex h-[72px] w-[264px] items-center justify-center rounded-[45px] bg-[#1a74bf] !text-white transition-transform hover:scale-105"
            >
              {t('contact_us')}
            </Link>
            <a
              href="https://www.brainco-hz.com/docs/revolimb-hand/revo1/parameters.html"
              target="_blank"
              rel="noopener noreferrer"
              className="cursor-target text-fluid-3xl flex h-[72px] w-[264px] items-center justify-center rounded-[45px] border border-white !text-white transition-transform hover:scale-105"
            >
              {t('documentation')}
            </a>
          </motion.div>
        </div>
        <button
          type="button"
          onClick={handlePlay}
          className="cursor-target absolute right-16 bottom-16 h-[72px] w-[72px] transition-transform hover:scale-110"
        >
          <Image
            src={
              playStatus
                ? 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/ObJSBxEMGvXUghHD.png'
                : 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/GzimPDMCAITjyxla.png'
            }
            alt="Play button"
            width={72}
            height={72}
          />
        </button>
      </motion.section>

      {/* Industry Empowerment Section */}
      <section className="bg-black pt-40 pb-20 text-white">
        <motion.h4
          className="text-fluid-5xl text-center font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('industry_title')}
        </motion.h4>
        <div className="mx-auto mt-24 flex max-w-[90%] items-end justify-center overflow-x-hidden text-[#c7cdd4] xl:max-w-[85%]">
          <ul>
            {industryList.map((item, index) => (
              <motion.li
                key={item.icon}
                className="mb-32 flex items-center last:mb-0"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Image src={item.icon} alt="" width={80} height={80} className="mr-3 flex-shrink-0 xl:mr-4" />
                <div className="mr-8 w-[220px] flex-shrink-0 xl:mr-8 xl:w-[220px] 2xl:w-[240px]">
                  <h4 className="text-fluid-2xl leading-tight font-medium">
                    {t(`industry_${index + 1}_title` as any)}
                  </h4>
                  <p
                    className="text-fluid-lg mt-3 leading-relaxed xl:mt-5"
                    dangerouslySetInnerHTML={{ __html: t(`industry_${index + 1}_desc` as any) }}
                  />
                </div>
                <ul className="flex flex-shrink-0 gap-3 xl:gap-4">
                  {item.ability.map((subInfo, subIndex) => (
                    <li
                      key={`${index}-${subIndex}`}
                      className="flex min-w-[130px] flex-col xl:min-w-[150px]"
                    >
                      <h5 className="text-fluid-xl">{t(subInfo.title as any)}</h5>
                      <div className="mt-1 flex items-end leading-none xl:mt-2">
                        <span className="text-fluid-3xl xl:text-fluid-4xl relative top-1 pr-1 font-bold xl:pr-2">
                          {subInfo.data}
                        </span>
                        <s className="text-fluid-base no-underline">{subInfo.unit === 'ability_unit_seconds' ? t(subInfo.unit as any) : subInfo.unit}</s>
                        {subInfo.extend && (
                          <p className="text-fluid-base ml-1 font-medium xl:ml-2">{subInfo.extend.startsWith('ability_') ? t(subInfo.extend as any) : subInfo.extend}</p>
                        )}
                        {subInfo.connect && (
                          <b className="text-fluid-3xl xl:text-fluid-4xl relative top-1 ml-1 font-bold xl:ml-2">
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
            className="ml-3 flex flex-shrink-0 flex-col items-center xl:ml-4"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/OpdcfbPwGNAqTaol.webp"
              alt=""
              width={240}
              height={240}
              className="ml-1 xl:ml-2 xl:h-[280px] xl:w-[280px] 2xl:h-[360px] 2xl:w-[360px]"
            />
            <p className="text-fluid-base xl:text-fluid-xl mt-6 pl-[60px] text-[#c7cdd4] xl:mt-12">
              {t('product_weight_label')}
            </p>
            <h4 className="text-fluid-3xl xl:text-fluid-4xl flex items-end pl-[60px] font-bold text-[#c7cdd4]">
              {t('product_weight_value')}
              {' '}
              <span className="text-fluid-base xl:text-fluid-base relative bottom-1 ml-1 xl:ml-1">
                {t('product_weight_unit')}
              </span>
            </h4>
            <p className="text-fluid-base xl:text-fluid-xl mt-2 pl-[60px] text-[#c7cdd4]">
              {t('active_joints_label')}
            </p>
            <h4 className="text-fluid-3xl xl:text-fluid-4xl flex items-end pl-[60px] font-bold text-[#c7cdd4]">
              {t('active_joints_value')}
              {' '}
              <span className="text-fluid-base xl:text-fluid-base relative bottom-1 ml-1 xl:ml-1">
                {t('active_joints_unit')}
              </span>
            </h4>
          </motion.div>
        </div>
      </section>

      {/* Ability Showcase Section */}
      <section className="bg-black py-36 pb-25 text-white">
        <div className="mx-auto w-[90%] max-w-[960px] px-4">
          <div className="text-center">
            {abilityList.map(
              (item, index) =>
                index === swiperIndex && (
                  <motion.div
                    key={item.img}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <h4 className="text-fluid-5xl font-medium">
                      {t(`ability_${index + 1}_title` as any)}
                    </h4>
                    <p className="text-fluid-2xl mt-3 mb-14 text-[#c7cdd4]">
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
              {abilityList.map(item => (
                <SwiperSlide key={item.img}>
                  <div className="accuracy_bg">
                    <video
                      autoPlay
                      muted
                      loop
                      playsInline
                      src={item.video}
                      className="h-auto w-full"
                    />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-pagination-custom mt-8" />
          </div>
        </div>
      </section>

      {/* Product Version Section */}
      <section className="bg-black py-20 text-white">
        <div className="mx-auto w-[90%] max-w-[1200px] border-t border-[#666] pt-20">
          <motion.h2
            className="text-fluid-5xl mb-24 text-center font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('version_title')}
          </motion.h2>
          <div className="sticky top-20 z-10 h-auto overflow-hidden bg-black px-4 pb-6">
            <ul className="flex justify-center gap-4 xl:gap-10">
              <li className="text-fluid-2xl xl:text-fluid-3xl flex h-[60px] w-full max-w-[45%] items-center justify-center rounded-xl bg-white/10 text-white xl:h-[76px] xl:max-w-[494px]">
                {t('version_basic')}
              </li>
              <li className="text-fluid-2xl xl:text-fluid-3xl flex h-[60px] w-full max-w-[45%] items-center justify-center rounded-xl bg-white/10 text-white xl:h-[76px] xl:max-w-[494px]">
                {t('version_tactile')}
              </li>
            </ul>
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
                <dt className="text-fluid-4xl mt-32 mb-20 border-b border-b-[#333] pb-3 leading-none first:mt-0">
                  <h4>{t(category.category as any)}</h4>
                </dt>
                {category.specs.map((spec, specIndex) => (
                  <dd
                    key={`${catIndex}-${specIndex}`}
                    className="text-fluid-xl xl:text-fluid-2xl mt-10 flex flex-wrap items-start first:mt-0 xl:mt-14"
                  >
                    <span className="mr-4 w-full flex-[100%_0_0] font-medium xl:mr-0 xl:w-[280px] xl:flex-[280px_0_0]">{t(spec.label as any)}</span>
                    <span className="mt-2 flex-1 text-center xl:mt-0">{spec.basic.startsWith('spec_') ? t(spec.basic as any) : spec.basic}</span>
                    <span className="mt-2 flex-1 text-center xl:mt-0">{spec.tactile.startsWith('spec_') ? t(spec.tactile as any) : spec.tactile}</span>
                  </dd>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative mx-auto flex h-full w-full max-w-[100vw] justify-between overflow-hidden bg-white px-40 pt-20 text-black">
        <div>
          <motion.h5
            className="text-fluid-5xl absolute top-20 left-1/2 -translate-x-1/2"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('experience_title')}
          </motion.h5>
          <motion.p
            className="text-fluid-xl xl:text-fluid-2xl mx-auto mt-60 -mr-20 w-full text-[#070502]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('experience_desc')}
          </motion.p>
          <motion.ul
            className="mx-auto mt-12 -mr-20 flex h-32 w-full gap-2 xl:mt-20 xl:h-40"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {experienceImages.map((img, index) => (
              <motion.li
                key={img}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.6 }}
              >
                <Image
                  src={img}
                  alt=""
                  width={160}
                  height={120}
                  className="h-28 w-auto xl:h-36"
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/PRZobAtBlFTjULiC.webp"
          alt=""
          width={600}
          height={600}
          className="h-auto max-w-[45%] xl:max-w-[50%]"
        />
      </section>

      {/* Quality Section */}
      <section className="bg-black py-20 pb-34 text-white">
        <motion.h4
          className="text-fluid-5xl mb-16 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('quality_title')}
        </motion.h4>
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
                >
                  <Image
                    src={
                      qualityVideoStates[index]
                        ? 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/ObJSBxEMGvXUghHD.png'
                        : 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/VugdjKHnTrAozSPU.png'
                    }
                    alt=""
                    width={60}
                    height={60}
                  />
                </button>
                <video
                  ref={(el) => {
                    qualityVideoRefs.current[index] = el;
                  }}
                  src={qualityVideos[index]}
                  className="block w-full rounded-3xl"
                  // Added track element for accessibility as required by lint
                >
                  <track kind="captions" />
                </video>
              </motion.div>
            ))}
          </div>
          <motion.div
            className="relative overflow-hidden rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <button
              type="button"
              onClick={() => handleQualityPlay(2)}
              className="cursor-target absolute top-1/2 left-1/2 z-10 h-15 w-15 -translate-x-1/2 -translate-y-1/2 transition-transform hover:scale-110"
            >
              <Image
                src={
                  qualityVideoStates[2]
                    ? 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/ObJSBxEMGvXUghHD.png'
                    : 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/VugdjKHnTrAozSPU.png'
                }
                alt=""
                width={60}
                height={60}
              />
            </button>
            <video
              ref={(el) => {
                qualityVideoRefs.current[2] = el;
              }}
              src={qualityVideos[2]}
              className="h-full w-full max-w-[380px] rounded-3xl object-cover xl:max-w-[460px]"
              // Added track element for accessibility as required by lint
            >
              <track kind="captions" />
            </video>
            <track kind="captions" />
          </motion.div>
        </div>
      </section>

      {/* Partner Section */}
      <section className="bg-white pb-25 text-black">
        <motion.h4
          className="text-fluid-5xl pt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('partner_title')}
        </motion.h4>

        {/* Logo 滚动区域 */}
        <motion.div
          className="mt-20 px-20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <div className="h-[140px]">
            <LogoLoop
              logos={partnerLogos}
              speed={60}
              direction="left"
              logoHeight={140}
              gap={80}
              pauseOnHover
              scaleOnHover
              ariaLabel="合作伙伴"
            />
          </div>
        </motion.div>

        <motion.p
          className="text-fluid-2xl mt-20 text-center font-medium"
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
          >
            {t('contact_us')}
          </Link>
        </motion.div>
        <motion.span
          className="text-fluid-2xl mt-10 block text-center text-[#8d8d8d]"
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
    </div>
  );
}
