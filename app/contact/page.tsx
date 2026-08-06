import type { Metadata } from "next";
import { PageHeader } from "@/components/shared/PageHeader";
import { ContactForm } from "@/components/contact/ContactForm";
import { ContactInfo } from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch to discuss your architectural drafting or CAD project.",
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title="Let's talk about your project."
        description="Share a few details about what you need and I'll follow up with a scope, timeline, and quote."
      />

      <section className="section pt-0">
        <div className="container-padded grid gap-8 lg:grid-cols-[1.4fr_1fr]">
          <ContactForm />
          <ContactInfo />
        </div>
      </section>
    </>
  );
}
