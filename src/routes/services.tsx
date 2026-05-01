import { createFileRoute, Link } from "@tanstack/react-router";
import { Hammer, Shield, Truck, Recycle, ArrowRight, CheckCircle2 } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";
import demoImg from "@/assets/service-demolition.jpg";
import asbestosImg from "@/assets/service-asbestos.jpg";
import excavationImg from "@/assets/service-excavation.jpg";

export const Route = createFileRoute("/services")({
  head: () => ({
    meta: [
      { title: "Nos Services — David Bouw Belgique" },
      { name: "description", content: "Démolition, désamiantage, excavation, évacuation des déchets. Découvrez nos services professionnels." },
      { property: "og:title", content: "Services de démolition — David Bouw" },
      { property: "og:description", content: "Démolition, désamiantage, excavation. Expertise complète pour vos chantiers." },
    ],
  }),
  component: ServicesPage,
});

const services = [
  {
    icon: Hammer,
    title: "Démolition",
    image: demoImg,
    desc: "Démolition complète ou partielle de bâtiments résidentiels, commerciaux et industriels. Nos équipes interviennent avec précision et sécurité.",
    points: ["Démolition intérieure", "Démolition de bâtiment complet", "Cassage de murs porteurs", "Sciage béton"],
  },
  {
    icon: Shield,
    title: "Désamiantage",
    image: asbestosImg,
    desc: "Retrait d'amiante par une équipe certifiée, dans le strict respect de la réglementation belge et de la sécurité des occupants.",
    points: ["Inventaire amiante", "Retrait sécurisé", "Évacuation conforme", "Certificat de fin de chantier"],
  },
  {
    icon: Truck,
    title: "Excavation & terrassement",
    image: excavationImg,
    desc: "Travaux de terrassement pour fondations, piscines, caves et aménagements extérieurs avec un matériel adapté à chaque chantier.",
    points: ["Fouilles de fondation", "Excavation de piscines", "Nivellement de terrain", "Drainage"],
  },
];

function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="bg-brand-dark py-20 text-primary-foreground">
        <div className="container mx-auto px-6">
          <div className="mb-3 text-sm font-bold uppercase tracking-widest text-brand-light">Nos services</div>
          <h1 className="font-display text-5xl md:text-7xl">Expertise complète</h1>
          <p className="mt-4 max-w-2xl text-lg text-primary-foreground/80">
            De la démolition au désamiantage en passant par l'excavation, nous prenons en charge l'ensemble de votre projet.
          </p>
        </div>
      </section>

      <section className="container mx-auto space-y-24 px-6 py-24">
        {services.map((s, i) => (
          <div key={s.title} className={`grid items-center gap-12 md:grid-cols-2 ${i % 2 ? "md:[&>*:first-child]:order-2" : ""}`}>
            <div className="aspect-[4/3] overflow-hidden border-l-4 border-brand">
              <img src={s.image} alt={s.title} loading="lazy" className="h-full w-full object-cover" />
            </div>
            <div>
              <s.icon className="h-12 w-12 text-brand" />
              <h2 className="mt-4 font-display text-4xl text-brand-dark md:text-5xl">{s.title}</h2>
              <p className="mt-4 text-lg text-muted-foreground">{s.desc}</p>
              <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                {s.points.map((p) => (
                  <li key={p} className="flex items-center gap-2 text-brand-dark">
                    <CheckCircle2 className="h-5 w-5 text-brand" /> {p}
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="mt-8 inline-flex items-center gap-2 bg-brand px-6 py-3 font-bold uppercase tracking-wide text-primary-foreground transition-all hover:bg-brand-dark">
                Demander un devis <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        ))}
      </section>

      <section className="bg-secondary py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-display text-4xl text-brand-dark md:text-5xl">Autres prestations</h2>
          <div className="mt-10 grid gap-6 md:grid-cols-3">
            {["Évacuation déchets", "Travaux de finitions", "Gros œuvre"].map((t) => (
              <div key={t} className="border-t-4 border-brand bg-card p-8">
                <Recycle className="mx-auto h-8 w-8 text-brand" />
                <h3 className="mt-4 font-display text-2xl text-brand-dark">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
}
