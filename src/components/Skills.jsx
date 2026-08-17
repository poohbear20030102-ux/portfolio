import Reveal from "./Reveal";
import { skillGroups } from "../data/resume";

export default function Skills() {
  return (
    <section id="skills" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl container-px">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="max-w-2xl font-sans text-4xl font-extrabold leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl">
            One stack, five decades.
          </h2>
          <span className="font-serif-italic text-2xl text-amber-soft">Stack</span>
        </Reveal>

        <div className="mt-16 grid gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group, i) => (
            <Reveal key={group.id} delay={i * 0.06}>
              <div className="border-t border-cream/15 pt-5">
                <h3 className="font-sans text-lg font-bold text-cream">{group.title}</h3>
                <div className="mt-4 flex flex-wrap gap-x-2 gap-y-2">
                  {group.skills.map((skill, idx) => (
                    <span key={skill} className="text-sm text-cream/50">
                      {skill}
                      {idx < group.skills.length - 1 && <span className="ml-2 text-cream/20">·</span>}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
