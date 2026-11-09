import Link from "next/link";
import NewsCard, { type NewsItem } from "./NewsCard";

const ITEMS: NewsItem[] = [
  {
    type: "single",
    img: "/assets/actualites/id1.jpg",
    date: "Nov. 2026",
    cat: "Partenariat",
    title: "Une dynamique soutenue et accompagnée",
    text: "La réussite d'une initiative repose aussi sur la mobilisation de plusieurs acteurs. La formation sur le packaging a bénéficié du soutien des autorités locales, des médias et des plateformes numériques...",
    link: "https://www.facebook.com/FoireInternationaledescollines",
  },
  {
    type: "album",
    album: [
      "/assets/actualites/al1.jpg",
      "/assets/actualites/al2.jpg",
      "/assets/actualites/al3.jpg",
      "/assets/actualites/al4.jpg",
      "/assets/actualites/al5.jpg",
      "/assets/actualites/al6.jpg",
    ],
    date: "Nov. 2026",
    cat: "Coulisses",
    title: "Les coulisses de la préparation",
    text: "Découvrez en images les coulisses de la préparation de la première édition de la FIC. Une équipe mobilisée pour valoriser les Collines...",
    link: "https://www.facebook.com/FoireInternationaledescollines",
  },
  {
    type: "album",
    album: [
      "/assets/actualites/co1.jpg",
      "/assets/actualites/co2.jpg",
      "/assets/actualites/co3.jpg",
      "/assets/actualites/co4.jpg",
    ],
    date: "Nov. 2026",
    cat: "Patrimoine",
    title: "Les Collines de Dassa-Zoumè : un patrimoine naturel",
    text: "Situées dans la commune de Dassa-Zoumè, ces impressionnantes formations rocheuses font la renommée de la cité des 41 collines...",
    link: "https://www.facebook.com/FoireInternationaledescollines",
  },
];

export default function NewsPreview() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="flex flex-wrap justify-between items-end gap-4 mb-12">
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">
              Actualités
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">La FIC se prépare.</h2>
          </div>
          <Link
            href="/actualites"
            className="bg-green text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-green-dark transition"
          >
            Tout voir
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ITEMS.map((it, i) => (
            <NewsCard key={i} item={it} />
          ))}
        </div>
      </div>
    </section>
  );
}
