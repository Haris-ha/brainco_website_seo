'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function BrainAIContentMobile() {
  const t = useTranslations('BrainAI');
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);

  // Handle video play/pause toggle
  const handlePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setIsPlaying(false);
      } else {
        videoRef.current.play();
        setIsPlaying(true);
      }
    }
  };

  // Handle video click to pause/play
  const handleVideoClick = () => {
    handlePlay();
  };

  // Auto-pause on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (isPlaying && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isPlaying]);

  // Show/hide controls on touch
  useEffect(() => {
    if (!isPlaying) {
      setShowControls(true);
      return () => {}; // Cleanup function for consistency
    }

    let timeout: NodeJS.Timeout;
    const handleTouch = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    };

    window.addEventListener('touchstart', handleTouch);
    handleTouch(); // Initial call to show controls

    return () => {
      window.removeEventListener('touchstart', handleTouch);
      clearTimeout(timeout);
    };
  }, [isPlaying]);

  // Swiper carousel images - mobile optimized
  const carouselImages = [
    'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/gYtSBcs1sJnydb80.webp?x-oss-process=image/resize,w_375',
    'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/YbSqgt8yIFUvjLMH.webp',
    'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/MLnKzQ5YfJhEmuha.webp?x-oss-process=image/resize,w_375',
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative w-full pt-24">
        <picture>
          <source
            media="(min-width: 900px)"
            srcSet="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/YPGiDMpdC7RZb8kN.webp"
          />
          <source
            media="(max-width: 900px)"
            srcSet="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/WAtmJrHn95X8Dd5x.webp"
          />
          <img
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/WAtmJrHn95X8Dd5x.webp"
            alt="BrainAI Banner"
            className="w-full"
          />
        </picture>
        <div className="absolute right-0 bottom-0 left-0 flex flex-col items-center justify-center">
          <div
            className="mb-40 w-[90%] rounded-3xl px-8 py-8 text-center text-white"
            style={{
              background: 'linear-gradient(to top, rgba(0, 0, 0, 0.25) 0%, rgba(0, 0, 0, 0.15) 70%, transparent 100%)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
            }}
          >
            <motion.h5
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-fluid-4xl mb-2 text-left font-normal drop-shadow-lg"
            >
              {t('hero_title')}
            </motion.h5>
            <motion.h4
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-fluid-3xl mb-2 text-left font-normal drop-shadow-lg"
            >
              {t('hero_subtitle')}
            </motion.h4>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-fluid-base mx-auto mt-[10px] w-full text-left drop-shadow-md"
            >
              {t('hero_description')}
            </motion.p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <div
        className="relative mt-[10px]"
        onClick={handleVideoClick}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            handleVideoClick();
          }
        }}
        role="button"
        tabIndex={0}
        aria-label={isPlaying ? '暂停视频' : '播放视频'}
      >
        <video
          ref={videoRef}
          className="w-full"
          poster="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/KHrCVEKngEWuXAoA.webp"
          playsInline
          webkit-playsinline="true"
          disablePictureInPicture
          onEnded={() => setIsPlaying(false)}
        >
          <source
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/K9hDdccdM7rYrPwAgz.mov"
            type="video/mp4"
          />
          <track kind="captions" srcLang="zh" label="中文" />
        </video>
        {/* Controls overlay - shows when not playing or when touched */}
        {showControls && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute top-0 left-0 flex h-full w-full flex-col items-center justify-center text-white"
          >
            <h4 className="text-fluid-xl">{t('video_title')}</h4>
            <h4 className="text-fluid-xl">{t('video_subtitle')}</h4>
            <motion.button
              type="button"
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                handlePlay();
              }}
              className="pointer-events-auto mt-[10px] flex h-[33px] items-center justify-center rounded-[22px] border border-white px-[14px]"
            >
              <span className="text-fluid-base">
                {isPlaying ? '暂停' : t('video_button')}
              </span>
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/FE534C95-5853-44D5-ABDB-13596C84DA5A.png"
                alt={isPlaying ? 'Pause' : 'Play'}
                width={12}
                height={12}
                className="ml-2"
                style={{ transform: isPlaying ? 'scale(0.8)' : 'scale(1)' }}
              />
            </motion.button>
          </motion.div>
        )}

        {/* Tap anywhere indicator when playing */}
        {isPlaying && !showControls && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="rounded-full bg-black/50 p-3">
              <svg className="h-8 w-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Three Core Sections */}
      <section className="mt-[36px] flex flex-wrap px-[15px]">
        <h2 className="text-fluid-2xl mb-[25px] w-full text-center font-normal">
          {t('sections_title')}
        </h2>

        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="relative mb-[25px] w-full rounded-[20px] border p-5"
          style={{ borderColor: '#7CC0D9' }}
        >
          <div className="absolute top-0 left-1/2 flex h-[26px] w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white px-1">
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/K6DRed4HiSAPG3jX.webp"
              alt="Icon 1"
              width={20}
              height={20}
            />
          </div>
          <h5 className="text-fluid-2xl my-[15px] pl-[10px] font-normal">
            {t('section1_title')}
          </h5>
          <p className="text-fluid-base mb-2 leading-relaxed">{t('section1_desc1')}</p>
          <p className="text-fluid-base mb-2 leading-relaxed">{t('section1_desc2')}</p>
          <p className="text-fluid-base mb-2 leading-relaxed">{t('section1_desc3')}</p>
          <p className="text-fluid-base leading-relaxed">{t('section1_desc4')}</p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="relative mb-[25px] w-full rounded-[20px] border p-5"
          style={{ borderColor: '#843D99' }}
        >
          <div className="absolute top-0 left-1/2 flex h-[26px] w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white px-1">
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/j4cts2sYGTmph83W.webp"
              alt="Icon 2"
              width={26}
              height={26}
            />
          </div>
          <h5 className="text-fluid-2xl my-[15px] pl-[10px] font-normal">
            {t('section2_title')}
          </h5>
          <p className="text-fluid-base mb-2 leading-relaxed">{t('section2_desc1')}</p>
          <p className="text-fluid-base mb-2 leading-relaxed">{t('section2_desc2')}</p>
          <p className="text-fluid-base mb-2 leading-relaxed">{t('section2_desc3')}</p>
          <p className="text-fluid-base leading-relaxed">{t('section2_desc4')}</p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="relative w-full rounded-[20px] border p-5"
          style={{ borderColor: '#3199EA' }}
        >
          <div className="absolute top-0 left-1/2 flex h-[26px] w-[48px] -translate-x-1/2 -translate-y-1/2 items-center justify-center bg-white px-1">
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/NZPz4zQrGBw5DieD.webp"
              alt="Icon 3"
              width={48}
              height={26}
            />
          </div>
          <h5 className="text-fluid-2xl my-[15px] pl-[10px] font-normal">
            {t('section3_title')}
          </h5>
          <p className="text-fluid-base mb-2 leading-relaxed">{t('section3_desc1')}</p>
          <p className="text-fluid-base leading-relaxed">{t('section3_desc2')}</p>
        </motion.div>
      </section>

      {/* Course Scheme Section */}
      <section className="mt-[50px]">
        <h2 className="text-fluid-2xl mb-[25px] text-center font-normal">
          {t('scheme_title')}
        </h2>

        {/* Introductory Course */}
        <div
          className="mx-auto mb-[15px] flex h-full w-[330px] flex-col rounded-[72px] py-8"
          style={{ background: 'linear-gradient(131deg, #FFF2F1 0%, #FFFDF4 52%, #F1FEF6 100%, #F3FFF7 100%)' }}
        >
          <div className="text-fluid-base mb-[10px] text-center">
            <p>{t('course_intro_title')}</p>
            <p>{t('course_intro_grade')}</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {[1, 2, 3, 4, 5, 6].map(num => (
              <span
                key={num}
                className="mr-[22px] mb-[6px] flex h-full w-[68px] items-center justify-center rounded-lg border-2 border-[#e6bcbc] bg-white py-2 text-center shadow-[7px_7px_5px_1px_rgba(206,206,206,0.75)] last:mr-0 [&:nth-child(3n)]:mr-0"
              >
                <i className="text-fluid-base scale-[0.8] font-normal not-italic">
                  {t(`course_intro_${num}` as any)}
                </i>
              </span>
            ))}
          </div>
        </div>

        {/* Advanced Course */}
        <div
          className="mx-auto flex h-full w-[330px] flex-col rounded-[72px] py-8"
          style={{ background: 'linear-gradient(131deg, #FFF2F1 0%, #FFFDF4 52%, #F1FEF6 100%, #F3FFF7 100%)' }}
        >
          <div className="text-fluid-base mb-[10px] text-center">
            <p>{t('course_advanced_title')}</p>
            <p>{t('course_advanced_grade')}</p>
          </div>
          <div className="flex flex-wrap justify-center">
            {[1, 2, 3, 4, 5, 6].map(num => (
              <span
                key={num}
                className="mr-[22px] mb-[6px] flex h-full w-[68px] items-center justify-center rounded-lg border-2 border-[#e6bcbc] bg-white py-2 text-center shadow-[7px_7px_5px_1px_rgba(206,206,206,0.75)] last:mr-0 [&:nth-child(3n)]:mr-0"
              >
                <i className="text-fluid-base scale-[0.8] font-normal not-italic">
                  {t(`course_advanced_${num}` as any)}
                </i>
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Camp Section */}
      <section className="mt-[46px]">
        <h2 className="text-fluid-3xl mb-4 text-center font-normal">
          {t('leader_title')}
        </h2>
        <p className="text-fluid-base mx-auto mb-5 mb-10 px-20 text-center">
          {t('leader_description')}
        </p>

        {/* Swiper Carousel */}
        <Swiper
          slidesPerView={1.2}
          spaceBetween={10}
          centeredSlides
          initialSlide={1}
        >
          {carouselImages.map(img => (
            <SwiperSlide key={img}>
              <Image
                src={img}
                alt="BrainAI Leadership camp"
                width={365}
                height={280}
                className="w-full"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </section>

      {/* Challenge Section */}
      <section className="mt-[50px] mb-[50px]">
        <h2 className="text-fluid-3xl mb-6 text-center font-normal">
          {t('challenge_title')}
        </h2>

        <div className="mx-auto w-[310px]">
          {/* Challenge 1 - Mars Rescue */}
          <div className="mb-[35px]">
            <picture>
              <source
                media="(max-width: 900px)"
                srcSet="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/EB7JwADDOhaAVyMB.webp"
              />
              <source
                media="(min-width: 900px)"
                srcSet="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/xhz6h3sT0CWdTkGE.webp"
              />
              <img
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/EB7JwADDOhaAVyMB.webp"
                alt="Mars Rescue"
                className="w-full"
              />
            </picture>
            <h4 className="text-fluid-2xl my-[18px] text-center font-normal">
              {t('challenge1_title')}
            </h4>
            <p className="text-fluid-lg mt-[10px] leading-relaxed">
              {t('challenge1_desc1')}
            </p>
            <p className="text-fluid-lg mt-[10px] leading-relaxed">
              {t('challenge1_desc2')}
            </p>
          </div>

          {/* Challenge 2 - Future City */}
          <div className="mb-[35px]">
            <picture>
              <source
                media="(max-width: 900px)"
                srcSet="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/MnMfBWQKQqjqRUBm.webp"
              />
              <source
                media="(min-width: 900px)"
                srcSet="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/R7bc6npQRwi3RC0t.webp"
              />
              <img
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/MnMfBWQKQqjqRUBm.webp"
                alt="Future City"
                className="w-full"
              />
            </picture>
            <h4 className="text-fluid-2xl my-[18px] text-center font-normal">
              {t('challenge2_title')}
            </h4>
            <p className="text-fluid-lg mt-[10px] leading-relaxed">
              {t('challenge2_desc1')}
            </p>
            <p className="text-fluid-lg mt-[10px] leading-relaxed">
              {t('challenge2_desc2')}
            </p>
            <p className="text-fluid-lg mt-[10px] leading-relaxed">
              {t('challenge2_desc3')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
