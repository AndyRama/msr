import Link from "next/link";

export default function Breadcrumb({ items }: { items: { label: string; href?: string }[] }) {
  return (
    <nav className="crumbs" aria-label="Fil d'Ariane">
      <Link href="/">Accueil</Link>
      {items.map((it) => (
        <span key={it.label}>
          <i aria-hidden="true">›</i>
          {it.href ? <Link href={it.href}>{it.label}</Link> : <b aria-current="page">{it.label}</b>}
        </span>
      ))}
    </nav>
  );
}
