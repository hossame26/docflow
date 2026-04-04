import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "DocFlow — Collecte de documents pour experts-comptables",
  description:
    "DocFlow centralise la collecte de documents comptables, automatise les relances SMS et garde tout l'historique dans le bon dossier. Simple pour vous, encore plus simple pour vos clients.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className={`${plusJakarta.className} antialiased`}>
      <body className="min-h-screen bg-white text-text">{children}</body>
    </html>
  );
}
