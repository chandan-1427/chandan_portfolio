"use client";

import { useEffect, useState } from "react";

export const NAV = [
  { id: "work", label: "Work" },
  { id: "experience", label: "Experience" },
  { id: "about", label: "About" },
  { id: "contact", label: "Contact" },
];

// The section crossing the middle of the viewport is the current one
function useCurrentSection() {
  const [current, setCurrent] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          // The footer sits below Contact, so it keeps Contact highlighted
          if (entry.isIntersecting) setCurrent(entry.target.id === "site-footer" ? "contact" : entry.target.id);
        }
      },
      { rootMargin: "-50% 0px -50% 0px" }
    );

    for (const id of ["top", ...NAV.map((item) => item.id), "site-footer"]) {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    }
    return () => observer.disconnect();
  }, []);

  return current;
}

export default function Header({ name }: { name: string }) {
  const current = useCurrentSection();

  return (
    <header className="sticky top-0 z-40 bg-black/85 backdrop-blur-sm">
      <div className="mx-auto flex h-14 max-w-[1080px] items-center justify-between px-5 sm:px-8">
        <a
          href="#top"
          className="-mx-1 rounded-sm px-1 font-serif text-[17px] font-medium text-white"
        >
          {name}
        </a>

        <nav aria-label="Sections">
          {/* Links touch each other, so there is no dead space between targets */}
          <ul className="-mr-2.5 flex">
            {NAV.map((item) => {
              const isCurrent = current === item.id;
              return (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    aria-current={isCurrent ? "location" : undefined}
                    className={`block rounded-sm px-2 py-4 text-[13px] transition-colors duration-150 sm:px-2.5 ${
                      isCurrent ? "text-white" : "text-white/55 hover:text-white"
                    }`}
                  >
                    {item.label}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
