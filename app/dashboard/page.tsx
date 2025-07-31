"use client";
import { useEffect, useState } from "react";
import { CheckCircle, XCircle, ShoppingCart, Clock, User2 } from "lucide-react";

// ** MOCK DATA - à remplacer par tes vraies données API **
const MOCK_USER = {
  nom: "Romain Pennacchio",
  email: "romain@mail.com",
  club: "AS Toulon",
  abonnement: {
    offre: "Maxi Club",
    debut: "2024-07-01T00:00:00Z",
    fin: "2025-07-01T00:00:00Z",
    actif: true,
  },
  commandes: [
    {
      id: "CMD202407012350",
      date: "2024-07-01",
      montant: 99.99,
      offre: "Maxi Club",
      statut: "Payé",
    },
    {
      id: "CMD202307011144",
      date: "2023-07-01",
      montant: 99.99,
      offre: "Maxi Club",
      statut: "Payé",
    },
  ],
};

function countdown(dateFin: string) {
  const now = new Date();
  const end = new Date(dateFin);
  const diff = end.getTime() - now.getTime();
  if (diff <= 0) return "Expiré";
  const jours = Math.floor(diff / (1000 * 60 * 60 * 24));
  const heures = Math.floor((diff / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((diff / (1000 * 60)) % 60);
  return `${jours}j ${heures}h ${minutes}min`;
}

export default function UserDashboard() {
  const [timer, setTimer] = useState(countdown(MOCK_USER.abonnement.fin));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(countdown(MOCK_USER.abonnement.fin));
    }, 60000); // MAJ chaque minute
    return () => clearInterval(interval);
  }, []);

  return (
    <main className="bg-[#182E21] min-h-screen py-12 px-2">
      <div className="max-w-4xl mx-auto bg-white/95 shadow-2xl rounded-3xl px-8 py-10">
        {/* Header utilisateur */}
        <div className="flex items-center gap-4 mb-10">
          <div className="rounded-full bg-[#5BE37D] w-14 h-14 flex items-center justify-center text-white text-3xl font-bold shadow-lg">
            <User2 size={36} />
          </div>
          <div>
            <div className="text-xl font-extrabold text-[#14482F]">{MOCK_USER.nom}</div>
            <div className="text-[#14482F]/70 text-sm">{MOCK_USER.email}</div>
            <div className="text-[#5BE37D] font-semibold text-sm">{MOCK_USER.club}</div>
          </div>
        </div>

        {/* Résumé cartes */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {/* Carte Abonnement */}
          <div className="bg-[#D9C6A3]/70 rounded-2xl p-6 shadow flex flex-col gap-3">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="text-[#14482F] w-6 h-6" />
              <span className="font-semibold text-[#14482F]">Mon abonnement</span>
              {MOCK_USER.abonnement.actif ? (
                <span className="flex items-center ml-auto">
                  <span className="w-3 h-3 bg-green-500 rounded-full mr-1"></span>
                  <span className="text-green-700 text-xs font-bold">Actif</span>
                </span>
              ) : (
                <span className="flex items-center ml-auto">
                  <span className="w-3 h-3 bg-red-500 rounded-full mr-1"></span>
                  <span className="text-red-700 text-xs font-bold">Inactif</span>
                </span>
              )}
            </div>
            <div className="text-2xl font-extrabold text-[#14482F] mb-1">{MOCK_USER.abonnement.offre}</div>
            <div className="text-[#14482F]/80 text-sm">
              Jusqu’au&nbsp;
              <span className="font-bold">{new Date(MOCK_USER.abonnement.fin).toLocaleDateString("fr-FR")}</span>
            </div>
            <div className="flex items-center mt-2 text-sm">
              <span className="text-[#14482F]">Temps restant&nbsp;:</span>
              <span className="ml-2 font-semibold text-[#5BE37D]">{timer}</span>
            </div>
            {!MOCK_USER.abonnement.actif && (
              <button className="mt-4 px-4 py-2 rounded-lg bg-[#5BE37D] text-[#14482F] font-bold shadow hover:bg-[#68FB7A] transition">
                Renouveler l’abonnement
              </button>
            )}
          </div>
          {/* Carte Commandes */}
          <div className="bg-[#5BE37D]/90 rounded-2xl p-6 shadow flex flex-col items-start gap-3">
            <div className="flex items-center gap-2 mb-2">
              <ShoppingCart className="text-[#14482F] w-6 h-6" />
              <span className="font-semibold text-[#14482F]">Mes commandes</span>
            </div>
            <div className="text-3xl font-bold text-[#14482F] mb-2">
              {MOCK_USER.commandes.length}
            </div>
            <div className="text-[#14482F]/90 text-sm">
              Dernier achat&nbsp;:{" "}
              <span className="font-bold">
                {new Date(MOCK_USER.commandes[0].date).toLocaleDateString("fr-FR")}
              </span>
            </div>
            <a
              href="#historique"
              className="mt-3 text-sm underline text-[#14482F] font-semibold hover:text-[#25693e] transition"
            >
              Voir l’historique complet
            </a>
          </div>
          {/* Carte Statut */}
          <div className="bg-[#14482F]/90 rounded-2xl p-6 shadow flex flex-col gap-3 items-start text-white">
            <div className="font-semibold mb-1 flex items-center gap-2">
              <CheckCircle className="text-[#5BE37D] w-6 h-6" />
              Accès SimplyFoot
            </div>
            <div className="text-3xl font-bold">
              {MOCK_USER.abonnement.actif ? "Actif" : "Inactif"}
            </div>
            <div className="mt-2 text-base">
              {!MOCK_USER.abonnement.actif ? (
                <span>
                  <XCircle className="inline w-5 h-5 text-red-500 mr-1" />
                  Votre abonnement est expiré.
                </span>
              ) : (
                <span>
                  <CheckCircle className="inline w-5 h-5 text-[#5BE37D] mr-1" />
                  Profitez de toutes les fonctionnalités SimplyFoot.
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Historique commandes */}
        <div id="historique" className="mb-10">
          <h2 className="text-xl font-bold mb-4 text-[#14482F]">Historique de mes achats</h2>
          <div className="overflow-x-auto rounded-xl">
            <table className="min-w-full bg-white border border-gray-200 rounded-xl shadow text-[#14482F]">
              <thead className="bg-[#D9C6A3]/60">
                <tr>
                  <th className="py-2 px-4 font-bold">N° Commande</th>
                  <th className="py-2 px-4 font-bold">Date</th>
                  <th className="py-2 px-4 font-bold">Montant</th>
                  <th className="py-2 px-4 font-bold">Offre</th>
                  <th className="py-2 px-4 font-bold">Statut</th>
                </tr>
              </thead>
              <tbody>
                {MOCK_USER.commandes.map(cmd => (
                  <tr key={cmd.id} className="border-t border-gray-100 hover:bg-[#5BE37D]/10 transition">
                    <td className="py-2 px-4 font-mono">{cmd.id}</td>
                    <td className="py-2 px-4">{new Date(cmd.date).toLocaleDateString("fr-FR")}</td>
                    <td className="py-2 px-4 font-bold">{cmd.montant.toFixed(2)} €</td>
                    <td className="py-2 px-4">{cmd.offre}</td>
                    <td className="py-2 px-4">
                      {cmd.statut === "Payé" ? (
                        <span className="text-green-600 font-semibold">Payé</span>
                      ) : (
                        <span className="text-red-600 font-semibold">{cmd.statut}</span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Infos abonnement */}
        <div className="bg-[#14482F] rounded-2xl px-6 py-4 flex flex-col md:flex-row items-center gap-4 text-white">
          <div className="flex-1">
            <span className="font-bold text-lg">Besoin d’aide, d’une facture ou d’un support ?</span>
            <span className="ml-3 text-[#5BE37D]">Contactez l’équipe SimplyFoot.</span>
          </div>
          <a
            href="mailto:contact@simplyfoot.com"
            className="px-6 py-2 rounded-lg font-semibold bg-[#5BE37D] text-[#14482F] hover:bg-[#68FB7A] shadow transition"
          >
            Nous écrire
          </a>
        </div>
      </div>
    </main>
  );
}

