import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { IconBuilding, IconMoped, IconCheck } from "@/lib/icons";

export const metadata = {
  title: "Elektro Mopeds Ready2GO | GenieStation",
  description: "Fertig umgerüstete Simson Elektro-Mopeds für B2B und B2C.",
};

const B2B_BENEFITS = [
  "Ideal für Messen, Touren & Mitarbeiter-Benefits",
  "Geringer Wartungsaufwand, hohe Zuverlässigkeit",
  "Custom-Lackierung in Ihren Firmenfarben",
  "GS60 Umbaukit mit 4 kW und bis 100 km Reichweite",
];

const B2C_BENEFITS = [
  "Fertig umgerüstete Fahrzeuge verfügbar",
  "Umbau deines eigenen Mopeds möglich",
  "Partnerwerkstatt mit TÜV-Abnahme",
  "Individuelle Beratung vor Ort",
];

export default function ElektroMopedsPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="section-py">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center mb-16">
              <p className="section-label">Ready2GO</p>
              <h1 className="section-heading">
                Elektro Mopeds{" "}
                <span className="text-accent italic">Ready2GO</span>
              </h1>
              <p className="section-subheading mx-auto mt-4 text-center">
                Fertig umgerüstete Simson Mopeds mit dem GS60 Elektroantrieb.
                Für Privatkunden und Geschäftskunden.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-5">
              <div className="card p-10 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-accent-subtle text-accent flex items-center justify-center mb-5">
                  <IconBuilding className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-[family-name:var(--font-display)] text-text mb-4">
                  B2B – Für Unternehmen
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Perfekter Werbeträger für Ihr Unternehmen – Green Marketing.
                  Custom-Lackierung in Firmenfarben, straßenzugelassen mit
                  60 km/h. Made in Germany mit zertifizierten Komponenten.
                  Volle Garantie und Werkstattsupport.
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {B2B_BENEFITS.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-text-secondary text-sm">
                      <IconCheck className="w-4 h-4 text-success shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt" className="btn-primary w-fit">B2B anfragen</Link>
              </div>

              <div className="card p-10 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-success-subtle text-success flex items-center justify-center mb-5">
                  <IconMoped className="w-6 h-6" />
                </div>
                <h2 className="text-3xl font-[family-name:var(--font-display)] text-text mb-4">
                  B2C – Für Privatkunden
                </h2>
                <p className="text-text-secondary leading-relaxed mb-6">
                  Kaufe ein fertig umgerüstetes Simson Moped oder lass dein
                  eigenes Fahrzeug von einer Partnerwerkstatt umbauen.
                  Inklusive TÜV-Abnahme, Beratung und individueller Anpassung.
                </p>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {B2C_BENEFITS.map((item) => (
                    <li key={item} className="flex items-center gap-2.5 text-text-secondary text-sm">
                      <IconCheck className="w-4 h-4 text-success shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Link href="/kontakt" className="btn-primary w-fit">B2C anfragen</Link>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
