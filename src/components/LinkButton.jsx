import { cn } from "../lib/cn";

export default function LinkButton({ href, variant = "code", children, className = "" }) {
  const variants = {
    live: "bg-white/[0.08] text-white/90 border-white/[0.12] shadow-[inset_0_0px_0_0_rgba(255,255,255,0.10),0_4px_8px_-2px_rgba(0,0,0,0.2)] hover:bg-white/[0.12] hover:text-white hover:border-white/[0.16] active:bg-white/[0.06] active:shadow-none",
    code: "bg-white/[0.04] text-white/60 border-white/[0.08] shadow-[inset_0_0px_0_0_rgba(255,255,255,0.06),0_4px_8px_-2px_rgba(0,0,0,0.2)] hover:bg-white/[0.07] hover:text-white/70 hover:border-white/[0.12] active:bg-white/[0.03] active:shadow-none",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "group relative flex w-fit shrink-0 items-center gap-1.5 rounded-md border px-3 py-1.5 text-xs tracking-wide transition-all duration-200",
        variants[variant],
        className
      )}
    >
      {children}
    </a>
  );
}