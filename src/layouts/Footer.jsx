export const Footer = () => {
  const handleClick = () => {
    const el = document.getElementById("hero");
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <footer className="w-full py-16 pb-24 md:pb-16 flex flex-col items-center gap-2">
      <button type="button" onClick={handleClick} className="group cursor-pointer">
        <h6 className="text-6xl md:text-8xl lg:text-9xl tracking-wide text-white/20 transition-all duration-500 group-hover:text-white/80 active:text-white/80 select-none">
          Chandan
        </h6>
      </button>
    </footer>
  )
}