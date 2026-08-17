import Reveal from "./Reveal";
import { profile } from "../data/resume";

export default function Contact() {
  return (
    <section id="contact" className="bg-ink py-28 sm:py-36">
      <div className="mx-auto max-w-4xl container-px text-center">
        <Reveal>
          <p className="font-serif-italic text-2xl text-amber-soft">Contact</p>
          <h2 className="mt-2 font-sans text-5xl font-extrabold tracking-tight text-cream sm:text-7xl">
            Let's talk.
          </h2>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="bg-cream px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-ink transition-opacity hover:opacity-85"
            >
              {profile.email}
            </a>
            <a
              href={`tel:${profile.phone.replace(/[^+\d]/g, "")}`}
              className="border border-cream/25 px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-cream/80 transition-colors hover:border-cream/60 hover:text-cream"
            >
              {profile.phone}
            </a>
          </div>

          <p className="mt-8 text-sm text-cream/40">{profile.location}</p>
        </Reveal>
      </div>
    </section>
  );
}
