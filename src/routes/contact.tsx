import { createFileRoute } from "@tanstack/react-router";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — David Bouw Belgique" },
      { name: "description", content: "Contactez-nous pour un devis gratuit. Téléphone, email et formulaire à votre disposition." },
      { property: "og:title", content: "Contact — David Bouw" },
      { property: "og:description", content: "Devis gratuit sous 24h. Contactez nos experts en démolition." },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-brand-dark py-20 text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-light">Contact</div>
          <h1 className="font-display text-5xl md:text-7xl">Demandez votre devis</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Réponse garantie sous 24h. Pour les urgences, appelez-nous directement.
          </p>
        </div>
      </section>

      <section className="container mx-auto grid gap-12 px-6 py-24 md:grid-cols-2">
        <div className="space-y-6">
          {[
            { icon: Phone, label: "Téléphone", value: "+32 485 35 50 90", href: "tel:+32485355090" },
            { icon: Mail, label: "Email", value: "david.bouw82@gmail.com", href: "mailto:david.bouw82@gmail.com" },
            { icon: MapPin, label: "Adresse", value: "Guldenschaapstraat 6, 1800 Vilvoorde" },
            { icon: Clock, label: "Horaires", value: "Lun-Ven 7h-18h · Sam 8h-14h · Urgences 24/7" },
          ].map((c) => (
            <a key={c.label} href={c.href} className="flex items-start gap-4 border-l-4 border-brand bg-secondary p-6 transition-all hover:bg-accent">
              <c.icon className="h-8 w-8 flex-shrink-0 text-brand" />
              <div>
                <div className="text-xs font-bold uppercase tracking-widest text-brand">{c.label}</div>
                <div className="mt-1 text-lg font-semibold text-brand-dark">{c.value}</div>
              </div>
            </a>
          ))}
        </div>

        <form className="border-t-4 border-brand bg-card p-8 shadow-lg">
          <h2 className="font-display text-3xl text-brand-dark">Formulaire de devis</h2>
          <div className="mt-6 grid gap-4">
            <div>
              <label className="text-sm font-semibold text-brand-dark">Nom complet *</label>
              <input required className="mt-1 w-full border border-border bg-background px-4 py-3 outline-none focus:border-brand" />
            </div>
            <div className="grid gap-4 sm:grid-cols-2">
              <div>
                <label className="text-sm font-semibold text-brand-dark">Téléphone *</label>
                <input required type="tel" className="mt-1 w-full border border-border bg-background px-4 py-3 outline-none focus:border-brand" />
              </div>
              <div>
                <label className="text-sm font-semibold text-brand-dark">Email</label>
                <input type="email" className="mt-1 w-full border border-border bg-background px-4 py-3 outline-none focus:border-brand" />
              </div>
            </div>
            <div>
              <label className="text-sm font-semibold text-brand-dark">Type de projet</label>
              <select className="mt-1 w-full border border-border bg-background px-4 py-3 outline-none focus:border-brand">
                <option>Démolition</option>
                <option>Désamiantage</option>
                <option>Excavation</option>
                <option>Autre</option>
              </select>
            </div>
            <div>
              <label className="text-sm font-semibold text-brand-dark">Description du projet *</label>
              <textarea required rows={5} className="mt-1 w-full border border-border bg-background px-4 py-3 outline-none focus:border-brand" />
            </div>
            <button type="submit" className="mt-2 bg-brand px-6 py-4 font-bold uppercase tracking-wide text-primary-foreground transition-all hover:bg-brand-dark">
              Envoyer la demande
            </button>
          </div>
        </form>
      </section>
      <SiteFooter />
    </div>
  );
}
