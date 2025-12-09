import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';
import { cookies, headers } from 'next/headers';

import { i18n, type Locale } from '@/i18n.config';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chris Kang | Full-stack Developer',
  description: 'Portfolio of Chris Kang, Full-stack Developer & Open-source Builder.',
  manifest: '/favicon/site.webmanifest',
  icons: {
    icon: [
      { url: '/favicon/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon/favicon.ico', type: 'image/x-icon' },
      { url: '/favicon/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/favicon/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [{ url: '/favicon/apple-touch-icon.png', sizes: '180x180' }],
    shortcut: ['/favicon/favicon.ico'],
  },
};

const isSupportedLocale = (value: string | null | undefined): value is Locale =>
  typeof value === 'string' && i18n.locales.includes(value as Locale);

async function getCurrentLocale() {
  const requestHeaders = await headers();
  const localeFromHeader = requestHeaders.get('x-locale');
  if (isSupportedLocale(localeFromHeader)) {
    return localeFromHeader;
  }

  const cookieStore = await cookies();
  const localeFromCookie = cookieStore.get('NEXT_LOCALE')?.value;
  if (isSupportedLocale(localeFromCookie)) {
    return localeFromCookie;
  }
  return i18n.defaultLocale;
}

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const locale = await getCurrentLocale();

  return (
    <html lang={locale}>
      <body className={`${inter.className} bg-background text-foreground antialiased transition-colors duration-300 overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
