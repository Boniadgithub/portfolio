import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { projects } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import CaseStudySection from "@/components/sections/CaseStudySection";


export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) return {};
  return {
    title: `${project.title} — Case Study`,
    description: project.tagline,
    openGraph: { images: [project.cover] },
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) notFound();

  const currentIndex = projects.findIndex((p) => p.slug === params.slug);
  const next = projects[(currentIndex + 1) % projects.length];

  return (
    <article>
      {/* Case study hero */}
      <header className="relative overflow-hidden pt-40">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 30% 0%, ${project.color}44, transparent 55%)`,
          }}
        />
        <div className="container-px relative mx-auto max-w-5xl">
          <Link
            href="/#work"
            data-cursor-hover
            className="inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-white"
          >
            <ArrowLeft size={16} /> Back to work
          </Link>

          <p
            className="eyebrow mt-8"
            style={{ color: project.color }}
          >
            {project.category} · {project.year}
          </p>
          <h1 className="mt-4 font-display text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
            {project.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-secondary">
            {project.tagline}
          </p>

          <div className="mt-10 grid grid-cols-2 gap-6 border-t border-line pt-8 sm:grid-cols-4">
            <Meta label="Role" value={project.role} />
            <Meta label="Year" value={project.year} />
            <Meta label="Tech" value={project.tech.slice(0, 2).join(", ")} />
            <Meta label="Category" value={project.category} />
          </div>
        </div>

        <div className="container-px mx-auto mt-16 max-w-5xl">
          <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-line">
            <Image
              src={project.cover}
              alt={project.title}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 1024px, 100vw"
            />
          </div>
        </div>
      </header>

      <div className="container-px mx-auto max-w-5xl">
        <CaseStudySection eyebrow="Overview" title="What this project set out to do">
          <p>{project.overview}</p>
        </CaseStudySection>

        <CaseStudySection eyebrow="Challenge" title="The core problem">
          <p>{project.challenge}</p>
        </CaseStudySection>

        <CaseStudySection eyebrow="Research" title="Understanding the user & context">
          <ul className="space-y-3">
            {project.research.map((r) => (
              <li key={r} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.color }} />
                <span>{r}</span>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection eyebrow="Wireframes" title="Locking the structure">
          <p>{project.wireframes}</p>
        </CaseStudySection>

        <CaseStudySection eyebrow="User Flow" title="Mapping the path end to end">
          <p>{project.userFlow}</p>
        </CaseStudySection>

        <CaseStudySection eyebrow="Design Process" title="From structure to system">
          <ul className="space-y-3">
            {project.designProcess.map((d) => (
              <li key={d} className="flex gap-3">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full" style={{ background: project.color }} />
                <span>{d}</span>
              </li>
            ))}
          </ul>
        </CaseStudySection>

        <CaseStudySection eyebrow="Design System" title="Reusable components & tokens">
          <div className="grid gap-3 sm:grid-cols-2">
            {project.designSystem.map((d) => (
              <div key={d} className="rounded-xl border border-line p-4 text-sm text-ink-secondary">
                {d}
              </div>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection eyebrow="High-Fidelity UI" title="Bringing the system to life">
          <p>{project.highFidelity}</p>
        </CaseStudySection>

        <CaseStudySection eyebrow="Prototype" title="Testing before building">
          <p>{project.prototype}</p>
        </CaseStudySection>

        <CaseStudySection eyebrow="Development" title="Shipping production code">
          <p>{project.development}</p>
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full border border-line px-3 py-1 text-xs text-ink-faint">
                {t}
              </span>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection eyebrow="Results" title="What changed">
          <div className="grid gap-4 sm:grid-cols-3">
            {project.results.map((r) => (
              <div key={r.label} className="rounded-2xl border border-line p-6">
                <p className="font-display text-3xl font-semibold" style={{ color: project.color }}>
                  {r.value}
                </p>
                <p className="mt-2 text-sm text-ink-secondary">{r.label}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        <CaseStudySection eyebrow="Lessons Learned" title="What I'd carry into the next one" last>
          <p>{project.lessons}</p>
        </CaseStudySection>
      </div>

      {/* Next project */}
      <div className="container-px mx-auto max-w-5xl border-t border-line py-20">
        <p className="eyebrow">Next project</p>
        <div className="mt-4 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <h3 className="font-display text-3xl font-semibold text-white sm:text-4xl">
            {next.title}
          </h3>
          <MagneticButton href={`/projects/${next.slug}`}>
            View case study <ArrowUpRight size={16} />
          </MagneticButton>
        </div>
      </div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs uppercase tracking-wider text-ink-faint">{label}</p>
      <p className="mt-1 text-sm text-white">{value}</p>
    </div>
  );
}
