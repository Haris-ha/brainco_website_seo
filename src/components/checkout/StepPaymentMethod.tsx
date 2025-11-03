'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

type StepPaymentMethodProps = {
  orderNumber: string;
  totalAmount: number;
  onSubmit: () => Promise<void>;
};

/**
 * 第三步：支付方式选择
 * 原版样式：微信支付、支付宝
 */
export function StepPaymentMethod({
  orderNumber: _orderNumber,
  totalAmount: _totalAmount,
  onSubmit: _onSubmit,
}: StepPaymentMethodProps) {
  const t = useTranslations('Checkout');

  const [paymentMethod, setPaymentMethod] = useState('');
  const [qrValue, setQrValue] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const paymentMethods = [
    { name: t('wechat_pay'), value: 'WECHAT_PAY_NATIVE' },
    { name: t('alipay'), value: 'ALIPAY_PAGE' },
  ];

  // 提交支付
  const handleSubmit = async () => {
    if (!paymentMethod) {
      return;
    }

    try {
      setIsSubmitting(true);

      // TODO: 调用支付 API
      // const response = await createPayment(orderNumber, paymentMethod);
      // setQrValue(response.codeUrl);

      // 模拟生成二维码
      setQrValue('mock-qr-code');

      // 开始轮询支付状态
      // startPaymentPolling(orderNumber, onSubmit);
    } catch (error) {
      console.error('Payment failed:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full max-w-[620px]"
    >
      {/* 步骤指示 */}
      <span className="mt-4 mb-6 block text-base md:mt-6 md:mb-8 md:text-lg lg:mt-9 lg:mb-11 lg:text-[24px]">
        {t('step_indicator', { current: 3, total: 3 })}
      </span>

      {/* 标题 */}
      <h1 className="text-3xl text-[#333] md:text-4xl lg:text-[56px]">
        {t('step_3_title')}
      </h1>

      <p className="text-sm md:text-base lg:text-[18px]">
        {t('step_3_desc')}
      </p>

      {/* 支付方式列表 */}
      <ul className="mt-4 flex w-full flex-col md:mt-5">
        {paymentMethods.map(method => (
          <li
            key={method.value}
            className={`cursor-target mb-3 flex h-[60px] items-center justify-center rounded-[30px] border-2 text-lg transition-colors md:mb-4 md:h-[75px] md:rounded-[37px] md:border-[3px] md:text-xl lg:mb-5 lg:h-[90px] lg:rounded-[45px] lg:border-[4px] lg:text-[24px] ${
              paymentMethod === method.value
                ? 'border-[#333] bg-[#333] text-white'
                : 'border-[#333] bg-white text-[#333]'
            }`}
            onClick={() => setPaymentMethod(method.value)}
          >
            {method.name}
          </li>
        ))}
      </ul>

      {/* 二维码显示区 */}
      {qrValue && (
        <div className="flex flex-col items-center">
          <p className="my-1.5 text-xs text-[#707070] md:text-sm">
            {t('scan_to_pay', { method: paymentMethod === 'WECHAT_PAY_NATIVE' ? '微信' : '支付宝' })}
          </p>

          {/* 二维码 */}
          <div className="flex h-[180px] w-[180px] items-center justify-center md:h-[200px] md:w-[200px] lg:h-[240px] lg:w-[240px]">
            {paymentMethod === 'WECHAT_PAY_NATIVE' && (
              <div className="flex items-center justify-center bg-white p-3 md:p-4">
                {/* 这里应该使用 QRCode 组件生成二维码 */}
                <div className="size-[150px] bg-gray-200 md:size-[180px] lg:size-[200px]" />
              </div>
            )}

            {paymentMethod === 'ALIPAY_PAGE' && (
              <div id="payCode" className="flex items-center justify-center">
                {/* 支付宝表单将在这里渲染 */}
                <iframe className="size-[180px] border-0 md:size-[200px] lg:size-[250px]" title="Alipay" />
              </div>
            )}
          </div>

          <p className="my-1.5 text-xs text-[#707070] md:text-sm">
            {t('pay_within_30_min')}
          </p>
        </div>
      )}

      {/* 确定按钮 */}
      {!qrValue && (
        <button
          onClick={handleSubmit}
          disabled={!paymentMethod || isSubmitting}
          className="cursor-target mx-auto mt-12 flex h-[50px] w-[180px] items-center justify-center rounded-[25px] border-none bg-[#4f68d2] text-xl font-medium text-white shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)] transition-all hover:bg-[#3d52a8] disabled:cursor-not-allowed disabled:bg-[#f4f4f4] disabled:text-[#707070] md:mt-16 md:h-[64px] md:w-[220px] md:rounded-[32px] md:text-2xl lg:mt-26 lg:h-[82px] lg:w-[260px] lg:rounded-[40px] lg:text-[34px]"
        >
          {t('confirm')}
        </button>
      )}
    </motion.div>
  );
}
