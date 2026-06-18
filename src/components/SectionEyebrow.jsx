import { twMerge } from "tailwind-merge";

export default function SectionEyebrow({ label, className = "" }) {
  return (
    <p className={twMerge("text-[0.658rem] uppercase tracking-[0.382em] text-white/[0.382]", className)}>
      {label}
    </p>
  );
}