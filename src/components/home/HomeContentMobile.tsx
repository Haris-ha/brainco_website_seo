/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useCallback, useEffect, useRef, useState } from 'react';

// 声明微信 JS Bridge 类型
declare global {
  // eslint-disable-next-line ts/consistent-type-definitions
  interface Window {
    WeixinJSBridge?: {
      invoke: (action: string, params: unknown, callback: (res: unknown) => void) => void;
    };
  }
  const WeixinJSBridge: Window['WeixinJSBridge'];
}

const videoList = [
  {
    titleKey: 'video_category_rehabilitation',
    src: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/6D96ctRFNanQF08m.mp4',
    progress: 0,
  },
  {
    titleKey: 'video_category_health',
    src: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/NTi6JrDHd0twGhxH.mp4',
    progress: 0,
  },
  {
    titleKey: 'video_category_education',
    src: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/Qsec88NMmmk2Z5Ec.mp4',
    progress: 0,
  },
  {
    titleKey: 'video_category_embodied',
    src: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/tVUqvnogP4AHE7Cr.mp4',
    progress: 0,
  },
];

export function HomeContentMobile() {
  const t = useTranslations('Home');
  const video1Ref = useRef<HTMLVideoElement>(null);
  const video2Ref = useRef<HTMLVideoElement>(null);
  const [playCount, setPlayCount] = useState(0);
  const [video1Link, setVideo1Link] = useState('');
  const [video2Link, setVideo2Link] = useState('');
  const [activeVideoIndex, setActiveVideoIndex] = useState(0); // 0 for video1, 1 for video2
  const [videoProgress, setVideoProgress] = useState(videoList.map(() => 0));

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
    // 检测是否在微信浏览器中
    const isWeChat = /MicroMessenger/i.test(navigator.userAgent);

    if (isWeChat) {
      // 在微信中需要等待微信 JS Bridge 准备好
      if (typeof WeixinJSBridge !== 'undefined') {
        playNextVideo();
        return undefined;
      } else {
        const handleReady = () => {
          playNextVideo();
        };
        document.addEventListener('WeixinJSBridgeReady', handleReady);
        return () => {
          document.removeEventListener('WeixinJSBridgeReady', handleReady);
        };
      }
    } else {
      playNextVideo();
      return undefined;
    }
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
    <main className="relative h-full">
      <header className="relative h-full min-h-[720px] overflow-hidden bg-white">
        <motion.div
          className="absolute top-[60%] left-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center !text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-fluid-5xl text-center leading-none font-bold md:scale-120"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            {t('hero_title_1_mobile')}
          </motion.h1>
          <motion.p
            className="text-fluid-3xl mt-6 md:scale-120"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            {t('hero_title_2_mobile')}
          </motion.p>
        </motion.div>
        {/* 双视频元素交替显示，避免切换闪烁 */}
        <video
          ref={video1Ref}
          {...(video1Link && { src: video1Link })}
          muted
          playsInline
          webkit-playsinline="true"
          x5-video-player-type="h5-page"
          onEnded={playNextVideo}
          onTimeUpdate={handleTimeUpdate}
          className="absolute inset-0 h-[720px] w-full object-cover transition-opacity duration-500"
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
          webkit-playsinline="true"
          x5-video-player-type="h5-page"
          onEnded={playNextVideo}
          onTimeUpdate={handleTimeUpdate}
          className="absolute inset-0 h-[720px] w-full object-cover transition-opacity duration-500"
          style={{
            opacity: activeVideoIndex === 1 && video2Link ? 1 : 0,
            pointerEvents: activeVideoIndex === 1 ? 'auto' : 'none',
          }}
          aria-label="BrainCo 产品应用场景视频 / BrainCo product application video"
        />
      </header>

      {/* 视频标签和进度条 */}
      <motion.ul
        className="absolute bottom-[140px] left-0 flex w-full justify-center md:scale-120"
        aria-label="视频分类导航 / Video category navigation"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        {videoList.map((item, index) => (
          <motion.li
            key={item.titleKey}
            className="ml-[22px] flex flex-col items-center !text-white first:ml-0"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8 + index * 0.1,
              ease: 'easeOut',
            }}
          >
            <span>{t(item.titleKey)}</span>
            <s className="mt-1 h-1.5 w-[50px] flex-shrink-0 overflow-hidden rounded-sm bg-[rgba(227,227,227,0.4)] no-underline">
              <u
                className="block h-full bg-white transition-all duration-300 ease-linear"
                style={{ width: `${videoProgress[index]}%` }}
              />
            </s>
          </motion.li>
        ))}
      </motion.ul>
    </main>
  );
}
