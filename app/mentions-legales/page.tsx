import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Mentions légales", robots: { index: false } };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ label: "Mentions légales" }]} eyebrow="Informations légales" title="Mentions légales" />
      <section className="section">
        <div className="container prose legal">
          <h2>Éditeur du site</h2>
          <p>{site.name} — {site.owner}, artisan menuisier.<br />{site.street}, {site.city}<br />Téléphone : <a href={site.phoneHref}>{site.phone}</a></p>
          <p>SIRET : [À COMPLÉTER]<br />Adresse e-mail : [À COMPLÉTER]<br />Numéro de TVA intracommunautaire : [À COMPLÉTER si applicable]<br />Statut juridique : [À COMPLÉTER]</p>
          <h2>Assurance</h2>
          <p>Assurance de responsabilité civile professionnelle et garantie décennale : [À COMPLÉTER — assureur, coordonnées, numéro de contrat et couverture géographique]. Les références et le champ des garanties doivent être vérifiés auprès de Sylvain avant publication ; ce modèle ne constitue pas une attestation d’assurance.</p>
          <h2>Hébergement</h2>
          <p>Site hébergé par [À COMPLÉTER — nom ou raison sociale, adresse et coordonnées de l’hébergeur]. L’identité de l’hébergeur de la version mise en ligne reste à confirmer.</p>
          <h2>Propriété intellectuelle</h2>
          <p>Les textes et visuels originaux de MSR Bois sont protégés selon les droits applicables. Leur reproduction ou leur réutilisation nécessite l’autorisation du titulaire des droits, sous réserve des exceptions légales. Les contenus de tiers restent soumis aux droits de leurs auteurs et aux licences correspondantes : les droits sur l’ensemble des médias ne sont donc pas attribués à MSR Bois.</p>
          <p>Les photographies actuellement présentées sont des illustrations ; elles ne constituent pas une preuve de chantiers réalisés par MSR Bois. Elles ont vocation à être remplacées par des photos de chantiers lorsque celles-ci seront disponibles et que les autorisations de publication auront été vérifiées. Les crédits et droits des médias doivent être contrôlés avant la mise en ligne.</p>
          <h2>Médiation de la consommation</h2>
          <p>Tout consommateur peut recourir gratuitement à un médiateur de la consommation en vue de la résolution amiable d’un litige, dans les conditions prévues par la réglementation et après une réclamation préalable auprès du professionnel. [À COMPLÉTER — nom, coordonnées et site du médiateur compétent]. La désignation et les modalités de saisine du médiateur restent à vérifier ; aucune adhésion à un organisme n’est affirmée par ce modèle.</p>
          <h2>Responsabilité et données personnelles</h2>
          <p>Les informations du site présentent les prestations de MSR Bois et ne remplacent ni un échange sur votre projet ni un devis adapté au chantier. Une erreur ou une information à corriger peut être signalée par téléphone à Sylvain. Les conditions relatives au formulaire non actif, aux photos sélectionnées et aux services tiers sont détaillées dans la <Link href="/politique-de-confidentialite">politique de confidentialité</Link>.</p>
          <h2>Document à compléter et à valider</h2>
          <p><em>Ce document est un modèle à faire vérifier et compléter avant la mise en ligne. Les champs [À COMPLÉTER] ne sont pas des informations validées. L’identité juridique, les références d’assurance, l’hébergement et la médiation doivent notamment être confirmés ; ce texte ne garantit pas la conformité juridique du site.</em></p>
        </div>
      </section>
    </>
  );
}
