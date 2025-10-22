'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Controller } from 'swiper/modules';
import 'swiper/css';
import PurchaseButton from './PurchaseButton';

interface EASleepSpecificationContentProps {
  products: any[];
}

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
    <div className="specification flex justify-center pt-[125px]">
      {/* Left Side - Image Gallery */}
      <div className="left flex-shrink-0 w-[774px] mr-[134px]">
        <div className="sw-box relative">
          <Swiper
            modules={[Controller]}
            onSwiper={setMainSwiper}
            className="w-full"
          >
            {currentImages.map((image, index) => (
              <SwiperSlide key={`desktop-image-${index}`}>
                <div className="pic-box">
                  <Image
                    src={image}
                    alt={`Product image ${index + 1}`}
                    width={774}
                    height={600}
                    className="w-full rounded-lg"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
          
          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handlePrev}
            className="swiper-button-prev absolute left-[10px] top-1/2 -translate-y-1/2 z-[999] w-[60px] h-[60px] border border-white rounded-full flex items-center justify-center text-white text-[30px] cursor-pointer hover:bg-white/20 transition-all"
          >
            ←
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleNext}
            className="swiper-button-next absolute right-[10px] top-1/2 -translate-y-1/2 z-[999] w-[60px] h-[60px] border border-white rounded-full flex items-center justify-center text-white text-[30px] cursor-pointer hover:bg-white/20 transition-all"
          >
            →
          </motion.button>
        </div>
        
        {/* Thumbnail Navigation */}
        <div className="item mt-[30px]">
          <ul className="flex">
            {currentImages.map((image, index) => (
              <motion.li
                key={`desktop-thumb-${index}`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleSlideChange(index)}
                className="flex-shrink-0 w-[100px] h-[100px] mr-[20px] last:mr-0 rounded-[20px] overflow-hidden border border-[#707070] cursor-pointer"
                style={{
                  backgroundImage: `url(${image})`,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center',
                }}
              />
            ))}
          </ul>
        </div>
      </div>

      {/* Right Side - Product Selection */}
      <div className="right flex-shrink-0 w-[712px] flex flex-col">
        <motion.h5
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-fluid-4xl font-normal text-[#333333] mb-[80px]"
        >
          {t('spec_title')}
        </motion.h5>
        
        <ul className="flex-1">
          {products.map((product, index) => (
            <motion.li
              key={product.id}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => handleProductChange(index)}
              className={`w-full h-[110px] rounded-[28px] border-4 flex items-center justify-between px-[35px] mb-[20px] cursor-pointer transition-all ${
                selectedProductIndex === index 
                  ? 'border-[#6475d0] bg-[#6475d0]/5' 
                  : 'border-[#333] hover:border-[#6475d0]/50'
              }`}
            >
              <h5 className="text-fluid-3xl font-medium font-[PingFang SC-Medium]">
                {product.name}
              </h5>
              <span className="flex-shrink-0 w-[200px] text-fluid-3xl flex justify-between">
                <span className="text-[#333]">¥{(product.price || 0) / 100}</span>
                {product.oldPrice && (
                  <s className="text-[#595757] opacity-50">
                    ¥{(product.oldPrice || 0) / 100}
                  </s>
                )}
              </span>
            </motion.li>
          ))}
        </ul>
        
        <PurchaseButton product={selectedProduct} />
      </div>
    </div>
  );
}
