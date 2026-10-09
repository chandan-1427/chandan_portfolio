"use client";

import { useEffect } from "react";

// In-page links (#work, #contact…) scroll to their section without putting the
// hash in the address bar. The hrefs stay real anchors, so they still work
// without JavaScript and when copied or opened in a new tab.
export default function HashlessAnchors() {
  useEffect(() => {
    // Arriving with a hash (e.g. a shared link): land on that section instantly,
    // then tidy the URL. Scrolling here doesn't rely on the browser having done it first.
    if (window.location.hash) {
      const target = document.getElementById(decodeURIComponent(window.location.hash.slice(1)));
      target?.scrollIntoView({ block: "start", behavior: "instant" });
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }

    const onClick = (event: MouseEvent) => {
      // Leave new-tab and other modified clicks to the browser
      if (event.defaultPrevented || event.button !== 0) return;
      if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

      const link = (event.target as Element).closest?.('a[href^="#"]');
      if (!link) return;
      const id = link.getAttribute("href")!.slice(1);
      const target = id && document.getElementById(id);
      if (!target) return;

      event.preventDefault();
      // Smooth or instant comes from CSS scroll-behavior, which respects reduced motion,
      // and scroll-margin keeps the section clear of the sticky header
      target.scrollIntoView({ block: "start" });
      // Move focus like a real anchor jump, so the next Tab continues from the section
      if (!target.hasAttribute("tabindex")) target.setAttribute("tabindex", "-1");
      target.focus({ preventScroll: true });
    };

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
