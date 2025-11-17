'use client';

import type { Order, OrderListResponse } from '@/types/order';

import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

import { OrderAuth } from '@/components/orders/OrderAuth';
import { OrderDetail } from '@/components/orders/OrderDetail';
import { OrderList } from '@/components/orders/OrderList';
import request from '@/lib/request';

/**
 * 订单页面
 * 包含登录验证、订单列表和订单详情
 *
 * 特点:
 * - 无Header和Footer的简洁布局
 * - 使用framer-motion动画
 * - fluid响应式文字
 * - 完整的国际化支持
 */
export default function OrdersPage() {
  const t = useTranslations('Orders');
  const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [orders, setOrders] = useState<Order[]>([]);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  // 检查是否已登录并获取订单
  useEffect(() => {
    const checkAuthAndFetchOrders = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        setIsAuthenticated(false);
        setIsLoading(false);
        return;
      }

      try {
        const response = await request.get<OrderListResponse>(
          '/rsc/api/brainco-orders?pageNo=1&pageSize=100',
          {
            headers: { token },
          },
        );

        setOrders(response.data.list);
        setIsAuthenticated(true);
      } catch (err) {
        // Token失效或其他错误
        if ((err as any)?.response?.status === 401 || (err as any)?.response?.status === 403) {
          localStorage.removeItem('token');
          setIsAuthenticated(false);
        } else {
          toast.error(t('network_error'));
        }
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthAndFetchOrders();
  }, [t]);

  // 登录成功回调
  const handleAuthSuccess = async () => {
    const token = localStorage.getItem('token');
    if (!token) {
      return;
    }

    try {
      const response = await request.get<OrderListResponse>(
        '/rsc/api/brainco-orders?pageNo=1&pageSize=100',
        {
          headers: { token },
        },
      );

      setOrders(response.data.list);
      setIsAuthenticated(true);
    } catch {
      toast.error(t('network_error'));
    }
  };

  // 选择订单
  const handleSelectOrder = (order: Order) => {
    setSelectedOrder(order);
  };

  // 返回订单列表
  const handleBackToList = () => {
    setSelectedOrder(null);
  };

  if (isLoading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="mx-auto mb-4 h-12 w-12 animate-spin rounded-full border-4 border-gray-200 border-t-[#4f68d2]" />
          <p className="text-gray-600" style={{ fontSize: 'clamp(0.875rem, 1.2vw, 1rem)' }}>
            加载中...
          </p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Logo导航栏 */}
      <motion.header
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="sticky top-0 z-40 flex items-center justify-between border-b border-gray-100 bg-white px-6 py-4 md:px-12"
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
            className="h-5 w-5 md:h-7 md:w-7"
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
          <span className="font-medium text-gray-800" style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.5rem)' }}>
            {t('back')}
          </span>
        </motion.button>
      </motion.header>

      {/* 主内容区 */}
      <main className="flex min-h-[calc(100vh-80px)] items-center justify-center py-8">
        {!isAuthenticated && <OrderAuth onAuthSuccess={handleAuthSuccess} />}

        {isAuthenticated && !selectedOrder && (
          <OrderList orders={orders} onSelectOrder={handleSelectOrder} />
        )}

        {isAuthenticated && selectedOrder && (
          <OrderDetail order={selectedOrder} onBack={handleBackToList} />
        )}
      </main>
    </div>
  );
}
