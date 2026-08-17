import Reveal from "./Reveal";
import { projects } from "../data/resume";
import { images } from "../data/images";

export default function Projects() {
  return (
    <section id="projects" className="bg-ink py-24 sm:py-32">
      <div className="mx-auto max-w-6xl container-px">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="max-w-2xl font-sans text-4xl font-extrabold leading-[1.05] tracking-tight text-cream sm:text-5xl lg:text-6xl">
            Systems worth pointing at.
          </h2>
          <span className="font-serif-italic text-2xl text-amber-soft">Projects</span>
        </Reveal>

        <div className="mt-16 grid gap-5 sm:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.08}>
              <article className="group relative aspect-[4/3] overflow-hidden">
                <img
                  src={images[project.image]}
                  alt=""
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink via-ink/10 to-transparent" />

                <span className="absolute left-5 top-5 text-xs font-semibold uppercase tracking-wider text-cream/70">
                  {project.org} · {project.period}
                </span>

                <div className="absolute inset-x-5 bottom-5">
                  <h3 className="font-sans text-2xl font-extrabold uppercase leading-tight tracking-tight text-cream sm:text-3xl">
                    {project.title}
                  </h3>
                  <p className="mt-1 text-sm text-cream/60">{project.description}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
