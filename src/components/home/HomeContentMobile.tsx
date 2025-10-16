'use client';

import { useEffect, useRef, useState } from 'react';

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
  }, []);

  const playNextVideo = () => {
    const nextIndex = playCount % videoList.length;
    const nextVideo = videoList[nextIndex];
    if (nextVideo) {
      setVideoLink(nextVideo.src);
    }
    setPlayCount(playCount + 1);

    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {
          // 自动播放失败时静默处理
        });
      }
    }, 10);
  };

  const handleTimeUpdate = (e: React.SyntheticEvent<HTMLVideoElement>) => {
    const video = e.currentTarget;
    const duration = video.duration;
    const currentTime = video.currentTime;
    const currentIndex = (playCount - 1 + videoList.length) % videoList.length;

    const newProgress = [...videoProgress];
    newProgress[currentIndex] = (currentTime / duration) * 100;
    setVideoProgress(newProgress);
  };

  return (
    <div className="relative h-full">
      <div className="relative h-full overflow-hidden">
        <div className="absolute top-[60%] left-1/2 z-10 flex w-full -translate-x-1/2 -translate-y-1/2 flex-col items-center text-white">
          <h1 className="text-[40px] leading-none font-bold">脑机科技</h1>
          <p className="mt-5 text-2xl">开启生命更多可能性</p>
        </div>
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
      <ul className="absolute bottom-[62px] left-0 flex w-full justify-center">
        {videoList.map((item, index) => (
          <li
            key={item.title}
            className="ml-[22px] flex flex-col items-center text-white first:ml-0"
          >
            <span>{item.title}</span>
            <s className="mt-1 h-1 w-[50px] flex-shrink-0 overflow-hidden rounded-sm bg-[rgba(227,227,227,0.4)] no-underline">
              <u
                className="block h-full bg-white"
                style={{ width: `${videoProgress[index]}%` }}
              />
            </s>
          </li>
        ))}
      </ul>
    </div>
  );
}
