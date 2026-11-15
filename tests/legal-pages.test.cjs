const test = require('node:test');
const assert = require('node:assert/strict');
const { fs, root, React } = require('./helpers.cjs');
const { renderToStaticMarkup } = require('react-dom/server');
const legal = require('../app/mentions-legales/page.tsx');
const text = html => html.replace(/<[^>]+>/g, ' ').replace(/&#x27;/g, "'").replace(/&quot;/g, '"').replace(/\s+/g, ' ');

test('legal route renders complete screenshot topics with honest draft placeholders', () => {
  const html = renderToStaticMarkup(React.createElement(legal.default));
  const copy = text(html);
  assert.equal(legal.metadata.robots.index, false);
  assert.equal((html.match(/<h2/g) || []).length, 7);
  for (const topic of ['Informations légales', 'Éditeur du site', 'Assurance', 'Hébergement', 'Propriété intellectuelle', 'Médiation de la consommation', 'Responsabilité', 'Document à compléter et à valider', 'MSR Bois', 'Sylvain Ruel', '2 Rue Montmejean', '33100 Bordeaux', '06 68 93 12 35', 'SIRET', 'Adresse e-mail', 'TVA intracommunautaire', 'Statut juridique', 'garantie décennale', 'numéro de contrat', 'tiers', 'illustrations', 'résolution amiable', '[À COMPLÉTER', 'avant la mise en ligne']) assert.ok(copy.includes(topic), topic);
  assert.ok(html.includes('href="/politique-de-confidentialite"'));
  assert.doesNotMatch(copy, /\b\d{14}\b|conformité garantie|propriété exclusive/);
});

test('privacy route explains all eight topics including inactive collection and real Google integrations', () => {
  const privacy = require('../app/politique-de-confidentialite/page.tsx');
  const html = renderToStaticMarkup(React.createElement(privacy.default));
  const copy = text(html);
  assert.equal(privacy.metadata.robots.index, false);
  assert.equal((html.match(/<h2/g) || []).length, 8);
  for (const topic of ['Données personnelles', 'Qui traite vos données', 'Quelles données sont collectées', 'Pourquoi', 'Combien de temps', 'Qui peut les voir', 'Cookies et mesure d’audience', 'Vos droits', 'Texte à compléter et à valider', 'nom', 'téléphone', 'e-mail', 'urgence', 'photos', 'n’est pas actif', 'navigateur', 'aucun envoi', 'aucun stockage', 'devis', 'publicité', 'comptables', 'Google Maps', 'adresse IP', 'next/font/google', 'auto-hébergées', 'CNIL', 'rectification', '[À COMPLÉTER']) assert.ok(copy.includes(topic), topic);
  assert.ok(html.includes('href="https://www.cnil.fr/"'));
  assert.ok(html.includes('href="https://policies.google.com/privacy"'));
  assert.ok(html.includes('href="/mentions-legales"'));
  assert.doesNotMatch(copy, /Les photos envoyées sont stockées de façon privée|Ce site ne dépose pas de cookies/);
});

test('legal reading columns stay centered and constrained like the supplied captures', () => {
  const css = fs.readFileSync(`${root}/app/globals.css`, 'utf8');
  assert.match(css, /\.container\.prose\.legal\s*\{\s*max-width:\s*740px;\s*\}/);
});

test('form copy describes local selection without activating submission or persistence', () => {
  const ContactForm = require('../components/ContactForm.tsx').default;
  const html = renderToStaticMarkup(React.createElement(ContactForm));
  assert.match(text(html), /photos restent dans votre navigateur/);
  assert.match(text(html), /ni envoyées ni stockées par le site/);
  const source = fs.readFileSync(`${root}/components/ContactForm.tsx`, 'utf8');
  assert.match(source, /e\.preventDefault\(\);/);
  assert.match(source, /L'envoi en ligne n'est pas encore actif : appelez Sylvain/);
  assert.doesNotMatch(source, /fetch\(|localStorage|sessionStorage|FormData|action=|stockées de façon privée/);
});
