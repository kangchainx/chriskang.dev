"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/about", label: "About" },
  { href: "/projects", label: "Project" },
  { href: "/blog", label: "Blogs" },
  { href: "/friends", label: "Friends" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <header className="py-6">
      <div className="container flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-semibold tracking-wide text-muted-foreground hover:text-foreground"
        >
          chriskang.dev
        </Link>
        <nav className="flex items-center gap-2">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "rounded-full px-4 py-2 text-sm font-medium transition",
                  "border border-transparent hover:border-border hover:bg-muted/40",
                  active
                    ? "bg-primary text-primary-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground",
                )}
              >
                {link.label}
              </Link>
            );
          })}
          <ThemeToggle />
        </nav>
      </div>
    </header>
  );
}
