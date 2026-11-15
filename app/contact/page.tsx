import type { Metadata } from "next";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/ContactSection";

export const metadata: Metadata = {
  title: "Contact et devis — menuisier à Bordeaux",
  description: "Contactez MSR Bois à Bordeaux : un appel, un message, quelques photos. Devis rapide, sans engagement.",
};

export default function Page() {
  return (
    <>
      <PageHero
        crumbs={[{ label: "Contact" }]}
        eyebrow="Contact"
        title="Dites-nous ce qu'il y a à faire."
        lead="Un appel, un message, quelques photos : c'est souvent suffisant pour savoir où l'on va. Devis rapide, sans engagement."
      />
      <section className="section"><ContactSection /></section>
      <section className="quote-band">
        <div className="container">
          <p className="quote">« Le plus simple reste l'appel. En deux minutes, on sait si c'est faisable, comment, et à peu près dans quel ordre de budget. »</p>
          <p className="caption" style={{ marginTop: 20 }}>Sylvain Ruel — MSR Bois, Bordeaux</p>
        </div>
      </section>
    </>
  );
}
