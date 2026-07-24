export default function Loading() {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-base">
      <div className="flex flex-col items-center gap-6">
        <div className="relative flex h-12 w-12 items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-line"></div>
          <div className="absolute inset-0 rounded-full border-2 border-accent border-t-transparent animate-spin"></div>
        </div>
        <div className="flex flex-col items-center gap-2">
          <p className="font-display text-sm font-semibold tracking-tight text-ink-primary">
            Bonsa<span className="text-accent">.</span>
          </p>
          <div className="h-1 w-24 overflow-hidden rounded-full bg-base-soft border border-line/50">
            <div className="h-full w-full bg-accent/80 origin-left animate-pulse" style={{ animationDuration: '1.5s' }}></div>
          </div>
        </div>
      </div>
    </div>
  );
}
