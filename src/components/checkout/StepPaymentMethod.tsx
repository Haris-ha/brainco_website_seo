'use client';

import type { PaymentResponse } from '@/lib/api';
import type { PaymentType } from '@/types/order';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { QRCodeSVG } from 'qrcode.react';

import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';
import { checkPaymentStatus, createPayment } from '@/lib/api';

type StepPaymentMethodProps = {
  orderNumber: string;
  totalAmount: number;
  onSubmit: () => Promise<void>;
  onBack: () => void;
};

export function StepPaymentMethod({
  orderNumber,
  totalAmount: _totalAmount,
  onSubmit,
  onBack,
}: StepPaymentMethodProps) {
  const t = useTranslations('Checkout');

  const [paymentMethod, setPaymentMethod] = useState<PaymentType | ''>('');
  const [qrValue, setQrValue] = useState('');
  const [paymentResponse, setPaymentResponse] = useState<PaymentResponse | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isPolling, setIsPolling] = useState(false);
  const pollingIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const alipayFormRef = useRef<HTMLDivElement>(null);

  const paymentMethods = [
    { name: t('wechat_pay'), value: 'WECHAT_PAY_NATIVE' as PaymentType },
    { name: t('alipay'), value: 'ALIPAY_PAGE' as PaymentType },
  ];

  // 清理轮询
  useEffect(() => {
    return () => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
      }
    };
  }, []);

  // 渲染支付宝表单
  useEffect(() => {
    if (paymentResponse?.formHtml && paymentMethod === 'ALIPAY_PAGE' && alipayFormRef.current) {
      // 清空容器
      alipayFormRef.current.innerHTML = '';
      // 创建 iframe 来显示支付宝表单（参考原网站实现）
      const iframe = document.createElement('iframe');
      iframe.style.width = '100%';
      iframe.style.height = '100%';
      iframe.style.minHeight = '300px';
      iframe.style.border = '0';
      alipayFormRef.current.appendChild(iframe);
      const iframeDoc = iframe.contentWindow?.document;
      if (iframeDoc) {
        iframeDoc.open();
        iframeDoc.write(paymentResponse.formHtml);
        iframeDoc.close();
      }
    }
  }, [paymentResponse, paymentMethod]);

  // 轮询支付状态
  const startPaymentPolling = async () => {
    if (!orderNumber || isPolling) {
      return;
    }

    setIsPolling(true);

    pollingIntervalRef.current = setInterval(async () => {
      try {
        const status = await checkPaymentStatus(orderNumber);
        if (status.paid) {
          // 支付成功
          if (pollingIntervalRef.current) {
            clearInterval(pollingIntervalRef.current);
            pollingIntervalRef.current = null;
          }
          setIsPolling(false);
          toast.success(t('order_success'));
          await onSubmit();
        }
      } catch (error) {
        console.error('查询支付状态失败:', error);
      }
    }, 3000); // 每3秒查询一次

    // 30分钟后停止轮询
    setTimeout(() => {
      if (pollingIntervalRef.current) {
        clearInterval(pollingIntervalRef.current);
        pollingIntervalRef.current = null;
        setIsPolling(false);
      }
    }, 30 * 60 * 1000);
  };

  // 提交支付
  const handleSubmit = async () => {
    if (!paymentMethod || !orderNumber) {
      return;
    }

    try {
      setIsSubmitting(true);
      // 清空之前的二维码（参考原网站实现）
      setQrValue('');
      if (alipayFormRef.current) {
        alipayFormRef.current.innerHTML = '';
      }

      // 调用支付 API
      const response = await createPayment(orderNumber, paymentMethod as PaymentType);

      setPaymentResponse(response);

      if (paymentMethod === 'WECHAT_PAY_NATIVE') {
        if (response?.codeUrl) {
          setQrValue(response.codeUrl);
          // 开始轮询支付状态
          await startPaymentPolling();
        } else {
          toast.error('获取微信支付二维码失败：未返回 codeUrl');
        }
      } else if (paymentMethod === 'ALIPAY_PAGE') {
        if (response?.formHtml) {
          // 设置 qrValue 为 'ALIPAY_PAGE' 以显示支付宝区域（参考原网站）
          setQrValue('ALIPAY_PAGE');
          // 立即渲染支付宝表单（参考原网站实现）
          if (alipayFormRef.current) {
            alipayFormRef.current.innerHTML = '';
            const iframe = document.createElement('iframe');
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            iframe.style.minHeight = '300px';
            iframe.style.border = '0';
            alipayFormRef.current.appendChild(iframe);
            const iframeDoc = iframe.contentWindow?.document;
            if (iframeDoc) {
              iframeDoc.open();
              iframeDoc.write(response.formHtml);
              iframeDoc.close();
            }
          }
          // 支付宝表单会在 useEffect 中自动渲染
          await startPaymentPolling();
        } else {
          toast.error('获取支付宝支付页面失败：未返回 formHtml');
        }
      } else {
        toast.error('获取支付二维码失败');
      }
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : '创建支付失败';
      toast.error(errorMessage);
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
            {paymentMethod === 'WECHAT_PAY_NATIVE' ? '请使用微信扫码支付' : '正在跳转到支付宝支付页面...'}
          </p>

          {/* 二维码 */}
          <figure className="flex h-[180px] w-[180px] items-center justify-center md:h-[200px] md:w-[200px] lg:h-[240px] lg:w-[240px]">
            {paymentMethod === 'WECHAT_PAY_NATIVE' && qrValue && qrValue !== 'ALIPAY_PAGE' && (
              <div className="flex items-center justify-center bg-white p-3 md:p-4" role="img" aria-label={t('scan_to_pay', { method: t('wechat_pay') })}>
                {/* 使用 qrcode.react 生成二维码（codeUrl 是微信支付 URL，需要生成二维码） */}
                <QRCodeSVG
                  value={qrValue}
                  size={180}
                  level="H"
                  className="size-[150px] md:size-[180px] lg:size-[200px]"
                />
              </div>
            )}

            {paymentMethod === 'ALIPAY_PAGE' && qrValue === 'ALIPAY_PAGE' && (
              <div
                ref={alipayFormRef}
                id="payCode"
                className="flex min-h-[300px] w-full items-center justify-center md:min-h-[350px] lg:min-h-[400px]"
                role="img"
                aria-label={t('scan_to_pay', { method: t('alipay') })}
              >
                {/* 支付宝表单将在这里通过 iframe 渲染 */}
                {!paymentResponse?.formHtml && (
                  <div className="flex min-h-[300px] w-full items-center justify-center border border-gray-200 md:min-h-[350px] lg:min-h-[400px]">
                    <p className="text-sm text-gray-500">正在加载支付页面...</p>
                  </div>
                )}
              </div>
            )}
          </figure>

          <p className="my-1.5 text-center text-sm text-[#707070] md:text-base">
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
