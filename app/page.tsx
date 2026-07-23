import Hero from "@/components/sections/Hero";
import FeaturedProject from "@/components/sections/FeaturedProject";
import TechCarousel from "@/components/sections/TechCarousel";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";


export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProject />
      <TechCarousel />
      <About />
      <Projects />
      <Process />
      <Skills />
      <Experience />
      <Testimonials />
      <Contact />
    </>
  );
}
