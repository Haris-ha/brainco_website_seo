/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';

const imgPath = 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/';

const videoList = [
  {
    title: '康复',
    src: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/2AB431c65bhdriQN.webm',
    progress: 0,
  },
  {
    title: '健康',
    src: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/x1pcXdPCmQ3K6Ht7.webm',
    progress: 0,
  },
  {
    title: '教育',
    src: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/kiS7xyHWpYastA1y.webm',
    progress: 0,
  },
  {
    title: '具身智能',
    src: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/wDEtsqZd5USGCIxL.mp4',
    progress: 0,
  },
];

const productList = [
  {
    img: `${imgPath}KJgdiOXZcRnGYhDH.webp`,
    hoverImg: `${imgPath}vJBVfyIDRSmEpieZ.webp`,
    name: '仰憩',
    desc: '一个用于冥想和睡<br/>眠的智能系统',
    router: '/health/oxyzen',
    id: 3,
  },
  {
    img: `${imgPath}sTFJhVGYtwbOmvBN.webp`,
    hoverImg: `${imgPath}nGjyEWDFRvCrwald.webp`,
    name: '智能仿生手',
    desc: '智能假肢手，集成脑机接口<br/>技术与AI算法',
    router: '/products/brain-robotics',
    id: 4,
  },
  {
    img: `${imgPath}oMVDmWAPurnEGZiw.webp`,
    hoverImg: `${imgPath}MIhtXTQFnymLuCwS.webp`,
    name: 'Brain AI',
    desc: '面向STEM教育的工业级<br/>可组装假手套件',
    router: '/education/brain-ai',
    id: 0,
  },
  {
    img: `${imgPath}DJqKOvlTBcFyidSf.webp`,
    hoverImg: `${imgPath}BAGWcXOZRtdxgpsk.webp`,
    name: '深海豚',
    desc: '一个用于睡眠的脑机接口智能安睡仪',
    router: '/health/easleep',
    id: 2,
  },
  {
    img: `${imgPath}iBCIDeObGYNVWhEq.webp`,
    hoverImg: `${imgPath}aNIUvPigSeFGEbHW.webp`,
    name: '智能仿生腿',
    desc: '一款先进的智能假肢膝关<br/>节，采用源自脑机接口研究<br/>的控制算法，带来更精确的<br/>运动体验',
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
    name: 'FocusZen',
    desc: '正念舒压系统',
    router: '/health/focus-zen',
  },
  {
    img: `${imgPath}tpoWHUmdFJbXQeRI.webp`,
    name: '专注欣',
    desc: '脑机接口注意力训练系统',
    router: '/health/focus-xin',
  },
  {
    img: `${imgPath}QqcGWLgUfmjhPZEz.webp`,
    name: '开星果',
    desc: '脑机接口社交沟通训练系统',
    router: '/health/starkids',
  },
];

export function HomeContent() {
  const router = useRouter();
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playCount, setPlayCount] = useState(0);
  const [videoLink, setVideoLink] = useState('');
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
        setVideoLink(nextVideo.src);
      }

      setTimeout(() => {
        if (videoRef.current) {
          videoRef.current.play().catch(() => {
            // 自动播放失败时静默处理
          });
        }
      }, 10);

      return prevCount + 1;
    });
  }, []);

  useEffect(() => {
    playNextVideo();
  }, [playNextVideo]);

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    const duration = video.duration;
    const currentTime = video.currentTime;
    const currentIndex = (playCount - 1 + videoList.length) % videoList.length;

    // 更新当前视频的进度
    const newProgress = [...videoProgress];
    newProgress[currentIndex] = (currentTime / duration) * 100;
    setVideoProgress(newProgress);
  };

  return (
    <>
      {/* 视频轮播区域 */}
      <div className="relative bg-white">
        <div className="relative max-h-screen overflow-hidden">
          <motion.h1
            className="text-fluid-7xl absolute top-[60%] left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-white"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: 'easeOut' }}
          >
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
            >
              脑机科技，开启
            </motion.span>
            <br />
            <motion.span
              className="inline-block"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: 'easeOut' }}
            >
              生命更多可能性
            </motion.span>
          </motion.h1>
          {videoLink && (
            <video
              ref={videoRef}
              src={videoLink}
              muted
              playsInline
              onEnded={playNextVideo}
              onTimeUpdate={handleTimeUpdate}
              className="w-full"
            />
          )}
        </div>

        {/* 视频标签和进度条 */}
        <motion.ul
          className="absolute bottom-[120px] left-1/2 z-10 flex -translate-x-1/2"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9, ease: 'easeOut' }}
        >
          {videoList.map((item, index) => (
            <motion.li
              key={item.title}
              className="ml-10 flex flex-col items-center justify-center first:ml-0"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 1.1 + index * 0.1,
                ease: 'easeOut',
              }}
            >
              <span className="text-2xl text-white">{item.title}</span>
              <s className="mt-[18px] flex h-2 w-[148px] overflow-hidden rounded bg-[rgba(227,227,227,0.4)] no-underline 2xl:w-[180px]">
                <u
                  className="h-2 rounded bg-white no-underline transition-all duration-300 ease-linear"
                  style={{ width: `${videoProgress[index]}%` }}
                />
              </s>
            </motion.li>
          ))}
        </motion.ul>
      </div>

      {/* 产品展示区域 */}
      <div className="flex items-center justify-center overflow-hidden bg-white px-8 pt-[84px] pb-[46px]">
        <motion.div
          className="mr-[60px] h-auto w-[300px] flex-shrink-0"
          animate={{
            y: productCount !== 0 ? [0, -10, 0] : 0,
            scale: productCount !== 0 ? [1, 1.02, 1] : 1,
          }}
          transition={{
            duration: 0.6,
            ease: 'easeInOut',
          }}
        >
          <Image
            src={mapping[productCount] ?? mapping[0] ?? ''}
            alt="产品展示"
            width={380}
            height={400}
            className="h-auto w-full transition-opacity duration-300"
          />
        </motion.div>

        <div className="w-[980px] flex-shrink-0">
          <h2 className="text-fluid-6xl mb-[52px] font-bold text-[#333]">
            BrainCo与脑机接口技术
          </h2>
          <p className="mb-[30px] text-xl text-[#595757]">
            作为国内首个脑机接口领域独角兽，BrainCo强脑科技致力于脑机接口技术底层技术的突破，通过在大脑和外部设备之间建立信号传送通路实现两者信息交换的方式为残疾人康复、孤独症等脑疾病提供了解决方案，目前已有多款产品上市。
          </p>
          <p className="mb-[30px] text-xl text-[#595757]">
            未来，BrainCo强脑科技将继续深耕非侵入式脑机接口领域，为抑郁症、阿尔茨海默症等疾病提供解决方案。
          </p>

          {/* 产品网格 */}
          <motion.ul
            className="mt-16 grid max-w-[1200px] grid-cols-3 gap-x-6 gap-y-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {productList.map((item, index) => (
              <motion.li
                key={item.img}
                className="group/product flex cursor-pointer items-center text-lg"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: 0.5 + index * 0.1,
                  ease: 'easeOut',
                }}
                whileHover={{
                  scale: 1.03,
                  transition: { duration: 0.3 },
                }}
                onMouseEnter={() => {
                  if (item.id) {
                    setProductCount(item.id);
                  }
                }}
                onMouseLeave={() => setProductCount(0)}
                onClick={() => {
                  if (item.router !== '/products/dexterous') {
                    router.push(item.router);
                  }
                }}
              >
                <div className="relative mr-3 h-40 w-[140px] flex-shrink-0 overflow-hidden">
                  <Image
                    src={item.img}
                    alt={item.name}
                    width={140}
                    height={160}
                    className="absolute inset-0 h-full w-full object-cover transition-opacity duration-100 ease-in-out group-hover/product:opacity-0"
                  />
                  <Image
                    src={item.hoverImg}
                    alt={`${item.name} hover`}
                    width={140}
                    height={160}
                    className="absolute inset-0 h-full w-full object-cover opacity-0 transition-opacity duration-100 ease-in-out group-hover/product:opacity-100"
                  />
                </div>
                <div className="flex flex-1 flex-col">
                  <h5 className="mb-2 text-2xl leading-tight font-medium">
                    {item.name}
                  </h5>
                  <p
                    className="text-lg leading-snug"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              </motion.li>
            ))}

            {/* 工业灵巧手 */}
            <motion.li
              className="flex cursor-pointer items-center text-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: 0.5 + productList.length * 0.1,
                ease: 'easeOut',
              }}
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              onMouseEnter={() => setExpandType('dexterous')}
              onMouseLeave={() => setExpandType(null)}
            >
              <div className="relative mr-3 h-40 w-[140px] flex-shrink-0 overflow-hidden">
                <Image
                  src={`${imgPath}pKlkrsJEDIgBCYRy.webp`}
                  alt="工业灵巧手"
                  width={140}
                  height={160}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-100 ease-in-out ${expandType === 'dexterous' ? 'opacity-0' : 'opacity-100'}`}
                />
                <Image
                  src={`${imgPath}uRsplIedTmtaAUYk.webp`}
                  alt="工业灵巧手 hover"
                  width={140}
                  height={160}
                  className={`absolute inset-0 h-full w-full object-cover transition-opacity duration-100 ease-in-out ${expandType === 'dexterous' ? 'opacity-100' : 'opacity-0'}`}
                />
              </div>
              <div className="flex flex-1 flex-col">
                <h5 className="mb-2 text-2xl leading-tight font-medium">
                  工业灵巧手
                </h5>
                <p className="text-lg leading-snug">
                  屡获殊荣，符合人体工学，
                  <br />
                  适应性强，操作流畅
                </p>
              </div>
            </motion.li>
          </motion.ul>

          {/* 神经调控 - 与工业灵巧手共用右侧展开区域 */}
          <motion.div
            className={`mt-8 flex h-[204px] max-w-[1200px] items-center ${expandType === 'nerve' ? 'justify-start' : 'justify-between'}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.5 + (productList.length + 1) * 0.1,
              ease: 'easeOut',
            }}
          >
            <motion.div
              className="flex w-[310px] flex-shrink-0 cursor-pointer items-center transition-opacity duration-200"
              whileHover={{
                scale: 1.03,
                transition: { duration: 0.3 },
              }}
              onMouseEnter={() => {
                setExpandType('nerve');
                setProductCount(1);
              }}
              onMouseLeave={() => {
                setExpandType(null);
                setProductCount(0);
              }}
            >
              <div className="mr-3 flex h-40 w-[140px] items-center justify-center">
                <Image
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/kojfrMNnQOelFbAI.webp"
                  alt="神经调控"
                  width={140}
                  height={160}
                  className="h-auto w-auto"
                />
              </div>
              <div className="flex flex-1 flex-col">
                <h5 className="mb-2 text-2xl leading-tight font-medium">
                  神经调控
                </h5>
                <p className="text-lg leading-snug">头戴设备</p>
              </div>
            </motion.div>

            {expandType === 'dexterous' && (
              <motion.div
                className="flex h-[180px] w-fit flex-shrink-0 items-center gap-4 rounded-lg bg-[#f4f4f4] p-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                <div
                  role="button"
                  tabIndex={0}
                  className="flex h-full w-[180px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl bg-white transition-transform duration-200 hover:scale-105"
                  onClick={() => router.push('/products/dexterous')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      router.push('/products/dexterous');
                    }
                  }}
                >
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/wUey39BYXL6A2K5j.webp"
                    alt="Revo 1"
                    width={180}
                    height={180}
                    className="h-full w-full object-cover"
                  />
                </div>
                <div
                  role="button"
                  tabIndex={0}
                  className="flex h-full w-[180px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl bg-white transition-transform duration-200 hover:scale-105"
                  onClick={() => router.push('/products/revo2')}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      router.push('/products/revo2');
                    }
                  }}
                >
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/zvQPGjp6x8gNCbUk.webp"
                    alt="Revo 2"
                    width={180}
                    height={180}
                    className="h-full w-full object-cover"
                  />
                </div>
              </motion.div>
            )}

            {expandType === 'nerve' && (
              <motion.div
                className="flex h-[180px] w-fit flex-shrink-0 items-center gap-4 rounded-lg bg-[#f4f4f4] p-4"
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 20 }}
                transition={{ duration: 0.3 }}
              >
                {nerveList.map(item => (
                  <div
                    key={item.name}
                    role="button"
                    tabIndex={0}
                    className="flex h-full w-[150px] cursor-pointer flex-col items-center justify-center overflow-hidden rounded-2xl bg-white transition-transform duration-200 hover:scale-105"
                    onClick={() => router.push(item.router)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        router.push(item.router);
                      }
                    }}
                  >
                    <div className="flex flex-1 items-center justify-center">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={100}
                        height={100}
                        className="max-h-[100px] w-auto"
                      />
                    </div>
                    <div className="flex flex-col items-center px-2 pt-2 pb-3">
                      <span className="text-sm font-bold text-[#555]">
                        {item.name}
                      </span>
                      <span className="text-xs text-[#555]">{item.desc}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </motion.div>
        </div>
      </div>

      {/* 预加载图片 */}
      <div className="hidden">
        {mapping.map(img => (
          <Image key={img} src={img} alt="" width={1} height={1} />
        ))}
      </div>
    </>
  );
}
