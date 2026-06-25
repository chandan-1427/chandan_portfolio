import { cn } from "../lib/cn";

export default function Description({ desc, className = "" }) {
  return (
    <p className={cn("text-[0.925rem] leading-relaxed text-white/70", className)}>
      {desc}
    </p>
  );
}