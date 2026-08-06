"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Hammer, Mic, Wrench } from "lucide-react";
import { timeline } from "@/lib/data";
import type { TimelineEntry } from "@/types";

const typeIcon: Record<TimelineEntry["type"], typeof Briefcase> = {
  Freelance: Briefcase,
  Academic: GraduationCap,
  Workshop: Wrench,
  Seminar: Mic,
  OJT: Hammer,
};

export function Timeline() {
  return (
    <div className="relative">
      <div className="absolute left-5 top-2 bottom-2 w-px bg-border dark:bg-dark-border md:left-1/2" />
      <div className="space-y-10">
        {timeline.map((entry, i) => {
          const Icon = typeIcon[entry.type];
          const isEven = i % 2 === 0;
          return (
            <motion.div
              key={entry.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className={`relative flex flex-col md:flex-row items-start gap-6 md:gap-10 ${
                isEven ? "" : "md:flex-row-reverse"
              }`}
            >
              <div className="absolute left-5 -translate-x-1/2 md:left-1/2 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-soft dark:bg-accent dark:text-accent-foreground z-10">
                <Icon className="h-4 w-4" />
              </div>

              <div className="hidden md:block md:w-1/2" />

              <div className="w-full pl-16 md:w-1/2 md:pl-0">
                <div className="rounded-2xl border border-border bg-surface p-6 shadow-soft dark:bg-dark-surface dark:border-dark-border">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                      {entry.type}
                    </span>
                    <span className="text-xs text-secondary dark:text-slate-400">{entry.period}</span>
                  </div>
                  <h3 className="mt-3 font-heading text-lg font-semibold dark:text-white">
                    {entry.title}
                  </h3>
                  <p className="text-sm font-medium text-accent">{entry.organization}</p>
                  <p className="mt-2 text-sm text-secondary dark:text-slate-400">
                    {entry.description}
                  </p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
