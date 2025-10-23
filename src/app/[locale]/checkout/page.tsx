'use client';

import type { UserInfo } from '@/types/cart';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
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
  const [checkedItems] = useState(() => getCheckedItems());
  const [discountAmount, setDiscountAmount] = useState(0);

  useEffect(() => {
    const items = getCheckedItems();

    // 检查是否有选中的商品
    if (items.length === 0 && currentStep === 0) {
      toast.error(t('Cart.selected_items', { count: 0 }));
      router.push('/cart');
    }
  }, [getCheckedItems, currentStep, router, t]);

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
      {/* 主内容区 */}
      <div className="mx-auto flex max-w-[90vw] flex-1 items-center justify-around px-4 py-6 md:px-8 md:py-14">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex w-full flex-col gap-4 md:flex-row md:items-center md:gap-8"
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
          <div className={`w-1/2 flex-1 ${currentStep < 3 ? 'ml-4 ' : 'mx-auto max-w-[620px]'}`}>
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
        <div className="border-t border-[#e0e0e0] py-3 md:py-4">
          <div className="text-center">
            <p className="text-xs text-[#999] md:text-sm lg:text-base">
              <span>{t('copyright')}</span>
              <span className="mx-1 md:mx-2">·</span>
              <span>{t('privacy_legal')}</span>
              <span className="mx-1 md:mx-2">·</span>
              <span>{t('icp_number')}</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
