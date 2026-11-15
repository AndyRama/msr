import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import CtaBand from "@/components/CtaBand";
import { CheckIcon, PhoneIcon } from "@/components/Icons";
import { site } from "@/lib/site";
import { steps } from "@/lib/steps";

export const metadata: Metadata = {
  title: "Menuisier pour professionnels à Bordeaux : commerces, restaurants",
  description: "Menuiserie pour commerces, restaurants et bureaux à Bordeaux : chantier organisé autour de vos horaires, devis détaillé, intervention après effraction.",
};

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Professionnels" }]}
        eyebrow="Professionnels"
        title="Un artisan pour votre commerce, sans arrêter votre activité."
        lead="Boutique ancienne, restaurant, bureau : la menuiserie d'un lieu qui reçoit du public ne s'improvise pas. On organise le chantier autour de vous."
      />
      <section className="section">
        <div className="container split">
          <div>
            <div className="prose">
              <p>Une porte de boutique bordelaise qui ne ferme plus, un escalier de restaurant à rénover, une vitrine abîmée, un cadre forcé après une effraction : ce sont des chantiers qui ne peuvent pas attendre des semaines.</p>
              <p>MSR Bois travaille avec des commerces, des restaurants et des bureaux à Bordeaux. Le principe est simple : on regarde ensemble ce qui est urgent, ce qui peut être préparé en atelier, et on cale les interventions pour gêner le moins possible votre activité.</p>
            </div>
            <ul className="checks" style={{ marginTop: 28 }}>
              {[
                "Un interlocuteur unique, du premier appel au dernier réglage",
                "Un chantier organisé autour de vos horaires d'ouverture",
                "Protections posées et nettoyage en fin de journée",
                "Un devis détaillé, utilisable pour votre comptabilité",
                "Devis et facture clairs en cas de sinistre (effraction, dégât)",
              ].map((t) => (<li key={t}><CheckIcon />{t}</li>))}
            </ul>
          </div>
          <div>
            <Photo src="restaurant.jpg" alt="Salle de restaurant bordelais avec menuiserie bois rénovée" ratio="3 / 2" priority />
            <div className="trio">
              <div><h3>Commerces &amp; boutiques</h3><p>Portes de boutique anciennes, façades en bois, réparations après effraction : intervenir sans fermer plus longtemps que nécessaire.</p></div>
              <div><h3>Restaurants &amp; cafés</h3><p>Escaliers, banquettes en bois, comptoirs, habillages : des interventions pensées pour un lieu qui doit rouvrir.</p></div>
              <div><h3>Bureaux &amp; locaux</h3><p>Agencements, portes, parquets, panneaux : un chantier propre, discret, organisé autour de vos horaires.</p></div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <p className="eyebrow">Déroulement</p>
          <h2>Un chantier professionnel, sans mauvaise surprise.</h2>
          <ol className="steps" style={{ listStyle: "none", padding: 0 }}>
            {steps.map((s, i) => (
              <li key={s.t}><span className="mono">{String(i + 1).padStart(2, "0")}</span><h3>{s.t}</h3><p>{s.d}</p></li>
            ))}
          </ol>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="box">
            <div>
              <h3>Une intervention urgente sur votre local ?</h3>
              <p>Porte forcée, vitrine cassée, cadre arraché : appelez directement, nous vous dirons ce qui est possible selon l'heure.</p>
            </div>
            <a href={site.phoneHref} className="btn btn--dark"><PhoneIcon size={14} />{site.phone}</a>
          </div>
        </div>
      </section>

      <CtaBand title="Un projet pour votre local ?" text="Décrivez-nous le lieu, l'usage et le délai souhaité : nous revenons vers vous avec une proposition claire." />
    </>
  );
}
