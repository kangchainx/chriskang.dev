import 'server-only';

import { promises as fs } from 'fs';
import path from 'path';

import { serialize } from 'next-mdx-remote/serialize';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote';
import remarkGfm from 'remark-gfm';

import { i18n, type Locale } from '@/i18n.config';

export interface BlogPostMeta {
  slug: string;
  title: string;
  summary: string;
  date: string;
  locale: Locale;
  tags?: string[];
}

export interface ThoughtPost {
  id: string;
  name: string;
  handle: string;
  avatar: string;
  avatarUrl?: string;
  verified?: boolean;
  content: string;
  mdxSource: MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;
  timestamp: string;
  locale: Locale;
  date: string;
}

const BLOG_DIR = path.join(process.cwd(), 'content', 'blog');
const POSTS_DIR = path.join(process.cwd(), 'content', 'posts');

const FRONTMATTER_RE = /^---\s*\n([\s\S]*?)\n---\s*\n?/;

const isLocale = (value: unknown): value is Locale =>
  typeof value === 'string' &&
  (i18n.locales as readonly string[]).includes(value);

function extractSlugAndLocale(fileName: string): {
  slug: string;
  localeFromName?: Locale;
} {
  const { name } = path.parse(fileName);
  const segments = name.split('.');
  const last = segments[segments.length - 1];

  if (segments.length > 1 && isLocale(last)) {
    segments.pop();
    return { slug: segments.join('.'), localeFromName: last };
  }

  return { slug: name };
}

function parseFrontmatter(source: string): {
  data: Record<string, unknown>;
  body: string;
} {
  const match = source.match(FRONTMATTER_RE);
  if (!match) {
    return { data: {}, body: source.trim() };
  }

  const raw = match[1].trim();
  let data: Record<string, unknown> = {};
  if (raw) {
    try {
      data = JSON.parse(raw);
    } catch {
      data = {};
    }
  }

  const body = source.slice(match[0].length).trim();
  return { data, body };
}

async function listContentFiles(dir: string): Promise<string[]> {
  try {
    const entries = await fs.readdir(dir);
    return entries.filter((f) => f.endsWith('.md') || f.endsWith('.mdx'));
  } catch {
    return [];
  }
}

function sortByDateDesc<T extends { date: string }>(items: T[]): T[] {
  return items.sort((a, b) => {
    const da = Date.parse(a.date);
    const db = Date.parse(b.date);
    const va = Number.isNaN(da) ? 0 : da;
    const vb = Number.isNaN(db) ? 0 : db;
    return vb - va;
  });
}

export async function getBlogPosts(locale?: Locale): Promise<BlogPostMeta[]> {
  const files = await listContentFiles(BLOG_DIR);
  const posts = await Promise.all(
    files.map(async (file) => {
      const fullPath = path.join(BLOG_DIR, file);
      const raw = await fs.readFile(fullPath, 'utf8');
      const { data } = parseFrontmatter(raw);
      const { slug: baseSlug, localeFromName } = extractSlugAndLocale(file);
      const fileSlug = path.parse(file).name;

      const dataLocale = isLocale(data.locale)
        ? data.locale
        : localeFromName ?? i18n.defaultLocale;

      if (locale && dataLocale !== locale) return null;

      const title = typeof data.title === 'string' ? data.title : baseSlug;
      const summary =
        typeof data.summary === 'string' ? data.summary : '';
      const date =
        typeof data.date === 'string'
          ? data.date
          : typeof data.publishedAt === 'string'
          ? data.publishedAt
          : '';
      const tags = Array.isArray(data.tags)
        ? data.tags.filter((t): t is string => typeof t === 'string')
        : undefined;

      return { slug: fileSlug, title, summary, date, locale: dataLocale, tags };
    }),
  );

  return sortByDateDesc(posts.filter(Boolean) as BlogPostMeta[]);
}

async function readBlogSource(slug: string): Promise<{ file: string; source: string } | null> {
  const directCandidates = [`${slug}.mdx`, `${slug}.md`];
  for (const candidate of directCandidates) {
    try {
      const fullPath = path.join(BLOG_DIR, candidate);
      const source = await fs.readFile(fullPath, 'utf8');
      return { file: candidate, source };
    } catch {
      // try next
    }
  }

  const files = (await listContentFiles(BLOG_DIR)).sort();
  for (const file of files) {
    const { slug: extracted } = extractSlugAndLocale(file);
    if (extracted === slug) {
      const fullPath = path.join(BLOG_DIR, file);
      const source = await fs.readFile(fullPath, 'utf8');
      return { file, source };
    }
  }

  return null;
}

export async function getBlogPostBySlug(
  slug: string,
): Promise<{ meta: BlogPostMeta; body: string } | null> {
  const result = await readBlogSource(slug);
  if (!result) return null;

  const { file, source } = result;
  const { data, body } = parseFrontmatter(source);
  const { slug: baseSlug, localeFromName } = extractSlugAndLocale(file);
  const fileSlug = path.parse(file).name;

  const dataLocale = isLocale(data.locale)
    ? data.locale
    : localeFromName ?? i18n.defaultLocale;

  const title = typeof data.title === 'string' ? data.title : baseSlug;
  const summary = typeof data.summary === 'string' ? data.summary : '';
  const date =
    typeof data.date === 'string'
      ? data.date
      : typeof data.publishedAt === 'string'
      ? data.publishedAt
      : '';
  const tags = Array.isArray(data.tags)
    ? data.tags.filter((t): t is string => typeof t === 'string')
    : undefined;

  return {
    meta: {
      slug: fileSlug,
      title,
      summary,
      date,
      locale: dataLocale,
      tags,
    },
    body,
  };
}

function formatRelativeTimestamp(dateString: string): string {
  const time = Date.parse(dateString);
  if (Number.isNaN(time)) return dateString;

  const diffMs = Math.max(0, Date.now() - time);
  const diffMin = diffMs / 1000 / 60;
  const diffHour = diffMin / 60;
  const diffDay = diffHour / 24;
  const diffWeek = diffDay / 7;

  if (diffMin < 60) return `${Math.floor(diffMin)}m`;
  if (diffHour < 24) return `${Math.floor(diffHour)}h`;
  if (diffDay < 7) return `${Math.floor(diffDay)}d`;
  return `${Math.floor(diffWeek)}w`;
}

export async function getPosts(locale?: Locale): Promise<ThoughtPost[]> {
  const files = await listContentFiles(POSTS_DIR);
  const items = await Promise.all(
    files.map(async (file) => {
      const fullPath = path.join(POSTS_DIR, file);
      const raw = await fs.readFile(fullPath, 'utf8');
      const { data, body } = parseFrontmatter(raw);
      const { slug, localeFromName } = extractSlugAndLocale(file);

      const dataLocale = isLocale(data.locale)
        ? data.locale
        : localeFromName ?? i18n.defaultLocale;

      if (locale && dataLocale !== locale) return null;

      const id = typeof data.id === 'string' ? data.id : slug;
      const name =
        typeof data.name === 'string' ? data.name : 'Chris Kang';
      const handle =
        typeof data.handle === 'string' ? data.handle : '@chrisk66';
      const avatar =
        typeof data.avatar === 'string'
          ? data.avatar
          : name[0] ?? 'C';
      const avatarUrl =
        typeof data.avatarUrl === 'string'
          ? data.avatarUrl
          : typeof data.avatarImage === 'string'
          ? data.avatarImage
          : undefined;
      const verified =
        typeof data.verified === 'boolean' ? data.verified : true;
      const date =
        typeof data.date === 'string'
          ? data.date
          : new Date().toISOString();
      const timestamp =
        typeof data.timestamp === 'string'
          ? data.timestamp
          : formatRelativeTimestamp(date);

      const content = body;
      const mdxSource = (await serialize(body, {
        mdxOptions: {
          remarkPlugins: [remarkGfm],
        },
      })) as MDXRemoteSerializeResult<Record<string, unknown>, Record<string, unknown>>;

      return {
        id,
        name,
        handle,
        avatar,
        avatarUrl,
        verified,
        content,
        mdxSource,
        timestamp,
        locale: dataLocale,
        date,
      };
    }),
  );

  return sortByDateDesc(items.filter(Boolean) as ThoughtPost[]);
}
