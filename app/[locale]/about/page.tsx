import React from 'react';

import { AboutPageClient } from '@/components/pages/AboutPageClient';
import { getDictionary } from '@/locales';
import type { Locale } from '@/i18n.config';

const resolveLocale = (value: string): Locale =>
  (['en', 'zh'] as const).find((l) => l === value) ?? 'en';

export default async function About({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  return <AboutPageClient dict={dict} />;
}
