import Hero from "@/components/sections/Hero";
import VideoSection from "@/components/sections/VideoSection";
import Countdown from "@/components/sections/Countdown";
import InfoCards from "@/components/sections/InfoCards";
import ConvictionSection from "@/components/sections/ConvictionSection";
import CTABand from "@/components/sections/CTABand";

export default function Home() {
  return (
    <>
      <Hero />
      <VideoSection />
      <section className="py-16 md:py-24 bg-white">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="inline-block text-xs font-semibold tracking-[0.18em] uppercase text-gold mb-3">
              Le rendez-vous
            </span>
            <h2 className="font-serif text-3xl md:text-5xl font-bold mb-4">
              Place Egbakokou, Dassa-Zoumè.
            </h2>
            <p className="text-gray-600 text-lg">
              Au cœur du département des Collines, la première édition de la FIC s'installe pendant quatorze jours sur la Place Egbakokou.
            </p>
          </div>
          <Countdown />
          <InfoCards />
        </div>
      </section>
      <ConvictionSection />
      <CTABand />
    </>
  );
}
