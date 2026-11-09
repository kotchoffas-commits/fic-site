import Link from "next/link";

export default function PageHero({
  kicker,
  title,
  subtitle,
  breadcrumb,
}: {
  kicker?: string;
  title: string;
  subtitle?: string;
  breadcrumb?: string;
}) {
  return (
    <section className="bg-green text-white pt-20 pb-16">
      <div className="max-w-[1200px] mx-auto px-6">
        <nav className="text-sm text-white/60 mb-4">
          <Link href="/" className="hover:text-white transition">Accueil</Link>
          {breadcrumb && (
            <>
              <span className="mx-2">/</span>
              <span className="text-white">{breadcrumb}</span>
            </>
          )}
        </nav>
        {kicker && (
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">
            {kicker}
          </span>
        )}
        <h1 className="font-serif text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
          {title}
        </h1>
        {subtitle && (
          <p className="text-lg md:text-xl text-white/85 max-w-3xl animate-fade-in-up delay-100">
            {subtitle}
          </p>
        )}
      </div>
    </section>
  );
}
