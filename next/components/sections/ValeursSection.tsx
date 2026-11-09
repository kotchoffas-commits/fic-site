import { Sparkles, HeartHandshake, Leaf, Award } from "lucide-react";

const ITEMS = [
  { t: "Valorisation", d: "Rendre visibles les richesses et savoir-faire du territoire.", Icon: Sparkles },
  { t: "Solidarité", d: "Faire réussir ensemble les acteurs locaux.", Icon: HeartHandshake },
  { t: "Durabilité", d: "Inscrire les initiatives dans le temps long.", Icon: Leaf },
  { t: "Fierté locale", d: "Valoriser le Made in Collines dans toute sa diversité.", Icon: Award },
];

export default function ValeursSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">Nos valeurs</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-[1.15] text-balance">Ce qui nous guide.</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {ITEMS.map((c) => (
            <div key={c.t} className="bg-cream rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-gold/15 text-gold flex items-center justify-center mb-4">
                <c.Icon className="w-6 h-6" strokeWidth={1.75} />
              </div>
              <h3 className="font-serif text-xl font-bold text-balance mb-2">{c.t}</h3>
              <p className="text-gray-700">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
