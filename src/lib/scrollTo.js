export function scrollTo(id) {
  const el = document.getElementById(id);
  if (!el) return;

  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  el.scrollIntoView({
    behavior: prefersReduced ? "instant" : "smooth",
    block: "start",
  });
}