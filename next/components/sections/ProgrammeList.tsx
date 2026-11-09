const ITEMS = [
  { day: "20 décembre", title: "Cérémonie d'ouverture officielle", desc: "Autorités, partenaires, exposants et premiers visiteurs — lancement de la première édition." },
  { day: "21 au 24 décembre", title: "Village Made in Collines & expositions", desc: "Produits du terroir, artisanat, agro-transformation, entreprises locales." },
  { day: "26 au 28 décembre", title: "Conférences & rencontres B2B", desc: "Panels sur l'entrepreneuriat, l'investissement local et la valorisation des filières." },
  { day: "29 déc. au 1er janv.", title: "Nuits culturelles & animations", desc: "Concerts, danses traditionnelles, gastronomie, défilés et spectacles." },
  { day: "2 janvier", title: "Cérémonie de clôture & bilan", desc: "Restitution des résultats, distinctions et perspectives pour l'édition suivante." },
];

export default function ProgrammeList() {
  return (
    <div className="space-y-6">
      {ITEMS.map((it) => (
        <div key={it.day} className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-8 bg-white rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
          <div className="font-serif font-semibold text-green text-lg md:text-xl md:text-right md:pr-6 md:border-r md:border-gray-200">
            {it.day}
          </div>
          <div>
            <h4 className="font-serif font-bold text-lg mb-1">{it.title}</h4>
            <p className="text-gray-700">{it.desc}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
