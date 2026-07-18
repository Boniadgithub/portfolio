import Link from "next/link";
import MagneticButton from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center px-6 text-center">
      <p className="eyebrow">404</p>
      <h1 className="mt-4 font-display text-4xl font-semibold text-ink-primary sm:text-5xl">
        This page went missing.
      </h1>
      <p className="mt-4 max-w-md text-ink-secondary">
        The page you&apos;re looking for doesn&apos;t exist or has moved.
      </p>
      <div className="mt-8">
        <MagneticButton href="/">Back to home</MagneticButton>
      </div>
    </div>
  );
}
