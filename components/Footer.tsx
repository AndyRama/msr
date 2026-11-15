import Link from "next/link";
import { nav, site } from "@/lib/site";
import { services } from "@/lib/services";
import Stars from "./Stars";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div>
          <p className="footer-logo">MSR Bois</p>
          <p className="footer-desc">Menuiserie de rénovation et de restauration à Bordeaux. Portes, volets, fenêtres, parquets, escaliers et agencements sur mesure.</p>
          <a className="footer-phone" href={site.phoneHref}>{site.phone}</a>
          <address>
            {site.street}<br />{site.city}<br /><span className="dim">{site.plusCode}</span>
          </address>
        </div>
        <div>
          <p className="footer-h">Prestations</p>
          <ul>
            {services.map((s) => (
              <li key={s.slug}><Link href={`/prestations/${s.slug}`}>{s.title === "Volets à persiennes" ? "Volets bois" : s.title === "Dépannage & effraction" ? "Dépannage effraction" : s.title}</Link></li>
            ))}
          </ul>
        </div>
        <div>
          <p className="footer-h">Le site</p>
          <ul>
            {nav.map((n) => (<li key={n.href}><Link href={n.href}>{n.label}</Link></li>))}
          </ul>
        </div>
        <div>
          <p className="footer-h">Avis &amp; infos</p>
          <p className="footer-rating"><Stars /> {site.rating.replace("/5", "")}/5 · {site.reviewCount} avis Google</p>
          <p className="footer-hours">Lundi : dès 8h<br /><span className="dim small">Horaires complets à confirmer avec Sylvain.</span></p>
          <ul>
            <li><Link href="/mentions-legales">Mentions légales</Link></li>
            <li><Link href="/politique-de-confidentialite">Politique de confidentialité</Link></li>
          </ul>
        </div>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} MSR Bois — {site.owner}</span>
        <span>Artisan menuisier · Bordeaux</span>
      </div>
    </footer>
  );
}
