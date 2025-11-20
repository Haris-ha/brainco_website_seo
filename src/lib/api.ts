/**
 * API调用封装
 */

import type { OrderData, OrderResponse } from '@/types/cart';
import type { PaymentType } from '@/types/order';

import { Request as RequestClass } from './request';

// 产品数据类型定义
export type ProductData = {
  id: number;
  code: string;
  name: string;
  serviceUrl?: string;
  [key: string]: any;
};

export type ProductsResponse = {
  success: boolean;
  data: ProductData[];
  message?: string;
};

// 创建专门用于产品 API 的请求实例（使用 bc-api.brainco.cn）
const productApiRequest = new RequestClass('https://bc-api.brainco.cn');

// 创建用于订单和支付 API 的请求实例（使用 bc-api.brainco.cn）
const orderApiRequest = new RequestClass('https://bc-api.brainco.cn');

/**
 * 获取所有产品数据
 */
export const getBraincoProducts = async (): Promise<ProductsResponse> => {
  try {
    const response = await productApiRequest.get<ProductData[]>('/rsc/api/brainco-products');
    return response as ProductsResponse;
  } catch (error) {
    console.error('获取产品数据失败:', error);
    throw error;
  }
};

/**
 * 根据产品标识查找产品
 */
export const findProductByIdentifier = async (
  productId?: string | null,
  code?: string | null,
  lastPath?: string | null,
): Promise<ProductData | null> => {
  try {
    const response = await getBraincoProducts();

    if (!response.data) {
      return null;
    }

    const result = response.data.find(
      (item: ProductData) =>
        String(item.id) === productId || item.code === code || item.code === lastPath,
    );

    return result || null;
  } catch (error) {
    console.error('查找产品失败:', error);
    return null;
  }
};

/**
 * 获取产品客服链接
 */
export const getProductServiceUrl = async (
  productId?: string | null,
  code?: string | null,
  lastPath?: string | null,
): Promise<string | null> => {
  const product = await findProductByIdentifier(productId, code, lastPath);
  return product?.serviceUrl || null;
};

// ========== 订单和支付相关 API ==========

/**
 * 发送验证码
 * @param phone 手机号
 * @param channel 渠道，订单结算为 7（参考原网站实现）
 */
export const sendVerificationCode = async (phone: string, channel: number = 7): Promise<void> => {
  try {
    const response = await orderApiRequest.post('/uac/captcha/send', {
      login: phone,
      channel,
    });

    // 检查响应是否成功
    if (!response.success) {
      throw new Error(response.message || '验证码发送失败');
    }
  } catch (error) {
    console.error('发送验证码失败:', error);
    // 如果是 HTTP 错误，尝试解析错误信息
    if (error instanceof Error && error.message.includes('HTTP error')) {
      throw new Error('验证码发送失败，请稍后重试');
    }
    throw error;
  }
};

/**
 * 验证验证码
 * @param phone 手机号
 * @param code 验证码
 * @returns token 字符串
 */
export const verifyCode = async (phone: string, code: string): Promise<string> => {
  try {
    const response = await orderApiRequest.post<string>('/uac/auth/standing', {
      contact: phone,
      code,
    });

    // 原网站返回的格式是 { success: true, data: "token字符串" }
    const token = response.data;

    if (!token) {
      throw new Error('获取 token 失败');
    }

    // 保存 token 到 localStorage
    if (typeof window !== 'undefined') {
      localStorage.setItem('token', token);
      localStorage.setItem('phone', phone);
    }

    return token;
  } catch (error) {
    console.error('验证验证码失败:', error);
    throw error;
  }
};

/**
 * 获取默认地址
 * @returns 默认地址信息
 */
export type DefaultAddress = {
  name: string;
  consigneeName: string;
  consigneePhone: string;
  consigneeState: string;
  consigneeCity: string;
  consigneeDistrict: string;
  consigneeAddress: string;
  consigneeStateCode?: string;
  consigneeCityCode?: string;
  consigneeDistrictCode?: string;
  defaultAddress?: boolean;
};

export const getDefaultAddress = async (): Promise<DefaultAddress | null> => {
  try {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) {
      return null;
    }

    const response = await orderApiRequest.get<DefaultAddress>('/rsc/api/brainco-user-address');

    // response 结构是 { success: boolean, data: DefaultAddress }
    if (response.success && response.data) {
      return response.data;
    }

    return null;
  } catch (error) {
    // 如果是 401 错误，可能是 token 失效，但不抛出错误，让用户继续填写
    if (error instanceof Error && error.message.includes('401')) {
      return null;
    }
    return null;
  }
};

/**
 * 保存默认地址
 * @param addressData 地址数据
 * @param addressData.name 购买人姓名
 * @param addressData.consigneeName 收件人姓名
 * @param addressData.consigneePhone 收件人电话
 * @param addressData.consigneeState 省份
 * @param addressData.consigneeCity 城市
 * @param addressData.consigneeDistrict 区县
 * @param addressData.consigneeAddress 详细地址
 * @param addressData.consigneeStateCode 省份代码（可选）
 * @param addressData.consigneeCityCode 城市代码（可选）
 * @param addressData.consigneeDistrictCode 区县代码（可选）
 * @param addressData.defaultAddress 是否设为默认地址
 */
export const saveDefaultAddress = async (addressData: {
  name: string;
  consigneeName: string;
  consigneePhone: string;
  consigneeState: string;
  consigneeCity: string;
  consigneeDistrict: string;
  consigneeAddress: string;
  consigneeStateCode?: string;
  consigneeCityCode?: string;
  consigneeDistrictCode?: string;
  defaultAddress: boolean;
}): Promise<void> => {
  try {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) {
      throw new Error('请先完成身份验证');
    }

    const response = await orderApiRequest.post('/rsc/api/brainco-user-address', {
      name: addressData.name,
      consigneeName: addressData.consigneeName,
      consigneePhone: addressData.consigneePhone,
      consigneeState: addressData.consigneeState,
      consigneeCity: addressData.consigneeCity,
      consigneeDistrict: addressData.consigneeDistrict,
      consigneeAddress: addressData.consigneeAddress,
      consigneeStateCode: addressData.consigneeStateCode,
      consigneeCityCode: addressData.consigneeCityCode,
      consigneeDistrictCode: addressData.consigneeDistrictCode,
      defaultAddress: addressData.defaultAddress,
    });

    if (!response.success) {
      throw new Error(response.message || '保存默认地址失败');
    }
  } catch (error) {
    console.error('保存默认地址失败:', error);
    throw error;
  }
};

/**
 * 获取订单优惠信息
 * @param productIds 产品 ID 数组
 * @returns 返回有优惠的产品 ID 数组
 */
export const getOrderDiscounts = async (productIds: (number | string)[]): Promise<number[]> => {
  try {
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) {
      return [];
    }

    // 构建查询参数
    const queryParams = new URLSearchParams();
    queryParams.append('productId', productIds.join(','));
    const url = `/rsc/api/brainco-orders/discount?${queryParams.toString()}`;

    const response = await orderApiRequest.get<Array<{ productId: number; haveDiscount: boolean }>>(url);

    if (response.success && response.data) {
      return response.data.filter(item => item.haveDiscount).map(item => item.productId);
    }

    return [];
  } catch (error) {
    console.error('获取优惠信息失败:', error);
    return [];
  }
};

/**
 * 创建订单
 * @param orderData 订单数据
 */
export const createOrder = async (orderData: OrderData): Promise<OrderResponse> => {
  try {
    // 获取 token（应该在验证验证码时已保存）
    const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
    if (!token) {
      throw new Error('请先完成身份验证');
    }

    // 获取购买人姓名（从第一步保存的）
    const purchaseName = typeof window !== 'undefined' ? localStorage.getItem('purchaseName') || orderData.userInfo.name : orderData.userInfo.name;

    // 获取优惠信息（原网站逻辑）
    const productIds = orderData.items.map(item => item.id);
    const discountProductIds = await getOrderDiscounts(productIds);

    // 构建订单请求数据（参考原网站格式）
    const requestData = {
      orderItems: orderData.items.map(item => ({
        productId: item.id,
        quantity: item.quantity,
        haveDiscount: discountProductIds.includes(Number(item.id)),
      })),
      name: purchaseName, // 购买人姓名
      consigneeName: orderData.userInfo.name,
      consigneePhone: orderData.userInfo.phone,
      consigneeAddress: orderData.userInfo.address,
      consigneeState: orderData.userInfo.province,
      consigneeCity: orderData.userInfo.city,
      consigneeDistrict: orderData.userInfo.district,
      consigneeEmail: orderData.userInfo.email || '',
      // 原网站还有这些字段，但可能不是必需的
      // distinctId: window.devices?.fingerprint,
      // channelId: localStorage.getItem("channelId") || null,
    };

    const response = await orderApiRequest.post<{ no: string }>('/rsc/api/brainco-orders', requestData);
    // API 返回的数据结构是 { no: string, ... }，需要转换为 OrderResponse 格式
    if (!response.data || !response.data.no) {
      throw new Error('订单创建失败：未返回订单号');
    }
    return {
      orderNo: response.data.no,
      status: 'PENDING' as const,
      orderItems: [],
      discountAmount: 0,
      changeAmount: 0,
      totalAmount: orderData.totalAmount,
    };
  } catch (error) {
    console.error('创建订单失败:', error);
    throw error;
  }
};

/**
 * 创建支付并获取二维码
 * @param orderNo 订单号
 * @param paymentMethod 支付方式
 */
export type PaymentResponse = {
  codeUrl?: string; // 微信支付二维码URL
  formHtml?: string; // 支付宝表单HTML
  h5Url?: string; // H5支付URL
  appId?: string; // 微信JSAPI支付参数
  timeStamp?: string;
  nonceStr?: string;
  package?: string;
  signType?: string;
  paySign?: string;
  orderNo: string;
};

export const createPayment = async (
  orderNo: string,
  paymentMethod: PaymentType,
): Promise<PaymentResponse> => {
  try {
    // 原网站使用 PUT 方法更新订单支付方式
    // 原网站的请求库（axios）响应拦截器返回 response.data，即 { success: boolean, data: PaymentResponse }
    // 所以原网站中 res.data.codeUrl 实际上是 response.data.data.codeUrl
    // 但我们的响应拦截器返回整个 responseData，所以 response.data 就是 PaymentResponse

    const response = await orderApiRequest.put<PaymentResponse>(
      `/rsc/api/brainco-orders/${orderNo}`,
      {
        payType: paymentMethod,
        distinctId: typeof window !== 'undefined' && (window as any).devices?.fingerprint,
      },
    );

    // 检查 response.data 是否存在
    if (!response || !response.data) {
      throw new Error('支付接口返回数据格式错误：未返回 data 字段');
    }

    const paymentData = response.data;

    // 如果 paymentData 没有 codeUrl 和 formHtml，可能是数据结构不对
    // 检查是否是嵌套结构（原网站可能是 response.data.data）
    if (!paymentData.codeUrl && !paymentData.formHtml && typeof paymentData === 'object') {
      // 尝试查找嵌套的数据
      const nestedData = (paymentData as any).data;
      if (nestedData && (nestedData.codeUrl || nestedData.formHtml)) {
        return nestedData as PaymentResponse;
      }
    }

    return paymentData as PaymentResponse;
  } catch (error) {
    throw error;
  }
};

/**
 * 查询订单支付状态
 * @param orderNo 订单号
 */
export const checkPaymentStatus = async (orderNo: string): Promise<{ status: string; paid: boolean }> => {
  try {
    // 原网站使用 /rsc/api/brainco-orders/${no}/status 接口
    const response = await orderApiRequest.get<string>(
      `/rsc/api/brainco-orders/${orderNo}/status`,
    );
    
    // 原网站返回的是字符串状态，如 'PAID', 'WAITING', 'CLOSED'
    const status = response.data;
    return {
      status,
      paid: status === 'PAID',
    };
  } catch (error) {
    console.error('查询支付状态失败:', error);
    throw error;
  }
};
