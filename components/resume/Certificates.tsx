"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Award } from "lucide-react";
import { certificates } from "@/lib/data";

export function Certificates() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {certificates.map((cert, i) => (
        <motion.div
          key={cert.id}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.08 }}
          className="group overflow-hidden rounded-2xl border border-border bg-surface shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lift dark:bg-dark-surface dark:border-dark-border"
        >
          <div className="relative aspect-[4/3] overflow-hidden">
            <Image
              src={cert.image}
              alt={cert.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 25vw"
            />
            <div className="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-accent text-accent-foreground shadow-soft">
              <Award className="h-4 w-4" />
            </div>
          </div>
          <div className="p-4">
            <h3 className="font-heading text-sm font-semibold leading-snug dark:text-white">
              {cert.title}
            </h3>
            <p className="mt-1 text-xs text-secondary dark:text-slate-400">
              {cert.issuer} &middot; {cert.date}
            </p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
