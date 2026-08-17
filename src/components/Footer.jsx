import { profile } from "../data/resume";

export default function Footer() {
  return (
    <footer className="bg-ink px-6 py-8 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 text-xs text-cream/35 sm:flex-row">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind.</p>
        <p>Photography via Unsplash.</p>
      </div>
    </footer>
  );
}
