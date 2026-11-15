import type { Metadata } from "next";
import { Instrument_Serif, Inter, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { site } from "@/lib/site";

const display = Instrument_Serif({ subsets: ["latin"], weight: "400", style: ["normal", "italic"], variable: "--font-display" });
const body = Inter({ subsets: ["latin"], variable: "--font-body" });
const mono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "MSR Bois — Menuiserie de rénovation à Bordeaux", template: "%s | MSR Bois" },
  description: "Menuiserie de rénovation et de restauration à Bordeaux : portes d'entrée, volets, fenêtres, parquets, escaliers et agencements sur mesure. Devis rapide, sans engagement.",
  openGraph: { type: "website", locale: "fr_FR", siteName: "MSR Bois" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: site.name,
  telephone: "+33668931235",
  url: site.url,
  address: { "@type": "PostalAddress", streetAddress: site.street, postalCode: "33100", addressLocality: "Bordeaux", addressCountry: "FR" },
  aggregateRating: { "@type": "AggregateRating", ratingValue: "5.0", reviewCount: String(site.reviewCount) },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr" className={`${display.variable} ${body.variable} ${mono.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
