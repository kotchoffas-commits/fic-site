"use client";

import { useState } from "react";

export default function SponsorForm() {
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
      <div className="bg-emerald-50 border-2 border-emerald-200 rounded-2xl p-8 text-center max-w-2xl mx-auto">
        <div className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center mx-auto mb-4 text-2xl">
          ✓
        </div>
        <h3 className="font-serif text-2xl font-bold mb-2 text-emerald-900">Demande enregistrée</h3>
        <p className="text-emerald-800">
          Votre demande a bien été enregistrée. L'équipe FIC vous contactera très prochainement.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} className="max-w-3xl mx-auto bg-white rounded-2xl shadow-xl p-8 space-y-5">
      <h2 className="font-serif text-2xl font-bold text-green text-center mb-6">
        Formulaire de demande de sponsoring
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="entreprise" className="block text-sm font-medium text-gray-700 mb-2">
            Nom de l'entreprise / Organisation *
          </label>
          <input type="text" id="entreprise" name="entreprise" required placeholder="Ex: Entreprise ABC"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-2">
            Nom du responsable *
          </label>
          <input type="text" id="contact" name="contact" required placeholder="Ex: Jean Dupont"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green focus:border-transparent outline-none transition" />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
            Email professionnel *
          </label>
          <input type="email" id="email" name="email" required placeholder="contact@entreprise.com"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green focus:border-transparent outline-none transition" />
        </div>
        <div>
          <label htmlFor="telephone" className="block text-sm font-medium text-gray-700 mb-2">
            Téléphone *
          </label>
          <input type="tel" id="telephone" name="telephone" required placeholder="+229 XX XX XX XX"
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green focus:border-transparent outline-none transition" />
        </div>
      </div>

      <div>
        <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
          Type de sponsoring souhaité *
        </label>
        <select id="type" name="type" required
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green focus:border-transparent outline-none transition bg-white">
          <option value="">Sélectionnez une option</option>
          <option value="Financier">Financier</option>
          <option value="Matériel / Logistique">Matériel / Logistique</option>
          <option value="Média / Communication">Média / Communication</option>
          <option value="Autre">Autre</option>
        </select>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
          Détails de votre proposition / Message *
        </label>
        <textarea id="message" name="message" required rows={6} placeholder="Décrivez votre offre de sponsoring..."
          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-green focus:border-transparent outline-none transition resize-y" />
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
