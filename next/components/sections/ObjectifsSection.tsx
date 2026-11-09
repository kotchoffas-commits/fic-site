import Image from "next/image";

const ITEMS = [
  { img: "/assets/objectifs/rendre-visible.png", t: "Rendre visible", d: "Faire connaître les produits, talents et entreprises du territoire à un large public." },
  { img: "/assets/objectifs/creer-connexions.png", t: "Créer des connexions", d: "Faciliter les rencontres entre producteurs, acheteurs, investisseurs et partenaires." },
  { img: "/assets/objectifs/economie-locale.png", t: "Stimuler l'économie locale", d: "Générer des retombées économiques concrètes pour les acteurs du département." },
  { img: "/assets/objectifs/promouvoir-tourisme.png", t: "Promouvoir le tourisme", d: "Faire des Collines une destination attractive et authentique." },
  { img: "/assets/objectifs/renforcer-capacites.png", t: "Renforcer les capacités", d: "Offrir des espaces de formation et d'échange aux entrepreneurs locaux." },
  { img: "/assets/objectifs/perenniser-dynamique.png", t: "Pérenniser la dynamique", d: "Installer la FIC comme un rendez-vous annuel incontournable." },
];

export default function ObjectifsSection() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">Nos objectifs</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-[1.15] text-balance">Ce que la FIC veut accomplir.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ITEMS.map((c) => (
            <article key={c.t} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100">
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image src={c.img} alt={c.t} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition duration-700" />
              </div>
              <div className="p-6">
                <h3 className="font-serif text-xl font-bold text-balance mb-2">{c.t}</h3>
                <p className="text-gray-700">{c.d}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
