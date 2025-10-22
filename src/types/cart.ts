// Shopping Cart and Order Types

export interface CartItem {
  id: number | string;
  name: string;
  price: number; // 单位：分
  quantity: number;
  pictureUrl: string;
  code: string;
  checked: boolean;
}

export interface UserInfo {
  name: string;
  phone: string;
  address: string;
  email?: string;
}

export interface OrderData {
  items: CartItem[];
  userInfo: UserInfo;
  paymentMethod: string;
  discountCode?: string;
  discountAmount: number;
  totalAmount: number;
}

export interface OrderResponse {
  orderNo: string;
  status: 'PENDING' | 'PAID' | 'SHIPPED' | 'CLOSED';
  orderItems: Array<{
    product: CartItem;
    quantity: number;
  }>;
  discountAmount: number;
  changeAmount: number;
  totalAmount: number;
}

export interface PaymentMethod {
  id: string;
  name: string;
  icon?: string;
}

