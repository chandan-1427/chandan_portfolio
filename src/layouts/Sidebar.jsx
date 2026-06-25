import { useCallback } from "react";
import { scrollTo } from "../lib/scrollTo";
import Tooltip from "../components/ToolTip";

const LINKS = [
  { id: "hero",     label: "Hero"     },
  { id: "about",    label: "About"    },
  { id: "skills",   label: "Skills"   },
  { id: "projects", label: "Projects" },
  { id: "contact",  label: "Contact"  },
];

function NavButton({ item, variant, onClick }) {
  if (variant === "desktop") {
    return (
      <button
        type="button"
        aria-label={`Navigate to ${item.label}`}
        onClick={() => onClick(item.id)}
        className="group relative flex h-10 w-10 items-center justify-center rounded-md border border-white/[0.08] bg-white/[0.04] shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06)] transition-all duration-200 hover:border-white/[0.14] hover:bg-white/[0.08] hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_4px_8px_-2px_rgba(0,0,0,0.2)] active:bg-white/[0.03] active:shadow-none"
      >
        <span className="text-[0.72rem] uppercase tracking-widest text-white/60 transition-colors duration-200 group-hover:text-white/90">
          {item.label.charAt(0)}
        </span>
        <Tooltip label={item.label} position="left" />
      </button>
    );
  }

  return (
    <button
      type="button"
      aria-label={`Navigate to ${item.label}`}
      onClick={() => onClick(item.id)}
      className="group flex min-w-0 flex-1 flex-col items-center justify-center gap-1 rounded-md px-1.5 py-2 transition-all duration-150 hover:bg-white/[0.06] active:bg-white/[0.04]"
    >
      <span className="text-[0.72rem] uppercase tracking-widest text-white/50 transition-colors duration-150 group-hover:text-white/80">
        {item.label.charAt(0)}
      </span>
      <span className="truncate text-[0.52rem] uppercase tracking-widest text-white/30 transition-colors duration-150 group-hover:text-white/50">
        {item.label}
      </span>
    </button>
  );
}

export default function Sidebar() {
  const handleClick = useCallback((id) => scrollTo(id), []);

  return (
    <>
      {/* Desktop Sidebar — glass */}
      <aside className="pointer-events-none fixed right-6 top-1/2 z-50 hidden -translate-y-1/2 lg:flex">
        <div className="pointer-events-auto rounded-lg border border-white/[0.08] bg-white/[0.04] p-2 backdrop-blur-md shadow-[inset_0_1px_0_0_rgba(255,255,255,0.06),0_8px_16px_-4px_rgba(0,0,0,0.25)]">
          <nav className="flex flex-col gap-1.5">
            {LINKS.map((item) => (
              <NavButton key={item.id} item={item} variant="desktop" onClick={handleClick} />
            ))}
          </nav>
        </div>
      </aside>

      {/* Mobile Bottom Navigation — Supabase style */}
      <nav className="fixed bottom-4 left-1/2 z-50 flex w-[calc(100%-2rem)] max-w-[28rem] -translate-x-1/2 items-center justify-between rounded-xl border border-white/[0.08] bg-[#1a1a1a] px-2 py-1 lg:hidden">
        {LINKS.map((item) => (
          <NavButton key={item.id} item={item} variant="mobile" onClick={handleClick} />
        ))}
      </nav>
    </>
  );
}