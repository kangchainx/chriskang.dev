'use client';
import { EnvelopeSimpleIcon, GithubLogoIcon, XLogoIcon } from '@phosphor-icons/react';
import React from 'react';

export default function About() {
  return (
    <div className="space-y-16 max-w-3xl">
      
      {/* Intro */}
      <section className="space-y-6 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Me</h1>
        <p className="text-xl leading-relaxed text-muted-foreground">
          I’m Chris — a full-stack developer focused on building <span className="text-foreground font-medium">AI-driven tools</span>,
          modern web apps, and open-source projects.
        </p>
      </section>

      {/* Background */}
      <section className="space-y-4 animate-fade-in-up delay-100">
        <h2 className="text-xl font-semibold border-b border-border pb-2 flex items-center gap-2">
           My Background
        </h2>
        <ul className="space-y-4 text-muted-foreground">
          <li className="flex gap-3">
             <span className="w-1.5 h-1.5 rounded-full bg-border mt-2.5 flex-shrink-0"></span>
             <span>Previously worked on enterprise-level systems in China</span>
          </li>
          <li className="flex gap-3">
             <span className="w-1.5 h-1.5 rounded-full bg-border mt-2.5 flex-shrink-0"></span>
             <span>Experience in backend services and large-scale web applications</span>
          </li>
          <li className="flex gap-3">
             <span className="w-1.5 h-1.5 rounded-full bg-border mt-2.5 flex-shrink-0"></span>
             <span>In 2024, transitioned to independent development</span>
          </li>
          <li className="flex gap-3">
             <span className="w-1.5 h-1.5 rounded-full bg-border mt-2.5 flex-shrink-0"></span>
             <span>Focus on modern tech stacks and open-source work</span>
          </li>
        </ul>
      </section>

      {/* Approach */}
      <section className="space-y-4 animate-fade-in-up delay-200">
        <h2 className="text-xl font-semibold border-b border-border pb-2">My Approach to Work</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-secondary/20 rounded-lg border border-border/50">
             <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">✓ Strong ownership</li>
                <li className="flex items-center gap-2">✓ Product thinking</li>
             </ul>
          </div>
          <div className="p-4 bg-secondary/20 rounded-lg border border-border/50">
             <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-center gap-2">⚡ Fast iteration</li>
                <li className="flex items-center gap-2">⚡ Autonomous & Async</li>
             </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6 animate-fade-in-up delay-300">
        <h2 className="text-xl font-semibold border-b border-border pb-2">My Skills</h2>
        
        <div className="grid gap-6 sm:grid-cols-2">
          <div className="group">
            <h3 className="font-medium mb-2 text-foreground group-hover:text-primary transition-colors">Frontend</h3>
            <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">React, Next.js, TypeScript, TailwindCSS</p>
          </div>
          
          <div className="group">
            <h3 className="font-medium mb-2 text-foreground group-hover:text-primary transition-colors">Backend</h3>
            <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">Node.js, Express/Fastify, Redis</p>
          </div>
          
          <div className="group">
            <h3 className="font-medium mb-2 text-foreground group-hover:text-primary transition-colors">AI/ML</h3>
            <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">Whisper, faster-whisper, FFmpeg pipelines</p>
          </div>
          
          <div className="group">
            <h3 className="font-medium mb-2 text-foreground group-hover:text-primary transition-colors">Web3 (Exploring)</h3>
            <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">Solidity, EVM, RPC interactions</p>
          </div>
        </div>
      </section>

      {/* Connect */}
      <section id="contact" className="space-y-6 pt-8 animate-fade-in-up delay-500">
        <h2 className="text-xl font-semibold border-b border-border pb-2">Let’s Connect</h2>
        <div className="space-y-4">
          <a href="mailto:chris@email.com" className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/40 transition-all group">
            <div className="p-2 bg-background rounded-full shadow-sm group-hover:scale-110 transition-transform">
               <EnvelopeSimpleIcon className="w-5 h-5 text-foreground" />
            </div>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">chris@email.com</span>
          </a>
          
          <a href="https://github.com/kangchainx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/40 transition-all group">
             <div className="p-2 bg-background rounded-full shadow-sm group-hover:scale-110 transition-transform">
               <GithubLogoIcon className="w-5 h-5 text-foreground" />
             </div>
             <span className="text-muted-foreground group-hover:text-foreground transition-colors">github.com/kangchainx</span>
          </a>
          
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/40 transition-all group">
             <div className="p-2 bg-background rounded-full shadow-sm group-hover:scale-110 transition-transform">
               <XLogoIcon className="w-5 h-5 text-foreground" />
             </div>
             <span className="text-muted-foreground group-hover:text-foreground transition-colors">x.com/xxxxx</span>
          </a>
        </div>
      </section>

    </div>
  );
}
