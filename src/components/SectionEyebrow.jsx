import { cn } from "../lib/cn";

export default function SectionEyebrow({ label, className = "" }) {
  return (
    <p className={cn("text-[0.758rem] uppercase tracking-[0.282em] text-white/[0.482]", className)}>
      {label}
    </p>
  );
}