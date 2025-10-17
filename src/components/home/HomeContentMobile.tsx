/* eslint-disable react-hooks-extra/no-direct-set-state-in-use-effect */
'use client';

import { motion } from 'framer-motion';
import { useCallback, useEffect, useRef, useState } from 'react';

// 声明微信 JS Bridge 类型
declare global {
  interface Window {
    WeixinJSBridge?: {
      invoke: (action: string, params: unknown, callback: (res: unknown) => void) => void;
    };
  }
  const WeixinJSBridge: Window['WeixinJSBridge'];
}

const videoList = [
  {
    title: '康复',
    src: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/6D96ctRFNanQF08m.mp4',
    progress: 0,
  },
  {
    title: '健康',
    src: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/NTi6JrDHd0twGhxH.mp4',
    progress: 0,
  },
  {
    title: '教育',
    src: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/Qsec88NMmmk2Z5Ec.mp4',
    progress: 0,
  },
  {
    title: '具身智能',
    src: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/tVUqvnogP4AHE7Cr.mp4',
    progress: 0,
  },
];

export function HomeContentMobile() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playCount, setPlayCount] = useState(0);
  const [videoLink, setVideoLink] = useState('');
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
    // 检测是否在微信浏览器中
    const isWeChat = /MicroMessenger/i.test(navigator.userAgent);

    if (isWeChat) {
      // 在微信中需要等待微信 JS Bridge 准备好
      if (typeof WeixinJSBridge !== 'undefined') {
        playNextVideo();
      } else {
        document.addEventListener('WeixinJSBridgeReady', () => {
          playNextVideo();
        });
      }
    } else {
      playNextVideo();
    }
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
    <div className="relative h-full">
      <div className="relative h-full overflow-hidden">
        <motion.div
          className="absolute top-[60%] left-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center text-white"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.h1
            className="text-[40px] leading-none font-bold"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          >
            脑机科技
          </motion.h1>
          <motion.p
            className="mt-5 text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
          >
            开启生命更多可能性
          </motion.p>
        </motion.div>
        {videoLink && (
          <video
            ref={videoRef}
            src={videoLink}
            muted
            playsInline
            webkit-playsinline="true"
            x5-video-player-type="h5-page"
            onEnded={playNextVideo}
            onTimeUpdate={handleTimeUpdate}
            className="h-full w-full object-cover"
          />
        )}
      </div>

      {/* 视频标签和进度条 */}
      <motion.ul
        className="absolute bottom-[62px] left-0 flex w-full justify-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
      >
        {videoList.map((item, index) => (
          <motion.li
            key={item.title}
            className="ml-[22px] flex flex-col items-center text-white first:ml-0"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: 0.8 + index * 0.1,
              ease: 'easeOut',
            }}
          >
            <span>{item.title}</span>
            <s className="mt-1 h-1 w-[50px] flex-shrink-0 overflow-hidden rounded-sm bg-[rgba(227,227,227,0.4)] no-underline">
              <u
                className="block h-full bg-white transition-all duration-300 ease-linear"
                style={{ width: `${videoProgress[index]}%` }}
              />
            </s>
          </motion.li>
        ))}
      </motion.ul>
    </div>
  );
}
