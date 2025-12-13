'use client';

import React, { useEffect, useState } from 'react';
import { EyeIcon } from '@phosphor-icons/react';
import { animate, motion, useMotionValue, useTransform } from 'framer-motion';

type VisitData = { total: number; today: number; counted: boolean };

const DEDUPE_WINDOW_MS = 5 * 60 * 1000;

function AnimatedCount({
  value,
  duration = 1,
  className,
}: {
  value: number;
  duration?: number;
  className?: string;
}) {
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.round(latest));

  useEffect(() => {
    const controls = animate(count, value, { duration });
    return () => controls.stop();
  }, [count, duration, value]);

  return (
    <motion.span className={className}>
      {rounded}
    </motion.span>
  );
}

export function VisitStats({ className }: { className?: string }) {
  const [data, setData] = useState<VisitData>();

  useEffect(() => {
    const now = Date.now();
    const last = Number(window.localStorage.getItem('visits:last') ?? 0);
    const shouldCount = !last || now - last > DEDUPE_WINDOW_MS;
    const method: 'GET' | 'POST' = shouldCount ? 'POST' : 'GET';

    fetch('/api/visits', { method, cache: 'no-store' })
      .then((r) => r.json())
      .then((d: VisitData) => {
        setData(d);
        if (shouldCount) {
          window.localStorage.setItem('visits:last', String(now));
        }
      })
      .catch(() => {});
  }, []);

  return (
    <div className={className ?? 'text-sm text-muted-foreground flex items-center gap-2'}>
      <EyeIcon className="w-4 h-4 shrink-0" weight="duotone" />
      <div className="flex items-center gap-1">
        <span>Total Visits:</span>
        {data ? (
          <AnimatedCount value={data.total} className="font-mono tabular-nums text-foreground" />
        ) : (
          <span className="font-mono tabular-nums text-foreground">…</span>
        )}
        <span className="px-1">/</span>
        <span>Today Visits:</span>
        {data ? (
          <AnimatedCount value={data.today} className="font-mono tabular-nums text-foreground" />
        ) : (
          <span className="font-mono tabular-nums text-foreground">…</span>
        )}
      </div>
    </div>
  );
}
