'use client';

/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Link from 'next/link';
import { ArrowRightIcon, FileTextIcon, GithubLogoIcon } from '@phosphor-icons/react';
import { motion } from 'framer-motion';

import { TextMarquee } from '@/components/TextMarquee';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/Card';
import type { Locale } from '@/i18n.config';
import type { Dictionary } from '@/locales';

interface HomePageClientProps {
  dict: Dictionary;
  locale: Locale;
}

type OtherProjectCard = {
  title: string;
  description: string;
  badge?: string;
};

export function HomePageClient({ dict, locale }: HomePageClientProps) {
  const heroStack = [
    { name: 'React', icon: '/tech/react.svg' },
    { name: 'TypeScript', icon: '/tech/typescript.svg' },
    { name: 'Vue 3', icon: '/tech/vue.svg' },
    { name: 'Next.js', icon: '/tech/next.svg' },
    { name: 'Spring', icon: '/tech/spring.svg' },
    { name: 'PostgreSQL', icon: '/tech/postgresql.svg' },
  ];

  return (
    <div className="space-y-24">
      {/* Hero Section */}
      <section className="space-y-8 animate-fade-in-up">
        <div className="space-y-4 max-w-3xl">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1]">
            {dict.home.hero.greeting}{' '}
            <span className="relative inline-block">
              {/* Christmas decorations - uncomment during holiday season */}
              {/* <a
                href="https://kangchainx.github.io/github-christmas-kit"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Christmas kit"
                className="absolute -top-6 -left-4 md:-top-8 md:-left-5 w-9 h-9 md:w-11 md:h-11 -rotate-12 z-10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 rounded-full"
              >
                <img
                  src="/svg/christmas-tree.svg"
                  alt="Christmas Tree"
                  className="block h-full w-full dark:hidden"
                />
                <img
                  src="/svg/santa-hat.svg"
                  alt="Santa Hat"
                  className="hidden h-full w-full dark:block"
                />
              </a> */}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-foreground to-foreground/50">
                {dict.home.hero.name}
              </span>
            </span>{' '}
            — <br />
            {dict.home.hero.titleLines[0]} <br />
            {dict.home.hero.titleLines[1]}
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-2xl">
            {dict.home.hero.description}
          </p>
          <div className="pt-2 flex flex-wrap gap-3">
            {heroStack.map((item, idx) => (
              <motion.div
                key={item.name}
                title={item.name}
                aria-label={item.name}
                className="flex items-center gap-2 px-3 py-2 rounded-lg bg-card/70 border border-border/50 shadow-sm hover:shadow-md transition-shadow duration-200"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0, transition: { delay: idx * 0.08, duration: 0.35, ease: 'easeOut' } }}
                whileHover={{ y: -6, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 320, damping: 24 }}
              >
                <img src={item.icon} alt={item.name} title={item.name} className="h-7 w-7" />
              </motion.div>
            ))}
          </div>
        </div>
        
        <div className="flex gap-4">
          <Button 
            variant="outline" 
            size="lg" 
            className="rounded-full hover:bg-black hover:text-white transition-all duration-200 ease-out pr-3 group" 
            asChild
          >
            <Link 
              href={`/${locale}/projects`} 
              className="flex items-center gap-2"
            >
              {dict.home.hero.primaryCta}
              <ArrowRightIcon className="w-4 h-4 translate-x-2 opacity-0 transition-all duration-200 ease-out group-hover:translate-x-0 group-hover:opacity-100" />
            </Link>
          </Button>
          <Button variant="outline" size="lg" className="rounded-full hover:bg-secondary/80 transition-colors" asChild>
            <a 
              href="https://github.com/kangchainx" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center gap-2"
            >
              <GithubLogoIcon className="w-4 h-4" weight="duotone" />
              {dict.home.hero.githubCta}
            </a>
          </Button>
        </div>
      </section>

      {/* Tech Stack Marquee */}
      <section className="animate-fade-in-up delay-200">
        {(() => {
          const half = Math.ceil(dict.home.techStack.length / 2);
          const rows = [dict.home.techStack.slice(0, half), dict.home.techStack.slice(half)];
          return <TextMarquee items={dict.home.techStack} rows={rows} speedSeconds={70} alternateDirection />;
        })()}
      </section>

      {/* Open Source Activity */}
      <section className="animate-fade-in-up delay-300">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col md:flex-row gap-4 items-start md:items-center justify-between">
            <div className="space-y-1">
              <h2 className="font-semibold text-lg">{dict.home.openSource.title}</h2>
              <p className="text-muted-foreground text-sm">
                {dict.home.openSource.description}
              </p>
            </div>
            <Button variant="ghost" className="gap-2 group pl-0 md:pl-4" asChild>
              <a href="https://github.com/kangchainx" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
                 {dict.home.openSource.profileCta} <ArrowRightIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* GitHub Contribution Graph */}
          <div className="w-full overflow-hidden rounded-lg border border-border bg-card/30 p-4 backdrop-blur-sm">
             {/* Light Mode Image (Dark squares) */}
            <img 
              src="https://ghchart.rshah.org/216e39/kangchainx" 
              alt={dict.home.openSource.chartAlt} 
              className="w-full block dark:hidden opacity-80 hover:opacity-100 transition-opacity"
            />
            {/* Dark Mode Image (Light squares) */}
            <img 
              src="https://ghchart.rshah.org/39d353/kangchainx" 
              alt={dict.home.openSource.chartAlt} 
              className="w-full hidden dark:block opacity-80 hover:opacity-100 transition-opacity"
            />
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-8 animate-fade-in-up delay-500">
        <div className="flex items-center justify-between">
          <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/70">
            {dict.home.featured.eyebrow}
          </h2>
          <Link
            href={`/${locale}/projects`}
            className="text-sm font-semibold text-foreground/70 hover:text-foreground transition-colors inline-flex items-center gap-2"
          >
            {dict.home.hero.primaryCta}
            <ArrowRightIcon className="w-4 h-4" />
          </Link>
        </div>

        <div className="flex flex-col gap-6">
          {dict.home.featured.projects.map((project) => (
            <div key={project.repoUrl} className="group relative">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
              <Card className="relative overflow-hidden hover:border-foreground/20 transition-all duration-300 group-hover:translate-x-1 group-hover:-translate-y-1 bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <CardTitle className="text-2xl group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <CardDescription className="text-lg mt-2 text-foreground/80">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <ul className="grid sm:grid-cols-2 gap-2 text-muted-foreground">
                    {project.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>

                  <div className="text-sm text-muted-foreground pt-2">
                    <span className="font-semibold text-foreground">{dict.home.featured.techStackLabel}</span>{' '}
                    {project.techStackValue}
                  </div>
                </CardContent>
                <CardFooter className="gap-4">
                  <Button
                    variant="outline"
                    size="lg"
                    className="rounded-full hover:bg-black hover:text-white transition-all duration-200 ease-out pr-4 pl-4 gap-2"
                    asChild
                  >
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2"
                    >
                      <GithubLogoIcon className="w-4 h-4" weight="duotone" />
                      {dict.home.featured.repoCta}
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          ))}
        </div>
      </section>

      {/* Other Projects Preview */}
      <section className="space-y-8 animate-fade-in-up delay-700">
        <h2 className="text-sm font-bold uppercase tracking-widest text-muted-foreground/70">{dict.home.otherProjects.title}</h2>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {(dict.home.otherProjects.cards as ReadonlyArray<OtherProjectCard>).map((card) => (
            <div key={card.title} className="p-6 rounded-lg border bg-card/50 backdrop-blur-sm hover:bg-secondary/30 transition-all duration-300 hover:scale-[1.02] cursor-default">
              <h3 className="font-semibold mb-2 flex items-center gap-2">
                {card.title}
                {card.badge ? (
                  <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full">
                    {card.badge}
                  </span>
                ) : null}
              </h3>
              <p className="text-sm text-muted-foreground">{card.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
