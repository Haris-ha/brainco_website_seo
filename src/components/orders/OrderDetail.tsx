'use client';

import type { Order } from '@/types/order';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import toast from 'react-hot-toast';

type OrderDetailProps = {
  order: Order;
  onBack: () => void;
};

/**
 * 订单详情组件
 * 显示订单的完整信息
 */
export function OrderDetail({ order, onBack }: OrderDetailProps) {
  const t = useTranslations('Orders');
  const tCheckout = useTranslations('Checkout');

  // 复制到剪贴板
  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      toast.success(t('copy_success'));
    } catch {
      toast.error(t('copy_failed'));
    }
  };

  // 获取支付方式文本
  const getPaymentMethodText = (payType?: string) => {
    if (!payType) {
      return '';
    }
    if (
      payType === 'WECHAT_PAY_NATIVE'
      || payType === 'WECHAT_PAY_JSAPI'
      || payType === 'WECHAT_PAY_H5'
    ) {
      return tCheckout('wechat_pay');
    }
    return tCheckout('alipay');
  };

  // 计算未发货商品
  const getUnshippedItems = () => {
    if (!order.logistics?.length) {
      return order.orderItems;
    }

    const shippedProductIds = new Map<string, number>();

    // 统计已发货的商品数量
    order.logistics.forEach((logistics) => {
      logistics.items.forEach((item) => {
        const current = shippedProductIds.get(item.productId) || 0;
        shippedProductIds.set(item.productId, current + item.quantity);
      });
    });

    // 计算未发货商品
    return order.orderItems
      .map((item) => {
        const shippedQty = shippedProductIds.get(item.productId) || 0;
        const remainingQty = item.quantity - shippedQty;
        return remainingQty > 0
          ? { ...item, quantity: remainingQty }
          : null;
      })
      .filter((item): item is typeof order.orderItems[0] => item !== null);
  };

  const unshippedItems = getUnshippedItems();

  // 获取VIP服务商品（去重）
  const getVipServiceItems = () => {
    const uniqueProducts = new Map();
    order.orderItems.forEach((item) => {
      if (item.contactUrl && !uniqueProducts.has(item.product.code)) {
        uniqueProducts.set(item.product.code, item);
      }
    });
    return Array.from(uniqueProducts.values());
  };

  const vipServiceItems = getVipServiceItems();

  return (
    <motion.div
      initial={{ x: '100%' }}
      animate={{ x: 0 }}
      exit={{ x: '100%' }}
      transition={{ type: 'spring', damping: 25, stiffness: 200 }}
      className="fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white"
    >
      {/* 头部 */}
      <div className="sticky top-0 z-10 border-b border-gray-100 bg-white px-6 py-4 md:px-8">
        <motion.button
          type="button"
          onClick={onBack}
          whileHover={{ x: -5 }}
          className="flex cursor-pointer items-center gap-2 text-gray-700 transition-colors hover:text-gray-900 md:cursor-none"
          style={{ fontSize: 'clamp(1rem, 1.5vw, 1.125rem)' }}
        >
          <span>←</span>
          <span>{t('back_to_overview')}</span>
        </motion.button>
      </div>

      <div className="flex-1 px-6 py-6 md:px-12 md:py-8">
        {/* 已发货包裹 */}
        {order.logistics?.map((logistics, index) => (
          <motion.div
            key={`${logistics.courierNumber}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="mb-8"
          >
            {/* 包裹标题 */}
            <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="font-medium" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)' }}>
                {t('package')}
                {' '}
                {index + 1}
              </h3>
              <div className="flex flex-col items-end gap-1 text-gray-600" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>
                <span>
                  {t('courier_number')}
                  :
                  {' '}
                  {logistics.courierNumber}
                </span>
                <span>
                  {t('shipping_time')}
                  :
                  {' '}
                  {new Date(logistics.sendDate).toLocaleString()}
                </span>
              </div>
            </div>

            {/* 包裹商品 */}
            <div className="space-y-6 border-b border-gray-100 pb-6">
              {logistics.items.map((logisticsItem, itemIndex) => {
                const orderItem = order.orderItems.find(
                  item => item.productId === logisticsItem.productId,
                );
                if (!orderItem) {
                  return null;
                }

                return (
                  <div key={`${logisticsItem.productId}-${itemIndex}`} className="flex items-center gap-4 md:gap-6">
                    <div className="h-[100px] w-[100px] flex-shrink-0 overflow-hidden rounded-lg md:h-[120px] md:w-[120px]">
                      <img
                        src={orderItem.productPictureUrl}
                        alt={orderItem.productName}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="flex flex-1 flex-col gap-2">
                      <span className="text-gray-700" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>
                        {orderItem.productName}
                      </span>
                      <div className="flex items-center justify-between text-gray-600" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}>
                        <span>
                          ¥
                          {(orderItem.productAmount / 100).toFixed(2)}
                        </span>
                        <span>
                          {tCheckout('quantity')}
                          :
                          {logisticsItem.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        ))}

        {/* 未发货商品（已支付） */}
        {unshippedItems.length > 0 && order.status !== 'WAITING' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: (order.logistics?.length || 0) * 0.1 }}
            className="mb-8"
          >
            <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="font-medium" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)' }}>
                {t('package')}
                {' '}
                {(order.logistics?.length || 0) + 1}
              </h3>
              <span className="text-gray-600" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>
                {t('paid_status')}
              </span>
            </div>

            <div className="space-y-6 border-b border-gray-100 pb-6">
              {unshippedItems.map((item, index) => (
                <div key={`${item.productId}-${index}`} className="flex items-center gap-4 md:gap-6">
                  <div className="h-[100px] w-[100px] flex-shrink-0 overflow-hidden rounded-lg md:h-[120px] md:w-[120px]">
                    <img
                      src={item.productPictureUrl}
                      alt={item.productName}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <span className="text-gray-700" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>
                      {item.productName}
                    </span>
                    <div className="flex items-center justify-between text-gray-600" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}>
                      <span>
                        ¥
                        {(item.productAmount / 100).toFixed(2)}
                      </span>
                      <span>
                        {tCheckout('quantity')}
                        :
                        {item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 待支付订单 */}
        {order.status === 'WAITING' && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="mb-4 flex items-center justify-between border-b border-gray-100 pb-4">
              <h3 className="font-medium" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)' }}>
                {t('order_info')}
              </h3>
              <span className="text-gray-600" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>
                {t('pending_payment')}
              </span>
            </div>

            <div className="space-y-6 border-b border-gray-100 pb-6">
              {order.orderItems.map((item, index) => (
                <div key={`${item.productId}-${index}`} className="flex items-center gap-4 md:gap-6">
                  <div className="h-[100px] w-[100px] flex-shrink-0 overflow-hidden rounded-lg md:h-[120px] md:w-[120px]">
                    <img
                      src={item.productPictureUrl}
                      alt={item.productName}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="flex flex-1 flex-col gap-2">
                    <span className="text-gray-700" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>
                      {item.productName}
                    </span>
                    <div className="flex items-center justify-between text-gray-600" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}>
                      <span>
                        ¥
                        {(item.productAmount / 100).toFixed(2)}
                      </span>
                      <span>
                        {tCheckout('quantity')}
                        :
                        {item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        )}

        {/* 价格汇总 */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mb-8 space-y-3 px-6 py-6 md:px-12"
        >
          {order.discountAmount && order.discountAmount > 0 && (
            <div className="flex items-center justify-between" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>
              <span className="text-gray-600">{tCheckout('discount_code')}</span>
              <span className="text-gray-900">
                ¥
                {(order.discountAmount / 100).toFixed(2)}
              </span>
            </div>
          )}
          {order.changeAmount && order.changeAmount !== 0 && (
            <div className="flex items-center justify-between" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>
              <span className="text-gray-600">{tCheckout('merchant_price_adjustment')}</span>
              <span className="text-gray-900">
                ¥
                {(order.changeAmount / 100).toFixed(2)}
              </span>
            </div>
          )}
          <div className="flex items-center justify-between border-t border-gray-100 pt-3">
            <span className="text-gray-600" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>
              {t('actual_payment')}
            </span>
            <span className="font-semibold text-gray-900" style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)' }}>
              ¥
              {(order.payAmount / 100).toFixed(2)}
            </span>
          </div>
        </motion.div>

        {/* VIP服务 */}
        {vipServiceItems.length > 0 && (order.status === 'SHIPPED' || order.status === 'PAID') && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mb-8 flex justify-end gap-4 border-t border-gray-100 pt-8"
          >
            {vipServiceItems.map((item, index) => (
              <div key={`${item.product.code}-${index}`} className="flex flex-col items-center gap-2">
                <div className="h-[100px] w-[100px] overflow-hidden rounded-lg">
                  <img
                    src={item.contactUrl}
                    alt={`VIP Service ${item.product.code}`}
                    className="h-full w-full object-cover"
                  />
                </div>
                <p className="text-center text-gray-600" style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)' }}>
                  {t('vip_service_scan')}
                </p>
                <p className="text-center text-gray-600" style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)' }}>
                  {t('vip_service_exclusive')}
                </p>
              </div>
            ))}
          </motion.div>
        )}

        {/* 收货信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mb-8 border-b border-gray-100 pb-6"
        >
          <h3 className="mb-4 font-medium" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)' }}>
            {t('shipping_info')}
          </h3>
          <div className="space-y-2 text-gray-700" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>
            <p>
              {t('name_label')}
              :
              {' '}
              {order.consigneeName}
            </p>
            <p>
              {t('phone_number')}
              :
              {' '}
              {order.consigneePhone}
            </p>
            <p>
              {t('detailed_address')}
              :
              {' '}
              {order.consigneeState && `${order.consigneeState}${order.consigneeCity}${order.consigneeDistrict}`}
              {order.consigneeAddress}
            </p>
          </div>
        </motion.div>

        {/* 订单信息 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <h3 className="mb-4 font-medium" style={{ fontSize: 'clamp(1.125rem, 1.5vw, 1.5rem)' }}>
            {t('order_info')}
          </h3>
          <div className="space-y-2 text-gray-700" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>
            <p className="flex items-center gap-2">
              {t('order_number_prefix')}
              :
              {' '}
              {order.no}
              <motion.button
                type="button"
                onClick={() => handleCopy(order.no)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer text-[#6475D0] transition-colors hover:text-[#4f5bb8] md:cursor-none"
              >
                {t('copy')}
              </motion.button>
            </p>
            <p>
              {t('order_creation_time')}
              :
              {' '}
              {order.createTime}
            </p>
            {order.payType && (
              <p>
                {t('payment_method')}
                :
                {' '}
                {getPaymentMethodText(order.payType)}
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}
