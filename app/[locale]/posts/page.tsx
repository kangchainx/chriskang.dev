import React from 'react';

import { PostsPageClient } from '@/components/pages/PostsPageClient';
import { getDictionary } from '@/locales';
import { getPosts } from '@/lib/content';
import type { Locale } from '@/i18n.config';

const resolveLocale = (value: string): Locale =>
  (['en', 'zh'] as const).find((l) => l === value) ?? 'en';

export default async function Posts({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);
  const items = await getPosts();

  return <PostsPageClient dict={dict} locale={locale} items={items} />;
}
