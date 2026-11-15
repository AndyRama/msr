import ContactForm from "./ContactForm";
import { PhoneIcon, PinIcon, ClockIcon, ShieldIcon, ArrowUpRight } from "./Icons";
import { site } from "@/lib/site";

export default function ContactSection() {
  return (
    <div className="container contact-grid">
      <ContactForm />
      <div>
        <div className="direct">
          <p className="mono">Le plus direct</p>
          <a href={site.phoneHref}><PhoneIcon size={26} />{site.phone}</a>
          <p>Vous parlez directement à Sylvain.</p>
        </div>
        <div className="infos">
          <div>
            <PinIcon />
            <div>
              <span className="mono">Atelier</span>
              <p>{site.street}<br />{site.city}</p>
              <p style={{ marginTop: 10 }}><a className="link-u" href={site.mapsUrl} target="_blank" rel="noopener noreferrer">Itinéraire <ArrowUpRight /></a></p>
            </div>
          </div>
          <div>
            <ClockIcon />
            <div>
              <span className="mono">Horaires</span>
              <dl>
                <dt>Lundi</dt><dd>dès 8h</dd>
                <dt>Mardi – vendredi</dt><dd>à confirmer</dd>
                <dt>Samedi – dimanche</dt><dd>à confirmer</dd>
              </dl>
              <p className="small dim" style={{ marginTop: 8 }}>Horaires complets à confirmer avec Sylvain.</p>
            </div>
          </div>
          <div>
            <ShieldIcon />
            <div>
              <span className="mono">Urgence</span>
              <p style={{ color: "var(--muted)" }}>Porte forcée, vitre cassée : appelez, nous vous dirons franchement ce qui est possible selon l'heure.</p>
            </div>
          </div>
        </div>
        <div className="map">
          <iframe title="Plan : atelier MSR Bois, Bordeaux" src={site.mapsEmbed} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>
    </div>
  );
}
