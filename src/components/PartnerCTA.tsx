"use client";

import ScrollReveal from "./ScrollReveal";
import Link from "next/link";
import { IconBuilding } from "@/lib/icons";

export default function PartnerCTA() {
  return (
    <section id="partner" className="section-py bg-accent">
      <div className="mx-auto max-w-3xl px-5 lg:px-6 text-center">
        <ScrollReveal>
          <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/15 text-white/90 text-xs font-semibold mb-5">
            <IconBuilding className="w-3.5 h-3.5" />
            Für Werkstätten & Händler
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-[family-name:var(--font-display)] text-white mb-4">
            Werde <span className="italic">Partner</span>
          </h2>
          <p className="text-base text-white/75 max-w-xl mx-auto mb-8 leading-relaxed">
            Du betreibst eine Zweirad-Werkstatt? Werde zertifizierter
            GenieStation-Partner. Wir unterstützen dich mit Schulungen und
            exklusiven Margen.
          </p>
        </ScrollReveal>

        <ScrollReveal delay={0.06}>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/kontakt" className="bg-white text-accent font-semibold px-7 py-3.5 rounded-full hover:bg-white/95 transition-all shadow-md text-sm">
              Partner werden
            </Link>
            <Link href="/elektro-mopeds" className="border-2 border-white/30 text-white font-semibold px-7 py-3.5 rounded-full hover:bg-white/10 transition-all text-sm">
              Ready2GO Mopeds
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
