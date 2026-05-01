import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import demoImg from "@/assets/service-demolition.jpg";
import asbestosImg from "@/assets/service-asbestos.jpg";
import excavationImg from "@/assets/service-excavation.jpg";
import heroImg from "@/assets/hero-demolition.jpg";

export const Route = createFileRoute("/realisations")({
  head: () => ({
    meta: [
      { title: "Réalisations — David Bouw" },
      { name: "description", content: "Découvrez nos chantiers de démolition, désamiantage et excavation réalisés en Belgique." },
      { property: "og:title", content: "Nos réalisations — David Bouw" },
      { property: "og:description", content: "Plus de 500 chantiers réalisés. Découvrez notre savoir-faire en images." },
    ],
  }),
  component: RealisationsPage,
});

const projects = [
  { title: "Démolition immeuble industriel", location: "Vilvoorde", year: "2024", image: heroImg },
  { title: "Désamiantage école primaire", location: "Bruxelles", year: "2024", image: asbestosImg },
  { title: "Excavation piscine privée", location: "Anvers", year: "2023", image: excavationImg },
  { title: "Démolition intérieure villa", location: "Gand", year: "2023", image: demoImg },
  { title: "Terrassement fondations", location: "Liège", year: "2023", image: excavationImg },
  { title: "Désamiantage entrepôt", location: "Charleroi", year: "2022", image: asbestosImg },
];

function RealisationsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-brand-dark py-20 text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-light">Portfolio</div>
          <h1 className="font-display text-5xl md:text-7xl">Nos réalisations</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            Plus de 500 chantiers menés à bien à travers la Belgique. Un aperçu de notre savoir-faire.
          </p>
        </div>
      </section>

      <section className="container mx-auto px-6 py-24">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <article key={p.title} className="group overflow-hidden bg-card shadow-sm transition-all hover:shadow-2xl">
              <div className="aspect-[4/3] overflow-hidden">
                <img src={p.image} alt={p.title} loading="lazy" className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
              </div>
              <div className="border-l-4 border-brand p-6">
                <div className="text-xs font-bold uppercase tracking-widest text-brand">{p.location} · {p.year}</div>
                <h3 className="mt-2 font-display text-2xl text-brand-dark">{p.title}</h3>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-brand text-primary-foreground">
        <div className="container mx-auto flex flex-col items-center justify-between gap-6 px-6 py-12 md:flex-row">
          <h2 className="font-display text-3xl md:text-4xl">Votre projet sera le prochain.</h2>
          <Link to="/contact" className="inline-flex items-center gap-2 bg-white px-8 py-4 font-bold uppercase tracking-wide text-brand-dark transition-all hover:bg-brand-dark hover:text-white">
            Nous contacter <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
