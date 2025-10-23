// FocusZen 产品静态数据

export type DeviceFeature = {
  icon: string;
  titleKey: string;
  desc1Key: string;
  desc2Key: string;
};

export type MindfulnessScene = {
  image: string;
  icon: string;
  nameKey: string;
};

export type SolutionItem = {
  icon: string;
  nameKey: string;
};

export type MeditationCornerImage = {
  url: string;
};

export type SalonImage = {
  url: string;
};

// 设备特性数据（3项）
export const deviceFeatures: DeviceFeature[] = [
  {
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/9okHW956N6w8CG7L.webp',
    titleKey: 'device_feature_1_title',
    desc1Key: 'device_feature_1_desc1',
    desc2Key: 'device_feature_1_desc2',
  },
  {
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/akPorlPYsjuhMGks.webp',
    titleKey: 'device_feature_2_title',
    desc1Key: 'device_feature_2_desc1',
    desc2Key: 'device_feature_2_desc2',
  },
  {
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/SfcsmrdJIYcK6cCw.webp',
    titleKey: 'device_feature_3_title',
    desc1Key: 'device_feature_3_desc1',
    desc2Key: 'device_feature_3_desc2',
  },
];

// 正念场景数据（3项）
export const mindfulnessScenes: MindfulnessScene[] = [
  {
    image: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Zq01HgKFXsuul62p.webp',
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/yQq1HwPALA90jQpY.webp',
    nameKey: 'scene_1_name',
  },
  {
    image: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/DReQIknBGfcSk3Hf.webp',
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/yQq1HwPALA90jQpY.webp',
    nameKey: 'scene_2_name',
  },
  {
    image: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/wYPCcV8YtTrkCXI5.webp',
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/yQq1HwPALA90jQpY.webp',
    nameKey: 'scene_3_name',
  },
];

// 机构端解决方案（4项）
export const solutionItems: SolutionItem[] = [
  {
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/k7bliQhQjViPoNcA.webp',
    nameKey: 'solution_hardware',
  },
  {
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/woVK3QH3jxZ56Vtb.webp',
    nameKey: 'solution_software',
  },
  {
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/giPzmW2KpVvujwzz.webp',
    nameKey: 'solution_course',
  },
  {
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Sn3Asokg2kK12wT7.webp',
    nameKey: 'solution_training',
  },
];

// 冥想角图片数据（3张）
export const meditationCornerImages: MeditationCornerImage[] = [
  { url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/DJcxFiXqv0ajJDkV.png' },
  { url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/uREqzgyPK9Ziqcw6.png' },
  { url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/bzTLTQksT7syO8jx.png' },
];

// 沙龙图片数据（9张）
export const salonImages: SalonImage[] = [
  { url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/rtPNEmtz0rZ9tk4A.webp' },
  { url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Hxi60iK3TM7SWCAN.webp' },
  { url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/XztW4cHyT9xaCsfK.webp' },
  { url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/8X7jcW3pRDHa21XN.webp' },
  { url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/CCjZ0b27h6azmfRC.webp' },
  { url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/BdyKZcy3DmNkzC3S.webp' },
  { url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/2KGMH1iSPCDRYrB9.webp' },
  { url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Ax7RcSemBm8taFQj.webp' },
  { url: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/9dxAm68BAcbibwkE.webp' },
];

// 图片 URLs
export const imageUrls = {
  // Hero Banner
  heroBanner: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/DyWnCFyTsz9KeXXb.webp',
  heroBannerMobile: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/MZP1fPJC7Pm2CBDc.webp',

  // 设备区块
  deviceMain: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/EiG02Nkw09bPrGha.webp',

  // 视频区块
  videoPoster: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/TSexEDE8hwzhE39x.webp',
  videoSrc: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/DpX1kFSctJcxKc3K.mp4',
  videoSrcMobile: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/video/8sd53NGz7c9ys8yM.mp4',

  // 报告解析
  report1: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/ekRtQxpXSBbHMSpE.webp',
  report2: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Tner3QeKMPGP3DHp.webp',

  // 精品内容
  content1: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/xb51r1XsS6WJNFsi.webp',
  content2: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/NzBzhf61GzDBwWnF.webp',

  // 群组正念模式
  groupBg: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/jzWkpMH2Wf6haZ4P.webp',
  groupMain: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/wyt8P7yJzHhxS4tA.webp',
  groupScreen: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/biFzpa2BX1BRAz6Y.webp',
  groupAvatar1: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/yM8EKHfE589i11db.webp',
  groupAvatar2: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/6Km3XAjeDx2bW3xd.webp',
  groupAvatar3: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/nAkAN62cxN4ZcwwW.webp',
  groupAvatar4: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/YrzFRK4FKKkhtb20.webp',

  // 社群练习
  community1: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/bfNjznt5nQct6xS5.webp',
  community2: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/den3REdQZe89e2eM.webp',
  community3: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/sbmpS6xzdwnQMjkC.webp',
  community4: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/E4Rin5AhaFzjZzTE.webp',
  community5: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/asjQEqqjmoFO2sbg.webp',

  // 行业解决方案
  businessBg: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/zK02OskrPn6ZafHT.webp',

  // 培训数据
  training1: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/Fc1sGstdESNxyJ9m.webp',
  training2: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/rEymTm9kST57M2zM.webp',

  // 合作伙伴
  partners: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/tMBHM1S26Re7rJE0.webp',
};

// 产品 SKU 信息
export const productSku = 'focus-zen-basic'; // 根据实际产品 SKU 调整
export const productPrice = 349900; // 3499.00 元（分为单位）
