"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import GlassCard from "@/components/ui/GlassCard";
import { skills } from "@/lib/data";

const groups = ["Design", "Engineering", "AI"] as const;

export default function Skills() {
  return (
    <section id="skills" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Capabilities"
          title="Design fluency, backed by engineering depth."
        />

        <div className="mt-16 grid gap-6 lg:grid-cols-3">
          {groups.map((group, gi) => (
            <GlassCard key={group} className="border-line">
              <h3 className="font-display text-lg font-semibold text-ink-primary">
                {group}
              </h3>
              <div className="mt-6 space-y-5">
                {skills
                  .filter((s) => s.group === group)
                  .map((skill, i) => (
                    <div key={skill.name}>
                      <div className="mb-2 flex items-center justify-between text-sm">
                        <span className="text-ink-secondary">{skill.name}</span>
                        <span className="font-mono text-xs text-ink-faint">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="h-1.5 w-full overflow-hidden rounded-full bg-ink-primary/5">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true, amount: 0.3 }}
                          transition={{
                            duration: 1,
                            delay: gi * 0.1 + i * 0.08,
                            ease: [0.16, 1, 0.3, 1],
                          }}
                          className="h-full rounded-full bg-gradient-to-r from-accent to-accent-violet"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}
