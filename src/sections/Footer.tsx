import { PROFILE } from "@/data/profile";

const linkClass =
  "block rounded-sm px-2 py-2 text-white/55 underline decoration-white/20 underline-offset-4 transition-colors duration-150 hover:text-white hover:decoration-white";

export default function Footer() {
  return (
    <footer id="site-footer" className="pb-10 pt-10 sm:pb-12 sm:pt-12">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <p className="font-script text-[44px] leading-none text-white">{PROFILE.name}.</p>

        {/* Padded links that touch each other: bigger targets, no gaps */}
        <ul className="-mx-2 -mb-2 flex text-[14px]">
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
    </footer>
  );
}
