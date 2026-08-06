"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowDown, ArrowUpRight, Download, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/data";
import { FloatingShapes } from "@/components/shared/FloatingShapes";

export function Hero() {
  return (
    <section className="relative flex min-h-screen flex-col justify-center overflow-hidden pt-28 pb-16">
      <div className="absolute inset-0 blueprint-grid opacity-60" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background dark:via-dark-bg/40 dark:to-dark-bg" />
      <FloatingShapes />

      <div className="container-padded relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="eyebrow mb-6"
        >
          <span className="h-px w-6 bg-accent" />
          Drafting Technology &middot; Freelance CAD
        </motion.p>

        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr] items-end">
          <div>
            <h1 className="text-display-xl font-heading font-semibold text-primary dark:text-white text-balance">
              {siteConfig.role.split(" & ").map((chunk, i) => (
                <motion.span
                  key={chunk}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.9, delay: 0.15 + i * 0.15, ease: [0.16, 1, 0.3, 1] }}
                  className="block"
                >
                  {i === 1 && <span className="text-accent">&amp; </span>}
                  {chunk.replace("& ", "")}
                </motion.span>
              ))}
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.55 }}
              className="mt-8 max-w-xl text-base md:text-lg text-secondary dark:text-slate-400"
            >
              {siteConfig.tagline}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.7 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <Button asChild size="lg" variant="default">
                <Link href="/portfolio">
                  View Projects <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="accent">
                <Link href="/contact">
                  Hire Me <Mail className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href="/resume">
                  Download Resume <Download className="h-4 w-4" />
                </Link>
              </Button>
            </motion.div>
          </div>

          {/* Self-drafting floor-plan outline — the page's signature moment */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="hidden lg:block"
          >
            <svg viewBox="0 0 320 260" className="w-full h-auto text-primary dark:text-white">
              <motion.g
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                {[
                  "M20,20 L300,20 L300,240 L20,240 Z",
                  "M20,140 L180,140",
                  "M180,20 L180,140",
                  "M120,140 L120,240",
                  "M230,140 L230,240",
                ].map((d, i) => (
                  <motion.path
                    key={d}
                    d={d}
                    initial={{ pathLength: 0 }}
                    animate={{ pathLength: 1 }}
                    transition={{ duration: 1.4, delay: 0.6 + i * 0.3, ease: "easeInOut" }}
                  />
                ))}
              </motion.g>
              <motion.g
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.4, duration: 0.6 }}
                fill="none"
                stroke="#F59E0B"
                strokeWidth="1"
              >
                <circle cx="80" cy="190" r="18" strokeDasharray="2 3" />
                <path d="M150,20 A50,50 0 0 1 180,68" strokeDasharray="3 3" />
              </motion.g>
              <motion.text
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2.6 }}
                x="30"
                y="35"
                fontSize="9"
                fill="#475569"
                fontFamily="var(--font-inter)"
              >
                FLOOR PLAN — SCALE 1:100
              </motion.text>
            </svg>
          </motion.div>
        </div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-secondary dark:text-slate-500"
      >
        <ArrowDown className="h-5 w-5" />
      </motion.div>
    </section>
  );
}
