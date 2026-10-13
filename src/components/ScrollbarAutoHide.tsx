"use client";

import { useEffect } from "react";

const HIDE_AFTER_MS = 1000;
// How close (in px) the pointer must get to the right edge to reveal the scrollbar
const EDGE_ZONE = 24;

// Classic scrollbars (Windows) can't be made overlay-style with CSS, so this hides the
// thumb while idle and shows it while scrolling or when the pointer approaches it,
// so it can still be grabbed and dragged.
export default function ScrollbarAutoHide() {
  useEffect(() => {
    const root = document.documentElement;
    let hideTimer: ReturnType<typeof setTimeout> | undefined;
    let nearEdge = false;

    const show = () => {
      root.dataset.scrollbar = "active";
      clearTimeout(hideTimer);
      hideTimer = setTimeout(() => {
        if (!nearEdge) root.dataset.scrollbar = "idle";
      }, HIDE_AFTER_MS);
    };

    const onPointerMove = (event: PointerEvent) => {
      const wasNear = nearEdge;
      nearEdge = event.pointerType === "mouse" && event.clientX >= root.clientWidth - EDGE_ZONE;
      if (nearEdge) show();
      else if (wasNear) show(); // start the hide countdown after leaving the edge
    };

    root.dataset.scrollbar = "idle";
    window.addEventListener("scroll", show, { passive: true });
    window.addEventListener("pointermove", onPointerMove, { passive: true });

    return () => {
      clearTimeout(hideTimer);
      window.removeEventListener("scroll", show);
      window.removeEventListener("pointermove", onPointerMove);
      delete root.dataset.scrollbar;
    };
  }, []);

  return null;
}
