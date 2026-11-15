import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Stars from "@/components/Stars";
import CtaBand from "@/components/CtaBand";
import { PhoneIcon, ArrowUpRight } from "@/components/Icons";
import { site } from "@/lib/site";
import Link from "next/link";

export const metadata: Metadata = {
  title: "À propos de Sylvain Ruel, menuisier à Bordeaux",
  description: "Sylvain Ruel, artisan menuisier à Bordeaux : rénovation de portes, volets, parquets et escaliers dans l'ancien. Réponse rapide, devis clair, chantier propre.",
};

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "À propos" }]}
        eyebrow="L'artisan"
        title="Sylvain, menuisier à Bordeaux."
        lead="Derrière MSR Bois, il y a un artisan — pas une enseigne. Il répond au téléphone, vient mesurer, exécute, et revient voir si tout va bien."
      />
      <section className="section">
        <div className="container split">
          <div className="prose">
            <p>Sylvain Ruel a appris le métier par l'apprentissage, avant de s'installer à son compte. Aujourd'hui, MSR Bois travaille dans les appartements, les maisons et les commerces de Bordeaux — souvent dans l'ancien, presque toujours dans le bois.</p>
            <p>La rénovation est le cœur du métier : remettre en état ce qui existe déjà plutôt que tout remplacer. Une porte du XIXe, un parquet à chevrons, des persiennes sur pierre blonde, un escalier d'immeuble : ce sont des pièces qui demandent de la patience et du respect, pas seulement des outils.</p>
            <p>Le reste, c'est une façon de travailler qui revient dans chaque avis : répondre vite, donner un devis rapidement, tenir les délais, expliquer les matériaux, laisser le chantier propre et donner des nouvelles au fil des jours.</p>
            <blockquote className="q"><p>« La rénovation est au cœur de mon métier. »</p><cite>Sylvain Ruel — MSR Bois</cite></blockquote>
          </div>
          <div>
            <Photo src="sylvain.jpg" alt="Sylvain Ruel, menuisier, rabotant une pièce de bois" ratio="4 / 5" priority />
            <p className="caption">Photo d'illustration — portrait de Sylvain à récupérer</p>
            <div className="about-card">
              <p className="rate"><Stars /> {site.rating} · {site.reviewCount} avis Google</p>
              <p>{site.street}, {site.city}</p>
              <a href={site.phoneHref} className="btn btn--dark btn--block"><PhoneIcon size={14} />{site.phone}</a>
              <Link href="/contact" className="btn btn--line btn--block">Écrire un message</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container pillars">
          <div><h3>Réparer avant de remplacer</h3><p>C'est le réflexe du métier : regarder ce qui existe, ce qui peut être sauvé, et le dire honnêtement. Une porte ancienne restaurée a souvent plus de caractère qu'une porte neuve.</p></div>
          <div><h3>Mesurer, puis exécuter</h3><p>Les mesures précises, les niveaux, les murs qui ne sont pas d'aplomb : c'est ce qui se voit à la fin, dans un chantier qui ferme, s'aligne et dure.</p></div>
          <div><h3>Tenir ce qui est annoncé</h3><p>Devis clair, un planning donné, des nouvelles régulières. Et un chantier laissé propre, parce que c'est chez vous.</p></div>
        </div>
      </section>

      <section className="section">
        <div className="container" style={{ display: "flex", justifyContent: "space-between", alignItems: "center", gap: 24, flexWrap: "wrap" }}>
          <h2>Ce que les clients en disent, et ses réponses.</h2>
          <a className="link-u" href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">Lire les avis <ArrowUpRight /></a>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
