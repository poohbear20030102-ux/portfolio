import Reveal from "./Reveal";
import { experience } from "../data/resume";

export default function Experience() {
  return (
    <section id="experience" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl container-px">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="max-w-2xl font-sans text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Where it got tested.
          </h2>
          <span className="font-serif-italic text-2xl text-rust">Work</span>
        </Reveal>

        <div className="mt-16 border-t border-ink/10">
          {experience.map((job, i) => (
            <Reveal key={job.id} delay={i * 0.08}>
              <div className="grid gap-4 border-b border-ink/10 py-10 sm:grid-cols-12 sm:gap-8">
                <div className="sm:col-span-4">
                  <h3 className="font-sans text-3xl font-extrabold tracking-tight text-ink">{job.company}</h3>
                  <p className="mt-1 text-sm text-ink/50">{job.role}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink/35">
                    {job.start} — {job.end}
                  </p>
                </div>

                <div className="sm:col-span-8">
                  <ul className="grid gap-2.5 sm:grid-cols-2">
                    {job.highlights.map((h) => (
                      <li key={h} className="text-sm leading-relaxed text-ink/70">
                        {h}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-5 flex flex-wrap gap-x-2 gap-y-1">
                    {job.stack.map((s, idx) => (
                      <span key={s} className="text-xs font-medium text-ink/40">
                        {s}
                        {idx < job.stack.length - 1 && <span className="ml-2 text-ink/20">·</span>}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
