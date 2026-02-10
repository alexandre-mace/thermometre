import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({subsets:['latin'],variable:'--font-sans'});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Thermometre — Causes, Consequences, Solutions du changement climatique",
  description: "Dashboard climat interactif : donnees GIEC AR6 et Our World in Data sur les causes du rechauffement, ses consequences et les solutions d'attenuation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${inter.variable} ${geistSans.variable} ${geistMono.variable}`}>
      <body
        className="antialiased"
      >
        {children}
      </body>
    </html>
  );
}
