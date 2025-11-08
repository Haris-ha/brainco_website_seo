'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useCart } from '@/hooks/useCart';
import { useRouter } from '@/libs/I18nNavigation';

type PurchaseButtonProps = {
  product: any;
  isMobile?: boolean;
};

export default function PurchaseButton({ product, isMobile = false }: PurchaseButtonProps) {
  const t = useTranslations('OxyZen');
  const tCart = useTranslations('Cart');
  const router = useRouter();
  const { addToCart, toggleItemCheck } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyNow = async () => {
    if (!product || !product.id) {
      toast.error(tCart('product_not_available'));
      return;
    }

    setIsLoading(true);

    try {
      // Add to cart
      addToCart({
        id: product.id,
        name: product.name || 'OxyZen',
        price: product.price,
        pictureUrl: product.pictureUrl || 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/iftXG0SL0Cr5V08e.webp',
        code: product.code || 'oxyzen',
      });

      // Mark as checked and navigate to cart
      setTimeout(() => {
        toggleItemCheck(product.id);
        router.push('/cart');
      }, 300);
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error(tCart('add_to_cart_failed'));
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
        className="text-fluid-lg h-[40px] w-[120px] cursor-pointer rounded-[22px] bg-[#4f68d2] font-medium text-white transition-all disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? tCart('submitting') : t('buy_now')}
      </motion.button>
    );
  }

  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={handleBuyNow}
      disabled={isLoading}
      className="cursor-target text-fluid-3xl mt-6 flex h-[72px] w-[260px] items-center justify-center rounded-[40px] bg-[#4f68d2] text-white shadow-lg transition-all hover:bg-[#3d52a8] disabled:cursor-not-allowed disabled:opacity-50"
    >
      {isLoading ? tCart('submitting') : t('buy_now')}
    </motion.button>
  );
}
