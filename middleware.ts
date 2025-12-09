import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

import { i18n, type Locale } from './i18n.config';

const PUBLIC_FILE = /\.(.*)$/;

const isSupportedLocale = (locale: string | undefined): locale is Locale =>
  typeof locale === 'string' && i18n.locales.includes(locale as Locale);

const withLocaleHeader = (request: NextRequest, locale: Locale) => {
  const headers = new Headers(request.headers);
  headers.set('x-locale', locale);
  return headers;
};

const detectLocale = (request: NextRequest): Locale => {
  const cookieLocale = request.cookies.get('NEXT_LOCALE')?.value;
  return isSupportedLocale(cookieLocale) ? cookieLocale : i18n.defaultLocale;
};

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    PUBLIC_FILE.test(pathname)
  ) {
    return NextResponse.next();
  }

  const pathnameIsMissingLocale = i18n.locales.every(
    (locale) => !pathname.startsWith(`/${locale}/`) && pathname !== `/${locale}`
  );

  // If the locale is already part of the path, keep it and sync cookie.
  if (!pathnameIsMissingLocale) {
    const localeFromPath = pathname.split('/').filter(Boolean)[0] as Locale;
    const response = NextResponse.next({
      request: {
        headers: withLocaleHeader(request, localeFromPath),
      },
    });
    response.cookies.set('NEXT_LOCALE', localeFromPath, { path: '/' });
    return response;
  }

  const locale = detectLocale(request);
  const redirectUrl = new URL(`/${locale}${pathname}`, request.url);

  if (searchParams.toString()) {
    redirectUrl.search = searchParams.toString();
  }

  const response = NextResponse.redirect(redirectUrl);
  response.cookies.set('NEXT_LOCALE', locale, { path: '/' });
  return response;
}

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
