"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/lib/data";
import Image from "next/image";

export default function ProjectCard({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, delay: (index % 2) * 0.1, ease: [0.16, 1, 0.3, 1] }}
    >
      <Link
        href={`/projects/${project.slug}`}
        data-cursor-hover
        className="card-hover group relative block overflow-hidden rounded-2xl border border-line bg-base-soft/40"
      >
        <div className="relative aspect-[4/3] overflow-hidden">
          <Image
            src={project.cover}
            alt={project.title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0" />
          <span className="absolute bottom-4 right-5 font-display text-5xl font-semibold text-ink-primary/20">
            {String(index + 1).padStart(2, "0")}
          </span>
        </div>
        <div className="flex items-start justify-between gap-4 p-6">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider" style={{ color: project.color }}>
              {project.category}
            </p>
            <h3 className="mt-2 font-display text-2xl font-semibold text-ink-primary">
              {project.title}
            </h3>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-ink-secondary">
              {project.tagline}
            </p>
          </div>
          <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-line text-ink-primary transition-all duration-300 group-hover:-rotate-0 group-hover:border-accent group-hover:bg-accent">
            <ArrowUpRight size={18} />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
