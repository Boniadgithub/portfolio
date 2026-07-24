"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import MagneticButton from "@/components/ui/MagneticButton";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 md:py-32 bg-base-soft border-t border-line/50">
      <div
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          background: `radial-gradient(circle at 70% 60%, var(--color-accent) 0%, transparent 60%)`,
        }}
      />
      <div className="container-px relative mx-auto max-w-5xl text-center flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="eyebrow">Let&apos;s Connect</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-6 font-display text-4xl font-bold tracking-tight text-ink-primary sm:text-5xl md:text-6xl max-w-3xl leading-tight"
        >
          Have a project in mind? Let&apos;s make it exceptional.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-6 max-w-xl text-lg text-ink-secondary leading-relaxed"
        >
          Whether you need UI/UX design, full-stack engineering, or AI systems development, I can help you bring your vision to life.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-10 flex flex-wrap justify-center gap-4"
        >
          <MagneticButton href="/contact">
            Get in touch <ArrowRight size={18} />
          </MagneticButton>
          <Link
            href="/work"
            className="inline-flex items-center justify-center rounded-full border border-line bg-base px-6 py-3.5 text-sm font-medium text-ink-secondary transition-colors hover:bg-base-soft hover:text-ink-primary"
          >
            View Projects
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
