'use client';

import React, { useEffect, useState } from 'react';
import { usePathname } from 'next/navigation';

import { CursorFollower } from './CursorFollower';
import { Footer } from './Footer';
import { Navbar } from './Navbar';
import { Particles } from './Particles';

const ClientShell: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [isDark, setIsDark] = useState(false);
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

  const toggleTheme = () => setIsDark((prev) => !prev);

  return (
    <div className="min-h-screen flex flex-col text-foreground selection:bg-foreground selection:text-background relative overflow-x-hidden">
      <CursorFollower />
      <Particles />
      <Navbar isDark={isDark} toggleTheme={toggleTheme} />
      
      <main className="flex-grow pt-32 pb-16 px-6 md:px-12 max-w-5xl mx-auto w-full relative z-10">
        {children}
      </main>

      <Footer />
    </div>
  );
};

export default ClientShell;
