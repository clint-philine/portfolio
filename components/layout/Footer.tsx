import Link from "next/link";
import { Compass, Facebook, Linkedin, Github, Mail, MapPin } from "lucide-react";
import { nav, siteConfig } from "@/lib/data";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface dark:bg-dark-surface dark:border-dark-border">
      <div className="container-padded py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <Link href="/" className="flex items-center gap-2 font-heading text-xl font-semibold tracking-tight dark:text-white">
            <Compass className="h-5 w-5 text-accent" />
            {siteConfig.name}
          </Link>
          <p className="mt-4 max-w-sm text-sm text-secondary dark:text-slate-400">
            {siteConfig.role} — turning ideas into accurate, construction-ready
            drawings through disciplined drafting and clear visual communication.
          </p>
          <div className="mt-6 flex items-center gap-3">
            <SocialLink href={siteConfig.social.facebook} label="Facebook">
              <Facebook className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={siteConfig.social.linkedin} label="LinkedIn">
              <Linkedin className="h-4 w-4" />
            </SocialLink>
            <SocialLink href={siteConfig.social.github} label="GitHub">
              <Github className="h-4 w-4" />
            </SocialLink>
          </div>
        </div>

        <div>
          <p className="eyebrow mb-4">Navigate</p>
          <ul className="space-y-3">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="text-sm text-secondary transition-colors hover:text-accent dark:text-slate-400"
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="eyebrow mb-4">Get in touch</p>
          <ul className="space-y-3 text-sm text-secondary dark:text-slate-400">
            <li className="flex items-center gap-2">
              <Mail className="h-4 w-4 text-accent" /> {siteConfig.email}
            </li>
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4 text-accent" /> {siteConfig.location}
            </li>
          </ul>
        </div>
      </div>

      <div className="line-divider" />

      <div className="container-padded py-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-secondary dark:text-slate-500">
        <p>© {new Date().getFullYear()} {siteConfig.name}. All rights reserved.</p>
        <p>Drafting Technology Student · Freelance CAD Designer</p>
      </div>
    </footer>
  );
}

function SocialLink({
  href,
  label,
  children,
}: {
  href: string;
  label: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-secondary transition-all hover:border-accent hover:bg-accent hover:text-accent-foreground dark:border-dark-border dark:text-slate-400"
    >
      {children}
    </a>
  );
}
