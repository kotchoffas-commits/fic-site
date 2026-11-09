import { Link } from "@/i18n/navigation";

export default function CTABand() {
  return (
    <section className="py-16 md:py-24 bg-green text-white">
      <div className="max-w-[1200px] mx-auto px-6 text-center">
        <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
          Faites partie de la première édition.
        </h2>
        <p className="text-lg text-white/85 mb-10 max-w-2xl mx-auto">
          Exposant, artisan, producteur, partenaire ou visiteur — il y a une place pour vous à la FIC 2026.
        </p>
        <div className="flex flex-wrap gap-3 justify-center">
          <Link href="/exposants" className="bg-gold text-green-dark px-6 py-3 rounded-lg font-medium hover:bg-gold-dark transition">
            Devenir exposant
          </Link>
          <Link href="/sponsor" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-ink transition">
            Devenir Sponsor
          </Link>
          <Link href="/contact" className="border-2 border-white text-white px-6 py-3 rounded-lg font-medium hover:bg-white hover:text-ink transition">
            Nous contacter
          </Link>
        </div>
      </div>
    </section>
  );
}
