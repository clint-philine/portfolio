"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CTASection() {
  return (
    <section className="section">
      <div className="container-padded">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative overflow-hidden rounded-3xl bg-primary px-8 py-20 text-center dark:bg-dark-surface"
        >
          <div className="absolute inset-0 blueprint-grid opacity-10" />
          <div className="relative z-10">
            <p className="eyebrow justify-center mb-5">Let's build something</p>
            <h2 className="text-display-md font-heading font-semibold text-white text-balance max-w-3xl mx-auto">
              Have a set of drawings that need precision?
            </h2>
            <p className="mt-5 text-slate-300 max-w-xl mx-auto">
              Whether it's a full construction set or a quick CAD redraw, I'll turn your
              concept into accurate, professional documentation.
            </p>
            <div className="mt-9 flex flex-wrap justify-center gap-4">
              <Button asChild size="lg" variant="accent">
                <Link href="/contact">
                  Start a Project <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-white/30 text-white hover:bg-white hover:text-primary">
                <Link href="/portfolio">See My Work</Link>
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
