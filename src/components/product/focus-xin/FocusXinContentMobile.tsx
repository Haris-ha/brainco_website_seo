'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useLayoutEffect, useRef, useState } from 'react';
import AfterSalesMobile from '@/components/common/AfterSalesMobile';
import DiscountBanner from '@/components/product/DiscountBanner';
import { findProductByIdentifier } from '@/lib/api';
import {
  imageUrls,
  literatureList,
  modeList,
  patentList,
  problemList,
  productCode,
  trainingTypes,
  videoUrls,
} from './data';
import PlayIcon from './PlayIcon';
import PurchaseButton from './PurchaseButton';

export default function FocusXinContentMobile() {
  const t = useTranslations('FocusXin');
  const [product, setProduct] = useState<any>(null);
  const [showPrincipleVideo, setShowPrincipleVideo] = useState(false);
  const [showIntroVideo, setShowIntroVideo] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const purchaseBarRef = useRef<HTMLDivElement>(null);
  const [hideOffset, setHideOffset] = useState(200);

  // Fetch product data
  useEffect(() => {
    const fetchProduct = async () => {
      const productData = await findProductByIdentifier(null, productCode, productCode);
      if (productData) {
        setProduct(productData);
      }
    };
    fetchProduct();
  }, []);

  // Calculate purchase bar height for hide offset
  useLayoutEffect(() => {
    if (purchaseBarRef.current) {
      const height = purchaseBarRef.current.offsetHeight;
      setHideOffset(height + 200); // Add 20px extra padding
    }
  }, [product]);

  // Handle scroll detection and bottom detection
  useEffect(() => {
    let scrollTimer: NodeJS.Timeout;

    const handleScroll = () => {
      setIsScrolling(true);

      // Check if scrolled to bottom
      const threshold = 10; // Small threshold for bottom detection
      const isBottom = window.innerHeight + window.scrollY
        >= document.documentElement.scrollHeight - threshold;
      setIsAtBottom(isBottom);

      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        setIsScrolling(false);
        // Re-check bottom when scroll stops
        const isStillBottom = window.innerHeight + window.scrollY
          >= document.documentElement.scrollHeight - threshold;
        setIsAtBottom(isStillBottom);
      }, 150);
    };

    window.addEventListener('scroll', handleScroll);
    // Initial check
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(scrollTimer);
    };
  }, []);

  return (
    <main className="text-center md:mx-auto">
      {/* Hero Section */}
      <header className="flex flex-col items-center px-4 pt-32 md:px-12" role="img" aria-label="FocusXin 专注力训练产品 - 移动端 / FocusXin Focus Training Product - Mobile">
        <Image
          src={imageUrls.heroBannerMobile}
          alt="FocusXin 专注力训练产品展示 / FocusXin Focus Training Product Display"
          width={750}
          height={500}
          className="mb-8 w-full md:mx-auto md:max-w-[85%]"
        />

        <h1 className="text-fluid-4xl mb-2 font-bold text-[#333333] md:mb-3 md:text-[4.5vw]">{t('hero_title')}</h1>
        <p className="text-fluid-4xl mb-4 font-normal text-[#333333] md:mb-2 md:text-[3vw]">{t('hero_subtitle')}</p>
        <p className="text-fluid-base mb-6 max-w-[80%] text-[#333333] md:mb-6 md:text-[2vw]">{t('hero_description')}</p>

        {product && (
          <div className="mb-6 font-medium text-[#111827]">
            <span className="text-fluid-4xl">
              ¥
              {product.price / 100}
            </span>
          </div>
        )}

        <div className="flex w-full max-w-[240px] flex-col items-center gap-4">
          {/* {product && (
            <PurchaseButton
              product={product}
              className="!h-[56px] !w-full !rounded-[28px] !bg-[#4F68D2] !text-[18px]"
            />
          )} */}

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowIntroVideo(true)}
            className="flex h-[56px] w-full items-center justify-center rounded-[28px] border-2 border-[#4F59A5] bg-white text-[18px] font-medium text-[#4F59A5]"
          >
            {t('watch_video')}
            <PlayIcon size={20} color="#4F59A5" className="ml-2" />
          </motion.button>
        </div>
      </header>

      {/* Problem Section */}
      <section className="mb-32 px-4 py-16 md:px-12 md:py-24">
        <h2 id="problem-title-mobile" className="text-fluid-3xl mt-10 mb-[8vw] px-10 font-semibold md:mb-[20vw] md:text-[3.75vw]">{t('problem_title')}</h2>

        <div className="relative mx-auto flex justify-center pt-32">
          <Image
            src={imageUrls.problemCenter}
            alt="FocusXin 专注力问题识别中心图 - 常见专注力问题可视化 / FocusXin focus problem identification center - Common focus issues visualization"
            width={172}
            height={172}
            className="w-[46vw]"
          />

          <ul className="absolute inset-0">
            {problemList.map((problem, index) => {
              const positions = [
                'left-[calc(50%-46vw)] top-2/3 -translate-y-1/2 h-[22vw] w-[22vw] !text-[#333]',
                'left-[calc(50%-39vw)] top-[calc(50%-26vw)] h-[20vw] w-[20vw] !text-white',
                'left-1/2 top-[calc(50%-40vw)] -translate-x-1/2 h-[26vw] w-[26vw] md:top-[calc(50%-45vw)] !text-[#333]',
                'left-[calc(50%+22vw)] top-[calc(50%-20vw)] h-[18vw] w-[18vw] !text-[#333]',
                'left-[calc(50%+26vw)] top-2/3 -translate-y-1/2 h-[20vw] w-[20vw] !text-white',
              ];
              const backgrounds = ['bg-[#808BC98A]', 'bg-[#808BC9]', 'bg-[#9EA8DF8A]', 'bg-[#808BC994]', 'bg-[#808BC9]'];

              return (
                <motion.li
                  key={problem.textKey}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`text-fluid-sm absolute flex items-center justify-center rounded-full md:text-[1.5vw] ${positions[index]} ${backgrounds[index]}`}
                  dangerouslySetInnerHTML={{ __html: t(problem.textKey) }}
                />
              );
            })}
          </ul>

          <p className="text-fluid-lg absolute top-[calc(100%+8vw)] rounded-full bg-[#4F59A5] px-[9.6vw] py-4 font-medium !text-white md:rounded-2xl md:px-12 md:py-5 md:text-[2.25vw]">
            {t('problem_conclusion')}
          </p>
        </div>
      </section>

      {/* Principle Section */}
      <section className="relative px-4 pb-48 md:px-12 md:pb-60">
        <div className="px-12 md:px-16">
          <h2 id="principle-title-mobile" className="text-fluid-3xl mb-5 font-semibold md:mb-6 md:text-[3.75vw]" dangerouslySetInnerHTML={{ __html: t('principle_title') }} />

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPrincipleVideo(true)}
            className="text-fluid-sm mx-auto flex h-[40px] items-center justify-center rounded-full border border-[#4F59A5] px-5 py-2 !text-[#4F59A5] md:px-6 md:py-3 md:text-[1.75vw]"
          >
            {t('watch_principle')}
            <PlayIcon size={18} color="#4F59A5" className="mb-1 ml-2" />
          </motion.button>
        </div>

        <Image
          src={imageUrls.principleMobile}
          alt="FocusXin 神经反馈训练原理示意图 - 脑电信号实时反馈机制 / FocusXin neurofeedback training principle - Real-time EEG signal feedback mechanism"
          width={300}
          height={300}
          className="mx-auto mb-4 w-[80vw] md:w-[65vw] md:max-w-[600px]"
        />

        <p className="text-fluid-sm px-10 text-right text-gray-500 md:px-16 md:text-[1.75vw]">
          {t('principle_footnote')}
          <sup>[1]</sup>
        </p>
      </section>

      {/* Mode Section */}
      <section className="relative pt-24 pb-8" style={{ marginTop: '-36vw' }}>
        <Image
          src={imageUrls.modeMobile}
          alt="FocusXin 训练模式优势展示 - 多种训练模式对比 / FocusXin training mode advantages - Multiple training modes comparison"
          width={750}
          height={500}
          className="w-full md:mx-auto md:max-w-[85%]"
        />

        <ul className="absolute top-[12vw] right-8 space-y-3 md:top-[32vw] md:right-16 md:space-y-4">
          {modeList.map(mode => (
            <li key={mode.titleKey} className="text-fluid-lg flex items-start text-left font-medium md:text-[2.25vw]">
              {t(mode.titleKey)}
              {mode.superscriptKey && (
                <sup className="text-fluid-sm mt-2 ml-1 md:mt-3 md:text-[1.5vw]">{t(mode.superscriptKey)}</sup>
              )}
            </li>
          ))}
        </ul>

        <ul className="mt-4 space-y-2 px-8 text-left text-[2.7vw] text-[#929292] md:text-[1.5vw]">
          {literatureList.map(lit => (
            <li key={lit.key} className="break-words">
              {t(lit.key)}
            </li>
          ))}
        </ul>
      </section>

      {/* Training Modules */}
      <section className="mx-4 py-8 md:mx-8 md:py-12">
        <h2 id="training-title-mobile" className="text-fluid-3xl mb-8 font-medium md:mb-10 md:text-[3.75vw]" dangerouslySetInnerHTML={{ __html: t('training_title') }} />

        <div className="flex items-start justify-between space-x-2 md:space-x-4">
          {trainingTypes.map(training => (
            <div key={training.nameKey} className="w-[29.3vw] md:w-[25vw] md:max-w-[200px]">
              <h3 className="text-fluid-base mb-3 h-10 font-medium md:mb-4 md:text-[2vw]">{t(training.nameKey)}</h3>
              <Image
                src={training.image}
                alt={`${t(training.nameKey)} - FocusXin 训练模块示意图 / ${t(training.nameKey)} - FocusXin training module illustration`}
                width={110}
                height={110}
                className="mb-8 w-full md:mb-10"
              />
              <p className="text-fluid-sm text-[#3b3b3b] md:text-[1.75vw]">{t(training.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Assessment Section */}
      <section className="px-8 py-8 md:px-12 md:py-12">
        <h2 id="assessment-title-mobile" className="text-fluid-3xl mb-3 font-medium md:mb-4 md:text-[3.75vw]">{t('assessment_title')}</h2>
        <p className="text-fluid-base mb-7 md:mb-8 md:text-[2vw]" dangerouslySetInnerHTML={{ __html: t('assessment_description') }} />

        <div className="relative flex flex-col items-center space-y-6 md:space-y-8">
          <Image
            src={imageUrls.assessment1Mobile}
            alt="FocusXin 能力评估界面 1 - 专注力评估测试展示 / FocusXin ability assessment interface 1 - Focus assessment test display"
            width={280}
            height={280}
            className="w-[74.7vw] md:w-[60vw] md:max-w-[550px]"
          />
          <Image
            src={imageUrls.assessment2Mobile}
            alt="FocusXin 能力评估界面 2 - 评估结果分析展示 / FocusXin ability assessment interface 2 - Assessment result analysis display"
            width={280}
            height={280}
            className="w-[74.7vw] md:w-[60vw] md:max-w-[550px]"
          />
          <Image
            src={imageUrls.logoMobile}
            alt="FocusXin Logo - 专注力训练产品标识 / FocusXin Logo - Focus training product logo"
            width={34}
            height={34}
            className="absolute right-0 -bottom-3 w-[9.1vw] md:w-[7vw] md:max-w-[50px]"
          />
        </div>
      </section>

      {/* Game Section */}
      <section className="px-8 py-8 md:px-12 md:py-12">
        <h2 id="assessment-title-mobile" className="text-fluid-3xl mb-3 font-medium md:mb-4 md:text-[3.75vw]">{t('game_title')}</h2>
        <p className="text-fluid-base mb-5 md:mb-6 md:text-[2vw]" dangerouslySetInnerHTML={{ __html: t('game_description') }} />

        <div className="relative">
          <Image
            src={imageUrls.gameMobile}
            alt="FocusXin 游戏化训练界面 - 互动训练游戏展示 / FocusXin gamified training interface - Interactive training game display"
            width={270}
            height={270}
            className="mx-auto w-[72vw] md:w-[58vw] md:max-w-[530px]"
          />
          <Image
            src={imageUrls.logoMobile}
            alt="FocusXin Logo - 专注力训练产品标识 / FocusXin Logo - Focus training product logo"
            width={34}
            height={34}
            className="absolute right-0 -bottom-3 w-[9.1vw] md:w-[7vw] md:max-w-[50px]"
          />
        </div>
      </section>

      {/* Tracking Section */}
      <section className="px-8 py-8 md:px-12 md:py-12">
        <h2 id="assessment-title-mobile" className="text-fluid-3xl mb-3 font-medium md:mb-4 md:text-[3.75vw]">{t('tracking_title')}</h2>
        <p className="text-fluid-base mb-5 md:mb-6 md:text-[2vw]" dangerouslySetInnerHTML={{ __html: t('tracking_description') }} />

        <div className="relative">
          <Image
            src={imageUrls.trackingMobile}
            alt="FocusXin 训练效果追踪界面 - 专注力变化趋势图 / FocusXin training effect tracking interface - Focus change trend chart"
            width={280}
            height={280}
            className="mx-auto w-[74.7vw] md:w-[60vw] md:max-w-[550px]"
          />
          <Image
            src={imageUrls.logoMobile}
            alt="FocusXin Logo - 专注力训练产品标识 / FocusXin Logo - Focus training product logo"
            width={34}
            height={34}
            className="absolute -bottom-3 left-8 w-[9.1vw] scale-x-[-1] md:left-12 md:w-[7vw] md:max-w-[50px]"
          />
        </div>
      </section>

      {/* Verification Section */}
      <section className="px-8 py-8 md:px-12 md:py-12">
        <h2 id="verification-title-mobile" className="text-fluid-3xl mb-5 font-medium md:mb-6 md:text-[3.75vw]">{t('verification_title')}</h2>

        <div className="mx-auto w-[80vw] space-y-12">
          <Image
            src={imageUrls.verification1Mobile}
            alt="FocusXin 科学验证研究 1 - 专注力训练效果验证报告 / FocusXin scientific verification research 1 - Focus training effectiveness validation report"
            width={356}
            height={356}
            className="w-full"
          />
          <Image
            src={imageUrls.verification2Mobile}
            alt="FocusXin 科学验证研究 2 - 训练效果数据统计 / FocusXin scientific verification research 2 - Training effect data statistics"
            width={356}
            height={356}
            className="w-full"
          />
        </div>
      </section>

      {/* Patents Section */}
      <section className="px-8 py-8 md:px-12 md:py-12">
        <h2 id="patent-title-mobile" className="text-fluid-3xl mb-5 font-medium md:mb-6 md:text-[3.75vw]" dangerouslySetInnerHTML={{ __html: t('patent_title') }} />

        <Image
          src={imageUrls.patent}
          alt="FocusXin 产品专利证书 - 技术创新与知识产权 / FocusXin product patents - Technical innovation and intellectual property"
          width={312}
          height={150}
          className="mx-auto mb-7 w-[83.2vw] md:mb-8 md:w-[70vw] md:max-w-[650px]"
        />

        {/* AfterSales */}
        <div className="md:px-[60px]">
          <AfterSalesMobile is15Days />
        </div>

        <div className="grid grid-cols-2 gap-x-2 gap-y-4 text-[12px] text-[#6B7280] md:grid-cols-3 md:text-[1.75vw]">
          {patentList.map((patentNumber, groupIndex) => (
            <div key={groupIndex} className="text-center whitespace-nowrap">
              {t('patent_prefix')}
              {patentNumber}
            </div>
          ))}
        </div>
      </section>

      {/* Fixed Bottom Purchase Bar */}
      {product && (
        <motion.div
          ref={purchaseBarRef}
          initial={{ y: 0 }}
          animate={{ y: isScrolling || isAtBottom ? hideOffset : 0 }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
          className="fixed right-0 bottom-0 left-0 z-40 bg-white pt-2 shadow-lg"
        >
          {/* Discount Banner */}
          <DiscountBanner product={product} isMobile />

          {/* Purchase Bar */}
          <div className="px-4 py-4">
            <div className="flex items-center justify-between">
              <div className="ml-4 flex items-baseline">
                <span className="text-fluid-3xl font-medium text-gray-900">
                  ¥
                  {product.price / 100}
                </span>
                {product.oldPrice && (
                  <span className="text-fluid-xl ml-1 text-gray-600 line-through">
                    ¥
                    {product.oldPrice / 100}
                  </span>
                )}
              </div>
              <div className="w-[120px]">
                <PurchaseButton product={product} isMobile />
              </div>
            </div>
          </div>
        </motion.div>
      )}
      {/* Video Modals */}
      <AnimatePresence>
        {showPrincipleVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80"
            onClick={() => setShowPrincipleVideo(false)}
          >
            <button
              type="button"
              onClick={() => setShowPrincipleVideo(false)}
              className="absolute top-5 right-5 z-10 text-5xl text-gray-300"
              aria-label="关闭视频 / Close video"
            >
              ×
            </button>
            <video
              autoPlay
              controls
              controlsList="nodownload noremoteplayback"
              src={videoUrls.principle}
              className="h-full w-full"
              aria-label="FocusXin 神经反馈训练原理演示视频 / FocusXin neurofeedback training principle demo video"
            />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {showIntroVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[9999] bg-black/80"
            onClick={() => setShowIntroVideo(false)}
          >
            <button
              type="button"
              onClick={() => setShowIntroVideo(false)}
              className="absolute top-5 right-5 z-10 text-5xl text-gray-300"
              aria-label="关闭视频 / Close video"
            >
              ×
            </button>
            <video
              autoPlay
              controls
              controlsList="nodownload noremoteplayback"
              src={videoUrls.introduction}
              className="h-full w-full"
              aria-label="FocusXin 产品介绍演示视频 / FocusXin product introduction demo video"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
