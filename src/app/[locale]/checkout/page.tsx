'use client';

import { useCart } from '@/hooks/useCart';
import type { UserInfo } from '@/types/cart';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useRouter } from '@/libs/I18nNavigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { CheckoutSteps } from '@/components/checkout/CheckoutSteps';
import { StepPayment } from '@/components/checkout/StepPayment';
import { StepSuccess } from '@/components/checkout/StepSuccess';
import { StepUserInfo } from '@/components/checkout/StepUserInfo';

export default function CheckoutPage() {
  const t = useTranslations('Checkout');
  const router = useRouter();
  const { getCheckedItems, clearCart } = useCart();

  const [currentStep, setCurrentStep] = useState(0); // 0: user info, 1: payment, 2: success
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null);
  const [orderNumber, setOrderNumber] = useState('');
  const [checkedItems, setCheckedItems] = useState(getCheckedItems());

  useEffect(() => {
    const items = getCheckedItems();

    // 检查是否有选中的商品
    if (items.length === 0 && currentStep === 0) {
      toast.error(t('Cart.selected_items', { count: 0 }));
      router.push('/cart');
      return;
    }

    setCheckedItems(items);
  }, [getCheckedItems, currentStep, router, t]);

  // 检查登录状态（如果需要）
  useEffect(() => {
    // TODO: 添加登录检查逻辑
    // const token = localStorage.getItem('token');
    // if (!token) {
    //   toast.error(t('login_required'));
    //   router.push('/login?redirect=/checkout');
    // }
  }, []);

  const handleUserInfoSubmit = (data: UserInfo) => {
    setUserInfo(data);
    setCurrentStep(1);
  };

  const handlePaymentSubmit = async (paymentMethod: string, discountCode?: string) => {
    try {
      // TODO: 调用订单创建 API
      // const response = await orderApi.createOrder({
      //   items: checkedItems,
      //   userInfo,
      //   paymentMethod,
      //   discountCode,
      // });

      // 模拟订单创建
      await new Promise(resolve => setTimeout(resolve, 1500));

      const mockOrderNumber = `ORD${Date.now()}`;
      setOrderNumber(mockOrderNumber);

      // 清空购物车中的已结算商品
      clearCart();

      // 进入成功步骤
      setCurrentStep(2);

      toast.success(t('order_success'));
    }
    catch (error) {
      console.error('Order creation failed:', error);
      toast.error(t('Checkout.submit_error') || 'Order creation failed');
      throw error;
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="mx-auto max-w-[1400px] px-4 py-8 md:px-8 md:py-12"
      >
        {/* 页面标题 */}
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-fluid-6xl mb-8 text-center font-medium text-[#333] md:mb-12"
        >
          {t('title')}
        </motion.h1>

        {/* 步骤指示器 */}
        <CheckoutSteps currentStep={currentStep} />

        {/* 步骤内容 */}
        <div className="mt-8 md:mt-12">
          {currentStep === 0 && (
            <StepUserInfo
              onContinue={handleUserInfoSubmit}
              initialData={userInfo || undefined}
            />
          )}

          {currentStep === 1 && userInfo && (
            <StepPayment
              items={checkedItems}
              userInfo={userInfo}
              onSubmit={handlePaymentSubmit}
              onBack={handleBack}
            />
          )}

          {currentStep === 2 && (
            <StepSuccess orderNumber={orderNumber} />
          )}
        </div>
      </motion.div>
    </div>
  );
}

