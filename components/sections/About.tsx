"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import RevealText from "@/components/ui/RevealText";

const pillars = [
  {
    title: "Design with intent",
    body: "Every color, spacing value, and animation exists to serve the content — never decoration for its own sake.",
  },
  {
    title: "Build what I design",
    body: "I ship production code, not just handoff files. Design decisions get tested against real engineering constraints.",
  },
  {
    title: "AI as a material",
    body: "I treat AI as a design material with its own affordances and failure modes — not a feature to bolt on.",
  },
];

interface AboutProps {
  condensed?: boolean;
}

export default function About({ condensed = false }: AboutProps) {
  return (
    <section id="about" className="section-py relative bg-base">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title={condensed ? "Connecting design thinking with engineering execution." : "I connect design thinking with engineering execution."}
        />

        <div className={`mt-16 grid gap-12 ${condensed ? "lg:grid-cols-1 max-w-3xl" : "lg:grid-cols-[1fr_1fr]"}`}>
          <div className="space-y-6">
            <RevealText as="p" className="text-lg leading-relaxed text-ink-secondary">
              I&apos;m a Computer Science &amp; Engineering graduate who builds
              at the intersection of product design, AI engineering, and
              full-stack development. Most of my work starts as a real
              constraint — a bank that needs to feel trustworthy, a clinician
              who has no attention to spare, a founder who needs a landing
              page that actually converts.
            </RevealText>
            <RevealText as="p" delay={0.1} className="text-lg leading-relaxed text-ink-secondary">
              I work across UI/UX design, AI task evaluation, and interactive
              web development, which means I rarely hand off a design without
              understanding exactly how it will be built — and I rarely ship
              code without having thought through how it should feel to use.
            </RevealText>
            {!condensed && (
              <RevealText as="p" delay={0.2} className="text-lg leading-relaxed text-ink-secondary">
                Outside of client work, I contribute to AI evaluation and
                dataset design across engineering domains, and I mentor students
                through competitive programming and career readiness — work
                that keeps my own problem-solving sharp.
              </RevealText>
            )}

            {condensed && (
              <div className="pt-4">
                <Link
                  href="/about"
                  className="inline-flex items-center gap-2 rounded-full bg-ink-primary px-6 py-3 text-sm font-medium text-base transition-transform hover:scale-105"
                >
                  Read My Story <ArrowRight size={16} />
                </Link>
              </div>
            )}
          </div>

          {!condensed && (
            <div className="grid gap-5">
              {pillars.map((p, i) => (
                <GlassCard key={p.title} className="border-line">
                  <span className="font-mono text-xs text-accent">
                    0{i + 1}
                  </span>
                  <h3 className="mt-3 font-display text-xl font-semibold text-ink-primary">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
                    {p.body}
                  </p>
                </GlassCard>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
