"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { IMAGES } from "@/lib/images";
import { IconPlug, IconPalette } from "@/lib/icons";

const SHOWCASE = [
  {
    img: IMAGES.battery,
    icon: IconPlug,
    title: "Akku entnehmbar",
    description:
      "Der Akku ersetzt den klassischen Tank und ist in Sekunden entnehmbar. Laden an jeder 230V-Steckdose – direkt am Fahrzeug oder in der Wohnung.",
  },
  {
    img: IMAGES.seatBench,
    icon: IconPalette,
    title: "Jede Sitzbank möglich",
    description:
      "Ob Originalsitzbank, Custom-Polster oder Sportbank – der GS60 beeinträchtigt die Sitzposition nicht. Dein Moped bleibt dein Moped.",
  },
];

export default function ProductShowcase() {
  return (
    <section className="section-py bg-surface">
      <div className="mx-auto max-w-5xl px-5 lg:px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="section-label">Produktdetails</p>
            <h2 className="section-heading">
              Durchdacht bis ins{" "}
              <span className="text-accent italic">Detail</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {SHOWCASE.map((item, i) => (
            <ScrollReveal key={item.title} delay={i * 0.08}>
              <div className="card overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  width={285}
                  height={285}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-2">
                    <item.icon className="w-4 h-4 text-accent" />
                    <h3 className="text-lg font-bold text-text">{item.title}</h3>
                  </div>
                  <p className="text-sm text-text-secondary leading-relaxed">{item.description}</p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
