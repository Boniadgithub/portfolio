"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects } from "@/lib/data";
import { ArrowRight, ExternalLink, Github } from "lucide-react";

export default function FeaturedProject() {
  const featured = projects.find((p) => p.slug === "ai-medical-voice-assistant");

  if (!featured) return null;

  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-base">
      <div className="container-px mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-4 py-1.5 font-mono text-[11px] uppercase tracking-widest text-accent mb-6"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
              </span>
              Featured Project
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl font-bold tracking-tight text-ink"
            >
              {featured.title}
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-ink-secondary md:max-w-md"
          >
            {featured.tagline}
          </motion.p>
        </div>

        <div className="group relative rounded-3xl overflow-hidden border border-line bg-base-soft">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Image Section */}
            <div className="lg:col-span-7 relative h-[400px] lg:h-[600px] overflow-hidden bg-muted">
              <motion.div
                whileHover={{ scale: 1.03 }}
                transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
                className="w-full h-full relative"
              >
                <Image
                  src={featured.cover}
                  alt={featured.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-base/80 via-transparent to-transparent opacity-60"></div>
              </motion.div>
            </div>

            {/* Content Section */}
            <div className="lg:col-span-5 flex flex-col justify-between p-8 lg:p-12 relative z-10 bg-gradient-to-br from-base-soft to-base">
              <div>
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  className="mb-8"
                >
                  <h3 className="text-xl font-semibold text-ink mb-4">Project Overview</h3>
                  <p className="text-ink-secondary text-sm leading-relaxed">
                    {featured.overview}
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  className="grid grid-cols-2 gap-6 mb-8"
                >
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-2">Role</h4>
                    <p className="text-sm font-medium text-ink-secondary">{featured.role}</p>
                  </div>
                  <div>
                    <h4 className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-2">Category</h4>
                    <p className="text-sm font-medium text-ink-secondary">{featured.category}</p>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  className="mb-10"
                >
                  <h4 className="font-mono text-[10px] uppercase tracking-widest text-ink-faint mb-3">Technologies</h4>
                  <div className="flex flex-wrap gap-2">
                    {featured.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center rounded-md bg-base border border-line px-2.5 py-1 text-xs font-medium text-ink-secondary"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Link
                  href={`/projects/${featured.slug}`}
                  className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-3.5 text-sm font-medium text-base transition-transform hover:scale-[1.02] active:scale-[0.98]"
                >
                  Read Case Study
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex gap-4">
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-line bg-base px-6 py-3.5 text-sm font-medium text-ink transition-colors hover:bg-base-soft hover:text-ink"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-12 h-12 rounded-full border border-line bg-base text-ink transition-colors hover:bg-base-soft hover:text-ink shrink-0"
                    aria-label="View Source on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
