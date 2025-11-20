/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
'use client';

import { motion } from 'framer-motion';
import { useLocale, useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

import { ProductImageWithLabel } from '@/components/common/ProductImageWithLabel';

const imgPath = 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/';

const videoList = [
  {
    titleKey: 'video_category_rehabilitation',
    src: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/2AB431c65bhdriQN.webm',
    progress: 0,
  },
  {
    titleKey: 'video_category_health',
    src: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/x1pcXdPCmQ3K6Ht7.webm',
    progress: 0,
  },
  {
    titleKey: 'video_category_education',
    src: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/kiS7xyHWpYastA1y.webm',
    progress: 0,
  },
  {
    titleKey: 'video_category_embodied',
    src: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/wDEtsqZd5USGCIxL.mp4',
    progress: 0,
  },
];

const productList = [
  {
    img: `${imgPath}KJgdiOXZcRnGYhDH.webp`,
    hoverImg: `${imgPath}vJBVfyIDRSmEpieZ.webp`,
    nameKey: 'product_oxyzen_name',
    descKey: 'product_oxyzen_desc',
    router: '/health/oxyzen',
    id: 3,
  },
  {
    img: `${imgPath}sTFJhVGYtwbOmvBN.webp`,
    hoverImg: `${imgPath}nGjyEWDFRvCrwald.webp`,
    nameKey: 'product_brain_robotics_name',
    descKey: 'product_brain_robotics_desc',
    router: '/products/brain-robotics',
    id: 4,
  },
  {
    img: `${imgPath}oMVDmWAPurnEGZiw.webp`,
    hoverImg: `${imgPath}MIhtXTQFnymLuCwS.webp`,
    nameKey: 'product_brain_ai_name',
    descKey: 'product_brain_ai_desc',
    router: '/education/brain-ai',
    id: 0,
  },
  {
    img: `${imgPath}DJqKOvlTBcFyidSf.webp`,
    hoverImg: `${imgPath}BAGWcXOZRtdxgpsk.webp`,
    nameKey: 'product_easleep_name',
    descKey: 'product_easleep_desc',
    router: '/health/easleep',
    id: 2,
  },
  {
    img: `${imgPath}iBCIDeObGYNVWhEq.webp`,
    hoverImg: `${imgPath}aNIUvPigSeFGEbHW.webp`,
    nameKey: 'product_mobius_name',
    descKey: 'product_mobius_desc',
    router: '/products/mobius',
    id: 5,
  },
];

const mapping = [
  'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/TUeKRMYdsOGVimDl.webp',
  'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/cxMRpdAjaigFnsTQ.webp',
  'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/fHFJgmNEMaAYKnqS.webp',
  'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/dDKcSPIrTpgCzWju.webp',
  'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/fPOUdkmgBEyHYzqZ.webp',
  'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/rPELUfgCVOodRMAj.webp',
];

const nerveList = [
  {
    img: `${imgPath}tpoWHUmdFJbXQeRI.webp`,
    nameKey: 'product_focus_zen_name',
    descKey: 'product_focus_zen_desc',
    router: '/health/focus-zen',
  },
  {
    img: `${imgPath}tpoWHUmdFJbXQeRI.webp`,
    nameKey: 'product_focus_xin_name',
    descKey: 'product_focus_xin_desc',
    router: '/health/focus-xin',
  },
  {
    img: `${imgPath}QqcGWLgUfmjhPZEz.webp`,
    nameKey: 'product_starkids_name',
    descKey: 'product_starkids_desc',
    router: '/health/starkids',
  },
];

export function HomeContent() {
  const t = useTranslations('Home');
  const locale = useLocale();
  const router = useRouter();
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [playCount, setPlayCount] = useState(0);
  const [video1Link, setVideo1Link] = useState('');
  const [video2Link, setVideo2Link] = useState('');
  const [activeVideoIndex, setActiveVideoIndex] = useState(0); // 0 for video1, 1 for video2
  const [videoProgress, setVideoProgress] = useState(videoList.map(() => 0));
  const [productCount, setProductCount] = useState(0);
  const [expandType, setExpandType] = useState<'dexterous' | 'nerve' | null>(
    null,
  );

  const playNextVideo = useCallback(() => {
    setPlayCount((prevCount) => {
      const nextIndex = prevCount % videoList.length;
      const nextVideo = videoList[nextIndex];

      // 更新进度状态
      setVideoProgress((prev) => {
        const newProgress = [...prev];

        // 如果是新一轮循环（回到第1个），重置所有进度为0
        if (nextIndex === 0 && prevCount > 0) {
          return videoList.map(() => 0);
        }

        // 将上一个视频的进度设置为 100%（保持高亮）
        if (prevCount > 0) {
          const prevIndex = (prevCount - 1) % videoList.length;
          newProgress[prevIndex] = 100;
        }

        // 当前视频的进度设置为 0（即将开始播放）
        newProgress[nextIndex] = 0;

        return newProgress;
      });

      if (nextVideo) {
        // 确定下一个要使用的视频元素
        const nextVideoIndex = prevCount % 2;
        const nextVideoRef = nextVideoIndex === 0 ? video1Ref : video2Ref;

        // 设置视频源
        if (nextVideoIndex === 0) {
          setVideo1Link(nextVideo.src);
        } else {
          setVideo2Link(nextVideo.src);
        }

        // 等待视频加载后播放并切换显示
        setTimeout(() => {
          if (nextVideoRef.current) {
            nextVideoRef.current.play().catch(() => {
              // 自动播放失败时静默处理
            });
            // 切换激活的视频索引，触发淡入淡出效果
            setActiveVideoIndex(nextVideoIndex);
          }
        }, 10);
      }

      return prevCount + 1;
    });
  }, []);

  useEffect(() => {
    playNextVideo();
  }, [playNextVideo]);

  const handleTimeUpdate = useCallback(
    (e: React.SyntheticEvent<HTMLVideoElement>) => {
      const video = e.currentTarget;

      // 只有当前激活的视频才更新进度
      const isVideo1Active = activeVideoIndex === 0 && video === video1Ref.current;
      const isVideo2Active = activeVideoIndex === 1 && video === video2Ref.current;

      if (!isVideo1Active && !isVideo2Active) {
        return;
      }

      const duration = video.duration;
      const currentTime = video.currentTime;
      const currentIndex = (playCount - 1 + videoList.length) % videoList.length;

      // 更新当前视频的进度
      const newProgress = [...videoProgress];
      newProgress[currentIndex] = (currentTime / duration) * 100;
      setVideoProgress(newProgress);
    },
    [playCount, videoProgress, activeVideoIndex],
  );

  return (
    <>
      <main>
        {/* Hero 视频轮播区域 */}
        <header className="relative bg-white">
          <div className="relative aspect-video max-h-screen w-full overflow-hidden">
            <motion.h1
              className="text-fluid-7xl absolute top-[55%] left-1/2 z-10 w-[90%] -translate-x-1/2 -translate-y-1/2 text-center !text-white md:top-[60%] md:w-auto"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
            >
              <motion.span
                className="inline-block whitespace-nowrap"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
              >
                {t('hero_title_1')}
              </motion.span>
              <br />
              <motion.span
                className="inline-block whitespace-nowrap"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
              >
                {t('hero_title_2')}
              </motion.span>
            </motion.h1>
            {/* 双视频元素交替显示，避免切换闪烁 */}
            <video
              ref={video1Ref}
              {...(video1Link && { src: video1Link })}
              muted
              playsInline
              onEnded={playNextVideo}
              onTimeUpdate={handleTimeUpdate}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
              style={{
                opacity: activeVideoIndex === 0 && video1Link ? 1 : 0,
                pointerEvents: activeVideoIndex === 0 ? 'auto' : 'none',
              }}
              aria-label="BrainCo 产品应用场景视频 / BrainCo product application video"
            />
            <video
              ref={video2Ref}
              {...(video2Link && { src: video2Link })}
              muted
              playsInline
              onEnded={playNextVideo}
              onTimeUpdate={handleTimeUpdate}
              className="absolute inset-0 h-full w-full object-cover transition-opacity duration-500"
              style={{
                opacity: activeVideoIndex === 1 && video2Link ? 1 : 0,
                pointerEvents: activeVideoIndex === 1 ? 'auto' : 'none',
              }}
              aria-label="BrainCo 产品应用场景视频 / BrainCo product application video"
            />
          </div>

          {/* 视频标签和进度条 */}
          <motion.ul
            className="absolute bottom-[100px] left-1/2 z-10 flex -translate-x-1/2 md:bottom-[120px]"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
            aria-label="视频分类导航 / Video category navigation"
          >
            {videoList.map((item, index) => (
              <motion.li
                key={item.titleKey}
                className="ml-6 flex flex-col items-center justify-center first:ml-0 md:ml-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 1.1 + index * 0.1,
                  ease: 'easeOut',
                }}
              >
                <span className="text-xl whitespace-nowrap !text-white md:text-2xl">{t(item.titleKey)}</span>
                <s
                  className={`mt-[18px] flex h-2 overflow-hidden rounded bg-[rgba(227,227,227,0.4)] no-underline ${
                    index === 3 ? 'w-[180px]' : 'w-[120px] md:w-[148px]'
                  }`}
                >
                  <u
                    className="h-2 rounded bg-white no-underline transition-all duration-300 ease-linear"
                    style={{ width: `${videoProgress[index]}%` }}
                  />
                </s>
              </motion.li>
            ))}
          </motion.ul>
        </header>

        {/* 产品展示区域 */}
        <section className="flex items-start justify-center overflow-hidden bg-white px-16 pt-[84px] pb-[46px]" aria-labelledby="products-section-title">
          <motion.div
            className="mr-[60px] h-auto w-[300px] flex-shrink-0"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              ease: 'easeOut',
            }}
            animate={{
              y: productCount !== 0 ? [0, -10, 0] : 0,
              scale: productCount !== 0 ? [1, 1.02, 1] : 1,
            }}
          >
            <Image
              src={mapping[productCount] ?? mapping[0] ?? ''}
              alt="BrainCo 脑机接口产品展示 - 智能仿生与健康设备 / BrainCo brain-computer interface products - Intelligent bionics and health devices"
              width={380}
              height={400}
              className="h-auto w-full transition-opacity duration-300"
            />
          </motion.div>

          <div
            className="w-[800px] flex-shrink-0"
            onMouseLeave={() => {
              setExpandType(null);
              setProductCount(0);
            }}
          >
            <h2 id="products-section-title" className="text-fluid-6xl mb-[52px] font-bold text-[#333]">
              {t('bci_section_title')}
            </h2>
            <div className="">
              <p className="mb-[30px] text-xl text-[#595757]">
                {t('bci_section_desc_1')}
              </p>
              <p className="mb-[30px] text-xl text-[#595757]">
                {t('bci_section_desc_2')}
              </p>
            </div>

            {/* 产品网格 */}
            <motion.ul
              className="mt-16 grid max-w-[1200px] grid-cols-3 gap-y-16"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6 }}
              aria-label="BrainCo 产品列表 / BrainCo product list"
            >
              {productList.map((item, index) => {
                const titleClass = 'mb-2 text-2xl leading-tight font-semibold text-[#0B1324]';
                const descClass = 'text-lg leading-snug text-[#5F6472]';

                // 如果路由是 /products/revo1，不创建链接（根据原始逻辑）
                if (item.router === '/products/revo1') {
                  return (
                    <motion.li
                      key={item.img}
                      className={`cursor-target group/product flex items-center text-lg ${index === 1 || index === 4 ? 'mr-8' : ''}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.3 }}
                      transition={{
                        duration: 0.6,
                        delay: index * 0.1,
                        ease: 'easeOut',
                      }}
                      whileHover={{
                        scale: 1.03,
                        transition: { duration: 0.3 },
                      }}
                      onMouseEnter={() => {
                        if (item.id !== undefined) {
                          setProductCount(item.id);
                        }
                        setExpandType(null);
                      }}
                      onMouseLeave={() => setProductCount(0)}
                    >
                      <div className="product-image-container-140 relative mr-6 w-[100px] flex-shrink-0 overflow-hidden" style={{ height: 'calc(100px * 150 / 140)' }}>
                        <div
                          className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity group-hover/product:opacity-0"
                          style={{
                            backgroundImage: `url(${item.img})`,
                          }}
                        />
                        <div
                          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-0 transition-opacity group-hover/product:opacity-100"
                          style={{
                            backgroundImage: `url(${item.hoverImg})`,
                          }}
                        />
                      </div>
                      <div
                        className={`flex flex-1 flex-col ${
                          index === 1 || index === 4 ? '-ml-8' : ''
                        }`}
                      >
                        <h3 className={titleClass}>
                          {t(item.nameKey)}
                        </h3>
                        <p
                          className={descClass}
                          dangerouslySetInnerHTML={{ __html: t(item.descKey) }}
                        />
                      </div>
                    </motion.li>
                  );
                }

                // 其他产品使用 Link 组件，确保可爬取
                const href = `/${locale}${item.router}`;
                return (
                  <motion.li
                    key={item.img}
                    className={`cursor-target group/product flex items-center text-lg ${index === 1 || index === 4 ? 'mr-8' : ''}`}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{
                      duration: 0.6,
                      delay: index * 0.1,
                      ease: 'easeOut',
                    }}
                  >
                    <Link
                      href={href}
                      className="flex w-full cursor-pointer items-center !text-black hover:!text-black"
                      onMouseEnter={() => {
                        if (item.id !== undefined) {
                          setProductCount(item.id);
                        }
                        setExpandType(null);
                      }}
                      onMouseLeave={() => setProductCount(0)}
                    >
                      <div className="product-image-container-180 relative mr-5 w-[100px] flex-shrink-0 overflow-hidden" style={{ height: 'calc(100px * 150 / 140)' }}>
                        <div
                          className="absolute inset-0 bg-contain bg-center bg-no-repeat transition-opacity duration-150 ease-out group-hover/product:opacity-0"
                          style={{
                            backgroundImage: `url(${item.img})`,
                          }}
                        />
                        <div
                          className="absolute inset-0 bg-contain bg-center bg-no-repeat opacity-0 transition-opacity duration-150 ease-in group-hover/product:opacity-100"
                          style={{
                            backgroundImage: `url(${item.hoverImg})`,
                          }}
                        />
                      </div>
                      <div
                        className={`flex flex-1 flex-col ${
                          index === 1 || index === 4 ? '-ml-4' : ''
                        }`}
                      >
                        <h3 className={titleClass}>
                          {t(item.nameKey)}
                        </h3>
                        <p
                          className={descClass}
                          dangerouslySetInnerHTML={{ __html: t(item.descKey) }}
                        />
                      </div>
                    </Link>
                  </motion.li>
                );
              })}

              {/* 工业灵巧手 */}
              <motion.li
                className="cursor-target flex cursor-pointer items-center text-lg"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{
                  duration: 0.6,
                  delay: productList.length * 0.1,
                  ease: 'easeOut',
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                onMouseEnter={() => setExpandType('dexterous')}
              >
                <div className="relative mr-5 w-[100px] flex-shrink-0 overflow-hidden" style={{ height: 'calc(100px * 150 / 140)' }}>
                  <Image
                    src={`${imgPath}pKlkrsJEDIgBCYRy.webp`}
                    alt="BrainCo 工业灵巧手 - 智能仿生手部假肢 / BrainCo industrial dexterous hand - Intelligent bionic prosthetic hand"
                    width={140}
                    height={160}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-100 ease-in-out ${expandType === 'dexterous' ? 'opacity-0' : 'opacity-100'}`}
                  />
                  <Image
                    src={`${imgPath}uRsplIedTmtaAUYk.webp`}
                    alt="BrainCo 工业灵巧手特写 / BrainCo dexterous hand close-up"
                    width={140}
                    height={160}
                    className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-100 ease-in-out ${expandType === 'dexterous' ? 'opacity-100' : 'opacity-0'}`}
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-2 text-2xl leading-tight font-semibold text-[#0B1324]">
                    {t('product_dexterous_name')}
                  </h3>
                  <p
                    className="text-lg leading-snug font-normal text-[#5F6472]"
                    dangerouslySetInnerHTML={{ __html: t('product_dexterous_desc') }}
                  />
                </div>
              </motion.li>
            </motion.ul>

            {/* 神经调控 - 与工业灵巧手共用右侧展开区域 */}
            <motion.div
              className="flex h-[204px] max-w-[1200px] items-center justify-between"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{
                duration: 0.6,
                delay: (productList.length + 1) * 0.1,
                ease: 'easeOut',
              }}
            >
              <motion.div
                className="cursor-target flex w-[280px] flex-shrink-0 cursor-pointer items-center transition-opacity duration-200"
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                onMouseEnter={() => {
                  setExpandType('nerve');
                  setProductCount(1);
                }}
              >
                <div className="mr-3 flex h-40 w-[110px] items-center justify-center">
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/kojfrMNnQOelFbAI.webp"
                    alt={`${t('nerve_modulation_name')} - BrainCo 神经调控设备 / BrainCo neuromodulation device`}
                    width={140}
                    height={160}
                    className="h-auto w-auto"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <h3 className="mb-2 text-2xl leading-tight font-semibold text-[#0B1324]">
                    {t('nerve_modulation_name')}
                  </h3>
                  <p className="text-lg leading-snug font-normal text-[#5F6472]">{t('nerve_modulation_desc')}</p>
                </div>
              </motion.div>

              {expandType === 'dexterous' && (
                <motion.div
                  className="flex h-[180px] w-fit flex-shrink-0 items-center gap-4 rounded-lg bg-[#f4f4f4] px-6 py-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => setExpandType('dexterous')}
                >
                  <div
                    role="button"
                    tabIndex={0}
                    className="cursor-target flex h-full w-[180px] cursor-pointer overflow-hidden rounded-2xl transition-transform duration-200 hover:scale-105"
                    onClick={() => router.push('/products/revo1')}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        router.push('/products/revo1');
                      }
                    }}
                    aria-label={`查看 ${t('product_revo1_name')} 产品详情 / View ${t('product_revo1_name')} details`}
                  >
                    <ProductImageWithLabel
                      src="https://www.brainco.cn/news-images/stark.png"
                      alt={`${t('product_revo1_name')} - BrainCo 智能灵巧手 / BrainCo intelligent dexterous hand`}
                      label={t('product_revo1_name')}
                      width={140}
                      height={140}
                      isMenu={false}
                    />
                  </div>
                  <div
                    role="button"
                    tabIndex={0}
                    className="cursor-target flex h-full w-[180px] cursor-pointer overflow-hidden rounded-2xl transition-transform duration-200 hover:scale-105"
                    onClick={() => router.push('/products/revo2')}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        router.push('/products/revo2');
                      }
                    }}
                    aria-label={`查看 ${t('product_revo2_name')} 产品详情 / View ${t('product_revo2_name')} details`}
                  >
                    <ProductImageWithLabel
                      src="https://www.brainco.cn/news-images/revo.png"
                      alt={`${t('product_revo2_name')} - BrainCo 智能灵巧手 / BrainCo intelligent dexterous hand`}
                      label={t('product_revo2_name')}
                      width={140}
                      height={140}
                      isMenu={false}
                    />
                  </div>
                </motion.div>
              )}

              {expandType === 'nerve' && (
                <motion.div
                  className="flex h-[180px] w-fit flex-shrink-0 items-center rounded-lg bg-[#f4f4f4] p-4"
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 20 }}
                  transition={{ duration: 0.3 }}
                  onMouseEnter={() => {
                    setExpandType('nerve');
                    setProductCount(1);
                  }}
                >
                  {nerveList.map(item => (
                    <div
                      key={item.nameKey}
                      role="button"
                      tabIndex={0}
                      className="cursor-target flex h-full w-[160px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl transition-transform duration-200 hover:scale-105"
                      onClick={() => router.push(item.router)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          router.push(item.router);
                        }
                      }}
                    >
                      <div className="flex items-center justify-center">
                        <Image
                          src={item.img}
                          alt={`${t(item.nameKey)} - BrainCo 神经调控设备 / BrainCo neuromodulation device`}
                          width={80}
                          height={80}
                          className="max-h-[80px] w-auto"
                        />
                      </div>
                      <div className="flex w-full flex-col items-center px-2">
                        <h4 className="text-base font-bold text-[#555]">
                          {t(item.nameKey)}
                        </h4>
                        <span className="text-center text-sm text-[#666]">{t(item.descKey)}</span>
                      </div>
                    </div>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>
        </section>

        {/* 预加载图片 */}
        <div className="hidden" aria-hidden="true">
          {mapping.map(img => (
            <Image key={img} src={img} alt="BrainCo 脑机接口产品展示 - 智能仿生与健康设备 / BrainCo brain-computer interface products - Intelligent bionics and health devices" width={1} height={1} role="presentation" />
          ))}
          {/* 预加载产品悬浮图片 */}
          {productList.map(item => (
            <div key={`hover-${item.img}`} style={{ backgroundImage: `url(${item.hoverImg})` }} />
          ))}
        </div>
      </main>
    </>
  );
}
