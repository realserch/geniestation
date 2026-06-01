import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "AGB | GenieStation" };

const SECTIONS = [
  { title: "1. Geltungsbereich", body: "Diese Allgemeinen Geschäftsbedingungen gelten für alle Lieferungen und Leistungen der Onward GbR (nachfolgend »GenieStation«) an Verbraucher und Unternehmer." },
  { title: "2. Vertragspartner", body: "Der Kaufvertrag kommt zustande mit: Onward GbR, E-Mail: info@geniestation.com" },
  { title: "3. Angebot und Vertragsschluss", body: "Die Angebote von GenieStation sind freibleibend. Ein Vertrag kommt durch die Auftragsbestätigung per E-Mail zustande." },
  { title: "4. Preise und Zahlung", body: "Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer. Die Zahlung erfolgt per Vorkasse, Rechnung oder nach Vereinbarung." },
  { title: "5. Lieferung", body: "Die Lieferzeit beträgt in der Regel 2–4 Wochen nach Auftragsbestätigung." },
  { title: "6. Gewährleistung", body: "Es gelten die gesetzlichen Gewährleistungsregelungen. Die Gewährleistungsfrist beträgt 2 Jahre ab Lieferung." },
  { title: "7. Eigentumsvorbehalt", body: "Die gelieferte Ware bleibt bis zur vollständigen Bezahlung Eigentum von GenieStation." },
  { title: "8. Widerrufsrecht", body: "Verbrauchern steht ein gesetzliches Widerrufsrecht zu. Die Widerrufsfrist beträgt 14 Tage ab Erhalt der Ware." },
  { title: "9. Schlussbestimmungen", body: "Es gilt das Recht der Bundesrepublik Deutschland. Gerichtsstand ist, soweit gesetzlich zulässig, der Sitz von GenieStation." },
];

export default function AGBPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="section-py">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <h1 className="text-4xl font-[family-name:var(--font-display)] text-text mb-8">
              Allgemeine Geschäftsbedingungen
            </h1>
            <div className="card p-8 space-y-6 text-text-secondary text-sm leading-relaxed">
              {SECTIONS.map((s) => (
                <div key={s.title}>
                  <h2 className="text-lg font-bold text-text mb-1.5">{s.title}</h2>
                  <p>{s.body}</p>
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
