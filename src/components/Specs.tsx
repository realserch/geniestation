"use client";

import ScrollReveal from "./ScrollReveal";
import { IconBolt, IconBattery, IconSpeed, IconCheck, IconWrench, IconPlug } from "@/lib/icons";

const SPECS = [
  { icon: IconBolt, value: "4 kW", label: "Nennleistung" },
  { icon: IconBattery, value: "100 km", label: "Reichweite" },
  { icon: IconSpeed, value: "60 km/h", label: "Höchstgeschw." },
  { icon: IconCheck, value: "36 Modelle", label: "Mustergutachten" },
  { icon: IconWrench, value: "Plug & Play", label: "Selbsteinbau" },
  { icon: IconPlug, value: "230V", label: "Akku laden" },
];

export default function Specs() {
  return (
    <section id="produkte" className="section-py">
      <div className="mx-auto max-w-5xl px-5 lg:px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="section-label">Technik</p>
            <h2 className="section-heading mb-3">
              Technik, die{" "}
              <span className="text-accent italic">überzeugt</span>
            </h2>
            <p className="section-subheading mx-auto text-center">
              4 kW Nennleistung, 30 Nm Drehmoment, entnehmbarer Akku, Mustergutachten für 36 Modelle.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-3 lg:grid-cols-6 gap-2">
          {SPECS.map((spec, i) => (
            <ScrollReveal key={spec.label} delay={i * 0.04}>
              <div className="card p-5 text-center h-full">
                <div className="w-9 h-9 rounded-lg bg-accent-subtle text-accent flex items-center justify-center mx-auto mb-3">
                  <spec.icon className="w-4 h-4" />
                </div>
                <div className="text-lg font-bold text-text font-[family-name:var(--font-display)]">
                  {spec.value}
                </div>
                <div className="text-xs text-text-secondary mt-0.5">{spec.label}</div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
