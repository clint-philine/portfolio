"use client";

import { motion } from "framer-motion";
import { softwareSkills, technicalSkills, softSkills } from "@/lib/data";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function SkillsSection() {
  return (
    <section className="section bg-surface dark:bg-dark-surface">
      <div className="container-padded">
        <SectionHeading
          eyebrow="Skills"
          title="Tools and craft behind every drawing."
          description="A working toolkit built through coursework, self-study, and paid client projects."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {softwareSkills.map((skill, i) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
            >
              <Card className="p-6 hover:shadow-card transition-shadow duration-300">
                <div className="flex items-center justify-between">
                  <span className="font-heading text-lg font-semibold dark:text-white">{skill.name}</span>
                  <span className="text-sm text-accent font-semibold">{skill.level}%</span>
                </div>
                <div className="mt-4 h-2 w-full rounded-full bg-muted dark:bg-white/10 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: 0.2 + i * 0.05, ease: [0.16, 1, 0.3, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-accent to-amber-400"
                  />
                </div>
              </Card>
            </motion.div>
          ))}
        </div>

        <div className="mt-16 grid gap-10 md:grid-cols-2">
          <div>
            <p className="eyebrow mb-5">Technical Skills</p>
            <div className="flex flex-wrap gap-2.5">
              {technicalSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  <Badge variant="outline" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
          <div>
            <p className="eyebrow mb-5">Soft Skills</p>
            <div className="flex flex-wrap gap-2.5">
              {softSkills.map((skill, i) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.35, delay: i * 0.04 }}
                >
                  <Badge variant="accent" className="px-4 py-2 text-sm">
                    {skill}
                  </Badge>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
