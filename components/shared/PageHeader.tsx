"use client";

import { motion } from "framer-motion";
import { FloatingShapes } from "@/components/shared/FloatingShapes";

interface PageHeaderProps {
  eyebrow: string;
  title: string;
  description?: string;
}

export function PageHeader({ eyebrow, title, description }: PageHeaderProps) {
  return (
    <section className="relative overflow-hidden pt-40 pb-20 md:pt-48 md:pb-28">
      <div className="absolute inset-0 blueprint-grid opacity-50" />
      <FloatingShapes />
      <div className="container-padded relative z-10">
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="eyebrow mb-5"
        >
          <span className="h-px w-6 bg-accent" />
          {eyebrow}
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-display-lg font-heading font-semibold text-primary dark:text-white text-balance max-w-3xl"
        >
          {title}
        </motion.h1>
        {description && (
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
            className="mt-6 max-w-xl text-base md:text-lg text-secondary dark:text-slate-400"
          >
            {description}
          </motion.p>
        )}
      </div>
    </section>
  );
}
