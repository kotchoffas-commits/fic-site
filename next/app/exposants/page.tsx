import PageHero from "@/components/sections/PageHero";
import Link from "next/link";
import { Wheat, Shirt, Hammer, Droplets, Palette, UtensilsCrossed } from "lucide-react";

const EXPO = [
  { cat: "Agro-transformation", name: "Coopérative Agricole des Collines", desc: "Produits transformés du terroir : farines, jus, épices.", Icon: Wheat, color: "from-green/20 to-gold/20" },
  { cat: "Artisanat", name: "Atelier Textile Dassa", desc: "Tissus traditionnels, pagne et créations locales.", Icon: Shirt, color: "from-gold/20 to-green/20" },
  { cat: "Artisanat d'art", name: "Sculpteurs de Glazoué", desc: "Objets d'art, sculptures et créations bois.", Icon: Hammer, color: "from-green/10 to-gold/30" },
  { cat: "Produits naturels", name: "Miel des Collines", desc: "Miel naturel et produits dérivés.", Icon: Droplets, color: "from-gold/30 to-green/10" },
  { cat: "Mode & design", name: "Créations Savannah", desc: "Prêt-à-porter et accessoires inspirés du territoire.", Icon: Palette, color: "from-green/20 to-cream" },
  { cat: "Gastronomie", name: "Saveurs de Dassa", desc: "Plats, condiments et spécialités locales.", Icon: UtensilsCrossed, color: "from-gold/20 to-cream" },
];

const STEPS = [
  { t: "Candidatez", d: "Présentez votre activité et votre offre via le formulaire de contact." },
  { t: "Validation", d: "L'équipe FIC étudie votre dossier et vous répond dans les meilleurs délais." },
  { t: "Installation", d: "Attribution du stand et préparation de votre participation à la foire." },
];

export const metadata = {
  title: "Exposants & Partenaires — FIC 2026",
  description: "Catalogue des exposants, appel à candidature et partenaires de la FIC 2026.",
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Exposants & Partenaires"
        title="Le cœur battant de la FIC."
        subtitle="Producteurs, artisans, entrepreneurs, institutions et partenaires réunis autour du Made in Collines."
        breadcrumb="Exposants"
      />

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">Catalogue</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Les acteurs du Made in Collines.</h2>
            <p className="text-gray-600 text-lg">Artisans, producteurs, PME, coopératives et créateurs présents à la FIC 2026.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {EXPO.map((e) => (
              <div key={e.name} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border border-gray-100">
                <div className={`relative aspect-[4/3] bg-gradient-to-br ${e.color} flex items-center justify-center text-green-dark`}>
                  <e.Icon className="w-16 h-16 group-hover:scale-110 transition duration-700" strokeWidth={1.25} />
                </div>
                <div className="p-6">
                  <small className="block text-xs uppercase tracking-wider text-gold font-semibold mb-2">{e.cat}</small>
                  <h4 className="font-serif text-xl font-bold mb-2">{e.name}</h4>
                  <p className="text-gray-700">{e.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">Appel à candidature</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Devenez exposant à la FIC 2026.</h2>
            <p className="text-gray-600 text-lg">Producteur, artisan, entrepreneur ou coopérative ? Réservez votre stand pour la première édition.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {STEPS.map((s, i) => (
              <div key={s.t} className="bg-cream rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-10 h-10 rounded-full bg-gold text-green-dark flex items-center justify-center font-serif font-bold mb-4">
                  {i + 1}
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{s.t}</h3>
                <p className="text-gray-700">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/contact" className="inline-block bg-green text-white px-6 py-3 rounded-lg font-medium hover:bg-green-dark transition">
              Manifester mon intérêt
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">Partenaires</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Ils accompagnent la FIC.</h2>
            <p className="text-gray-600 text-lg">Institutions, entreprises et organisations engagées aux côtés du territoire.</p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {Array.from({ length: 5 }).map((_, i) => (
              <div key={i} className="aspect-[3/2] bg-white border border-dashed border-gray-300 rounded-xl flex items-center justify-center text-xs text-gray-400 uppercase tracking-widest">
                Partenaire
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-green text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Devenir partenaire de la FIC.</h2>
          <p className="text-lg text-white/85 mb-10 max-w-2xl mx-auto">Associez votre image à un événement porteur de sens pour le territoire des Collines.</p>
          <Link href="/contact" className="inline-block bg-gold text-green-dark px-6 py-3 rounded-lg font-medium hover:bg-gold-dark transition">
            Discutons partenariat
          </Link>
        </div>
      </section>
    </>
  );
}
