/**
 * API调用封装
 */

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
