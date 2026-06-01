import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IconMail, IconPhone } from "@/lib/icons";

export const metadata = {
  title: "Kontakt | GenieStation",
  description: "Kontaktiere GenieStation für Fragen zum GS60 Elektro Umbaukit.",
};

const OPTIONS = [
  "Allgemeine Anfrage",
  "GS60 Stadt (50 km)",
  "GS60 Land (100 km)",
  "Partnerwerkstatt werden",
  "B2B Anfrage",
  "Ready2GO Moped",
  "Support / Technische Frage",
];

export default function KontaktPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="section-py">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <div className="text-center mb-12">
              <p className="section-label">Kontakt</p>
              <h1 className="section-heading">
                Wir freuen uns auf{" "}
                <span className="text-accent italic">deine Nachricht</span>
              </h1>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mb-12">
              <div className="card p-6 text-center">
                <div className="w-10 h-10 rounded-xl bg-accent-subtle text-accent flex items-center justify-center mx-auto mb-3">
                  <IconMail className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-text mb-1">E-Mail</h3>
                <a href="mailto:info@geniestation.com" className="text-accent hover:underline text-sm font-medium">
                  info@geniestation.com
                </a>
              </div>
              <div className="card p-6 text-center">
                <div className="w-10 h-10 rounded-xl bg-success-subtle text-success flex items-center justify-center mx-auto mb-3">
                  <IconPhone className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-text mb-1">Telefon</h3>
                <p className="text-text-secondary text-sm">Auf Anfrage</p>
              </div>
            </div>

            <div className="card p-8">
              <h2 className="text-2xl font-[family-name:var(--font-display)] text-text mb-6">Nachricht senden</h2>
              <form className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1.5">Name *</label>
                    <input
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-text placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all text-sm"
                      placeholder="Dein Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-text mb-1.5">E-Mail *</label>
                    <input
                      type="email"
                      required
                      className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-text placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all text-sm"
                      placeholder="deine@email.de"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text mb-1.5">Betreff</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-text focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all text-sm">
                    {OPTIONS.map((opt) => (
                      <option key={opt}>{opt}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-semibold text-text mb-1.5">Nachricht *</label>
                  <textarea
                    required
                    rows={5}
                    className="w-full px-4 py-3 rounded-xl border border-border bg-bg text-text placeholder:text-text-muted focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent/20 transition-all text-sm resize-y"
                    placeholder="Deine Nachricht an uns..."
                  />
                </div>
                <button type="submit" className="btn-primary">Nachricht senden</button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
