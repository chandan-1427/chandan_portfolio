import { twMerge } from "tailwind-merge";

export default function Description({ desc, className = "" }) {
  return (
    <p className={twMerge("text-[1rem] leading-[1.618] text-white/[0.618]", className)}>
      {desc}
    </p>
  );
}