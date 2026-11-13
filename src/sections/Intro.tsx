import HeroIllustration from "@/components/HeroIllustration";
import TextLink from "@/components/TextLink";
import { PROFILE, LINKS } from "@/data/profile";
import { EXPERIENCE } from "@/data/experience";
import { PROJECTS } from "@/data/projects";
import { GMAIL_COMPOSE_URL } from "@/lib/email";

const LETTER_STAGGER = 40;

// Every claim in the intro links to something a reader can check.
// The URLs come from the experience and project data, and the build fails if one goes missing.
function required(url: string | undefined, what: string): string {
  if (!url) throw new Error(`Intro link for ${what} is missing from the data files`);
  return url;
}

const ABSTRABIT_URL = required(EXPERIENCE.find((item) => item.place === "Abstrabit Technologies")?.href, "Abstrabit");
const BINDU_URL = required(EXPERIENCE.find((item) => item.place === "Bindu")?.href, "Bindu");
const JYO_URL = required(PROJECTS.find((project) => project.name === "Jyo")?.live, "Jyo");

export default function Intro() {
  const letters = PROFILE.name.split("");
  const afterName = 120 + letters.length * LETTER_STAGGER;

  return (
    <section
      id="top"
      className="pb-16 pt-16 md:pb-24 md:pt-28 lg:grid lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-12"
    >
      <div>
        <h1
          aria-label={PROFILE.name}
          className="font-serif text-[clamp(3.5rem,11vw,7.5rem)] font-extralight leading-none tracking-tight text-fg"
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
          <p className="text-[clamp(1.1875rem,2.4vw,1.5rem)] leading-normal text-ink-90">
            I&apos;m a software engineer intern at <TextLink href={ABSTRABIT_URL}>Abstrabit</TextLink>, where I
            work mostly on the frontend.
          </p>
          <p className="text-[1rem] leading-relaxed text-ink-70">
            Before that, I was one of two engineers at <TextLink href={BINDU_URL}>Bindu</TextLink> and built their
            email agent for sorting job applications. On my own, I built <TextLink href={JYO_URL}>Jyo</TextLink>, a
            food-sharing app that people in Tirupati use.
          </p>
          <p className="text-[0.9375rem] text-ink-60">Based in Kadapa, India.</p>
        </div>

        <ul
          className="rise -mx-2.5 mt-6 flex flex-wrap text-[0.9375rem]"
          style={{ "--delay": `${afterName + 80}ms` }}
        >
          <li>
            <TextLink href={GMAIL_COMPOSE_URL} accent padded>
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
              Resume <span className="text-ink-60">PDF</span>
            </TextLink>
          </li>
        </ul>
      </div>

      {/* Desktop only: below lg there's no free column, and the text matters more */}
      <HeroIllustration className="rise hidden lg:block" style={{ "--delay": `${afterName + 160}ms` }} />
    </section>
  );
}
