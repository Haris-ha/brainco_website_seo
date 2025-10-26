export const imgPath = 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/';

// Industry empowerment ability data
export type AbilityParam = {
  title: string;
  data: string;
  unit: string;
  extend?: string;
  connect?: string;
};

export type IndustryItem = {
  icon: string;
  ability: AbilityParam[];
};

export const industryList: IndustryItem[] = [
  {
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/iShWGuEcUebZCNIP.png',
    ability: [
      { title: 'ability_single_hand_load', data: '30', unit: 'kg' },
      { title: 'ability_single_hand_grip', data: '6', unit: 'kg' },
      { title: 'ability_single_finger_pinch', data: '30', unit: 'N' },
    ],
  },
  {
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/INKgTRGofrmjLpei.png',
    ability: [
      { title: 'ability_full_grip_time', data: '0.8', unit: 'ability_unit_seconds' },
      { title: 'ability_operation_precision', data: '0.1', unit: 'mm' },
    ],
  },
  {
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/ThuaGXvIYVdeNWMB.png',
    ability: [
      { title: 'ability_measurement_range', data: '0-25', unit: 'N' },
      { title: 'ability_sampling_frequency', data: '50', unit: 'Hz' },
      { title: 'ability_force_resolution', data: '0.1', unit: 'N', extend: 'ability_max_resolution' },
    ],
  },
  {
    icon: 'https://website-www-brainco-cn.oss-cn-hangzhou.aliyuncs.com/images/product/dexterous/ZDdceOmHnTxJNGwy.png',
    ability: [{ title: 'ability_standard_interface', data: '485', unit: '&', connect: 'CAN' }],
  },
];

// Ability showcase video/image data
export type AbilityShowcase = {
  img: string;
  video: string;
  mobileVideo: string;
};

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
export type VersionSpec = {
  label: string;
  basic: string;
  tactile: string;
};

export type VersionCategory = {
  category: string;
  specs: VersionSpec[];
};

export const versionSpecs: VersionCategory[] = [
  {
    category: 'spec_category_dimensions',
    specs: [
      { label: 'spec_hand_weight', basic: '540g ±5g', tactile: '540g ±5g' },
      { label: 'spec_hand_length', basic: '183mm', tactile: '183mm' },
      { label: 'spec_hand_width', basic: '100mm', tactile: '100mm' },
    ],
  },
  {
    category: 'spec_category_working',
    specs: [
      { label: 'spec_supply_voltage', basic: '9.5 ~ 28V', tactile: '9.5 ~ 28V' },
      { label: 'spec_max_current', basic: '3A', tactile: '3A' },
      { label: 'spec_max_opening_distance', basic: '113mm', tactile: '113mm' },
      { label: 'spec_single_finger_pinch', basic: '30N', tactile: '30N' },
      { label: 'spec_five_finger_grip', basic: '50N', tactile: '50N' },
      { label: 'spec_finger_speed', basic: '0.8s', tactile: '0.8s' },
      { label: 'spec_operation_precision', basic: '0.1mm', tactile: '0.1mm' },
      { label: 'spec_single_finger_load', basic: '8kg', tactile: '8kg' },
      { label: 'spec_whole_hand_load', basic: '30kg', tactile: '30kg' },
    ],
  },
  {
    category: 'spec_category_hardware',
    specs: [
      { label: 'spec_communication', basic: 'RS485，CAN', tactile: 'RS485，CAN' },
      { label: 'spec_sensor_config', basic: 'spec_sensor_config_value', tactile: 'spec_sensor_config_value' },
      { label: 'spec_main_material', basic: 'spec_main_material_value', tactile: 'spec_main_material_value' },
      { label: 'spec_motion_ability', basic: 'spec_motion_ability_value', tactile: 'spec_motion_ability_value' },
      { label: 'spec_drive_ability', basic: 'spec_drive_ability_value', tactile: 'spec_drive_ability_value' },
      {
        label: 'spec_smart_control',
        basic: 'spec_smart_control_value',
        tactile: 'spec_smart_control_value',
      },
    ],
  },
  {
    category: 'spec_category_tactile',
    specs: [
      {
        label: 'spec_multi_tactile_sensor',
        basic: '/',
        tactile: 'spec_multi_tactile_sensor_value',
      },
      { label: 'spec_range_configurable', basic: '/', tactile: '0-5N/0-15N/0-25N' },
      { label: 'spec_min_recognition_force', basic: '/', tactile: 'spec_min_recognition_force_value' },
      { label: 'spec_measurement_accuracy', basic: '/', tactile: '5%FS' },
      { label: 'spec_overload_threshold', basic: '/', tactile: '≥50N' },
      { label: 'spec_proximity_distance', basic: '/', tactile: 'spec_proximity_distance_value' },
      { label: 'spec_repeat_positioning', basic: '/', tactile: '0.01mm' },
      { label: 'spec_comm_frequency', basic: '/', tactile: '≥50Hz' },
    ],
  },
];
