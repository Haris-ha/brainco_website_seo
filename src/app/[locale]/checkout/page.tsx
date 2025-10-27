'use client';

import type { CartItem, UserInfo } from '@/types/cart';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { OrderPreview } from '@/components/checkout/OrderPreview';
import { StepPaymentMethod } from '@/components/checkout/StepPaymentMethod';
import { StepShipping } from '@/components/checkout/StepShipping';
import { StepSuccess } from '@/components/checkout/StepSuccess';
import { StepUserInfo } from '@/components/checkout/StepUserInfo';
import { useCart } from '@/hooks/useCart';
import { useRouter } from '@/libs/I18nNavigation';

/**
 * 结算页面 - 原版样式
 * 左侧：订单预览
 * 右侧：步骤表单（基本信息 -> 收货信息 -> 支付方式 -> 成功）
 */
export default function CheckoutPage() {
  const t = useTranslations('Checkout');
  const router = useRouter();
  const { getCheckedItems, clearCart } = useCart();

  const [currentStep, setCurrentStep] = useState(0); // 0: basic info, 1: shipping, 2: payment, 3: success
  const [basicInfo, setBasicInfo] = useState<{ name: string; phone: string } | null>(null);
  const [shippingInfo, setShippingInfo] = useState<UserInfo | null>(null);
  const [orderNumber, setOrderNumber] = useState('');
  const [checkedItems, setCheckedItems] = useState<CartItem[]>([]);
  const [discountAmount, setDiscountAmount] = useState(0);

  useEffect(() => {
    const items = getCheckedItems();
    setCheckedItems(items);

    // 检查是否有选中的商品
    if (items.length === 0) {
      toast.error(t('Cart.selected_items', { count: 0 }));
      router.push('/cart');
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleBasicInfoSubmit = (data: { name: string; phone: string }) => {
    setBasicInfo(data);
    setCurrentStep(1);
  };

  const handleShippingInfoSubmit = async (data: UserInfo) => {
    try {
      setShippingInfo(data);

      // TODO: 调用订单创建 API
      // const response = await orderApi.createOrder({
      //   items: checkedItems,
      //   basicInfo,
      //   shippingInfo: data,
      // });

      // 模拟订单创建
      await new Promise((resolve) => {
        setTimeout(resolve, 500);
      });
      const mockOrderNumber = `ORD${Date.now()}`;
      setOrderNumber(mockOrderNumber);

      setCurrentStep(2);
    } catch (error) {
      console.error('Order creation failed:', error);
      toast.error(t('Checkout.submit_error') || 'Order creation failed');
      throw error;
    }
  };

  const handlePaymentSubmit = async () => {
    try {
      // TODO: 调用支付 API
      // const response = await paymentApi.createPayment({
      //   orderNumber,
      //   paymentMethod,
      // });

      // 模拟支付
      await new Promise((resolve) => {
        setTimeout(resolve, 1500);
      });

      // 清空购物车中的已结算商品
      clearCart();

      // 进入成功步骤
      setCurrentStep(3);

      toast.success(t('order_success'));
    } catch (error) {
      console.error('Payment failed:', error);
      toast.error(t('Checkout.submit_error') || 'Payment failed');
      throw error;
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  // 计算总价
  const subtotal = checkedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const total = subtotal - discountAmount;

  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Logo导航栏 */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 flex items-center border-b border-gray-100 bg-white px-6 py-4 md:px-12"
      >
        <div className="flex items-center gap-3 md:gap-8">
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/icon.webp"
            alt="BrainCo"
            width={180}
            height={80}
            className="h-auto w-[100px] lg:w-[180px]"
            priority
          />
          <div className="relative flex items-center gap-2 pl-3 md:pl-6">
            <div className="absolute top-1/2 left-0 h-[12px] w-[2px] -translate-y-1/2 bg-gray-800 md:h-[16px]" />
            <span className="font-medium text-gray-800" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)' }}>
              {t('page_title')}
            </span>
          </div>
        </div>
      </motion.header>

      {/* 主内容区 */}
      <div className="mx-auto flex w-full max-w-[80vw] flex-1 items-center justify-between px-3 py-5 md:px-6 md:py-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex w-full flex-col gap-3 md:flex-row md:items-center md:gap-6 lg:gap-42"
        >
          {/* 左侧：订单预览 */}
          {currentStep < 3 && (
            <div className="w-1/2 md:flex-shrink-0">
              <OrderPreview
                items={checkedItems}
                discountAmount={discountAmount}
                currentStep={currentStep}
                onDiscountApplied={setDiscountAmount}
              />
            </div>
          )}

          {/* 右侧：步骤表单 */}
          <div className={`w-1/2 flex-1 ${currentStep < 3 ? 'ml-3 md:ml-4 lg:ml-5' : 'mx-auto max-w-[720px]'}`}>
            {currentStep === 0 && (
              <StepUserInfo
                onContinue={handleBasicInfoSubmit}
                initialData={basicInfo || undefined}
              />
            )}

            {currentStep === 1 && basicInfo && (
              <StepShipping
                basicInfo={basicInfo}
                onSubmit={handleShippingInfoSubmit}
                onBack={handleBack}
                initialData={shippingInfo || undefined}
              />
            )}

            {currentStep === 2 && orderNumber && (
              <StepPaymentMethod
                orderNumber={orderNumber}
                totalAmount={total}
                onSubmit={handlePaymentSubmit}
              />
            )}

            {currentStep === 3 && (
              <StepSuccess orderNumber={orderNumber} />
            )}
          </div>
        </motion.div>
      </div>

      {/* 底部版权信息 */}
      {currentStep < 3 && (
        <div className="border-t border-[#e0e0e0] py-2.5 md:py-3">
          <div className="text-center">
            <p className="text-xs text-[#999] md:text-base">
              <span>{t('copyright')}</span>
              <span className="mx-1 md:mx-1.5">·</span>
              <span>{t('privacy_legal')}</span>
              <span className="mx-1 md:mx-1.5">·</span>
              <span>{t('icp_number')}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
