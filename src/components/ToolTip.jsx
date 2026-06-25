import { cn } from "../lib/cn";

const positions = {
  top: "left-1/2 top-[-2.4rem] -translate-x-1/2 group-hover:top-[-2.7rem] duration-200",
  left: "right-[120%] top-1/2 -translate-y-1/2 group-hover:right-[135%] duration-300",
  "top-compact": "left-1/2 top-[-2.2rem] z-20 -translate-x-1/2 group-hover:top-[-2.5rem] duration-200",
};

export default function Tooltip({ label, position = "top", className = "" }) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute z-30 whitespace-nowrap rounded-md border border-white/[0.08] bg-[#1a1a1a] px-2.5 py-1 text-[0.7rem] tracking-wide text-white/70 opacity-0 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.4)] transition-all group-hover:opacity-100",
        positions[position],
        className
      )}
    >
      {label}
    </span>
  );
}