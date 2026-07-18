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

export default function About() {
  return (
    <section id="about" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="About"
          title="I connect design thinking with engineering execution."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1fr]">
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
            <RevealText as="p" delay={0.2} className="text-lg leading-relaxed text-ink-secondary">
              Outside of client work, I contribute to AI evaluation and
              dataset design across engineering domains, and I mentor students
              through competitive programming and career readiness — work
              that keeps my own problem-solving sharp.
            </RevealText>
          </div>

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
        </div>
      </div>
    </section>
  );
}
