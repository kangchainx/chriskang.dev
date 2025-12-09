'use client';

import React from 'react';
import { EnvelopeSimpleIcon, GithubLogoIcon, XLogoIcon } from '@phosphor-icons/react';

import type { Dictionary } from '@/locales';

interface AboutPageClientProps {
  dict: Dictionary;
}

export function AboutPageClient({ dict }: AboutPageClientProps) {
  return (
    <div className="space-y-16 max-w-3xl">
      
      {/* Intro */}
      <section className="space-y-6 animate-fade-in-up">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{dict.aboutPage.title}</h1>
        <p className="text-xl leading-relaxed text-muted-foreground">
          {dict.aboutPage.intro}
        </p>
      </section>

      {/* Background */}
      <section className="space-y-4 animate-fade-in-up delay-100">
        <h2 className="text-xl font-semibold border-b border-border pb-2 flex items-center gap-2">
           {dict.aboutPage.background.title}
        </h2>
        <ul className="space-y-4 text-muted-foreground">
          {dict.aboutPage.background.items.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-border mt-2.5 flex-shrink-0"></span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Approach */}
      <section className="space-y-4 animate-fade-in-up delay-200">
        <h2 className="text-xl font-semibold border-b border-border pb-2">{dict.aboutPage.approach.title}</h2>
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="p-4 bg-secondary/20 rounded-lg border border-border/50">
             <ul className="space-y-2 text-muted-foreground">
                {dict.aboutPage.approach.left.map((item) => (
                  <li key={item} className="flex items-center gap-2">{item}</li>
                ))}
             </ul>
          </div>
          <div className="p-4 bg-secondary/20 rounded-lg border border-border/50">
             <ul className="space-y-2 text-muted-foreground">
                {dict.aboutPage.approach.right.map((item) => (
                  <li key={item} className="flex items-center gap-2">{item}</li>
                ))}
             </ul>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="space-y-6 animate-fade-in-up delay-300">
        <h2 className="text-xl font-semibold border-b border-border pb-2">{dict.aboutPage.skills.title}</h2>
        
        <div className="grid gap-6 sm:grid-cols-2">
          {dict.aboutPage.skills.sections.map((section) => (
            <div key={section.title} className="group">
              <h3 className="font-medium mb-2 text-foreground group-hover:text-primary transition-colors">{section.title}</h3>
              <p className="text-muted-foreground group-hover:text-foreground/80 transition-colors">{section.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Connect */}
      <section id="contact" className="space-y-6 pt-8 animate-fade-in-up delay-500">
        <h2 className="text-xl font-semibold border-b border-border pb-2">{dict.aboutPage.contact.title}</h2>
        <div className="space-y-4">
          <a href={`mailto:${dict.aboutPage.contact.items.email}`} className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/40 transition-all group">
            <div className="p-2 bg-background rounded-full shadow-sm group-hover:scale-110 transition-transform">
               <EnvelopeSimpleIcon className="w-5 h-5 text-foreground" weight="duotone" />
            </div>
            <span className="text-muted-foreground group-hover:text-foreground transition-colors">{dict.aboutPage.contact.items.email}</span>
          </a>
          
          <a href="https://github.com/kangchainx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/40 transition-all group">
             <div className="p-2 bg-background rounded-full shadow-sm group-hover:scale-110 transition-transform">
               <GithubLogoIcon className="w-5 h-5 text-foreground" weight="duotone" />
             </div>
             <span className="text-muted-foreground group-hover:text-foreground transition-colors">{dict.aboutPage.contact.items.github}</span>
          </a>
          
          <a href="https://x.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 p-3 rounded-lg hover:bg-secondary/40 transition-all group">
             <div className="p-2 bg-background rounded-full shadow-sm group-hover:scale-110 transition-transform">
               <XLogoIcon className="w-5 h-5 text-foreground" weight="duotone" />
             </div>
             <span className="text-muted-foreground group-hover:text-foreground transition-colors">{dict.aboutPage.contact.items.x}</span>
          </a>
        </div>
      </section>

    </div>
  );
}
