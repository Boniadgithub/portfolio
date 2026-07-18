"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import { processSteps } from "@/lib/data";

export default function Process() {
  return (
    <section id="process" className="section-py relative border-y border-line bg-base-soft/30">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="How I work"
          title="A repeatable process, applied to every project."
          description="The steps stay the same; the depth of each one flexes to what the product actually needs."
        />

        <div className="relative mt-20">
          <div className="absolute left-0 right-0 top-5 hidden h-px bg-line md:block" />
          <div className="grid gap-10 md:grid-cols-4 lg:grid-cols-8">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.06 }}
                className="relative"
              >
                <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full border border-accent/40 bg-base font-mono text-xs text-accent">
                  {String(i + 1).padStart(2, "0")}
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-ink-primary">
                  {step.label}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-ink-secondary">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
