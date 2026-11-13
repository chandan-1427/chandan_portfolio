import type { SVGProps } from "react";

// Drawn for this site on a 16×16 grid with a 1.5 stroke, so they match the copy check mark
const base: SVGProps<SVGSVGElement> = {
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round",
  strokeLinejoin: "round",
  "aria-hidden": true,
};

export type ThemeIconProps = SVGProps<SVGSVGElement> & { filled?: boolean };

// The closed shape of each icon fills in when it's the selected theme; open lines stay strokes
const body = (filled = false) => ({
  className: "icon-fill",
  fill: "currentColor",
  fillOpacity: filled ? 1 : 0,
});

export function SystemIcon({ filled, ...props }: ThemeIconProps) {
  return (
    <svg {...base} {...props}>
      <rect x="2" y="2.75" width="12" height="8.5" rx="1.5" />
      {/* The screen fills inside a 1px gap, so the frame still reads as a bezel */}
      <rect x="3.75" y="4.5" width="8.5" height="5" rx="0.25" stroke="none" {...body(filled)} />
      <path d="M8 11.25v2M5.5 13.25h5" />
    </svg>
  );
}

export function LightIcon({ filled, ...props }: ThemeIconProps) {
  return (
    <svg {...base} {...props}>
      <circle cx="8" cy="8" r="2.75" {...body(filled)} />
      <path d="M8 1.75v1.25M8 13v1.25M1.75 8H3M13 8h1.25M3.6 3.6l.9.9M11.5 11.5l.9.9M3.6 12.4l.9-.9M11.5 4.5l.9-.9" />
    </svg>
  );
}

export function DarkIcon({ filled, ...props }: ThemeIconProps) {
  return (
    <svg {...base} {...props}>
      {/* A 5.75 circle centred like the sun, with a 4.5 circle bitten out of the top right */}
      <path d="M7.6 2.27A5.75 5.75 0 1 0 13.73 8.4 4.5 4.5 0 0 1 7.6 2.27z" {...body(filled)} />
    </svg>
  );
}
