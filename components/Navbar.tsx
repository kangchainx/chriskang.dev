'use client';

import React, { useMemo } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';

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

  const switchLocaleHref = useMemo(() => {
    const segments = pathname.split('/').filter(Boolean);
    const hasKnownLocale = segments[0] === 'en' || segments[0] === 'zh';
    const remainder = hasKnownLocale ? segments.slice(1).join('/') : segments.join('/');
    const targetLocale = locale === 'en' ? 'zh' : 'en';
    return `/${targetLocale}${remainder ? `/${remainder}` : ''}`;
  }, [locale, pathname]);

  const languageLabel = locale === 'en' ? languageToggle.toChinese : languageToggle.toEnglish;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <div className="font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
          <Link href={`/${locale}`}>{brand}</Link>
        </div>

        <nav className="flex items-center gap-4 md:gap-6">
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
            {isDark ? <SunIcon className="h-5 w-5" weight="duotone" /> : <MoonIcon className="h-5 w-5" weight="duotone" />}
          </Button>
        </nav>
      </div>
    </header>
  );
};
