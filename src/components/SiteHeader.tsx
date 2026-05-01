import { Link } from "@tanstack/react-router";
import { Phone } from "lucide-react";
import logo from "@/assets/logo-davidbouw.png";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/80">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        <Link to="/" className="flex items-center gap-3">
          <img src={logo} alt="David Bouw" className="h-12 w-12 object-contain" />
          <div className="font-display text-2xl tracking-wider text-brand-dark">
            DAVID BOUW
          </div>
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-semibold uppercase tracking-wide text-ink md:flex">
          <Link to="/" activeOptions={{ exact: true }} activeProps={{ className: "text-brand" }} className="hover:text-brand transition-colors">
            Accueil
          </Link>
          <Link to="/services" activeProps={{ className: "text-brand" }} className="hover:text-brand transition-colors">
            Services
          </Link>
          <Link to="/realisations" activeProps={{ className: "text-brand" }} className="hover:text-brand transition-colors">
            Réalisations
          </Link>
          <Link to="/contact" activeProps={{ className: "text-brand" }} className="hover:text-brand transition-colors">
            Contact
          </Link>
        </nav>
        <a
          href="tel:+32485355090"
          className="hidden items-center gap-2 bg-brand px-5 py-3 text-sm font-bold uppercase tracking-wide text-primary-foreground transition-all hover:bg-brand-dark md:inline-flex"
        >
          <Phone className="h-4 w-4" />
          Devis gratuit
        </a>
      </div>
    </header>
  );
}
