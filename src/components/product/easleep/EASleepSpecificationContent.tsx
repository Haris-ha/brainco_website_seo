'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PurchaseButton from './PurchaseButton';
import 'swiper/css';

type EASleepSpecificationContentProps = {
  products: any[];
};

export default function EASleepSpecificationContent({ products }: EASleepSpecificationContentProps) {
  const t = useTranslations('EASleep');
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);
  const [mainSwiper, setMainSwiper] = useState<any>(null);

  // Product images for each variant (3 variants with 6 images each)
  const productImages = [
    [
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/ZHgynUpG56EclpqP.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/ePFbhAD3Nuj36shK.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/wlKhSyscJ9EoBTGc.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/wckP0iXLfaTxVFNR.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/YzhZ68n25w11GnoM.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/eDSQYeauFtGLf7yx.webp',
    ],
    [
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/YxNFBzYONzQD5o2T.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/K8rcaNupt2GFFFW0.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/c75Pq3y4U6IoUmho.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/tG7cYDaMqHgtYaTt.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/Uod369tyglYbNjxX.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/GNBvCPD3WmXZ6aGw.webp',
    ],
    [
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/5fVFNfitWtYkpVh4.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/jiyceWTK1Mak84m0.png',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/c75Pq3y4U6IoUmho.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/tG7cYDaMqHgtYaTt.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/Uod369tyglYbNjxX.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/GNBvCPD3WmXZ6aGw.webp',
    ],
  ];

  const currentImages = productImages[selectedProductIndex] || productImages[0];
  const selectedProduct = products[selectedProductIndex] || products[0];

  const handleProductChange = (index: number) => {
    setSelectedProductIndex(index);
    if (mainSwiper) {
      mainSwiper.slideTo(0);
    }
  };

  const handleSlideChange = (index: number) => {
    if (mainSwiper) {
      mainSwiper.slideTo(index);
    }
  };

  const handlePrev = () => {
    if (mainSwiper) {
      mainSwiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (mainSwiper) {
      mainSwiper.slideNext();
    }
  };

  return (
    <main className="flex scale-90 justify-center gap-20 px-20 py-[40px] 2xl:px-40">
      {/* Left Side - Image Gallery */}
      <section className="w-full max-w-4xl" aria-labelledby="product-gallery-title">
        <h1 id="product-gallery-title" className="sr-only">
          EASleep 产品图片展示 / EASleep Product Gallery
        </h1>
        <div className="relative h-[480px]">
          <Swiper
            modules={[Controller]}
            onSwiper={setMainSwiper}
            className="h-full w-full"
          >
            {(currentImages ?? []).map((image, index) => (
              <SwiperSlide key={`${selectedProductIndex}-${image}-${index}`}>
                <div className="h-full w-full">
                  <Image
                    src={image}
                    alt={`${selectedProduct?.name || 'EASleep'} 产品图片 ${index + 1} - ${t('spec_title')} / ${selectedProduct?.name || 'EASleep'} Product Image ${index + 1} - ${t('spec_title')}`}
                    width={774}
                    height={600}
                    className="h-full w-full rounded-xl object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Arrows */}
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="cursor-target absolute top-1/2 left-[20px] z-[50] flex h-[40px] w-[40px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white text-[30px] !text-white transition-all hover:bg-white/20"
            aria-label="上一张图片 / Previous image"
          >
            ←
          </motion.button>
          <motion.button
            type="button"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="cursor-target absolute top-1/2 right-[20px] z-[50] flex h-[40px] w-[40px] -translate-y-1/2 cursor-pointer items-center justify-center rounded-full border border-white text-[30px] !text-white transition-all hover:bg-white/20"
            aria-label="下一张图片 / Next image"
          >
            →
          </motion.button>
        </div>

        {/* Thumbnail Navigation */}
        <nav aria-label="产品图片缩略图导航 / Product image thumbnail navigation">
          <ul className="flex gap-[20px]">
            {(currentImages ?? []).map((image, index) => (
              <motion.li
                key={`${selectedProductIndex}-thumb-${image}-${index}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSlideChange(index)}
                className="cursor-target h-[100px] w-[100px] flex-shrink-0 cursor-pointer overflow-hidden rounded-[20px] border border-[#707070]"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                role="button"
                tabIndex={0}
                aria-label={`查看产品图片 ${index + 1} / View product image ${index + 1}`}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    handleSlideChange(index);
                  }
                }}
              />
            ))}
          </ul>
        </nav>
      </section>

      {/* Right Side - Product Selection */}
      <section className="flex w-full max-w-3xl flex-col justify-between gap-10" aria-labelledby="product-selection-title">
        <motion.h2
          id="product-selection-title"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-fluid-5xl font-normal text-[#333333]"
        >
          {t('spec_title')}
        </motion.h2>

        <ul className="flex h-full flex-1 flex-col justify-between" role="listbox" aria-label="产品规格选择 / Product specification selection">
          {products.map((product, index) => (
            <motion.li
              key={product.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleProductChange(index)}
              className={`cursor-target mb-[20px] flex h-[110px] w-full cursor-pointer items-center justify-between rounded-[28px] border-2 px-[35px] transition-all ${
                selectedProductIndex === index
                  ? 'border-[#6475d0] bg-[#6475d0]/5'
                  : 'border-[#333] hover:border-[#6475d0]/50'
              }`}
              role="option"
              aria-selected={selectedProductIndex === index}
            >
              <h3 className="text-fluid-3xl font-medium">
                {product.name}
              </h3>
              <span className="text-fluid-3xl flex w-full max-w-[100px] flex-shrink-0 justify-end text-right">
                <span className="text-[#333]">
                  ¥
                  {(product.price || 0) / 100}
                </span>
                {product.oldPrice && (
                  <s className="text-[#595757] opacity-50">
                    ¥
                    {(product.oldPrice || 0) / 100}
                  </s>
                )}
              </span>
            </motion.li>
          ))}
        </ul>

        <PurchaseButton product={selectedProduct} />
      </section>
    </main>
  );
}
