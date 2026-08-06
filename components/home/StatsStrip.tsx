"use client";

import { motion } from "framer-motion";
import { stats } from "@/lib/data";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

export function StatsStrip() {
  return (
    <section className="border-y border-border bg-primary text-primary-foreground dark:bg-dark-surface dark:border-dark-border">
      <div className="container-padded grid grid-cols-2 gap-8 py-14 md:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center md:text-left"
          >
            <p className="font-heading text-4xl md:text-5xl font-semibold text-accent">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} />
            </p>
            <p className="mt-2 text-xs md:text-sm uppercase tracking-widest text-slate-300">
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
