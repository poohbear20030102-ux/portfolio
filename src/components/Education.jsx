import Reveal from "./Reveal";
import { education, certifications } from "../data/resume";

export default function Education() {
  return (
    <section id="education" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl container-px">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="max-w-2xl font-sans text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Background.
          </h2>
          <span className="font-serif-italic text-2xl text-rust">Education</span>
        </Reveal>

        <div className="mt-16 grid gap-10 sm:grid-cols-2">
          <Reveal>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink/40">Education</p>
            <ul className="mt-5 divide-y divide-ink/10 border-t border-ink/10">
              {education.map((e) => (
                <li key={e.school} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
                  <span>
                    <span className="font-sans text-base font-bold text-ink">{e.school}</span>
                    <span className="ml-2 text-sm text-ink/50">{e.degree}</span>
                  </span>
                  <span className="text-xs font-medium text-ink/35">{e.period}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="text-xs font-semibold uppercase tracking-wider text-ink/40">Certifications</p>
            <ul className="mt-5 divide-y divide-ink/10 border-t border-ink/10">
              {certifications.map((c) => (
                <li key={c.name} className="flex flex-wrap items-baseline justify-between gap-2 py-4">
                  <span>
                    <span className="font-sans text-base font-bold text-ink">{c.name}</span>
                    <span className="ml-2 text-sm text-ink/50">{c.issuer}</span>
                  </span>
                  <span className="text-xs font-medium text-ink/35">{c.year}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
