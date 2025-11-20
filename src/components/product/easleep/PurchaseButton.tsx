'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useCart } from '@/hooks/useCart';
import { useRouter } from '@/libs/I18nNavigation';

type PurchaseButtonProps = {
  product: any;
  buttonText?: string;
  mode?: 'buy' | 'add-to-cart'; // 'buy' 立即购买，'add-to-cart' 加入购物车
};

export default function PurchaseButton({
  product,
  buttonText,
  mode = 'buy',
}: PurchaseButtonProps) {
  const t = useTranslations('Cart');
  const router = useRouter();
  const { addToCart, toggleItemCheck } = useCart();
  const [isLoading, setIsLoading] = useState(false);

  const handleAddToCart = async () => {
    setIsLoading(true);

    try {
      // 使用新的购物车系统添加商品
      // 根据API数据，easleep产品的价格单位是"分"（如249900 = 2499元）
      // 购物车系统要求价格单位为"分"，所以直接使用API返回的价格
      addToCart({
        id: product.id,
        name: product.name,
        price: product.price, // API返回的价格已经是"分"单位
        pictureUrl: product.pictureUrl || product.image || 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/DJqKOvlTBcFyidSf.webp',
        code: product.code || product.id.toString(),
      });

      // 根据模式跳转
      if (mode === 'buy') {
        // 立即购买：标记为选中并跳转到购物车页面
        setTimeout(() => {
          toggleItemCheck(product.id);
          router.push('/cart');
        }, 300);
      } else {
        // 仅加入购物车，不跳转
        // toast 提示已在 useCart hook 中处理
      }
    } catch (error) {
      console.error('Error adding to cart:', error);
      toast.error(t('min_quantity_error'));
    } finally {
      setIsLoading(false);
    }
  };

  const displayText = buttonText || (mode === 'buy' ? t('buy_now') : t('add_to_cart'));

  return (
    <div className="mt-10 flex w-full flex-col items-center justify-center gap-4 md:flex-row md:gap-6">
      {/* 立即购买按钮 */}
      {mode === 'buy' && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          disabled={isLoading}
          className="cursor-target text-fluid-2xl md:text-fluid-3xl h-[50px] w-full cursor-pointer self-center rounded-[25px] border-0 bg-[#4f68d2] font-medium !text-white shadow-lg transition-all hover:bg-[#3d52a8] disabled:cursor-not-allowed disabled:opacity-50 md:h-[60px] md:w-[260px] md:rounded-[40px]"
        >
          {isLoading ? t('submitting') : displayText}
        </motion.button>
      )}

      {/* 加入购物车按钮 */}
      {mode === 'add-to-cart' && (
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleAddToCart}
          disabled={isLoading}
          className="cursor-target text-fluid-2xl md:text-fluid-3xl h-[50px] w-full cursor-pointer self-center rounded-[25px] border-2 border-[#4f68d2] bg-white font-medium text-[#4f68d2] transition-all hover:bg-[#4f68d2] hover:!text-white disabled:cursor-not-allowed disabled:opacity-50 md:h-[60px] md:w-[260px] md:rounded-[40px]"
        >
          {isLoading ? t('submitting') : displayText}
        </motion.button>
      )}
    </div>
  );
}
