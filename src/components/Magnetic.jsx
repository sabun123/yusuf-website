import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

/**
 * Element that leans toward the cursor while hovered, then springs back.
 * Renders an <a> when `href` is passed, a <div> otherwise.
 */
export default function Magnetic({
  children,
  href,
  className = "",
  strength = 0.35,
  ...rest
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { stiffness: 160, damping: 16, mass: 0.2 });
  const sy = useSpring(y, { stiffness: 160, damping: 16, mass: 0.2 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el || reduced) return;
    const r = el.getBoundingClientRect();
    x.set((e.clientX - (r.left + r.width / 2)) * strength);
    y.set((e.clientY - (r.top + r.height / 2)) * strength);
  };
  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  const Comp = href ? motion.a : motion.div;
  return (
    <Comp
      ref={ref}
      href={href}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ x: sx, y: sy }}
      className={className}
      {...rest}
    >
      {children}
    </Comp>
  );
}
