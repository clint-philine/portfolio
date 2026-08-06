import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { PortfolioGrid } from "@/components/portfolio/PortfolioGrid";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "A collection of residential, commercial, technical, and 3D drafting projects.",
};

export default function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio"
        title="Selected drafting & visualization work."
        description="Freelance and academic projects spanning residential design, commercial fit-outs, technical documentation, and 3D visualization."
      />
      <section className="section pt-0">
        <div className="container-padded">
          <PortfolioGrid />
        </div>
      </section>
    </>
  );
}
