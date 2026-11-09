import PageHero from "@/components/sections/PageHero";
import MissionSection from "@/components/sections/MissionSection";
import ValeursSection from "@/components/sections/ValeursSection";
import ObjectifsSection from "@/components/sections/ObjectifsSection";
import MapSection from "@/components/sections/MapSection";
import { Link } from "@/i18n/navigation";

export const metadata = {
  title: "La FIC — Foire Internationale des Collines",
  description: "Mission, valeurs et objectifs de la Foire Internationale des Collines.",
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="La FIC"
        title="Un rendez-vous, une dynamique de territoire."
        subtitle="La FIC n'est pas une simple foire. C'est un espace de valorisation, de connexion et de projection pour le département des Collines."
        breadcrumb="La FIC"
      />
      <MissionSection />
      <ValeursSection />
      <ObjectifsSection />
      <MapSection />
      <section className="py-16 md:py-24 bg-green text-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-5xl font-bold leading-[1.15] text-balance mb-4">Rejoignez la dynamique FIC.</h2>
          <p className="text-lg text-white/85 mb-10 max-w-2xl mx-auto">
            Ensemble, faisons de cette première édition un succès pour tout le territoire.
          </p>
          <Link href="/contact" className="inline-block bg-gold text-green-dark px-6 py-3 rounded-lg font-medium hover:bg-gold-dark transition">
            Nous contacter
          </Link>
        </div>
      </section>
    </>
  );
}
