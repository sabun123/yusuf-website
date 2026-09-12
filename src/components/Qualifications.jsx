import { FaExternalLinkAlt } from "react-icons/fa";
import { qualifications } from "../data/profile";
import { images } from "../data/images";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Tilt from "./Tilt";
import { useLightbox } from "./Lightbox";

export default function Qualifications() {
  const { open } = useLightbox();

  return (
    <section id="qualifications" className="relative px-6 py-24 md:py-32">
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
                className="glass group flex h-full flex-col items-center rounded-2xl p-6 text-center transition-colors duration-500 hover:border-neon-cyan/40"
              >
                <button
                  type="button"
                  onClick={() =>
                    open({ src: images[q.image], alt: `${q.title} certificate` })
                  }
                  aria-label={`View ${q.title} certificate full screen`}
                  className="flex h-44 w-full cursor-zoom-in items-center justify-center overflow-hidden rounded-xl border border-white/5 bg-void-soft/60 p-3"
                >
                  <img
                    src={images[q.image]}
                    alt={`${q.title} certificate`}
                    loading="lazy"
                    className="max-h-full w-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
                  />
                </button>
                <h3 className="font-display mt-5 text-lg font-bold text-white">
                  {q.title}
                </h3>
                {q.period && (
                  <p className="mt-2 text-xs tracking-wide text-white/40">
                    {q.period}
                  </p>
                )}
                {q.link && (
                  <a
                    href={q.link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-neon-cyan transition-colors hover:text-white"
                  >
                    <FaExternalLinkAlt className="h-3.5 w-3.5" />
                    {q.link.label}
                  </a>
                )}
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
