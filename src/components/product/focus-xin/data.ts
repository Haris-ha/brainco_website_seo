// FocusXin 产品静态数据

export type ProblemItem = {
  textKey: string;
};

export type ModeItem = {
  titleKey: string;
  superscriptKey?: string;
};

export type TrainingType = {
  nameKey: string;
  image: string;
  descKey: string;
};

export type LiteratureItem = {
  key: string;
};

// 儿童注意力问题列表（5项）
export const problemList: ProblemItem[] = [
  { textKey: 'problem_item_1' },
  { textKey: 'problem_item_2' },
  { textKey: 'problem_item_3' },
  { textKey: 'problem_item_4' },
  { textKey: 'problem_item_5' },
];

// 干预模式列表（3项）
export const modeList: ModeItem[] = [
  { titleKey: 'mode_item_1_title', superscriptKey: 'mode_item_1_superscript' },
  { titleKey: 'mode_item_2_title', superscriptKey: 'mode_item_2_superscript' },
  { titleKey: 'mode_item_3_title' },
];

// 文献参考（3项）
export const literatureList: LiteratureItem[] = [
  { key: 'literature_1' },
  { key: 'literature_2' },
  { key: 'literature_3' },
];

// 训练模块（3项）
export const trainingTypes: TrainingType[] = [
  {
    nameKey: 'training_module_1_name',
    image: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/x0zYgk7rFMSeVrZI.webp',
    descKey: 'training_module_1_desc',
  },
  {
    nameKey: 'training_module_2_name',
    image: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/CouXsS7QPx77rAA2.webp',
    descKey: 'training_module_2_desc',
  },
  {
    nameKey: 'training_module_3_name',
    image: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/7yZSOu43lZMrl9Uj.webp',
    descKey: 'training_module_3_desc',
  },
];

// 专利列表（40+项，分6组）- 只存储专利号
export const patentList: string[] = [
  '201910037779.7',
  '201910036058.4',
  '201910003079.6',
  '201910037828.7',
  '201910165705.1',
  '202210154692.X',
  '202211003609.5',
  '202210616559.1',
  '202210616620.2',
  '202210675526.4',
  '202210675689.2',
  '202210718081.3',
  '202210715978.0',
  '202210732888.2',
  '202211096166.9',
  '202211095181.1',
  '202211166340.2',
  '202211147639.3',
  '202211078003.8',
  '202211088364.0',
  '202211147681.5',
  '202211167296.7',
  '202211563908.4',
  '202230674547.5',
  '202211244556.6',
  '202211417680.8',
  '202211400340.4',
  '202211498100.2',
  '202211553353.5',
  '202222435490.0',
  '202211323981.4',
  '202211342782.8',
  '202211408551.2',
  '202211417702.0',
  '202211244471.8',
  '202230740715.6',
  '202230780146.8',
  '202222976205.6',
  '202223121451.X',
  '202230787844.0',
  '202223152684.6',
  '202211529033.6',
  '202211547002.3',
  '202211592679.9',
  '202310031198.9',
  '202310127507.2',
];

// 图片 URLs
export const imageUrls = {
  // Hero Banner
  heroBanner: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/6DDtRwGd3eXppQ4P.webp',
  heroBannerMobile: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/5CCbuY2OXaufXrXp.webp',

  // 问题识别
  problemCenter: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/ybNm4TWjFogc35wp.webp',

  // 神经反馈原理
  principle: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/QGbqLUUAsiaDSDUU.webp',
  principleMobile: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/1Dm729HzCTZc0emp.webp',

  // 模式优势
  mode: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/1YMPLlD8tx7KW5XB.webp',
  modeMobile: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/D9yMis9l12HaeZTl.webp',

  // 测训一体
  assessment1: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/WL6a0vMpt2hILsOU.webp',
  assessment2: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/kl5yy1vHWgVK9sEU.webp',
  assessment1Mobile: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/moL4nJixI2na3GSh.webp',
  assessment2Mobile: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/JlvuuP1eIdJDmbgv.webp',

  // 趣味训练
  game1: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/IFRc5QxKJVZGTLZr.webp',
  game2: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/xte01HVAdDuRc0SW.webp',
  gameMobile: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/OqnRyUpsiNWXVI01.webp',

  // 效果追踪
  tracking1: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/PJQIXNWEIwhlvsdU.webp',
  tracking2: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/MHJHao3j8P2xIB7w.webp',
  trackingMobile: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/xjYtrIxAT0DbwTOh.webp',

  // 科学验证
  verification1: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/CBhfv3d7SlLURAKb.webp',
  verification2: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/rYig9OwN7m6vqNRn.webp',
  verification1Mobile: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/ZchfivqPWGVT95Cm.webp',
  verification2Mobile: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/StIgszOrlxXYBfog.webp',

  // 专利
  patent: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/965A78C9-4833-4f8c-9985-9E7319C8FB84.png',

  // Logo
  logo: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/oMrUVx6bk5na42Bi.webp',
  logoMobile: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/RVqmLMMjyFnTKFPs.webp',
};

// 视频 URLs
export const videoUrls = {
  principle: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/video/neural-feedback-train.mp4',
  introduction: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/assets/video/SKQGURhoX8mNnI6L.mp4',
};

// 产品代码
export const productCode = 'focus-xin';
