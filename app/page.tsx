'use client';
/* eslint-disable react/no-unescaped-entities, @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, FileTextIcon, GithubLogoIcon } from '@phosphor-icons/react';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';

const TECH_STACK = [
  "React", "Next.js", "TypeScript", "Node.js", "TailwindCSS",
  "shadcn/ui", "Redis", "Whisper", "FFmpeg", "PostgreSQL", "Docker", "AWS"
];

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="space-y-8 animate-fade-in-up">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">Chris</span> — <br />
            Full-stack Developer & <br />
            Open-source Builder.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            I build AI-driven tools and modern web applications with precision and care.
          </p>
          <div className="text-base text-muted-foreground pt-2 flex flex-wrap gap-2">
            <span className="bg-secondary/50 px-2 py-1 rounded text-sm">React</span>
            <span className="bg-secondary/50 px-2 py-1 rounded text-sm">Next.js</span>
            <span className="bg-secondary/50 px-2 py-1 rounded text-sm">Node.js</span>
            <span className="bg-secondary/50 px-2 py-1 rounded text-sm">TypeScript</span>
          </div>
        </div>
        
        <div className="flex gap-4">
          <Button size="lg" className="rounded-full shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300 hover:-translate-y-1" asChild>
            <Link href="/projects">View Projects</Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full hover:bg-secondary/80 transition-colors" asChild>
            <a 
              href="https://github.com/kangchainx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <GithubLogoIcon className="w-4 h-4" />
              GitHub
            </a>
          </Button>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="animate-fade-in-up delay-200 w-full overflow-hidden relative select-none">
        {/* Gradient Masks */}
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-background to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-background to-transparent z-10 pointer-events-none" />

        {/* Scrolling Container */}
        <div className="flex w-max animate-scroll hover:[animation-play-state:paused] py-4">
          {/* We repeat the list twice to create the seamless loop effect */}
          {[...TECH_STACK, ...TECH_STACK].map((tech, index) => (
            <div
              key={index}
              className="mx-4 px-6 py-2.5 rounded-full bg-secondary/30 border border-border/50 backdrop-blur-sm text-sm font-medium text-muted-foreground hover:bg-primary/10 hover:text-primary hover:border-primary/20 transition-colors whitespace-nowrap cursor-default shadow-sm"
            >
              {tech}
            </div>
          ))}
        </div>
      </section>

      {/* Open Source Activity */}
      <section className="animate-fade-in-up delay-300">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="space-y-1">
              <h2 className="font-semibold text-lg">Open Source Activity</h2>
              <p className="text-muted-foreground text-sm">
                Active on GitHub since Oct 2024. Building tools for developers and creators.
              </p>
            </div>
            <Button variant="ghost" className="gap-2 group pl-0 md:pl-4" asChild>
              <a href="https://github.com/kangchainx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                 View Profile <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* GitHub Contribution Graph */}
          <div className="w-full overflow-hidden rounded-lg border border-border bg-card/30 p-4 backdrop-blur-sm">
             {/* Light Mode Image (Dark squares) */}
            <img 
              src="https://ghchart.rshah.org/216e39/kangchainx" 
              alt="Chris Kang's Github Chart" 
              className="w-full block dark:hidden opacity-80 hover:opacity-100 transition-opacity"
            />
            {/* Dark Mode Image (Light squares) */}
            <img 
              src="https://ghchart.rshah.org/39d353/kangchainx" 
              alt="Chris Kang's Github Chart" 
              className="w-full hidden dark:block opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Featured Project */}
      <section className="space-y-8 animate-fade-in-up delay-500">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/70">Featured Project</h2>
        </div>

        <div className="group relative">
          <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
          <Card className="relative overflow-hidden hover:border-foreground/20 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl group-hover:text-primary transition-colors">YouTube Analysis Tool</CardTitle>
              <CardDescription className="text-lg mt-2 text-foreground/80">
                An open-source system for video downloading, speech-to-text,
                subtitle generation, and AI summarization.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Anti-detection strategies
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Whisper / faster-whisper audio
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Multi-language subtitles
                </li>
                <li className="flex items-start gap-2">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  Backend API + summarization
                </li>
              </ul>

              <div className="text-sm text-muted-foreground pt-2">
                <span className="font-semibold text-foreground">Tech Stack:</span> React, Next.js, Node.js, FFmpeg, Whisper, Redis
              </div>
            </CardContent>
            <CardFooter className="gap-4">
              <Button variant="outline" className="gap-2 hover:bg-primary hover:text-primary-foreground transition-colors" asChild>
                <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                  <GithubLogoIcon className="w-4 h-4" />
                  GitHub Repo
                </a>
              </Button>
              <Button variant="outline" className="gap-2 hover:bg-secondary transition-colors" asChild>
                 <a href="#" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                   <FileTextIcon className="w-4 h-4" />
                   Documentation
                 </a>
              </Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Other Projects Preview */}
      <section className="space-y-8 animate-fade-in-up delay-700">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/70">Other Projects</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
           {/* Card 1 */}
           <div className="p-6 rounded-lg border bg-card/50 backdrop-blur-sm hover:bg-secondary/30 transition-all duration-300 hover:scale-[1.02] cursor-default">
              <h3 className="font-semibold mb-2 flex items-center gap-2">Web3 Gas Tracker <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">WIP</span></h3>
              <p className="text-sm text-muted-foreground">Real-time gas usage monitor for Ethereum networks.</p>
           </div>
           {/* Card 2 */}
           <div className="p-6 rounded-lg border bg-card/50 backdrop-blur-sm hover:bg-secondary/30 transition-all duration-300 hover:scale-[1.02] cursor-default">
              <h3 className="font-semibold mb-2">Dev Productivity Scripts</h3>
              <p className="text-sm text-muted-foreground">Automation utilities for repetitive workflows.</p>
           </div>
           {/* Card 3 */}
           <div className="p-6 rounded-lg border bg-card/50 backdrop-blur-sm hover:bg-secondary/30 transition-all duration-300 hover:scale-[1.02] cursor-default">
              <h3 className="font-semibold mb-2">API Playground</h3>
              <p className="text-sm text-muted-foreground">Experiments with streaming, uploads, and AI models.</p>
           </div>
        </div>
      </section>
    </div>
  );
}
