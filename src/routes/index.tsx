import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { Phone, ArrowRight, Shield, Hammer, Truck, Recycle, CheckCircle2, Clock, Award, Users } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import heroImg from "@/assets/hero-demolition.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "David Bouw — Démolition, désamiantage & excavation en Belgique" },
      { name: "description", content: "Entreprise de démolition professionnelle en Belgique. Démolition, désamiantage, excavation, gestion des déchets. Devis gratuit sous 24h." },
      { property: "og:title", content: "David Bouw — Spécialiste démolition Belgique" },
      { property: "og:description", content: "Démolition, désamiantage, excavation. Plus de 15 ans d'expertise. Devis gratuit." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* HERO */}
      <section className="relative overflow-hidden bg-brand-dark text-primary-foreground">
        <div className="absolute inset-0">
          <img src={heroImg} alt="Chantier de démolition" className="h-full w-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/90 to-brand-dark/40" />
        </div>
        <div className="container relative mx-auto grid gap-12 px-6 py-24 md:grid-cols-2 md:py-32">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 bg-brand-light/20 px-4 py-2 text-xs font-bold uppercase tracking-widest text-brand-light">
              <Clock className="h-3 w-3" /> Intervention 24/7
            </div>
            <h1 className="font-display text-6xl leading-none md:text-8xl">
              DÉMOLIR.
              <br />
              <span className="text-brand-light">RECONSTRUIRE.</span>
            </h1>
            <p className="mt-8 max-w-lg text-lg text-primary-foreground/80">
              Plus de 15 ans d'expertise en démolition, désamiantage et excavation.
              Devis gratuit sous 24h, intervention rapide partout en Belgique.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="tel:+32485355090" className="inline-flex items-center justify-center gap-2 bg-brand px-8 py-4 font-bold uppercase tracking-wide text-primary-foreground transition-all hover:bg-brand-light">
                <Phone className="h-4 w-4" /> +32 485 35 50 90
              </a>
              <Link to="/services" className="inline-flex items-center justify-center gap-2 border-2 border-white/80 px-8 py-4 font-bold uppercase tracking-wide text-white transition-all hover:bg-white hover:text-brand-dark">
                Nos services <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="hidden md:flex md:items-end md:justify-end">
            <div className="bg-brand p-8 text-primary-foreground shadow-2xl">
              <div className="font-display text-6xl">500+</div>
              <div className="mt-2 text-sm font-bold uppercase tracking-widest">Chantiers réalisés</div>
              <div className="mt-6 h-px bg-white/20" />
              <div className="mt-6 font-display text-6xl">15</div>
              <div className="mt-2 text-sm font-bold uppercase tracking-widest">Années d'expertise</div>
            </div>
          </div>
        </div>
      </section>

      {/* TRUST BAR */}
      <section className="border-b border-border bg-secondary">
        <div className="container mx-auto grid gap-8 px-6 py-10 sm:grid-cols-2 md:grid-cols-4">
          {[
            { icon: Shield, label: "Assurance complète" },
            { icon: Award, label: "Certifié & agréé" },
            { icon: Clock, label: "Devis sous 24h" },
            { icon: Users, label: "Équipe expérimentée" },
          ].map((item) => (
            <div key={item.label} className="flex items-center gap-3 text-brand-dark">
              <item.icon className="h-6 w-6 text-brand" />
              <span className="font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* SERVICES */}
      <section className="container mx-auto px-6 py-24">
        <div className="mb-16 max-w-2xl">
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand">Nos expertises</div>
          <h2 className="font-display text-5xl text-brand-dark md:text-6xl">Services de démolition</h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Une gamme complète de services pour gérer votre projet de A à Z, dans le respect des normes de sécurité.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            { icon: Hammer, title: "Démolition", desc: "Démolition complète ou partielle de bâtiments résidentiels et industriels." },
            { icon: Shield, title: "Désamiantage", desc: "Retrait d'amiante en conformité avec la réglementation belge." },
            { icon: Truck, title: "Excavation", desc: "Terrassement et excavation pour fondations, piscines et caves." },
            { icon: Recycle, title: "Évacuation", desc: "Tri et évacuation responsable des déchets de chantier." },
            { icon: Hammer, title: "Travaux de finitions", desc: "Finitions de qualité pour vos projets de rénovation." },
            { icon: Shield, title: "Gros œuvre", desc: "Maçonnerie et travaux de gros œuvre pour vos constructions." },
          ].map((s) => (
            <div key={s.title} className="group border-l-4 border-brand bg-card p-8 shadow-sm transition-all hover:shadow-xl">
              <s.icon className="h-10 w-10 text-brand transition-transform group-hover:scale-110" />
              <h3 className="mt-6 font-display text-2xl tracking-wider text-brand-dark">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WHY US */}
      <section className="bg-secondary py-24">
        <div className="container mx-auto grid gap-16 px-6 md:grid-cols-2">
          <div>
            <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand">Pourquoi nous choisir</div>
            <h2 className="font-display text-5xl text-brand-dark md:text-6xl">L'expertise au service de vos projets</h2>
            <p className="mt-6 text-lg text-muted-foreground">
              Nous combinons savoir-faire artisanal et équipements modernes pour garantir
              des chantiers efficaces, sécurisés et respectueux de l'environnement.
            </p>
          </div>
          <ul className="space-y-5">
            {[
              "Devis détaillé et transparent sous 24h",
              "Équipe certifiée et agréée pour le désamiantage",
              "Matériel de pointe et machines récentes",
              "Respect strict des délais et du budget",
              "Gestion responsable des déchets",
              "Assurance tous risques chantier",
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-brand" />
                <span className="text-brand-dark">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-brand text-primary-foreground">
        <div className="container mx-auto flex flex-col items-center justify-between gap-8 px-6 py-16 md:flex-row">
          <div>
            <h2 className="font-display text-4xl md:text-5xl">Un projet de démolition ?</h2>
            <p className="mt-2 text-lg text-primary-foreground/80">Recevez votre devis gratuit en moins de 24h.</p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row">
            <a href="tel:+32485355090" className="inline-flex items-center gap-2 bg-white px-8 py-4 font-bold uppercase tracking-wide text-brand-dark transition-all hover:bg-brand-dark hover:text-white">
              <Phone className="h-4 w-4" /> Appeler
            </a>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-white px-8 py-4 font-bold uppercase tracking-wide text-white transition-all hover:bg-white hover:text-brand">
              Demander un devis <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
