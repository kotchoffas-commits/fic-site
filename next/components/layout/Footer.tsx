import Link from "next/link";
import Image from "next/image";
import VisitorCounter from "@/components/ui/VisitorCounter";

const NAV = [
  { href: "/la-fic", label: "La FIC" },
  { href: "/programme", label: "Programme" },
  { href: "/exposants", label: "Exposants" },
  { href: "/collines", label: "Collines" },
  { href: "/actualites", label: "Actualités" },
];

export default function Footer() {
  return (
    <footer className="bg-green-dark text-white/80 pt-20 pb-8 mt-auto">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 pb-12 border-b border-white/10">

          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/assets/logo.png"
                alt="Logo FIC"
                width={56}
                height={56}
                className="w-14 h-14 object-contain"
              />
              <span className="font-serif font-semibold text-white leading-tight">
                Foire<br />Internationale<br />des Collines
              </span>
            </div>
            <p className="text-sm leading-relaxed text-white/70">
              Une initiative dédiée à la valorisation des richesses, savoir-faire et opportunités du département des Collines.
              Première édition du 20 décembre 2026 au 2 janvier 2027.
            </p>
            <div className="flex gap-3 mt-6">
              <a
                href="https://www.facebook.com/FoireInternationaledescollines"
                target="_blank"
                rel="noopener"
                aria-label="Facebook"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-green-dark transition"
              >
                <span className="text-sm font-bold">f</span>
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-green-dark transition"
              >
                <span className="text-sm font-bold">ig</span>
              </a>
              <a
                href="#"
                aria-label="LinkedIn"
                className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-gold hover:border-gold hover:text-green-dark transition"
              >
                <span className="text-sm font-bold">in</span>
              </a>
            </div>
          </div>

          <div>
            <h5 className="text-white font-serif font-semibold mb-4">Navigation</h5>
            <ul className="space-y-2 text-sm">
              {NAV.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-white transition">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="text-white font-serif font-semibold mb-4">Contact</h5>
            <ul className="space-y-2 text-sm">
              <li>Place Egbakokou</li>
              <li>Dassa-Zoumè, Bénin</li>
              <li>
                <a href="mailto:fic.collines@gmail.com" className="hover:text-white transition">
                  fic.collines@gmail.com
                </a>
              </li>
              <li>
                <a href="tel:+2290156282878" className="hover:text-white transition">
                  +229 01 56 28 28 78
                </a>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition">
                  Formulaire de contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h5 className="text-white font-serif font-semibold mb-4">Édition 2026</h5>
            <ul className="space-y-2 text-sm">
              <li>20 déc. 2026 — 2 janv. 2027</li>
              <li>14 jours de foire</li>
              <li>#FIC2026</li>
              <li>#MadeInCollines</li>
            </ul>
          </div>

        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-8 text-xs text-white/60">
          <span>© 2026 Foire Internationale des Collines. Tous droits réservés.</span>
          <span>Visiteurs : <VisitorCounter /></span>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-white transition">Mentions légales</Link>
            <Link href="#" className="hover:text-white transition">Confidentialité</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
