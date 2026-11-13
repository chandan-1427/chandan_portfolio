import Section from "@/components/Section";
import CopyEmail from "@/components/CopyEmail";
import { PROFILE, LINKS } from "@/data/profile";
import { GMAIL_COMPOSE_URL } from "@/lib/email";

export default function Contact() {
  return (
    <Section id="contact" label="Contact">
      <p className="text-[1.0625rem] leading-relaxed text-ink-80">
        Email is the best way to reach me, about a job or anything else.
      </p>

      <div className="mt-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-4 sm:justify-start sm:gap-x-4">
        <a
          href={GMAIL_COMPOSE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="-mx-1 min-w-0 rounded-sm px-1 font-serif [overflow-wrap:anywhere] text-[clamp(1rem,4.5vw,1.375rem)] sm:text-[1.5rem] text-fg underline decoration-fg/25 underline-offset-[6px] transition-colors duration-150 hover:decoration-fg"
        >
          {PROFILE.email}
          <span className="sr-only"> (opens Gmail in a new tab)</span>
        </a>
        <CopyEmail email={PROFILE.email} />
      </div>

      <ul className="rule-t mt-10">
        {LINKS.map((link) => (
          <li key={link.label} className="rule-b">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-3.5 text-[0.9375rem] sm:justify-start"
            >
              <span className="text-ink-60 sm:w-24">{link.label}</span>
              <span className="text-ink-90 underline decoration-fg/25 underline-offset-4 transition-colors duration-150 group-hover:text-fg group-hover:decoration-fg">
                {link.handle}
              </span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          </li>
        ))}
      </ul>
    </Section>
  );
}
