'use client';

import React from 'react';
import Image from 'next/image';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';

import { Card } from '@/components/ui/Card';
import { PostMdxClient } from '@/components/PostMdxClient';
import type { Dictionary } from '@/locales';
import type { Locale } from '@/i18n.config';

interface PostsPageClientProps {
  dict: Dictionary;
  locale: Locale;
  items: PostItem[];
}

interface PostItem {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  avatarUrl?: string;
  content: string;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
  date: string;
}

const PostCard: React.FC<{ item: PostItem }> = ({ item }) => {
  return (
    <Card
      className="
        transition-all duration-300 ease-out
        relative z-0 border-border/60 bg-card/70 backdrop-blur-sm
        hover:scale-[1.03] hover:-translate-y-1 hover:border-foreground hover:shadow-2xl hover:z-10
      "
    >
      <div className="p-4 flex gap-3">
        <div className="h-10 w-10 rounded-full bg-secondary/40 shrink-0 overflow-hidden relative">
          {item.avatarUrl ? (
            <Image
              src={item.avatarUrl}
              alt={item.name}
              fill
              className="object-cover"
              sizes="40px"
              priority={false}
            />
          ) : (
            <div className="h-full w-full flex items-center justify-center text-sm font-semibold text-foreground">
              {item.avatar}
            </div>
          )}
        </div>
        <div className="flex-1 space-y-2">
          <div className="flex items-center justify-between gap-3 text-sm">
            <div className="flex items-center gap-2 min-w-0">
              <span className="font-medium text-foreground truncate">{item.name}</span>
              <span className="text-muted-foreground truncate">{item.handle}</span>
            </div>
            <span className="text-muted-foreground shrink-0">{item.date}</span>
          </div>
          <PostMdxClient source={item.mdxSource} />
        </div>
      </div>
    </Card>
  );
};

export function PostsPageClient({ locale, items }: PostsPageClientProps) {
  const looped = [
    ...items,
    ...items,
    ...items,
    ...items,
  ];

  const col1 = looped.filter((_, i) => i % 2 === 0);
  const col2 = looped.filter((_, i) => i % 2 === 1);

  const title = locale === 'zh' ? '随想' : 'Posts';
  const subtitle =
    locale === 'zh'
      ? '一些零碎想法与小记录。'
      : 'A wall of short thoughts and notes.';

  return (
    <div className="space-y-8">
      <header className="space-y-2 max-w-4xl">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
          {title}
        </h1>
        <p className="text-muted-foreground text-lg">{subtitle}</p>
      </header>

      <section className="relative h-[72vh] md:h-[78vh] w-full overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 h-full">
          <div className="relative h-full overflow-hidden">
            <div className="absolute w-full animate-scroll-up [animation-duration:50s] hover-pause flex flex-col gap-4 pr-1">
              {col1.map((item, idx) => (
                <PostCard key={`${item.id}-c1-${idx}`} item={item} />
              ))}
            </div>
          </div>

          <div className="relative h-full overflow-hidden">
            <div className="absolute w-full animate-scroll-up [animation-duration:65s] hover-pause flex flex-col gap-4 pl-1">
              {col2.map((item, idx) => (
                <PostCard key={`${item.id}-c2-${idx}`} item={item} />
              ))}
            </div>
          </div>
        </div>

        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-background to-transparent" />
        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-background to-transparent" />
      </section>
    </div>
  );
}
