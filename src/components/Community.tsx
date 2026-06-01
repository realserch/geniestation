"use client";

import Image from "next/image";
import ScrollReveal from "./ScrollReveal";
import { IMAGES } from "@/lib/images";
import { IconYoutube, IconInstagram, IconExternal } from "@/lib/icons";

export default function Community() {
  return (
    <section className="section-py bg-surface">
      <div className="mx-auto max-w-5xl px-5 lg:px-6">
        <ScrollReveal>
          <div className="text-center mb-14">
            <p className="section-label">Community</p>
            <h2 className="section-heading mb-3">
              Gemeinsam <span className="text-accent italic">elektrisch</span>
            </h2>
            <p className="section-subheading mx-auto text-center">
              Werde Teil der GenieStation-Community. Triff Gleichgesinnte auf
              Events und teile deine Umbau-Erfahrung.
            </p>
          </div>
        </ScrollReveal>

        {/* Gallery — compact grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2.5 mb-10">
          {IMAGES.community.map((img, i) => (
            <ScrollReveal key={img} delay={i * 0.04}>
              <div className="rounded-xl overflow-hidden shadow-sm border border-border/50">
                <Image
                  src={img}
                  alt={`GenieStation Community — Foto ${i + 1}`}
                  width={208}
                  height={156}
                  className="w-full h-36 object-cover"
                />
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="https://www.youtube.com/@geniestation"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <IconYoutube className="w-4 h-4" />
              YouTube
              <IconExternal className="w-3 h-3 text-text-muted" />
            </a>
            <a
              href="https://www.instagram.com/geniestation_/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-ghost"
            >
              <IconInstagram className="w-4 h-4" />
              Instagram
              <IconExternal className="w-3 h-3 text-text-muted" />
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
