"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const projectTypes = [
  "Residential Floor Plan",
  "Commercial Drafting",
  "CAD Redrawing",
  "PDF to AutoCAD",
  "3D SketchUp Model",
  "Construction Documentation",
  "Other",
];

const budgets = [
  "Under $200",
  "$200 – $500",
  "$500 – $1,000",
  "$1,000+",
  "Not sure yet",
];

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [projectType, setProjectType] = useState("");
  const [budget, setBudget] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    // Placeholder submit handler — wire up to an API route, Formspree, or email service.
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 900);
  }

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex flex-col items-center justify-center rounded-3xl border border-border bg-surface p-14 text-center shadow-card dark:bg-dark-surface dark:border-dark-border"
      >
        <CheckCircle2 className="h-12 w-12 text-accent" />
        <h3 className="mt-5 font-heading text-2xl font-semibold dark:text-white">
          Message sent
        </h3>
        <p className="mt-2 max-w-sm text-sm text-secondary dark:text-slate-400">
          Thanks for reaching out — I'll get back to you within 1–2 business days.
        </p>
        <Button variant="outline" className="mt-6" onClick={() => setSubmitted(false)}>
          Send another message
        </Button>
      </motion.div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-border bg-surface p-8 md:p-10 shadow-card dark:bg-dark-surface dark:border-dark-border"
    >
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" placeholder="Your full name" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" placeholder="you@email.com" required />
        </div>
        <div className="space-y-2">
          <Label htmlFor="projectType">Project Type</Label>
          <Select value={projectType} onValueChange={setProjectType}>
            <SelectTrigger id="projectType">
              <SelectValue placeholder="Select a project type" />
            </SelectTrigger>
            <SelectContent>
              {projectTypes.map((type) => (
                <SelectItem key={type} value={type}>{type}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="space-y-2">
          <Label htmlFor="budget">Budget</Label>
          <Select value={budget} onValueChange={setBudget}>
            <SelectTrigger id="budget">
              <SelectValue placeholder="Select a budget range" />
            </SelectTrigger>
            <SelectContent>
              {budgets.map((b) => (
                <SelectItem key={b} value={b}>{b}</SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <Label htmlFor="message">Message</Label>
        <Textarea
          id="message"
          name="message"
          placeholder="Tell me a bit about your project — scope, references, timeline..."
          required
        />
      </div>

      <Button type="submit" variant="accent" size="lg" className="mt-8 w-full sm:w-auto" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
        {!loading && <Send className="h-4 w-4" />}
      </Button>
    </form>
  );
}
