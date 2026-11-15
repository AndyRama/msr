import Link from "next/link";
import type { Service } from "@/lib/services";
import Photo from "./Photo";
import { ArrowUpRight } from "./Icons";

export default function ServiceCard({ s }: { s: Service }) {
  return (
    <article className="card">
      <Link href={`/prestations/${s.slug}`} aria-label={s.title}>
        <Photo src={s.image} alt={s.title} ratio="4 / 3" />
      </Link>
      <h3>{s.title}</h3>
      <p>{s.short}</p>
      <Link href={`/prestations/${s.slug}`} className="mono">Découvrir <ArrowUpRight /></Link>
    </article>
  );
}
