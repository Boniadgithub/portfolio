"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";

const stats = [
  { label: "Projects Completed", value: 7, suffix: "+" },
  { label: "UI Designs Created", value: 15, suffix: "+" },
  { label: "Technologies Used", value: 12, suffix: "+" },
  { label: "GitHub Repositories", value: 30, suffix: "+" },
  { label: "AI Evaluation Tasks", value: 150, suffix: "+" },
  { label: "Years of Learning", value: 4, suffix: "+" },
];

function AnimatedCounter({ value }: { value: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, motionValue, value]);

  useEffect(() => {
    return springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US").format(latest.toFixed(0));
      }
    });
  }, [springValue]);

  return <span ref={ref}>0</span>;
}

export default function Stats() {
  return (
    <section className="section-py relative overflow-hidden bg-base">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="By The Numbers"
          title="Experience in metrics"
          description="A quantitative look at my continuous learning and output over the past few years."
        />

        <div className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-3 lg:gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-line bg-base-soft p-8 md:p-10 text-center flex flex-col items-center justify-center group hover:border-accent/50 transition-colors"
            >
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at center, rgba(139,92,246,0.05) 0%, transparent 70%)`,
                }}
              />
              <div className="font-display text-5xl font-bold tracking-tight text-ink-primary md:text-6xl flex items-baseline">
                <AnimatedCounter value={stat.value} />
                <span className="text-accent">{stat.suffix}</span>
              </div>
              <p className="mt-4 text-sm font-medium uppercase tracking-widest text-ink-secondary">
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
