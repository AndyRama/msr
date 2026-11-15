import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "@/components/PageHero";
import { site } from "@/lib/site";

export const metadata: Metadata = { title: "Politique de confidentialité", robots: { index: false } };

export default function Page() {
  return (
    <>
      <PageHero crumbs={[{ label: "Confidentialité" }]} eyebrow="Données personnelles" title="Politique de confidentialité" />
      <section className="section">
        <div className="container prose legal">
          <h2>Qui traite vos données</h2>
          <p>{site.name} — {site.owner}, {site.street}, {site.city}. Contact : <a href={site.phoneHref}>{site.phone}</a>. L’identité juridique complète et l’adresse e-mail de contact restent [À COMPLÉTER] dans les <Link href="/mentions-legales">mentions légales</Link>.</p>
          <h2>Quelles données sont collectées</h2>
          <p>Le formulaire prévoit les champs suivants : nom, téléphone, e-mail, type de besoin, indication d’urgence, message décrivant votre projet et éventuelles photos du chantier. Dans la version actuelle, l’envoi en ligne n’est pas actif : les champs et les fichiers sélectionnés restent dans votre navigateur. Le bouton affiche un message invitant à appeler Sylvain ; il ne transmet pas votre demande. Le formulaire ne réalise aucun envoi vers un serveur et aucun stockage des données ou des photos par le site.</p>
          <p>Si vous appelez Sylvain, les informations que vous lui communiquez relèvent de cet échange direct, distinct du formulaire. Les données techniques éventuellement traitées par l’hébergeur (notamment les journaux de connexion) et leurs modalités doivent être précisées après confirmation de l’hébergement : [À COMPLÉTER]. Les services tiers intégrés sont décrits ci-dessous.</p>
          <h2>Pourquoi</h2>
          <p>Les informations communiquées directement à Sylvain peuvent servir à répondre à votre demande, établir un devis et organiser une éventuelle intervention. Le formulaire inactif ne permet pas actuellement ces traitements. Aucun dispositif de revente des données du formulaire ni d’utilisation de ces champs pour de la publicité n’est intégré à cette version.</p>
          <p>Avant toute activation, les finalités, la base juridique de chaque traitement, les champs nécessaires et les modalités d’information devront être confirmés : [À COMPLÉTER]. Une demande de devis et le suivi d’une intervention doivent être distingués de toute éventuelle prospection.</p>
          <h2>Combien de temps</h2>
          <p>Aucune durée de conservation sur un serveur n’est appliquée aux demandes du formulaire puisqu’elles ne sont pas envoyées ni enregistrées par le site. La sélection locale de fichiers ne crée pas une archive de photos chez MSR Bois.</p>
          <p>Pour les échanges directs et une future intégration, la durée nécessaire au traitement commercial, les règles d’archivage ou de suppression et la conservation des devis acceptés au regard des obligations comptables applicables doivent être définies et vérifiées : [À COMPLÉTER — durées, critères et modalités]. Ce texte ne décrit pas une politique de conservation déjà mise en place.</p>
          <h2>Qui peut les voir</h2>
          <p>Aucun destinataire ne reçoit actuellement les champs ou les photos par ce formulaire. Les photos ne sont pas téléversées : aucun espace de stockage privé des photos n’est mis en place par cette interface. Cela ne constitue pas une garantie sur la confidentialité de votre appareil ou des services tiers.</p>
          <p>Pour une future transmission, les personnes habilitées à traiter les demandes, les éventuels sous-traitants, leurs accès, la localisation des données et les éventuels transferts devront être précisés avant activation : [À COMPLÉTER]. Les photos de chantier ne devront pas être publiées sans vérification des droits et autorisations nécessaires.</p>
          <h2>Cookies et mesure d’audience</h2>
          <p>Aucun outil dédié de mesure d’audience, de publicité ou de suivi des réseaux sociaux n’a été identifié dans le code actuel du site. Ce constat ne permet pas de promettre une absence globale de cookies ou de traitements par les services tiers ou par le futur hébergeur.</p>
          <p>Les sections de contact intègrent une carte Google Maps dans une iframe à chargement différé : lorsqu’elle est chargée par le navigateur, une connexion à Google peut avoir lieu, sans nécessiter un clic sur un lien externe. Google peut alors recevoir notamment votre adresse IP et des informations techniques du navigateur, et appliquer ses propres règles de cookies et de traitement. Les liens vers les plans et les avis ouvrent également des services Google lorsque vous les suivez. Consultez la <a href="https://policies.google.com/privacy" rel="noreferrer">politique de confidentialité de Google</a>. Le chargement différé n’est pas un mécanisme de recueil du consentement.</p>
          <p>Les polices sont configurées avec next/font/google pour être téléchargées à la construction et auto-hébergées par l’application ; cette configuration ne prévoit pas de requête du navigateur vers Google Fonts pour les afficher. Les flux réellement déployés, les journaux d’hébergement et les éventuels traceurs des intégrations devront néanmoins être vérifiés avant publication. Si une mesure d’audience ou un autre outil est ajouté, cette politique devra être mise à jour et les mécanismes d’information et, lorsque nécessaire, de consentement devront être définis avant son activation.</p>
          <h2>Vos droits</h2>
          <p>Pour les données effectivement communiquées à MSR Bois, vous pouvez demander l’accès, la rectification ou la suppression, ainsi que, selon les conditions applicables, la limitation, l’opposition ou la portabilité. Contactez Sylvain au <a href={site.phoneHref}>{site.phone}</a> ; l’adresse e-mail et les modalités de traitement des demandes restent [À COMPLÉTER]. Il n’est pas nécessaire d’envoyer des photos ni des informations sensibles dans le formulaire inactif pour exercer vos droits.</p>
          <p>Pour toute réclamation relative à vos données personnelles, vous pouvez saisir la CNIL : <a href="https://www.cnil.fr/" rel="noreferrer">www.cnil.fr</a>. Les demandes concernant les traitements propres à un service tiers peuvent aussi nécessiter de contacter ce service.</p>
          <h2>Texte à compléter et à valider</h2>
          <p><em>Ce texte est une base de travail à faire valider et compléter avant la mise en ligne, notamment après vérification de l’hébergement et de Google Maps, et avant toute activation du formulaire, du stockage de photos ou d’un outil de mesure d’audience. Les champs [À COMPLÉTER] signalent des informations non confirmées ; cette page n’atteste pas d’une conformité juridique ou technique déjà acquise.</em></p>
        </div>
      </section>
    </>
  );
}
