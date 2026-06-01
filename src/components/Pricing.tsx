"use client";

import ScrollReveal from "./ScrollReveal";
import Link from "next/link";
import { IconCheck, IconBattery } from "@/lib/icons";

const TIERS = [
  {
    name: "Stadt",
    range: "50 km",
    price: "2.590 €",
    description: "Für den täglichen Stadtverkehr und kurze Strecken.",
    features: [
      "GS60 Elektro-Umbaukit",
      "50 km Reichweite",
      "4 kW Nennleistung",
      "60 km/h Höchstgeschw.",
      "Entnehmbarer Akku",
      "Mustergutachten inklusive",
    ],
    highlight: false,
  },
  {
    name: "Land",
    range: "100 km",
    price: "3.590 €",
    description: "Maximale Reichweite für längere Touren und den ländlichen Raum.",
    features: [
      "GS60 Elektro-Umbaukit",
      "100 km Reichweite",
      "4 kW Nennleistung",
      "60 km/h Höchstgeschw.",
      "Entnehmbarer Akku",
      "Mustergutachten inklusive",
    ],
    highlight: true,
  },
];

export default function Pricing() {
  return (
    <section id="preise" className="section-py bg-surface">
      <div className="mx-auto max-w-4xl px-5 lg:px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="section-label">Preise</p>
            <h2 className="section-heading">
              Wähle deine{" "}
              <span className="text-accent italic">Reichweite</span>
            </h2>
            <p className="section-subheading mx-auto mt-3 text-center">
              Alle Preise inkl. MwSt. zzgl. Versand.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-4">
          {TIERS.map((tier, i) => (
            <ScrollReveal key={tier.name} delay={i * 0.06}>
              <div
                className={`relative rounded-2xl p-6 lg:p-8 bg-white border transition-all ${
                  tier.highlight
                    ? "border-accent/30 shadow-md ring-1 ring-accent/8"
                    : "border-border shadow-sm hover:shadow-md"
                }`}
              >
                {tier.highlight && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-accent text-white text-xs font-bold tracking-wide">
                    Beliebteste Wahl
                  </div>
                )}

                <div className="flex items-baseline justify-between mb-4">
                  <h3 className="text-xl font-[family-name:var(--font-display)] text-text">
                    {tier.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-accent">
                    <IconBattery className="w-4 h-4" />
                    <span className="text-sm font-semibold">{tier.range}</span>
                  </div>
                </div>

                <p className="text-text-secondary text-sm mb-4">{tier.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-[family-name:var(--font-display)] text-text">
                    {tier.price}
                  </span>
                  <span className="text-text-muted text-sm ml-1.5">ab-Preis</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-2">
                      <IconCheck className="w-3.5 h-3.5 text-success shrink-0" />
                      <span className="text-text-secondary text-xs">{feat}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  href="/kontakt"
                  className={`block w-full py-3 rounded-full text-center font-semibold text-sm transition-all ${
                    tier.highlight
                      ? "bg-accent text-white hover:bg-accent-hover shadow-sm"
                      : "bg-bg text-text hover:bg-border border border-border"
                  }`}
                >
                  Jetzt anfragen
                </Link>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
