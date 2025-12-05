"use client";

import { motion } from "framer-motion";
import {
  Butterfly,
  DiscordLogo,
  DotsThree,
  Envelope,
  GameController,
  GithubLogo,
  LinkSimple,
  Sun,
  TwitterLogo,
} from "phosphor-react";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const heroIcons = [
  Sun,
  TwitterLogo,
  Butterfly,
  LinkSimple,
  DiscordLogo,
  GameController,
  DotsThree,
  Envelope,
  GithubLogo,
];

export default function Home() {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.6fr_1fr] xl:grid-cols-[1.4fr_1fr]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <Card className="h-full overflow-hidden border-border/70 bg-card/80 shadow-2xl shadow-black/10 backdrop-blur">
          <CardHeader className="space-y-4 pb-4">
            <CardTitle className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Hi, I am Chris Kang
            </CardTitle>
            <p className="text-base leading-relaxed text-muted-foreground sm:text-lg">
              Full-stack Engineer (front-end focused) with 5+ years of
              enterprise experience. Skilled in Vue, React, and TypeScript,
              with strong expertise in building scalable, high-performance web
              applications. Experienced in Java/Spring and Node.js backend
              development, distributed systems, and CI/CD automation.
            </p>
          </CardHeader>
          <CardContent className="pb-6">
            <div className="rounded-xl border border-border/80 bg-white/80 px-4 py-3 shadow-sm backdrop-blur dark:bg-slate-900">
              <div className="flex flex-wrap items-center justify-between gap-4">
                {heroIcons.map((Icon, index) => (
                  <div
                    key={Icon.displayName ?? index}
                    className="flex h-12 w-12 items-center justify-center rounded-lg border border-border/60 bg-background text-foreground shadow-sm"
                  >
                    <Icon size={22} weight="bold" />
                  </div>
                ))}
              </div>
            </div>
          </CardContent>
        </Card>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
      >
        <div className="flex h-full min-h-[320px] items-center justify-center rounded-2xl border border-dashed border-border/80 bg-card/70 text-muted-foreground shadow-lg shadow-black/5">
          <span className="text-sm font-medium">技术栈展示动画</span>
        </div>
      </motion.div>
    </section>
  );
}
