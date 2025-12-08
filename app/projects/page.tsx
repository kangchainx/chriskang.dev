'use client';
import React from 'react';
import { ArrowSquareOutIcon, CodeIcon, FileTextIcon, GithubLogoIcon } from '@phosphor-icons/react';

import { Button } from '@/components/ui/Button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';

export default function Projects() {
  return (
    <div className="space-y-20">
      
      {/* Featured Section */}
      <section className="space-y-6 animate-fade-in-up">
        <h1 className="text-3xl font-bold tracking-tight mb-8">Featured Project</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                <CodeIcon className="w-3 h-3" /> Open Source
              </div>
              <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">YouTube Analysis Tool</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                An open-source system for video downloading, speech-to-text,
                subtitle generation, and AI summarization.
              </p>
            </div>

            <div className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                  Handles YouTube rate limits with anti-detection strategies
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                  Processes audio using Whisper / faster-whisper
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                  Supports multi-language subtitles & SRT/VTT export
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                  Backend API + file server + AI summarization pipeline
                </li>
              </ul>
            </div>

            <div className="p-4 bg-card/50 border border-border/50 rounded-lg backdrop-blur-sm">
              <div className="text-sm font-medium">
                <span className="text-muted-foreground mr-2">Tech Stack:</span> 
                <span className="text-foreground">React, Next.js, TailwindCSS, Node.js, FFmpeg, Whisper/faster-whisper</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                <GithubLogoIcon className="w-4 h-4" /> GitHub Repo
              </Button>
              <Button variant="outline" className="gap-2 hover:bg-secondary transition-colors">
                <FileTextIcon className="w-4 h-4" /> Documentation
              </Button>
              <Button variant="ghost" disabled className="gap-2 opacity-50 cursor-not-allowed">
                <ArrowSquareOutIcon className="w-4 h-4" /> Demo (Coming Soon)
              </Button>
            </div>
          </div>

          {/* Screenshot Placeholder Column */}
          <div className="w-full aspect-video bg-gradient-to-br from-muted to-card rounded-xl border border-border flex items-center justify-center text-muted-foreground/50 shadow-2xl shadow-black/5 relative overflow-hidden group">
             <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:20px_20px]" />
             <div className="text-center z-10 transition-transform duration-500 group-hover:scale-105">
                <p className="font-medium">Project Screenshot / Demo Video</p>
                <p className="text-xs mt-2 opacity-70">16:9 Aspect Ratio</p>
             </div>
          </div>
        </div>
      </section>

      <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent w-full" />

      {/* Other Projects Section */}
      <section className="space-y-8 animate-fade-in-up delay-200">
        <h2 className="text-2xl font-bold tracking-tight">Other Projects</h2>
        
        <div className="grid gap-6">
          {/* Project 1 */}
          <Card className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg">Web3 Gas Tracker</CardTitle>
                <span className="text-[10px] bg-secondary px-2 py-1 rounded-full text-secondary-foreground font-medium tracking-wide">WIP</span>
              </div>
              <CardDescription>Real-time gas usage monitor for Ethereum networks.</CardDescription>
            </CardHeader>
          </Card>

          {/* Project 2 */}
          <Card className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Dev Productivity Scripts</CardTitle>
              <CardDescription>Automation utilities for repetitive workflows.</CardDescription>
            </CardHeader>
          </Card>

          {/* Project 3 */}
          <Card className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-lg">Personal API Playground</CardTitle>
              <CardDescription>Experiments with endpoints, streaming, uploads, rate limiting, and AI models.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Open Source Footer */}
      <section className="bg-gradient-to-br from-secondary/30 to-background rounded-xl p-8 border border-border animate-fade-in-up delay-300">
        <h3 className="font-bold text-lg mb-2">Open-source Contributions</h3>
        <p className="text-muted-foreground mb-1">Active on GitHub since Oct 2024.</p>
        <p className="text-muted-foreground mb-1">Building tools for developers and creators.</p>
        <p className="text-muted-foreground">Interested in AI, automation, and Web3 infrastructure.</p>
      </section>

    </div>
  );
}
