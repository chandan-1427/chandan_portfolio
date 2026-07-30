import { useState } from "react";

export function useHover() {
  const [hovered, setHovered] = useState(false);

  const hoverProps = {
    onMouseEnter: () => setHovered(true),
    onMouseLeave: () => setHovered(false),
    onFocus: () => setHovered(true),
    onBlur: () => setHovered(false),
  };

  return [hovered, hoverProps];
}
