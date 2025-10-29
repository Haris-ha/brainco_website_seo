import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'as-needed';

// BrainCo 官网配置
export const AppConfig = {
  name: 'BrainCo 官网',
  // 支持的语言：简体中文、英文
  // 使用 BCP 47 标准语言代码
  locales: ['zh-CN', 'en-US'],
  // 默认语言：简体中文（中国站）
  defaultLocale: 'zh-CN',
  localePrefix,
};

// 语言显示名称
export const LocaleNames: Record<string, string> = {
  'zh-CN': '简体中文',
  'en-US': 'English',
  'zh-TW': '繁體中文',
};

// 域名配置
export const DomainConfig = {
  cn: process.env.NEXT_PUBLIC_SITE_URL_CN || 'https://www.brainco.cn',
  us: process.env.NEXT_PUBLIC_SITE_URL_US || 'https://www.brainco.tech',
};

// 语言与域名映射
export const LocaleToDomain: Record<string, string> = {
  'zh-CN': DomainConfig.cn,
  'zh-TW': DomainConfig.cn,
  'en-US': DomainConfig.us,
};

// IP 定位到语言的映射
export const CountryToLocale: Record<string, string> = {
  CN: 'zh-CN', // 中国大陆
  TW: 'zh-TW', // 台湾
  HK: 'zh-TW', // 香港
  MO: 'zh-TW', // 澳门
  US: 'en-US', // 美国
  GB: 'en-US', // 英国
  CA: 'en-US', // 加拿大
  AU: 'en-US', // 澳大利亚
  // 默认使用英文
  default: 'en-US',
};
