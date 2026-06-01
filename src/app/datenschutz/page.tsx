import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Datenschutz | GenieStation" };

export default function DatenschutzPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="section-py">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <h1 className="text-4xl font-[family-name:var(--font-display)] text-text mb-8">Datenschutzerklärung</h1>
            <div className="card p-8 space-y-6 text-text-secondary text-sm leading-relaxed">
              <h2 className="text-lg font-bold text-text">1. Datenschutz auf einen Blick</h2>
              <p>Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre personenbezogenen Daten vertraulich und entsprechend der gesetzlichen Datenschutzvorschriften sowie dieser Datenschutzerklärung.</p>

              <h2 className="text-lg font-bold text-text">2. Verantwortliche Stelle</h2>
              <p>Onward GbR<br />E-Mail: info@geniestation.com</p>

              <h2 className="text-lg font-bold text-text">3. Erfassung von Daten</h2>
              <p>Beim Besuch dieser Website werden durch den Hosting-Dienst automatisch Informationen wie IP-Adresse, Browsertyp und Zugriffszeiten erfasst (Server-Logfiles). Diese Daten sind nicht bestimmten Personen zuordenbar. Wenn Sie uns per Kontaktformular oder E-Mail Anfragen zukommen lassen, werden Ihre Angaben zur Bearbeitung der Anfrage gespeichert.</p>

              <h2 className="text-lg font-bold text-text">4. Ihre Rechte</h2>
              <p>Sie haben das Recht auf Auskunft, Berichtigung, Löschung und Einschränkung der Verarbeitung Ihrer personenbezogenen Daten. Bitte kontaktieren Sie uns dazu unter info@geniestation.com.</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
