import Hero from "@/components/sections/Hero";
import FeaturedProject from "@/components/sections/FeaturedProject";
import TechCarousel from "@/components/sections/TechCarousel";
import About from "@/components/sections/About";
import ProjectCard from "@/components/sections/ProjectCard";
import CTA from "@/components/sections/CTA";
import VideoSection from "@/components/sections/VideoSection";
import SectionHeading from "@/components/ui/SectionHeading";
import MagneticButton from "@/components/ui/MagneticButton";
import { ArrowRight } from "lucide-react";
import { projects } from "@/lib/data";

export default function Home() {
  // Select first 3 projects for the home page index
  const selectedProjects = projects.slice(0, 3);

  return (
    <>
      <Hero />
      <FeaturedProject />
      <TechCarousel />
      
      {/* Short condensed About section */}
      <About condensed={true} />

      {/* Selected Projects Grid */}
      <section className="section-py relative bg-base">
        <div className="container-px mx-auto max-w-7xl">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <SectionHeading
              eyebrow="Selected Work"
              title="A few cases I've recently delivered"
              description="A curated index of designs and development builds. Click on any card to view the case study."
            />
            <div className="shrink-0 md:pb-1">
              <MagneticButton href="/work">
                View All Work <ArrowRight size={18} />
              </MagneticButton>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {selectedProjects.map((project, i) => (
              <ProjectCard key={project.slug} project={project} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* Video Section */}
      <VideoSection />

      {/* Brand CTA */}
      <CTA />
    </>
  );
}
