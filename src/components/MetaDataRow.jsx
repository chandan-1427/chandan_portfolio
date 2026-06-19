import { cn } from "../lib/cn";

export default function MetaDataRow({ title, value = "", className = "" }) {
  return (
    <div className="flex flex-col gap-[0.764rem] sm:flex-row sm:items-start sm:justify-between">
      <h3 className={cn("text-[1rem] font-medium leading-[1.2] text-white/[0.918]", className)}>
        {title}
      </h3>
      <span className={cn("w-fit shrink-0 text-[0.76rem] tracking-[0.06em] text-white/[0.618] sm:text-right", className)}>
        {value}
      </span>
    </div>
  );
}