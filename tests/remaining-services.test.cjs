const test=require('node:test');
const assert=require('node:assert/strict');
const {render,page,fs,path,root}=require('./helpers.cjs');
const {getService}=require('../lib/services.ts');
const {reviews}=require('../lib/reviews.ts');
const {site}=require('../lib/site.ts');
const baseline=require('./fixtures/remaining-approved-base.json');
const screenshot=require('./fixtures/remaining-screenshots.json');
const text=h=>h.replace(/<[^>]*>/g,' ').replace(/&#x27;|&#39;/g,"'").replace(/&amp;/g,'&').replace(/&quot;/g,'"').replace(/\s+/g,' ').trim();
const expected={
 parquets:{title:'Pose et rénovation de parquet à Bordeaux',lead:'Un parquet à chevrons, un sol qui craque, un appartement ancien : la pose se prépare avant de se poser.',authors:['Julien D.','Camille & Théo'],items:['Pose de parquet collé','Parquet à chevrons','Rénovation de sols',"Conseil sur la pose dans l’ancien",'Préparation du support'],questions:['Quel parquet choisir dans un immeuble ancien ?','Parquet collé ou flottant ?','Peut-on poser un parquet à chevrons partout ?','Combien de temps pour un appartement ?']},
 escaliers:{title:'Rénovation et pose d’escalier bois à Bordeaux',lead:"Un escalier, c'est la pièce qu'on voit tous les jours. Autant qu'il soit juste, solide, et qu'il donne envie de le monter.",authors:['Sophie L.','Julien D.'],items:["Pose d’escalier et garde-corps","Rénovation d’escalier bois",'Escaliers de restaurant','Mise en sécurité','Finitions'],questions:['Rénover ou remplacer un escalier ?','Comment sécuriser un escalier ancien ?','Un escalier de restaurant peut-il être rénové sur place ?','Combien de temps prend un escalier ?']},
 'agencement-sur-mesure':{title:'Agencement sur mesure à Bordeaux',lead:"Dans l'ancien, rien n'est droit. C'est justement pour ça que le sur-mesure existe.",authors:['Camille & Théo','Sophie L.'],items:['Rangements sous escalier','Panneaux décoratifs','Remplacement de lambris','Mobilier intégré','Locaux professionnels'],questions:['Le sur-mesure a-t-il un sens dans un appartement ancien ?','Quels matériaux utilisez-vous ?','Combien de temps entre le devis et la pose ?','Travaillez-vous pour les commerces ?']},
 'depannage-effraction':{title:'Réparation après effraction à Bordeaux',lead:"Une porte forcée, un cadre arraché, une vitre cassée : d'abord mettre en sécurité, ensuite réparer proprement.",authors:['Antoine R.','Claire M.'],items:['Mise en sécurité','Cadre de porte forcé',"Porte d’entrée endommagée",'Fenêtre ou porte vitrée','Devis et facture détaillés'],questions:['Que faire en premier après une effraction ?','Intervenez-vous la nuit ou le week-end ?','Travaillez-vous avec les assurances ?','Et pour un commerce fermé par une porte forcée ?']}
};
for(const [slug,e] of Object.entries(expected))test(`${slug}: actual route reproduces complete screenshot composition`,async()=>{
 const s=getService(slug),html=await render(slug),visible=text(html);
 assert.match(html,/class="renovation-service-page remaining-service-page/);
 assert.equal(s.pageTitle,e.title);assert.equal(s.lead,e.lead);assert.deepEqual(s.items.map(i=>i.t),e.items);assert.deepEqual(s.faq.map(f=>f.q),e.questions);
 const reference=screenshot.pages.find(p=>p.slug===slug);
 assert.deepEqual(s.intro,reference.intro);assert.equal(s.quote,reference.quote);assert.deepEqual(s.faq,reference.faq);
 assert.equal(s.intro.length,2);assert.equal(s.items.length,5);assert.equal(s.faq.length,4);
 for(const copy of [s.pageTitle,s.lead,...s.intro,...s.items.flatMap(i=>[i.t,i.d]),s.quote,...s.faq.flatMap(f=>[f.q,f.a])])assert.ok(visible.includes(copy),copy);
 for(let i=1;i<=5;i++)assert.ok(html.includes(`>${String(i).padStart(2,'0')}</span>`));
 assert.deepEqual(s.reviews,e.authors.map(a=>reviews.find(r=>r.author===a)));
 assert.equal((html.match(/<article class="rev"/g)||[]).length,2);
 for(const r of s.reviews)for(const c of Object.values(r))assert.ok(visible.includes(c),c);
 assert.ok(visible.includes(`${site.rating} · ${site.reviewCount} avis Google`));
 assert.match(html,/class="rev-foot renovation-review-aggregate"/);
 assert.equal((html.match(/<details>/g)||[]).length,4);assert.doesNotMatch(html,/<details[^>]*\sopen/);
 const ld=JSON.parse(html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/)[1]);assert.deepEqual(ld.mainEntity.map(q=>({q:q.name,a:q.acceptedAnswer.text})),s.faq);
 assert.equal((html.match(/<h1\b/g)||[]).length,1);
 for(const href of ['/contact',site.phoneHref,...s.related.map(r=>'/prestations/'+r)])assert.ok(html.includes(`href="${href}"`));
 assert.ok(html.includes(`src="/images/${s.image}"`));assert.ok(fs.existsSync(path.join(root,'public/images',s.image)));
 assert.deepEqual(await page.generateMetadata({params:Promise.resolve({slug})}),{title:s.pageTitle,description:s.short,alternates:{canonical:'/prestations/'+slug}});
 const old=baseline.services.find(b=>b.slug===slug);assert.deepEqual(s.related,old.related);assert.equal(s.image,old.image);
 const words=x=>x.trim().split(/\s+/).length;
 old.items.forEach((item,i)=>assert.ok(words(s.items[i].d)>=words(item.d),'item description must not shorten'));
 assert.ok(words(s.intro.join(' '))>=words(old.intro.join(' ')));
});
test('first three data and SSR remain byte exact against approved full-SHA baseline',async()=>{for(const [slug,b]of Object.entries(baseline.firstThree)){assert.deepEqual(getService(slug),b.data);assert.equal(await render(slug),b.html)}});
test('new four styles are additive and scoped, with wide titles and mobile safeguards',()=>{const css=fs.readFileSync(path.join(root,'app/globals.css'),'utf8');assert.ok(css.startsWith(baseline.css));const added=css.slice(baseline.css.length);assert.match(added,/\.remaining-service-page \.hero-page h1\s*\{[^}]*max-width:\s*none/);assert.match(added,/remaining-service-page--escaliers/);});
