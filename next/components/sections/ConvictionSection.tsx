import Link from "next/link";

export default function ConvictionSection() {
  const items = [
    { t: "Une production locale", d: "Peut devenir une véritable opportunité économique pour les producteurs du territoire." },
    { t: "Un savoir-faire", d: "Peut devenir une activité économique reconnue et transmissible." },
    { t: "Un talent", d: "Peut devenir une entreprise, une marque, une fierté locale." },
  ];
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">
            Notre conviction
          </span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
            Et si notre territoire était l'une de nos plus grandes richesses ?
          </h2>
          <p className="text-gray-600 text-lg">
            Une production locale peut devenir une opportunité. Un savoir-faire peut devenir une activité économique.
            Un talent peut devenir une entreprise. Un patrimoine peut devenir une destination.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((c) => (
            <div key={c.t} className="bg-cream rounded-3xl p-8 border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <h3 className="font-serif text-xl font-bold mb-2">{c.t}</h3>
              <p className="text-gray-700">{c.d}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <Link href="/collines" className="inline-block bg-green text-white px-6 py-3 rounded-lg font-medium hover:bg-green-dark transition">
            Explorer les Collines
          </Link>
        </div>
      </div>
    </section>
  );
}
