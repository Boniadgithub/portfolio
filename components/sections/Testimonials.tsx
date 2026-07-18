"use client";

import { motion } from "framer-motion";
import { Quote, Award } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { testimonials, awards } from "@/lib/data";

export default function Testimonials() {
  return (
    <section className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading eyebrow="Feedback" title="What it's like to work together." />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
            >
              <GlassCard className="flex h-full flex-col justify-between border-line">
                <Quote className="text-accent" size={22} />
                <p className="mt-4 flex-1 text-sm leading-relaxed text-ink-secondary">
                  &ldquo;{t.quote}&rdquo;
                </p>
                <div className="mt-6 border-t border-line pt-4">
                  <p className="text-sm font-medium text-white">{t.name}</p>
                  <p className="text-xs text-ink-faint">{t.role}</p>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>

        <div className="mt-24">
          <SectionHeading eyebrow="Recognition" title="Awards & milestones." />
          <div className="mt-10 grid gap-4 sm:grid-cols-3">
            {awards.map((award, i) => (
              <motion.div
                key={award.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-10%" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="flex items-start gap-4 rounded-2xl border border-line p-5"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-accent/10 text-accent">
                  <Award size={18} />
                </div>
                <div>
                  <p className="font-medium text-white">{award.title}</p>
                  <p className="mt-1 text-xs text-ink-faint">
                    {award.org} · {award.year}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
