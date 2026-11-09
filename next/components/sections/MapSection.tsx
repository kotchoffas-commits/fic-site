export default function MapSection() {
  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="max-w-[1200px] mx-auto px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">Nous trouver</span>
          <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">Place Egbakokou, Dassa-Zoumè.</h2>
          <p className="text-gray-600 text-lg">Le cœur de la FIC, au centre du département des Collines.</p>
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden border border-gray-200">
          <iframe
            src="https://www.google.com/maps?q=Q5GR%2BX8%20Dassa%2C%20Benin&output=embed"
            className="absolute inset-0 w-full h-full"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Carte Google Maps — Place de l'événement, Dassa-Zoumè, Bénin"
          />
        </div>
        <p className="text-center mt-6">
          <a
            href="https://maps.app.goo.gl/V3D7FHFPjrDXNcE37"
            target="_blank"
            rel="noopener"
            className="text-green font-medium hover:text-green-dark transition"
          >
            Ouvrir dans Google Maps →
          </a>
        </p>
      </div>
    </section>
  );
}
