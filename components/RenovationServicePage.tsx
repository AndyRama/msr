import Link from "next/link";
import PageHero from "@/components/PageHero";
import Photo from "@/components/Photo";
import Stars from "@/components/Stars";
import CtaBand from "@/components/CtaBand";
import { PhoneIcon, ArrowUpRight, ChevronDown } from "@/components/Icons";
import { getService, services, type Service } from "@/lib/services";
import { site } from "@/lib/site";

/** Rendering reserved for the three exterior-joinery renovation pages. */
export default function RenovationServicePage({ service: s }: { service: Service }) {
  const related = s.related.map((r) => getService(r)!).filter(Boolean);
  // Keep the shared service-card label unchanged on the four legacy pages.
  const displayTitle = s.slug === "volets-bois" ? "Volets bois" : s.title;

  const faqLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: s.faq.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
  };

  return (
    <div className="renovation-service-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd).replace(/</g, "\\u003c") }} />
      <PageHero
        crumbs={[{ label: "Prestations", href: "/prestations" }, { label: displayTitle }]}
        eyebrow={s.eyebrow}
        title={s.pageTitle}
        lead={s.lead}
      />

      <section className="section">
        <div className="container split">
          <div>
            <div className="prose">{s.intro.map((p, i) => <p key={i}>{p}</p>)}</div>
            <ul className="items">
              {s.items.map((it, i) => (
                <li key={it.t}>
                  <span className="mono">{String(i + 1).padStart(2, "0")}</span>
                  <h3>{it.t}</h3>
                  <p>{it.d}</p>
                </li>
              ))}
            </ul>
          </div>
          <aside className="side">
            <Photo src={s.image} alt={s.title} ratio="4 / 3" priority />
            <div className="side-body">
              <p className="rate"><Stars /> {site.rating} · {site.reviewCount} avis</p>
              <h3>Parlons de votre chantier, sans engagement.</h3>
              <a href={site.phoneHref} className="btn btn--dark btn--block"><PhoneIcon size={14} />{site.phone}</a>
              <Link href="/contact" className="btn btn--line btn--block">Demander un devis <ArrowUpRight /></Link>
              <p className="small">{site.street}, {site.city} — Lundi dès 8h.</p>
            </div>
          </aside>
        </div>
      </section>

      <section className="quote-band">
        <div className="container">
          <p className="eyebrow">Dans l'ancien</p>
          <p className="quote">« {s.quote} »</p>
        </div>
      </section>

      {s.reviews && (
        <section className="section">
          <div className="container rev-wrap">
            <div>
              <p className="eyebrow">Avis clients</p>
              <h2>Ce qu'en disent les clients.</h2>
              <p style={{ marginTop: 24 }}><a className="link-u" href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">Tous les avis Google <ArrowUpRight /></a></p>
            </div>
            <div>
              <div className="rev-list">
                {s.reviews.map((r) => (
                  <article className="rev" key={r.author}>
                    <Stars size={13} />
                    <p className="t">{r.text}</p>
                    <div className="rev-by">{r.author}<span>{r.date} · {r.tag}</span></div>
                    <div className="reply">
                      <p className="mono">Réponse de Sylvain</p>
                      <p>{r.reply}</p>
                    </div>
                  </article>
                ))}
              </div>
              <div className="rev-foot renovation-review-aggregate">
                <p className="rate"><Stars /> {site.rating} · {site.reviewCount} avis Google</p>
                <a className="link-u" href={site.googleReviewsUrl} target="_blank" rel="noopener noreferrer">Lire tous les avis sur Google <ArrowUpRight /></a>
              </div>
              <p className="note">Extraits de la fiche Google de MSR Bois, reformulés en français pour le site — à valider avec Sylvain avant publication.</p>
            </div>
          </div>
        </section>
      )}

      <section className="section section--alt">
        <div className="container rev-wrap">
          <div>
            <p className="eyebrow">Questions fréquentes</p>
            <h2>{displayTitle} : ce qu'on nous demande.</h2>
          </div>
          <div className="faq">
            {s.faq.map((f) => (
              <details key={f.q}>
                <summary>{f.q}<ChevronDown /></summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <p className="eyebrow" style={{ marginBottom: 28 }}>À voir aussi</p>
          <div className="work-grid">
            {related.map((r) => (
              <Link key={r.slug} href={`/prestations/${r.slug}`} className="box" style={{ padding: 16, justifyContent: "flex-start" }}>
                <div style={{ width: 88, flexShrink: 0 }}><Photo src={r.image} alt={r.title} ratio="1 / 1" /></div>
                <div><h3>{r.title}</h3><span className="mono">Voir la page</span></div>
              </Link>
            ))}
          </div>
          <p className="caption" style={{ marginTop: 28 }}>{services.length} prestations — Bordeaux et alentours</p>
        </div>
      </section>

      <CtaBand />
    </div>
  );
}
