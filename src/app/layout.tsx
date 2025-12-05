import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { Navbar } from "@/components/navbar";
import { cn } from "@/lib/utils";
import { ThemeProvider } from "@/components/theme-provider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Chris Kang | Personal site",
  description: "A minimal personal site starter for chriskang.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-background text-foreground antialiased",
          geistSans.variable,
          geistMono.variable,
        )}
      >
        <ThemeProvider attribute="class" enableSystem>
          <div className="relative">
            <div className="pointer-events-none absolute inset-0 -z-10" />
            <Navbar />
            <main className="container pb-16 pt-6 sm:pt-10">{children}</main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
