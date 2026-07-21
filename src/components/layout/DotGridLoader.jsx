export default function DotGridLoader({ visible }) {
  const cols = 6;
  const rows = 6;
  const dots = Array.from({ length: cols * rows });

  return (
    <div
      aria-hidden={!visible}
      className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-500 ${
        visible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      style={{ backgroundColor: "var(--color-bg)" }}
    >
      <div
        className="grid gap-2.5"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {dots.map((_, i) => {
          const col = i % cols;
          const row = Math.floor(i / cols);
          const delay = (col + row) * 0.06;
          return (
            <span
              key={i}
              className="block h-1.5 w-1.5 rounded-full animate-dotPulse will-change-transform"
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.918)",
                animationDelay: `${delay}s`,
              }}
            />
          );
        })}
      </div>

      <style>{`
        @keyframes dotPulse {
          0%, 100% { transform: scale(0.35); opacity: 0.2; }
          50% { transform: scale(1); opacity: 1; }
        }
        .animate-dotPulse {
          animation: dotPulse 1.4s cubic-bezier(0.45, 0, 0.55, 1) infinite;
        }
      `}</style>
    </div>
  );
}