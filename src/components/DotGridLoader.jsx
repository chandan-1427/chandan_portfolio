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
        className="grid gap-3"
        style={{ gridTemplateColumns: `repeat(${cols}, minmax(0, 1fr))` }}
      >
        {dots.map((_, i) => {
          const col = i % cols;
          const row = Math.floor(i / cols);
          const delay = (col + row) * 0.08;
          return (
            <span
              key={i}
              className="block h-2 w-2 rounded-full animate-dotPulse"
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
          0%, 100% { transform: scale(0.4); opacity: 0.25; }
          50% { transform: scale(1); opacity: 1; }
        }
        .animate-dotPulse {
          animation: dotPulse 1.2s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}