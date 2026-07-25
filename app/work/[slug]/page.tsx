import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowUpRight, Clock, ChevronRight } from "lucide-react";
import { projects } from "@/lib/data";
import MagneticButton from "@/components/ui/MagneticButton";
import CaseStudySection from "@/components/sections/CaseStudySection";
import Image from "next/image";

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

  // Calculate Reading Time
  const contentToCount = [
    project.overview,
    project.challenge,
    ...(project.objectives || []),
    ...(project.research || []),
    project.wireframes,
    project.userFlow,
    ...(project.designProcess || []),
    ...(project.designSystem || []),
    project.highFidelity,
    project.technicalArchitecture,
    ...(project.technicalChallenges || []),
    ...(project.solutions || []),
    project.development,
    ...(project.futureImprovements || []),
    project.lessons
  ].filter(Boolean).join(" ");
  const readingTime = Math.max(1, Math.ceil(contentToCount.split(/\s+/).length / 200));

  const sections = [
    { id: "overview", label: "Overview", show: !!project.overview },
    { id: "problem", label: "Problem", show: !!project.challenge },
    { id: "objectives", label: "Objectives", show: !!(project.objectives?.length) },
    { id: "research", label: "Research", show: !!(project.research?.length) },
    { id: "architecture", label: "Architecture", show: !!project.technicalArchitecture },
    { id: "challenges", label: "Challenges & Solutions", show: !!(project.technicalChallenges?.length || project.solutions?.length) },
    { id: "gallery", label: "Gallery", show: !!(project.screenshots?.length) },
    { id: "outcomes", label: "Outcomes", show: !!(project.results?.length) },
  ].filter(s => s.show);

  return (
    <article className="bg-base selection:bg-accent/30 selection:text-ink-primary">
      {/* Case study hero */}
      <header className="relative overflow-hidden pt-40 pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-30"
          style={{
            background: `radial-gradient(circle at 30% 0%, ${project.color}44, transparent 55%)`,
          }}
        />
        <div className="container-px relative mx-auto max-w-5xl">
          <Link
            href="/work"
            data-cursor-hover
            className="inline-flex items-center gap-2 text-sm text-ink-secondary transition-colors hover:text-ink-primary"
          >
            <ArrowLeft size={16} /> Back to work
          </Link>

          <div className="flex items-center justify-between mt-12">
            <p className="eyebrow" style={{ color: project.color }}>
              {project.category} · {project.year}
            </p>
            <div className="flex items-center gap-1.5 text-xs font-medium text-ink-secondary uppercase tracking-widest bg-base-soft px-3 py-1.5 rounded-full border border-line">
              <Clock size={14} className="text-accent" />
              <span>{readingTime} min read</span>
            </div>
          </div>
          
          <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-ink-primary sm:text-5xl md:text-7xl leading-tight">
            {project.title}
          </h1>
          <p className="mt-8 max-w-2xl text-xl leading-relaxed text-ink-secondary font-light">
            {project.tagline}
          </p>

          <div className="mt-16 grid grid-cols-2 gap-8 border-t border-line/50 pt-10 sm:grid-cols-4">
            <Meta label="Role" value={project.role} />
            <Meta label="Year" value={project.year} />
            <Meta label="Category" value={project.category} />
            <Meta label="Tech" value={project.tech.slice(0, 3).join(", ")} />
          </div>
        </div>

        <div className="container-px mx-auto mt-20 max-w-7xl">
          <div
            className="relative aspect-[16/9] md:aspect-[21/9] w-full overflow-hidden rounded-3xl border border-line shadow-2xl"
            style={{
              background: `radial-gradient(circle at 30% 20%, ${project.color}33, transparent 60%), #111827`,
            }}
          >
            <Image
              src={project.cover}
              alt={project.title}
              fill
              className="object-cover opacity-90 transition-transform duration-1000 hover:scale-[1.02]"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
          </div>
        </div>
      </header>

      <div className="container-px mx-auto max-w-7xl">
        <div className="lg:grid lg:grid-cols-[1fr_250px] gap-16 items-start relative">
          
          {/* Main Content */}
          <div className="py-10 min-w-0">
            <div id="overview" className="scroll-mt-32">
              <CaseStudySection eyebrow="Overview" title="What this project set out to do">
                <p>{project.overview}</p>
              </CaseStudySection>
            </div>

            <div id="problem" className="scroll-mt-32">
              <CaseStudySection eyebrow="Problem" title="The core problem">
                <p>{project.challenge}</p>
              </CaseStudySection>
            </div>

            {project.objectives && project.objectives.length > 0 && (
              <div id="objectives" className="scroll-mt-32">
                <CaseStudySection eyebrow="Objectives" title="What we needed to achieve">
                  <ul className="space-y-4">
                    {project.objectives.map((o) => (
                      <li key={o} className="flex gap-4">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: project.color, boxShadow: `0 0 10px ${project.color}` }} />
                        <span className="text-lg">{o}</span>
                      </li>
                    ))}
                  </ul>
                </CaseStudySection>
              </div>
            )}

            {project.research && project.research.length > 0 && (
              <div id="research" className="scroll-mt-32">
                <CaseStudySection eyebrow="Research" title="Understanding the user & context">
                  <ul className="space-y-4">
                    {project.research.map((r) => (
                      <li key={r} className="flex gap-4">
                        <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: project.color }} />
                        <span className="text-lg">{r}</span>
                      </li>
                    ))}
                  </ul>
                </CaseStudySection>
              </div>
            )}

            {project.wireframes && (
              <CaseStudySection eyebrow="Wireframes" title="Locking the structure">
                <p>{project.wireframes}</p>
              </CaseStudySection>
            )}

            {project.userFlow && (
              <CaseStudySection eyebrow="User Flow" title="Mapping the path end to end">
                <p>{project.userFlow}</p>
              </CaseStudySection>
            )}

            {project.designProcess && project.designProcess.length > 0 && (
              <CaseStudySection eyebrow="Design Process" title="From structure to system">
                <ul className="space-y-4">
                  {project.designProcess.map((d) => (
                    <li key={d} className="flex gap-4">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: project.color }} />
                      <span className="text-lg">{d}</span>
                    </li>
                  ))}
                </ul>
              </CaseStudySection>
            )}

            {project.designSystem && project.designSystem.length > 0 && (
              <CaseStudySection eyebrow="Design System" title="Reusable components & tokens">
                <div className="grid gap-4 sm:grid-cols-2">
                  {project.designSystem.map((d) => (
                    <div key={d} className="rounded-2xl border border-line bg-base-soft p-5 text-sm text-ink-secondary">
                      {d}
                    </div>
                  ))}
                </div>
              </CaseStudySection>
            )}

            {project.highFidelity && (
              <CaseStudySection eyebrow="High-Fidelity UI" title="Bringing the system to life">
                <p>{project.highFidelity}</p>
              </CaseStudySection>
            )}

            {project.technicalArchitecture && (
              <div id="architecture" className="scroll-mt-32">
                <CaseStudySection eyebrow="Architecture" title="Technical Architecture">
                  <p>{project.technicalArchitecture}</p>
                </CaseStudySection>
              </div>
            )}

            {(project.technicalChallenges?.length || project.solutions?.length) && (
              <div id="challenges" className="scroll-mt-32">
                {project.technicalChallenges && project.technicalChallenges.length > 0 && (
                  <CaseStudySection eyebrow="Challenges" title="Technical Hurdles">
                    <ul className="space-y-4">
                      {project.technicalChallenges.map((c) => (
                        <li key={c} className="flex gap-4">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-red-500/80" />
                          <span className="text-lg">{c}</span>
                        </li>
                      ))}
                    </ul>
                  </CaseStudySection>
                )}

                {project.solutions && project.solutions.length > 0 && (
                  <CaseStudySection eyebrow="Solutions" title="How we solved them">
                    <ul className="space-y-4">
                      {project.solutions.map((s) => (
                        <li key={s} className="flex gap-4">
                          <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-green-500/80" />
                          <span className="text-lg">{s}</span>
                        </li>
                      ))}
                    </ul>
                  </CaseStudySection>
                )}
              </div>
            )}

            <CaseStudySection eyebrow="Development" title="Shipping production code">
              <p>{project.development}</p>
              <div className="mt-8 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span key={t} className="rounded-full border border-line bg-base-soft px-4 py-2 text-sm text-ink-secondary">
                    {t}
                  </span>
                ))}
              </div>
            </CaseStudySection>
          </div>

          {/* Sticky Table of Contents */}
          <aside className="hidden lg:block sticky top-32 mt-10 w-full rounded-2xl border border-line bg-base-soft/50 p-6 backdrop-blur-sm">
            <h4 className="font-mono text-xs uppercase tracking-widest text-ink-faint mb-4">On this page</h4>
            <nav className="flex flex-col gap-3">
              {sections.map(section => (
                <a 
                  key={section.id} 
                  href={`#${section.id}`} 
                  className="group flex items-center justify-between text-sm text-ink-secondary hover:text-ink-primary transition-colors"
                >
                  {section.label}
                  <ChevronRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity text-accent -translate-x-2 group-hover:translate-x-0 transform" />
                </a>
              ))}
            </nav>
          </aside>
        </div>
      </div>

      {/* Full-width Image Gallery */}
      {project.screenshots && project.screenshots.length > 0 && (() => {
        const screenshotCount = project.screenshots.length;
        return (
          <div id="gallery" className="border-y border-line/50 bg-base-soft py-24 my-10 scroll-mt-32">
            <div className="container-px mx-auto max-w-7xl">
              <div className="mb-16 md:text-center">
                <p className="eyebrow mb-4">Gallery</p>
                <h2 className="font-display text-3xl font-semibold text-ink-primary md:text-4xl">
                  Project Screenshots
                </h2>
              </div>
              
              <div className={`grid gap-6 ${
                screenshotCount === 1
                  ? 'grid-cols-1'
                  : screenshotCount === 2
                  ? 'grid-cols-1 sm:grid-cols-2'
                  : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
              }`}>
                {project.screenshots.map((src, i) => (
                  <div 
                    key={i} 
                    className={`relative overflow-hidden rounded-2xl border border-line bg-base group shadow-sm ${
                      screenshotCount === 1
                        ? 'w-full aspect-[16/9]'
                        : screenshotCount === 2
                        ? 'w-full aspect-[16/10]'
                        : i === 0
                        ? 'sm:col-span-2 lg:col-span-2 aspect-[16/9]'
                        : 'aspect-video'
                    }`}
                  >
                    <Image 
                      src={src} 
                      alt={`Screenshot ${i + 1}`} 
                      fill 
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-105" 
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        );
      })()}

      <div id="outcomes" className="container-px mx-auto max-w-5xl py-10 scroll-mt-32">
        <CaseStudySection eyebrow="Outcomes" title="Results & Impact">
          <div className="grid gap-6 sm:grid-cols-3 mt-4">
            {project.results.map((r) => (
              <div key={r.label} className="rounded-2xl border border-line bg-base-soft p-8 transition-colors hover:bg-base">
                <p className="font-display text-4xl font-bold" style={{ color: project.color }}>
                  {r.value}
                </p>
                <p className="mt-3 text-sm font-medium uppercase tracking-wider text-ink-secondary">{r.label}</p>
              </div>
            ))}
          </div>
        </CaseStudySection>

        {project.futureImprovements && project.futureImprovements.length > 0 && (
          <CaseStudySection eyebrow="Future" title="What's Next">
            <ul className="space-y-4">
              {project.futureImprovements.map((f) => (
                <li key={f} className="flex gap-4">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full" style={{ background: project.color }} />
                  <span className="text-lg">{f}</span>
                </li>
              ))}
            </ul>
          </CaseStudySection>
        )}

        <CaseStudySection eyebrow="Lessons Learned" title="What I'd carry into the next one" last>
          <p className="text-lg">{project.lessons}</p>
        </CaseStudySection>
      </div>

      {/* Next project */}
      <div className="container-px mx-auto max-w-5xl border-t border-line py-24">
        <p className="eyebrow mb-2">Next project</p>
        <div className="mt-4 flex flex-col items-start justify-between gap-8 sm:flex-row sm:items-center">
          <h3 className="font-display text-4xl font-bold text-ink-primary sm:text-5xl hover:opacity-80 transition-opacity">
            <Link href={`/work/${next.slug}`}>
              {next.title}
            </Link>
          </h3>
          <MagneticButton href={`/work/${next.slug}`}>
            View case study <ArrowUpRight size={18} />
          </MagneticButton>
        </div>
      </div>
    </article>
  );
}

function Meta({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-[11px] font-bold uppercase tracking-widest text-ink-faint mb-2">{label}</p>
      <p className="text-sm font-medium text-ink-primary">{value}</p>
    </div>
  );
}
