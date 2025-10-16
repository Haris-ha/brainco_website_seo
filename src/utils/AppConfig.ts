import type { LocalePrefixMode } from 'next-intl/routing';

const localePrefix: LocalePrefixMode = 'as-needed';

// BrainCo 官网配置
export const AppConfig = {
  name: 'BrainCo 官网',
  // 支持的语言：简体中文、英文、繁体中文（港澳台）
  locales: ['zh', 'en', 'zh-TW'],
  // 默认语言：简体中文
  defaultLocale: 'zh',
  localePrefix,
};

// 语言显示名称
export const LocaleNames: Record<string, string> = {
  zh: '简体中文',
  en: 'English',
  'zh-TW': '繁體中文',
};
