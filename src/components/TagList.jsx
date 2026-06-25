import { cn } from "../lib/cn";

export default function TagList({ tags, className = "" }) {
  return (
    <div className={cn("flex flex-wrap gap-2", className)}>
      {tags.map((tag) => (
        <span
          key={tag}
          className="rounded-md border border-white/[0.08] bg-white/[0.06] px-3 py-1.5 text-xs tracking-wide text-white/70 shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
        >
          {tag}
        </span>
      ))}
    </div>
  );
}