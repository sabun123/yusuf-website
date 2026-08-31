import { useEffect, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { profile, socials } from "../data/profile";
import { images } from "../data/images";
import Magnetic from "./Magnetic";
import { socialIcons } from "./socialIcons";

function RotatingRole({ roles }) {
  const reduced = useReducedMotion();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (reduced) return;
    const t = setInterval(
      () => setIndex((i) => (i + 1) % roles.length),
      2800
    );
    return () => clearInterval(t);
  }, [roles.length, reduced]);

  return (
    <div className="relative h-[1.55em] overflow-hidden">
      {reduced ? (
        <span className="text-gradient font-display text-2xl font-semibold md:text-4xl">
          {roles[0]}
        </span>
      ) : (
        <AnimatePresence mode="wait">
          <motion.span
            key={roles[index]}
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-110%", opacity: 0 }}
            transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
            className="text-gradient block font-display text-2xl font-semibold md:text-4xl"
          >
            {roles[index]}
          </motion.span>
        </AnimatePresence>
      )}
    </div>
  );
}

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.12, delayChildren: 0.25 } },
};
const item = {
  hidden: { opacity: 0, y: 26 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-24 pb-16"
    >
      <div className="mx-auto grid w-full max-w-6xl items-center gap-14 lg:grid-cols-[1.15fr_1fr] lg:gap-10">
        {/* Text */}
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="order-2 text-center lg:order-1 lg:text-left"
        >
          <motion.p
            variants={item}
            className="mb-4 text-lg font-medium text-white/60"
          >
            {profile.greeting}
          </motion.p>

          <motion.h1
            variants={item}
            className="text-gradient-animated font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl"
          >
            {profile.firstName}
            <br />
            Ismail
          </motion.h1>

          <motion.div variants={item} className="mt-5">
            <RotatingRole roles={profile.roles} />
          </motion.div>

          <motion.p
            variants={item}
            className="mx-auto mt-4 max-w-md text-base text-white/55 md:text-lg lg:mx-0"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            variants={item}
            className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start"
          >
            <Magnetic
              href="#experience"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-neon-cyan via-neon-violet to-neon-fuchsia px-7 py-3.5 text-sm font-semibold text-white shadow-[0_0_28px_rgb(139_92_246/0.45)] transition-shadow hover:shadow-[0_0_44px_rgb(139_92_246/0.65)]"
            >
              View my work
              <span className="transition-transform duration-300 group-hover:translate-x-1">
                →
              </span>
            </Magnetic>
            <Magnetic
              href="#contact"
              className="glass inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-sm font-semibold text-white/85 transition-colors hover:text-white"
            >
              Get in touch
            </Magnetic>
          </motion.div>

          <motion.div
            variants={item}
            className="mt-9 flex items-center justify-center gap-3 lg:justify-start"
          >
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
                  className="glass flex h-10 w-10 items-center justify-center rounded-full text-white/55 transition-all duration-300 hover:-translate-y-1 hover:text-neon-cyan hover:shadow-[0_0_20px_rgb(34_211_238/0.35)]"
                >
                  <Icon className="h-[17px] w-[17px]" />
                </a>
              );
            })}
          </motion.div>
        </motion.div>

        {/* Photo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 flex justify-center lg:order-2"
        >
          <div className="animate-float-slow relative aspect-square w-64 sm:w-80 lg:w-[26rem]">
            {/* spinning conic glow ring */}
            <div
              aria-hidden
              className="animate-spin-slow absolute -inset-2 rounded-[2.8rem] bg-[conic-gradient(from_0deg,#22d3ee,#8b5cf6,#e879f9,#34d399,#22d3ee)] opacity-70 blur-md"
            />
            <div className="absolute -inset-[3px] rounded-[2.7rem] bg-void" />
            <img
              src={images.profile}
              alt="Portrait of Yusuf Ismail"
              className="relative z-10 h-full w-full rounded-[2.5rem] object-cover"
              loading="eager"
            />
          </div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2 text-white/35 transition-colors hover:text-white/80"
      >
        <span className="text-[10px] font-semibold uppercase tracking-[0.4em]">
          scroll
        </span>
        <span className="flex h-9 w-5 items-start justify-center rounded-full border border-white/20 p-1">
          <span className="animate-scroll-hint h-1.5 w-1 rounded-full bg-neon-cyan" />
        </span>
      </a>
    </section>
  );
}
