// Interface sounds generated with the Web Audio API (no audio files).
// Each one is an extra on top of visual feedback, and they're silent with reduced motion.
let context: AudioContext | undefined;

function play(build: (context: AudioContext, now: number) => void) {
  if (typeof window === "undefined") return;
  if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

  try {
    context ??= new AudioContext();
    // Browsers can suspend an idle audio context; wake it so every click is heard
    if (context.state === "suspended") void context.resume();
    build(context, context.currentTime);
  } catch {
    // Sound is optional, so a blocked or missing audio context is ignored
  }
}

function tone(context: AudioContext, now: number, from: number, to: number, sweep: number, peak: number, length: number) {
  const oscillator = context.createOscillator();
  const gain = context.createGain();

  oscillator.type = "sine";
  oscillator.frequency.setValueAtTime(from, now);
  oscillator.frequency.exponentialRampToValueAtTime(to, now + sweep);

  gain.gain.setValueAtTime(0.0001, now);
  gain.gain.exponentialRampToValueAtTime(peak, now + 0.005);
  gain.gain.exponentialRampToValueAtTime(0.0001, now + length);

  oscillator.connect(gain).connect(context.destination);
  oscillator.start(now);
  oscillator.stop(now + length + 0.02);
}

// Copy button: a water-droplet "bloop", a sine whose pitch sweeps quickly upward
export function playDroplet() {
  play((context, now) => tone(context, now, 320, 1200, 0.09, 0.22, 0.16));
}

// Theme toggle: a short tick, pitched higher for light and lower for dark.
// Shorter than the droplet because people may flip themes several times in a row.
const THEME_PITCH = { light: 1040, system: 780, dark: 560 } as const;

export function playThemeTick(theme: keyof typeof THEME_PITCH) {
  const pitch = THEME_PITCH[theme];
  play((context, now) => tone(context, now, pitch, pitch * 0.7, 0.04, 0.3, 0.1));
}
