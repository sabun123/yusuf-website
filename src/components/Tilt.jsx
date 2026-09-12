import { useRef } from "react";
import {
  motion,
  useMotionValue,
  useSpring,
  useReducedMotion,
} from "motion/react";

/**
 * 3D tilt card: rotates a few degrees toward the cursor with a spring.
 * Fine-pointer only; disabled for prefers-reduced-motion.
 */
export default function Tilt({
  children,
  className = "",
  max = 7,
  ...rest
}) {
  const ref = useRef(null);
  const reduced = useReducedMotion();

  const rxTarget = useMotionValue(0);
  const ryTarget = useMotionValue(0);
  const rx = useSpring(rxTarget, { stiffness: 150, damping: 18, mass: 0.4 });
  const ry = useSpring(ryTarget, { stiffness: 150, damping: 18, mass: 0.4 });

  const handleMove = (e) => {
    const el = ref.current;
    if (!el || reduced) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width - 0.5;
    const py = (e.clientY - r.top) / r.height - 0.5;
    ryTarget.set(px * max * 2);
    rxTarget.set(-py * max * 2);
  };
  const handleLeave = () => {
    rxTarget.set(0);
    ryTarget.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        rotateX: rx,
        rotateY: ry,
        transformPerspective: 900,
        transformStyle: "preserve-3d",
      }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}
