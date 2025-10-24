// StarKids product data and constants

export const imgBase = 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/starkid/';

export type TrainingModule = {
  name?: string;
  desc?: string;
  src: string;
};

export const trainingModules: TrainingModule[] = [
  {
    name: 'social_brain_activation',
    desc: 'social_brain_activation_desc',
    src: `${imgBase}qYLDVWHuonKXevzl.webp`,
  },
  {
    name: 'pronunciation_recognition',
    desc: 'pronunciation_recognition_desc',
    src: `${imgBase}RVfeWnhwxSLQdyaB.webp`,
  },
  {
    name: 'sentence_practice',
    desc: 'sentence_practice_desc',
    src: `${imgBase}WZUEsYaOhcjFupPI.webp`,
  },
  {
    name: 'core_skills',
    desc: 'core_skills_desc',
    src: `${imgBase}SCVZrvXIWwjzBFqb.webp`,
  },
  {
    name: 'brain_flexibility',
    desc: 'brain_flexibility_desc',
    src: `${imgBase}UjhLdzGVJkoKQAWu.webp`,
  },
  {
    name: 'daily_activities',
    desc: 'daily_activities_desc',
    src: `${imgBase}JdOGbpUyNSQxFanr.webp`,
  },
  {
    name: 'group_training',
    desc: 'group_training_desc',
    src: `${imgBase}ZKabgurGRXyxvtWn.webp`,
  },
  {
    src: `${imgBase}EnOFzkrNWaSsPMBH.webp`,
  },
  {
    name: 'behavior_dashboard',
    desc: 'behavior_dashboard_desc',
    src: `${imgBase}MtncZqyoSAevVTuQ.webp`,
  },
];

export const systemFeatures = [
  {
    title: 'feature_1_title',
    desc: 'feature_1_desc',
  },
  {
    title: 'feature_2_title',
    desc: 'feature_2_desc',
  },
  {
    title: 'feature_3_title',
    desc: 'feature_3_desc',
  },
  {
    title: 'feature_4_title',
    desc: 'feature_4_desc',
  },
];

export const trainingModelsMobile = [
  `${imgBase}YKcuhJVXeBryjMfA.webp`,
  `${imgBase}YekZqIMCNEUVShQs.webp`,
  `${imgBase}CRmUAduaXpJcByOt.webp`,
  `${imgBase}UuHJLjYRfIkZoVMT.webp`,
  `${imgBase}ltvVLDNEmUgRJTSp.webp`,
  `${imgBase}ONsYqQjMdVAlmTgC.webp`,
  `${imgBase}oSfxtyWRmgkhqYez.webp`,
  `${imgBase}YZplfrixuUgSqJsR.webp`,
  `${imgBase}fkAaowdcTODBHbZM.webp`,
];

// Primary brand color for StarKids
export const PRIMARY_COLOR = '#A95B30';

// Product code for API queries
export const productCode = 'starkids';
