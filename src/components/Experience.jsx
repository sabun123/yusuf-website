import { experience, pastProjects } from "../data/profile";
import { images } from "../data/images";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";
import Tilt from "./Tilt";

function StackChips({ stack }) {
  return (
    <div className="flex flex-wrap gap-2">
      {stack.map((t) => (
        <span
          key={t}
          className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1 text-xs font-medium text-white/60"
        >
          {t}
        </span>
      ))}
    </div>
  );
}

function TimelineNode({ current }) {
  return (
    <span
      aria-hidden
      className={`absolute left-2 top-9 flex h-4 w-4 items-center justify-center ${
        current ? "" : "opacity-70"
      }`}
    >
      {current && (
        <span className="animate-pulse-dot absolute h-full w-full rounded-full bg-neon-emerald" />
      )}
      <span
        className={`relative h-2.5 w-2.5 rounded-full ${
          current ? "bg-neon-emerald" : "bg-neon-violet"
        }`}
      />
    </span>
  );
}

function CurrentRoleCard({ role }) {
  return (
    <Reveal>
      <div className="relative pl-10">
        <TimelineNode current={role.current} />
        <Tilt
          max={4}
          className="glass rounded-2xl p-6 transition-colors duration-500 hover:border-neon-violet/40 md:p-8"
        >
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <span className="rounded-full border border-neon-cyan/30 bg-neon-cyan/10 px-4 py-1.5 text-xs font-semibold tracking-wide text-neon-cyan">
              {role.period}
            </span>
            {role.current && (
              <span className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neon-emerald">
                <span className="animate-pulse-dot h-2 w-2 rounded-full bg-neon-emerald" />
                Present
              </span>
            )}
          </div>

          <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
            {role.company}
          </h3>
          <p className="text-gradient mt-1 text-sm font-semibold uppercase tracking-[0.18em]">
            {role.role}
          </p>

          <p className="mt-4 leading-relaxed text-white/60">{role.summary}</p>

          <div className="mt-5">
            <StackChips stack={role.stack} />
          </div>
        </Tilt>
      </div>
    </Reveal>
  );
}

function ProjectCard({ project, index }) {
  return (
    <Reveal delay={(index % 3) * 0.06}>
      <div className="relative pl-10">
        <TimelineNode />
        <Tilt
          max={5}
          className="glass group overflow-hidden rounded-2xl transition-colors duration-500 hover:border-neon-fuchsia/30"
        >
          <div className="grid md:grid-cols-[1fr_1.15fr]">
            <div className="relative h-52 overflow-hidden sm:h-60 md:h-full">
              <img
                src={images[project.image]}
                alt={project.name}
                loading="lazy"
                className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
              />
              <div
                aria-hidden
                className="absolute inset-0 bg-gradient-to-t from-void/70 via-transparent to-transparent md:bg-gradient-to-r md:from-transparent md:to-void-card/60"
              />
            </div>

            <div className="p-6 md:p-7">
              <span className="mb-3 inline-block rounded-full border border-white/10 bg-white/[0.05] px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-white/50">
                {project.type}
              </span>
              <h3 className="font-display text-xl font-bold text-white md:text-2xl">
                {project.name}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/60">
                {project.summary}
              </p>
              <div className="mt-5">
                <StackChips stack={project.stack} />
              </div>
            </div>
          </div>
        </Tilt>
      </div>
    </Reveal>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24 md:py-32">
      <div className="mx-auto max-w-4xl">
        <SectionHeading
          kicker="experience"
          title={
            <>
              Where I've <span className="text-gradient">been</span>
            </>
          }
          sub="2025 to present, and the projects that got me here."
        />

        <div className="relative">
          {/* glowing timeline line */}
          <div
            aria-hidden
            className="absolute bottom-0 left-4 top-2 w-px -translate-x-1/2 bg-gradient-to-b from-neon-cyan/70 via-neon-violet/40 to-transparent"
          />

          <div className="space-y-8">
            {experience.map((role) => (
              <CurrentRoleCard key={role.id} role={role} />
            ))}
          </div>

          <Reveal className="relative pl-10">
            <div className="mb-10 flex items-center gap-4 pt-2">
              <span className="h-px flex-1 bg-gradient-to-r from-neon-violet/40 to-transparent" />
              <h3 className="text-xs font-semibold uppercase tracking-[0.3em] text-white/45">
                Earlier in my career
              </h3>
            </div>
          </Reveal>

          <div className="space-y-8">
            {pastProjects.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
