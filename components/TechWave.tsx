'use client';

import React from 'react';
import { motion } from 'framer-motion';

type TechWaveItem = {
  name: string;
};

interface TechWaveProps {
  items?: TechWaveItem[];
  speedSeconds?: number;
  className?: string;
}

const DEFAULT_ITEMS: TechWaveItem[] = [
  { name: 'React' },
  { name: 'Next.js' },
  { name: 'TypeScript' },
  { name: 'Vue 3' },
  { name: 'Spring' },
  { name: 'Java' },
  { name: 'PostgreSQL' },
];

export function TechWave({
  items = DEFAULT_ITEMS,
  speedSeconds = 60,
  className = '',
}: TechWaveProps) {
  const marqueeItems = [...items, ...items];
  const amplitude = 14;
  const duration = 6;
  const stagger = 0.22;

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl border border-border/60 bg-card/60 backdrop-blur-sm min-h-[220px] ${className}`}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-background via-background/80 to-transparent z-10" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-background via-background/80 to-transparent z-10" />

      <div className="group relative" aria-label="Tech stack marquee" role="list">
        <div
          className="flex w-max animate-scroll gap-5 px-10 py-10 group-hover:[animation-play-state:paused] will-change-transform"
          style={{ animationDuration: `${speedSeconds}s` }}
        >
          {marqueeItems.map((item, index) => (
            <motion.div
              role="listitem"
              key={`${item.name}-${index}`}
              className="flex items-center justify-center px-7 py-4 rounded-full bg-secondary/40 border border-border/60 shadow-sm backdrop-blur-[2px] text-sm font-semibold text-foreground/80 tracking-tight"
              animate={{ y: [0, -amplitude, 0, amplitude, 0] }}
              transition={{
                duration,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: -index * stagger,
              }}
              whileHover={{ scale: 1.08, y: 0 }}
            >
              {item.name}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
