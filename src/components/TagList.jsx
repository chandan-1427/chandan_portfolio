import { cn } from "../lib/cn";

export default function TagList({ tags, className = "" }) {
  return (
    <div className={`flex flex-wrap gap-[0.764rem] ${className}`}>
      {tags.map((tag) => (
        <span
          key={tag}
          className={cn("rounded-[0.3rem] border border-white/[0.146] bg-white/[0.056] px-[0.764rem] py-[0.382rem] text-[0.78rem] tracking-wide text-white/[0.618]", className)}
        >
          {tag}
        </span>
      ))}
    </div>
  );
}