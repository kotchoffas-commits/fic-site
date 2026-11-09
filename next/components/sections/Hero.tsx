import { Link } from "@/i18n/navigation";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/hero.jpg"
          alt="Foire Internationale des Collines"
          fill
          priority
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/30" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 py-20 w-full">
        <div className="max-w-3xl text-white">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-4 animate-fade-in-up">
            Édition 2026 · Dassa-Zoumè, Bénin
          </span>
          <h1 className="font-serif text-5xl md:text-7xl font-bold leading-[1.05] mb-6 animate-fade-in-up delay-100">
            La richesse de notre territoire,
            <em className="block not-italic text-gold">se vit, se partage, se transmet.</em>
          </h1>
          <p className="text-xl opacity-90 mb-12 animate-fade-in-up delay-200 max-w-2xl">
            La Foire Internationale des Collines réunit entrepreneurs, artisans, producteurs, acteurs culturels et visiteurs autour du Made in Collines, du tourisme et des opportunités du territoire.
          </p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-end animate-fade-in-up delay-300">
            <div className="flex flex-wrap gap-6 md:gap-8">
              <div>
                <span className="block text-xs uppercase tracking-wider text-gold mb-1">Ouverture</span>
                <span className="block font-serif text-lg">20 décembre 2026</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gold mb-1">Durée</span>
                <span className="block font-serif text-lg">14 jours</span>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gold mb-1">Clôture</span>
                <span className="block font-serif text-lg">2 janvier 2027</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 lg:justify-end">
              <Link
                href="/exposants"
                className="bg-green text-white px-6 py-3 rounded-lg font-medium hover:bg-green-dark transition"
              >
                Devenir exposant
              </Link>
              <Link
                href="/la-fic"
                className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-ink transition"
              >
                Découvrir la FIC
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/70 text-xs tracking-widest uppercase animate-fade-in-up delay-300">
        Défiler
      </div>
    </section>
  );
}
