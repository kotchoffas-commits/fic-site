import PageHero from "@/components/sections/PageHero";
import ContactForm from "@/components/forms/ContactForm";
import MapSection from "@/components/sections/MapSection";

const MENTIONS = [
  { t: "Éditeur du site", d: "Foire Internationale des Collines (FIC). Siège : Dassa-Zoumè, Département des Collines, Bénin. Contact : fic.collines@gmail.com" },
  { t: "Hébergement", d: "Site hébergé sur Railway.app." },
  { t: "Propriété intellectuelle", d: "L'ensemble des contenus (textes, images, logos) est la propriété de la FIC ou de ses partenaires. Toute reproduction sans autorisation est interdite." },
  { t: "Données personnelles", d: "Les informations transmises via le formulaire sont utilisées uniquement pour répondre à votre demande. Vous pouvez demander leur suppression à fic.collines@gmail.com." },
];

export const metadata = {
  title: "Contact — FIC 2026",
  description: "Contactez l'équipe de la Foire Internationale des Collines.",
};

export default function Page() {
  return (
    <>
      <PageHero
        kicker="Contact"
        title="Prenons contact."
        subtitle="Une question, une candidature, un partenariat ? L'équipe FIC vous répond."
        breadcrumb="Contact"
      />

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
            <div className="space-y-8">
              <div>
                <span className="block text-xs uppercase tracking-wider text-gold font-semibold mb-2">Lieu</span>
                <div className="font-serif text-lg">Place Egbakokou</div>
                <div className="text-gray-600 text-sm">Dassa-Zoumè, Département des Collines — Bénin</div>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gold font-semibold mb-2">Édition</span>
                <div className="font-serif text-lg">20 déc. 2026 — 2 janv. 2027</div>
                <div className="text-gray-600 text-sm">Quatorze jours de foire</div>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gold font-semibold mb-2">Email</span>
                <a href="mailto:fic.collines@gmail.com" className="text-green font-medium hover:text-green-dark transition">
                  fic.collines@gmail.com
                </a>
              </div>
              <div>
                <span className="block text-xs uppercase tracking-wider text-gold font-semibold mb-2">Téléphone</span>
                <a href="tel:+2290156282878" className="text-green font-medium hover:text-green-dark transition">
                  +229 01 56 28 28 78
                </a>
              </div>
              <div className="flex gap-3 pt-4">
                {[
                  { l: "FB", h: "https://www.facebook.com/FoireInternationaledescollines" },
                  { l: "IG", h: "#" },
                  { l: "WA", h: "#" },
                  { l: "IN", h: "#" },
                ].map((s) => (
                  <a
                    key={s.l}
                    href={s.h}
                    target="_blank"
                    rel="noopener"
                    aria-label={s.l}
                    className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center text-xs font-bold text-gray-600 hover:bg-green hover:border-green hover:text-white transition"
                  >
                    {s.l}
                  </a>
                ))}
              </div>
            </div>
            <div className="lg:col-span-2">
              <ContactForm />
            </div>
          </div>
        </div>
      </section>

      <MapSection />

      <section className="py-16 md:py-24 bg-cream">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">Mentions légales</span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold">Informations légales.</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {MENTIONS.map((m) => (
              <div key={m.t} className="bg-white rounded-3xl p-8 border border-gray-100 hover:shadow-lg transition">
                <h3 className="font-serif text-xl font-bold mb-2">{m.t}</h3>
                <p className="text-gray-700">{m.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
