import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import BeforeAfter from "@/components/BeforeAfter";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Réalisations — menuiserie de rénovation à Bordeaux",
  description: "Exemples de chantiers MSR Bois à Bordeaux : portes, parquets, escaliers, volets, devantures, restaurants, fenêtres.",
};

type Work = { title: string; tag: string; text: string; img?: string; before?: string; after?: string };

const works: Work[] = [
  { title: "Porte d'entrée d'immeuble ancien", tag: "Portes", text: "Une porte fatiguée mais saine : reprise des panneaux et du bâti, remise en état des bois, réglages et quincaillerie. La porte d'origine a été conservée.", before: "porte-avant.jpg", after: "porte-apres.jpg" },
  { title: "Parquet à chevrons, appartement bordelais", tag: "Parquets", text: "Préparation du support, pose collée et finition mate naturelle. Un sol qui retrouve sa géométrie sans perdre sa patine.", before: "parquet-avant.jpg", after: "parquet-apres.jpg" },
  { title: "Escalier bois et garde-corps", tag: "Escaliers", text: "Marches reprises, garde-corps ajusté et sécurisé, finitions cirées pour retrouver la chaleur du bois d'origine.", img: "escalier.jpg" },
  { title: "Volets à persiennes sur pierre blonde", tag: "Volets", text: "Dépose, remise en état des lames et des ferrures, réglages, repose soignée. Les persiennes d'origine ont été gardées.", img: "volets.jpg" },
  { title: "Rangements sur mesure sous escalier", tag: "Agencement", text: "Chaque niche a été mesurée et fabriquée pour épouser l'escalier et les murs. Portes sans poignée apparente, lignes nettes.", img: "agencement.jpg" },
  { title: "Devanture de boutique ancienne", tag: "Professionnels", text: "Rénovation d'une devanture en bois sans effacer son caractère : menuiserie reprise, peinture et détails d'origine conservés.", img: "devanture.jpg" },
  { title: "Salle de restaurant rénovée", tag: "Professionnels", text: "Comptoir, habillages muraux et banquettes en bois : un chantier mené pour permettre au restaurant de rouvrir vite.", img: "restaurant.jpg" },
  { title: "Fenêtres bois et petits carreaux", tag: "Fenêtres", text: "Réparation de la menuiserie existante, réglages, joints et quincaillerie : la fenêtre refonctionne et l'air ne passe plus.", img: "fenetres.jpg" },
];

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Réalisations" }]}
        eyebrow="Réalisations"
        title="Des chantiers, pas des promesses."
        lead="Quelques exemples de ce qui se fait chez MSR Bois, à Bordeaux. Les photos avant / après se glissent : c'est le même endroit, avant et après le passage de l'artisan."
      />
      <section className="section">
        <div className="container">
          <div className="work-grid">
            {works.map((w) => (
              <article className="work" key={w.title}>
                {w.before && w.after ? (
                  <BeforeAfter
                    label={w.title}
                    before={<Photo src={w.before} alt={`${w.title} — avant`} />}
                    after={<Photo src={w.after} alt={`${w.title} — après`} />}
                  />
                ) : (
                  <Photo src={w.img!} alt={w.title} />
                )}
                <div className="work-meta"><h3>{w.title}</h3><span className="mono">{w.tag}</span></div>
                <p>{w.text}</p>
              </article>
            ))}
          </div>
          <p className="note">Visuels d'illustration, générés pour ce site : les photos des chantiers réels de MSR Bois sont à ajouter avant la mise en ligne, en conservant le même angle entre l'avant et l'après.</p>
        </div>
      </section>
      <CtaBand />
    </>
  );
}
