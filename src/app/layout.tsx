import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "GenieStation | GS60 Elektro Umbaukit",
  description:
    "Elektro Umbaukit für Simson S51, S50, Schwalbe, SR50. 4kW, 100km Reichweite, 60km/h – Plug & Play, reversibel, mit Mustergutachten.",
  openGraph: {
    title: "GenieStation | GS60 Elektro Umbaukit",
    description:
      "Verwandle deinen Simson-Klassiker in ein modernes Elektro-Moped.",
    type: "website",
    locale: "de_DE",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className="antialiased">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crimson+Pro:ital,wght@0,400;0,600;1,400&family=DM+Sans:ital,opsz,wght@0,9..40,400..700;1,9..40,400..700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
