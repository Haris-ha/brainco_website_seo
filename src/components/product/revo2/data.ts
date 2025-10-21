// Customizable color images
export interface ColorOption {
  name: string;
  img: string;
  color: string;
}

export const colorImages: ColorOption[] = [
  {
    name: '晨曦金',
    img: 'https://brainco-common-public.oss-cn-hangzhou.aliyuncs.com/web-config/docs-sdk/csmLWVDXndqiHoNS.webp',
    color: '#9B9083',
  },
  {
    name: '流光银',
    img: 'https://brainco-common-public.oss-cn-hangzhou.aliyuncs.com/web-config/docs-sdk/WbXwhniecMNLxKDj.webp',
    color: '#818181',
  },
  {
    name: '深空灰',
    img: 'https://brainco-common-public.oss-cn-hangzhou.aliyuncs.com/web-config/docs-sdk/gPBbsTYXRlaGhSdw.webp',
    color: '#2B2B2B',
  },
];

// Technical specifications
export interface TechSpec {
  label: string;
  value: string;
  unit?: string;
  customStyle?: boolean;
}

export const technicalSpecs: TechSpec[] = [
  { label: 'spec_active_joints', value: '6', unit: '个' },
  { label: 'spec_dof', value: '11', unit: '个' },
  { label: 'spec_comm_freq', value: '最高1KHz', customStyle: true },
  { label: 'spec_load', value: '≥20', unit: 'kg' },
  { label: 'spec_grip', value: '≥50', unit: 'N' },
  { label: 'spec_pinch', value: '≥15', unit: 'N' },
  { label: 'spec_precision', value: '0.1°' },
  { label: 'spec_voltage', value: '12-64', unit: 'v' },
  { label: 'spec_interface', value: '485&CANfd&EtherCAT', customStyle: true },
];

// Product version details
export interface VersionDetail {
  label: string;
  value: string;
}

export interface ProductVersion {
  title: string;
  model: string;
  details: VersionDetail[];
  gradient?: string;
  border?: boolean;
}

export const productVersions: ProductVersion[] = [
  {
    title: 'version_basic',
    model: 'version_basic_model',
    gradient: 'linear-gradient(0deg, #171a1d 0.32%, #515151 97.92%)',
    details: [
      { label: 'version_voltage', value: '9-28V' },
      { label: 'version_interface', value: '485, CANfd' },
      { label: 'version_tactile_sense', value: 'version_tactile_none' },
      { label: 'version_control', value: 'version_control_basic' },
    ],
  },
  {
    title: 'version_pro',
    model: 'version_pro_model',
    gradient: 'linear-gradient(181deg, #04437e 0.69%, #07121c 99.31%)',
    details: [
      { label: 'version_voltage', value: '9-64V' },
      { label: 'version_interface', value: '485, CANfd, EtherCAT' },
      { label: 'version_tactile_sense', value: 'version_tactile_none' },
      { label: 'version_control', value: 'version_control_basic' },
    ],
  },
  {
    title: 'version_tactile',
    model: 'version_tactile_model',
    border: true,
    details: [
      { label: 'version_voltage', value: '9-64V' },
      { label: 'version_interface', value: '485, CANfd, EtherCAT' },
      { label: 'version_tactile_sense', value: 'version_tactile_features' },
      { label: 'version_control', value: 'version_control_tactile' },
    ],
  },
];

