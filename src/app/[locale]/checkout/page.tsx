'use client';

import type { CartItem, UserInfo } from '@/types/cart';
import type { Order } from '@/types/order';

import { AnimatePresence, motion } from 'framer-motion';
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
import { createOrder } from '@/lib/api';
import { Request as RequestClass } from '@/lib/request';
import { useRouter } from '@/libs/I18nNavigation';

/**
 * 结算页面 - 原版样式
 * 左侧：订单预览
 * 右侧：步骤表单（基本信息 -> 收货信息 -> 支付方式 -> 成功）
 */
// 创建用于订单 API 的请求实例
const orderApiRequest = new RequestClass('https://bc-api.brainco.cn');

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
  const [orderPayAmount, setOrderPayAmount] = useState<number | null>(null); // 订单实际支付金额（分）
  const [showOrderPreviewModal, setShowOrderPreviewModal] = useState(false);

  // 从订单详情加载商品到购物车格式
  const convertOrderItemsToCartItems = (order: Order): CartItem[] => {
    return order.orderItems.map(item => ({
      id: item.productId,
      name: item.productName,
      price: item.productAmount, // 单位：分
      quantity: item.quantity,
      pictureUrl: item.productPictureUrl,
      code: item.product.code,
      checked: true,
    }));
  };

  // 加载订单详情
  const loadOrderByNo = async (orderNo: string) => {
    try {
      const response = await orderApiRequest.get<{ list: Order[] }>(
        `/rsc/api/brainco-orders?orderNo=${orderNo}&pageNo=1&pageSize=10`,
      );

      if (!response.success || !response.data?.list?.length) {
        throw new Error('订单不存在');
      }

      const order = response.data.list[0];
      if (!order) {
        throw new Error('订单不存在');
      }

      // 检查订单状态
      if (order.status === 'CLOSED') {
        toast.error('订单已关闭');
        router.push('/orders');
        return;
      }
      if (order.status === 'SHIPPED') {
        toast.error('订单已发货');
        router.push('/orders');
        return;
      }
      if (order.status === 'PAID') {
        toast.error('订单已支付');
        router.push('/orders');
        return;
      }

      // 只有 WAITING 状态的订单才能继续支付
      if (order.status !== 'WAITING') {
        toast.error('订单状态异常，无法继续支付');
        router.push('/orders');
        return;
      }

      // 填充订单数据
      const cartItems = convertOrderItemsToCartItems(order);
      setCheckedItems(cartItems);
      setDiscountAmount((order.discountAmount || 0) / 100); // 转换为元
      setOrderNumber(order.no);
      // 使用订单的实际支付金额（payAmount，单位：分）
      setOrderPayAmount(order.payAmount);

      // 填充用户信息（从收货信息中获取，因为订单中没有单独的 name 和 phone 字段）
      if (order.consigneeName && order.consigneePhone) {
        setBasicInfo({
          name: order.consigneeName,
          phone: order.consigneePhone,
        });
      }

      // 填充收货信息
      if (order.consigneeName && order.consigneePhone) {
        setShippingInfo({
          name: order.consigneeName,
          phone: order.consigneePhone,
          address: order.consigneeAddress || '',
          province: order.consigneeState || '',
          city: order.consigneeCity || '',
          district: order.consigneeDistrict || '',
          email: '',
        });
      }

      // 直接跳转到支付步骤
      setCurrentStep(2);
    } catch (error) {
      console.error('加载订单失败:', error);
      const errorMessage = error instanceof Error ? error.message : '加载订单失败';
      toast.error(errorMessage);
      router.push('/orders');
    }
  };

  useEffect(() => {
    // 检查 URL 参数中是否有 orderNo
    const searchParams = new URLSearchParams(window.location.search);
    const orderNo = searchParams.get('orderNo');

    if (orderNo) {
      // 如果有 orderNo，加载订单详情
      loadOrderByNo(orderNo);
    } else {
      // 否则，从购物车加载商品
      const items = getCheckedItems();
      setCheckedItems(items);

      // 检查是否有选中的商品
      if (items.length === 0) {
        toast.error(t('Cart.selected_items', { count: 0 }));
        router.push('/cart');
      }
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

      if (!basicInfo) {
        toast.error('请先完成基本信息填写');
        return;
      }

      // 计算总价
      const subtotal = checkedItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      const total = subtotal - discountAmount;

      // 调用订单创建 API
      const response = await createOrder({
        items: checkedItems,
        userInfo: {
          ...data,
          name: basicInfo.name,
          phone: basicInfo.phone,
        },
        paymentMethod: '', // 支付方式在下一步选择
        discountAmount,
        totalAmount: total,
      });

      if (!response.orderNo) {
        throw new Error('订单创建失败：未返回订单号');
      }

      setOrderNumber(response.orderNo);

      // 获取订单详情，获取实际的支付金额
      try {
        const orderDetailResponse = await orderApiRequest.get<{ list: Order[] }>(
          `/rsc/api/brainco-orders?orderNo=${response.orderNo}&pageNo=1&pageSize=10`,
        );

        if (orderDetailResponse.success && orderDetailResponse.data?.list?.[0]) {
          const order = orderDetailResponse.data.list[0];
          // 使用订单的实际支付金额（payAmount，单位：分）
          setOrderPayAmount(order.payAmount);
        }
      } catch (error) {
        // 如果获取订单详情失败，使用前端计算的金额
        console.error('获取订单详情失败，使用前端计算的金额:', error);
        setOrderPayAmount(total);
      }

      setCurrentStep(2);
    } catch (error) {
      console.error('Order creation failed:', error);
      const errorMessage = error instanceof Error ? error.message : '订单创建失败';
      toast.error(errorMessage);
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
  // 如果有订单实际支付金额，优先使用订单金额（单位：分）
  const displayTotal = orderPayAmount !== null ? orderPayAmount : total;

  return (
    <main className="flex min-h-screen flex-col bg-white">
      {/* Logo导航栏 */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4 lg:px-12"
      >
        <div className="flex items-center gap-1 lg:gap-4">
          <Image
            src="https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/icon.webp"
            alt="BrainCo 公司 Logo - 脑机接口技术公司 / BrainCo Company Logo - Brain-Computer Interface Technology Company"
            width={180}
            height={80}
            className="h-auto w-[100px] md:w-[120px] xl:w-[180px]"
            priority
          />
          <div className="relative flex items-center gap-2 pl-3 lg:pl-6">
            <div className="absolute top-1/2 left-0 h-[12px] w-[2px] -translate-y-1/2 bg-gray-800 md:h-[14px] lg:h-[16px]" />
            <span className="font-medium text-gray-800 md:text-fluid-lg" style={{ fontSize: 'clamp(14px, 1.5vw, 1.5rem)' }}>
              {t('page_title')}
            </span>
          </div>
        </div>
        {/* 返回按钮 */}
        <motion.button
          type="button"
          onClick={() => router.back()}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          className="flex items-center text-gray-700 transition-colors hover:text-gray-900"
          aria-label="返回上一页 / Back to previous page"
        >
          <svg
            className="h-5 w-5 md:h-6 md:w-6 lg:h-7 lg:w-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          <span className="font-medium text-gray-800 md:text-fluid-lg" style={{ fontSize: 'clamp(14px, 1.5vw, 1.5rem)' }}>
            {t('back')}
          </span>
        </motion.button>
      </motion.header>

      {/* 主内容区 */}
      <div className="mx-auto flex w-full max-w-[80vw] flex-1 items-center justify-between py-5 lg:px-6 lg:py-10">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex w-full flex-col gap-3 lg:flex-row lg:items-center lg:gap-6 xl:gap-42"
        >
          {/* 左侧：订单预览（仅桌面端显示） */}
          {currentStep < 3 && (
            <div className="hidden w-full lg:block lg:w-1/2 lg:flex-shrink-0">
              <OrderPreview
                items={checkedItems}
                discountAmount={discountAmount}
                currentStep={currentStep}
                onDiscountApplied={setDiscountAmount}
                orderPayAmount={orderPayAmount}
              />
            </div>
          )}

          {/* 右侧：步骤表单 */}
          <div className={`w-full flex-1 lg:w-1/2 ${currentStep < 3 ? 'ml-3 lg:ml-4 xl:ml-5' : 'mx-auto max-w-[720px]'}`}>
            {/* 移动端订单预览按钮（仅在移动端和tablet显示） */}
            {currentStep < 3 && (
              <div className="mb-4 flex justify-center lg:hidden">
                <motion.button
                  type="button"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setShowOrderPreviewModal(true)}
                  className="rounded-lg border border-[#4F68D2] bg-white px-4 py-2 text-base font-medium text-[#4F68D2] transition-colors hover:bg-[#4F68D2] hover:!text-white"
                >
                  {t('view_order_preview')}
                </motion.button>
              </div>
            )}
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
                totalAmount={displayTotal}
                onSubmit={handlePaymentSubmit}
                onBack={handleBack}
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
        <div className="border-t border-[#e0e0e0] py-2.5 lg:py-3">
          <div className="text-center">
            <p className="text-xs text-[#999] md:text-fluid-sm lg:text-base">
              <span>{t('copyright')}</span>
              <span className="mx-1 lg:mx-1.5">·</span>
              <span>{t('privacy_legal')}</span>
              <span className="mx-1 lg:mx-1.5">·</span>
              <span>{t('icp_number')}</span>
            </p>
          </div>
        </div>
      )}

      {/* 移动端订单预览弹窗 */}
      <AnimatePresence>
        {showOrderPreviewModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4 lg:hidden"
            onClick={() => setShowOrderPreviewModal(false)}
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={e => e.stopPropagation()}
              className="relative max-h-[90vh] w-full max-w-md overflow-y-auto"
            >
              {/* 关闭按钮 */}
              <button
                type="button"
                onClick={() => setShowOrderPreviewModal(false)}
                className="cursor-target absolute top-4 right-4 z-10 flex size-8 items-center justify-center rounded-full bg-gray-100 text-gray-600 transition-colors hover:bg-gray-200"
                aria-label="关闭"
              >
                <span className="text-xl leading-none">×</span>
              </button>

              {/* 订单预览内容 */}
              <OrderPreview
                items={checkedItems}
                discountAmount={discountAmount}
                currentStep={currentStep}
                onDiscountApplied={setDiscountAmount}
                orderPayAmount={orderPayAmount}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
