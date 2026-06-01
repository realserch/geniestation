"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { IMAGES } from "@/lib/images";
import { IconCheck, IconRefresh } from "@/lib/icons";

const MODELS = [
  "S51", "S50", "Schwalbe", "SR50", "DKW",
  "S53", "SR4", "S70", "Habicht", "Spatz",
];

const BENEFITS = [
  "100% reversibel – zurück zum Original",
  "Kein Schweißen oder Bohren nötig",
  "Original-Drehgriff bleibt erhalten",
];

export default function Compatibility() {
  return (
    <section className="section-py bg-surface">
      <div className="mx-auto max-w-5xl px-5 lg:px-6">
        <div className="grid lg:grid-cols-5 gap-10 items-center">
          {/* Image — modest size */}
          <ScrollReveal className="lg:col-span-2">
            <div className="rounded-2xl overflow-hidden shadow-sm border border-border/50">
              <Image
                src={IMAGES.driveUnit}
                alt="GS60 Antriebseinheit"
                width={285}
                height={285}
                className="w-full h-auto"
              />
            </div>
          </ScrollReveal>

          {/* Text */}
          <ScrollReveal className="lg:col-span-3">
            <p className="section-label">Kompatibilität</p>
            <h2 className="section-heading mb-5">
              Ein Antrieb für{" "}
              <span className="text-accent italic">alle Modelle</span>
            </h2>
            <p className="section-subheading mb-8 text-[15px]">
              Der GS60 Umbaukit passt in über 36 Simson-Modelle. Der Einbau ist
              komplett reversibel – kein Schweißen, kein Schneiden.
            </p>

            <ul className="space-y-2.5 mb-6">
              {BENEFITS.map((item) => (
                <li key={item} className="flex items-center gap-2.5 text-text-secondary text-sm">
                  <IconCheck className="w-4 h-4 text-success shrink-0" />
                  {item}
                </li>
              ))}
            </ul>

            <div className="flex items-center gap-2 text-text-muted text-xs mb-4">
              <IconRefresh className="w-3.5 h-3.5" />
              <span>Kompatible Modelle (Auszug)</span>
            </div>

            <div className="flex flex-wrap gap-1.5">
              {MODELS.map((model) => (
                <span
                  key={model}
                  className="px-3 py-1.5 rounded-full bg-bg border border-border text-xs font-medium text-text-secondary"
                >
                  {model}
                </span>
              ))}
              <span className="px-3 py-1.5 text-xs text-text-muted self-center">
                …und viele mehr
              </span>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
