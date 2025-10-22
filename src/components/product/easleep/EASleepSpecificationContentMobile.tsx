'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import PurchaseButton from './PurchaseButton';

interface EASleepSpecificationContentMobileProps {
  products: any[];
}

export default function EASleepSpecificationContentMobile({ products }: EASleepSpecificationContentMobileProps) {
  const t = useTranslations('EASleep');
  const [selectedProductIndex, setSelectedProductIndex] = useState(0);

  // Product images for each variant (3 variants with 6 images each)
  const productImages = [
    [
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/ZHgynUpG56EclpqP.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/ePFbhAD3Nuj36shK.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/wlKhSyscJ9EoBTGc.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/wckP0iXLfaTxVFNR.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/YzhZ68n25w11GnoM.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/eDSQYeauFtGLf7yx.webp'
    ],
    [
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/YxNFBzYONzQD5o2T.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/K8rcaNupt2GFFFW0.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/c75Pq3y4U6IoUmho.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/tG7cYDaMqHgtYaTt.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/Uod369tyglYbNjxX.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/GNBvCPD3WmXZ6aGw.webp'
    ],
    [
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/5fVFNfitWtYkpVh4.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/jiyceWTK1Mak84m0.png',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/c75Pq3y4U6IoUmho.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/tG7cYDaMqHgtYaTt.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/Uod369tyglYbNjxX.webp',
      'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/images/GNBvCPD3WmXZ6aGw.webp'
    ],
  ];

  const currentImages = productImages[selectedProductIndex] || productImages[0];
  const selectedProduct = products[selectedProductIndex] || products[0];

  const handleProductChange = (index: number) => {
    setSelectedProductIndex(index);
  };

  return (
    <div className="px-4 py-8">
      {/* Image Gallery */}
      <div className="mb-8">
        <Swiper
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
                  alt={`Product image ${index + 1}`}
                  width={375}
                  height={300}
                  className="w-full rounded-lg"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Navigation */}
        <div className="mt-4">
          <div className="flex gap-2 overflow-x-auto">
            {currentImages.map((image, index) => (
              <motion.div
                key={`mobile-thumb-${index}`}
                whileTap={{ scale: 0.95 }}
                className="h-[60px] w-[60px] flex-shrink-0 cursor-pointer overflow-hidden rounded-lg border border-gray-300"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Product Selection */}
      <div className="mb-8">
        <motion.h5
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-fluid-2xl mb-6 font-normal text-[#333333]"
        >
          {t('spec_title')}
        </motion.h5>

        <div className="space-y-4">
          {products.map((product, index) => (
            <motion.div
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
            >
              <h5 className="text-fluid-lg font-medium">
                {product.name}
              </h5>
              <div className="flex-shrink-0 text-right">
                <div className="text-fluid-lg text-[#333]">
                  ¥
                  {(product.price || 0) / 100}
                </div>
                {product.oldPrice && (
                  <div className="text-fluid-sm text-[#595757] opacity-50 line-through">
                    ¥
                    {(product.oldPrice || 0) / 100}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Purchase Button */}
      <div className="flex justify-center">
        <PurchaseButton product={selectedProduct} />
      </div>
    </div>
  );
}
