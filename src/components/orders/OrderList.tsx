'use client';

import type { Order } from '@/types/order';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

type OrderListProps = {
  orders: Order[];
  onSelectOrder: (order: Order) => void;
};

/**
 * 订单列表组件
 * 显示所有订单的概览
 */
export function OrderList({ orders, onSelectOrder }: OrderListProps) {
  const t = useTranslations('Orders');
  const tCheckout = useTranslations('Checkout');

  const getOrderStatusText = (order: Order) => {
    // 如果有退款状态，优先显示退款状态
    if (order.refundStatus !== undefined) {
      return t(`refund_status.${order.refundStatus}`);
    }

    // 显示订单状态
    return t(`order_status.${order.status}`);
  };

  const isOrderClickable = (order: Order) => {
    return order.status !== 'CLOSED';
  };

  return (
    <div className="w-full max-w-[90vw] px-4 py-6 md:max-w-[810px] md:py-8">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="mb-12 text-center font-medium"
        style={{ fontSize: 'clamp(1.25rem, 2vw, 1.5rem)' }}
      >
        {t('order_overview')}
      </motion.h2>

      <div className="space-y-5">
        {orders.map((order, index) => (
          <motion.div
            key={order.no}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            onClick={() => isOrderClickable(order) && onSelectOrder(order)}
            className={`overflow-hidden rounded-2xl bg-white shadow-md transition-all ${
              isOrderClickable(order)
                ? 'cursor-pointer hover:shadow-lg'
                : 'cursor-not-allowed opacity-70'
            }`}
          >
            {/* 订单头部 */}
            <div className="flex items-center justify-between border-b border-gray-100 px-6 py-4 md:px-8">
              <p className="text-gray-500" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}>
                {t('order_number_prefix')}
                :
                {order.no}
              </p>
              <div className="flex items-center gap-2">
                <span
                  className={`font-medium ${
                    order.status === 'CLOSED' ? 'text-gray-400' : 'text-[#6475D0]'
                  }`}
                  style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}
                >
                  {getOrderStatusText(order)}
                </span>
                {isOrderClickable(order) && (
                  <span className="text-[#6475D0]">→</span>
                )}
              </div>
            </div>

            {/* 订单商品列表 */}
            <div className="space-y-6 px-6 py-6 md:px-8">
              {order.orderItems.map((item, itemIndex) => (
                <motion.div
                  key={`${order.no}-${item.productId}-${itemIndex}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 + itemIndex * 0.1 }}
                  className="flex items-center justify-between gap-4"
                >
                  {/* 商品信息 */}
                  <div className="flex flex-1 items-center gap-4 md:gap-6">
                    <div className="h-[80px] w-[80px] flex-shrink-0 overflow-hidden rounded-lg md:h-[100px] md:w-[100px]">
                      <img
                        src={item.productPictureUrl}
                        alt={item.productName}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <span
                      className="flex-1 text-gray-700"
                      style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}
                    >
                      {item.productName}
                    </span>
                  </div>

                  {/* 价格信息 */}
                  <div className="flex flex-col items-end gap-1">
                    <span
                      className="text-gray-700"
                      style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1.125rem)' }}
                    >
                      ¥
                      {(item.productAmount / 100).toFixed(2)}
                    </span>
                    <span
                      className="text-gray-500"
                      style={{ fontSize: 'clamp(0.75rem, 1vw, 0.875rem)' }}
                    >
                      {tCheckout('quantity')}
                      :
                      {item.quantity}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* 订单底部 */}
            <div className="flex items-center justify-end gap-4 border-t border-gray-100 px-6 py-4 md:px-8">
              {(order.status === 'PAID' || order.status === 'SHIPPED') && (
                <div className="flex items-center gap-2">
                  <span className="text-gray-600" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}>
                    {t('actual_payment')}
                  </span>
                  <span
                    className="font-semibold text-gray-900"
                    style={{ fontSize: 'clamp(1.25rem, 2vw, 1.875rem)' }}
                  >
                    ¥
                    {(order.payAmount / 100).toFixed(2)}
                  </span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
