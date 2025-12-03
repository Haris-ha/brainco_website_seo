'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
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
  const [isScrolling, setIsScrolling] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);

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
    return (price / 100);
  };

  // Handle scroll detection and bottom detection for mobile
  useEffect(() => {
    if (!isMobile) {
      return;
    }

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
  }, [isMobile]);

  if (isMobile) {
    return (
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: isScrolling || isAtBottom ? 200 : 0 }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="fixed right-0 bottom-0 left-0 z-40 flex flex-col bg-white pt-2 shadow-lg"
      >
        {/* Discount Banner */}
        <DiscountBanner product={product} isMobile />

        {/* Purchase Bar */}
        <div className="px-4 py-4">
          <div className="flex items-center justify-between">
            {showPrice && product?.price && (
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
            )}
            <div className="w-[120px]">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleBuyNow}
                disabled={isLoading}
                className="text-fluid-lg h-[40px] w-[120px] cursor-pointer rounded-[22px] bg-[#1A74BF] font-medium !text-white transition-all disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isLoading ? tCart('submitting') : t('buy_now')}
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 1.2 }}
      className="mt-[2vw] flex flex-col gap-[2vw]"
    >
      {showPrice && product?.price && (
        <div className="flex flex-col">
          <div className="flex items-baseline gap-[1.5vw]">
            <span className="text-fluid-3xl font-medium text-[#333]">
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
        className="cursor-target text-fluid-2xl h-[72px] w-[260px] cursor-pointer rounded-[41px] bg-[#1A74BF] font-medium !text-white shadow-lg transition-all hover:bg-[#1A74BF]/80 disabled:cursor-not-allowed disabled:opacity-50"
      >
        {isLoading ? tCart('submitting') : t('buy_now')}
      </motion.button>
    </motion.div>
  );
}
