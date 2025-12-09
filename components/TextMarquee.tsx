'use client';

import React from 'react';

interface TextMarqueeProps {
  items: string[];
  speedSeconds?: number;
  alternateDirection?: boolean;
  className?: string;
  rows?: string[][];
}

export function TextMarquee({
  items,
  speedSeconds = 65,
  alternateDirection = false,
  className = '',
  rows,
}: TextMarqueeProps) {
  const lines = rows && rows.length > 0 ? rows : [items];
  const longestLength = Math.max(...lines.map((line) => line.length || 1));

  return (
    <div
      className={`relative w-full overflow-hidden rounded-2xl select-none ${className}`}
    >
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 md:w-24 bg-gradient-to-r from-background via-background/85 to-transparent z-20" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 md:w-24 bg-gradient-to-l from-background via-background/85 to-transparent z-20" />

      <div className="flex flex-col gap-3 py-6">
        {lines.map((lineItems, rowIdx) => {
          const marqueeItems = [...lineItems, ...lineItems];
          const direction = alternateDirection && rowIdx % 2 === 1 ? 'reverse' : 'normal';
          const duration = speedSeconds * (lineItems.length / longestLength || 1);

          return (
            <div key={rowIdx} className="group relative w-full overflow-hidden">
              <div
                className="flex w-max animate-scroll gap-4 px-6 py-3 group-hover:[animation-play-state:paused] will-change-transform"
                style={{
                  animationDuration: `${duration}s`,
                  animationDirection: direction as React.CSSProperties['animationDirection'],
                }}
              >
                {marqueeItems.map((label, index) => (
                  <div
                    key={`${label}-${index}`}
                    className="flex items-center rounded-full border border-border/60 bg-background/90 px-6 py-2 text-sm font-semibold text-foreground/80 tracking-tight shadow-[0_1px_2px_rgba(0,0,0,0.03)] hover:bg-secondary/50 hover:border-border/80 transition-colors duration-200"
                  >
                    {label}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
