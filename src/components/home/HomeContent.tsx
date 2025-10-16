'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useRef, useState } from 'react';

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

  useEffect(() => {
    playNextVideo();
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
    <>
      {/* 视频轮播区域 */}
      <div className="relative bg-white">
        <div className="relative max-h-screen overflow-hidden">
          <h1
            className="absolute top-[60%] left-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-[80px] text-white"
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-easing="ease-in-out"
          >
            脑机科技，开启
            <br />
            生命更多可能性
          </h1>
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
        <ul className="absolute bottom-[100px] left-1/2 z-10 flex -translate-x-1/2">
          {videoList.map((item, index) => (
            <li
              key={item.title}
              className="ml-10 flex flex-col items-center justify-center first:ml-0"
            >
              <span className="text-2xl text-white">{item.title}</span>
              <s className="mt-[18px] flex h-2 w-[200px] overflow-hidden rounded bg-[rgba(227,227,227,0.4)] no-underline">
                <u
                  className="h-2 rounded bg-white no-underline"
                  style={{ width: `${videoProgress[index]}%` }}
                />
              </s>
            </li>
          ))}
        </ul>
      </div>

      {/* 产品展示区域 */}
      <div className="flex items-center justify-center overflow-hidden bg-white px-0 pt-[84px] pb-[46px]">
        <div className="mr-[90px] h-auto w-[380px] flex-shrink-0">
          <Image
            src={mapping[productCount] ?? mapping[0] ?? ''}
            alt="产品展示"
            width={380}
            height={600}
            className="h-auto w-full"
          />
        </div>

        <div className="w-[980px] flex-shrink-0">
          <h2 className="mb-[52px] text-[60px] font-bold text-[#333]">
            BrainCo与脑机接口技术
          </h2>
          <p className="mb-[30px] text-xl text-[#595757]">
            作为国内首个脑机接口领域独角兽，BrainCo强脑科技致力于脑机接口技术底层技术的突破，通过在大脑和外部设备之间建立信号传送通路实现两者信息交换的方式为残疾人康复、孤独症等脑疾病提供了解决方案，目前已有多款产品上市。
          </p>
          <p className="mb-[30px] text-xl text-[#595757]">
            未来，BrainCo强脑科技将继续深耕非侵入式脑机接口领域，为抑郁症、阿尔茨海默症等疾病提供解决方案。
          </p>

          {/* 产品网格 */}
          <ul className="grid w-[1200px] grid-cols-[310px_405px_405px] gap-6">
            {productList.map((item, index) => (
              <li
                key={item.img}
                className={`group/product flex cursor-pointer items-center text-lg ${index === 2 ? '-ml-[50px]' : ''}`}
                style={
                  {
                    '--bg': `url(${item.img})`,
                    '--hover': `url(${item.hoverImg})`,
                  } as React.CSSProperties
                }
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
                <div
                  className="mr-2.5 h-40 w-[140px] flex-shrink-0 bg-cover bg-center group-hover/product:bg-[image:var(--hover)]"
                  style={{ backgroundImage: `var(--bg)` }}
                />
                <div className="name">
                  <h5 className="mb-2 text-2xl font-medium">{item.name}</h5>
                  <p
                    className="text-lg"
                    dangerouslySetInnerHTML={{ __html: item.desc }}
                  />
                </div>
              </li>
            ))}

            {/* 工业灵巧手 */}
            <li
              className="group relative flex cursor-pointer items-center text-lg"
              style={
                {
                  '--bg': `url(${imgPath}pKlkrsJEDIgBCYRy.webp)`,
                  '--hover': `url(${imgPath}uRsplIedTmtaAUYk.webp)`,
                } as React.CSSProperties
              }
            >
              <div
                className="mr-2.5 h-40 w-[140px] flex-shrink-0 bg-cover bg-center transition-all group-hover:bg-[image:var(--hover)]"
                style={{ backgroundImage: `var(--bg)` }}
              />
              <div className="name group-hover:hidden">
                <h5 className="mb-2 text-2xl font-medium">工业灵巧手</h5>
                <p className="text-lg">
                  屡获殊荣，符合人体工学，
                  <br />
                  适应性强，操作流畅
                </p>
              </div>
              <div className="absolute top-1/2 left-0 hidden -translate-y-1/2 flex-col group-hover:flex">
                <div
                  className="mb-4 w-[216px] cursor-pointer rounded-2xl bg-[#f5f5f5]"
                  onClick={() => router.push('/products/dexterous')}
                >
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/wUey39BYXL6A2K5j.webp"
                    alt="Revo 1"
                    width={216}
                    height={200}
                    className="h-auto w-full"
                  />
                </div>
                <div
                  className="w-[216px] cursor-pointer rounded-2xl bg-[#f5f5f5]"
                  onClick={() => router.push('/products/revo2')}
                >
                  <Image
                    src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/rove2/zvQPGjp6x8gNCbUk.webp"
                    alt="Revo 2"
                    width={216}
                    height={200}
                    className="h-auto w-full"
                  />
                </div>
              </div>
            </li>
          </ul>

          {/* 神经调控 */}
          <div
            className="nerve-container group/nerve mt-6 flex h-[204px] w-[1200px] items-center"
            onMouseEnter={() => setProductCount(1)}
            onMouseLeave={() => setProductCount(0)}
          >
            <div className="flex w-[310px] flex-shrink-0 cursor-pointer items-center">
              <div className="mr-2.5 flex h-40 w-[140px] items-center justify-center">
                <Image
                  src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/kojfrMNnQOelFbAI.webp"
                  alt="神经调控"
                  width={140}
                  height={160}
                  className="h-auto w-auto"
                />
              </div>
              <div className="name cursor-pointer">
                <h5 className="mb-2 text-2xl font-medium">神经调控</h5>
                <p className="text-lg">头戴设备</p>
              </div>
            </div>

            <div className="hidden w-[810px] flex-shrink-0 items-center rounded-lg bg-[#f4f4f4] group-hover/nerve:flex">
              <ul className="flex">
                {nerveList.map(item => (
                  <li
                    key={item.name}
                    className="flex w-[270px] cursor-pointer flex-col items-center justify-center"
                    onClick={() => router.push(item.router)}
                  >
                    <div className="-mt-5 flex items-center justify-center">
                      <Image
                        src={item.img}
                        alt={item.name}
                        width={140}
                        height={160}
                        className="h-auto w-auto"
                      />
                    </div>
                    <div className="-mt-5 flex flex-col items-center">
                      <span className="text-base font-bold text-[#555]">
                        {item.name}
                      </span>
                      <span className="text-base font-bold text-[#555]">
                        {item.desc}
                      </span>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
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
