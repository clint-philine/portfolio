"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/lib/data";
import { getIcon } from "@/lib/icon-map";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

export function ServicesPreview() {
  return (
    <section className="section">
      <div className="container-padded">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <SectionHeading
            eyebrow="Services"
            title="What I can draft for you."
            description="Client-ready drafting services spanning documentation, redrawing, and visualization."
            className="max-w-xl"
          />
          <Button asChild variant="outline" className="shrink-0">
            <Link href="/services">
              View all services <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {services.slice(0, 4).map((service, i) => {
            const Icon = getIcon(service.icon);
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group rounded-2xl border border-border bg-surface p-7 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift dark:bg-dark-surface dark:border-dark-border"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <h3 className="mt-6 font-heading text-lg font-semibold dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm text-secondary dark:text-slate-400">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
