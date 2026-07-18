import { cn } from "@/lib/utils";
import RevealText from "@/components/ui/RevealText";

export default function CaseStudySection({
  eyebrow,
  title,
  children,
  last,
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  last?: boolean;
}) {
  return (
    <section
      className={cn(
        "grid gap-6 py-14 md:grid-cols-[220px_1fr] md:gap-12 md:py-16",
        !last && "border-b border-line"
      )}
    >
      <div>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-3 font-display text-2xl font-semibold text-ink-primary">
          {title}
        </h2>
      </div>
      <div className="max-w-2xl space-y-4 text-base leading-relaxed text-ink-secondary">
        <RevealText>{children}</RevealText>
      </div>
    </section>
  );
}
