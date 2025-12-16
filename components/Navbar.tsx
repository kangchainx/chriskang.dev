'use client';

import React, { useEffect, useMemo, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ListIcon, MoonIcon, SunIcon, XIcon } from '@phosphor-icons/react';

import type { NavItem } from '@/types';
import { Button } from './ui/Button';
import type { Locale } from '@/i18n.config';

interface NavbarProps {
  locale: Locale;
  brand: string;
  navItems: NavItem[];
  languageToggle: {
    toEnglish: string;
    toChinese: string;
    ariaLabel: string;
  };
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  locale,
  brand,
  navItems,
  languageToggle,
  isDark,
  toggleTheme,
}) => {
  const pathname = usePathname();
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const switchLocaleHref = useMemo(() => {
    const segments = pathname.split('/').filter(Boolean);
    const hasKnownLocale = segments[0] === 'en' || segments[0] === 'zh';
    const remainder = hasKnownLocale ? segments.slice(1).join('/') : segments.join('/');
    const targetLocale = locale === 'en' ? 'zh' : 'en';
    return `/${targetLocale}${remainder ? `/${remainder}` : ''}`;
  }, [locale, pathname]);

  const languageLabel = locale === 'en' ? languageToggle.toChinese : languageToggle.toEnglish;

  useEffect(() => {
    setIsDrawerOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!isDrawerOpen) return;
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [isDrawerOpen]);

  useEffect(() => {
    if (!isDrawerOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setIsDrawerOpen(false);
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [isDrawerOpen]);

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
          <div className="min-w-0 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
            <Link href={`/${locale}`} className="block truncate">
              {brand}
            </Link>
          </div>

          <nav className="flex items-center gap-2 md:gap-6">
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsDrawerOpen(true)}
              aria-label="Open menu"
              aria-expanded={isDrawerOpen}
              aria-controls="mobile-drawer"
            >
              <ListIcon className="h-5 w-5" weight="bold" />
            </Button>

            <div className="hidden md:flex gap-6 text-sm font-medium">
              {navItems.map((item) => {
                const cleanPath = item.href.split('#')[0];
                const isActive = item.href !== '#' && pathname === cleanPath;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`transition-colors hover:text-foreground/80 ${
                      isActive ? 'text-foreground' : 'text-muted-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>

            <Button
              variant="ghost"
              size="sm"
              asChild
              aria-label={languageToggle.ariaLabel}
              className="text-xs font-medium"
            >
              <Link href={switchLocaleHref}>{languageLabel}</Link>
            </Button>

            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="ml-1"
              aria-label="Toggle dark mode"
            >
              {isDark ? (
                <SunIcon className="h-5 w-5" weight="duotone" />
              ) : (
                <MoonIcon className="h-5 w-5" weight="duotone" />
              )}
            </Button>
          </nav>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] md:hidden transition-opacity duration-200 ${
          isDrawerOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        role="dialog"
        aria-modal="true"
        aria-hidden={!isDrawerOpen}
      >
        <button
          type="button"
          className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
          onClick={() => setIsDrawerOpen(false)}
          aria-label="Close menu"
          tabIndex={isDrawerOpen ? 0 : -1}
        />
        <aside
          id="mobile-drawer"
          className={`absolute right-0 top-0 h-full w-72 max-w-[84vw] bg-background/95 border-l border-border shadow-xl rounded-l-2xl flex flex-col transition-transform duration-200 ease-out ${
            isDrawerOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="px-5 pt-[calc(env(safe-area-inset-top)+1.25rem)] pb-4 border-b border-border">
            <div className="flex items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Menu</div>
                <div className="font-semibold truncate">{brand}</div>
              </div>
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsDrawerOpen(false)}
                aria-label="Close menu"
              >
                <XIcon className="h-5 w-5" weight="bold" />
              </Button>
            </div>
          </div>

          <div className="px-3 py-4 flex-1 overflow-y-auto">
            <div className="flex flex-col gap-1 text-base font-medium">
              {navItems.map((item) => {
                const cleanPath = item.href.split('#')[0];
                const isActive = item.href !== '#' && pathname === cleanPath;
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    onClick={() => setIsDrawerOpen(false)}
                    className={`px-3 py-2 rounded-lg transition-colors ${
                      isActive
                        ? 'bg-accent text-foreground'
                        : 'text-muted-foreground hover:bg-accent/60 hover:text-foreground'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          <div className="px-5 pb-[calc(env(safe-area-inset-bottom)+1.25rem)] pt-3 border-t border-border text-xs text-muted-foreground">
            Tap outside or press Esc to close
          </div>
        </aside>
      </div>
    </>
  );
};
