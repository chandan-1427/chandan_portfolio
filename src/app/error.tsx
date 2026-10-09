"use client";

import Header from "@/components/Header";
import TextLink from "@/components/TextLink";
import { PROFILE } from "@/data/profile";

// Shown if something on a page fails while rendering. Rare on this mostly
// static site, but it gives visitors a way forward instead of a blank screen.
export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <>
      <Header name={PROFILE.name} base="/" />
      <main className="mx-auto max-w-[1080px] px-5 sm:px-8">
        <section className="py-24 md:py-32">
          <p className="text-[13px] font-medium uppercase tracking-[0.2em] text-accent-text">Error</p>
          <h1 className="mt-6 font-serif text-[clamp(40px,7vw,72px)] font-normal leading-tight text-white">
            Something went wrong.
          </h1>
          <p className="mt-5 max-w-[36rem] text-[17px] leading-relaxed text-white/80">
            The page didn&apos;t load properly. Trying again usually fixes it.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3">
            <button
              type="button"
              onClick={reset}
              className="h-10 rounded-md border border-white/[0.14] bg-white/[0.04] px-4 text-[14px] text-white/90 transition-[background-color,border-color,scale] duration-150 hover:border-white/[0.24] hover:bg-white/[0.08] active:scale-[0.96]"
            >
              Try again
            </button>
            <TextLink href="/" external={false} padded>
              Go to the homepage
            </TextLink>
          </div>
        </section>
      </main>
    </>
  );
}
