import type { routing } from '@/libs/I18nRouting';

declare module 'next-intl' {
  // eslint-disable-next-line ts/consistent-type-definitions
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    // 不定义 Messages 类型，允许任意字符串作为 key
    // Messages: typeof messages; // 注释掉严格类型检查
  }
}
