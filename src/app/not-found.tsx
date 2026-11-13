import type { Metadata } from "next";
import TextLink from "@/components/TextLink";

export const metadata: Metadata = {
  title: "Page not found · Chandan",
};

export default function NotFound() {
  return (
    <main className="mx-auto max-w-[1080px] px-5 sm:px-8">
      <section className="py-24 md:py-32">
        <p className="text-[0.8125rem] font-medium uppercase tracking-[0.2em] text-accent-text">404</p>
        <h1 className="mt-6 font-serif text-[clamp(2.5rem,7vw,4.5rem)] font-extralight leading-tight text-fg">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-5 max-w-[36rem] text-[1.0625rem] leading-relaxed text-ink-80">
          The link may be broken, or the page may have moved.
        </p>

        <ul className="-mx-2.5 mt-6 flex flex-wrap text-[0.9375rem]">
          <li>
            <TextLink href="/" external={false} accent padded>
              Go to the homepage
            </TextLink>
          </li>
          <li>
            <TextLink href="/#work" external={false} padded>
              See my work
            </TextLink>
          </li>
        </ul>
      </section>
    </main>
  );
}
