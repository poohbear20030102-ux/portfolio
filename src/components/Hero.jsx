import { motion } from "framer-motion";
import { images } from "../data/images";

const meta = [
  { label: "Location", value: "Bogor Regency, West Java, ID" },
  { label: "Experience", value: "11+ years" },
  { label: "Focus", value: "z/OS → distributed → cloud" },
];

const tickerItems = [
  "Systems that don't fall over",
  "z/OS",
  "C/C++",
  "Distributed Systems",
  "11+ Years",
];

export default function Hero() {
  return (
    <section id="top" className="relative flex min-h-[92vh] flex-col justify-between overflow-hidden bg-ink">
      <div className="absolute inset-0">
        <img src={images.circuit} alt="" className="h-full w-full object-cover opacity-40" loading="eager" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/85 to-ink" />
      </div>

      <div className="relative mx-auto w-full max-w-6xl container-px pt-16 sm:pt-24">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-8"
          >
            <p className="font-serif-italic text-2xl text-amber-soft sm:text-3xl">Senior Backend Engineer</p>
            <h1 className="mt-2 font-sans font-extrabold leading-[0.84] tracking-tight text-cream">
              <span className="block text-[19vw] sm:text-[9.5rem] lg:text-[11rem]">FRANK</span>
              <span
                className="block text-[19vw] sm:text-[9.5rem] lg:text-[11rem]"
                style={{ WebkitTextStroke: "2px #f7f2e9", color: "transparent" }}
              >
                TANG
              </span>
            </h1>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-4"
          >
            <dl className="space-y-4 border-t border-cream/15 pt-5">
              {meta.map((m) => (
                <div key={m.label} className="flex items-baseline justify-between gap-4">
                  <dt className="text-xs font-semibold uppercase tracking-wider text-cream/40">{m.label}</dt>
                  <dd className="text-sm text-cream/80">{m.value}</dd>
                </div>
              ))}
            </dl>
            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wider text-cream"
            >
              Get in touch
              <span className="transition-transform group-hover:translate-x-1">&rarr;</span>
            </a>
          </motion.div>
        </div>
      </div>

      <div className="relative mt-16 overflow-hidden border-t border-cream/15 bg-ink/80 py-3">
        <div className="flex w-max animate-marquee gap-8 whitespace-nowrap">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex items-center gap-8 pr-8">
              {tickerItems.map((item) => (
                <span key={item} className="flex items-center gap-8 font-sans text-sm font-semibold uppercase tracking-widest text-cream/50">
                  {item}
                  <span className="text-amber-soft">&bull;</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
