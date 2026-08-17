import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Stack" },
  { href: "#experience", label: "Work" },
  { href: "#projects", label: "Projects" },
  { href: "#education", label: "Education" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-amber/25 bg-ink">
      <nav className="mx-auto flex max-w-6xl items-center justify-between container-px py-4">
        <a href="#top" className="font-sans text-xs font-bold uppercase tracking-[0.25em] text-cream">
          Tianlei Tang
        </a>

        <ul className="hidden items-center md:flex">
          {links.map((link, i) => (
            <li key={link.href} className="flex items-center">
              {i > 0 && <span className="mx-3 text-cream/20">/</span>}
              <a
                href={link.href}
                className="text-xs font-semibold uppercase tracking-wider text-cream/55 transition-colors hover:text-cream"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <a
          href="#contact"
          className="hidden text-xs font-bold uppercase tracking-wider text-amber-soft transition-colors hover:text-cream md:block"
        >
          [ Contact ]
        </a>

        <button className="text-cream md:hidden" onClick={() => setOpen((v) => !v)} aria-label="Toggle menu">
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-cream/10 md:hidden"
          >
            <ul className="flex flex-col gap-1 px-6 py-4">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="block py-2 text-sm font-medium text-cream/70 hover:text-cream"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="#contact"
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-bold text-amber-soft"
                >
                  [ Contact ]
                </a>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
