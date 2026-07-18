import RevealText from "./RevealText";

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
}: {
  eyebrow: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}) {
  return (
    <div className={align === "center" ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <RevealText as="p" className="eyebrow">
        {eyebrow}
      </RevealText>
      <RevealText
        as="h2"
        delay={0.05}
        className="mt-4 font-display text-3xl font-semibold tracking-tight text-ink-primary md:text-5xl"
      >
        {title}
      </RevealText>
      {description && (
        <RevealText as="p" delay={0.1} className="mt-5 text-base leading-relaxed text-ink-secondary md:text-lg">
          {description}
        </RevealText>
      )}
    </div>
  );
}
