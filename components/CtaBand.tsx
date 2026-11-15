import Link from "next/link";
import { site } from "@/lib/site";
import { PhoneIcon, ArrowUpRight } from "./Icons";

export default function CtaBand({
  title = "Un projet de rénovation ? Parlons-en.",
  text = "Un appel suffit pour savoir où vous mettez les pieds : ce qui est possible, ce que ça implique, et dans quel ordre.",
}: { title?: string; text?: string }) {
  return (
    <section className="cta-band">
      <div className="container cta-in">
        <div>
          <h2>{title}</h2>
          <p>{text}</p>
        </div>
        <div className="cta-btns">
          <a href={site.phoneHref} className="btn btn--dark"><PhoneIcon size={14} />{site.phone}</a>
          <Link href="/contact" className="btn btn--line">Demander un devis <ArrowUpRight /></Link>
        </div>
      </div>
    </section>
  );
}
