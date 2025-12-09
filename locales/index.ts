import type { Locale } from '@/i18n.config';

import { en } from './en';
import type { zh as ZhDictionary } from './zh';

export type Dictionary = typeof en | typeof ZhDictionary;

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  switch (locale) {
    case 'zh':
      return (await import('./zh')).zh;
    case 'en':
    default:
      return en;
  }
}
