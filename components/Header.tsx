"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { nav, site } from "@/lib/site";
import { PhoneIcon } from "./Icons";

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [pathname]);

  return (
    <header className="header">
      <div className="container header-in">
        <Link href="/" className="logo" aria-label="MSR Bois, accueil">
        <img src="images/logo.png" alt="" width={40} height={40} aria-hidden="true" />
          <span className="logo-name">MSR Bois</span>
          <span className="logo-sub">Menuiserie<br />Bordeaux</span>
        </Link>
        <nav className={`nav ${open ? "is-open" : ""}`} aria-label="Navigation principale">
          {nav.map((n) => (
            <Link key={n.href} href={n.href} aria-current={pathname.startsWith(n.href) ? "page" : undefined}>
              {n.label}
            </Link>
          ))}
          <a className="nav-phone-m" href={site.phoneHref}>{site.phone}</a>
        </nav>
        <div className="header-cta">
          <a className="header-phone" href={site.phoneHref}><PhoneIcon size={14} />{site.phone}</a>
          <Link href="/contact" className="btn btn--dark btn--sm">Devis</Link>
          <button className="burger" aria-expanded={open} aria-label="Menu" onClick={() => setOpen((v) => !v)}>
            <span /><span />
          </button>
        </div>
      </div>
    </header>
  );
}
