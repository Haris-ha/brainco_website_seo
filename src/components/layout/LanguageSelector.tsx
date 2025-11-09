'use client';

import { useLocale } from 'next-intl';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { usePathname, useRouter } from '@/libs/I18nNavigation';

const languageNames = {
  'zh-CN': '简体中文',
  'en-US': 'English',
  // 'zh-TW': '繁體中文',
};

const ariaLabels = {
  'zh-CN': '选择语言',
  'en-US': 'Select language',
  // 'zh-TW': '選擇語言',
};

export function LanguageSelector() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const handleChange = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <Select value={locale} onValueChange={handleChange}>
      <SelectTrigger
        className="cursor-target w-[180px] border-gray-300 text-lg !text-[#333]"
        aria-label={ariaLabels[locale as keyof typeof ariaLabels] || ariaLabels['en-US']}
      >
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
        {Object.entries(languageNames).map(([code, name]) => (
          <SelectItem className="cursor-target" key={code} value={code}>
            {name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
