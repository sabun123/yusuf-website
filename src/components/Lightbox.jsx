import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { AnimatePresence, motion } from "motion/react";
import { FaExpand, FaMinus, FaPlus, FaTimes } from "react-icons/fa";

const LightboxContext = createContext(null);

/** Call open({ src, alt }) from anywhere below <LightboxProvider>. */
export function useLightbox() {
  return useContext(LightboxContext);
}

const MIN_SCALE = 1;
const MAX_SCALE = 5;
const clampScale = (s) => Math.min(MAX_SCALE, Math.max(MIN_SCALE, s));

function ToolbarButton({ label, onClick, children }) {
  return (
    <button
      type="button"
      aria-label={label}
      title={label}
      onClick={onClick}
      className="glass-strong flex h-10 w-10 items-center justify-center rounded-full text-white/70 transition-colors hover:bg-white/10 hover:text-white"
    >
      {children}
    </button>
  );
}

function LightboxOverlay({ item, onClose }) {
  const [scale, setScale] = useState(1);
  const [offset, setOffset] = useState({ x: 0, y: 0 });
  const pointers = useRef(new Map());
  const drag = useRef(null); // { startX, startY, origX, origY }
  const pinch = useRef(null); // { startDist, startScale }
  const suppressClick = useRef(false);

  // Reset view for a new image
  useEffect(() => {
    setScale(1);
    setOffset({ x: 0, y: 0 });
  }, [item]);

  // Lock body scroll + keyboard controls while open
  useEffect(() => {
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "+" || e.key === "=") setScale((s) => clampScale(s * 1.25));
      if (e.key === "-" || e.key === "_")
        setScale((s) => {
          const next = clampScale(s * 0.8);
          if (next === 1) setOffset({ x: 0, y: 0 });
          return next;
        });
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prevOverflow;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  const zoomTo = (next) => {
    const s = clampScale(next);
    setScale(s);
    if (s === 1) setOffset({ x: 0, y: 0 });
  };

  const onWheel = (e) => {
    setScale((s) => {
      const next = clampScale(s * (e.deltaY < 0 ? 1.15 : 0.87));
      if (next === 1) setOffset({ x: 0, y: 0 });
      return next;
    });
  };

  const onPointerDown = (e) => {
    e.currentTarget.setPointerCapture(e.pointerId);
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });
    if (pointers.current.size === 1) {
      drag.current = {
        startX: e.clientX,
        startY: e.clientY,
        origX: offset.x,
        origY: offset.y,
        moved: false,
      };
    } else if (pointers.current.size === 2) {
      drag.current = null;
      const [a, b] = [...pointers.current.values()];
      pinch.current = {
        startDist: Math.hypot(a.x - b.x, a.y - b.y),
        startScale: scale,
      };
    }
  };

  const onPointerMove = (e) => {
    if (!pointers.current.has(e.pointerId)) return;
    pointers.current.set(e.pointerId, { x: e.clientX, y: e.clientY });

    if (pointers.current.size === 2 && pinch.current) {
      const [a, b] = [...pointers.current.values()];
      const dist = Math.hypot(a.x - b.x, a.y - b.y);
      if (pinch.current.startDist > 0) {
        zoomTo(pinch.current.startScale * (dist / pinch.current.startDist));
      }
    } else if (pointers.current.size === 1 && drag.current) {
      const dx = e.clientX - drag.current.startX;
      const dy = e.clientY - drag.current.startY;
      if (Math.hypot(dx, dy) > 4) suppressClick.current = true;
      setOffset({ x: drag.current.origX + dx, y: drag.current.origY + dy });
    }
  };

  const onPointerEnd = (e) => {
    pointers.current.delete(e.pointerId);
    if (pointers.current.size < 2) pinch.current = null;
    if (pointers.current.size === 0) drag.current = null;
  };

  const onStageClick = (e) => {
    // Click on empty stage area (not a drag, not the image) closes
    if (e.target === e.currentTarget) {
      if (!suppressClick.current) onClose();
      suppressClick.current = false;
    }
  };

  const onDoubleClick = () => {
    if (scale > 1.05) {
      zoomTo(1);
    } else {
      zoomTo(2.5);
    }
  };

  const isInteracting = suppressClick.current || pinch.current;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
      role="dialog"
      aria-modal="true"
      aria-label={item.alt || "Image viewer"}
      className="fixed inset-0 z-[100] bg-void/90 backdrop-blur-md"
    >
      {/* Stage: wheel zoom, pointer pan/pinch, double-click toggle */}
      <div
        className="flex h-full w-full touch-none select-none items-center justify-center overflow-hidden"
        onWheel={onWheel}
        onPointerDown={onPointerDown}
        onPointerMove={onPointerMove}
        onPointerUp={onPointerEnd}
        onPointerCancel={onPointerEnd}
        onClick={onStageClick}
      >
        <img
          src={item.src}
          alt={item.alt}
          draggable={false}
          onDoubleClick={onDoubleClick}
          className="max-h-[92vh] max-w-[92vw] cursor-grab active:cursor-grabbing"
          style={{
            transform: `translate(${offset.x}px, ${offset.y}px) scale(${scale})`,
            transition: isInteracting
              ? "none"
              : "transform 0.15s ease-out",
          }}
        />
      </div>

      {/* Toolbar */}
      <div className="absolute right-4 top-4 flex gap-2">
        <ToolbarButton label="Zoom in" onClick={() => setScale((s) => clampScale(s * 1.25))}>
          <FaPlus className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton
          label="Zoom out"
          onClick={() => {
            setScale((s) => {
              const next = clampScale(s * 0.8);
              if (next === 1) setOffset({ x: 0, y: 0 });
              return next;
            });
          }}
        >
          <FaMinus className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Reset view" onClick={() => zoomTo(1)}>
          <FaExpand className="h-4 w-4" />
        </ToolbarButton>
        <ToolbarButton label="Close" onClick={onClose}>
          <FaTimes className="h-4 w-4" />
        </ToolbarButton>
      </div>

      {/* Hint */}
      <p className="pointer-events-none absolute bottom-4 left-1/2 hidden -translate-x-1/2 text-xs tracking-wide text-white/40 md:block">
        Scroll to zoom · Drag to pan · Double-click to toggle · Esc to close
      </p>
    </motion.div>
  );
}

export function LightboxProvider({ children }) {
  const [item, setItem] = useState(null);
  const open = useCallback(
    ({ src, alt = "" }) => setItem({ src, alt }),
    []
  );
  const close = useCallback(() => setItem(null), []);

  return (
    <LightboxContext.Provider value={{ open }}>
      {children}
      <AnimatePresence>{item && <LightboxOverlay item={item} onClose={close} />}</AnimatePresence>
    </LightboxContext.Provider>
  );
}
