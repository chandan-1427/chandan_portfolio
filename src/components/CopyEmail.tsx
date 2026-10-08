"use client";

import { useEffect, useState } from "react";

type CopyStatus = "idle" | "copied" | "failed";

const LABELS: Record<CopyStatus, string> = { idle: "Copy", copied: "Copied", failed: "Couldn't copy" };

// Feedback appears on the button itself, not in a separate notification
export default function CopyEmail({ email }: { email: string }) {
  const [status, setStatus] = useState<CopyStatus>("idle");

  useEffect(() => {
    if (status === "idle") return;
    const timeout = setTimeout(() => setStatus("idle"), 1800);
    return () => clearTimeout(timeout);
  }, [status]);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setStatus("copied");
    } catch {
      setStatus("failed");
    }
  };

  return (
    <>
      <button
        type="button"
        onClick={copy}
        className="h-10 min-w-[4.5rem] shrink-0 rounded-md border border-white/[0.14] bg-white/[0.04] px-4 text-[13px] sm:h-8 sm:px-3 text-white/90 transition-[background-color,border-color,scale] duration-150 hover:border-white/[0.24] hover:bg-white/[0.08] active:scale-[0.96]"
      >
        {LABELS[status]}
      </button>
      <span role="status" aria-live="polite" className="sr-only">
        {status === "copied" ? "Email address copied" : status === "failed" ? "Couldn't copy the email address" : ""}
      </span>
    </>
  );
}
