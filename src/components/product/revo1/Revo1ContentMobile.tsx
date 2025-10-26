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
    <div className="bg-black text-white">
      {/* Banner Section */}
      <motion.section
        className="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <video
          autoPlay
          muted
          playsInline
          loop
          src={`${imgPath}pRLDxZVNwzckOPfn.mp4`}
          className="block w-full"
        />
      </motion.section>

      {/* Product Info Section */}
      <section className="flex flex-col items-center justify-center bg-[#f5f5f5] py-4 pb-12 text-black">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col items-center"
        >
          <Image src={`${imgPath}yOnXsafVGAoJFLYz.webp`} alt="" width={264} height={264} />
          <h4 className="text-fluid-2xl mt-7 font-medium">
            {t('product_name')}
            {' '}
            {t('product_model')}
          </h4>
          <p className="text-fluid-lg mt-2">{t('subtitle')}</p>
          <div className="mt-6 flex gap-6">
            <Link
              href="/contact#contact"
              className="flex h-[38px] w-[112px] items-center justify-center rounded-[20px] bg-[#1a74bf] text-white"
            >
              {t('contact_us')}
            </Link>
            <a
              href="https://www.brainco-hz.com/docs/revolimb-hand/revo1/parameters.html"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-[38px] w-[112px] items-center justify-center rounded-[20px] border border-black text-black"
            >
              {t('documentation')}
            </a>
          </div>
        </motion.div>
      </section>

      {/* Industry Section */}
      <section className="bg-[#07111b] py-6 text-white">
        <motion.h4
          className="text-fluid-2xl text-center font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('industry_title')}
        </motion.h4>
        <ul className="pr-5">
          {industryList.map((item, index) => (
            <motion.li
              key={item.icon}
              className="mb-10 pl-10"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <Image src={item.icon} alt="" width={40} height={40} className="block h-10 w-auto" />
              <h5 className="text-fluid-lg mt-3 font-medium">
                {t(`industry_${index + 1}_title` as any)}
              </h5>
              <p className="text-fluid-sm mt-2 text-[#c7cdd4]">
                {t(`industry_${index + 1}_desc` as any)}
              </p>
              <ul className="mt-8 flex">
                {item.ability.map((subInfo, subIndex) => (
                  <li key={`${index}-${subIndex}`} className="flex-1">
                    <h5 className="text-fluid-xs font-medium text-[#c7cdd4]">{subInfo.title}</h5>
                    <div className="flex items-end leading-none">
                      <span className="text-fluid-3xl relative top-1.5 mr-0.5 font-bold text-[#c7cdd4]">
                        {subInfo.data}
                      </span>
                      <s className="no-underline">{subInfo.unit}</s>
                      {subInfo.connect && (
                        <b className="text-fluid-3xl relative top-1.5 ml-0.5 font-bold text-[#c7cdd4]">
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
            alt=""
            width={210}
            height={210}
            className="mx-auto mt-10 block h-52 w-auto"
          />
          <dl className="mt-10 flex justify-center">
            <dd className="mr-18">
              <p className="text-fluid-xs font-medium text-[#c7cdd4]">{t('product_weight_label')}</p>
              <h2 className="text-fluid-3xl mt-2 flex items-end leading-none font-bold text-[#c7cdd4]">
                {t('product_weight_value')}
                {' '}
                <span className="text-fluid-xs relative bottom-1 ml-1 font-normal">
                  {t('product_weight_unit')}
                </span>
              </h2>
            </dd>
            <dd>
              <p className="text-fluid-xs font-medium text-[#c7cdd4]">{t('active_joints_label')}</p>
              <h2 className="text-fluid-3xl mt-2 flex items-end leading-none font-bold text-[#c7cdd4]">
                {t('active_joints_value')}
                {' '}
                <span className="text-fluid-xs relative bottom-1 ml-1 font-normal">
                  {t('active_joints_unit')}
                </span>
              </h2>
            </dd>
          </dl>
        </motion.div>
      </section>

      {/* Ability Showcase Section */}
      <section className="bg-[#07111b] py-14 pb-12 text-white">
        <div className="w-full">
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
                    <h4 className="text-fluid-2xl font-medium">
                      {t(`ability_${index + 1}_title` as any)}
                    </h4>
                    <p className="text-fluid-sm mt-3 mb-13 h-10 text-[#c7cdd4]">
                      {t(`ability_${index + 1}_desc` as any)}
                    </p>
                  </motion.div>
                ),
            )}
          </div>
          <Swiper
            modules={[Pagination]}
            pagination={{ clickable: true }}
            onSlideChange={handleSlideChange}
            className="pb-10"
          >
            {abilityList.map(item => (
              <SwiperSlide key={item.img}>
                <div className="accuracy_bg">
                  <video autoPlay muted loop playsInline src={item.mobileVideo} className="w-full" />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Product Version Section */}
      <section className="bg-[#07111b] pb-23 text-white">
        <motion.h2
          className="text-fluid-2xl mb-6 text-center font-bold"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('version_title')}
        </motion.h2>
        <div className="h-[65px]">
          <ul className="flex gap-3 bg-[#07111b] px-6 pb-5">
            <li className="flex h-[45px] flex-1 items-center justify-center rounded-xl border border-[#bbb]">
              {t('version_basic')}
            </li>
            <li className="flex h-[45px] flex-1 items-center justify-center rounded-xl border border-[#bbb]">
              {t('version_tactile')}
            </li>
          </ul>
        </div>
        <motion.div
          className="px-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {versionSpecs.map((category, catIndex) => (
            <div key={category.category}>
              <dt className="text-fluid-xl mt-15 mb-10 flex items-center border-b border-b-[#555] px-2 pb-2 leading-none first:mt-5">
                <h4 className="font-bold">{category.category}</h4>
              </dt>
              {category.specs.map((spec, specIndex) => (
                <dd
                  key={`${catIndex}-${specIndex}`}
                  className="mt-14 flex gap-5 overflow-hidden px-2 text-base"
                >
                  <span className="mr-6 w-16 flex-[64px_0_0]">{spec.label}</span>
                  <span className="flex-[max-content]">{spec.basic}</span>
                  <span className="flex-[max-content]">{spec.tactile}</span>
                </dd>
              ))}
            </div>
          ))}
        </motion.div>
      </section>

      {/* Experience Section */}
      <section className="bg-white py-6 pb-10 text-center text-black">
        <motion.h4
          className="text-fluid-2xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('experience_title')}
        </motion.h4>
        <motion.p
          className="text-fluid-sm mt-6 px-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {t('experience_desc')}
        </motion.p>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Image
            src={`${imgPath}vNxgoGQhReYHayfI.webp`}
            alt=""
            width={296}
            height={296}
            className="mx-auto mt-10 h-74 w-auto"
          />
          <Image
            src={`${imgPath}vyhKagkQouWpRzCc.webp`}
            alt=""
            width={280}
            height={280}
            className="mx-auto mt-10 h-70 w-auto"
          />
        </motion.div>
      </section>

      {/* Quality Section */}
      <section className="bg-black py-6 text-center text-white">
        <motion.h4
          className="text-fluid-2xl font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('quality_title')}
        </motion.h4>
        <ul className="mt-11">
          {qualityVideos.map((videoSrc, index) => (
            <motion.li
              key={videoSrc}
              className={`relative mb-3 ${index === 2 ? 'h-[682px]' : ''}`}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              <button
                type="button"
                onClick={() => handleQualityPlay(index)}
                className="absolute top-1/2 left-1/2 z-10 h-12 w-12 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
              >
                <Image
                  src={
                    qualityVideoStates[index]
                      ? `${imgPath}ObJSBxEMGvXUghHD.png`
                      : `${imgPath}VugdjKHnTrAozSPU.png`
                  }
                  alt=""
                  width={48}
                  height={48}
                />
              </button>
              <video
                ref={(el) => {
                  qualityVideoRefs.current[index] = el;
                }}
                src={videoSrc}
                className="block h-full w-full object-cover"
              />
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Partner Section */}
      <section className="bg-white pt-6 text-black">
        <motion.h4
          className="text-fluid-2xl text-center font-medium"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('partner_title')}
        </motion.h4>
        <motion.ul
          className="mt-5 flex flex-wrap items-center justify-evenly px-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {partnerMobile.map((logo, index) => (
            <motion.li
              key={logo}
              className="mb-8 flex h-12 min-w-[70px] justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.03, duration: 0.5 }}
            >
              <Image src={logo} alt="" width={100} height={50} className="h-12 w-auto" />
            </motion.li>
          ))}
        </motion.ul>
        <motion.p
          className="text-fluid-xs mt-10 text-center font-medium text-[#4d4d4d]"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {t('partner_cta_text')}
        </motion.p>
        <motion.div
          className="mt-17 flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7, duration: 0.8 }}
        >
          <Link
            href="/contact#contact"
            className="flex h-10 w-33 items-center justify-center rounded-[20px] bg-[#1a74bf] text-white"
          >
            {t('contact_us')}
          </Link>
        </motion.div>
        <motion.span
          className="text-fluid-sm mt-6 mb-15 block text-center text-[#8d8d8d]"
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
        .swiper-pagination {
          display: flex;
          justify-content: center;
          gap: 12px;
        }
        .swiper-pagination-bullet {
          width: 10px;
          height: 10px;
          background: transparent;
          border: 1px solid #fff;
          opacity: 1;
          margin: 0;
        }
        .swiper-pagination-bullet-active {
          background: #fff;
        }
      `}
      </style>
    </div>
  );
}
