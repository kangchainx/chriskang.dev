'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { MoonIcon, SunIcon } from '@phosphor-icons/react';
import { NAV_ITEMS } from '../types';
import { Button } from './ui/Button';

interface NavbarProps {
  isDark: boolean;
  toggleTheme: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ isDark, toggleTheme }) => {
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-5xl mx-auto px-6 md:px-12 h-16 flex items-center justify-between">
        <div className="font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
          <Link href="/">CHRIS KANG</Link>
        </div>

        <nav className="flex items-center gap-6">
          <div className="hidden md:flex gap-6 text-sm font-medium">
            {NAV_ITEMS.map((item) => {
              const isActive = item.href !== '#' && pathname === item.href;
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
            size="icon" 
            onClick={toggleTheme}
            className="ml-2"
            aria-label="Toggle dark mode"
          >
            {isDark ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
          </Button>
        </nav>
      </div>
    </header>
  );
};
