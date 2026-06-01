import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import {
  IconBolt,
  IconBattery,
  IconWrench,
  IconCheck,
  IconSpeed,
  IconMoped,
  IconBuilding,
  IconArrowUpRight,
} from "@/lib/icons";

export const metadata = {
  title: "Produkte | GenieStation",
  description: "GS60 Elektro Umbaukit, GS Motorenfamilie, Tuning-Motoren, Ready2GO Mopeds und Einbauservice für Simson Mopeds.",
};

const PRODUCTS = [
  {
    icon: IconBolt,
    name: "GS60 Stadt",
    subtitle: "50 km Reichweite",
    price: "ab 2.590 €",
    description:
      "Das Elektro-Umbaukit für den täglichen Stadtverkehr. 4 kW, 60 km/h, Plug & Play.",
    features: [
      "4 kW Nennleistung",
      "50 km Reichweite",
      "60 km/h",
      "Mustergutachten für 36 Modelle",
      "Entnehmbarer Akku",
    ],
    highlight: false,
  },
  {
    icon: IconBattery,
    name: "GS60 Land",
    subtitle: "100 km Reichweite",
    price: "ab 3.590 €",
    description:
      "Maximale Reichweite für längere Touren. Gleiche Power, doppelte Distanz.",
    features: [
      "4 kW Nennleistung",
      "100 km Reichweite",
      "60 km/h",
      "Mustergutachten für 36 Modelle",
      "Entnehmbarer Akku",
    ],
    highlight: true,
  },
  {
    icon: IconSpeed,
    name: "GS-45 Umbaukit",
    subtitle: "45 km/h Klasse",
    price: "ab 2.290 €",
    description:
      "Die führerscheinfreie Variante für die Moped-Klasse AM. Gleiche 4 kW Power, abgeregelt auf 45 km/h.",
    features: [
      "4 kW Nennleistung",
      "50 km Reichweite",
      "45 km/h (Klasse AM)",
      "Mustergutachten",
      "Entnehmbarer Akku",
    ],
    highlight: false,
  },
  {
    icon: IconBolt,
    name: "GS-50 Umbaukit",
    subtitle: "50 km/h Klasse",
    price: "ab 2.390 €",
    description:
      "Der Mittelweg: mehr Speed als GS-45, perfekt für die Versicherungsklasse bis 50 km/h.",
    features: [
      "4 kW Nennleistung",
      "50 km Reichweite",
      "50 km/h",
      "Mustergutachten",
      "Entnehmbarer Akku",
    ],
    highlight: false,
  },
  {
    icon: IconArrowUpRight,
    name: "Tuning-Motor",
    subtitle: "Maximale Performance",
    price: "auf Anfrage",
    description:
      "Für Showzwecke und Enthusiasten. Maximales Drehmoment ab der ersten Umdrehung – bei gleichbleibender Langlebigkeit.",
    features: [
      "Maximale Leistung",
      "Max. Drehmoment ab Start",
      "Für Show & Rennstrecke",
      "Langlebige Komponenten",
      "Individuelle Beratung",
    ],
    highlight: false,
  },
  {
    icon: IconMoped,
    name: "Ready2GO Mopeds",
    subtitle: "Fertig umgebaute Fahrzeuge",
    price: "auf Anfrage",
    description:
      "Komplett umgerüstete Simson Mopeds – einsteigen und losfahren. Für Privat- und Geschäftskunden, mit Straßenzulassung.",
    features: [
      "Fertig umgebaut & fahrbereit",
      "Straßenzulassung 60 km/h",
      "Custom-Lackierung möglich",
      "Garantie & Werkstattsupport",
      "B2B & B2C verfügbar",
    ],
    highlight: false,
  },
  {
    icon: IconWrench,
    name: "Einbauservice",
    subtitle: "Durch Partnerwerkstatt",
    price: "auf Anfrage",
    description:
      "Lass den Umbau von einer zertifizierten Partnerwerkstatt durchführen. Inkl. TÜV-Abnahme und Garantie auf den Einbau.",
    features: [
      "Fachgerechter Einbau",
      "TÜV-Abnahme inkl.",
      "Garantie auf Einbau",
      "Beratung vor Ort",
      "Bundesweite Partner",
    ],
    highlight: false,
  },
  {
    icon: IconBuilding,
    name: "B2B Partner",
    subtitle: "Werkstatt & Händler",
    price: "auf Anfrage",
    description:
      "Werden Sie zertifizierter GenieStation Partner. Attraktive Margen, exklusive Gebietsschutz-Optionen und technischer Support.",
    features: [
      "Attraktive Händlermarge",
      "Gebietsschutz möglich",
      "Technischer Support",
      "Marketing-Material",
      "Exklusive Partnerangebote",
    ],
    highlight: false,
  },
];

export default function ProduktePage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="section-py">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center mb-16">
              <p className="section-label">Produkte</p>
              <h1 className="section-heading">
                Unser <span className="text-accent italic">Produktkatalog</span>
              </h1>
              <p className="section-subheading mx-auto mt-4 text-center">
                Alle Preise inkl. MwSt. zzgl. Versand. Finanzierung auf Anfrage möglich.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
              {PRODUCTS.map((product) => (
                <div
                  key={product.name}
                  className={`relative rounded-[24px] p-8 bg-white border flex flex-col transition-all duration-300 ${
                    product.highlight
                      ? "border-accent/30 shadow-lg ring-1 ring-accent/8"
                      : "border-border shadow-sm hover:shadow-md"
                  }`}
                >
                  {product.highlight && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-5 py-1.5 rounded-full bg-accent text-white text-xs font-bold tracking-wide">
                      Beliebteste Wahl
                    </div>
                  )}
                  <div className="w-11 h-11 rounded-xl bg-accent-subtle text-accent flex items-center justify-center mb-5">
                    <product.icon className="w-5 h-5" />
                  </div>
                  <p className="text-sm font-semibold text-accent mb-1">{product.subtitle}</p>
                  <h3 className="text-2xl font-[family-name:var(--font-display)] text-text mb-2">{product.name}</h3>
                  <p className="text-text-secondary text-sm mb-4">{product.description}</p>
                  <div className="text-3xl font-[family-name:var(--font-display)] text-text mb-6">{product.price}</div>
                  <ul className="space-y-2 mb-8 flex-1">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2.5 text-sm text-text-secondary">
                        <IconCheck className="w-4 h-4 text-success shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/kontakt" className="btn-primary w-full">Anfragen</Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
