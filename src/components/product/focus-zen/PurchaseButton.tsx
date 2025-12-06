'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useCart } from '@/hooks/useCart';

type PurchaseButtonProps = {
  product: any;
  isMobile?: boolean;
};

export default function PurchaseButton({
  product,
  isMobile = false,
}: PurchaseButtonProps) {
  const t = useTranslations('FocusZen');
  const router = useRouter();
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyNow = async () => {
    if (!product || !product.id) {
      toast.error('产品信息不可用');
      return;
    }

    setIsLoading(true);

    try {
      addToCart({
        id: product.id,
        name: product.name || 'FocusZen',
        price: product.price,
        pictureUrl:
          product.pictureUrl
          || 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/EiG02Nkw09bPrGha.webp',
        code: product.code || 'focus-zen',
      });

      // 跳转到购物车页面
      // toast 已经在 addToCart 中显示，无需重复
      setTimeout(() => {
        router.push('/cart');
      }, 500);
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error('加入购物车失败');
    } finally {
      setIsLoading(false);
    }
  };

  if (isMobile) {
    return (
      <motion.button
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        onClick={handleBuyNow}
        disabled={isLoading}
        className="text-fluid-lg h-[40px] w-[120px] cursor-pointer rounded-[22px] bg-[#1A74BF] font-medium !text-white transition-all disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? '加载中...' : t('buy_now')}
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleBuyNow}
      disabled={isLoading}
      className="cursor-target text-fluid-2xl h-[72px] w-[260px] rounded-[41px] bg-[#1A74BF] font-medium !text-white shadow-lg transition-all hover:bg-[#1A74BF]/80 disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isLoading ? '加载中...' : t('buy_now')}
    </motion.button>
  );
}
