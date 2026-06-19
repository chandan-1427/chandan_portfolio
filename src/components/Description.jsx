import { cn } from "../lib/cn";

export default function Description({ desc, className = "" }) {
  return (
    <p className={cn("text-[1rem] leading-[1.618] text-white/[0.618]", className)}>
      {desc}
    </p>
  );
}