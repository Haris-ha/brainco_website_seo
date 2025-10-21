'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';

export default function BrainAIContent() {
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

  // Show/hide controls on mouse move
  useEffect(() => {
    if (!isPlaying) {
      setShowControls(true);
      return () => {}; // Cleanup function for consistency
    }

    let timeout: NodeJS.Timeout;
    const handleMouseMove = () => {
      setShowControls(true);
      clearTimeout(timeout);
      timeout = setTimeout(() => {
        setShowControls(false);
      }, 2000);
    };

    window.addEventListener('mousemove', handleMouseMove);
    handleMouseMove(); // Initial call to show controls

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      clearTimeout(timeout);
    };
  }, [isPlaying]);

  // Swiper carousel images
  const carouselImages = [
    'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/gYtSBcs1sJnydb80.webp',
    'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/SN51AxXyMowYx9sP.webp',
    'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/MLnKzQ5YfJhEmuha.webp',
  ];

  return (
    <div>
      {/* Hero Banner */}
      <section className="relative flex items-end justify-end">
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
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/YPGiDMpdC7RZb8kN.webp"
            alt="BrainAI Banner"
            className="w-full"
          />
        </picture>
        <div className="absolute right-[150px] bottom-[200px] w-[520px] text-white">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-fluid-6xl mb-4 font-normal"
          >
            {t('hero_title')}
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-fluid-7xl mb-4 font-normal"
          >
            {t('hero_subtitle')}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-fluid-lg mt-[48px]"
          >
            {t('hero_description')}
          </motion.p>
        </div>
      </section>

      {/* Video Section */}
      <div
        className="relative cursor-pointer"
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
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/K9hDdccdM7rYrPwA.mov"
            type="video/mp4"
          />
          <track kind="captions" srcLang="zh" label="中文" />
        </video>
        {/* Controls overlay - shows when not playing or when mouse moves */}
        {showControls && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="pointer-events-none absolute right-[120px] bottom-[62px] flex w-[560px] flex-col items-end"
          >
            <h3 className="text-fluid-4xl w-full text-left font-normal text-white">
              {t('video_title')}
            </h3>
            <h4 className="text-fluid-4xl w-full text-left font-normal text-white">
              {t('video_subtitle')}
            </h4>
            <motion.button
              type="button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={(e) => {
                e.stopPropagation();
                handlePlay();
              }}
              className="pointer-events-auto mt-[66px] flex h-[78px] w-[206px] cursor-pointer items-center justify-center rounded-[39px] border border-white text-white transition-all hover:scale-105"
            >
              <span className="text-fluid-lg">
                {isPlaying ? '暂停' : t('video_button')}
              </span>
              <Image
                src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/FE534C95-5853-44D5-ABDB-13596C84DA5A.png"
                alt={isPlaying ? 'Pause' : 'Play'}
                width={22}
                height={22}
                className="ml-5"
                style={{ transform: isPlaying ? 'scale(0.8)' : 'scale(1)' }}
              />
            </motion.button>
          </motion.div>
        )}
        {/* Click anywhere indicator when playing */}
        {isPlaying && !showControls && (
          <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-opacity hover:opacity-100">
            <div className="rounded-full bg-black/50 p-4">
              <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z" />
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Three Core Sections */}
      <section className="mt-[144px] flex flex-wrap justify-center">
        <h2 className="text-fluid-5xl mb-[84px] w-full text-center font-normal">
          {t('sections_title')}
        </h2>

        {/* Section 1 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5 }}
          className="relative mr-[58px] w-[470px] rounded-[50px] border-2 px-8 pt-[60px] pb-8"
          style={{ borderColor: '#7CC0D9' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5">
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/K6DRed4HiSAPG3jX.webp"
              alt="Icon 1"
              width={40}
              height={40}
            />
          </div>
          <h3 className="text-fluid-3xl mb-[30px] text-center font-normal">
            {t('section1_title')}
          </h3>
          <p className="text-fluid-lg mb-[26px]">{t('section1_desc1')}</p>
          <p className="text-fluid-lg mb-[26px]">{t('section1_desc2')}</p>
          <p className="text-fluid-lg mb-[26px]">{t('section1_desc3')}</p>
          <p className="text-fluid-lg">{t('section1_desc4')}</p>
        </motion.div>

        {/* Section 2 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="relative mr-[58px] w-[470px] rounded-[50px] border-2 px-8 pt-[60px] pb-8"
          style={{ borderColor: '#843D99' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5">
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/j4cts2sYGTmph83W.webp"
              alt="Icon 2"
              width={40}
              height={40}
            />
          </div>
          <h3 className="text-fluid-3xl mb-[30px] text-center font-normal">
            {t('section2_title')}
          </h3>
          <p className="text-fluid-lg mb-[26px]">{t('section2_desc1')}</p>
          <p className="text-fluid-lg mb-[26px]">{t('section2_desc2')}</p>
          <p className="text-fluid-lg mb-[26px]">{t('section2_desc3')}</p>
          <p className="text-fluid-lg">{t('section2_desc4')}</p>
        </motion.div>

        {/* Section 3 */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="relative w-[470px] rounded-[50px] border-2 px-8 pt-[60px] pb-8"
          style={{ borderColor: '#3199EA' }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white px-5">
            <Image
              src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/NZPz4zQrGBw5DieD.webp"
              alt="Icon 3"
              width={40}
              height={40}
            />
          </div>
          <h3 className="text-fluid-3xl mb-[30px] text-center font-normal">
            {t('section3_title')}
          </h3>
          <p className="text-fluid-lg mb-[26px]">{t('section3_desc1')}</p>
          <p className="text-fluid-lg">{t('section3_desc2')}</p>
        </motion.div>
      </section>

      {/* Course Scheme Section */}
      <section className="mt-[175px]">
        <h2 className="text-fluid-5xl mb-[62px] text-center font-normal">
          {t('scheme_title')}
        </h2>

        {/* Introductory Course */}
        <div className="mx-auto mb-[86px] flex h-[270px] w-[1324px] max-w-full items-center justify-center rounded-[135px]" style={{ background: 'linear-gradient(131deg, #FFF2F1 0%, #FFFDF4 52%, #F1FEF6 100%, #F3FFF7 100%)' }}>
          <div className="flex w-[455px] flex-col items-center justify-center">
            <p className="text-fluid-3xl mb-5">{t('course_intro_title')}</p>
            <p className="text-fluid-3xl">{t('course_intro_grade')}</p>
          </div>
          <div className="flex flex-1 flex-wrap">
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <motion.span
                key={num}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mr-[54px] mb-10 flex h-[84px] w-[226px] items-center justify-center rounded-[42px] bg-white text-center shadow-[7px_7px_5px_1px_rgba(206,206,206,0.75)] last:mb-0"
                style={{ border: '5px solid rgba(230, 188, 188, 0.65)' }}
              >
                <i className="text-fluid-3xl font-normal not-italic">
                  {t(`course_intro_${num}` as any)}
                </i>
              </motion.span>
            ))}
          </div>
        </div>

        {/* Advanced Course */}
        <div className="mx-auto flex h-[270px] w-[1324px] max-w-full items-center justify-center rounded-[135px]" style={{ background: 'linear-gradient(131deg, #FFF2F1 0%, #FFFDF4 52%, #F1FEF6 100%, #F3FFF7 100%)' }}>
          <div className="flex w-[455px] flex-col items-center justify-center">
            <p className="text-fluid-3xl mb-5">{t('course_advanced_title')}</p>
            <p className="text-fluid-3xl">{t('course_advanced_grade')}</p>
          </div>
          <div className="flex flex-1 flex-wrap">
            {[1, 2, 3, 4, 5, 6].map((num, index) => (
              <motion.span
                key={num}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className="mr-[54px] mb-10 flex h-[84px] w-[226px] items-center justify-center rounded-[42px] bg-white text-center shadow-[7px_7px_5px_1px_rgba(206,206,206,0.75)] last:mb-0"
                style={{ border: '5px solid rgba(205, 234, 211, 0.65)' }}
              >
                <i className="text-fluid-3xl font-normal not-italic">
                  {t(`course_advanced_${num}` as any)}
                </i>
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Camp Section */}
      <section className="mt-[120px]">
        <h2 className="text-fluid-5xl mb-9 text-center font-normal">
          {t('leader_title')}
        </h2>
        <p className="text-fluid-2xl mx-auto mb-[98px] w-[1130px] text-center">
          {t('leader_description')}
        </p>

        {/* Swiper Carousel */}
        <div className="mx-auto w-[1400px] max-w-full">
          <Swiper
            slidesPerView={1.2}
            spaceBetween={50}
            centeredSlides
            initialSlide={1}
          >
            {carouselImages.map(img => (
              <SwiperSlide key={img}>
                <Image
                  src={img}
                  alt="BrainAI Leadership camp"
                  width={1200}
                  height={700}
                  className="w-full rounded-2xl"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="mt-[130px] mb-[150px]">
        <h2 className="text-fluid-5xl mb-[84px] w-full text-center font-normal">
          {t('challenge_title')}
        </h2>

        <div className="flex justify-center">
          {/* Challenge 1 - Mars Rescue */}
          <div className="mr-[310px] w-[444px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
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
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/xhz6h3sT0CWdTkGE.webp"
                  alt="Mars Rescue"
                  className="w-full"
                />
              </picture>
            </motion.div>
            <h3 className="text-fluid-5xl my-[10px] text-center font-normal">
              {t('challenge1_title')}
            </h3>
            <p className="text-fluid-lg mb-5 leading-relaxed">
              {t('challenge1_desc1')}
            </p>
            <p className="text-fluid-lg leading-relaxed">
              {t('challenge1_desc2')}
            </p>
          </div>

          {/* Challenge 2 - Future City */}
          <div className="w-[444px]">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
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
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/R7bc6npQRwi3RC0t.webp"
                  alt="Future City"
                  className="w-full"
                />
              </picture>
            </motion.div>
            <h3 className="text-fluid-5xl my-[10px] text-center font-normal">
              {t('challenge2_title')}
            </h3>
            <p className="text-fluid-lg mb-5 leading-relaxed">
              {t('challenge2_desc1')}
            </p>
            <p className="text-fluid-lg mb-5 leading-relaxed">
              {t('challenge2_desc2')}
            </p>
            <p className="text-fluid-lg leading-relaxed">
              {t('challenge2_desc3')}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
