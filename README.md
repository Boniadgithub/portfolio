# Bonsa Adugna — Portfolio

A premium, dark-themed portfolio built with Next.js 14 (App Router), TypeScript, Tailwind CSS, and Framer Motion.

## Getting started (in VS Code)

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev

# 3. Open http://localhost:3000
```

Requires Node.js 18.18+ (Node 20 LTS recommended).

## Project structure

```
app/
  layout.tsx            Root layout — fonts, nav, footer, cursor, smooth scroll
  page.tsx               Home page (assembles all sections)
  globals.css             Design tokens, glass/gradient/grain utilities
  loading.tsx             Global route loading animation
  not-found.tsx           404 page
  robots.ts / sitemap.ts  SEO
  api/contact/route.ts     Contact form endpoint (stub — wire up an email provider)
  projects/[slug]/page.tsx Case study template (statically generated per project)

components/
  layout/    Navbar, Footer, CustomCursor, SmoothScroll
  sections/  Hero, About, Projects, ProjectCard, Process, Skills,
             Experience, Testimonials, Contact, CaseStudySection
  ui/        MagneticButton, RevealText, SectionHeading, GlassCard

lib/
  data.ts    All content: projects/case studies, skills, experience,
             testimonials, awards, process steps, contact info
  utils.ts   cn() class-merging helper
```

## Editing content

Everything text-based (projects, skills, experience, testimonials, awards,
contact links) lives in **`lib/data.ts`**. Edit that file to update the
entire site — no need to touch components for content changes.

To add a new case study, add a new object to the `projects` array in
`lib/data.ts` — a new page at `/projects/your-slug` is generated
automatically, along with a card on the homepage.

## Images

The site renders fully without any images (case study covers use an
animated gradient + grid placeholder keyed to each project's accent color).
To use real screenshots, drop images into `public/images/projects/` matching
the `cover` paths referenced in `lib/data.ts`, then swap the placeholder
`<div>` blocks in `ProjectCard.tsx` and `app/projects/[slug]/page.tsx` for
`next/image`.

## Contact form

`app/api/contact/route.ts` is a working stub that validates input and logs
the payload. Connect it to an email provider (Resend, SendGrid, Postmark)
before going live — the TODO comment marks exactly where.

## Design tokens

Colors, fonts, spacing, and motion tokens are defined in
`tailwind.config.ts` and `app/globals.css`:

- Primary background `#0B0B0F`, secondary `#111827`
- Accent blue `#3B82F6`, accent violet `#8B5CF6`, success `#22C55E`
- Display font: Space Grotesk · Body: Inter · Mono/labels: JetBrains Mono

## Deployment

Deploys cleanly to Vercel:

```bash
npm run build
```

Set `metadataBase` in `app/layout.tsx` and the sitemap/robots URLs to your
real production domain before launch.
