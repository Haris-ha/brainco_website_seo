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
  const t = useTranslations('FocusXin');
  const tCart = useTranslations('Cart');
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
        name: product.name || 'FocusXin',
        price: product.price,
        pictureUrl:
          product.pictureUrl
          || 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/6DDtRwGd3eXppQ4P.webp',
        code: product.code || 'focus-xin',
      });

      toast.success(tCart('added_to_cart'));

      // 跳转到购物车页面
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
        className="text-fluid-xl h-[50px] w-full rounded-[25px] bg-[#4f68d2] font-medium text-white transition-all hover:bg-[#3d52a8] disabled:cursor-not-allowed disabled:opacity-50"
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
      className="cursor-target text-fluid-2xl h-[82px] w-[260px] rounded-[41px] bg-[#4f68d2] font-medium text-white shadow-lg transition-all hover:bg-[#3d52a8] disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isLoading ? '加载中...' : t('buy_now')}
    </motion.button>
  );
}
