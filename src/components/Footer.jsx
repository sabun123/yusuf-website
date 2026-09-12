import { socials } from "../data/profile";
import { socialIcons } from "./socialIcons";

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/5 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 md:flex-row">
        <a href="#home" className="group text-center md:text-left">
          <span className="font-display text-lg font-bold text-white">
            Game over!
          </span>{" "}
          <span className="text-sm text-white/35 transition-colors group-hover:text-neon-cyan">
            ↑ scroll up
          </span>
        </a>

        <div className="flex items-center gap-3">
          {socials.map((s) => {
            const Icon = socialIcons[s.id];
            return (
              <a
                key={s.id}
                href={s.href}
                target={s.id === "email" ? undefined : "_blank"}
                rel="noreferrer"
                aria-label={s.label}
                title={s.label}
                className="text-white/40 transition-all duration-300 hover:-translate-y-0.5 hover:text-neon-cyan"
              >
                <Icon className="h-[17px] w-[17px]" />
              </a>
            );
          })}
        </div>

        <p className="text-xs text-white/30">
          © 2026 Yusuf Ismail bin Shukor
        </p>
      </div>
    </footer>
  );
}
