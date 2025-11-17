// Shopping Cart and Order Types

export type CartItem = {
  id: number | string;
  name: string;
  price: number; // 单位：分
  quantity: number;
  pictureUrl: string;
  code: string;
  checked: boolean;
};

export type UserInfo = {
  name: string;
  phone: string;
  address: string;
  email?: string;
  province?: string; // 省
  city?: string; // 市
  district?: string; // 区
};

export type OrderData = {
  items: CartItem[];
  userInfo: UserInfo;
  paymentMethod: string;
  discountCode?: string;
  discountAmount: number;
  totalAmount: number;
};

export type OrderResponse = {
  orderNo: string;
  status: 'PENDING' | 'PAID' | 'SHIPPED' | 'CLOSED';
  orderItems: Array<{
    product: CartItem;
    quantity: number;
  }>;
  discountAmount: number;
  changeAmount: number;
  totalAmount: number;
};

export type PaymentMethod = {
  id: string;
  name: string;
  icon?: string;
};
