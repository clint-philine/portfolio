"use client";

import { motion } from "framer-motion";
import { MessageSquare, PenTool, Repeat, PackageCheck } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    title: "Brief & Scope",
    description: "We discuss your project, references, required deliverables, and timeline.",
  },
  {
    icon: PenTool,
    title: "Drafting",
    description: "I produce the drawings in CAD, following standards and your specifications.",
  },
  {
    icon: Repeat,
    title: "Review & Revise",
    description: "You review the draft, I incorporate feedback until the drawings are right.",
  },
  {
    icon: PackageCheck,
    title: "Final Delivery",
    description: "Final files are delivered in your required formats, organized and labeled.",
  },
];

export function ProcessSteps() {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {steps.map((step, i) => (
        <motion.div
          key={step.title}
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="relative rounded-2xl border border-border bg-surface p-6 shadow-soft dark:bg-dark-surface dark:border-dark-border"
        >
          <span className="font-heading text-3xl font-semibold text-accent/30">
            {String(i + 1).padStart(2, "0")}
          </span>
          <div className="mt-3 flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground">
            <step.icon className="h-5 w-5" strokeWidth={1.75} />
          </div>
          <h3 className="mt-4 font-heading text-base font-semibold dark:text-white">{step.title}</h3>
          <p className="mt-2 text-sm text-secondary dark:text-slate-400">{step.description}</p>
        </motion.div>
      ))}
    </div>
  );
}
