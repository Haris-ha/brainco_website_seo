'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { Controller } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import PurchaseButton from './PurchaseButton';
import 'swiper/css';

type EASleepSpecificationContentMobileProps = {
  products: any[];
};

export default function EASleepSpecificationContentMobile({ products }: EASleepSpecificationContentMobileProps) {
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

  const currentImages = productImages[selectedProductIndex] || productImages[0] || [];
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

  return (
    <main className="scale-90 px-4">
      {/* Image Gallery */}
      <section className="mb-8" aria-labelledby="product-gallery-title-mobile">
        <h1 id="product-gallery-title-mobile" className="sr-only">
          EASleep 产品图片展示 / EASleep Product Gallery
        </h1>
        <Swiper
          modules={[Controller]}
          onSwiper={setMainSwiper}
          slidesPerView={1}
          spaceBetween={20}
          pagination={{ clickable: true }}
          className="w-full"
        >
          {currentImages.map((image, index) => (
            <SwiperSlide key={`mobile-image-${index}`}>
              <div className="relative w-full">
                <Image
                  src={image}
                  alt={`${selectedProduct?.name || 'EASleep'} 产品图片 ${index + 1} - ${t('spec_title')} / ${selectedProduct?.name || 'EASleep'} Product Image ${index + 1} - ${t('spec_title')}`}
                  width={375}
                  height={300}
                  className="w-full rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Navigation */}
        <nav aria-label="产品图片缩略图导航 / Product image thumbnail navigation">
          <div className="flex gap-2 overflow-x-auto md:w-full md:justify-between">
            {currentImages.map((image, index) => (
              <motion.button
                key={`mobile-thumb-${index}`}
                type="button"
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSlideChange(index)}
                className="h-[60px] w-[60px] md:h-[100px] md:w-[100px] flex-shrink-0 cursor-pointer overflow-hidden rounded-lg border border-gray-300"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
                aria-label={`查看产品图片 ${index + 1} / View product image ${index + 1}`}
              />
            ))}
          </div>
        </nav>
      </section>

      {/* Product Selection */}
      <section className="mb-8" aria-labelledby="product-selection-title-mobile">
        <motion.h2
          id="product-selection-title-mobile"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-fluid-2xl mb-6 font-normal text-[#333333]"
        >
          {t('spec_title')}
        </motion.h2>

        <ul className="space-y-4" role="listbox" aria-label="产品规格选择 / Product specification selection">
          {products.map((product, index) => (
            <motion.li
              key={product.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleProductChange(index)}
              className={`flex h-[80px] w-full cursor-pointer items-center justify-between rounded-[20px] border-2 px-4 transition-all ${
                selectedProductIndex === index
                  ? 'border-[#6475d0] bg-[#6475d0]/5'
                  : 'border-[#333] hover:border-[#6475d0]/50'
              }`}
              role="option"
              aria-selected={selectedProductIndex === index}
            >
              <h3 className="text-fluid-lg font-medium md:text-[3.75vw]">
                {product.name}
              </h3>
              <div className="flex-shrink-0 text-right">
                <div className="text-fluid-lg text-[#333] md:text-[3.75vw]">
                  ¥
                  {(product.price || 0) / 100}
                </div>
                {product.oldPrice && (
                  <div className="text-fluid-sm text-[#595757] line-through opacity-50 md:text-[3.75vw]">
                    ¥
                    {(product.oldPrice || 0) / 100}
                  </div>
                )}
              </div>
            </motion.li>
          ))}
        </ul>
      </section>

      {/* Purchase Button */}
      <div className="flex justify-center">
        <PurchaseButton product={selectedProduct} />
      </div>
    </main>
  );
}
