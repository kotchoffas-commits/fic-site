import PageHero from "@/components/sections/PageHero";
import Link from "next/link";
import Image from "next/image";

const TERRITOIRE = [
  { t: "Dassa-Zoumè", d: "Capitale des Collines, ville-carrefour et terre de pèlerinage.", icon: "📍" },
  { t: "Glazoué", d: "Commune agricole, marché et carrefour des échanges.", icon: "🌿" },
  { t: "Savalou", d: "Collines, palais royaux et tradition vivante.", icon: "👑" },
  { t: "Savè", d: "Terres agricoles et production vivrière.", icon: "🌾" },
  { t: "Bantè", d: "Terroir de produits naturels et de traditions.", icon: "💧" },
  { t: "Ouèssè", d: "Élevage, agriculture et paysages de savane.", icon: "⛰" },
];

const MADE_IN = [
  { t: "Agro-transformation", d: "Farines, jus, épices, produits dérivés du terroir.", icon: "🌾" },
  { t: "Textile", d: "Tissus, pagnes et créations artisanales.", icon: "👕" },
  { t: "Artisanat d'art", d: "Sculptures, objets bois et créations traditionnelles.", icon: "🔨" },
  { t: "Produits naturels", d: "Miel, beurre de karité, plantes médicinales.", icon: "🍯" },
  { t: "Gastronomie", d: "Plats et condiments typiques de la région.", icon: "🍴" },
  { t: "Maroquinerie", d: "Sacs, ceintures et accessoires en cuir.", icon: "👜" },
];

const TOURISME = [
  { img: "/assets/tourisme/collines-sacrees.webp", t: "Collines sacrées", d: "Panoramas et sites spirituels chargés d'histoire." },
  { img: "/assets/tourisme/sanctuaire-marial.webp", t: "Sanctuaire marial", d: "Haut lieu de pèlerinage à Dassa-Zoumè." },
  { img: "/assets/tourisme/palais-royaux.jpg", t: "Palais royaux", d: "Mémoire des royaumes et chefferies des Collines." },
  { img: "/assets/tourisme/paysages-naturels.jpg", t: "Paysages naturels", d: "Savanes, forêts et points de vue exceptionnels." },
  { img: "/assets/tourisme/fetes-traditionnelles.jpg", t: "Fêtes traditionnelles", d: "Rituels, danses et célébrations locales." },
  { img: "/assets/tourisme/randonnees-circuits.jpg", t: "Randonnées & circuits", d: "Parcours de découverte culturelle et naturelle." },
];

export const metadata = {
  title: "Les Collines & Made in Collines — FIC 2026",
  description: "Territoire, produits, savoir-faire et tourisme des Collines.",
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Les Collines"
        title="Un territoire à découvrir."
        subtitle="Un territoire ne se résume pas à une carte. Il se raconte à travers ses femmes et ses hommes, ses produits, sa culture et son patrimoine."
        breadcrumb="Collines"
      />

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">Le territoire</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Un département, mille richesses.</h2>
            <p className="text-gray-600 text-lg">Le département des Collines regroupe plusieurs communes. Chacune porte une identité forte et des savoir-faire uniques.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TERRITOIRE.map((c) => (
              <div key={c.t} className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-green/10 text-green flex items-center justify-center mb-4 text-xl">{c.icon}</div>
                <h3 className="font-serif text-xl font-bold mb-2">{c.t}</h3>
                <p className="text-gray-700">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">Made in Collines</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">Produits & savoir-faire.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {MADE_IN.map((c) => (
              <div key={c.t} className="bg-cream rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-gold/15 text-gold flex items-center justify-center mb-4 text-xl">{c.icon}</div>
                <h3 className="font-serif text-xl font-bold mb-2">{c.t}</h3>
                <p className="text-gray-700">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">Tourisme</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Un patrimoine à vivre.</h2>
            <p className="text-gray-600 text-lg">Des collines, des paysages, des lieux de mémoire et des traditions vivantes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {TOURISME.map((c) => (
              <article key={c.t} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image src={c.img} alt={c.t} fill sizes="(max-width: 768px) 100vw, 33vw" className="object-cover group-hover:scale-110 transition duration-700" />
                </div>
                <div className="p-6">
                  <h3 className="font-serif text-xl font-bold mb-2">{c.t}</h3>
                  <p className="text-gray-700">{c.d}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-green text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Venez découvrir les Collines.</h2>
          <p className="text-lg text-white/85 mb-10 max-w-2xl mx-auto">Pendant la FIC 2026, profitez-en pour explorer le territoire et rencontrer ses acteurs.</p>
          <Link href="/programme" className="inline-block bg-gold text-green-dark px-6 py-3 rounded-lg font-medium hover:bg-gold-dark transition">
            Voir le programme
          </Link>
        </div>
      </section>
    </>
  );
}
