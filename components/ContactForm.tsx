"use client";
import { useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon } from "./Icons";

const needs = ["Portes d'entrée", "Volets à persiennes", "Fenêtres bois", "Parquets", "Escaliers", "Agencement sur mesure", "Dépannage effraction", "Autre"];

/**
 * TODO — envoi à brancher plus tard (Server Action ou route API) :
 * nom*, téléphone*, e-mail, type de besoin, projet*, urgent, jusqu'à 4 photos (JPG/PNG/WebP, 5 Mo max).
 * Le rendu est final ; seul le handleSubmit est provisoire.
 */
export default function ContactForm() {
  const [msg, setMsg] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setMsg(`L'envoi en ligne n'est pas encore actif : appelez Sylvain au ${site.phone}.`);
  }

  return (
    <form className="form-card" onSubmit={handleSubmit} noValidate>
      <div className="form-grid">
        <label className="field"><span>Nom *</span><input name="nom" type="text" placeholder="Votre nom" autoComplete="name" required /></label>
        <label className="field"><span>Téléphone *</span><input name="telephone" type="tel" placeholder="06 00 00 00 00" autoComplete="tel" required /></label>
        <label className="field"><span>E-mail</span><input name="email" type="email" placeholder="vous@exemple.fr" autoComplete="email" /></label>
        <label className="field"><span>Type de besoin</span>
          <select name="besoin" defaultValue={needs[0]}>{needs.map((n) => <option key={n}>{n}</option>)}</select>
        </label>
        <label className="field full"><span>Votre projet *</span>
          <textarea name="projet" placeholder="Quelques mots sur le chantier : pièce concernée, état actuel, ce que vous aimeriez." required />
        </label>
      </div>
      <label className="urgent-check"><input type="checkbox" name="urgent" /> C'est urgent (porte forcée, fenêtre cassée, mise en sécurité)</label>
      <div style={{ display: "grid", gap: 10 }}>
        <label className="photos-btn">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" aria-hidden="true"><path d="m21 11-8.5 8.5a5 5 0 0 1-7-7L14 4a3.5 3.5 0 0 1 5 5l-8.5 8.5a2 2 0 0 1-3-3L15 7" /></svg>
          Ajouter des photos
          <input type="file" name="photos" accept="image/jpeg,image/png,image/webp" multiple hidden />
        </label>
        <p className="form-note">JPG, PNG ou WebP, 5 Mo max par photo, 4 photos maximum. Les photos sont stockées de façon privée.</p>
      </div>
      <div className="form-act">
        <button type="submit" className="btn btn--dark">Envoyer ma demande <span aria-hidden="true">→</span></button>
        <a className="call" href={site.phoneHref}><PhoneIcon size={12} />Ou appeler directement</a>
      </div>
      <p className="form-msg" role="status" aria-live="polite">{msg}</p>
      <p className="form-note">Vos informations servent uniquement à répondre à votre demande. Voir la <Link href="/politique-de-confidentialite" style={{ borderBottom: "1px solid var(--gold)" }}>politique de confidentialité</Link>.</p>
    </form>
  );
}
