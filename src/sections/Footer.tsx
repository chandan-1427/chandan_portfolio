import ThemeToggle from "@/components/ThemeToggle";
import { PROFILE } from "@/data/profile";

const linkClass =
  "block rounded-sm px-2 py-2.5 text-ink-60 underline decoration-fg/20 underline-offset-4 transition-colors duration-150 hover:text-fg hover:decoration-fg sm:py-2";

export default function Footer() {
  return (
    <footer className="pb-10 pt-10 sm:pb-12 sm:pt-12">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <p className="font-script text-[2.75rem] leading-none text-fg">{PROFILE.name}.</p>

        <div className="flex flex-wrap items-center justify-between gap-x-4 gap-y-3 sm:justify-start">
          <ThemeToggle />
          <ul className="-mx-2 flex text-[0.875rem]">
            <li>
              <a href={PROFILE.source} target="_blank" rel="noopener noreferrer" className={linkClass}>
                Source code<span className="sr-only"> (opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href="#top" className={linkClass}>
                Back to top
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
