import { Link } from "@/i18n/navigation";

export default function VideoSection() {
  return (
    <section className="py-16 md:py-24 bg-cream">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative aspect-video rounded-2xl overflow-hidden bg-black">
            <video controls poster="/assets/hero.jpg" className="w-full h-full object-cover">
              <source src="/assets/annonce.mp4" type="video/mp4" />
              Votre navigateur ne supporte pas la vidéo.
            </video>
          </div>
          <div>
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">
              Annonce Officielle
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
              Quelque chose se prépare à Dassa-Zoumè…
            </h2>
            <p className="text-gray-700 leading-relaxed mb-6">
              Une nouvelle aventure s'annonce au cœur des Collines. Un événement inédit, une rencontre de talents,
              de savoir-faire, d'opportunités et de découvertes. Le département des Collines : une région,
              une richesse, une destination, une opportunité.
            </p>
            <div className="flex flex-wrap gap-3 mb-6 text-sm text-gray-500">
              <span>Dassa-Zoumè</span>
              <span>·</span>
              <span>Très bientôt…</span>
              <span>·</span>
              <span>1ʳᵉ Édition — FIC 2026</span>
            </div>
            <Link
              href="https://www.facebook.com/FoireInternationaledescollines"
              target="_blank"
              rel="noopener"
              className="inline-block bg-green text-white px-6 py-3 rounded-lg font-medium hover:bg-green-dark transition"
            >
              Ne rien manquer sur Facebook
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
