"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { toast } from "sonner";
import {
  Mail,
  Github,
  Linkedin,
  Download,
  ArrowUpRight,
  Copy,
  CheckCircle2,
  ExternalLink,
  Eye,
  Loader2
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { contactInfo } from "@/lib/data";
import { sendContactEmail } from "@/app/actions/contact";

const contactSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(20, "Message must be at least 20 characters"),
  honeypot: z.string().max(0, "Bots only!").optional(),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function Contact() {
  const [isCopied, setIsCopied] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    const formData = new FormData();
    Object.entries(data).forEach(([key, value]) => {
      if (value) formData.append(key, value);
    });

    const result = await sendContactEmail(formData);

    if (result.success) {
      toast.success("Message sent successfully!", {
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      reset();
    } else {
      toast.error("Failed to send message", {
        description: result.error || "Please try again or email me directly.",
      });
    }
  };

  const copyEmail = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(contactInfo.email);
    setIsCopied(true);
    toast.success("Email copied to clipboard!");
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <section id="contact" className="section-py relative">
      <div className="container-px mx-auto max-w-7xl">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something exceptional together."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-[1fr_1.1fr]">
          {/* Left Side: Info Panel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="flex flex-col space-y-8"
          >
            <div>
              <h3 className="font-display text-2xl font-semibold text-ink-primary">
                Bonsa Adugna
              </h3>
              <div className="mt-2 flex flex-wrap gap-2 text-sm text-ink-secondary">
                <span className="rounded-full border border-line bg-ink-primary/ px-3 py-1">
                  UI/UX Designer
                </span>
                <span className="rounded-full border border-line bg-ink-primary/ px-3 py-1">
                  Full-Stack Developer
                </span>
                <span className="rounded-full border border-line bg-ink-primary/ px-3 py-1">
                  AI Engineer
                </span>
              </div>
              <p className="mt-6 text-lg leading-relaxed text-ink-secondary">
                Interested in working together or discussing an opportunity? I'd
                love to hear from you. Feel free to reach out through the form
                or any of the platforms below.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={`mailto:${contactInfo.email}`}
                data-cursor-hover
                className="group flex items-center justify-between rounded-2xl border border-line p-5 transition-colors hover:border-accent"
              >
                <span className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-primary/ text-ink-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
                    <Mail size={20} />
                  </span>
                  <span>
                    <span className="block text-xs uppercase tracking-wider text-ink-faint">
                      Email
                    </span>
                    <span className="block text-sm font-medium text-ink-primary">
                      {contactInfo.email}
                    </span>
                  </span>
                </span>
                <button
                  onClick={copyEmail}
                  className="rounded-full p-2 text-ink-faint transition-colors hover:bg-ink-primary/ hover:text-ink-primary"
                  title="Copy Email"
                >
                  {isCopied ? <CheckCircle2 size={18} className="text-success" /> : <Copy size={18} />}
                </button>
              </a>

              <ContactLink
                icon={<Linkedin size={20} />}
                label="LinkedIn"
                value="linkedin.com/in/boni-adugna"
                href={contactInfo.linkedin}
                external
              />
              <ContactLink
                icon={<Github size={20} />}
                label="GitHub"
                value="github.com/Boniadgithub"
                href={contactInfo.github}
                external
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <a
                href={contactInfo.resumeUrl}
                download
                data-cursor-hover
                className="group flex items-center justify-center gap-2 rounded-xl border border-line bg-ink-primary/ p-4 text-sm font-medium text-ink-primary transition-colors hover:border-accent hover:bg-accent/5"
              >
                <Download size={18} className="text-ink-faint group-hover:text-accent" />
                Download Resume
              </a>
              <a
                href={contactInfo.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor-hover
                className="group flex items-center justify-center gap-2 rounded-xl border border-line bg-ink-primary/ p-4 text-sm font-medium text-ink-primary transition-colors hover:border-accent hover:bg-accent/5"
              >
                <Eye size={18} className="text-ink-faint group-hover:text-accent" />
                View Resume
              </a>
            </div>
          </motion.div>

          {/* Right Side: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="glass space-y-6 rounded-2xl p-6 md:p-8"
            >
              {/* Honeypot field for anti-spam */}
              <div className="hidden">
                <input type="text" {...register("honeypot")} tabIndex={-1} autoComplete="off" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-xs font-medium uppercase tracking-wider text-ink-faint">
                    Full Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    {...register("name")}
                    placeholder="Jane Doe"
                    className={`w-full rounded-xl border bg-ink-primary/ px-4 py-3 text-sm text-ink-primary placeholder:text-ink-faint focus:outline-none ${
                      errors.name ? "border-red-500 focus:border-red-500" : "border-line focus:border-accent"
                    }`}
                  />
                  {errors.name && <p className="text-xs text-red-500">{errors.name.message}</p>}
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-xs font-medium uppercase tracking-wider text-ink-faint">
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    {...register("email")}
                    placeholder="jane@example.com"
                    className={`w-full rounded-xl border bg-ink-primary/ px-4 py-3 text-sm text-ink-primary placeholder:text-ink-faint focus:outline-none ${
                      errors.email ? "border-red-500 focus:border-red-500" : "border-line focus:border-accent"
                    }`}
                  />
                  {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-xs font-medium uppercase tracking-wider text-ink-faint">
                  Subject
                </label>
                <input
                  id="subject"
                  type="text"
                  {...register("subject")}
                  placeholder="Project Inquiry"
                  className={`w-full rounded-xl border bg-ink-primary/ px-4 py-3 text-sm text-ink-primary placeholder:text-ink-faint focus:outline-none ${
                    errors.subject ? "border-red-500 focus:border-red-500" : "border-line focus:border-accent"
                  }`}
                />
                {errors.subject && <p className="text-xs text-red-500">{errors.subject.message}</p>}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-xs font-medium uppercase tracking-wider text-ink-faint">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  placeholder="Tell me about your project, timeline, and expectations..."
                  className={`w-full resize-none rounded-xl border bg-ink-primary/ px-4 py-3 text-sm text-ink-primary placeholder:text-ink-faint focus:outline-none ${
                    errors.message ? "border-red-500 focus:border-red-500" : "border-line focus:border-accent"
                  }`}
                />
                {errors.message && <p className="text-xs text-red-500">{errors.message.message}</p>}
              </div>

              <div className="pt-2">
                <MagneticButton className="w-full sm:w-auto" disabled={isSubmitting}>
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <Loader2 size={16} className="animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    "Send Message"
                  )}
                </MagneticButton>
              </div>
            </form>
          </motion.div>
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
      rel={external ? "noopener noreferrer" : undefined}
      data-cursor-hover
      className="group flex items-center justify-between rounded-2xl border border-line p-5 transition-colors hover:border-accent"
    >
      <span className="flex items-center gap-4">
        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink-primary/ text-ink-primary transition-colors group-hover:bg-accent/10 group-hover:text-accent">
          {icon}
        </span>
        <span>
          <span className="block text-xs uppercase tracking-wider text-ink-faint">
            {label}
          </span>
          <span className="block text-sm font-medium text-ink-primary">
            {value}
          </span>
        </span>
      </span>
      <ArrowUpRight
        size={18}
        className="text-ink-faint transition-colors group-hover:text-accent"
      />
    </a>
  );
}
