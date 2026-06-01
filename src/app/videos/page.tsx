import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { IconYoutube, IconPlay, IconExternal } from "@/lib/icons";

export const metadata = {
  title: "Videos | GenieStation",
  description: "GenieStation YouTube-Kanal – Einbauvideos, Testfahrten und mehr zum GS60.",
};

const TOPICS = [
  "GS60 Einbau-Tutorials Schritt für Schritt",
  "Testfahrten und Reichweiten-Tests",
  "Event-Impressionen",
  "Community-Vorstellungen umgebauter Mopeds",
  "Technische Deep-Dives und FAQs",
];

export default function VideosPage() {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-24">
        <div className="section-py">
          <div className="mx-auto max-w-4xl px-5 lg:px-8 text-center">
            <p className="section-label">Videos</p>
            <h1 className="section-heading mb-6">
              GenieStation auf{" "}
              <span className="text-accent italic">YouTube</span>
            </h1>
            <p className="section-subheading mx-auto mb-10 text-center">
              Auf unserem YouTube-Kanal findest du Einbauvideos, Testfahrten,
              Event-Berichte und mehr rund um den GS60 Elektro-Umbaukit.
            </p>

            <a
              href="https://www.youtube.com/@geniestation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary text-base mb-12"
            >
              <IconYoutube className="w-5 h-5" />
              Zum YouTube-Kanal
              <IconExternal className="w-4 h-4 opacity-60" />
            </a>

            <div className="card p-10 text-left">
              <h2 className="text-2xl font-[family-name:var(--font-display)] text-text mb-6">
                Was dich erwartet
              </h2>
              <ul className="space-y-3.5">
                {TOPICS.map((item) => (
                  <li key={item} className="flex items-center gap-3.5 text-text-secondary">
                    <IconPlay className="w-4 h-4 text-accent shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
