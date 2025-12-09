export type Locale = 'en' | 'zh';

export const i18n = {
  locales: ['en', 'zh'] as const,
  defaultLocale: 'en' as Locale,
};
