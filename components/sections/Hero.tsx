"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import MagneticButton from "@/components/ui/MagneticButton";
import Image from "next/image";

const roles = ["UI/UX Designer", "AI Engineer", "Full-Stack Developer"];

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden pt-32">
      {/* Background layers */}
      <div className="pointer-events-none absolute inset-0 bg-grid-glow" />
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />

      <div className="container-px relative mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-8 inline-flex items-center gap-2 rounded-full border border-line px-4 py-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-success opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
              </span>
              <span className="font-mono text-xs text-ink-secondary">
                Available for select projects
              </span>
            </motion.div>

            <h1 className="font-display text-5xl font-semibold leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl">
              <Line delay={0}>Bonsa Adugna</Line>
              <Line delay={0.1}>
                designs & builds{" "}
                <span className="text-gradient-accent">intelligent</span>
              </Line>
              <Line delay={0.2}>digital products.</Line>
            </h1>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-8 max-w-xl text-lg leading-relaxed text-ink-secondary"
            >
              A UI/UX designer, AI engineer, and full-stack developer crafting
              premium SaaS, healthcare, and banking experiences — from the
              first wireframe to production code.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-4"
            >
              <MagneticButton href="/#work">
                View Projects <ArrowUpRight size={16} />
              </MagneticButton>
              <MagneticButton href="/#contact" variant="secondary">
                Hire Me
              </MagneticButton>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3"
            >
              {roles.map((role) => (
                <span
                  key={role}
                  className="font-mono text-xs uppercase tracking-[0.2em] text-ink-faint"
                >
                  {role}
                </span>
              ))}
            </motion.div>
          </div>

          {/* Floating orbit / card cluster */}
          <div className="relative mx-auto hidden h-[440px] w-[440px] lg:block">
            <motion.div
              className="absolute inset-0 rounded-full border border-dashed border-line"
              animate={{ rotate: 360 }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            />
            <motion.div
              className="absolute inset-10 rounded-full border border-line"
              animate={{ rotate: -360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            />

            <div className="glass shadow-glow absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
              <Image
                src="/images/projects/portrait.jpg"
                alt="Bonsa Adugna"
                fill
                priority
                className="object-cover"
                sizes="256px"
              />
            </div>

            <FloatingCard className="left-0 top-6" delay={0}>
              Design Systems
            </FloatingCard>
            <FloatingCard className="right-0 top-24" delay={1}>
              AI Integration
            </FloatingCard>
            <FloatingCard className="bottom-16 left-2" delay={2}>
              UI/UX Design
            </FloatingCard>
            <FloatingCard className="bottom-0 right-6" delay={1.5}>
              Next.js
            </FloatingCard>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.6 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-ink-faint"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity }}
        >
          <ArrowDown size={18} />
        </motion.div>
      </motion.div>
    </section>
  );
}

function Line({ children, delay }: { children: React.ReactNode; delay: number }) {
  return (
    <span className="block overflow-hidden">
      <motion.span
        initial={{ y: "110%" }}
        animate={{ y: "0%" }}
        transition={{ duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] }}
        className="block"
      >
        {children}
      </motion.span>
    </span>
  );
}

function FloatingCard({
  children,
  className,
  delay,
}: {
  children: React.ReactNode;
  className: string;
  delay: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, delay: 0.8 }}
      className={`glass absolute animate-float rounded-xl px-4 py-2.5 text-xs font-medium text-white ${className}`}
      style={{ animationDelay: `${delay}s` }}
    >
      {children}
    </motion.div>
  );
}
