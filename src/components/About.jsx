import Reveal from "./Reveal";
import { images } from "../data/images";

const stats = [
  { value: "11+", label: "Years" },
  { value: "3", label: "Companies" },
  { value: "z/OS", label: "Roots" },
  { value: "C/C++", label: "Core" },
];

export default function About() {
  return (
    <section id="about" className="bg-cream py-24 sm:py-32">
      <div className="mx-auto max-w-6xl container-px">
        <Reveal className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <h2 className="max-w-2xl font-sans text-4xl font-extrabold leading-[1.05] tracking-tight text-ink sm:text-5xl lg:text-6xl">
            Mainframe cores to distributed clouds.
          </h2>
          <span className="shrink-0 rounded-full border border-ink/15 px-4 py-2 text-xs font-semibold uppercase tracking-wider text-ink/50">
            Bogor Regency, West Java, Indonesia
          </span>
        </Reveal>

        <div className="mt-16 grid gap-10 lg:grid-cols-5 lg:items-center">
          <Reveal delay={0.1} className="lg:col-span-2">
            <img
              src={images.aboutServerRoom}
              alt="Server room"
              className="aspect-[4/5] w-full object-cover"
              loading="lazy"
            />
          </Reveal>

          <Reveal delay={0.15} className="lg:col-span-3">
            <p className="max-w-md font-serif-italic text-3xl leading-snug text-rust sm:text-4xl">
              CICS to cloud-native. Google-scale to Instacart-scale.
            </p>

            <div className="mt-12 grid grid-cols-2 gap-8 border-t border-ink/10 pt-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-sans text-3xl font-extrabold text-ink">{stat.value}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-wider text-ink/45">{stat.label}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
