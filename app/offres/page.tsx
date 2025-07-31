"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const plateformes = [
  { name: "Android", src: "/android.svg", url: "#" },
  { name: "iOS", src: "/ios.svg", url: "#" },
  { name: "Windows", src: "/windows.svg", url: "#" },
];

const offres = [
  {
    nom: "Mini Club",
    couleur: "from-lime-400 to-lime-600",
    cible: "1 à 30 licenciés",
    prix: "4,99 €",
    sousTitre: "Tout SimplyFoot pour les petits clubs",
    details: [
      "Toutes les fonctionnalités incluses : calendrier, compos, statistiques, documents, suivi joueurs",
      "Accompagnement personnalisé à la mise en route",
    ],
    bonus: "Le choix malin pour démarrer facilement",
    emoji: "🔰",
  },
  {
    nom: "Local Club",
    couleur: "from-yellow-400 to-yellow-600",
    cible: "31 à 75 licenciés",
    prix: "9,99 €",
    sousTitre: "Pour les clubs en plein essor",
    details: [
      "Toutes les fonctionnalités incluses",
      "Suivi des présences et évaluations multi-équipes",
      "Ajout d’un compte parent par joueur",
    ],
    bonus: "Impliquerez tout le club et les familles !",
    emoji: "🟨",
  },
  {
    nom: "Régional Club",
    couleur: "from-emerald-400 to-emerald-600",
    cible: "76 à 150 licenciés",
    prix: "14,99 €",
    sousTitre: "La performance au cœur du projet",
    details: [
      "Toutes les fonctionnalités incluses",
      "Accès au reporting club (assiduité, blessures, stats avancées)",
      "Interface président / staff dédiée",
      "Synchronisation FFF (optionnelle)",
    ],
    bonus: "Pour structurer et grandir comme les pros",
    emoji: "🟩",
  },
  {
    nom: "Grand Club",
    couleur: "from-sky-400 to-sky-600",
    cible: "151 à 300 licenciés",
    prix: "19,99 €",
    sousTitre: "Gestion fluide, effectif XXL",
    details: [
      "Toutes les fonctionnalités incluses",
      "Accès illimité aux outils de performance",
      "Espace documentaire illimité par joueur",
    ],
    bonus: "Plus de limites pour votre staff !",
    emoji: "🟦",
  },
  {
    nom: "Maxi Club",
    couleur: "from-cyan-400 to-cyan-600",
    cible: "301 à 500 licenciés",
    prix: "29,99 €",
    sousTitre: "L’offre pour les clubs référence",
    details: [
      "Fonctions avancées + gestion multisite",
      "Comptes illimités (dirigeants, éducateurs, parents)",
      "Intégration API calendrier FFF / Ligue",
    ],
    bonus: "Pensée pour les clubs ambitieux et structurés",
    emoji: "🔷",
  },
  {
    nom: "District+ / Ville",
    couleur: "from-rose-500 to-rose-700",
    cible: "+ de 500 licenciés",
    prix: "Sur devis",
    sousTitre: "L’excellence sur-mesure",
    details: [
      "Offre personnalisée : intégrations poussées, support prioritaire, interface custom",
      "Interlocuteur dédié",
    ],
    bonus: "Pour les groupements, districts, villes, avec accompagnement premium",
    emoji: "🟥",
  },
];

const remises = [
  {
    icon: "🔁",
    titre: "Paiement annuel :",
    desc: "-20 % sur l’abonnement",
  },
  {
    icon: "🎓",
    titre: "Clubs scolaires / UNSS :",
    desc: "-30 % (sur justificatif)",
  },
  {
    icon: "🤝",
    titre: "Pack groupement de clubs :",
    desc: "Tarifs dégressifs si plusieurs clubs s’abonnent en même temps",
  },
];

export default function OffresPage() {
  return (
    <main className="w-full min-h-screen bg-[#14482F] py-16">
      <div className="max-w-7xl mx-auto px-6">
        {/* Titre principal */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-bold text-center text-[#5BE37D] mb-3"
        >
          Découvrez l’offre SimplyFoot adaptée à <span className="text-white">VOTRE club</span>
        </motion.h1>
        <p className="text-center text-[#D9C6A3] text-xl mb-12 font-semibold">
          Toutes les fonctionnalités. Un prix juste. Un accompagnement premium pour chaque structure.
        </p>
        {/* Offres grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {offres.map((offre) => (
            <motion.div
              key={offre.nom}
              initial={{ opacity: 0, y: 30, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.4, type: "spring", stiffness: 70 }}
              viewport={{ once: true }}
              className={`
                relative rounded-3xl border-2
                shadow-xl hover:shadow-2xl transition-shadow
                bg-gradient-to-br ${offre.couleur} p-[2px]
                group
              `}
            >
              <div className="rounded-[22px] bg-[#F7F6F3] h-full w-full flex flex-col items-center text-center p-8">
                <div className="text-3xl mb-2 drop-shadow" style={{ color: "#fff" }}>
                  {offre.emoji}
                </div>
                <h2 className="text-2xl font-bold mb-1 text-[#14482F] group-hover:text-[#5BE37D] transition-colors">
                  {offre.nom}
                </h2>
                <div className="font-semibold text-base mb-2 text-[#175438]">{offre.sousTitre}</div>
                <div className="mb-2 text-[#232729] text-lg">
                  <span className="font-bold">{offre.prix}</span>
                  {offre.prix !== "Sur devis" && <span className="text-sm font-normal"> / mois TTC</span>}
                </div>
                <div className="mb-1 text-[#175438]/80 text-xs">{offre.cible}</div>
                <ul className="list-disc text-[#232729] text-base text-left pl-5 mb-3 mt-3">
                  {offre.details.map((d) => (
                    <li key={d}>{d}</li>
                  ))}
                </ul>
                <div className="italic text-[#175438] font-medium mb-2">{offre.bonus}</div>
                <motion.button
                  whileHover={{ scale: 1.07 }}
                  whileTap={{ scale: 0.97 }}
                  className="mt-auto px-7 py-2.5 rounded-xl font-bold bg-gradient-to-br from-[#67D07C] to-[#5BE37D] text-[#14482F] hover:from-[#5BE37D] hover:to-[#68FB7A] transition shadow-lg focus:outline-none focus:ring-2 focus:ring-[#67D07C]"
                >
                  Demander un devis
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Remises et offres spéciales */}
        <h2 className="text-2xl text-[#5BE37D] text-center mb-3 font-extrabold">Remises et offres spéciales</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-12">
          {remises.map((r) => (
            <div key={r.titre} className="bg-[#D9C6A3] rounded-2xl p-5 flex items-center gap-3 shadow border border-[#14482F]/15">
              <span className="text-2xl">{r.icon}</span>
              <span>
                <span className="font-bold text-[#14482F]">{r.titre}</span>{" "}
                <span className="text-[#232729]">{r.desc}</span>
              </span>
            </div>
          ))}
        </div>

        {/* Téléchargement applications */}
        <h2 className="text-2xl text-[#5BE37D] text-center mb-4 font-extrabold">Téléchargez l’application SimplyFoot</h2>
        <div className="flex flex-wrap gap-8 justify-center mb-6">
          {plateformes.map((p) => (
            <a
              key={p.name}
              href={p.url}
              target="_blank"
              rel="noopener"
              className="flex items-center gap-3 px-6 py-3 bg-white rounded-xl shadow hover:scale-105 transition border border-[#14482F]/10"
            >
              <Image src={p.src} alt={p.name} width={32} height={32} />
              <span className="text-[#14482F] font-semibold">{p.name}</span>
            </a>
          ))}
        </div>
        <div className="text-center mt-8 text-[#5BE37D] font-bold">
          Bientôt disponible sur tous vos appareils&nbsp;!
        </div>
      </div>
    </main>
  );
}
