"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Github,
  Linkedin,
  Mail,
  FileText,
  Download,
  ArrowUpRight,
  LucideIcon,
  Sparkles,
} from "lucide-react";
import { contactInfo } from "@/lib/data";

interface SocialLinkItem {
  id: string;
  name: string;
  href: string;
  icon: LucideIcon;
  ariaLabel: string;
  tooltip: string;
  isExternal: boolean;
  download?: string | boolean;
}

export default function Footer() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const socialLinks: SocialLinkItem[] = [
    {
      id: "email",
      name: "Email",
      href: `mailto:${contactInfo.email}`,
      icon: Mail,
      ariaLabel: `Send email to ${contactInfo.email}`,
      tooltip: "Send Email",
      isExternal: false,
    },
    {
      id: "github",
      name: "GitHub",
      href: contactInfo.github,
      icon: Github,
      ariaLabel: "View Bonsa Adugna's GitHub profile",
      tooltip: "View GitHub",
      isExternal: true,
    },
    {
      id: "linkedin",
      name: "LinkedIn",
      href: contactInfo.linkedin,
      icon: Linkedin,
      ariaLabel: "Connect with Bonsa Adugna on LinkedIn",
      tooltip: "Connect on LinkedIn",
      isExternal: true,
    },
    {
      id: "resume-view",
      name: "View Resume",
      href: contactInfo.resumeUrl,
      icon: FileText,
      ariaLabel: "Open Bonsa Adugna's resume PDF in a new tab",
      tooltip: "View Resume",
      isExternal: true,
    },
    {
      id: "resume-download",
      name: "Download Resume",
      href: contactInfo.resumeUrl,
      icon: Download,
      ariaLabel: "Download Bonsa Adugna's resume PDF",
      tooltip: "Download Resume",
      isExternal: true,
      download: "Bonsa_Adugna_Resume.pdf",
    },
  ];

  return (
    <footer className="relative overflow-hidden border-t border-line/60 bg-base">
      {/* Ambient background glow gradient */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 left-1/2 h-72 w-[600px] -translate-x-1/2 rounded-full opacity-10 blur-3xl"
        style={{
          background: "radial-gradient(circle, #3b82f6 0%, #8b5cf6 50%, transparent 80%)",
        }}
      />

      <div className="container-px relative mx-auto max-w-7xl py-16 lg:py-20">
        {/* Main Footer Banner */}
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full border border-accent/20 bg-accent/10 px-3.5 py-1 text-xs font-mono uppercase tracking-widest text-accent mb-4"
            >
              <Sparkles size={13} />
              <span>Let&apos;s Connect</span>
            </motion.div>

            <motion.h3
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="font-display text-3xl font-semibold tracking-tight text-ink-primary sm:text-4xl"
            >
              Let&apos;s build something people remember.
            </motion.h3>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mt-4"
            >
              <a
                href={`mailto:${contactInfo.email}`}
                data-cursor-hover
                aria-label={`Send email to ${contactInfo.email}`}
                className="group inline-flex items-center gap-2 text-lg font-medium text-ink-secondary transition-colors hover:text-accent"
              >
                <span>{contactInfo.email}</span>
                <ArrowUpRight
                  size={18}
                  className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                />
              </a>
            </motion.div>
          </div>

          {/* Social & Contact Actions Cluster */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.25 }}
            className="flex flex-wrap items-center gap-3 pt-2"
          >
            {socialLinks.map((link) => {
              const Icon = link.icon;
              const isHovered = hoveredId === link.id;

              return (
                <div key={link.id} className="relative">
                  <motion.a
                    href={link.href}
                    target={link.isExternal ? "_blank" : undefined}
                    rel={link.isExternal ? "noopener noreferrer" : undefined}
                    download={link.download}
                    aria-label={link.ariaLabel}
                    data-cursor-hover
                    onMouseEnter={() => setHoveredId(link.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    onFocus={() => setHoveredId(link.id)}
                    onBlur={() => setHoveredId(null)}
                    whileHover={{ scale: 1.1, y: -4 }}
                    whileTap={{ scale: 0.94 }}
                    transition={{ type: "spring", stiffness: 400, damping: 20 }}
                    className="relative flex h-12 w-12 items-center justify-center rounded-2xl border border-line bg-base-soft/60 text-ink-secondary backdrop-blur-md transition-colors duration-300 hover:border-accent hover:bg-accent/10 hover:text-accent hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]"
                  >
                    <Icon size={20} />
                  </motion.a>

                  {/* Accessible Floating Tooltip */}
                  <AnimatePresence>
                    {isHovered && (
                      <motion.div
                        initial={{ opacity: 0, y: 8, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 4, scale: 0.95 }}
                        transition={{ duration: 0.15 }}
                        className="pointer-events-none absolute -top-11 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-lg border border-line bg-base-soft px-3 py-1 text-xs font-medium text-ink-primary shadow-xl z-20"
                      >
                        {link.tooltip}
                        {/* Tooltip caret */}
                        <div className="absolute left-1/2 -bottom-1 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-line bg-base-soft" />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* Footer Sub-row */}
        <div className="mt-16 flex flex-col-reverse items-start justify-between gap-6 border-t border-line/50 pt-8 text-xs text-ink-faint sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Bonsa Adugna. All rights reserved.</p>
          <p className="font-mono">
            Designed &amp; engineered with Next.js, Tailwind CSS, and Framer Motion.
          </p>
        </div>
      </div>
    </footer>
  );
}
