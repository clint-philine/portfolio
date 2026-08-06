import { Hero } from "@/components/home/Hero";
import { StatsStrip } from "@/components/home/StatsStrip";
import { AboutPreview } from "@/components/home/AboutPreview";
import { SkillsSection } from "@/components/home/SkillsSection";
import { ServicesPreview } from "@/components/home/ServicesPreview";
import { FeaturedProjects } from "@/components/home/FeaturedProjects";
import { Testimonials } from "@/components/home/Testimonials";
import { CTASection } from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <StatsStrip />
      <AboutPreview />
      <SkillsSection />
      <ServicesPreview />
      <FeaturedProjects />
      <Testimonials />
      <CTASection />
    </>
  );
}
