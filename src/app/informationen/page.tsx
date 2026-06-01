import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IconDocument, IconArrowUpRight } from "@/lib/icons";

export const metadata = {
  title: "Informationen | GenieStation",
  description: "Technische Daten, PDFs und der Umbauprozess des GS60 Elektro Umbaukits.",
};

const STEPS = [
  { step: "1", title: "Beratung", desc: "Wähle die passende Variante und kläre offene Fragen mit unserem Team." },
  { step: "2", title: "Bestellung", desc: "Bestelle dein GS60 Kit. Lieferung direkt zu dir oder zur Partnerwerkstatt." },
  { step: "3", title: "Einbau", desc: "Selbsteinbau in 2–4 Stunden oder fachgerecht durch eine Partnerwerkstatt." },
  { step: "4", title: "Zulassung", desc: "Mit beiliegendem Mustergutachten direkt zur Zulassungsstelle." },
  { step: "5", title: "Losfahren", desc: "Aufsteigen, lächeln, emissionsfrei fahren. Willkommen in der Community." },
];

export default function InformationenPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="section-py">
          <div className="mx-auto max-w-7xl px-5 lg:px-8">
            <div className="text-center mb-16">
              <p className="section-label">Informationen</p>
              <h1 className="section-heading">
                Alles Wichtige{" "}
                <span className="text-accent italic">auf einen Blick</span>
              </h1>
            </div>

            {/* Downloads */}
            <div className="grid sm:grid-cols-2 gap-4 mb-20">
              <a
                href="/downloads/gs60-infoblatt.pdf"
                download
                className="card p-8 flex items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-accent-subtle flex items-center justify-center text-accent">
                  <IconDocument className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-text group-hover:text-accent transition-colors flex items-center gap-2">
                    GS60 Info Sheet
                    <IconArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                  </h3>
                  <p className="text-text-secondary text-sm">Technische Daten & Spezifikationen (PDF)</p>
                </div>
              </a>
              <a
                href="/downloads/informationsblatt-sr1.pdf"
                download
                className="card p-8 flex items-center gap-5 group"
              >
                <div className="w-14 h-14 rounded-2xl bg-success-subtle flex items-center justify-center text-success">
                  <IconDocument className="w-6 h-6" />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="font-bold text-text group-hover:text-accent transition-colors flex items-center gap-2">
                    Infoblatt SR1/SR2
                    <IconArrowUpRight className="w-3.5 h-3.5 opacity-40" />
                  </h3>
                  <p className="text-text-secondary text-sm">Details zu SR-Modellen (PDF)</p>
                </div>
              </a>
            </div>

            {/* Process */}
            <h2 className="text-3xl lg:text-4xl font-[family-name:var(--font-display)] text-text text-center mb-2">
              Der Umbauprozess{" "}
              <span className="text-accent italic">in fünf Schritten</span>
            </h2>
            <p className="text-text-secondary text-center mb-12">
              Von der Bestellung bis zur ersten Fahrt.
            </p>

            <div className="relative">
              <div className="hidden lg:block absolute top-10 left-[8%] right-[8%] h-px bg-border" />
              <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-3">
                {STEPS.map((s) => (
                  <div key={s.step} className="relative text-center card p-6">
                    <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center text-sm font-bold mx-auto mb-4 relative z-10">
                      {s.step}
                    </div>
                    <h3 className="font-bold text-text mb-1.5">{s.title}</h3>
                    <p className="text-text-secondary text-sm leading-relaxed">{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
