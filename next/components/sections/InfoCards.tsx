import { MapPin, Calendar, Target } from "lucide-react";

export default function InfoCards() {
  const cards = [
    { t: "Localisation", d: "Place Egbakokou, Dassa-Zoumè — Département des Collines, Bénin.", Icon: MapPin },
    { t: "Dates", d: "Du 20 décembre 2026 au 2 janvier 2027, quatorze jours de foire.", Icon: Calendar },
    { t: "Ambition", d: "Valoriser les richesses économiques, culturelles, touristiques et entrepreneuriales du territoire.", Icon: Target },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-fade-in-up delay-200">
      {cards.map((c) => (
        <div key={c.t} className="bg-white rounded-3xl p-8 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500">
          <div className="w-12 h-12 rounded-full bg-green/10 text-green flex items-center justify-center mb-4">
            <c.Icon className="w-6 h-6" strokeWidth={1.75} />
          </div>
          <h3 className="font-serif text-xl font-bold text-balance mb-2">{c.t}</h3>
          <p className="text-gray-700">{c.d}</p>
        </div>
      ))}
    </div>
  );
}
