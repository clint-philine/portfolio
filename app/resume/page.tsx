import type { Metadata } from "next";
import { Download } from "lucide-react";
import { PageHeader } from "@/components/shared/PageHeader";
import { SectionHeading } from "@/components/shared/SectionHeading";
import { ResumeSummary } from "@/components/resume/ResumeSummary";
import { Timeline } from "@/components/resume/Timeline";
import { Certificates } from "@/components/resume/Certificates";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Resume",
  description: "Experience timeline, certifications, and downloadable resume.",
};

export default function ResumePage() {
  return (
    <>
      <PageHeader
        eyebrow="Resume"
        title="Experience, training & credentials."
        description="A professional summary of freelance work, academic projects, workshops, and certifications."
      />

      <section className="section pt-0">
        <div className="container-padded">
          <div className="flex justify-end mb-8">
            {/* Replace href with the actual hosted resume PDF */}
            <Button asChild variant="accent">
              <a href="/resume.pdf" download>
                Download Resume PDF <Download className="h-4 w-4" />
              </a>
            </Button>
          </div>
          <ResumeSummary />
        </div>
      </section>

      <section className="section bg-surface dark:bg-dark-surface">
        <div className="container-padded">
          <SectionHeading
            eyebrow="Experience"
            title="A timeline of freelance, academic & training work."
            className="mb-16"
          />
          <Timeline />
        </div>
      </section>

      <section className="section">
        <div className="container-padded">
          <SectionHeading
            eyebrow="Certificates"
            title="Certifications & training completed."
            className="mb-14"
          />
          <Certificates />
        </div>
      </section>
    </>
  );
}
