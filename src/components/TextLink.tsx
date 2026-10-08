import type { ReactNode } from "react";

interface TextLinkProps {
  href: string;
  children: ReactNode;
  accent?: boolean;
  external?: boolean;
  className?: string;
}

// Inline link with a little padding offset by negative margin, so the focus
// ring has room and the text stays aligned with its neighbours
export default function TextLink({ href, children, accent = false, external = true, className = "" }: TextLinkProps) {
  const color = accent
    ? "text-accent-text hover:text-white"
    : "text-white/90 hover:text-white";

  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={`-mx-1 rounded-sm px-1 underline decoration-white/25 underline-offset-4 transition-colors duration-150 hover:decoration-current ${color} ${className}`}
    >
      {children}
      {external && <span className="sr-only"> (opens in a new tab)</span>}
    </a>
  );
}
