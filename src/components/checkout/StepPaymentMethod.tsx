'use client';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

type StepPaymentMethodProps = {
  orderNumber: string;
  totalAmount: number;
  onSubmit: () => Promise<void>;
  onBack: () => void;
};

export function StepPaymentMethod({
  orderNumber: _orderNumber,
  totalAmount: _totalAmount,
  onSubmit: _onSubmit,
  onBack,
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
    <motion.section
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative w-full max-w-[620px]"
      aria-labelledby="step-3-title"
    >

      {/* 返回按钮 */}
      <button
        type="button"
        onClick={onBack}
        aria-label={t('back')}
        className="cursor-target flex items-center text-xs leading-6 md:top-[20px] md:left-[-50px] md:text-sm lg:top-[24px] lg:left-[-60px] lg:text-[15px] lg:leading-7"
      >
        <span className="mr-1 text-sm md:text-base">←</span>
        <span>{t('back')}</span>
      </button>

      {/* 步骤指示 */}
      {/* 步骤指示 */}
      <nav aria-label={t('step_indicator', { current: 2, total: 3 })}>
        <span className="mt-10 mb-4 block text-base md:mt-4 md:mb-5 md:text-base lg:mt-5 lg:mb-6 lg:text-lg">
          {t('step_indicator', { current: 3, total: 3 })}
        </span>
      </nav>

      {/* 标题 */}
      <h1 id="step-3-title" className="text-2xl text-[#333] md:text-3xl lg:text-4xl">
        {t('step_3_title')}
      </h1>

      <p className="mt-3 text-lg md:mt-4 md:text-xl lg:mt-5 lg:text-2xl">
        {t('step_3_desc')}
      </p>

      {/* 支付方式列表 */}
      <fieldset className="mt-4 md:mt-5">
        <legend className="sr-only">{t('payment_method')}</legend>
        <ul className="flex w-full flex-col" role="radiogroup" aria-label={t('payment_method')}>
          {paymentMethods.map(method => (
            <li key={method.value} className="mb-3 md:mb-4 lg:mb-5">
              <button
                type="button"
                onClick={() => setPaymentMethod(method.value)}
                aria-pressed={paymentMethod === method.value}
                aria-label={`${t('payment_method')} - ${method.name}`}
                className={`cursor-target flex h-[60px] w-full items-center justify-center rounded-[30px] border-1 text-lg transition-colors md:h-[75px] md:rounded-[37px] md:border-[3px] md:text-xl lg:h-[72px] lg:rounded-[45px] lg:border-[2px] lg:text-[24px] ${
                  paymentMethod === method.value
                    ? 'border-[#4f68d2] bg-[#4f68d2] !text-white'
                    : 'border-[#333] bg-white !text-[#333]'
                }`}
              >
                {method.name}
              </button>
            </li>
          ))}
        </ul>
      </fieldset>

      {/* 二维码显示区 */}
      {qrValue && (
        <section className="flex flex-col items-center" aria-labelledby="qr-code-title">
          <h2 id="qr-code-title" className="sr-only">{t('scan_to_pay', { method: paymentMethod === 'WECHAT_PAY_NATIVE' ? t('wechat_pay') : t('alipay') })}</h2>
          <p className="my-1.5 text-sm text-[#707070] md:text-base">
            {t('scan_to_pay', { method: paymentMethod === 'WECHAT_PAY_NATIVE' ? t('wechat_pay') : t('alipay') })}
          </p>

          {/* 二维码 */}
          <figure className="flex h-[180px] w-[180px] items-center justify-center md:h-[200px] md:w-[200px] lg:h-[240px] lg:w-[240px]">
            {paymentMethod === 'WECHAT_PAY_NATIVE' && (
              <div className="flex items-center justify-center bg-white p-3 md:p-4" role="img" aria-label={t('scan_to_pay', { method: t('wechat_pay') })}>
                {/* 这里应该使用 QRCode 组件生成二维码 */}
                <div className="size-[150px] bg-gray-200 md:size-[180px] lg:size-[200px]" />
              </div>
            )}

            {paymentMethod === 'ALIPAY_PAGE' && (
              <div id="payCode" className="flex items-center justify-center" role="img" aria-label={t('scan_to_pay', { method: t('alipay') })}>
                {/* 支付宝表单将在这里渲染 */}
                <iframe className="size-[180px] border-0 md:size-[200px] lg:size-[250px]" title={t('scan_to_pay', { method: t('alipay') })} />
              </div>
            )}
          </figure>

          <p className="my-1.5 text-sm text-[#707070] md:text-base text-center">
            {t('pay_within_30_min')}
          </p>
        </section>
      )}

      {/* 确定按钮 */}
      {!qrValue && (
        <button
          type="button"
          onClick={handleSubmit}
          disabled={!paymentMethod || isSubmitting}
          aria-label={t('confirm')}
          className="cursor-target mx-auto mt-12 flex h-[50px] w-[180px] items-center justify-center rounded-[25px] border-none bg-[#4f68d2] text-xl font-medium !text-white shadow-[0px_3px_20px_1px_rgba(0,0,0,0.16)] transition-all hover:bg-[#3d52a8] disabled:cursor-not-allowed disabled:bg-[#f4f4f4] disabled:!text-[#707070] md:mt-16 md:h-[64px] md:w-[220px] md:rounded-[32px] md:text-2xl lg:mt-26 lg:h-[72px] lg:w-[260px] lg:rounded-[40px] lg:text-[34px]"
        >
          {t('confirm')}
        </button>
      )}
    </motion.section>
  );
}
