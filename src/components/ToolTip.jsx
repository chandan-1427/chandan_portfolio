import { cn } from "../lib/cn";

const positions = {
  top: "left-1/2 top-[-2.4rem] -translate-x-1/2 group-hover:top-[-2.7rem] duration-200",
  left: "right-[120%] top-1/2 -translate-y-1/2 group-hover:right-[135%] duration-300",
  "top-compact": "left-1/2 top-[-2.2rem] z-20 -translate-x-1/2 px-[0.55rem] py-[0.3rem] text-white/[0.75] group-hover:top-[-2.5rem] duration-200",
};

export default function Tooltip({ label, position = "top", className = "" }) {
  return (
    <span
      className={cn(
        "pointer-events-none absolute z-30 whitespace-nowrap rounded-[0.3rem] border border-white/[0.12] bg-[#111111] px-[0.764rem] py-[0.382rem] text-[0.7rem] tracking-wide text-white/[0.78] opacity-0 shadow-lg transition-all group-hover:opacity-100",
        positions[position],
        className
      )}
    >
      {label}
    </span>
  );
}