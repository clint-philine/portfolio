# Drafting Portfolio — Next.js + TypeScript + Tailwind

A premium, architecture-firm-inspired portfolio for a Drafting Technology
student / freelance CAD designer. Built with Next.js App Router, TypeScript,
Tailwind CSS, shadcn/ui-style components, Framer Motion, and Lucide icons.

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

To build for production:

```bash
npm run build
npm run start
```

## Project Structure

```
app/                    Routes (App Router) — one folder per page
  page.tsx              Home
  about/page.tsx         About
  portfolio/page.tsx     Portfolio (filterable grid + modal)
  services/page.tsx      Services
  resume/page.tsx        Resume (timeline + certificates + PDF download)
  contact/page.tsx       Contact (form)
  layout.tsx             Root layout, fonts, SEO metadata
  globals.css            Design tokens & base styles
  sitemap.ts / robots.ts SEO
components/
  ui/                    shadcn-style primitives (Button, Card, Dialog, etc.)
  layout/                Navbar, Footer
  home/                  Hero, stats, skills, services preview, testimonials...
  portfolio/             ProjectCard, ProjectModal, PortfolioGrid
  services/               ServicesGrid, ProcessSteps
  resume/                Timeline, Certificates, ResumeSummary
  contact/                ContactForm, ContactInfo
  shared/                 SectionHeading, PageHeader, AnimatedCounter,
                          FloatingShapes, ThemeProvider/Toggle
lib/
  data.ts                 ALL placeholder content lives here
  icon-map.tsx            Maps service icon names to Lucide components
  utils.ts                 cn() class merge helper
types/
  index.ts                 Shared TypeScript interfaces
```

## Customizing Content

Almost everything is data-driven from **`lib/data.ts`**. Edit that single
file to replace:

- `siteConfig` — name, role, tagline, email, location, social links
- `stats` — animated counter numbers on the home page
- `softwareSkills` / `technicalSkills` / `softSkills`
- `services` — service cards (icon name must exist in `lib/icon-map.tsx`)
- `projects` — portfolio items (cover image, gallery, category, tags, etc.)
- `timeline` — experience/education/workshop entries
- `certificates` — certification cards
- `testimonials` — client/mentor quotes

Images currently point to Unsplash placeholder URLs — swap the `cover`,
`gallery`, `image`, and `avatar` fields with your own image paths (e.g.
`/images/projects/your-project.jpg` after adding files to `public/images/`).

## Resume PDF

Add your real resume file at `public/resume.pdf`. The "Download Resume"
buttons already link to `/resume.pdf`.

## Dark Mode

Dark mode is powered by `next-themes` and toggled via the sun/moon icon in
the navbar. Colors for dark mode are defined in `tailwind.config.ts` under
the `dark` color group and applied with `dark:` utility classes throughout.

## Design Tokens

Defined in `tailwind.config.ts`:

- **Colors**: background `#FAFAFA`, surface `#FFFFFF`, primary `#0F172A`,
  secondary `#475569`, accent `#F59E0B`, border `#E2E8F0`
- **Fonts**: Poppins (headings) via `font-heading`, Inter (body) via
  `font-body` — loaded through `next/font/google` in `app/layout.tsx`
- **Signature visual**: a "blueprint grid" background utility
  (`.blueprint-grid`) and drafting-instrument-shaped floating SVGs
  (`components/shared/FloatingShapes.tsx`) tie the ambient motion back to
  the drafting/CAD subject matter instead of generic shapes.

## Notes on Production Readiness

- Contact form currently simulates submission client-side. Wire
  `components/contact/ContactForm.tsx`'s `handleSubmit` to a real API route,
  email service (e.g. Resend), or form backend (e.g. Formspree) before
  going live.
- Update `metadataBase` and sitemap URLs in `app/layout.tsx` /
  `app/sitemap.ts` / `app/robots.ts` to your real domain.
- Run `npm run build` and check the Lighthouse report once real,
  optimized images replace the Unsplash placeholders — remote Unsplash
  images are fine for development but self-hosted, compressed images will
  score higher on performance.
- This scaffold has not been run through `npm install` / `npm run build`
  in the environment that generated it — please run a local build and
  address any dependency-version issues before deploying.
