'use client';

import React from 'react';
import { ArrowSquareOutIcon, CodeIcon, FileTextIcon, GithubLogoIcon } from '@phosphor-icons/react';

import { Button } from '@/components/ui/Button';
import { Card, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import type { Dictionary } from '@/locales';

interface ProjectsPageClientProps {
  dict: Dictionary;
}

type OtherCard = {
  title: string;
  description: string;
  badge?: string;
};

export function ProjectsPageClient({ dict }: ProjectsPageClientProps) {
  return (
    <div className="space-y-20">
      
      {/* Featured Section */}
      <section className="space-y-6 animate-fade-in-up">
        <h1 className="text-3xl font-bold tracking-tight mb-8">{dict.projectsPage.heroTitle}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium mb-4">
                <CodeIcon className="w-3 h-3" weight="duotone" /> {dict.projectsPage.hero.badge}
              </div>
              <h2 className="text-3xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-foreground to-foreground/70">{dict.projectsPage.hero.title}</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {dict.projectsPage.hero.description}
              </p>
            </div>

            <div className="space-y-4">
              <ul className="space-y-3 text-muted-foreground">
                {dict.projectsPage.hero.bullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0 shadow-[0_0_8px_rgba(var(--primary),0.5)]" />
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            <div className="p-4 bg-card/50 border border-border/50 rounded-lg backdrop-blur-sm">
              <div className="text-sm font-medium">
                <span className="text-muted-foreground mr-2">{dict.projectsPage.hero.techStackLabel}</span> 
                <span className="text-foreground">{dict.projectsPage.hero.techStackValue}</span>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                <GithubLogoIcon className="w-4 h-4" weight="duotone" /> {dict.projectsPage.hero.repoCta}
              </Button>
              <Button variant="outline" className="gap-2 hover:bg-secondary transition-colors">
                <FileTextIcon className="w-4 h-4" weight="duotone" /> {dict.projectsPage.hero.docsCta}
              </Button>
              <Button variant="ghost" disabled className="gap-2 opacity-50 cursor-not-allowed">
                <ArrowSquareOutIcon className="w-4 h-4" weight="duotone" /> {dict.projectsPage.hero.demoCta}
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
        <h2 className="text-2xl font-bold tracking-tight">{dict.projectsPage.otherTitle}</h2>
        
        <div className="grid gap-6">
          {(dict.projectsPage.otherCards as ReadonlyArray<OtherCard>).map((card) => (
            <Card key={card.title} className="hover:border-primary/50 transition-all duration-300 hover:shadow-lg bg-card/50 backdrop-blur-sm">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{card.title}</CardTitle>
                  {card.badge ? (
                    <span className="text-[10px] bg-secondary px-2 py-1 rounded-full text-secondary-foreground font-medium tracking-wide">
                      {card.badge}
                    </span>
                  ) : null}
                </div>
                <CardDescription>{card.description}</CardDescription>
              </CardHeader>
            </Card>
          ))}
        </div>
      </section>

      {/* Open Source Footer */}
      <section className="bg-gradient-to-br from-secondary/30 to-background rounded-xl p-8 border border-border animate-fade-in-up delay-300">
        <h3 className="font-bold text-lg mb-2">{dict.projectsPage.contributions.title}</h3>
        {dict.projectsPage.contributions.lines.map((line) => (
          <p key={line} className="text-muted-foreground mb-1 last:mb-0">
            {line}
          </p>
        ))}
      </section>

    </div>
  );
}
