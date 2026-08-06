"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/types";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.button
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.6, delay: (index % 6) * 0.08, ease: [0.16, 1, 0.3, 1] }}
        className="group relative w-full overflow-hidden rounded-2xl border border-border bg-surface text-left shadow-soft transition-all duration-500 hover:-translate-y-1.5 hover:shadow-lift dark:bg-dark-surface dark:border-dark-border"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 ease-architectural group-hover:scale-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/70 via-primary/0 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
          <div className="absolute right-4 top-4 flex h-10 w-10 translate-y-2 items-center justify-center rounded-full bg-accent text-accent-foreground opacity-0 shadow-soft transition-all duration-400 group-hover:translate-y-0 group-hover:opacity-100">
            <ArrowUpRight className="h-4 w-4" />
          </div>
          <div className="absolute bottom-4 left-4">
            <Badge variant="secondary" className="bg-white/90 text-primary">
              {project.category}
            </Badge>
          </div>
        </div>
        <div className="p-5">
          <h3 className="font-heading text-lg font-semibold dark:text-white">{project.title}</h3>
          <p className="mt-1 text-xs uppercase tracking-wider text-secondary dark:text-slate-400">
            {project.software.join(" · ")}
          </p>
        </div>
    </motion.button>
  );
}
