import About from "@/components/sections/About";
import Stats from "@/components/sections/Stats";
import Skills from "@/components/sections/Skills";
import Experience from "@/components/sections/Experience";
import Testimonials from "@/components/sections/Testimonials";

export const metadata = {
  title: "About Me",
  description: "Learn more about Bonsa Adugna's experience, background, and process in design and engineering.",
};

export default function AboutPage() {
  return (
    <div className="pt-20">
      <About condensed={false} />
      <Stats />
      <Skills />
      <Experience />
      <Testimonials />
    </div>
  );
}
