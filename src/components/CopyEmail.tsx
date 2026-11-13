"use client";

import { useEffect, useRef, useState } from "react";
import { playDroplet } from "@/lib/sounds";

type CopyStatus = "idle" | "copied" | "failed";

const LABELS: Record<CopyStatus, string> = { idle: "Copy", copied: "Copied", failed: "Couldn't copy" };

const BURST_DOTS = 8;
const RESET_AFTER_MS = 2600;

const iconProps = {
  viewBox: "0 0 16 16",
  fill: "none",
  stroke: "currentColor",
  strokeLinecap: "round",
  strokeLinejoin: "round",
} as const;

export default function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<CopyStatus>("idle");
  // The fill only rises when the button turns blue; repeat clicks while it's blue just burst again
  const [flood, setFlood] = useState(0);
  const [burst, setBurst] = useState(0);
  const copied = status === "copied";

  const resetTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const writing = useRef(false);

  useEffect(() => () => clearTimeout(resetTimer.current), []);

  // Every click restarts the countdown, so rapid clicks never cut the celebration short
  const settle = (next: CopyStatus) => {
    setStatus(next);
    clearTimeout(resetTimer.current);
    resetTimer.current = setTimeout(() => setStatus("idle"), RESET_AFTER_MS);
  };

  const copy = async () => {
    // Ignore clicks that land while the clipboard write is still in flight
    if (writing.current) return;
    writing.current = true;
    try {
      await navigator.clipboard.writeText(email);
      if (!copied) setFlood((count) => count + 1);
      settle("copied");
      setBurst((count) => count + 1);
      playDroplet();
    } catch {
      settle("failed");
    } finally {
      writing.current = false;
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className={`raised relative inline-flex h-10 min-w-[6.5rem] shrink-0 items-center justify-center rounded-full pl-3.5 pr-4 text-[0.8125rem] font-medium transition-[background-color,color,scale] duration-150 active:scale-[0.96] ${
          copied ? "text-white" : "text-fg"
        }`}
      >
        {/* Blue fill that floods up from the bottom, clipped to the button's shape */}
        <span aria-hidden="true" className="copy-fill-clip">
          <span key={flood} className={`copy-fill ${copied ? "is-flooding" : ""}`}>
            <span className="copy-fill-wave" />
          </span>
        </span>

        <span className="relative inline-flex items-center gap-1.5">
          {/* Both icons stay mounted and cross-fade, so the swap never leaves an empty frame */}
          <span aria-hidden="true" className="relative size-3.5">
            <svg {...iconProps} strokeWidth="1.5" className={`copy-icon ${copied ? "is-hidden" : ""}`}>
              <rect x="5.75" y="5.75" width="7.5" height="7.5" rx="1.75" />
              <path d="M10.25 5.75V4.5a1.75 1.75 0 0 0-1.75-1.75H4.5A1.75 1.75 0 0 0 2.75 4.5v4a1.75 1.75 0 0 0 1.75 1.75h1.25" />
            </svg>
            <svg {...iconProps} strokeWidth="2" className={`copy-check ${copied ? "is-shown" : ""}`}>
              <path d="M3.5 8.5l3 3 6-7" />
            </svg>
            {copied && (
              <span key={burst} className="copy-burst">
                {Array.from({ length: BURST_DOTS }, (_, i) => (
                  <i key={i} style={{ "--angle": `${(360 / BURST_DOTS) * i}deg` }} />
                ))}
              </span>
            )}
          </span>
          {status === "failed" ? (
            LABELS.failed
          ) : (
            // Both labels share one grid cell, so the width fits "Copied" and the icon never shifts
            <span className="grid text-left">
              <span className={`col-start-1 row-start-1 ${copied ? "invisible" : ""}`}>{LABELS.idle}</span>
              <span className={`col-start-1 row-start-1 ${copied ? "" : "invisible"}`}>{LABELS.copied}</span>
            </span>
          )}
        </span>
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {copied ? "Email address copied" : status === "failed" ? "Couldn't copy the email address" : ""}
      </span>
    </>
  );
}
