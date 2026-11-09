"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const LINKS = [
  { href: "/", label: "Accueil" },
  { href: "/la-fic", label: "La FIC" },
  { href: "/programme", label: "Programme" },
  { href: "/exposants", label: "Exposants" },
  { href: "/collines", label: "Collines" },
  { href: "/actualites", label: "Actualités" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.classList.toggle("menu-open", menuOpen);
    return () => { document.body.classList.remove("menu-open"); };
  }, [menuOpen]);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-gray-200 ${
        scrolled
          ? "bg-cream/95 backdrop-blur-md shadow-sm"
          : "bg-cream"
      }`}
    >
      <div className="max-w-[1200px] mx-auto px-6 flex items-center justify-between h-20 gap-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/assets/logo.png"
            alt="Logo FIC"
            width={76}
            height={76}
            className="w-[76px] h-[76px] object-contain"
            priority
          />
          <span className="font-serif font-semibold text-ink leading-tight text-sm md:text-base">
            Foire<br />Internationale<br />des Collines
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {LINKS.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="group relative text-sm font-medium text-ink hover:text-green transition-colors"
            >
              {l.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-green group-hover:w-full transition-all duration-300" />
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link
            href="/contact"
            className="hidden sm:inline-flex bg-green text-white px-5 py-2.5 rounded-lg font-medium text-sm hover:bg-green-dark transition"
          >
            Contact
          </Link>
          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Ouvrir le menu"
            className="lg:hidden flex flex-col gap-1.5 p-2"
          >
            <span className="w-6 h-0.5 bg-ink" />
            <span className="w-6 h-0.5 bg-ink" />
            <span className="w-6 h-0.5 bg-ink" />
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="fixed inset-0 z-[100] bg-cream flex flex-col">
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <span className="font-serif font-semibold">FIC 2026</span>
            <button
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-ink hover:text-green transition"
            >
              Fermer
            </button>
          </div>
          <nav className="flex-1 flex flex-col justify-center p-8 gap-6">
            {LINKS.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setMenuOpen(false)}
                className="font-serif text-3xl text-ink hover:text-green transition"
              >
                {l.label}
              </Link>
            ))}
          </nav>
          <div className="p-6 border-t border-gray-200 text-sm text-gray-700">
            <p>Place Egbakokou — Dassa-Zoumè, Bénin</p>
            <p>fic.collines@gmail.com</p>
          </div>
        </div>
      )}
    </header>
  );
}
