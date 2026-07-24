import { experience, awards, contactInfo } from "@/lib/data";
import { skills } from "@/lib/data/skills";
import { Download, ExternalLink, Calendar, Award, Code, Palette, Briefcase, FileText } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

export const metadata = {
  title: "Professional Resume",
  description: "Bonsa Adugna's professional experience, skills, and background in software engineering and product design.",
};

export default function ResumePage() {
  return (
    <div className="pt-20 bg-base min-h-screen pb-24">
      <div className="container-px mx-auto max-w-5xl">
        {/* Header Section */}
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between py-12 border-b border-line">
          <div>
            <SectionHeading eyebrow="Résumé" title="Professional Background" />
            <p className="mt-3 text-ink-secondary text-lg max-w-xl">
              Software Engineer & Product Designer bridging the gap between high-fidelity interface design and production-grade code.
            </p>
          </div>
          
          <a
            href={contactInfo.resumeUrl}
            download
            data-cursor-hover
            className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-3.5 text-sm font-semibold text-white transition-transform hover:scale-[1.03] active:scale-[0.98] shadow-md shadow-accent/20 w-fit"
          >
            <Download size={18} />
            Download PDF
          </a>
        </div>

        {/* Resume Content Layout */}
        <div className="mt-16 grid gap-12 lg:grid-cols-[1.6fr_1fr]">
          
          {/* Left Column: Experience & Awards */}
          <div className="space-y-12">
            <div>
              <h3 className="font-display text-2xl font-bold text-ink-primary flex items-center gap-3 mb-8">
                <Briefcase className="text-accent" size={24} />
                Work Experience
              </h3>
              
              <div className="relative border-l border-line pl-6 space-y-10">
                {experience.map((job) => (
                  <div key={job.title + job.org} className="relative group">
                    {/* Circle bullet indicator */}
                    <span className="absolute -left-[31px] top-1.5 h-4 w-4 rounded-full border-2 border-accent bg-base transition-transform group-hover:scale-125" />
                    
                    <span className="text-xs font-mono text-accent uppercase tracking-wider block mb-1">
                      {job.period}
                    </span>
                    <h4 className="text-xl font-bold text-ink-primary font-display">
                      {job.title}
                    </h4>
                    <p className="text-sm text-ink-secondary font-medium mt-0.5">
                      {job.org}
                    </p>
                    <p className="mt-3 text-sm text-ink-secondary leading-relaxed font-light">
                      {job.description}
                    </p>
                    <div className="mt-4 flex flex-wrap gap-1.5">
                      {job.tags.map((tag) => (
                        <span 
                          key={tag} 
                          className="rounded-md border border-line bg-base-soft px-2 py-0.5 text-xs text-ink-secondary font-mono"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Awards & Certifications */}
            <div>
              <h3 className="font-display text-2xl font-bold text-ink-primary flex items-center gap-3 mb-8">
                <Award className="text-accent" size={24} />
                Awards & Achievements
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {awards.map((award) => (
                  <div 
                    key={award.title}
                    className="p-5 rounded-2xl border border-line bg-base-soft/40 hover:bg-base-soft/60 transition-colors"
                  >
                    <span className="text-xs font-mono text-accent block mb-2">{award.year}</span>
                    <h4 className="font-bold text-ink-primary font-display text-base leading-snug">{award.title}</h4>
                    <p className="text-xs text-ink-secondary mt-1">{award.org}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: Skills & Technical Stack */}
          <div className="space-y-12">
            <div>
              <h3 className="font-display text-2xl font-bold text-ink-primary flex items-center gap-3 mb-8">
                <Code className="text-accent" size={24} />
                Technical Stack
              </h3>
              
              <div className="rounded-3xl border border-line bg-base-soft/30 p-6 md:p-8 space-y-6">
                <div>
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink-faint flex items-center gap-2 mb-4">
                    <Code size={14} className="text-accent" />
                    Engineering
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.slice(0, 10).map((skill) => (
                      <span 
                        key={skill.id}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-base px-3 py-1.5 text-xs font-medium text-ink-secondary shadow-sm"
                      >
                        <span 
                          className="w-3 h-3 flex-shrink-0"
                          dangerouslySetInnerHTML={{ __html: skill.icon }}
                        />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-line/60 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink-faint flex items-center gap-2 mb-4">
                    <Palette size={14} className="text-accent" />
                    Design & Strategy
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.slice(10, 16).map((skill) => (
                      <span 
                        key={skill.id}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-base px-3 py-1.5 text-xs font-medium text-ink-secondary shadow-sm"
                      >
                        <span 
                          className="w-3 h-3 flex-shrink-0"
                          dangerouslySetInnerHTML={{ __html: skill.icon }}
                        />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="border-t border-line/60 pt-6">
                  <h4 className="text-xs font-bold uppercase tracking-wider text-ink-faint flex items-center gap-2 mb-4">
                    <FileText size={14} className="text-accent" />
                    Other Tools
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {skills.slice(16).map((skill) => (
                      <span 
                        key={skill.id}
                        className="inline-flex items-center gap-1.5 rounded-full border border-line bg-base px-3 py-1.5 text-xs font-medium text-ink-secondary shadow-sm"
                      >
                        <span 
                          className="w-3 h-3 flex-shrink-0"
                          dangerouslySetInnerHTML={{ __html: skill.icon }}
                        />
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Education Callout */}
            <div className="rounded-3xl border border-line bg-base-soft/30 p-6 md:p-8">
              <h3 className="font-display text-lg font-bold text-ink-primary mb-4">
                Education
              </h3>
              <div>
                <span className="text-xs font-mono text-accent">2020 — 2024</span>
                <h4 className="font-bold font-display text-base text-ink-primary mt-1">B.Sc. in Computer Science & Engineering</h4>
                <p className="text-xs text-ink-secondary mt-1">Adama Science and Technology University</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
