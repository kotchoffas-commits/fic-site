import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Actualités — FIC 2026",
  description: "Toute l'actualité de la FIC",
};

export default function Page() {
  return (
    <>
      <PageHero title="Actualités" subtitle="Toute l'actualité de la FIC" breadcrumb="Actualités" />
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
