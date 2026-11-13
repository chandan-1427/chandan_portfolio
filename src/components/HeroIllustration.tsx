import type { CSSProperties } from "react";

// A browser showing a page wireframe, a pointer on its button and a chat bubble greeting the visitor.
// Drawn at 1:1 with the same 1.5 stroke as the icons, in theme colours, with blue only on the button.
export default function HeroIllustration({ className = "", style }: { className?: string; style?: CSSProperties }) {
  return (
    <svg
      viewBox="0 0 360 256"
      width="360"
      height="256"
      aria-hidden="true"
      className={className}
      style={style}
      fill="none"
      overflow="visible"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* The two floating layers get a soft shadow; the bubble sits one layer higher, so its shadow is larger */}
      <g className="hero-raised">
        {/* Browser window */}
        <rect x="16" y="16" width="304" height="208" rx="14" className="fill-[var(--raised-bg)] stroke-fg/[0.14]" />
        <path d="M16 48h304" className="stroke-fg/[0.1]" />
        <circle cx="36" cy="32" r="4" className="fill-fg/[0.18]" />
        <circle cx="50" cy="32" r="4" className="fill-fg/[0.18]" />
        <circle cx="64" cy="32" r="4" className="fill-fg/[0.18]" />
        <rect x="104" y="25" width="128" height="14" rx="7" className="fill-fg/[0.06]" />

        {/* Page wireframe: a heading, a paragraph and two buttons */}
        <rect x="40" y="72" width="112" height="16" rx="8" className="fill-fg/80" />
        <rect x="40" y="102" width="168" height="6" rx="3" className="fill-fg/[0.2]" />
        <rect x="40" y="116" width="148" height="6" rx="3" className="fill-fg/[0.2]" />
        <rect x="40" y="130" width="160" height="6" rx="3" className="fill-fg/[0.2]" />
        <rect x="40" y="156" width="80" height="26" rx="13" className="fill-accent-text" />
        <rect x="58" y="166" width="44" height="6" rx="3" className="fill-[var(--color-bg)]" />
        <rect x="128" y="156" width="64" height="26" rx="13" className="stroke-fg/[0.2]" />

        {/* Profile card: avatar, name, role and two tags, like the stack chips in Work */}
        <rect x="224" y="72" width="72" height="110" rx="10" className="fill-fg/[0.05]" />
        <defs>
          <clipPath id="hero-avatar">
            <circle cx="260" cy="103" r="14" />
          </clipPath>
        </defs>
        <circle cx="260" cy="103" r="14" className="fill-fg/[0.1]" />
        <g clipPath="url(#hero-avatar)" className="fill-fg/[0.35]">
          <circle cx="260" cy="99" r="5.5" />
          <ellipse cx="260" cy="118" rx="10" ry="7" />
        </g>
        <rect x="242" y="127" width="36" height="6" rx="3" className="fill-fg/50" />
        <rect x="248" y="139" width="24" height="4" rx="2" className="fill-fg/[0.2]" />
        <rect x="234" y="155" width="24" height="10" rx="3" className="fill-fg/[0.1]" />
        <rect x="262" y="155" width="24" height="10" rx="3" className="fill-fg/[0.1]" />

        {/* Pointer resting on the button, outlined in the page colour so it reads on both */}
        <path d="M108 170v20l5.2-5 3.6 8.2 3.4-1.5-3.5-8h7.3z" className="fill-fg stroke-[var(--color-bg)]" />
      </g>

      <g className="hero-raised hero-raised-high">
        {/* Chat bubble greeting the visitor; the small bottom-right corner marks who's speaking */}
        <path
          d="M198 196H322A22 22 0 0 1 344 218V234A6 6 0 0 1 338 240H198A22 22 0 0 1 176 218A22 22 0 0 1 198 196Z"
          className="fill-[var(--raised-bg)] stroke-fg/[0.14]"
        />
        <text x="260" y="222.5" textAnchor="middle" fontSize="13" className="fill-fg/90">
          How&apos;s your day going?
        </text>
      </g>
    </svg>
  );
}
