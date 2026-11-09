import PageHero from "@/components/sections/PageHero";
import SponsorForm from "@/components/forms/SponsorForm";

export const metadata = {
  title: "Devenir Sponsor — FIC 2026",
  description: "Associez votre entreprise à la FIC 2026 et soutenez le développement du territoire des Collines.",
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Partenariat"
        title="Devenir Sponsor de la FIC."
        subtitle="Associez votre entreprise à un événement majeur et soutenez le développement du territoire des Collines."
        breadcrumb="Sponsor"
      />

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <SponsorForm />
        </div>
      </section>
    </>
  );
}
