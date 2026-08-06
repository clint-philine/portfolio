import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { AboutPreview } from "@/components/home/AboutPreview";
import { SkillsSection } from "@/components/home/SkillsSection";
import { StatsStrip } from "@/components/home/StatsStrip";

export const metadata: Metadata = {
  title: "About",
  description:
    "Drafting Technology student and freelance CAD designer specializing in architectural drafting, technical drawings, and 3D modeling.",
};

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About Me"
        title="Turning ideas into buildable drawings."
        description="A closer look at my background, focus areas, and the toolkit I bring to every drafting project."
      />
      <AboutPreview />
      <StatsStrip />
      <SkillsSection />
    </>
  );
}
