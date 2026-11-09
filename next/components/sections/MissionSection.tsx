const ITEMS = [
  { t: "Exposer", d: "Offrir une vitrine aux produits, savoir-faire et entreprises du territoire.", icon: "🏛" },
  { t: "Découvrir", d: "Faire connaître la richesse culturelle, artisanale et touristique des Collines.", icon: "🔍" },
  { t: "Échanger", d: "Créer des espaces de dialogue entre producteurs, investisseurs et institutions.", icon: "🤝" },
  { t: "Connecter", d: "Relier les talents locaux aux opportunités nationales et internationales.", icon: "🔗" },
  { t: "Entreprendre", d: "Transformer les potentialités locales en activités économiques durables.", icon: "🚀" },
  { t: "Rayonner", d: "Faire briller les Collines au-delà de ses frontières.", icon: "🌍" },
];

export default function MissionSection() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">Notre mission</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Bien plus que des stands.</h2>
          <p className="text-gray-600 text-lg">Réunir différents acteurs autour d'une même dynamique : exposer, découvrir, échanger, connecter, entreprendre.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ITEMS.map((c) => (
            <div key={c.t} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
              <div className="w-12 h-12 rounded-full bg-green/10 text-green flex items-center justify-center mb-4 text-xl">{c.icon}</div>
              <h3 className="font-serif text-xl font-bold mb-2">{c.t}</h3>
              <p className="text-gray-700">{c.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
