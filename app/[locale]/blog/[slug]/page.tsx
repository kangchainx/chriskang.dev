import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { serialize } from 'next-mdx-remote/serialize';
import remarkGfm from 'remark-gfm';

import { i18n, type Locale } from '@/i18n.config';
import { getBlogPostBySlug, getBlogPosts } from '@/lib/content';
import { BlogMdxClient } from '@/components/BlogMdxClient';

const resolveLocale = (value: string): Locale =>
  (['en', 'zh'] as const).find((l) => l === value) ?? 'en';

export async function generateStaticParams() {
  const posts = await getBlogPosts();
  return posts.flatMap((post) =>
    i18n.locales.map((locale) => ({ locale, slug: post.slug })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPostBySlug(slug);
  if (!post) return {};

  return {
    title: post.meta.title,
    description: post.meta.summary,
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}) {
  const { locale: rawLocale, slug } = await params;
  const locale = resolveLocale(rawLocale);

  const post = await getBlogPostBySlug(slug);
  if (!post) return notFound();

  const { meta, body } = post;
  const mdxSource = await serialize(body, {
    mdxOptions: {
      remarkPlugins: [remarkGfm],
    },
  });
  const backLabel = locale === 'zh' ? '返回博客' : 'Back to Blog';

  return (
    <article className="max-w-3xl mx-auto space-y-10">
      <header className="space-y-4">
        <Link
          href={`/${locale}/blog`}
          className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
        >
          <span aria-hidden className="text-base">←</span>
          <span>{backLabel}</span>
        </Link>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight">
          {meta.title}
        </h1>

        {meta.date && (
          <time className="text-sm font-mono text-muted-foreground">
            {meta.date}
          </time>
        )}

        {meta.tags && meta.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-1">
            {meta.tags.map((tag) => (
              <span
                key={tag}
                className="text-xs px-2 py-0.5 rounded-full border border-border/70 bg-secondary/30 text-muted-foreground"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {meta.summary && (
          <p className="text-lg text-muted-foreground leading-relaxed">
            {meta.summary}
          </p>
        )}
      </header>

      <div className="space-y-6 leading-relaxed">
        <BlogMdxClient source={mdxSource} />
      </div>
    </article>
  );
}
