import { Mail, MapPin, Phone } from "lucide-react";
import { siteConfig, softwareSkills, technicalSkills } from "@/lib/data";
import { Badge } from "@/components/ui/badge";

export function ResumeSummary() {
  return (
    <div className="rounded-3xl border border-border bg-surface p-8 md:p-10 shadow-card dark:bg-dark-surface dark:border-dark-border">
      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
        <div>
          <h2 className="font-heading text-2xl md:text-3xl font-semibold dark:text-white">
            {siteConfig.name}
          </h2>
          <p className="mt-1 text-accent font-medium">{siteConfig.role}</p>
          <p className="mt-4 max-w-xl text-sm text-secondary dark:text-slate-400 leading-relaxed">
            Detail-oriented Drafting Technology student with hands-on freelance experience
            producing architectural drawings, technical documentation, and 3D visualizations.
            Comfortable working directly with clients to translate concepts into accurate,
            construction-ready plans.
          </p>
        </div>
        <div className="space-y-2 text-sm text-secondary dark:text-slate-400 shrink-0">
          <p className="flex items-center gap-2">
            <Mail className="h-4 w-4 text-accent" /> {siteConfig.email}
          </p>
          <p className="flex items-center gap-2">
            <MapPin className="h-4 w-4 text-accent" /> {siteConfig.location}
          </p>
          <p className="flex items-center gap-2">
            <Phone className="h-4 w-4 text-accent" /> +63 900 000 0000
          </p>
        </div>
      </div>

      <div className="mt-8 grid gap-8 sm:grid-cols-2">
        <div>
          <p className="eyebrow mb-3">Core Software</p>
          <div className="flex flex-wrap gap-2">
            {softwareSkills.map((s) => (
              <Badge key={s.name} variant="secondary">{s.name}</Badge>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow mb-3">Technical Skills</p>
          <div className="flex flex-wrap gap-2">
            {technicalSkills.slice(0, 6).map((s) => (
              <Badge key={s} variant="outline">{s}</Badge>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
