import { cn } from "../lib/cn";

export default function SectionEyebrow({ label, className = "" }) {
  return (
    <p className={cn("text-[0.758rem] uppercase tracking-[0.282em] text-white/80 font-medium", className)}>
      <span
        className="box-decoration-clone px-[0.35em] py-[0.15em]"
        style={{ backgroundColor: "rgba(51, 112, 209, 0.55)" }}
      >
        {label}
      </span>
    </p>
  );
}