import TextLink from "@/components/TextLink";
import { PROFILE, LINKS } from "@/data/profile";

const LETTER_STAGGER = 40;

export default function Intro() {
  const letters = PROFILE.name.split("");
  const afterName = 120 + letters.length * LETTER_STAGGER;

  return (
    <section id="top" className="scroll-mt-14 pb-16 pt-16 md:pb-24 md:pt-28">
      <h1
        aria-label={PROFILE.name}
        className="font-serif text-[clamp(56px,11vw,120px)] font-normal leading-none tracking-tight text-white"
      >
        {letters.map((letter, index) => (
          <span
            key={index}
            aria-hidden="true"
            className="rise inline-block"
            style={{
              "--delay": `${120 + index * LETTER_STAGGER}ms`,
              "--rise-from": index % 2 === 0 ? "-18px" : "18px",
            }}
          >
            {letter}
          </span>
        ))}
      </h1>

      <div className="rise mt-8 max-w-[36rem] space-y-4" style={{ "--delay": `${afterName}ms` }}>
        <p className="text-[clamp(19px,2.4vw,24px)] leading-snug text-white/90">{PROFILE.intro}</p>
        <p className="text-[15px] text-white/55">{PROFILE.status}</p>
      </div>

      {/* Padded links that touch: bigger tap targets and no dead gaps between them.
          The negative margins keep the text aligned with the paragraph above. */}
      <ul
        className="rise -mx-2.5 mt-6 flex flex-wrap text-[15px]"
        style={{ "--delay": `${afterName + 80}ms` }}
      >
        <li>
          <TextLink href={`mailto:${PROFILE.email}`} external={false} accent padded>
            Email
          </TextLink>
        </li>
        {LINKS.slice(0, 2).map((link) => (
          <li key={link.label}>
            <TextLink href={link.href} padded>{link.label}</TextLink>
          </li>
        ))}
        <li>
          <TextLink href={PROFILE.resume} padded>
            Resume <span className="text-white/50">PDF</span>
          </TextLink>
        </li>
      </ul>
    </section>
  );
}
