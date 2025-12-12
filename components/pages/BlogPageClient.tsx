'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowUpRightIcon } from '@phosphor-icons/react';

import type { Dictionary } from '@/locales';
import type { Locale } from '@/i18n.config';

interface BlogPageClientProps {
  dict: Dictionary;
  locale: Locale;
  posts: {
    slug: string;
    date: string;
    title: string;
    summary: string;
    tags?: string[];
  }[];
}

export function BlogPageClient({ dict, posts, locale }: BlogPageClientProps) {
  return (
    <div className="max-w-4xl mx-auto space-y-10">
      <header className="space-y-2">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {dict.nav.items.blog}
        </h1>
        <p className="text-muted-foreground text-lg">
          Essays, notes, and small experiments.
        </p>
      </header>

      <div className="divide-y divide-border/60">
        {posts.map((post) => (
          <Link
            key={`${post.slug}-${post.date}-${post.title}`}
            href={`/${locale}/blog/${post.slug}`}
            className="group block py-8 cursor-pointer"
          >
            <article className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8">
              <time className="text-sm font-mono text-muted-foreground shrink-0 md:w-28">
                {post.date}
              </time>

              <div className="flex-1 space-y-3">
                <h2 className="text-xl md:text-2xl font-semibold tracking-tight relative w-fit">
                  {post.title}
                  <span className="absolute -bottom-1 left-0 h-px bg-foreground w-0 group-hover:w-full transition-all duration-300 ease-out" />
                </h2>

                {post.tags && post.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2">
                    {post.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-0.5 rounded-full border border-border/70 bg-secondary/30 text-muted-foreground group-hover:text-foreground transition-colors"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}

                <p className="text-muted-foreground leading-relaxed">
                  {post.summary}
                </p>

                <div className="flex items-center gap-1 text-sm text-foreground opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                  <span>Read Article</span>
                  <ArrowUpRightIcon className="w-4 h-4" />
                </div>
              </div>
            </article>
          </Link>
        ))}
      </div>
    </div>
  );
}
