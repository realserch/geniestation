import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = { title: "Impressum | GenieStation" };

export default function ImpressumPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="section-py">
          <div className="mx-auto max-w-3xl px-5 lg:px-8">
            <h1 className="text-4xl font-[family-name:var(--font-display)] text-text mb-8">Impressum</h1>
            <div className="card p-8 space-y-5 text-text-secondary text-sm leading-relaxed">
              <p><strong className="text-text">GenieStation</strong></p>
              <p>Onward GbR<br />vertreten durch die Gesellschafter</p>
              <p>Adresse auf Anfrage</p>
              <p>
                E-Mail:{" "}
                <a href="mailto:info@geniestation.com" className="text-accent hover:underline font-medium">
                  info@geniestation.com
                </a>
              </p>
              <p>
                Web:{" "}
                <a href="https://www.geniestation.com" className="text-accent hover:underline font-medium">
                  www.geniestation.com
                </a>
              </p>
              <p className="text-text-muted">
                Umsatzsteuer-Identifikationsnummer gemäß §27a UStG auf Anfrage.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
