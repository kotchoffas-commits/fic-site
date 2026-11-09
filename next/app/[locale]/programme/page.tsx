import PageHero from "@/components/sections/PageHero";
import ProgrammeList from "@/components/sections/ProgrammeList";
import Link from "next/link";
import { Briefcase, Wheat, Mountain, Palette, Hammer, Handshake, Music, UtensilsCrossed, Shirt } from "lucide-react";

const CONFERENCES = [
  { t: "Entrepreneuriat des jeunes", d: "Transformer les idées en entreprises viables dans les Collines.", Icon: Briefcase },
  { t: "Filières agricoles", d: "Valorisation locale, transformation et accès aux marchés.", Icon: Wheat },
  { t: "Tourisme durable", d: "Faire des Collines une destination authentique et attractive.", Icon: Mountain },
  { t: "Culture & patrimoine", d: "Le patrimoine comme levier de développement territorial.", Icon: Palette },
  { t: "Artisanat & savoir-faire", d: "Structurer et valoriser les métiers d'art locaux.", Icon: Hammer },
  { t: "Partenariats & financement", d: "Rencontrer les institutions et bailleurs pour financer les projets.", Icon: Handshake },
];

const ANIMATIONS = [
  { t: "Danses & musique", d: "Groupes traditionnels et artistes locaux chaque soir.", Icon: Music },
  { t: "Gastronomie", d: "Découverte des plats et produits typiques des Collines.", Icon: UtensilsCrossed },
  { t: "Défilés & mode", d: "Mise en valeur des créations et tissus locaux.", Icon: Shirt },
];

export const metadata = {
  title: "Programme — FIC 2026",
  description: "Programme des 14 jours de la Foire Internationale des Collines.",
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Programme"
        title="Quatorze jours au rythme des Collines."
        subtitle="Du 20 décembre 2026 au 2 janvier 2027 — expositions, conférences, rencontres d'affaires et animations culturelles."
        breadcrumb="Programme"
      />

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">Temps forts</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">Un programme pour vivre les Collines.</h2>
          </div>
          <ProgrammeList />
        </div>
      </section>

      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">Conférences</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">Des espaces pour penser le territoire.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {CONFERENCES.map((c) => (
              <div key={c.t} className="bg-cream rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-green/10 text-green flex items-center justify-center mb-4">
                  <c.Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
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
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">Animations</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">La culture au cœur de la foire.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {ANIMATIONS.map((c) => (
              <div key={c.t} className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
                <div className="w-12 h-12 rounded-full bg-gold/15 text-gold flex items-center justify-center mb-4">
                  <c.Icon className="w-6 h-6" strokeWidth={1.75} />
                </div>
                <h3 className="font-serif text-xl font-bold mb-2">{c.t}</h3>
                <p className="text-gray-700">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-green text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Ne manquez pas la première édition.</h2>
          <p className="text-lg text-white/85 mb-10 max-w-2xl mx-auto">Réservez dès maintenant votre place ou votre stand.</p>
          <Link href="/exposants" className="inline-block bg-gold text-green-dark px-6 py-3 rounded-lg font-medium hover:bg-gold-dark transition">
            Devenir exposant
          </Link>
        </div>
      </section>
    </>
  );
}
