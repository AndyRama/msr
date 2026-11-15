import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import ServiceCard from "@/components/ServiceCard";
import CtaBand from "@/components/CtaBand";
import { ShieldIcon, ArrowUpRight } from "@/components/Icons";
import { services } from "@/lib/services";

export const metadata: Metadata = {
  title: "Prestations de menuiserie à Bordeaux",
  description: "Portes d'entrée, volets à persiennes, fenêtres bois, parquets, escaliers, agencements sur mesure et dépannage effraction à Bordeaux.",
};

export default function Page() {
  const urgence = services.find((s) => s.slug === "depannage-effraction")!;
  return (
    <>
      <PageHero
        crumbs={[{ label: "Prestations" }]}
        eyebrow="Prestations"
        title="Le bois, dans toutes ses rénovations."
        lead="Portes, volets, fenêtres, parquets, escaliers, agencements, réparations d'urgence. Une seule personne au bout du fil, du devis au nettoyage final."
      />
      <section className="section">
        <div className="container">
          <div className="grid3">
            {services.filter((s) => s.slug !== urgence.slug).map((s) => <ServiceCard key={s.slug} s={s} />)}
          </div>
          <div className="urgent">
            <div className="urgent-l">
              <ShieldIcon />
              <div>
                <p className="mono">Urgence</p>
                <h3>Dépannage &amp; effraction — porte forcée, cadre arraché, fenêtre cassée</h3>
                <p>{urgence.short}</p>
              </div>
            </div>
            <Link href={`/prestations/${urgence.slug}`} className="link-u">Voir la page <ArrowUpRight /></Link>
          </div>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
