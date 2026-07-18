import Link from "next/link";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import { contactInfo } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="container-px mx-auto max-w-7xl py-14">
        <div className="flex flex-col gap-10 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="font-display text-2xl font-semibold text-ink-primary">
              Let&apos;s build something people remember.
            </p>
            <a
              href={`mailto:${contactInfo.email}`}
              data-cursor-hover
              className="mt-3 inline-flex items-center gap-2 text-ink-secondary transition-colors hover:text-accent"
            >
              {contactInfo.email}
              <ArrowUpRight size={16} />
            </a>
          </div>

          <div className="flex items-center gap-4">
            <a
              href={contactInfo.github}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              aria-label="GitHub"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-secondary transition-colors hover:border-accent hover:text-ink-primary"
            >
              <Github size={18} />
            </a>
            <a
              href={contactInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              data-cursor-hover
              aria-label="LinkedIn"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-secondary transition-colors hover:border-accent hover:text-ink-primary"
            >
              <Linkedin size={18} />
            </a>
            <a
              href={`mailto:${contactInfo.email}`}
              data-cursor-hover
              aria-label="Email"
              className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink-secondary transition-colors hover:border-accent hover:text-ink-primary"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>

        <div className="mt-14 flex flex-col-reverse items-start justify-between gap-4 border-t border-line pt-6 text-xs text-ink-faint md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Bonsa Adugna. All rights reserved.</p>
          <p className="font-mono">Designed & built in Next.js, Tailwind CSS, and Framer Motion.</p>
        </div>
      </div>
    </footer>
  );
}
