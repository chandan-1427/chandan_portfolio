import type { ReactNode } from "react";

interface TextLinkProps {
  href: string;
  children: ReactNode;
  accent?: boolean;
  external?: boolean;
  /** For links in a row: a padded hit area instead of gaps between links. Give the row matching negative margins. */
  padded?: boolean;
}

// Inline link with a little padding offset by negative margin, so the focus
// ring has room and the text stays aligned with its neighbours
export default function TextLink({ href, children, accent = false, external = true, padded = false }: TextLinkProps) {
  const color = accent
    ? "text-accent-text hover:text-white"
    : "text-white/90 hover:text-white";
  const spacing = padded ? "block px-2.5 py-2" : "-mx-1 px-1";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`${spacing} rounded-sm underline decoration-white/25 underline-offset-4 transition-colors duration-150 hover:decoration-current ${color}`}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
