/**
 * 订单相关类型定义
 */

// 订单状态类型
export type OrderStatus = 'WAITING' | 'PAID' | 'SHIPPED' | 'CLOSED';

// 退款状态类型
export type RefundStatus = 0 | 1 | 2 | 3 | 4;

// 轻凌订单状态类型
export type MobiusOrderStatus
  = | 'WORK_INJURY_CERTIFICATES_UPLOADED'
    | 'WORK_INJURY_CERTIFICATES_REVIEWED'
    | 'DEPOSIT_PAYING'
    | 'PAYMENT_PAYING'
    | 'ASSEMBLE_PAYING';

// 支付方式类型
export type PaymentType
  = | 'WECHAT_PAY_NATIVE'
    | 'WECHAT_PAY_JSAPI'
    | 'WECHAT_PAY_H5'
    | 'ALIPAY'
    | 'ALIPAY_PAGE';

// 订单商品项
export type OrderItem = {
  productId: string;
  productName: string;
  productPictureUrl: string;
  productAmount: number; // 单位: 分
  quantity: number;
  product: {
    code: string;
  };
  contactUrl?: string; // VIP服务二维码URL
};

// 物流信息项
export type LogisticsItem = {
  productId: string;
  quantity: number;
};

// 物流信息
export type Logistics = {
  courierNumber: string; // 快递单号
  sendDate: string; // 发货时间
  courierFee?: number;
  orderId: string;
  items: LogisticsItem[];
};

// 订单基本信息
export type Order = {
  no: string; // 订单号
  productPictureUrl: string;
  productName: string;
  productAmount: number; // 单位: 分
  payAmount: number; // 实付金额，单位: 分
  status: OrderStatus;
  courierNumber?: string;
  refundStatus?: RefundStatus;
  productCode?: string; // 产品代码 (如 'mobius')
  orderItems: OrderItem[];
  logistics?: Logistics[];
  discountAmount?: number; // 折扣金额，单位: 分
  changeAmount?: number; // 商家改价，单位: 分
  consigneeName: string; // 收货人姓名
  consigneePhone: string; // 收货人手机号
  consigneeState?: string; // 省
  consigneeCity?: string; // 市
  consigneeDistrict?: string; // 区
  consigneeAddress: string; // 详细地址
  createTime: string; // 创建时间
  payType?: PaymentType; // 支付方式
  bothLeg?: boolean; // 轻凌订单：是否双腿
  difference?: number; // 轻凌订单：待支付金额差额
};

// 订单列表响应
export type OrderListResponse = {
  list: Order[];
  total: number;
};

// 登录请求
export type LoginRequest = {
  contact: string; // 手机号
  code: string; // 验证码
};

// 验证码发送请求
export type CaptchaRequest = {
  login: string; // 手机号
  channel: number; // 渠道，订单查询为 7
};
