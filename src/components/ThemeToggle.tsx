"use client";

import { useState, useSyncExternalStore, type ComponentType } from "react";
import { playThemeTick } from "@/lib/sounds";
import { DarkIcon, LightIcon, SystemIcon, type ThemeIconProps } from "./ThemeIcons";

type Theme = "system" | "light" | "dark";

const OPTIONS: { value: Theme; label: string; Icon: ComponentType<ThemeIconProps> }[] = [
  { value: "system", label: "Use system theme", Icon: SystemIcon },
  { value: "light", label: "Light theme", Icon: LightIcon },
  { value: "dark", label: "Dark theme", Icon: DarkIcon },
];

const EVENT = "themechange";

function subscribe(onChange: () => void) {
  window.addEventListener(EVENT, onChange);
  return () => window.removeEventListener(EVENT, onChange);
}

const getTheme = (): Theme => (document.documentElement.dataset.theme as Theme | undefined) ?? "system";

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  // Switching themes shouldn't set off hover transitions, so pause them for one frame
  root.classList.add("theme-switching");

  if (theme === "system") delete root.dataset.theme;
  else root.dataset.theme = theme;

  try {
    if (theme === "system") localStorage.removeItem("theme");
    else localStorage.setItem("theme", theme);
  } catch {
    // Storage can be blocked; the choice still applies until the page reloads
  }

  requestAnimationFrame(() => requestAnimationFrame(() => root.classList.remove("theme-switching")));
  window.dispatchEvent(new Event(EVENT));
}

export default function ThemeToggle() {
  const theme = useSyncExternalStore(subscribe, getTheme, () => "system" as Theme);
  const [dir, setDir] = useState<"left" | "right">();
  const index = OPTIONS.findIndex((option) => option.value === theme);

  function select(value: Theme, next: number) {
    if (value === theme) return;
    setDir(next > index ? "right" : "left");
    applyTheme(value);
    playThemeTick(value);
  }

  return (
    <div role="group" aria-label="Theme" className="relative flex rounded-full bg-fg/[0.06] p-1 [--slot:2.5rem] sm:[--slot:2rem]">
      <span
        aria-hidden="true"
        data-dir={dir}
        className="theme-pill raised absolute inset-y-1 rounded-full"
        style={{ left: `calc(0.25rem + ${index} * var(--slot))`, right: `calc(0.25rem + ${OPTIONS.length - 1 - index} * var(--slot))` }}
      />
      {OPTIONS.map(({ value, label, Icon }, i) => {
        const active = theme === value;
        return (
          <button
            key={value}
            type="button"
            aria-label={label}
            aria-pressed={active}
            onClick={() => select(value, i)}
            className={`relative flex size-10 items-center justify-center rounded-full transition-colors duration-150 sm:size-8 ${
              active ? "text-fg" : "text-ink-60 hover:text-fg"
            }`}
          >
            <Icon className="size-4" filled={active} />
          </button>
        );
      })}
    </div>
  );
}
