const LINES = [
  "M -60,870 C 80,330 280,210 520,175 S 780,155 1000,148",
  "M -60,870 C 80,362 275,245 515,210 S 778,192 1000,186",
  "M -60,870 C 82,394 272,278 510,246 S 775,228 1000,223",
  "M -60,870 C 84,428 268,312 505,282 S 772,265 1000,260",
  "M -60,870 C 86,460 264,346 500,318 S 769,302 1000,297",
  "M -60,870 C 88,492 260,380 495,354 S 766,339 1000,334",
  "M -60,870 C 90,524 256,414 490,390 S 763,376 1000,371",
  "M -60,870 C 92,556 252,448 485,426 S 760,413 1000,408",
  "M -60,865 C 94,588 248,482 480,462 S 757,450 1000,445",
  "M -60,859 C 96,620 244,516 475,498 S 754,487 1000,482",
  "M -60,850 C 98,652 240,550 470,534 S 751,524 1000,519",
];

export default function SquigglyLines() {
  return (
    <svg
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1000 750"
      preserveAspectRatio="xMaxYMax meet"
      className="pointer-events-none fixed bottom-0 right-0 z-0 h-[65vh] w-full opacity-[0.13]"
      style={{ transform: "scaleX(-1)" }}
    >
      <g fill="none" stroke="white" strokeWidth="1">
        {LINES.map((d, i) => (
          <path key={i} d={d} />
        ))}
      </g>
    </svg>
  );
}