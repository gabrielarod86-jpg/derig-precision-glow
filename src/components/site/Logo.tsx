export function Logo({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <span className="text-display text-2xl tracking-tight">
        d<span className="text-[color:var(--orange)]">é</span>rig
      </span>
      <span className="hidden sm:inline text-[10px] uppercase tracking-[0.28em] text-muted-foreground border-l border-[color:var(--hairline)] pl-2">
        Implantes do Brasil
      </span>
    </div>
  );
}
