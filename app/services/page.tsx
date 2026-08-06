import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ProcessSteps } from "@/components/services/ProcessSteps";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Services",
  description:
    "2D architectural drafting, residential floor plans, CAD redrawing, 3D SketchUp modeling, and construction documentation services.",
};

export default function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Drafting services built around accuracy."
        description="From concept sketches to construction-ready sets — here's how I can support your project."
      />

      <section className="section pt-0">
        <div className="container-padded">
          <ServicesGrid />
        </div>
      </section>

      <section className="section bg-surface dark:bg-dark-surface">
        <div className="container-padded">
          <SectionHeading
            eyebrow="Process"
            title="How a project runs, start to finish."
            align="center"
            className="max-w-xl mb-14"
          />
          <ProcessSteps />
        </div>
      </section>

      <section className="section">
        <div className="container-padded text-center">
          <h2 className="text-display-md font-heading font-semibold text-primary dark:text-white text-balance max-w-2xl mx-auto">
            Have a project in mind?
          </h2>
          <p className="mt-4 text-secondary dark:text-slate-400 max-w-lg mx-auto">
            Send over your references or requirements and I'll get back to you with a scope and timeline.
          </p>
          <Button asChild size="lg" variant="accent" className="mt-8">
            <Link href="/contact">
              Request a Quote <ArrowUpRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
