"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Layers3, PencilRuler, Ruler, Building2, Boxes, Home as HomeIcon } from "lucide-react";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Button } from "@/components/ui/button";

const focus = [
  { icon: PencilRuler, label: "Architectural Drafting" },
  { icon: Layers3, label: "CAD Documentation" },
  { icon: Ruler, label: "Technical Drawings" },
  { icon: Building2, label: "Construction Plans" },
  { icon: Boxes, label: "3D Modeling" },
  { icon: HomeIcon, label: "Residential Design" },
];

export function AboutPreview() {
  return (
    <section className="section">
      <div className="container-padded grid gap-16 lg:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative aspect-[4/5] w-full overflow-hidden rounded-3xl shadow-card"
        >
          <Image
            src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=1200&auto=format&fit=crop"
            alt="Drafting table with architectural plans and instruments"
            fill
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-primary/50 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 glass rounded-2xl p-4">
            <p className="text-xs uppercase tracking-widest text-accent">Currently</p>
            <p className="mt-1 text-sm font-medium text-primary dark:text-white">
              3rd Year Drafting Technology Student
            </p>
          </div>
        </motion.div>

        <div>
          <SectionHeading
            eyebrow="About"
            title="Precision on paper, discipline in practice."
            description="I'm a Drafting Technology student building a freelance practice around
              accurate, buildable documentation — bridging classroom fundamentals with
              real client work across residential and small commercial projects."
          />

          <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 gap-4">
            {focus.map((item, i) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="flex flex-col gap-3 rounded-2xl border border-border bg-surface p-4 shadow-soft dark:bg-dark-surface dark:border-dark-border"
              >
                <item.icon className="h-5 w-5 text-accent" strokeWidth={1.75} />
                <span className="text-sm font-medium text-primary dark:text-white">{item.label}</span>
              </motion.div>
            ))}
          </div>

          <Button asChild variant="link" className="mt-8 px-0">
            <Link href="/about">
              More about my background <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
