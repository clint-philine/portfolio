"use client";

import Image from "next/image";
import { useState } from "react";
import type { Project } from "@/types";
import { DialogContent, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";

export function ProjectModal({ project }: { project: Project }) {
  const [active, setActive] = useState(0);

  return (
    <DialogContent>
      <div className="relative aspect-video w-full overflow-hidden rounded-t-2xl">
        <Image
          src={project.gallery[active]}
          alt={`${project.title} view ${active + 1}`}
          fill
          className="object-cover"
          sizes="(max-width: 768px) 100vw, 768px"
        />
      </div>

      {project.gallery.length > 1 && (
        <div className="flex gap-2 px-6 pt-4">
          {project.gallery.map((img, i) => (
            <button
              key={img}
              onClick={() => setActive(i)}
              className={`relative h-14 w-20 overflow-hidden rounded-lg border-2 transition-all ${
                active === i ? "border-accent" : "border-transparent opacity-70 hover:opacity-100"
              }`}
              aria-label={`View image ${i + 1}`}
            >
              <Image src={img} alt="" fill className="object-cover" sizes="80px" />
            </button>
          ))}
        </div>
      )}

      <div className="p-6 pt-4">
        <div className="flex flex-wrap items-center gap-2">
          <Badge variant="accent">{project.category}</Badge>
          <Badge variant="outline">{project.year}</Badge>
          <Badge variant="outline">{project.role}</Badge>
        </div>

        <DialogTitle className="mt-4">{project.title}</DialogTitle>
        <DialogDescription className="mt-3 text-base leading-relaxed">
          {project.description}
        </DialogDescription>

        <div className="mt-6 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="eyebrow mb-3">Software Used</p>
            <div className="flex flex-wrap gap-2">
              {project.software.map((s) => (
                <Badge key={s} variant="secondary">{s}</Badge>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow mb-3">Tags</p>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((t) => (
                <Badge key={t} variant="outline">{t}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>
    </DialogContent>
  );
}
