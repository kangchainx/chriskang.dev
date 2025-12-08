import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import React from 'react';

import ClientShell from '@/components/ClientShell';

import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Chris Kang | Full-stack Developer',
  description: 'Portfolio of Chris Kang, Full-stack Developer & Open-source Builder.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-background text-foreground antialiased transition-colors duration-300 overflow-x-hidden`}>
        <ClientShell>{children}</ClientShell>
      </body>
    </html>
  );
}
