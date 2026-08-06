"use client";

import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export function FeaturedProjects() {
  return (
    <section className="section bg-surface dark:bg-dark-surface">
      <div className="container-padded">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <SectionHeading
            eyebrow="Selected Work"
            title="Recent drafting & visualization work."
            description="A snapshot of freelance and academic projects spanning residential, commercial, and technical documentation."
            className="max-w-xl"
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/portfolio">
              View full portfolio <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <PortfolioGrid limit={6} />
      </div>
    </section>
  );
}
