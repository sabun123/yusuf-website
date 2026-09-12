import { useEffect, useState } from "react";
import { motion } from "motion/react";
import {
  AiOutlineCode,
  AiOutlineHome,
  AiOutlineMessage,
  AiOutlineUser,
} from "react-icons/ai";
import { FaAward } from "react-icons/fa";
import { navItems } from "../data/profile";

const icons = {
  home: AiOutlineHome,
  about: AiOutlineUser,
  experience: AiOutlineCode,
  qualifications: FaAward,
  contact: AiOutlineMessage,
};

/**
 * Floating glass pill nav, top-center. Icons only on small screens,
 * icon + label on md+. Scroll-spy via IntersectionObserver.
 */
export default function Nav() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    const sections = navItems
      .map((n) => document.getElementById(n.id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(entry.target.id);
        }
      },
      { rootMargin: "-40% 0px -55% 0px", threshold: 0 }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="fixed left-1/2 top-4 z-50 -translate-x-1/2">
      <motion.nav
        initial={{ y: -72, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        aria-label="Primary"
        className="glass-strong flex items-center gap-0.5 rounded-full p-1.5 shadow-[0_8px_32px_rgb(3_3_9/0.65)]"
      >
        <a
          href="#home"
          aria-label="Yusuf Ismail — home"
          className="mr-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-neon-cyan via-neon-violet to-neon-fuchsia font-display text-sm font-bold text-white"
        >
          Y
        </a>
        {navItems.map(({ id, label }) => {
          const Icon = icons[id];
          const isActive = active === id;
          return (
            <a
              key={id}
              href={`#${id}`}
              aria-label={label}
              aria-current={isActive ? "true" : undefined}
              className={`flex items-center gap-1.5 rounded-full px-2.5 py-2 text-xs font-medium transition-colors duration-300 md:px-3.5 md:text-sm ${
                isActive
                  ? "bg-white/10 text-white"
                  : "text-white/55 hover:bg-white/5 hover:text-white/90"
              }`}
            >
              <Icon className="h-[15px] w-[15px] shrink-0" />
              <span className="hidden md:inline">{label}</span>
            </a>
          );
        })}
      </motion.nav>
    </div>
  );
}
