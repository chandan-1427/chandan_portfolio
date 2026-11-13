"use client";

import TextLink from "@/components/TextLink";

export default function ErrorPage({ reset }: { error: Error & { digest?: string }; reset: () => void }) {
  return (
    <main className="mx-auto max-w-[1080px] px-5 sm:px-8">
      <section className="py-24 md:py-32">
        <p className="text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-accent-text">Error</p>
        <h1 className="mt-6 font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-extralight leading-tight text-fg">
          Something went wrong.
        </h1>
        <p className="mt-5 max-w-[36rem] text-[1.0625rem] leading-relaxed text-ink-80">
          The page didn&apos;t load properly. Trying again usually fixes it.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-x-2 gap-y-3">
          <button
            type="button"
            onClick={reset}
            className="raised h-10 rounded-full px-5 text-[0.875rem] font-medium text-fg transition-[background-color,scale] duration-150 active:scale-[0.96]"
          >
            Try again
          </button>
          <TextLink href="/" external={false} padded>
            Go to the homepage
          </TextLink>
        </div>
      </section>
    </main>
  );
}
