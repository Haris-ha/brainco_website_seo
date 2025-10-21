'use client';

import type { Swiper as SwiperType } from 'swiper';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
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
  const t = useTranslations('Revo1');
  const [playStatus, setPlayStatus] = useState(false);
  const [swiperIndex, setSwiperIndex] = useState(0);
  const [qualityVideoStates, setQualityVideoStates] = useState([false, false, false]);
  const bannerVideoRef = useRef<HTMLVideoElement>(null);
  const qualityVideoRefs = useRef<(HTMLVideoElement | null)[]>([]);

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
        <div className="absolute bottom-48 left-0 flex w-full flex-col items-center !text-white">
          <motion.h2
            className="text-fluid-6xl font-bold"
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            {t('product_name')}
            {' '}
            <span className="font-bold">{t('product_model')}</span>
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
              href="/company/contact#contact"
              className="text-fluid-3xl flex h-[90px] w-[264px] items-center justify-center rounded-[45px] bg-[#1a74bf] !text-white transition-transform hover:scale-105"
            >
              {t('contact_us')}
            </Link>
            <a
              href="https://www.brainco-hz.com/docs/revolimb-hand/revo1/parameters.html"
              target="_blank"
              rel="noopener noreferrer"
              className="text-fluid-3xl flex h-[90px] w-[264px] items-center justify-center rounded-[45px] border border-white !text-white transition-transform hover:scale-105"
            >
              {t('documentation')}
            </a>
          </motion.div>
        </div>
        <button
          type="button"
          onClick={handlePlay}
          className="absolute right-16 bottom-16 h-[72px] w-[72px] cursor-pointer transition-transform hover:scale-110"
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
      <section className="bg-black py-20 text-white">
        <motion.h4
          className="text-fluid-5xl text-center font-medium"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('industry_title')}
        </motion.h4>
        <div className="mx-auto mt-32 flex items-end justify-center text-[#c7cdd4]">
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
                <Image src={item.icon} alt="" width={80} height={80} className="mr-6" />
                <div className="mr-16 w-[362px]">
                  <h4 className="text-fluid-2xl leading-tight font-medium">
                    {t(`industry_${index + 1}_title` as any)}
                  </h4>
                  <p
                    className="text-fluid-lg mt-7 leading-relaxed"
                    dangerouslySetInnerHTML={{ __html: t(`industry_${index + 1}_desc` as any) }}
                  />
                </div>
                <ul className="flex">
                  {item.ability.map((subInfo, subIndex) => (
                    <li
                      key={`${index}-${subIndex}`}
                      className="flex min-w-[200px] flex-col"
                    >
                      <h5 className="text-fluid-2xl">{subInfo.title}</h5>
                      <div className="mt-2 flex items-end leading-none">
                        <span className="text-fluid-6xl relative top-1.5 pr-2 font-bold">
                          {subInfo.data}
                        </span>
                        <s className="text-fluid-lg no-underline">{subInfo.unit}</s>
                        {subInfo.extend && (
                          <p className="text-fluid-2xl ml-3 font-medium">{subInfo.extend}</p>
                        )}
                        {subInfo.connect && (
                          <b className="text-fluid-6xl relative top-1.5 ml-3 font-bold">
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
            className="ml-6 flex flex-col"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/OpdcfbPwGNAqTaol.webp"
              alt=""
              width={328}
              height={328}
              className="ml-6"
            />
            <p className="text-fluid-2xl mt-16 pl-[150px] text-[#c7cdd4]">
              {t('product_weight_label')}
            </p>
            <h4 className="text-fluid-6xl flex items-end pl-[150px] font-bold text-[#c7cdd4]">
              {t('product_weight_value')}
              {' '}
              <span className="text-fluid-lg relative bottom-4 ml-2">
                {t('product_weight_unit')}
              </span>
            </h4>
            <p className="text-fluid-2xl mt-2 pl-[150px] text-[#c7cdd4]">
              {t('active_joints_label')}
            </p>
            <h4 className="text-fluid-6xl flex items-end pl-[150px] font-bold text-[#c7cdd4]">
              {t('active_joints_value')}
              {' '}
              <span className="text-fluid-lg relative bottom-4 ml-2">
                {t('active_joints_unit')}
              </span>
            </h4>
          </motion.div>
        </div>
      </section>

      {/* Ability Showcase Section */}
      <section className="bg-black py-52 pb-25 text-white">
        <div className="mx-auto w-[960px]">
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
          <Swiper
            modules={[Pagination, Autoplay]}
            pagination={{ clickable: true }}
            onSlideChange={handleSlideChange}
            className="pb-25"
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
        </div>
      </section>

      {/* Product Version Section */}
      <section className="bg-black py-20 text-white">
        <div className="mx-auto w-[1200px] border-t border-[#666] pt-20">
          <motion.h2
            className="text-fluid-5xl mb-24 text-center font-bold"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {t('version_title')}
          </motion.h2>
          <div className="h-[116px]">
            <ul className="flex justify-center gap-20 bg-black pb-10 pl-[120px]">
              <li className="text-fluid-4xl flex h-[76px] w-[494px] items-center justify-center rounded-xl bg-white/10 text-white">
                {t('version_basic')}
              </li>
              <li className="text-fluid-4xl flex h-[76px] w-[494px] items-center justify-center rounded-xl bg-white/10 text-white">
                {t('version_tactile')}
              </li>
            </ul>
          </div>
          <motion.div
            className="mx-auto mt-15 w-[1416px] pb-70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            {versionSpecs.map((category, catIndex) => (
              <div key={category.category}>
                <dt className="text-fluid-4xl mt-32 mb-20 border-b border-b-[#333] pb-3 leading-none first:mt-0">
                  <h4>{category.category}</h4>
                </dt>
                {category.specs.map((spec, specIndex) => (
                  <dd
                    key={`${catIndex}-${specIndex}`}
                    className="text-fluid-3xl mt-14 flex first:mt-0"
                  >
                    <span className="mr-32 w-[320px] flex-[320px_0_0]">{spec.label}</span>
                    <span className="flex-1">{spec.basic}</span>
                    <span className="flex-1">{spec.tactile}</span>
                  </dd>
                ))}
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="relative mx-auto flex h-full w-screen justify-between bg-white px-40 pt-20 text-black">
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
            className="text-fluid-2xl mx-auto mt-60 -mr-20 w-full text-[#070502]"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {t('experience_desc')}
          </motion.p>
          <motion.ul
            className="mx-auto mt-20 -mr-20 flex h-40 w-full gap-2"
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
                  width={200}
                  height={144}
                  className="h-36 w-auto"
                />
              </motion.li>
            ))}
          </motion.ul>
        </div>
        <Image
          src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/PRZobAtBlFTjULiC.webp"
          alt=""
          width={890}
          height={890}
          // className="absolute top-15 right-0 h-full"
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
        <div className="flex justify-center">
          <div className="mr-10 flex w-[720px] flex-col">
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
                  className="absolute top-1/2 left-1/2 z-10 h-15 w-15 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110"
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
              className="absolute top-1/2 left-1/2 z-10 h-15 w-15 -translate-x-1/2 -translate-y-1/2 cursor-pointer transition-transform hover:scale-110"
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
              className="h-full w-[460px] rounded-3xl object-cover"
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
          className="text-fluid-5xl mt-20 text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {t('partner_title')}
        </motion.h4>
        <motion.ul
          className="mx-auto mt-21 flex w-[1300px] flex-wrap justify-between"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          {partner.map((logo, index) => (
            <motion.li
              key={logo}
              className="mb-22 flex h-35 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.05, duration: 0.5 }}
            >
              <Image src={logo} alt="" width={200} height={140} className="max-h-full" />
            </motion.li>
          ))}
        </motion.ul>
        <motion.p
          className="text-fluid-2xl text-center font-medium"
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
            href="/company/contact#contact"
            className="text-fluid-3xl flex h-16 w-66 items-center justify-center rounded-[32px] bg-[#1a74bf] text-white transition-transform hover:scale-105"
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
        .swiper-pagination {
          display: flex;
          justify-content: center;
          gap: 32px;
        }
        .swiper-pagination-bullet {
          width: 24px;
          height: 24px;
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
