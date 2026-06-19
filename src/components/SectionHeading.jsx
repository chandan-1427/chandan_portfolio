import { cn } from "../lib/cn";

export default function SectionHeading({ children, className = "" }) {
  return (
    <h2
      className={cn(
        "text-[1.418rem] leading-[1.2] text-white/[0.918] md:text-[2.218rem] md:leading-[1] lg:text-[3.236rem]",
        className
      )}
    >
      {children}
    </h2>
  );
}