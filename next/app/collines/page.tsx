import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Les Collines — FIC 2026",
  description: "Dassa-Zoumè, cité des 41 collines",
};

export default function Page() {
  return (
    <>
      <PageHero title="Les Collines" subtitle="Dassa-Zoumè, cité des 41 collines" breadcrumb="Collines" />
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
