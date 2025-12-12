'use client';

import React from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowSquareOutIcon, CodeIcon, GithubLogoIcon } from '@phosphor-icons/react';

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
  const techIconMap: Record<string, string> = {
    react: '/tech/react.svg',
    'react.js': '/tech/react.svg',
    reactjs: '/tech/react.svg',
    typescript: '/tech/typescript.svg',
    'type script': '/tech/typescript.svg',
    'next.js': '/tech/next.svg',
    nextjs: '/tech/next.svg',
    next: '/tech/next.svg',
    node: '/tech/nodejs.svg',
    'nodejs': '/tech/nodejs.svg',
    'node.js': '/tech/nodejs.svg',
    python: '/tech/python.svg',
    tailwind: '/tech/tailwindcss.svg',
    'tailwind css': '/tech/tailwindcss.svg',
    'tailwindcss': '/tech/tailwindcss.svg',
    spring: '/tech/spring.svg',
    'spring boot': '/tech/spring.svg',
    postgresql: '/tech/postgresql.svg',
    postgres: '/tech/postgresql.svg',
    vue: '/tech/vue.svg',
    'vue.js': '/tech/vue.svg',
  };

  const techStackItems = dict.projectsPage.hero.techStackValue
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  const screenshots = [
    { src: '/project-screenshot/login_page.png', label: 'Login Page' },
    { src: '/project-screenshot/home_page.png', label: 'Home Page' },
    { src: '/project-screenshot/search_result_table_page.png', label: 'Search Table' },
    { src: '/project-screenshot/search_result_card_page.png', label: 'Search Result Card' },
    { src: '/project-screenshot/search_result_detail_page.png', label: 'Search Detail' },
  ];

  const [activeShot, setActiveShot] = React.useState(0);

  React.useEffect(() => {
    const id = setInterval(() => {
      setActiveShot((prev) => (prev + 1) % screenshots.length);
    }, 4000);
    return () => clearInterval(id);
  }, [screenshots.length]);

  return (
    <div className="space-y-20">
      
      {/* Featured Section */}
      <section className="space-y-6 animate-fade-in-up">
        <h1 className="text-3xl font-bold tracking-tight mb-8">{dict.projectsPage.heroTitle}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Content Column */}
          <div className="space-y-8">
            <div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  <CodeIcon className="w-3 h-3" weight="duotone" /> {dict.projectsPage.hero.badge}
                </div>
                <div className="flex items-center gap-2">
                  {techStackItems.map((item) => {
                    const key = item.toLowerCase();
                    const icon = techIconMap[key];
                    return icon ? (
                      <Image
                        key={item}
                        src={icon}
                        alt={item}
                        title={item}
                        width={24}
                        height={24}
                        sizes="24px"
                        className="h-6 w-6 rounded-sm border border-border/50 bg-card/70 p-1"
                      />
                    ) : (
                      <span
                        key={item}
                        title={item}
                        className="h-6 w-6 rounded-sm border border-border/50 bg-card/80 shadow-sm flex items-center justify-center"
                      >
                        <span className="h-2 w-2 rounded-full bg-primary" aria-hidden />
                      </span>
                    );
                  })}
                </div>
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

            <div className="flex flex-wrap gap-4 pt-2">
              <Button className="gap-2 shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all">
                <GithubLogoIcon className="w-4 h-4" weight="duotone" /> {dict.projectsPage.hero.repoCta}
              </Button>
              <Button variant="ghost" disabled className="gap-2 opacity-50 cursor-not-allowed">
                <ArrowSquareOutIcon className="w-4 h-4" weight="duotone" /> {dict.projectsPage.hero.demoCta}
              </Button>
            </div>
          </div>

          {/* Screenshot / Demo Column */}
          <div className="w-full mt-6">
            <div className="relative aspect-video rounded-3xl overflow-hidden bg-card shadow-2xl shadow-black/5 border border-border scale-[1.03]">
              <AnimatePresence mode="wait">
                <motion.img
                  key={screenshots[activeShot].src}
                  src={screenshots[activeShot].src}
                  alt={screenshots[activeShot].label}
                  className="absolute inset-0 h-full w-full object-cover"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                />
              </AnimatePresence>
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
