"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X, Compass } from "lucide-react";
import { nav, siteConfig } from "@/lib/data";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/shared/ThemeToggle";

export function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-500 ease-architectural",
        scrolled
          ? "glass shadow-soft py-3"
          : "bg-transparent py-6"
      )}
    >
      <nav className="container-padded flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-heading text-lg font-semibold tracking-tight dark:text-white">
          <Compass className="h-5 w-5 text-accent" strokeWidth={2.25} />
          {siteConfig.name}
        </Link>

        <div className="hidden lg:flex items-center gap-1">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "relative px-4 py-2 text-sm font-medium text-secondary transition-colors hover:text-primary dark:text-slate-300 dark:hover:text-white",
                pathname === item.href && "text-primary dark:text-white"
              )}
            >
              {item.label}
              {pathname === item.href && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute inset-x-4 -bottom-0.5 h-0.5 rounded-full bg-accent"
                />
              )}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap-3">
          <ThemeToggle />
          <Button asChild size="sm" variant="accent">
            <Link href="/contact">Hire Me</Link>
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <ThemeToggle />
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="rounded-full border border-border p-2.5 dark:border-dark-border"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="lg:hidden overflow-hidden glass mt-3 mx-4 rounded-2xl"
          >
            <div className="flex flex-col p-4">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "rounded-xl px-4 py-3 text-sm font-medium text-secondary hover:bg-primary/5 dark:text-slate-300",
                    pathname === item.href && "bg-primary/5 text-primary dark:text-white"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <Button asChild size="sm" variant="accent" className="mt-3">
                <Link href="/contact">Hire Me</Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
