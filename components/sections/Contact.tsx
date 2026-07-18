"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Download, ArrowUpRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { contactInfo } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<Status>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      setStatus("sent");
      form.reset();
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Have a product to design or build?"
          description="I take on a limited number of projects at a time — reach out and I'll respond within one business day."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="space-y-4">
            <ContactLink
              icon={<Mail size={18} />}
              label="Email"
              value={contactInfo.email}
              href={`mailto:${contactInfo.email}`}
            />
            <ContactLink
              icon={<Linkedin size={18} />}
              label="LinkedIn"
              value="Connect professionally"
              href={contactInfo.linkedin}
              external
            />
            <ContactLink
              icon={<Github size={18} />}
              label="GitHub"
              value="Browse repositories"
              href={contactInfo.github}
              external
            />
            <a
              href={contactInfo.resumeUrl}
              download
              data-cursor-hover
              className="group flex items-center justify-between rounded-2xl border border-line p-5 transition-colors hover:border-accent"
            >
              <span className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white">
                  <Download size={18} />
                </span>
                <span>
                  <span className="block text-sm font-medium text-white">
                    Resume
                  </span>
                  <span className="block text-xs text-ink-faint">
                    Download PDF
                  </span>
                </span>
              </span>
              <ArrowUpRight
                size={16}
                className="text-ink-faint transition-colors group-hover:text-accent"
              />
            </a>
          </div>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="glass space-y-5 rounded-2xl p-6 md:p-8"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" type="text" required />
              <Field label="Email" name="email" type="email" required />
            </div>
            <Field label="Project type" name="projectType" type="text" placeholder="SaaS, AI, Healthcare, Banking…" />
            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-faint">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full resize-none rounded-xl border border-line bg-white/5 px-4 py-3 text-sm text-white placeholder:text-ink-faint focus:border-accent focus:outline-none"
                placeholder="Tell me about the project…"
              />
            </div>
            <MagneticButton className="w-full sm:w-auto">
              {status === "sending" ? "Sending…" : status === "sent" ? "Message sent" : "Send message"}
            </MagneticButton>
            {status === "error" && (
              <p className="text-sm text-red-400">
                Something went wrong — please email me directly instead.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}

function ContactLink({
  icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  external?: boolean;
}) {
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      data-cursor-hover
      className="group flex items-center justify-between rounded-2xl border border-line p-5 transition-colors hover:border-accent"
    >
      <span className="flex items-center gap-3">
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 text-white">
          {icon}
        </span>
        <span>
          <span className="block text-xs text-ink-faint">{label}</span>
          <span className="block text-sm font-medium text-white">{value}</span>
        </span>
      </span>
      <ArrowUpRight
        size={16}
        className="text-ink-faint transition-colors group-hover:text-accent"
      />
    </a>
  );
}

function Field({
  label,
  name,
  type,
  required,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  required?: boolean;
  placeholder?: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-medium uppercase tracking-wider text-ink-faint">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required={required}
        placeholder={placeholder}
        className="w-full rounded-xl border border-line bg-white/5 px-4 py-3 text-sm text-white placeholder:text-ink-faint focus:border-accent focus:outline-none"
      />
    </div>
  );
}
