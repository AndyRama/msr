const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const {fs, root, React} = require('./helpers.cjs');
const {renderToStaticMarkup} = require('react-dom/server');
const {AppRouterContext} = require('next/dist/shared/lib/app-router-context.shared-runtime');
const {PathnameContext} = require('next/dist/shared/lib/hooks-client-context.shared-runtime');
const Header = require('../components/Header.tsx').default;
const {site} = require('../lib/site.ts');
const render = () => renderToStaticMarkup(React.createElement(AppRouterContext.Provider, {value: {}}, React.createElement(PathnameContext.Provider, {value: '/'}, React.createElement(Header))));
test('actual Header SSR exposes sibling bottom actions with preserved destinations and accessible labels', () => {
 const html = render();
 assert.match(html, /<\/header><nav class="mobile-actions" aria-label="Actions rapides">/);
 const dock = html.split('class="mobile-actions"')[1];
 assert.equal((dock.match(/<a /g)||[]).length, 2);
 assert.ok(dock.includes('href="/contact"'));
 assert.ok(dock.includes(`href="${site.phoneHref}"`));
 assert.match(dock, />Devis<\/a>/); assert.match(dock, />Téléphone<\/a>/);
 assert.equal((dock.match(/aria-hidden="true"/g)||[]).length, 2);
});
test('bottom telephone action calls the number explicitly confirmed by the owner', () => {
 assert.equal(site.phoneHref, 'tel:+33668931235');
 assert.match(site.phoneHref, /^tel:\+33\d{9}$/);
 const dock = render().split('class="mobile-actions"')[1];
 assert.ok(dock.includes('href="tel:+33668931235"'));
});
test('original header markup, substantive text and CSS prefix are preserved exactly', () => {
 const original = require('./fixtures/mobile-actions-original.json');
 assert.equal(crypto.createHash('sha256').update(original.header).digest('hex'), 'cdcf72c0eb27633f2d4d55e05b267d9c20d2c1a8b6ba1b83ff15ab7f93d216d2');
 const current = fs.readFileSync(`${root}/components/Header.tsx`, 'utf8');
 assert.equal(current.slice(current.indexOf('    <header'), current.indexOf('    </header>') + '    </header>'.length), original.header.slice(original.header.indexOf('    <header'), original.header.indexOf('    </header>') + '    </header>'.length));
 const css = fs.readFileSync(`${root}/app/globals.css`, 'utf8');
 assert.equal(crypto.createHash('sha256').update(css.split('\n/* Mobile bottom actions:')[0]).digest('hex'), original.cssHash);
 const extra = css.split('\n/* Mobile bottom actions:')[1];
 assert.match(extra, /\.mobile-actions \{ display: none; \}/);
 assert.match(extra, /@media \(max-width: 960px\)/);
 assert.match(extra, /\.header-cta > \.btn \{ display: none; \}/);
 for (const pattern of [/position: fixed/, /bottom: 0/, /safe-area-inset-bottom/, /min-height: 48px/, /overflow-y: auto/, /100dvh/, /padding-bottom: var\(--mobile-actions-height\)/]) assert.match(extra, pattern);
});
