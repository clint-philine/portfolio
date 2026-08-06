"use client";

import { useState } from "react";
import type { Project } from "@/types";
import { projects, projectCategories } from "@/lib/data";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Dialog } from "@/components/ui/dialog";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { ProjectModal } from "@/components/portfolio/ProjectModal";

export function PortfolioGrid({ limit }: { limit?: number }) {
  const [category, setCategory] = useState<string>("All");
  const [selected, setSelected] = useState<Project | null>(null);

  const filtered = (
    category === "All" ? projects : projects.filter((p) => p.category === category)
  ).slice(0, limit ?? projects.length);

  return (
    <Dialog
      open={!!selected}
      onOpenChange={(open) => {
        if (!open) setSelected(null);
      }}
    >
      {!limit && (
        <Tabs value={category} onValueChange={setCategory} className="mb-12">
          <TabsList>
            {projectCategories.map((cat) => (
              <TabsTrigger key={cat} value={cat}>
                {cat}
              </TabsTrigger>
            ))}
          </TabsList>
        </Tabs>
      )}

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {filtered.map((project, i) => (
          <div key={project.id} onClick={() => setSelected(project)}>
            <ProjectCard project={project} index={i} />
          </div>
        ))}
      </div>

      {selected && <ProjectModal project={selected} />}
    </Dialog>
  );
}
