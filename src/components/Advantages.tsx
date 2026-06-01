"use client";

import ScrollReveal from "./ScrollReveal";

const ADVANTAGES = [
  { title: "Zuverlässig", desc: "Bürstenloser 4kW-Motor mit minimalem Wartungsaufwand. Kein Ölwechsel, keine Zündkerzen." },
  { title: "Einfache Zulassung", desc: "Mustergutachten für 36 Modelle – kein teures Einzelgutachten nötig." },
  { title: "Voller Support", desc: "Telefonische Einbauhilfe, Anleitungen und eine wachsende Community." },
  { title: "100% reversibel", desc: "Jederzeit zum Originalzustand zurück – für den Wiederverkauf oder Sammlerwert." },
  { title: "Ein Kit für alle", desc: "Ob S51, Schwalbe oder SR50 – der GS60 passt in über 36 Modelle." },
  { title: "Einfacher Einbau", desc: "Akku einsetzen, Motor montieren, Kabel verbinden. In 2–4 Stunden erledigt." },
];

export default function Advantages() {
  return (
    <section id="vorteile" className="section-py">
      <div className="mx-auto max-w-5xl px-5 lg:px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="section-label">Vorteile</p>
            <h2 className="section-heading">
              Alles <span className="text-accent italic">durchdacht</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {ADVANTAGES.map((adv, i) => (
            <ScrollReveal key={adv.title} delay={i * 0.04}>
              <div className="card p-5 h-full">
                <div className="flex items-center gap-2 mb-1.5">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                  <h3 className="text-sm font-bold text-text">{adv.title}</h3>
                </div>
                <p className="text-xs text-text-secondary leading-relaxed">{adv.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
