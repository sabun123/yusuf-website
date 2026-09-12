import Reveal from "./Reveal";

/** Consistent section heading: small gradient kicker + big display title. */
export default function SectionHeading({ kicker, title, sub }) {
  return (
    <Reveal className="mx-auto mb-14 max-w-2xl text-center md:mb-20">
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-neon-cyan/80">
        {kicker}
      </p>
      <h2 className="font-display text-3xl font-bold text-white md:text-5xl">
        {title}
      </h2>
      {sub ? (
        <p className="mt-4 text-base text-white/55 md:text-lg">{sub}</p>
      ) : null}
    </Reveal>
  );
}
