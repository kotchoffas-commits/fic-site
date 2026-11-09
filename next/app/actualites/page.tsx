import PageHero from "@/components/sections/PageHero";
import NewsCard from "@/components/sections/NewsCard";
import Link from "next/link";
import { ACTUALITES } from "@/lib/actualites-data";

export const metadata = {
  title: "Actualités — FIC 2026",
  description: "Communiqués, préparatifs et mobilisation autour de la FIC 2026.",
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Actualités"
        title="La FIC se prépare."
        subtitle="Communiqués officiels, rencontres institutionnelles et avancées de la première édition."
        breadcrumb="Actualités"
      />

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {ACTUALITES.map((it, i) => (
              <NewsCard key={i} item={it} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-green text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Ne manquez aucune actualité.</h2>
          <p className="text-lg text-white/85 mb-10 max-w-2xl mx-auto">Suivez notre page Facebook officielle pour être informé en temps réel.</p>
          <Link href="https://www.facebook.com/FoireInternationaledescollines" target="_blank" rel="noopener" className="inline-block bg-gold text-green-dark px-6 py-3 rounded-lg font-medium hover:bg-gold-dark transition">
            Suivre sur Facebook
          </Link>
        </div>
      </section>
    </>
  );
}
