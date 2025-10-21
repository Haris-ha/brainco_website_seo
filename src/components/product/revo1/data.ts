export const imgPath = 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/';

// Industry empowerment ability data
export interface AbilityParam {
  title: string;
  data: string;
  unit: string;
  extend?: string;
  connect?: string;
}

export interface IndustryItem {
  icon: string;
  ability: AbilityParam[];
}

export const industryList: IndustryItem[] = [
  {
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/iShWGuEcUebZCNIP.png',
    ability: [
      { title: '单手承载', data: '30', unit: 'kg' },
      { title: '单手握力', data: '6', unit: 'kg' },
      { title: '单指捏力', data: '30', unit: 'N' },
    ],
  },
  {
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/INKgTRGofrmjLpei.png',
    ability: [
      { title: '全握合时间', data: '0.8', unit: '秒' },
      { title: '操作精度', data: '0.1', unit: 'mm' },
    ],
  },
  {
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/ThuaGXvIYVdeNWMB.png',
    ability: [
      { title: '测量范围', data: '0-25', unit: 'N' },
      { title: '采样频率', data: '50', unit: 'Hz' },
      { title: '力分辨率', data: '0.1', unit: 'N', extend: 'MAX 0.01N' },
    ],
  },
  {
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/ZDdceOmHnTxJNGwy.png',
    ability: [{ title: '标准接口', data: '485', unit: '&', connect: 'CAN' }],
  },
];

// Ability showcase video/image data
export interface AbilityShowcase {
  img: string;
  video: string;
  mobileVideo: string;
}

export const abilityList: AbilityShowcase[] = [
  {
    img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/taDJfFURkAwGNnCP.webp',
    video: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/OfKq4U5Czon3FtEW.mp4',
    mobileVideo: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/INv5Pj3h0R9k1plV.mp4',
  },
  {
    img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/QorNgWOpGPmECiJz.webp',
    video: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/qmeOJ18pTsKZHL3c.mp4',
    mobileVideo: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/jxi5T43spNVUr2zd.mp4',
  },
  {
    img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/SBxKZwkfdvbnWsuN.webp',
    video: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/ar5mvKNVznWlgRuE.mp4',
    mobileVideo: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/cFrh5oO7RN0SgVtp.mp4',
  },
  {
    img: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/sEexPqGwivWbpmBQ.webp',
    video: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/0Aq7IlOYgJvjMBn8.mp4',
    mobileVideo: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/szSIWH18D3bqZ2LX.mp4',
  },
];

// Partners logo list
export const partner = [
  `${imgPath}oAGjFZQbuwdJxMtL.webp`,
  `${imgPath}vHIQBfgcZjqUFCEy.webp`,
  `${imgPath}ZjwWiLvzenoGKHPN.webp`,
  `${imgPath}SuUsxdbIoiZrVfte.webp`,
  `${imgPath}SpysZTHrRBVUbNYA.webp`,
  `${imgPath}EbgMAhLHvOcqXReB.webp`,
  `${imgPath}bJmzFQyntdprUALo.webp`,
  `${imgPath}McdfHvqngEpiYkKs.webp`,
];

export const partnerMobile = [
  `${imgPath}oAGjFZQbuwdJxMtL.webp`,
  `${imgPath}vHIQBfgcZjqUFCEy.webp`,
  `${imgPath}ZjwWiLvzenoGKHPN.webp`,
  `${imgPath}SpysZTHrRBVUbNYA.webp`,
  `${imgPath}EbgMAhLHvOcqXReB.webp`,
  `${imgPath}bJmzFQyntdprUALo.webp`,
  `${imgPath}McdfHvqngEpiYkKs.webp`,
  `${imgPath}SuUsxdbIoiZrVfte.webp`,
];

// Experience showcase images
export const experienceImages = [
  'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/PiZdUDyzhAsvkKLX.webp',
  'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/htlsuybiDVJNRGUj.webp',
  'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/ILQXSzYqhRxlnEer.webp',
  'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/AqOPaYoDjdhHmFTz.webp',
];

// Quality videos
export const qualityVideos = [
  'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/yzkdPFGxvQHMUepl.mp4',
  'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/lbritCTBcqfNKVak.mp4',
  'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/CDxXNuwjHcoIvEqt.mp4',
];

// Product version comparison table data
export interface VersionSpec {
  label: string;
  basic: string;
  tactile: string;
}

export interface VersionCategory {
  category: string;
  specs: VersionSpec[];
}

export const versionSpecs: VersionCategory[] = [
  {
    category: '尺寸参数',
    specs: [
      { label: '单手重量', basic: '540g ±5g', tactile: '540g ±5g' },
      { label: '单手长度', basic: '183mm', tactile: '183mm' },
      { label: '单手宽度', basic: '100mm', tactile: '100mm' },
    ],
  },
  {
    category: '工作参数',
    specs: [
      { label: '供应电压', basic: '9.5 ~ 28V', tactile: '9.5 ~ 28V' },
      { label: '最大电流', basic: '3A', tactile: '3A' },
      { label: '最大开合距离（食指与拇指）', basic: '113mm', tactile: '113mm' },
      { label: '单指最大捏力', basic: '30N', tactile: '30N' },
      { label: '五指握力', basic: '50N', tactile: '50N' },
      { label: '手指速度（开合时间）', basic: '0.8s', tactile: '0.8s' },
      { label: '操作精度', basic: '0.1mm', tactile: '0.1mm' },
      { label: '单指最大负载', basic: '8kg', tactile: '8kg' },
      { label: '整手最大负载', basic: '30kg', tactile: '30kg' },
    ],
  },
  {
    category: '硬件配置',
    specs: [
      { label: '通讯方式', basic: 'RS485，CAN', tactile: 'RS485，CAN' },
      { label: '传感器配置', basic: '位置传感器、电流传感器', tactile: '位置传感器、电流传感器' },
      { label: '主题材料', basic: '航空铝合金&食品级塑胶', tactile: '航空铝合金&食品级塑胶' },
      { label: '运动能力', basic: '10 自由度仿生关节', tactile: '10 自由度仿生关节' },
      { label: '驱动能力', basic: '6*高性能精密微型电机', tactile: '6*高性能精密微型电机' },
      {
        label: '智能控制',
        basic: '精细操作控制 防堵转控制 防摔防抖控制',
        tactile: '精细操作控制 防堵转控制 防摔防抖控制',
      },
    ],
  },
  {
    category: '触觉传感器',
    specs: [
      {
        label: '多维指尖触觉传感器',
        basic: '/',
        tactile: '正压力、摩擦力、受力方向、接近距离',
      },
      { label: '量程（可配置）', basic: '/', tactile: '0-5N/0-15N/0-25N' },
      { label: '最小识别力', basic: '/', tactile: '0.1N（高灵敏模式0.01N）' },
      { label: '测量精度', basic: '/', tactile: '5%FS' },
      { label: '过载阈值', basic: '/', tactile: '≥50N' },
      { label: '接近觉识别距离', basic: '/', tactile: '0-1cm（人手）' },
      { label: '重复定位精度', basic: '/', tactile: '0.01mm' },
      { label: '通讯频率', basic: '/', tactile: '≥50Hz' },
    ],
  },
];

