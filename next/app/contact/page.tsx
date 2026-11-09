import PageHero from "@/components/sections/PageHero";

export const metadata = {
  title: "Contact — FIC 2026",
  description: "Une question ? Écrivez-nous",
};

export default function Page() {
  return (
    <>
      <PageHero title="Contact" subtitle="Une question ? Écrivez-nous" breadcrumb="Contact" />
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
