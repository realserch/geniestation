"use client";

import { type ComponentType } from "react";
import ScrollReveal from "./ScrollReveal";
import { IconBolt, IconWrench, IconBattery, IconSpeed, IconDocument, IconRefresh } from "@/lib/icons";

type IconProps = { className?: string };

const FEATURES: { icon: ComponentType<IconProps>; title: string; desc: string }[] = [
  { icon: IconBolt, title: "Mehr Power", desc: "Von 2,7 kW auf 4,0 kW Nennleistung – mehr Durchzug im Stadtverkehr." },
  { icon: IconWrench, title: "Selbsteinbau", desc: "Plug & Play: Akku rein, Kabel verbinden, losfahren." },
  { icon: IconBattery, title: "100 km Reichweite", desc: "Maximale Reichweite mit der Land-Variante. 50 km für die Stadt." },
  { icon: IconSpeed, title: "60 km/h", desc: "Originale Höchstgeschwindigkeit – führerscheinfrei mit Klasse AM/B." },
  { icon: IconDocument, title: "Einfache Zulassung", desc: "Mustergutachten liegt vor – kein Sondergutachten nötig." },
  { icon: IconRefresh, title: "Reversibel", desc: "Jederzeit rückbaubar. Keine bleibenden Änderungen." },
];

export default function Features() {
  return (
    <section className="section-py">
      <div className="mx-auto max-w-5xl px-5 lg:px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="section-label">Features</p>
            <h2 className="section-heading">
              Warum <span className="text-accent italic">GS60</span>?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {FEATURES.map((f, i) => {
            const Icon = f.icon;
            return (
              <ScrollReveal key={f.title} delay={i * 0.04}>
                <div className="card p-5 h-full">
                  <div className="w-9 h-9 rounded-lg bg-accent-subtle flex items-center justify-center mb-4 text-accent">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-sm font-bold text-text mb-1.5">{f.title}</h3>
                  <p className="text-xs text-text-secondary leading-relaxed">{f.desc}</p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
