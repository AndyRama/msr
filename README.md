# MSR Bois

Site vitrine de **MSR Bois — Sylvain Ruel**, artisan menuisier à Bordeaux, consacré à la rénovation, à la restauration et à l’agencement bois.

Le site présente les prestations, les réalisations et les informations de contact de l’atelier. Il est développé avec Next.js, React et TypeScript, avec une feuille de styles CSS personnalisée.

- [Dépôt GitHub](https://github.com/AndyRama/msr)
- [Aperçu Vercel déclaré pour le projet](https://msr-ecru-kappa.vercel.app)

> **État du projet :** le formulaire de contact n’envoie actuellement aucune demande. Les mentions légales et la politique de confidentialité sont des documents à compléter et à valider avant publication. La présence d’un aperçu ne vaut pas validation de la mise en production.

## Fonctionnalités présentes

- Accueil, présentation de l’atelier, réalisations et page dédiée aux professionnels.
- Sept pages de prestations avec introduction détaillée, sous-prestations, photo, coordonnées, avis et réponses, questions fréquentes et liens associés.
- Comparateurs avant/après dans les réalisations concernées.
- Navigation responsive et menu mobile.
- Coordonnées téléphoniques, liens vers les avis et cartes Google Maps intégrées aux sections de contact.
- Métadonnées de pages, données structurées d’entreprise et FAQ, sitemap et fichier robots.
- Favicon navigateur en 16, 32 et 48 px, icône PNG en 192 px et icône Apple en 180 px, dérivés du logo MSR.

Les avis et leurs réponses sont des contenus enregistrés dans le dépôt : ils ne sont pas synchronisés automatiquement avec Google.

## Stack et prérequis

- **Next.js 16.4.6** et **React 19.3.1**, versions résolues dans le lockfile actuel.
- **TypeScript 5.9.3**.
- CSS personnalisé dans [app/globals.css](app/globals.css), sans Tailwind ni CSS Modules.
- Instrument Serif, Inter et IBM Plex Mono via `next/font/google` : téléchargées à la construction puis auto-hébergées par l’application.
- npm et un environnement Node.js satisfaisant la contrainte **`>=20.9.0`** de la version Next.js verrouillée. Privilégier une version LTS maintenue compatible avec cette contrainte.

Le dépôt ne fixe pas de version Node.js dans un fichier `.nvmrc`. Conserver [package-lock.json](package-lock.json) et utiliser `npm ci` pour une installation reproductible.

## Installation et développement

```bash
git clone https://github.com/AndyRama/msr.git
cd msr
npm ci
npm run dev
```

L’application de développement est accessible sur `http://localhost:3000` par défaut.

Aucune base de données ni clé de fournisseur d’e-mail n’est nécessaire au fonctionnement actuel. Les sources de l’application ne lisent pas de variable d’environnement métier : les coordonnées et URLs sont centralisées dans [lib/site.ts](lib/site.ts).

La construction peut nécessiter un accès réseau pour récupérer les polices Google Fonts. Une fois générées, ces polices sont servies par l’application, sans chargement Google Fonts prévu dans le navigateur.

## Tests et build

Depuis la racine du dépôt :

```bash
# Tests Node.js et rendu React côté serveur
node --test tests/*.test.cjs

# Build de production, avec le contrôle TypeScript intégré de Next.js
npm run build

# Démarrage du build précédemment généré
npm run start
```

Les scripts npm disponibles sont `dev`, `build` et `start`. Le dépôt ne définit actuellement ni `npm test` ni commande de lint.

Les tests couvrent notamment le contenu des prestations, la préservation des pages déjà reprises, les FAQ et leur JSON-LD, les informations légales, les indications du formulaire inactif et la structure des favicons. Ils utilisent les fixtures versionnées dans [tests/fixtures](tests/fixtures).

Les commandes de test et de build ne réalisent ni migration de base de données, ni envoi de formulaire, ni déploiement. Un build réussi ne constitue pas une validation juridique ou une recette complète du site déployé.

## Pages principales

- `/` : accueil.
- `/prestations` : liste des prestations.
- `/prestations/portes-d-entree` : portes d’entrée.
- `/prestations/volets-bois` : volets bois.
- `/prestations/fenetres-bois` : fenêtres bois.
- `/prestations/parquets` : parquets.
- `/prestations/escaliers` : escaliers.
- `/prestations/agencement-sur-mesure` : agencement sur mesure.
- `/prestations/depannage-effraction` : dépannage après effraction.
- `/realisations` : réalisations et avant/après.
- `/professionnels` : offre pour les professionnels.
- `/a-propos` : présentation de l’atelier.
- `/contact` : coordonnées et formulaire actuellement inactif.
- `/mentions-legales` : mentions légales à compléter, avec consigne `noindex`.
- `/politique-de-confidentialite` : politique à valider, avec consigne `noindex`.

Le sitemap comprend les pages commerciales et les sept prestations. Les deux pages légales n’y sont pas ajoutées. Le fichier robots autorise actuellement l’exploration du site ; les consignes propres aux pages légales restent distinctes.

## Organisation du code

```text
app/                 Routes, métadonnées, styles et icônes Next.js
  prestations/[slug] Pages de prestations issues des données partagées
components/          Navigation, photos, formulaires et sections réutilisables
lib/                 Coordonnées, prestations, avis et étapes de travail
public/images/       Images du site et logo source
tests/               Tests Node.js et fixtures de référence
```

### Modifier les contenus

- **Coordonnées, domaine et liens Google :** [lib/site.ts](lib/site.ts).
- **Prestations, FAQ et liens associés :** [lib/services.ts](lib/services.ts).
- **Avis et réponses :** [lib/reviews.ts](lib/reviews.ts).
- **Étapes d’intervention :** [lib/steps.ts](lib/steps.ts).
- **Présentation des prestations :** [components/RenovationServicePage.tsx](components/RenovationServicePage.tsx).
- **Styles et adaptation mobile :** [app/globals.css](app/globals.css).
- **Images :** [public/images](public/images) ; voir aussi les [noms de fichiers attendus](public/images/README.md).
- **Documents légaux :** [mentions légales](app/mentions-legales/page.tsx) et [confidentialité](app/politique-de-confidentialite/page.tsx).

Conserver les informations commerciales existantes lors des reprises de texte. Les FAQ affichées et leurs données structurées doivent rester cohérentes. Certaines images sont présentées comme des illustrations dans les documents du site : vérifier leur provenance et leurs droits avant toute publication définitive.

Les icônes `app/favicon.ico`, `app/icon.png` et `app/apple-icon.png` sont détectées automatiquement par Next.js. Le logo original reste dans `public/images/logo.png`.

## Formulaire : fonctionnement actuel

[components/ContactForm.tsx](components/ContactForm.tsx) intercepte la soumission et affiche une invitation à appeler Sylvain. Aucun traitement serveur d’envoi n’est branché.

- Les champs ne déclenchent pas d’e-mail ou de création de demande.
- Les photos sélectionnées restent dans le navigateur : le formulaire ne les téléverse pas et ne les stocke pas côté serveur.
- Les limites de photos affichées ne remplacent pas une validation serveur, qui sera nécessaire lors de l’activation.

Pour rendre ce formulaire opérationnel, prévoir un traitement serveur, une validation des champs et pièces jointes, un dispositif anti-abus, une gestion des erreurs et des règles explicites de conservation. Mettre ensuite à jour les textes du formulaire et la politique de confidentialité pour décrire le traitement réellement mis en place.

## Avant une mise en production

- [ ] Vérifier les coordonnées, les liens téléphoniques et le domaine canonique de [lib/site.ts](lib/site.ts).
- [ ] Remplacer ou valider les illustrations et les autorisations d’utilisation des images.
- [ ] Faire valider les avis, leurs réponses et les informations commerciales par l’atelier.
- [ ] Compléter le SIRET, le statut juridique, l’e-mail, la TVA si applicable, l’hébergeur, l’assurance et le médiateur de la consommation.
- [ ] Faire vérifier les mentions légales et la politique de confidentialité.
- [ ] Décider si le formulaire reste inactif ou activer un traitement serveur testé.
- [ ] Vérifier les connexions tierces de Google Maps et les exigences applicables en matière de données personnelles et de consentement.
- [ ] Contrôler les dépendances, les métadonnées, les liens et le rendu responsive sur l’environnement réellement déployé.

Les cartes intégrées peuvent établir une connexion à Google lorsqu’elles se chargent. Les liens vers les avis et les itinéraires ouvrent également des services tiers. Ne pas assimiler un formulaire inactif à une absence de tout échange de données sur le site.

## Droits et contributions

Le dépôt ne contient actuellement pas de licence générale de réutilisation. Ne pas en déduire une autorisation de reprendre librement le code, la marque, les textes ou les images. Les dépendances et les ressources tierces conservent leurs propres licences et conditions.

Pour une modification, travailler sur une branche, vérifier les tests et le build, puis ouvrir une pull request. La fusion et la mise en ligne restent des étapes distinctes.
