"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote, Star } from "lucide-react";
import { testimonials } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";

export function Testimonials() {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const next = useCallback(() => {
    setDirection(1);
    setIndex((i) => (i + 1) % testimonials.length);
  }, []);

  const prev = () => {
    setDirection(-1);
    setIndex((i) => (i - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const t = setInterval(next, 6000);
    return () => clearInterval(t);
  }, [next]);

  const current = testimonials[index];

  return (
    <section className="section">
      <div className="container-padded">
        <SectionHeading
          eyebrow="Testimonials"
          title="What clients & mentors say."
          align="center"
          className="max-w-2xl"
        />

        <div className="relative mt-14 mx-auto max-w-3xl">
          <div className="relative overflow-hidden rounded-3xl border border-border bg-surface p-10 md:p-14 text-center shadow-card dark:bg-dark-surface dark:border-dark-border">
            <Quote className="mx-auto h-8 w-8 text-accent/40" />
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current.id}
                custom={direction}
                initial={{ opacity: 0, x: direction * 40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 40 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p className="mt-6 text-lg md:text-xl font-medium leading-relaxed text-primary dark:text-white text-balance">
                  "{current.quote}"
                </p>
                <div className="mt-6 flex justify-center gap-1">
                  {Array.from({ length: current.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                  ))}
                </div>
                <div className="mt-6 flex items-center justify-center gap-3">
                  <div className="relative h-11 w-11 overflow-hidden rounded-full">
                    <Image src={current.avatar} alt={current.name} fill className="object-cover" sizes="44px" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm font-semibold dark:text-white">{current.name}</p>
                    <p className="text-xs text-secondary dark:text-slate-400">{current.role}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={prev}
              aria-label="Previous testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:border-accent hover:text-accent dark:border-dark-border"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((t, i) => (
                <button
                  key={t.id}
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => {
                    setDirection(i > index ? 1 : -1);
                    setIndex(i);
                  }}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-6 bg-accent" : "w-2 bg-border dark:bg-dark-border"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={next}
              aria-label="Next testimonial"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary transition-colors hover:border-accent hover:text-accent dark:border-dark-border"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
