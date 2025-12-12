import React from 'react';

import { BlogPageClient } from '@/components/pages/BlogPageClient';
import { getDictionary } from '@/locales';
import { getBlogPosts } from '@/lib/content';
import type { Locale } from '@/i18n.config';

const resolveLocale = (value: string): Locale =>
  (['en', 'zh'] as const).find((l) => l === value) ?? 'en';

export default async function Blog({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);
  const posts = await getBlogPosts();

  return <BlogPageClient dict={dict} locale={locale} posts={posts} />;
}
