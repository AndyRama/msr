import Link from "next/link";
import Photo from "@/components/Photo";
import Stars from "@/components/Stars";
import ServiceCard from "@/components/ServiceCard";
import BeforeAfter from "@/components/BeforeAfter";
import SectionLabel from "@/components/SectionLabel";
import Steps from "@/components/Steps";
import Faq from "@/components/Faq";
import CtaBand from "@/components/CtaBand";
import ContactSection from "@/components/ContactSection";
import { PhoneIcon, ArrowUpRight, ShieldIcon, PinIcon } from "@/components/Icons";
import { services } from "@/lib/services";
import { reviews } from "@/lib/reviews";
import { site } from "@/lib/site";

const why = [
  { t: "Il répond. Vraiment.", d: "C'est ce qui revient le plus souvent dans les avis : Sylvain répond vite, rappelle quand d'autres ne le font pas, et le devis arrive sans qu'on ait à relancer." },
  { t: "Un devis clair, un prix raisonnable", d: "Le devis est détaillé et donné rapidement. Vous savez ce qui est prévu, pourquoi, et ce que ça coûte — avant de commencer." },
  { t: "Les délais annoncés sont tenus", d: "Le planning est posé au départ et respecté. Pas de chantier qui traîne, pas de promesse oubliée." },
  { t: "Un chantier laissé propre", d: "Les protections sont posées, la poussière contenue, et le chantier est nettoyé avant de partir. C'est une question de respect." },
  { t: "Des conseils sur les matériaux", d: "Quel bois, quel sens de pose, quel parquet dans un immeuble ancien : on vous explique les options et leurs conséquences, sans jargon." },
  { t: "Des mesures précises", d: "C'est le début de tout : mesurer juste, anticiper les niveaux, les murs qui ne sont pas droits, les moulures qui ne pardonnent pas." },
];

const zones = ["Chartrons", "Saint-Pierre", "Saint-Michel", "Caudéran", "La Bastide", "Mérignac", "Pessac", "Talence", "Bègles", "Le Bouscat", "Bruges", "Cenon"];

const faq = [
  { q: "Intervenez-vous chez les particuliers et les professionnels ?", a: "Oui. Appartements, maisons, commerces, restaurants et bureaux : le chantier est organisé selon le lieu et vos contraintes d'horaires." },
  { q: "Comment obtenir un devis ?", a: "Par un appel, ou en envoyant quelques photos. Sylvain se déplace ensuite pour mesurer, puis le devis vous est remis rapidement, détaillé et sans engagement." },
  { q: "Travaillez-vous dans les immeubles anciens et en copropriété ?", a: "Oui, c'est le cœur de l'activité à Bordeaux. Le chantier s'adapte aux contraintes de l'immeuble et reste propre pour les occupants." },
  { q: "Que faire en cas d'effraction ?", a: "Appelez directement. Nous vous disons franchement ce qui est possible selon l'heure : mise en sécurité d'abord, réparation propre ensuite, devis et facture clairs pour l'assurance." },
];

export default function Home() {
  const urgence = services.find((s) => s.slug === "depannage-effraction")!;
  return (
    <>
      <section className="hero-home">
        <div className="container">
          <div>
            <p className="eyebrow">Menuiserie de rénovation — Bordeaux</p>
            <h1>Redonner vie au <em>bois</em> des maisons bordelaises.</h1>
            <p className="lead">Portes anciennes, volets à persiennes, parquets à chevrons, escaliers, agencements sur mesure. Sylvain rénove, restaure et pose — avec la précision qu'exigent les immeubles anciens.</p>
            <div className="hero-btns">
              <a href={site.phoneHref} className="btn btn--dark"><PhoneIcon size={14} />Appeler Sylvain</a>
              <Link href="/contact" className="btn btn--line">Demander un devis <ArrowUpRight /></Link>
            </div>
            <p className="hero-rate"><Stars /> <span>{site.rating} · {site.reviewCount} avis Google</span><span className="sep" aria-hidden="true" /><span className="dim">Particuliers &amp; professionnels</span></p>
          </div>
          <div className="hero-photo">
            <Photo src="hero.jpg" alt="Porte en bois dans un hall d'immeuble bordelais" ratio="5 / 4" priority />
            <p className="caption">Photo d'illustration — à remplacer par un chantier MSR Bois</p>
          </div>
        </div>
      </section>

      <section className="urgence">
        <div className="container">
          <div className="urgence-l">
            <ShieldIcon />
            <div>
              <span className="mono">Urgence</span>
              <h2>Porte forcée, fenêtre cassée ?</h2>
              <p className="t">Mise en sécurité rapide pour un logement ou un commerce. Nous ne promettons pas un délai que nous ne pourrions pas tenir : appelez, nous vous dirons franchement ce qui est possible.</p>
            </div>
          </div>
          <div className="urgence-r">
            <a href={site.phoneHref} className="btn"><PhoneIcon size={14} />{site.phone}</a>
            <p className="mono">Appel direct — vous parlez à Sylvain</p>
          </div>
        </div>
      </section>

      <div className="trust">
        <div className="container">
          <div className="trust-i"><Stars size={13} /><div><strong>{site.rating}</strong><span className="mono">{site.reviewCount} avis</span></div></div>
          <div className="trust-i"><div><strong>Bordeaux</strong><span className="mono">et alentours</span></div></div>
          <div className="trust-i"><div><strong>Particuliers</strong><span className="mono">&amp; professionnels</span></div></div>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <SectionLabel n="01">Prestations</SectionLabel>
          <h2>Ce que nous rénovons, <em>vraiment</em>.</h2>
          <p className="sec-lead">Pas de catalogue. Des chantiers précis, dans des maisons et des immeubles anciens : portes, volets, fenêtres, parquets, escaliers, agencements — et les réparations urgentes.</p>
          <div className="grid3">
            {services.slice(0, 6).map((s) => <ServiceCard key={s.slug} s={s} />)}
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
            <Link href={`/prestations/${urgence.slug}`} className="link-u" style={{ border: 0 }}>Voir la page <ArrowUpRight /></Link>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionLabel n="02">Avant / après</SectionLabel>
          <h2>Le bois, avant et après.</h2>
          <p className="sec-lead">Faites glisser le curseur. C'est le même bois, la même porte, la même pièce — avec le travail qui a été fait entre les deux.</p>
          <div className="work-grid">
            <article className="work">
              <BeforeAfter label="Porte d'entrée d'immeuble ancien" before={<Photo src="porte-avant.jpg" alt="Porte d'entrée — avant" />} after={<Photo src="porte-apres.jpg" alt="Porte d'entrée — après" />} />
              <div className="work-meta"><h3>Porte d'entrée d'immeuble ancien</h3><span className="mono">Portes</span></div>
              <p>Une porte fatiguée mais saine : reprise des panneaux et du bâti, remise en état des bois, réglages et quincaillerie. La porte d'origine a été conservée.</p>
            </article>
            <article className="work">
              <BeforeAfter label="Parquet à chevrons, appartement bordelais" before={<Photo src="parquet-avant.jpg" alt="Parquet — avant" />} after={<Photo src="parquet-apres.jpg" alt="Parquet — après" />} />
              <div className="work-meta"><h3>Parquet à chevrons, appartement bordelais</h3><span className="mono">Parquets</span></div>
              <p>Préparation du support, pose collée et finition mate naturelle. Un sol qui retrouve sa géométrie sans perdre sa patine.</p>
            </article>
          </div>
          <div className="work-grid" style={{ marginTop: 32, gap: 24 }}>
            <div className="tabs-card"><Photo src="escalier.jpg" alt="Escalier bois et garde-corps" ratio="4 / 3" /><h3>Escalier bois et garde-corps</h3><span className="mono">Escaliers</span></div>
            <div className="tabs-card"><Photo src="volets.jpg" alt="Volets à persiennes sur pierre blonde" ratio="4 / 3" /><h3>Volets à persiennes sur pierre blonde</h3><span className="mono">Volets</span></div>
          </div>
          <p style={{ marginTop: 40 }}><Link href="/realisations" className="link-u">Voir toutes les réalisations <ArrowUpRight /></Link></p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionLabel n="03">Pourquoi MSR Bois</SectionLabel>
          <h2>Ce qui revient dans les avis,<br />ce n'est pas la technique.</h2>
          <p className="sec-lead">C'est la façon de travailler : répondre, tenir les délais, expliquer, nettoyer. Le reste, c'est du métier — et il est là.</p>
          <div className="why">
            <div>
              <Photo src="sylvain.jpg" alt="Sylvain Ruel, menuisier, rabotant une pièce de bois" ratio="4 / 5" />
              <p className="caption">Photo d'illustration — portrait de Sylvain à récupérer</p>
            </div>
            <ol>
              {why.map((w, i) => (
                <li key={w.t}><span className="mono">{String(i + 1).padStart(2, "0")}</span><div><h3>{w.t}</h3><p>{w.d}</p></div></li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container">
          <SectionLabel n="04">Comment ça se passe</SectionLabel>
          <h2>Quatre étapes, sans zone d'ombre.</h2>
          <Steps />
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionLabel n="05">Avis clients</SectionLabel>
          <h2>Ce que disent les clients,<br />et ce que Sylvain leur répond.</h2>
          <p className="sec-lead">Chaque avis reçoit une réponse personnelle. C'est une petite chose qui dit beaucoup d'un artisan.</p>
          <div className="rev-grid">
            {reviews.map((r) => (
              <article className="rev" key={r.author}>
                <span className="rev-q" aria-hidden="true">”</span>
                <Stars size={13} />
                <p className="t">{r.text}</p>
                <div className="rev-by">{r.author} <span style={{ display: "inline" }}>· {r.date}</span><span>{r.tag}</span></div>
                <div className="reply"><p className="mono">Réponse de Sylvain</p><p>{r.reply}</p></div>
              </article>
            ))}
          </div>
          <div className="rev-foot">
            <p className="rate"><Stars /> {site.rating} · {site.reviewCount} avis Google</p>
            <a className="link-u" href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">Lire tous les avis sur Google <ArrowUpRight /></a>
          </div>
          <p className="note" style={{ marginTop: 14, border: 0, paddingTop: 0 }}>Extraits de la fiche Google de MSR Bois, reformulés en français pour le site — à valider avec Sylvain avant publication.</p>
        </div>
      </section>

      <section className="pros">
        <div className="container">
          <Photo src="restaurant.jpg" alt="Salle de restaurant bordelais avec menuiserie bois" ratio="3 / 2" />
          <div>
            <p className="eyebrow">Professionnels</p>
            <h2>Commerces, restaurants, bureaux : un chantier qui respecte votre activité.</h2>
            <p className="p">Une porte de boutique ancienne à rénover, un escalier de restaurant, des habillages en bois, une réparation après effraction : on organise le chantier autour de vos horaires, avec un interlocuteur unique.</p>
            <dl>
              <div><dt>Commerces &amp; boutiques</dt><dd>Portes de boutique anciennes, façades en bois, réparations après effraction : intervenir sans fermer plus longtemps que nécessaire.</dd></div>
              <div><dt>Restaurants &amp; cafés</dt><dd>Escaliers, banquettes en bois, comptoirs, habillages : des interventions pensées pour un lieu qui doit rouvrir.</dd></div>
              <div><dt>Bureaux &amp; locaux</dt><dd>Agencements, portes, parquets, panneaux : un chantier propre, discret, organisé autour de vos horaires.</dd></div>
            </dl>
            <Link href="/professionnels" className="link-u">Le détail pour les professionnels <ArrowUpRight /></Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <SectionLabel n="06">Zone d'intervention</SectionLabel>
          <h2 style={{ marginBottom: 44 }}>Bordeaux et ses alentours.</h2>
          <div className="zone">
            <div>
              <h3><PinIcon />Bordeaux &amp; alentours</h3>
              <p>Nous intervenons dans Bordeaux et les communes voisines, en maison comme en appartement, chez les particuliers et les professionnels.</p>
              <span className="mono">Zone d'intervention à confirmer avec Sylvain</span>
            </div>
            <div className="chips">
              {zones.map((z) => <span className="chip" key={z}>{z}</span>)}
              <span className="chip chip--d">{site.plusCode}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt">
        <div className="container rev-wrap">
          <div>
            <p className="eyebrow">Questions fréquentes</p>
            <h2>Avant de nous appeler.</h2>
          </div>
          <Faq items={faq} />
        </div>
      </section>

      <CtaBand />

      <section className="section">
        <div className="container">
          <SectionLabel n="07">Contact &amp; devis</SectionLabel>
          <h2>Un chantier en tête ? Commencez par un appel.</h2>
          <p className="sec-lead">Le formulaire fonctionne aussi : décrivez le projet, ajoutez quelques photos si vous en avez, et Sylvain revient vers vous.</p>
        </div>
        <ContactSection />
      </section>
    </>
  );
}
