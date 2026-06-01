"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { IMAGES } from "@/lib/images";

const STATS = [
  { value: "100 km", label: "Reichweite" },
  { value: "4 kW", label: "Nennleistung" },
  { value: "60 km/h", label: "Höchstgeschw." },
  { value: "36", label: "Modelle" },
];

export default function Hero() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => setMounted(true), []);

  const content = (
    <section className="pt-28 pb-16 sm:pt-36 sm:pb-20">
      <div className="mx-auto max-w-4xl px-5 lg:px-6 text-center">
        <div>
          <span className="badge mb-5">GS60 Elektro Umbaukit</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-[family-name:var(--font-display)] text-text leading-[1.08] mb-5 max-w-2xl mx-auto">
          Dein Simson.{" "}
          <span className="text-accent italic">Elektrisch.</span>
        </h1>

        <p className="text-base sm:text-lg text-text-secondary leading-relaxed max-w-xl mx-auto mb-8">
          Verwandle deinen Simson-Klassiker in ein modernes Elektro-Moped.
          <strong className="text-text font-semibold"> Plug &amp; Play, reversibel, mit Mustergutachten.</strong>
        </p>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          <Link href="/produkte" className="btn-primary">Preise &amp; konfigurieren</Link>
          <a href="#vorteile" className="btn-secondary">Mehr erfahren</a>
        </div>

        <div className="mx-auto max-w-md">
          <div className="rounded-2xl overflow-hidden shadow-md border border-border/50 bg-white">
            <Image
              src={IMAGES.heroProduct}
              alt="GS60 Elektro Umbaukit"
              width={439}
              height={254}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>

        <div className="mt-12 flex flex-wrap justify-center gap-x-10 gap-y-4">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-xl font-bold text-text font-[family-name:var(--font-display)]">
                {stat.value}
              </div>
              <div className="text-xs text-text-muted tracking-wide uppercase">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  // Render plain content first, enhance with animation after mount
  if (!mounted) return content;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4 }}
    >
      {content}
    </motion.div>
  );
}
