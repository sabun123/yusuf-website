import { socials } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import { socialIcons } from "./socialIcons";

export default function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          kicker="contact"
          title={
            <>
              Let's build something <span className="text-gradient">insane</span>
            </>
          }
          sub="Have a project in mind — mobile, web, AI, or something else entirely? Say hi."
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {socials.map((s, i) => {
            const Icon = socialIcons[s.id];
            return (
              <Reveal key={s.id} delay={i * 0.08}>
                <a
                  href={s.href}
                  target={s.id === "email" ? undefined : "_blank"}
                  rel="noreferrer"
                  className="glass group flex items-center gap-4 rounded-2xl p-5 transition-all duration-300 hover:-translate-y-1 hover:border-neon-violet/40 hover:shadow-[0_8px_40px_rgb(139_92_246/0.25)]"
                >
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-neon-cyan/20 via-neon-violet/20 to-neon-fuchsia/20 text-neon-cyan transition-colors duration-300 group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </span>
                  <span className="min-w-0">
                    <span className="block text-sm font-semibold text-white">
                      {s.label}
                    </span>
                    <span className="block truncate text-xs text-white/45">
                      {s.handle}
                    </span>
                  </span>
                  <span className="ml-auto text-white/25 transition-all duration-300 group-hover:translate-x-1 group-hover:text-neon-cyan">
                    →
                  </span>
                </a>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
