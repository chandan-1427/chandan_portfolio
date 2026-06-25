import { cn } from "../lib/cn";

export default function MetaDataRow({ title, value = "", className = "" }) {
  return (
    <div className={cn("flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between", className)}>
      <h3 className="text-[0.955rem] font-medium text-white/80 pl-2.5 border-l-2 border-white/20">
        {title}
      </h3>
      {value && (
        <span className="w-fit shrink-0 text-xs tracking-wide text-white/50 sm:text-right">
          {value}
        </span>
      )}
    </div>
  );
}