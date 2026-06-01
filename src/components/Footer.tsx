import Link from "next/link";
import Logo from "@/components/Logo";
import { IconYoutube, IconInstagram, IconMail } from "@/lib/icons";

const NAV_LINKS = [
  { href: "/produkte", label: "Produkte" },
  { href: "/elektro-mopeds", label: "Elektro Mopeds" },
  { href: "/informationen", label: "Informationen" },
  { href: "/videos", label: "Videos" },
];

const LEGAL_LINKS = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/kontakt", label: "Kontakt" },
  { href: "/agb", label: "AGB" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border">
      <div className="mx-auto max-w-5xl px-5 lg:px-6 py-14">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2.5 mb-3">
              <Logo className="w-7 h-7 text-accent" />
              <span className="font-bold text-lg text-text tracking-tight">
                GenieStation
              </span>
            </Link>
            <p className="text-sm text-text-secondary leading-relaxed">
              Elektro Umbaukits für Simson Mopeds.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3.5">
              Navigation
            </h4>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3.5">
              Rechtliches
            </h4>
            <ul className="space-y-2">
              {LEGAL_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-text-secondary hover:text-text transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold text-text-muted uppercase tracking-widest mb-3.5">
              Social
            </h4>
            <div className="flex gap-2 mb-3">
              <a
                href="https://www.youtube.com/@geniestation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/25 transition-all"
                aria-label="YouTube"
              >
                <IconYoutube className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/geniestation_/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-lg border border-border flex items-center justify-center text-text-secondary hover:text-accent hover:border-accent/25 transition-all"
                aria-label="Instagram"
              >
                <IconInstagram className="w-4 h-4" />
              </a>
            </div>
            <a
              href="mailto:info@geniestation.com"
              className="inline-flex items-center gap-1.5 text-sm text-text-secondary hover:text-accent transition-colors"
            >
              <IconMail className="w-3.5 h-3.5" />
              info@geniestation.com
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-text-muted">
            &copy; {new Date().getFullYear()} GenieStation
          </p>
          <p className="text-xs text-text-muted">
            Elektromobilität für klassische Zweiräder
          </p>
        </div>
      </div>
    </footer>
  );
}
