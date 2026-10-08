import Section from "@/components/Section";
import CopyEmail from "@/components/CopyEmail";
import { PROFILE, LINKS } from "@/data/profile";

export default function Contact() {
  return (
    <Section id="contact" label="Contact">
      <p className="text-[17px] leading-relaxed text-white/80">
        Email is the best way to reach me, about a job or anything else.
      </p>

      {/* The address and its Copy button stay on one line, as one unit */}
      <div className="mt-5 flex items-center justify-between gap-3 sm:justify-start sm:gap-4">
        <a
          href={`mailto:${PROFILE.email}`}
          className="-mx-1 min-w-0 rounded-sm px-1 font-serif text-[clamp(18px,5vw,32px)] text-white underline decoration-white/25 underline-offset-[6px] transition-colors duration-150 hover:decoration-white"
        >
          {PROFILE.email}
        </a>
        <CopyEmail email={PROFILE.email} />
      </div>

      {/* Each row is one tap target, and the rows touch, so there are no dead gaps */}
      <ul className="mt-10 border-t border-white/[0.08]">
        {LINKS.map((link) => (
          <li key={link.label} className="border-b border-white/[0.08]">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center justify-between gap-4 py-3.5 text-[15px] sm:justify-start"
            >
              <span className="text-white/50 sm:w-24">{link.label}</span>
              <span className="text-white/90 underline decoration-white/25 underline-offset-4 transition-colors duration-150 group-hover:text-white group-hover:decoration-white">
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
