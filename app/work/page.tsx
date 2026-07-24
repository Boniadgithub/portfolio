import Projects from "@/components/sections/Projects";

export const metadata = {
  title: "My Work & Case Studies",
  description: "Browse selected projects across product design and full-stack software development by Bonsa Adugna.",
};

export default function WorkPage() {
  return (
    <div className="pt-20">
      <Projects />
    </div>
  );
}
