'use client';

import type { CartItem, UserInfo } from '@/types/cart';
import { motion } from 'framer-motion';
import { CreditCard, Smartphone } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { OrderPreview } from './OrderPreview';

interface StepPaymentProps {
  items: CartItem[];
  userInfo: UserInfo;
  onSubmit: (paymentMethod: string, discountCode?: string) => Promise<void>;
  onBack: () => void;
}

export function StepPayment({
  items,
  userInfo,
  onSubmit,
  onBack,
}: StepPaymentProps) {
  const t = useTranslations('Checkout');
  const [paymentMethod, setPaymentMethod] = useState<string>('wechat');
  const [discountCode, setDiscountCode] = useState('');
  const [discountAmount, setDiscountAmount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const paymentMethods = [
    {
      id: 'wechat',
      name: t('wechat_pay'),
      icon: <Smartphone className="size-6" />,
    },
    {
      id: 'alipay',
      name: t('alipay'),
      icon: <CreditCard className="size-6" />,
    },
  ];

  const handleApplyDiscount = async () => {
    if (!discountCode.trim()) {
      toast.error(t('Checkout.discount_code_placeholder'));
      return;
    }

    // TODO: 调用API验证优惠码
    // 这里暂时模拟
    toast.success(`${t('apply')} ${discountCode}`);
    setDiscountAmount(1000); // 示例：10元优惠
  };

  const handleSubmit = async () => {
    try {
      setIsSubmitting(true);
      await onSubmit(paymentMethod, discountCode || undefined);
    }
    catch (error) {
      console.error('Payment submission failed:', error);
      toast.error(t('Checkout.submit_error') || 'Submission failed');
    }
    finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mx-auto grid max-w-[1200px] gap-8 md:grid-cols-2"
    >
      {/* 左侧：支付方式和优惠码 */}
      <div className="space-y-6">
        {/* 收货信息确认 */}
        <div className="rounded-lg bg-[#f9f9f9] p-6">
          <h3 className="text-fluid-xl mb-4 font-medium text-[#333]">
            {t('user_info')}
          </h3>
          <div className="space-y-2 text-fluid-base text-[#595757]">
            <p>
              <span className="font-medium text-[#333]">{t('name')}:</span>
              {' '}
              {userInfo.name}
            </p>
            <p>
              <span className="font-medium text-[#333]">{t('phone')}:</span>
              {' '}
              {userInfo.phone}
            </p>
            <p>
              <span className="font-medium text-[#333]">{t('address')}:</span>
              {' '}
              {userInfo.address}
            </p>
          </div>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={onBack}
            className="text-fluid-base mt-4 text-[#4F68D2] hover:underline"
          >
            ← {t('back')}
          </motion.button>
        </div>

        {/* 支付方式选择 */}
        <div className="rounded-lg bg-[#f9f9f9] p-6">
          <h3 className="text-fluid-xl mb-4 font-medium text-[#333]">
            {t('payment_method')}
          </h3>
          <div className="space-y-3">
            {paymentMethods.map(method => (
              <motion.div
                key={method.id}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setPaymentMethod(method.id)}
                className={`cursor-target flex cursor-pointer items-center gap-3 rounded-lg border-2 p-4 transition-all ${
                  paymentMethod === method.id
                    ? 'border-[#4F68D2] bg-[#4F68D2]/5'
                    : 'border-[#e0e0e0] bg-white hover:border-[#4F68D2]/50'
                }`}
              >
                <div
                  className={`flex size-[24px] items-center justify-center rounded-full border-2 ${
                    paymentMethod === method.id
                      ? 'border-[#4F68D2]'
                      : 'border-[#ccc]'
                  }`}
                >
                  {paymentMethod === method.id && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="size-[12px] rounded-full bg-[#4F68D2]"
                    />
                  )}
                </div>
                <div className="text-[#595757]">{method.icon}</div>
                <span className="text-fluid-base font-medium text-[#333]">
                  {method.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* 优惠码 */}
        <div className="rounded-lg bg-[#f9f9f9] p-6">
          <h3 className="text-fluid-xl mb-4 font-medium text-[#333]">
            {t('discount_code')}
          </h3>
          <div className="flex gap-2">
            <input
              type="text"
              value={discountCode}
              onChange={e => setDiscountCode(e.target.value)}
              placeholder={t('discount_code_placeholder')}
              className="text-fluid-base flex-1 rounded-lg border border-[#e0e0e0] px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#4F68D2]"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleApplyDiscount}
              className="text-fluid-base cursor-target rounded-lg bg-[#4F68D2] px-6 py-2 text-white hover:bg-[#3d52a8]"
            >
              {t('apply')}
            </motion.button>
          </div>
        </div>

        {/* 提交订单按钮 */}
        <motion.button
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="text-fluid-xl md:text-fluid-2xl cursor-target h-[50px] w-full rounded-[25px] bg-[#4F68D2] font-medium text-white shadow-lg transition-all hover:bg-[#3d52a8] disabled:cursor-not-allowed disabled:opacity-50 md:h-[82px] md:rounded-[41px]"
        >
          {isSubmitting ? t('submitting') : t('submit_order')}
        </motion.button>
      </div>

      {/* 右侧：订单预览 */}
      <div className="md:sticky md:top-8 md:h-fit">
        <OrderPreview
          items={items}
          discountAmount={discountAmount}
          shippingFee={0}
        />
      </div>
    </motion.div>
  );
}

