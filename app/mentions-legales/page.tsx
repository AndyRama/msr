import type { Metadata } from "next";
import PageHero from "@/components/PageHero";

export const metadata: Metadata = { title: "Mentions légales", robots: { index: false } };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ label: "Mentions légales" }]} eyebrow="Informations" title="Mentions légales" />
      <section className="section">
        <div className="container prose legal">
          {/* TODO : renseigner raison sociale, SIRET, hébergeur, responsable de traitement, durée de conservation. */}
          <p>Contenu à compléter avant la mise en ligne.</p>
        </div>
      </section>
    </>
  );
}
