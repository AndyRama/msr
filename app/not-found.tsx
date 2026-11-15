import Link from "next/link";
import PageHero from "@/components/PageHero";

export default function NotFound() {
  return (
    <PageHero
      crumbs={[{ label: "Page introuvable" }]}
      eyebrow="Erreur 404"
      title="Cette page n'existe pas."
      lead={<>Retournez à l'<Link href="/" className="link-u">accueil</Link> ou appelez directement Sylvain.</>}
    />
  );
}
