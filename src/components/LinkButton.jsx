export default function LinkButton({ href, variant = "code", children, className = "" }) {
  const variants = {
    live: "bg-white/[0.136] text-white hover:bg-white/[0.226] active:bg-white/[0.146]",
    code: "bg-white/[0.056] text-white/[0.618] hover:bg-white/[0.126] hover:text-white/80 active:bg-white/[0.146]",
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`group relative flex w-fit shrink-0 items-center gap-1 rounded-[0.3rem] border border-white/[0.146] px-[0.764rem] py-[0.382rem] text-[0.75rem] tracking-wide transition-colors duration-300 ${variants[variant]} ${className}`}
    >
      {children}
    </a>
  );
}