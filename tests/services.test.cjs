const test = require('node:test');
const assert = require('node:assert/strict');
const crypto = require('node:crypto');
const { fs, path, root, render, page } = require('./helpers.cjs');
const fixtures = require('./fixtures/targets.json');
const baseline = require('./fixtures/baseline.json');
const latest = require('./fixtures/latest-screenshots.json');
const { reviews: existingReviews } = require('../lib/reviews.ts');
const expectedCopy = f => ({ ...f.original, ...latest.pages[f.original.slug].overrides });
const expectedReviews = f => latest.pages[f.original.slug].reviewAuthors.map(author => existingReviews.find(r => r.author === author));
const { services, getService } = require('../lib/services.ts');
const { site } = require('../lib/site.ts');
const text = html => html.replace(/<[^>]*>/g, ' ').replace(/&#x27;|&#39;/g,"'").replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
for (const f of fixtures) test(`${f.original.slug}: sourced reviews with replies and complete Google aggregate`, async () => {
  const s=getService(f.original.slug); const html=await render(s.slug);
  assert.deepEqual(s.reviews,expectedReviews(f),'Relevant existing reviews must be referenced');
  const block=html.match(/<div class="rev-foot renovation-review-aggregate">([\s\S]*?)<\/div>/);
  assert.ok(block,'Missing visible aggregate below reviews');
  assert.ok(block[1].includes('class="stars"'));
  assert.ok(text(block[1]).includes(`${site.rating} · ${site.reviewCount} avis Google`));
  assert.ok(block[1].includes(site.googleReviewsUrl.replaceAll('&','&amp;')));
  assert.match(block[1],/target="_blank" rel="noopener noreferrer"/);
  for (const r of expectedReviews(f)) for (const copy of [r.text,r.author,r.date,r.tag,r.reply]) assert.ok(text(html).includes(copy),copy);
  assert.equal((html.match(/<article class="rev"/g)||[]).length,expectedReviews(f).length);
  assert.ok(text(html).includes('à valider avec Sylvain avant publication.'));
});

test('preservation: four untargeted rendered pages and data stay byte-identical', async()=>{
  for(const [slug,expected] of Object.entries(baseline.untargeted)) {
    assert.deepEqual(getService(slug),expected.data,slug);
    assert.equal(await render(slug),expected.html,slug);
  }
});
test('preservation: original route body, global styles and unrelated tracked assets remain unchanged',()=>{
  const route=fs.readFileSync(path.join(root,'app/prestations/[slug]/page.tsx'),'utf8');
  const normalized=route.replace('import RenovationServicePage from "@/components/RenovationServicePage";\n','').replace('  if (["portes-d-entree", "volets-bois", "fenetres-bois"].includes(slug)) return <RenovationServicePage service={s} />;\n','');
  assert.equal(normalized,baseline.route);
  assert.ok(fs.readFileSync(path.join(root,'app/globals.css'),'utf8').startsWith(baseline.css));
  for(const [name,hash] of Object.entries(baseline.files)) assert.equal(crypto.createHash('sha256').update(fs.readFileSync(path.join(root,name))).digest('hex'),hash,name);
});
for(const f of fixtures) test(`${f.original.slug}: latest screenshot complete copy, numbered items, metadata, native FAQ, JSON-LD, photos and destinations`,async()=>{
  const s=getService(f.original.slug),html=await render(s.slug),visible=text(html);
  const {reviews,...copy}=s;const {reviews:oldReviews,...original}=expectedCopy(f);
  assert.deepEqual(copy,original);
  assert.equal(s.intro.length,2);
  assert.equal(s.items.length,5);
  assert.equal(s.faq.length,4);
  const displayTitle=latest.pages[s.slug].displayTitle ?? original.title;
  assert.ok(visible.includes(`${displayTitle} : ce qu'on nous demande.`));
  for(const p of [...s.intro,...s.items.flatMap(i=>[i.t,i.d]),s.quote,s.pageTitle,s.lead]) assert.ok(visible.includes(p),p);
  for(let i=1;i<=s.items.length;i++)assert.ok(html.includes(`>${String(i).padStart(2,'0')}</span>`));
  assert.equal((html.match(/<h1\b/g)||[]).length,1);
  assert.deepEqual(await page.generateMetadata({params:Promise.resolve({slug:s.slug})}),{title:s.pageTitle,description:s.short,alternates:{canonical:f.route}});
  const json=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);
  assert.equal(json['@type'],'FAQPage');assert.deepEqual(json.mainEntity.map(q=>({q:q.name,a:q.acceptedAnswer.text})),s.faq);
  assert.equal((html.match(/<details>/g)||[]).length,s.faq.length);
  assert.equal((html.match(/<summary>/g)||[]).length,s.faq.length);
  assert.doesNotMatch(html,/<details[^>]*\sopen/);
  for(const f of s.faq)for(const c of [f.q,f.a])assert.ok(visible.includes(c));
  assert.ok(html.includes(`src="/images/${s.image}"`));
  for(const match of html.matchAll(/<img[^>]*src="([^"]+)"/g))assert.ok(fs.existsSync(path.join(root,'public',match[1])));
  for(const link of ['/contact',site.phoneHref,...s.related.map(r=>'/prestations/'+r)])assert.ok(html.includes(`href="${link}"`),link);
  assert.ok(html.includes('class="quote-band"'));assert.ok(html.includes('class="cta-band"'));
});

test('three-page hero sizing and mobile safeguards are scoped; other pages keep the original root', async()=>{
  const css=fs.readFileSync(path.join(root,'app/globals.css'),'utf8');
  const appended=css.slice(baseline.css.length);
  assert.match(appended,/\.renovation-service-page \.hero-page h1\s*\{[^}]*max-width:\s*none/);
  assert.match(appended,/min-width:\s*0/);
  assert.match(appended,/overflow-wrap:\s*anywhere/);
  for(const selector of appended.replace(/\/\*[\s\S]*?\*\//g,'').matchAll(/([^{}]+)\{/g)) {
    for(const part of selector[1].split(',')) assert.ok(part.trim().startsWith('.renovation-service-page'),part);
  }
  for(const f of fixtures) assert.match(await render(f.original.slug),/<div class="renovation-service-page">/);
  for(const slug of Object.keys(baseline.untargeted)) assert.doesNotMatch(await render(slug),/renovation-service-page/);
});
