import { scrollTo } from "../lib/scrollTo";

export default function Footer() {
  return (
    <footer className="flex w-full flex-col items-center pt-16 pb-28 md:pb-16">
      <button
        type="button"
        aria-label="Back to top"
        onClick={() => scrollTo("hero")}
        className="group cursor-pointer select-none"
      >
        <span className="font-stalemate text-6xl tracking-wide text-white/20 transition-all duration-500 group-hover:text-white/50 active:text-white/70 md:text-8xl lg:text-9xl inline-block">
          Chandan
        </span>
      </button>
    </footer>
  );
}