import { profile } from "../data/profile";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          kicker="about"
          title={
            <>
              An adventure into the <span className="text-gradient">unknown</span>
            </>
          }
        />

        <Reveal delay={0.1}>
          <p className="mx-auto max-w-2xl text-center text-lg leading-relaxed text-white/65 md:text-xl">
            {profile.bio}
          </p>
        </Reveal>

        <Reveal delay={0.2} className="mt-10 flex flex-wrap justify-center gap-3">
          {profile.highlights.map((h) => (
            <span
              key={h}
              className="glass rounded-full px-5 py-2.5 text-sm font-medium text-white/75 transition-colors duration-300 hover:text-neon-cyan"
            >
              {h}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  );
}
