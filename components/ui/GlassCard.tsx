import { cn } from "@/lib/utils";

export default function GlassCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={cn("glass card-hover rounded-2xl p-6", className)}>
      {children}
    </div>
  );
}
