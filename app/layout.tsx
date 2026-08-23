import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import { GeistMono } from "geist/font/mono";
import "./globals.css";

export const metadata: Metadata = {
  title: "Thermomètre — Causes, Conséquences, Solutions du changement climatique",
  description: "Dashboard climat interactif : données GIEC AR6 et Our World in Data sur les causes du réchauffement, ses conséquences et les solutions d'atténuation.",
  openGraph: {
    title: "Thermomètre — Dashboard climat GIEC AR6",
    description: "Causes, conséquences et solutions du changement climatique. Données GIEC AR6 et Our World in Data.",
    type: "website",
    locale: "fr_FR",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="font-sans antialiased">
        {children}
      </body>
    </html>
  );
}
