"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
  type MotionValue,
} from "framer-motion";
import {
  Search,
  LayoutTemplate,
  GitBranch,
  Palette,
  MousePointerClick,
  Code2,
  FlaskConical,
  Rocket,
} from "lucide-react";
import { processSteps } from "@/lib/data";

/* ─── Icon map (must match processSteps order) ─── */
const ICONS = [
  Search,
  LayoutTemplate,
  GitBranch,
  Palette,
  MousePointerClick,
  Code2,
  FlaskConical,
  Rocket,
];

/* ─── Accent colours that cycle per step ─── */
const STEP_COLORS = [
  { accent: "#3b82f6", glow: "rgba(59,130,246,0.18)" },   // Research      – blue
  { accent: "#8b5cf6", glow: "rgba(139,92,246,0.18)" },   // Wireframes    – violet
  { accent: "#06b6d4", glow: "rgba(6,182,212,0.18)" },    // User Flows    – cyan
  { accent: "#f59e0b", glow: "rgba(245,158,11,0.18)" },   // UI Design     – amber
  { accent: "#ec4899", glow: "rgba(236,72,153,0.18)" },   // Prototype     – pink
  { accent: "#10b981", glow: "rgba(16,185,129,0.18)" },   // Development   – emerald
  { accent: "#f97316", glow: "rgba(249,115,22,0.18)" },   // Testing       – orange
  { accent: "#3b82f6", glow: "rgba(59,130,246,0.18)" },   // Launch        – blue
];

/* ─── Shared animation variants ─── */
const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

const nodeVariants = {
  hidden: { scale: 0, opacity: 0 },
  visible: {
    scale: 1,
    opacity: 1,
    transition: { type: "spring", stiffness: 300, damping: 20, delay: 0.15 },
  },
};

/* ══════════════════════════════════════════════════════════════
   STEP CARD — the individual card component
══════════════════════════════════════════════════════════════ */
function StepCard({
  step,
  index,
  isLast,
}: {
  step: (typeof processSteps)[number];
  index: number;
  isLast: boolean;
}) {
  const Icon = ICONS[index];
  const color = STEP_COLORS[index];
  const prefersReduced = useReducedMotion();

  return (
    <motion.div
      variants={cardVariants}
      className="group relative flex gap-5 md:flex-col md:gap-0"
    >
      {/* ── Node + connector line (vertical on mobile, handled via CSS on desktop) ── */}
      <div className="flex flex-col items-center md:flex-row md:items-start">
        {/* Glowing node circle */}
        <motion.div
          variants={nodeVariants}
          className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-500"
          style={{
            borderColor: color.accent,
            background: `radial-gradient(circle at 50% 50%, ${color.glow}, transparent 70%)`,
          }}
          whileHover={
            prefersReduced
              ? {}
              : { scale: 1.15, boxShadow: `0 0 24px ${color.glow}` }
          }
        >
          {/* Pulse ring */}
          <span
            className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 group-hover:animate-ping"
            style={{ background: color.glow }}
          />
          <Icon
            size={20}
            strokeWidth={1.8}
            style={{ color: color.accent }}
            className="relative z-10"
          />
        </motion.div>

        {/* Vertical connector (mobile) / hidden on desktop */}
        {!isLast && (
          <div
            className="mt-1 w-px flex-1 min-h-[2.5rem] md:hidden"
            style={{
              background: `linear-gradient(to bottom, ${color.accent}55, transparent)`,
            }}
          />
        )}
      </div>

      {/* ── Card body ── */}
      <motion.div
        className="
          relative mb-10 flex-1 overflow-hidden rounded-2xl border border-line
          bg-base-soft/50 p-5 backdrop-blur-sm
          md:mb-0 md:mt-5
          transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]
          group-hover:-translate-y-1
        "
        whileHover={
          prefersReduced
            ? {}
            : {
                borderColor: `${color.accent}60`,
                boxShadow: `0 16px 48px -8px ${color.glow}`,
              }
        }
        transition={{ duration: 0.4 }}
      >
        {/* Corner step number */}
        <span
          className="absolute right-4 top-3 font-mono text-[2.5rem] font-bold leading-none select-none"
          style={{ color: `${color.accent}12` }}
        >
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* Step label */}
        <p className="font-mono text-[10px] uppercase tracking-[0.22em]" style={{ color: color.accent }}>
          Step {String(index + 1).padStart(2, "0")}
        </p>
        <h3 className="mt-2 font-display text-lg font-semibold text-ink-primary">
          {step.label}
        </h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-secondary">
          {step.description}
        </p>

        {/* Bottom accent line */}
        <motion.div
          className="absolute bottom-0 left-0 h-[2px] w-0 group-hover:w-full"
          style={{ background: `linear-gradient(to right, ${color.accent}, transparent)` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          whileHover={{ width: "100%" }}
        />
      </motion.div>
    </motion.div>
  );
}

/* ══════════════════════════════════════════════════════════════
   ANIMATED SVG CONNECTOR  (desktop only — draws on scroll)
══════════════════════════════════════════════════════════════ */
function AnimatedConnector({ progress }: { progress: ReturnType<typeof useTransform<number, number>> }) {
  return (
    <div className="pointer-events-none absolute left-0 right-0 top-6 hidden h-px md:block" aria-hidden="true">
      {/* Static background track */}
      <div className="absolute inset-0 bg-line" />
      {/* Animated fill */}
      <motion.div
        className="absolute inset-y-0 left-0 origin-left"
        style={{
          scaleX: progress,
          background: "linear-gradient(to right, #3b82f6, #8b5cf6, #06b6d4, #f59e0b, #ec4899, #10b981, #3b82f6)",
        }}
      />
    </div>
  );
}

/* ══════════════════════════════════════════════════════════════
   MAIN EXPORT
══════════════════════════════════════════════════════════════ */
export default function Process() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start 80%", "end 60%"],
  });

  const lineProgress = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      ref={sectionRef}
      id="process"
      className="section-py relative overflow-hidden border-y border-line"
    >
      {/* ── Background ambient blobs ── */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-1/4 h-80 w-80 rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "radial-gradient(circle, #3b82f6, transparent 70%)" }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-1/4 h-96 w-96 rounded-full opacity-[0.06] blur-3xl"
        style={{ background: "radial-gradient(circle, #8b5cf6, transparent 70%)" }}
      />

      <div className="container-px relative mx-auto max-w-7xl">

        {/* ── Section heading ── */}
        <div className="mx-auto max-w-2xl text-center">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="eyebrow"
          >
            How I Work
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-primary md:text-5xl"
          >
            A repeatable process,{" "}
            <span className="text-gradient-accent">applied to every project.</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.12 }}
            className="mt-5 text-base leading-relaxed text-ink-secondary md:text-lg"
          >
            The steps stay the same; the depth of each one flexes to what the
            product actually needs.
          </motion.p>
        </div>

        {/* ── Steps grid ── */}
        <div className="relative mt-20">
          {/* Desktop animated connector line */}
          <AnimatedConnector progress={lineProgress} />

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-8%" }}
            className="grid gap-0 md:grid-cols-4 lg:grid-cols-8"
          >
            {processSteps.map((step, i) => (
              <StepCard
                key={step.label}
                step={step}
                index={i}
                isLast={i === processSteps.length - 1}
              />
            ))}
          </motion.div>
        </div>

        {/* ── Bottom CTA strip ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 flex items-center justify-center gap-4"
        >
          <div className="h-px flex-1 bg-line" />
          <span className="rounded-full border border-line bg-base-soft px-5 py-2 font-mono text-xs tracking-widest text-ink-faint">
            FROM RESEARCH → LAUNCH
          </span>
          <div className="h-px flex-1 bg-line" />
        </motion.div>
      </div>
    </section>
  );
}
