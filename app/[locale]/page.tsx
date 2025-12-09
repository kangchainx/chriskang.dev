import React from 'react';

import { HomePageClient } from '@/components/pages/HomePageClient';
import { getDictionary } from '@/locales';
import type { Locale } from '@/i18n.config';

const resolveLocale = (value: string): Locale =>
  (['en', 'zh'] as const).find((l) => l === value) ?? 'en';

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  return <HomePageClient dict={dict} locale={locale} />;
}
