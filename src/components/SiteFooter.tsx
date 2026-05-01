import { Link } from "@tanstack/react-router";
import { Phone, Mail, MapPin } from "lucide-react";
import logo from "@/assets/logo-davidbouw.png";

export function SiteFooter() {
  return (
    <footer className="bg-brand-dark text-primary-foreground">
      <div className="container mx-auto grid gap-12 px-6 py-16 md:grid-cols-4">
        <div>
          <div className="flex items-center gap-3">
            <img src={logo} alt="David Bouw" className="h-12 w-12 object-contain" />
            <div className="font-display text-3xl tracking-wider">DAVID BOUW</div>
          </div>
          <p className="mt-4 text-sm text-primary-foreground/70">
            Spécialiste de la démolition, du désamiantage et de l'excavation en Belgique.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg tracking-wider">Navigation</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li><Link to="/" className="hover:text-white">Accueil</Link></li>
            <li><Link to="/services" className="hover:text-white">Services</Link></li>
            <li><Link to="/realisations" className="hover:text-white">Réalisations</Link></li>
            <li><Link to="/contact" className="hover:text-white">Contact</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg tracking-wider">Contact</h4>
          <ul className="mt-4 space-y-3 text-sm text-primary-foreground/80">
            <li className="flex items-center gap-2"><Phone className="h-4 w-4" /> +32 485 35 50 90</li>
            <li className="flex items-center gap-2"><Mail className="h-4 w-4" /> david.bouw82@gmail.com</li>
            <li className="flex items-center gap-2"><MapPin className="h-4 w-4" /> Vilvoorde, Belgique</li>
          </ul>
        </div>
        <div>
          <h4 className="font-display text-lg tracking-wider">Horaires</h4>
          <ul className="mt-4 space-y-2 text-sm text-primary-foreground/80">
            <li>Lun-Ven : 7h - 18h</li>
            <li>Sam : 8h - 14h</li>
            <li className="text-brand-light font-semibold">Urgences 24/7</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-center justify-between gap-2 px-6 py-6 text-xs text-primary-foreground/60 md:flex-row">
          <p>© {new Date().getFullYear()} David Bouw. Tous droits réservés.</p>
          <p>Site professionnel — Belgique</p>
        </div>
      </div>
    </footer>
  );
}
