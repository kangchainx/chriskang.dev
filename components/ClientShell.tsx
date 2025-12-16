'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';
import { ArrowUpIcon, CheckIcon, EnvelopeSimpleIcon, GithubLogoIcon, LinkedinLogoIcon, WechatLogoIcon, XLogoIcon } from '@phosphor-icons/react';

import { CursorFollower } from './CursorFollower';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Particles } from './Particles';
import type { NavItem } from '@/types';
import type { Locale } from '@/i18n.config';

interface ClientShellProps {
  children: React.ReactNode;
  locale: Locale;
  brand: string;
  navItems: NavItem[];
  languageToggle: {
    toEnglish: string;
    toChinese: string;
    ariaLabel: string;
  };
  footerText: string;
  contact: {
    email: string;
    github: string;
    x: string;
    linkedin: string;
    wechatId: string;
  };
}

const ClientShell: React.FC<ClientShellProps> = ({
  children,
  locale,
  brand,
  navItems,
  languageToggle,
  footerText,
  contact,
}) => {
  const [isDark, setIsDark] = useState(false);
  const [showTop, setShowTop] = useState(false);
  const [wechatCopied, setWechatCopied] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDark(true);
    }
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
  }, [isDark]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 120);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleCopyWechat = async () => {
    try {
      await navigator.clipboard.writeText(contact.wechatId);
      setWechatCopied(true);
      setTimeout(() => setWechatCopied(false), 1600);
    } catch {
      setWechatCopied(false);
    }
  };

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className="min-h-screen flex flex-col text-foreground selection:bg-foreground selection:text-background relative overflow-x-hidden">
      <CursorFollower />
      <Particles />
      <div className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 flex-col gap-3 z-30">
        {showTop && (
          <a
            href="#top"
            className="p-3 rounded-full bg-background/85 border border-border shadow-md hover:-translate-y-0.5 transition-transform"
            aria-label="Back to top"
          >
            <ArrowUpIcon className="w-5 h-5 text-foreground" />
          </a>
        )}
        <a
          href={`mailto:${contact.email}`}
          className="p-3 rounded-full bg-background/85 border border-border shadow-md hover:-translate-y-0.5 transition-transform"
          aria-label="Email"
        >
          <EnvelopeSimpleIcon className="w-5 h-5 text-foreground" weight="duotone" />
        </a>
        <a
          href={`https://${contact.github}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-background/85 border border-border shadow-md hover:-translate-y-0.5 transition-transform"
          aria-label="GitHub"
        >
          <GithubLogoIcon className="w-5 h-5 text-foreground" weight="duotone" />
        </a>
        <a
          href={`https://${contact.x}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-background/85 border border-border shadow-md hover:-translate-y-0.5 transition-transform"
          aria-label="X"
        >
          <XLogoIcon className="w-5 h-5 text-foreground" weight="duotone" />
        </a>
        <a
          href={`https://${contact.linkedin}`}
          target="_blank"
          rel="noopener noreferrer"
          className="p-3 rounded-full bg-background/85 border border-border shadow-md hover:-translate-y-0.5 transition-transform"
          aria-label="LinkedIn"
        >
          <LinkedinLogoIcon className="w-5 h-5 text-foreground" weight="duotone" />
        </a>
        <button
          type="button"
          onClick={handleCopyWechat}
          className="p-3 rounded-full bg-background/85 border border-border shadow-md hover:-translate-y-0.5 transition-transform"
          aria-label="WeChat"
        >
          {wechatCopied ? (
            <CheckIcon className="w-5 h-5 text-primary" weight="bold" />
          ) : (
            <WechatLogoIcon className="w-5 h-5 text-foreground" weight="duotone" />
          )}
        </button>
      </div>
      <Navbar
        locale={locale}
        brand={brand}
        navItems={navItems}
        languageToggle={languageToggle}
        isDark={isDark}
        toggleTheme={toggleTheme}
      />
      
      <main className="flex-grow pt-32 pb-16 px-6 md:px-12 max-w-5xl mx-auto w-full relative z-10">
        {children}
      </main>

      <Footer text={footerText} wechatId={contact.wechatId} />
    </div>
  );
};

export default ClientShell;
