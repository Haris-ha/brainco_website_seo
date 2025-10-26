'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
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
import PurchaseButton from './PurchaseButton';

export default function FocusXinContentMobile() {
  const t = useTranslations('FocusXin');
  const [product, setProduct] = useState<any>(null);
  const [showPrincipleVideo, setShowPrincipleVideo] = useState(false);
  const [showIntroVideo, setShowIntroVideo] = useState(false);

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

  return (
    <div className="text-center">
      {/* Hero Section */}
      <section className="px-4 pt-32">
        <h1 className="text-fluid-4xl mb-2 font-medium">{t('hero_title')}</h1>
        <h2 className="text-fluid-2xl mb-1 font-normal">{t('hero_subtitle')}</h2>
        <p className="text-fluid-base mb-5">{t('hero_description')}</p>

        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={() => setShowIntroVideo(true)}
          className="text-fluid-xl mb-5 inline-block rounded-[17px] border border-gray-900 px-5 py-2"
        >
          {t('watch_video')}
          <span className="ml-2">›</span>
        </motion.button>

        <Image
          src={imageUrls.heroBannerMobile}
          alt="FocusXin"
          width={750}
          height={500}
          className="w-full"
        />
      </section>

      {/* Problem Section */}
      <section className="mb-32 px-4 py-12">
        <h2 className="text-fluid-2xl mb-[8vw] font-medium">{t('problem_title')}</h2>

        <div className="relative mx-auto flex justify-center pt-32">
          <Image
            src={imageUrls.problemCenter}
            alt="Problem"
            width={172}
            height={172}
            className="w-[46vw]"
          />

          <ul className="absolute inset-0">
            {problemList.map((problem, index) => {
              const positions = [
                'left-[calc(50%-42vw)] top-2/3 -translate-y-1/2 h-[14vw] w-[14vw]',
                'left-[calc(50%-39vw)] top-[calc(50%-20vw)] h-[16vw] w-[16vw]',
                'left-1/2 top-[calc(50%-38vw)] -translate-x-1/2 h-[22vw] w-[22vw]',
                'left-[calc(50%+22vw)] top-[calc(50%-20vw)] h-[18vw] w-[18vw]',
                'left-[calc(50%+26vw)] top-2/3 -translate-y-1/2 h-[20vw] w-[20vw]',
              ];
              const backgrounds = ['bg-[#CAD4E7]', 'bg-[#96A2BF]', 'bg-[#96A2BF]', 'bg-[#CCD6E7]', 'bg-[#6B74A8]'];

              return (
                <motion.li
                  key={problem.textKey}
                  initial={{ opacity: 0, scale: 0 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`text-fluid-sm absolute flex items-center justify-center rounded-full text-white ${positions[index]} ${backgrounds[index]}`}
                  dangerouslySetInnerHTML={{ __html: t(problem.textKey) }}
                />
              );
            })}
          </ul>

          <p className="text-fluid-lg absolute top-[calc(100%+8vw)] rounded-[9.6vw] bg-[#4F59A5] px-[9.6vw] py-4 font-medium text-white">
            {t('problem_conclusion')}
          </p>
        </div>
      </section>

      {/* Principle Section */}
      <section className="relative px-4 py-42">
        <Image
          src={imageUrls.principleMobile}
          alt="Principle"
          width={300}
          height={300}
          className="mx-auto mb-4 w-[80vw]"
        />

        <div className="absolute top-2 left-8 px-12">
          <h2 className="text-fluid-2xl mb-5 font-medium" dangerouslySetInnerHTML={{ __html: t('principle_title') }} />

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowPrincipleVideo(true)}
            className="text-fluid-sm inline-block rounded-[17px] border border-gray-900 px-5 py-2"
          >
            {t('watch_principle')}
            <span className="ml-2">›</span>
          </motion.button>
        </div>

        <p className="text-fluid-xs px-10 text-right text-gray-500">
          {t('principle_footnote')}
          <sup>[1]</sup>
        </p>
      </section>

      {/* Mode Section */}
      <section className="relative py-8" style={{ marginTop: '-36vw' }}>
        <Image
          src={imageUrls.modeMobile}
          alt="Mode"
          width={750}
          height={500}
          className="w-full"
        />

        <ul className="absolute top-[20vw] right-8 space-y-3">
          {modeList.map(mode => (
            <li key={mode.titleKey} className="text-fluid-lg flex items-start text-left font-medium">
              {t(mode.titleKey)}
              {mode.superscriptKey && (
                <sup className="text-fluid-xs ml-1">{t(mode.superscriptKey)}</sup>
              )}
            </li>
          ))}
        </ul>

        <ul className="mt-4 space-y-2 px-4 text-left text-[2.7vw] text-[#929292]">
          {literatureList.map(lit => (
            <li key={lit.key} className="break-words">
              {t(lit.key)}
            </li>
          ))}
        </ul>
      </section>

      {/* Training Modules */}
      <section className="px-4 py-8">
        <h2 className="text-fluid-2xl mb-8 font-medium" dangerouslySetInnerHTML={{ __html: t('training_title') }} />

        <div className="flex justify-center space-x-2">
          {trainingTypes.map(training => (
            <div key={training.nameKey} className="w-[29.3vw]">
              <h5 className="text-fluid-sm mb-3 font-medium">{t(training.nameKey)}</h5>
              <Image
                src={training.image}
                alt={t(training.nameKey)}
                width={110}
                height={110}
                className="mb-10 w-full"
              />
              <p className="text-fluid-xs text-[#3b3b3b]">{t(training.descKey)}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Assessment Section */}
      <section className="px-4 py-12">
        <h2 className="text-fluid-2xl mb-3 font-medium">{t('assessment_title')}</h2>
        <p className="text-fluid-sm mb-7" dangerouslySetInnerHTML={{ __html: t('assessment_description') }} />

        <div className="relative flex flex-col items-center space-y-6">
          <Image src={imageUrls.assessment1Mobile} alt="Assessment 1" width={280} height={280} className="w-[74.7vw]" />
          <Image src={imageUrls.assessment2Mobile} alt="Assessment 2" width={280} height={280} className="w-[74.7vw]" />
          <Image
            src={imageUrls.logoMobile}
            alt="Logo"
            width={34}
            height={34}
            className="absolute right-0 -bottom-3 w-[9.1vw]"
          />
        </div>
      </section>

      {/* Game Section */}
      <section className="px-4 py-12">
        <h2 className="text-fluid-2xl mb-3 font-medium">{t('game_title')}</h2>
        <p className="text-fluid-sm mb-5" dangerouslySetInnerHTML={{ __html: t('game_description') }} />

        <div className="relative">
          <Image src={imageUrls.gameMobile} alt="Game" width={270} height={270} className="mx-auto w-[72vw]" />
          <Image
            src={imageUrls.logoMobile}
            alt="Logo"
            width={34}
            height={34}
            className="absolute right-0 -bottom-3 w-[9.1vw]"
          />
        </div>
      </section>

      {/* Tracking Section */}
      <section className="px-4 py-12">
        <h2 className="text-fluid-2xl mb-3 font-medium">{t('tracking_title')}</h2>
        <p className="text-fluid-sm mb-5" dangerouslySetInnerHTML={{ __html: t('tracking_description') }} />

        <div className="relative">
          <Image src={imageUrls.trackingMobile} alt="Tracking" width={280} height={280} className="mx-auto w-[74.7vw]" />
          <Image
            src={imageUrls.logoMobile}
            alt="Logo"
            width={34}
            height={34}
            className="absolute -bottom-3 left-8 w-[9.1vw] scale-x-[-1]"
          />
        </div>
      </section>

      {/* Verification Section */}
      <section className="px-4 py-12">
        <h2 className="text-fluid-2xl mb-5 font-medium">{t('verification_title')}</h2>

        <div className="mx-auto w-[80vw] space-y-12">
          <Image src={imageUrls.verification1Mobile} alt="Verification 1" width={356} height={356} className="w-full" />
          <Image src={imageUrls.verification2Mobile} alt="Verification 2" width={356} height={356} className="w-full" />
        </div>
      </section>

      {/* Patents Section */}
      <section className="px-4 py-12">
        <h2 className="text-fluid-2xl mb-5 font-medium" dangerouslySetInnerHTML={{ __html: t('patent_title') }} />

        <Image
          src={imageUrls.patent}
          alt="Patent"
          width={312}
          height={150}
          className="mx-auto mb-7 w-[83.2vw]"
        />

        <div className="text-fluid-xs flex flex-wrap justify-center gap-y-3 text-gray-500">
          {patentList.map((patentNumber, groupIndex) => (
            <div key={groupIndex} className="flex w-[40vw] flex-col items-center space-y-3">
              <span className="text-center">
                {t('patent_prefix')}
                {patentNumber}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* Fixed Bottom Purchase Bar */}
      {product && (
        <div className="fixed right-0 bottom-0 left-0 z-50 bg-white pt-2 shadow-lg">
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
                  <span className="text-fluid-base ml-2 text-gray-600 line-through">
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
        </div>
      )}
      {/* AfterSales */}
      <AfterSalesMobile />

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
              onClick={() => setShowPrincipleVideo(false)}
              className="absolute top-5 right-5 z-10 text-5xl text-gray-300"
            >
              ×
            </button>
            <video
              autoPlay
              controls
              controlsList="nodownload noremoteplayback"
              src={videoUrls.principle}
              className="h-full w-full"
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
              onClick={() => setShowIntroVideo(false)}
              className="absolute top-5 right-5 z-10 text-5xl text-gray-300"
            >
              ×
            </button>
            <video
              autoPlay
              controls
              controlsList="nodownload noremoteplayback"
              src={videoUrls.introduction}
              className="h-full w-full"
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
