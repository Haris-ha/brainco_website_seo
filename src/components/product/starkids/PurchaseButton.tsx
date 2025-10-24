'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import toast from 'react-hot-toast';

import DiscountBanner from '@/components/product/DiscountBanner';
import { useCart } from '@/hooks/useCart';

type PurchaseButtonProps = {
  product: any;
  isMobile?: boolean;
  showPrice?: boolean;
};

export default function PurchaseButton({
  product,
  isMobile = false,
  showPrice = true,
}: PurchaseButtonProps) {
  const t = useTranslations('StarKids');
  const tCart = useTranslations('Cart');
  const router = useRouter();
  const { addToCart } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleBuyNow = async () => {
    if (!product || !product.id) {
      toast.error(tCart('product_not_available'));
      return;
    }

    setIsLoading(true);

    try {
      // addToCart already shows a success toast
      addToCart({
        id: product.id,
        name: product.name || 'StarKids',
        price: product.price,
        pictureUrl:
          product.pictureUrl
          || 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/wywzwe1R9ekMiMNs.webp',
        code: product.code || 'starkids',
      });

      // Navigate to cart page
      setTimeout(() => {
        router.push('/cart');
      }, 500);
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error(tCart('add_to_cart_failed'));
    } finally {
      setIsLoading(false);
    }
  };

  // Format price display
  const formatPrice = (price: number) => {
    return (price / 100).toFixed(2);
  };

  if (isMobile) {
    return (
      <div className="fixed right-0 bottom-0 left-0 z-50 flex flex-col bg-white pb-[10px] shadow-[0px_-3px_6px_1px_rgba(0,0,0,0.16)]">
        {/* Discount Banner */}
        <DiscountBanner product={product} isMobile />

        {/* Purchase Bar */}
        <div className="mt-[14px] flex items-center justify-between px-5">
          {showPrice && product?.price && (
            <div className="flex items-baseline">
              <span className="mr-2 text-2xl font-medium text-[#333]">
                ¥
                {formatPrice(product.price)}
              </span>
              {product.oldPrice && (
                <span className="ml-1.5 text-lg text-[#afafaf] line-through">
                  ¥
                  {formatPrice(product.oldPrice)}
                </span>
              )}
            </div>
          )}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleBuyNow}
            disabled={isLoading}
            className="h-[50px] w-[162px] cursor-pointer rounded-[25px] bg-[#4f68d2] text-lg font-medium text-white shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)] transition-all disabled:cursor-not-allowed disabled:opacity-50"
          >
            {isLoading ? tCart('submitting') : t('buy_now')}
          </motion.button>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="mt-[2vw] flex flex-col gap-[1vw]"
    >
      {showPrice && product?.price && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-[1.5vw]">
            <span className="text-fluid-5xl font-medium text-[#333]">
              ¥
              {formatPrice(product.price)}
            </span>
            {product.oldPrice && (
              <span className="text-fluid-2xl text-gray-400 line-through">
                ¥
                {formatPrice(product.oldPrice)}
              </span>
            )}
          </div>
        </div>
      )}
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={handleBuyNow}
        disabled={isLoading}
        className="cursor-target text-fluid-2xl cursor-pointer rounded-full bg-[#1A74BF] px-[3vw] py-[1vw] font-medium text-white transition-all hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? tCart('submitting') : t('buy_now')}
      </motion.button>
    </motion.div>
  );
}
