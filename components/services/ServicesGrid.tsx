"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { services } from "@/lib/data";
import { getIcon } from "@/lib/icon-map";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export function ServicesGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-2">
      {services.map((service, i) => {
        const Icon = getIcon(service.icon);
        return (
          <motion.div
            key={service.id}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: (i % 4) * 0.08 }}
          >
            <Card className="h-full transition-all duration-300 hover:-translate-y-1 hover:shadow-lift">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground dark:bg-accent dark:text-accent-foreground">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <CardTitle className="mt-4">{service.title}</CardTitle>
                <CardDescription>{service.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {service.deliverables.map((d) => (
                    <li key={d} className="flex items-center gap-2 text-sm text-secondary dark:text-slate-400">
                      <Check className="h-4 w-4 text-accent shrink-0" />
                      {d}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        );
      })}
    </div>
  );
}
