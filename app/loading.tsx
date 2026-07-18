export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-base">
      <div className="flex flex-col items-center gap-4">
        <div className="flex gap-1.5">
          <span className="h-2 w-2 animate-bounce rounded-full bg-accent [animation-delay:-0.3s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-accent [animation-delay:-0.15s]" />
          <span className="h-2 w-2 animate-bounce rounded-full bg-accent" />
        </div>
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-ink-faint">
          Loading
        </p>
      </div>
    </div>
  );
}
