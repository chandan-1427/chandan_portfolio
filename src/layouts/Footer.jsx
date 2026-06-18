import { scrollTo } from "../lib/scrollTo";

export const Footer = () => {
  return (
    <footer className="flex w-full flex-col items-center gap-2 pt-16 pb-24 md:pb-16">
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => scrollTo("hero")}
        className="group cursor-pointer select-none"
      >
        <span className="font-stalemate text-6xl tracking-wide text-white/20 transition-all duration-500 group-hover:text-white/60 active:text-white/80 md:text-8xl lg:text-9xl">
          Chandan
        </span>
      </button>
    </footer>
  );
}