"use client";

import { useEffect, useState } from "react";
import { Moon, Sun } from "phosphor-react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-10 w-10" aria-hidden />;
  }

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      type="button"
      variant="ghost"
      size="icon"
      className={cn(
        "relative h-10 w-10 rounded-full border border-border/60 bg-background/60 shadow-sm backdrop-blur transition",
        "hover:border-accent hover:bg-accent/10 hover:text-accent-foreground",
      )}
      onClick={toggleTheme}
      aria-label="Toggle theme"
    >
      <Sun
        size={18}
        weight="bold"
        className={cn(
          "transition-transform duration-300",
          isDark ? "-rotate-90 scale-0" : "rotate-0 scale-100",
        )}
      />
      <Moon
        size={18}
        weight="bold"
        className={cn(
          "absolute transition-transform duration-300",
          isDark ? "rotate-0 scale-100" : "rotate-90 scale-0",
        )}
      />
    </Button>
  );
}
