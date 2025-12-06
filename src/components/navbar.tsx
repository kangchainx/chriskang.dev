"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/projects", label: "Project" },
  { href: "/blog", label: "Blogs" },
  { href: "/friends", label: "Friends" },
];

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 8);
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "sticky top-0 z-30 transition-colors duration-300",
        scrolled
          ? "border-b border-border/70 bg-background/80 backdrop-blur-md shadow-sm"
          : "bg-transparent",
      )}
    >
      <div className="container flex items-center justify-center">
        <nav className="my-4 flex items-center gap-2 rounded-full border border-border/70 bg-card/70 px-3 py-2 shadow-sm backdrop-blur">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link key={link.href} href={link.href} className="relative">
                <div
                  className={cn(
                    "relative inline-flex items-center justify-center rounded-full px-4 py-2 text-sm font-medium transition",
                    "text-muted-foreground hover:text-foreground",
                  )}
                >
                  <AnimatePresence>
                    {active ? (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-primary shadow-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{
                          type: "spring",
                          stiffness: 350,
                          damping: 30,
                        }}
                      />
                    ) : null}
                  </AnimatePresence>
                  <span
                    className={cn(
                      "relative z-10",
                      active
                        ? "text-primary-foreground"
                        : "text-muted-foreground",
                    )}
                  >
                    {link.label}
                  </span>
                </div>
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
