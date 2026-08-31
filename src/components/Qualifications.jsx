import { qualifications } from "../data/profile";
import { images } from "../data/images";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Tilt from "./Tilt";

export default function Qualifications() {
  return (
    <section
      id="qualifications"
      className="relative px-6 py-24 md:py-32"
    >
      <div className="mx-auto max-w-5xl">
        <SectionHeading
          kicker="qualifications"
          title={
            <>
              Certificates & <span className="text-gradient">credentials</span>
            </>
          }
        />

        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
          {qualifications.map((q, i) => (
            <Reveal key={q.id} delay={i * 0.1}>
              <Tilt
                max={8}
                className="glass group flex h-full flex-col items-center rounded-2xl p-6 transition-colors duration-500 hover:border-neon-cyan/40"
              >
                <div className="flex h-44 w-full items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-void-soft/60 p-3">
                  <img
                    src={images[q.image]}
                    alt={`${q.title} certificate`}
                    loading="lazy"
                    className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </div>
                <h3 className="font-display mt-5 text-xl font-bold text-white">
                  {q.title}
                </h3>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
