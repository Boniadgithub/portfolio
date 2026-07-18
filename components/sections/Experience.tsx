"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { experience } from "@/lib/data";

export default function Experience() {
  return (
    <section id="experience" className="section-py relative border-y border-line bg-base-soft/30">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Experience" title="Where the work has taken me." />

        <div className="relative mt-16 max-w-3xl">
          <div className="absolute bottom-0 left-[7px] top-2 w-px bg-line" />
          <div className="space-y-12">
            {experience.map((item, i) => (
              <motion.div
                key={item.title + item.period}
                initial={{ opacity: 0, x: -16 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="relative pl-10"
              >
                <span className="absolute left-0 top-1.5 h-3.5 w-3.5 rounded-full border-2 border-accent bg-base" />
                <p className="font-mono text-xs uppercase tracking-wider text-accent">
                  {item.period}
                </p>
                <h3 className="mt-2 font-display text-xl font-semibold text-white">
                  {item.title}
                </h3>
                <p className="text-sm text-ink-secondary">{item.org}</p>
                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-ink-secondary">
                  {item.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-line px-3 py-1 text-xs text-ink-faint"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
