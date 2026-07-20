"use client";

import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import ProjectFilterTabs, { type FilterValue } from "@/components/ui/ProjectFilterTabs";
import ProjectCard from "./ProjectCard";
import { projects } from "@/lib/data";

/** Descriptions shown below the heading for each active filter */
const CATEGORY_META: Record<
  FilterValue,
  { eyebrow: string; title: string; description: string }
> = {
  all: {
    eyebrow: "Selected Work",
    title: "Case studies from SaaS, AI, healthcare, and banking.",
    description:
      "Every project here shipped — from research and wireframes through to production code.",
  },
  design: {
    eyebrow: "UI/UX Design",
    title: "Crafting interfaces people trust and enjoy using.",
    description:
      "Landing pages, product dashboards, fintech flows, and healthcare experiences — all designed from first principles and delivered production-ready.",
  },
  development: {
    eyebrow: "Engineering",
    title: "Full-stack and AI products built end-to-end.",
    description:
      "From AI voice assistants and LLM integrations to collaborative platforms — engineered for scale, performance, and real user outcomes.",
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 28, scale: 0.98 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.55,
      delay: i * 0.07,
      ease: [0.16, 1, 0.3, 1] as [number, number, number, number],
    },
  }),
  exit: {
    opacity: 0,
    y: -16,
    scale: 0.97,
    transition: { duration: 0.25, ease: "easeIn" },
  },
};

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterValue>("all");

  const filteredProjects = useMemo(
    () =>
      activeFilter === "all"
        ? projects
        : projects.filter((p) => p.projectType === activeFilter),
    [activeFilter]
  );

  const counts = useMemo(
    () => ({
      all: projects.length,
      design: projects.filter((p) => p.projectType === "design").length,
      development: projects.filter((p) => p.projectType === "development").length,
    }),
    []
  );

  const meta = CATEGORY_META[activeFilter];

  return (
    <section id="work" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">

        {/* ── Header row ── */}
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          {/* Animated heading — swaps when filter changes */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <SectionHeading
                eyebrow={meta.eyebrow}
                title={meta.title}
                description={meta.description}
              />
            </motion.div>
          </AnimatePresence>

          {/* Tabs — pinned to end on desktop */}
          <div className="shrink-0 md:pb-1">
            <ProjectFilterTabs
              active={activeFilter}
              counts={counts}
              onChange={setActiveFilter}
            />
          </div>
        </div>

        {/* ── Category label strip ── */}
        <AnimatePresence mode="wait">
          {activeFilter !== "all" && (
            <motion.div
              key={`strip-${activeFilter}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="mt-6 flex items-center gap-3"
            >
              <span
                className="inline-flex items-center gap-2 rounded-full border border-line bg-base-soft px-3 py-1
                           font-mono text-[11px] uppercase tracking-widest text-ink-faint"
              >
                {activeFilter === "design" ? "🎨" : "💻"}{" "}
                {activeFilter === "design" ? "Design Projects" : "Development Projects"}
                <span className="ml-1 text-accent">— {filteredProjects.length} case studies</span>
              </span>
            </motion.div>
          )}
        </AnimatePresence>

        {/* ── Project grid ── */}
        <div
          id="tabpanel-projects"
          role="tabpanel"
          aria-labelledby={`tab-${activeFilter}`}
          className="mt-14 grid gap-6 md:grid-cols-2"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <motion.div
                key={project.slug}
                custom={i}
                variants={cardVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                layout
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* ── Empty state (safety net) ── */}
        <AnimatePresence>
          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="mt-16 flex flex-col items-center gap-3 py-12 text-center"
            >
              <span className="text-4xl">🔭</span>
              <p className="text-ink-secondary">No projects in this category yet.</p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
