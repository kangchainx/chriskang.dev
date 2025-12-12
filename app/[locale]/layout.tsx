import type { Metadata } from 'next';
import React from 'react';

import ClientShell from '@/components/ClientShell';
import { i18n, type Locale } from '@/i18n.config';
import { getDictionary } from '@/locales';

const resolveLocale = (value: string): Locale =>
  i18n.locales.find((l) => l === value) ?? i18n.defaultLocale;

export function generateStaticParams() {
  return i18n.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  return {
    title: dict.meta.title,
    description: dict.meta.description,
    alternates: {
      languages: {
        en: '/en',
        zh: '/zh',
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale: rawLocale } = await params;
  const locale = resolveLocale(rawLocale);
  const dict = await getDictionary(locale);

  const navItems = [
    { label: dict.nav.items.home, href: `/${locale}` },
    { label: dict.nav.items.projects, href: `/${locale}/projects` },
    { label: dict.nav.items.about, href: `/${locale}/about` },
    { label: dict.nav.items.blog, href: `/${locale}/blog` },
    { label: dict.nav.items.posts, href: `/${locale}/posts` },
  ];

  return (
    <ClientShell
      locale={locale}
      brand={dict.nav.brand}
      navItems={navItems}
      languageToggle={dict.nav.languageToggle}
      footerText={dict.footer.copyright}
      contact={{
        email: dict.aboutPage.contact.items.email,
        github: dict.aboutPage.contact.items.github,
        x: dict.aboutPage.contact.items.x,
        linkedin: 'www.linkedin.com/in/chris-k66',
        wechatId: 'Kangogoaka',
      }}
    >
      {children}
    </ClientShell>
  );
}
