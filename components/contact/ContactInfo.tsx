import { Mail, MapPin, Facebook, Linkedin, Github, Clock } from "lucide-react";
import { siteConfig } from "@/lib/data";

const links = [
  { icon: Facebook, label: "Facebook", href: siteConfig.social.facebook },
  { icon: Linkedin, label: "LinkedIn", href: siteConfig.social.linkedin },
  { icon: Github, label: "GitHub", href: siteConfig.social.github },
];

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-border bg-primary p-8 text-primary-foreground shadow-card dark:bg-dark-surface">
        <p className="eyebrow mb-4">Direct Contact</p>
        <a href={`mailto:${siteConfig.email}`} className="flex items-center gap-3 text-sm">
          <Mail className="h-4 w-4 text-accent" /> {siteConfig.email}
        </a>
        <p className="mt-3 flex items-center gap-3 text-sm">
          <MapPin className="h-4 w-4 text-accent" /> {siteConfig.location}
        </p>
        <p className="mt-3 flex items-center gap-3 text-sm text-slate-300">
          <Clock className="h-4 w-4 text-accent" /> Typically replies within 1–2 business days
        </p>

        <div className="mt-8 flex gap-3">
          {links.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              aria-label={link.label}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-accent hover:bg-accent hover:text-accent-foreground"
            >
              <link.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-border bg-surface p-8 shadow-soft dark:bg-dark-surface dark:border-dark-border">
        <p className="eyebrow mb-3">Currently Available For</p>
        <ul className="space-y-2 text-sm text-secondary dark:text-slate-400">
          <li>Freelance drafting projects</li>
          <li>Part-time / project-based collaborations</li>
          <li>OJT & internship opportunities</li>
        </ul>
      </div>
    </div>
  );
}
