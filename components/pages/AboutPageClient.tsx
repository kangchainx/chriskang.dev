'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

import type { Dictionary } from '@/locales';

interface AboutPageClientProps {
  dict: Dictionary;
}

export function AboutPageClient({ dict }: AboutPageClientProps) {
  const albumImages = [
    { src: '/album/chris_01.jpg', alt: 'Chris Kang' },
    { src: '/album/chris_02.jpeg', alt: 'Chris Kang' },
    { src: '/album/chris_03.jpeg', alt: 'Chris Kang' },
    { src: '/album/chris_04.jpeg', alt: 'Chris Kang' },
    { src: '/album/chris_05.jpeg', alt: 'Chris Kang' },
    { src: '/album/Timt_01.jpeg', alt: 'Chris Kang' },
  ];
  const [photoIndex, setPhotoIndex] = React.useState(0);

  const shufflePhoto = React.useCallback(() => {
    if (albumImages.length <= 1) return;
    let next = photoIndex;
    while (next === photoIndex) {
      next = Math.floor(Math.random() * albumImages.length);
    }
    setPhotoIndex(next);
  }, [albumImages.length, photoIndex]);

  return (
    <div className="space-y-16 max-w-5xl mx-auto">
      {/* Intro with photo */}
      <section className="grid lg:grid-cols-[1.1fr_0.9fr] gap-8 items-center animate-fade-in-up">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">{dict.aboutPage.title}</h1>
          <p className="text-xl leading-relaxed text-muted-foreground">
            {dict.aboutPage.intro}
          </p>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 120, rotate: -6, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, rotate: -2, scale: 1 }}
          viewport={{ once: true, amount: 0.8 }}
          transition={{ type: 'spring', bounce: 0.35, duration: 0.8 }}
          className="rounded-2xl border border-border/60 bg-card/60 shadow-lg overflow-hidden h-[280px] lg:h-[320px] cursor-pointer"
          onClick={shufflePhoto}
          >
          <Image
            key={albumImages[photoIndex].src}
            src={albumImages[photoIndex].src}
            alt={albumImages[photoIndex].alt}
            width={800}
            height={600}
            className="w-full h-full object-cover"
            sizes="(min-width: 1024px) 40vw, 90vw"
            priority
          />
        </motion.div>
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

      {/* Why Hire Me */}
      <section className="space-y-4 animate-fade-in-up delay-150">
        <h2 className="text-xl font-semibold border-b border-border pb-2 flex items-center gap-2">
          {dict.aboutPage.hire.title}
        </h2>
        <p className="text-muted-foreground leading-relaxed">{dict.aboutPage.hire.lead}</p>
        <ul className="space-y-3 text-muted-foreground">
          {dict.aboutPage.hire.bullets.map((item) => (
            <li key={item} className="flex gap-3">
              <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2.5 flex-shrink-0"></span>
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

      {/* What I Offer */}
      <section className="space-y-6 animate-fade-in-up delay-250">
        <h2 className="text-xl font-semibold border-b border-border pb-2">{dict.aboutPage.offer.title}</h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {dict.aboutPage.offer.cards.map((card) => (
            <div key={card.title} className="rounded-lg border border-border/60 bg-card/50 p-4 shadow-sm hover:shadow-md transition-all">
              <h3 className="font-semibold text-foreground mb-2">{card.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{card.description}</p>
            </div>
          ))}
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
    </div>
  );
}
