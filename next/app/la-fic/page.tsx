import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "La FIC — FIC 2026",
  description: "Découvrir la Foire Internationale des Collines",
};

export default function Page() {
  return (
    <>
      <PageHero title="La FIC" subtitle="Découvrir la Foire Internationale des Collines" breadcrumb="La FIC" />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <p className="text-gray-500 text-lg">
            Contenu en cours de migration. Cette page sera complétée à l'étape suivante.
          </p>
        </div>
      </section>
    </>
  );
}
