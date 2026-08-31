import { useEffect, useRef } from "react";

/**
 * Lightweight canvas particle field: slow drifting dots that link with faint
 * lines when close. Pauses when the tab is hidden and respects
 * prefers-reduced-motion.
 */
function ParticleField() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const COUNT = 70;
    const LINK_DIST = 130;
    let w = 0;
    let h = 0;
    let particles = [];
    let raf = 0;
    let running = true;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = canvas.clientWidth;
      h = canvas.clientHeight;
      canvas.width = w * dpr;
      canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const init = () => {
      particles = Array.from({ length: COUNT }, () => ({
        x: Math.random() * w,
        y: Math.random() * h,
        vx: (Math.random() - 0.5) * 0.35,
        vy: (Math.random() - 0.5) * 0.35,
        r: Math.random() * 1.6 + 0.4,
      }));
    };

    const step = () => {
      if (!running) return;
      ctx.clearRect(0, 0, w, h);

      for (const p of particles) {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < -10) p.x = w + 10;
        if (p.x > w + 10) p.x = -10;
        if (p.y < -10) p.y = h + 10;
        if (p.y > h + 10) p.y = -10;

        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgb(165 180 252 / 0.5)";
        ctx.fill();
      }

      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const d2 = dx * dx + dy * dy;
          if (d2 < LINK_DIST * LINK_DIST) {
            const alpha = (1 - Math.sqrt(d2) / LINK_DIST) * 0.13;
            ctx.strokeStyle = `rgb(139 92 246 / ${alpha.toFixed(3)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x, a.y);
            ctx.lineTo(b.x, b.y);
            ctx.stroke();
          }
        }
      }

      raf = requestAnimationFrame(step);
    };

    const onVisibility = () => {
      if (document.hidden) {
        running = false;
        cancelAnimationFrame(raf);
      } else if (!running) {
        running = true;
        raf = requestAnimationFrame(step);
      }
    };

    resize();
    init();
    raf = requestAnimationFrame(step);
    window.addEventListener("resize", resize);
    document.addEventListener("visibilitychange", onVisibility);

    return () => {
      running = false;
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
      document.removeEventListener("visibilitychange", onVisibility);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-60"
    />
  );
}

/**
 * Fixed ambient background: deep-void base, three slowly drifting aurora
 * gradient blobs, top vignette, and the particle field.
 */
export default function AuroraBackground() {
  return (
    <div aria-hidden className="fixed inset-0 z-0 overflow-hidden">
      {/* top vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_55%_at_50%_-10%,rgb(34_211_238/0.09),transparent_70%)]" />

      {/* aurora blobs */}
      <div className="animate-aurora-a absolute -left-[20%] top-[-18%] h-[62vmax] w-[62vmax] rounded-full bg-[radial-gradient(circle,rgb(139_92_246/0.17),transparent_62%)] blur-3xl" />
      <div className="animate-aurora-b absolute -right-[24%] top-[8%] h-[56vmax] w-[56vmax] rounded-full bg-[radial-gradient(circle,rgb(34_211_238/0.13),transparent_62%)] blur-3xl" />
      <div className="animate-aurora-c absolute -bottom-[26%] left-[12%] h-[52vmax] w-[52vmax] rounded-full bg-[radial-gradient(circle,rgb(232_121_249/0.11),transparent_62%)] blur-3xl" />

      {/* particles */}
      <ParticleField />
    </div>
  );
}
