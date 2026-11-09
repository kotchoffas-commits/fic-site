"use client";

import { useState } from "react";

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 800));
    setLoading(false);
    setSent(true);
  }

  if (sent) {
    return (
      <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 text-center">
        <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 text-2xl">
          ✓
        </div>
        <h3 className="font-serif text-2xl font-bold mb-2 text-emerald-900">Message envoyé</h3>
        <p className="text-emerald-800">
          Merci pour votre message. L'équipe FIC vous répondra dans les plus brefs délais.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="bg-white rounded-2xl shadow-xl p-8 space-y-5">
      <div>
        <label htmlFor="nom" className="block text-sm font-medium text-gray-700 mb-2">
          Nom complet / Organisation
        </label>
        <input
          type="text" id="nom" name="nom" required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green focus:border-transparent outline-none transition"
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
          Adresse email
        </label>
        <input
          type="email" id="email" name="email" required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green focus:border-transparent outline-none transition"
        />
      </div>

      <div>
        <label htmlFor="tel" className="block text-sm font-medium text-gray-700 mb-2">
          Téléphone / WhatsApp
        </label>
        <input
          type="tel" id="tel" name="tel"
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green focus:border-transparent outline-none transition"
        />
      </div>

      <div>
        <label htmlFor="profil" className="block text-sm font-medium text-gray-700 mb-2">
          Je suis…
        </label>
        <select
          id="profil" name="profil" required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green focus:border-transparent outline-none transition bg-white"
        >
          <option value="">Sélectionner</option>
          <option>Exposant / Producteur</option>
          <option>Artisan</option>
          <option>Entrepreneur</option>
          <option>Partenaire institutionnel</option>
          <option>Visiteur</option>
          <option>Presse / Média</option>
          <option>Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Votre message
        </label>
        <textarea
          id="message" name="message" required rows={5}
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green focus:border-transparent outline-none transition resize-y"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green text-white px-6 py-3 rounded-lg font-medium hover:bg-green-dark transition disabled:bg-gray-400 disabled:cursor-not-allowed"
      >
        {loading ? "Envoi en cours…" : "Envoyer ma demande"}
      </button>
    </form>
  );
}
