import Image from "next/image";

// Blasons divisions (fichiers correspondants à ta structure)
const DIVISIONS = [
  { nom: "Bronze", src: "/bronze.png", desc: "Division d’entrée, pour se lancer et progresser." },
  { nom: "Argent", src: "/argent.png", desc: "Pour les joueurs réguliers et impliqués." },
  { nom: "Or", src: "/or.PNG", desc: "Le palier de l’excellence technique et collective." },
  { nom: "Platine", src: "/platine.png", desc: "Niveau élite, performance continue et régularité." },
  { nom: "Diamant", src: "/diamant.png", desc: "Joueurs d’exception, leaders sur et hors du terrain." },
  { nom: "Master", src: "/coupe.jpg", desc: "Légende du club : maîtrise et influence au top." },
];

// Modules-clés pour coach/dirigeant
const MODULES = [
  {
    icon: "🏟️",
    title: "Organisation du club et des équipes",
    desc: "Créez des équipes (U11, U13, Seniors, Féminines…), ajoutez les joueurs et attribuez les rôles (coach, joueur, admin). Structurez tout votre club depuis une seule plateforme.",
  },
  {
    icon: "📅",
    title: "Planification intelligente",
    desc: "Gérez tous vos événements (matchs, entraînements, déplacements) avec rappels automatiques. Notifications email/push pour ne jamais rater un rendez-vous.",
  },
  {
    icon: "📋",
    title: "Feuilles de match automatisées",
    desc: "Générez vos feuilles de match en un clic : composition, postes, consignes individuelles, impression/partage immédiat.",
  },
  {
    icon: "🧠",
    title: "Évaluation et progression des joueurs",
    desc: "Notes simplifiées sur plusieurs critères, suivi de la progression, et classements par division (Bronze à Master). Motivez et valorisez vos joueurs !",
  },
  {
    icon: "📊",
    title: "Dashboard coach avancé",
    desc: "Accédez à toutes les stats-clés de l’équipe : effectif, absences/blessures, performances collectives, top joueurs en progression, actions rapides (évaluer, commenter, conseiller…).",
  },
  {
    icon: "🗂",
    title: "Gestion documentaire & scan",
    desc: "Centralisez et scannez tous les docs (licences, certifs médicaux, docs club…). Classement auto par joueur/équipe.",
  },
  {
    icon: "🔐",
    title: "Accès & sécurité personnalisés",
    desc: "Chaque rôle (coach, joueur, parent, admin) a sa propre interface. Connexion ultra-sécurisée, gestion fine des autorisations.",
  },
  {
    icon: "🤖",
    title: "Intelligence Artificielle & recommandations",
    desc: "L’IA identifie les axes de progrès, propose des exercices adaptés et anticipe les risques (blessures, baisse de perf…).",
  },
];

export default function GestionClubPage() {
  return (
    <main className="w-full min-h-screen bg-[#14482F] py-16">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
        {/* Hero Section */}
        <section className="flex flex-col md:flex-row gap-10 items-center mb-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#5BE37D] mb-6">
              Gestion de club <span className="text-white">SimplyFoot</span>
            </h1>
            <p className="text-[#D9C6A3] text-xl mb-6 font-semibold">
              Structurez, automatisez et professionnalisez la gestion de votre club amateur.
            </p>
            <ul className="list-disc text-white/90 text-lg ml-6 space-y-2 mb-6">
              <li>Ajoutez vos équipes et joueurs en un clic</li>
              <li>Planifiez matchs & entraînements (calendrier centralisé)</li>
              <li>Centralisez vos docs et stats sur un seul dashboard</li>
              <li>Classez vos joueurs par division (Bronze à Master) selon leurs performances</li>
            </ul>
            <div className="flex gap-5 mt-4">
              <a
                href="/offres"
                className="px-8 py-4 rounded-lg font-bold text-lg bg-[#5BE37D] text-[#14482F] shadow-xl hover:bg-[#68FB7A] transition"
              >
                Découvrir les offres club
              </a>
              <a
                href="#contact"
                className="px-8 py-4 rounded-lg font-bold text-lg border border-[#D9C6A3]/60 text-[#D9C6A3] hover:border-[#5BE37D] hover:text-[#5BE37D] transition"
              >
                Demander une démo
              </a>
            </div>
          </div>
          <div className="flex-1 flex items-center justify-center">
            {/* Utilise une image de ton choix pour la gestion club ou une photo de vestiaire, terrain... */}
            <Image
              src="/1.png"
              alt="Gestion club SimplyFoot"
              width={420}
              height={420}
              className="rounded-3xl shadow-2xl border-4 border-[#5BE37D]/40 object-cover"
            />
          </div>
        </section>

        {/* Classement joueurs – Divisions */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5BE37D] mb-8 text-center">
            Classement & progression des joueurs : les 6 divisions SimplyFoot
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 justify-center items-center">
            {DIVISIONS.map((d) => (
              <div
                key={d.nom}
                className="flex flex-col items-center justify-center bg-[#232729] rounded-2xl p-6 shadow border border-[#5BE37D]/10"
              >
                <Image
                  src={d.src}
                  alt={`Division ${d.nom}`}
                  width={110}
                  height={110}
                  className="mb-3"
                />
                <h3 className="text-xl font-bold text-white mb-1">{d.nom}</h3>
                <p className="text-sm text-[#D9C6A3] text-center">{d.desc}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 text-center text-lg text-[#D9C6A3]">
            Chaque joueur évolue de Bronze à Master selon ses performances, son implication, et l’avis de ses coachs.<br />
            <span className="text-[#5BE37D] font-semibold">Un classement motivant, inspiré de l’eSport et des grandes académies !</span>
          </p>
        </section>

        {/* Modules-clés */}
        <section>
          <h2 className="text-3xl md:text-4xl font-bold text-[#5BE37D] mb-8 text-center">
            Tout pour gérer votre club de A à Z
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
            {MODULES.map((mod) => (
              <div
                key={mod.title}
                className="bg-[#D9C6A3]/90 rounded-xl p-6 flex flex-col items-center text-center shadow border border-[#5BE37D]/10"
              >
                <span className="text-3xl mb-3">{mod.icon}</span>
                <h3 className="font-extrabold text-lg text-[#14482F] mb-2">{mod.title}</h3>
                <p className="text-base text-[#232729]">{mod.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Dashboard coach – Accroche */}
        <section className="my-16 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5BE37D] mb-6 text-center">
            Un dashboard coach ultra-puissant, pensé pour l’action
          </h2>
          <p className="max-w-3xl text-[#D9C6A3] text-lg text-center mb-6">
            Visualisez en temps réel les données clés de votre effectif, gérez les absences/blessures, suivez la progression de chaque joueur, et pilotez votre club comme un pro.
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-base text-white/90">
            <li>👥 Effectif complet, absences/blessures, moyenne d’âge</li>
            <li>📊 Résultats, séries, courbes de progression</li>
            <li>🏆 Top 3 joueurs en progression, joueur du mois</li>
            <li>💡 Actions rapides coach : évaluer, conseiller, commenter…</li>
          </ul>
          <div className="mt-8">
            <Image
              src="/coupe.jpg"
              alt="Trophée Master"
              width={140}
              height={140}
              className="mx-auto"
            />
          </div>
        </section>

        {/* Call to action final */}
        <section className="flex flex-col items-center mt-8">
          <h2 className="text-2xl md:text-3xl font-bold text-[#5BE37D] mb-3 text-center">
            Prêt à faire passer votre club dans une nouvelle dimension ?
          </h2>
          <a
            href="/offres"
            className="px-10 py-4 rounded-lg font-bold text-lg bg-[#5BE37D] text-[#14482F] shadow-xl hover:bg-[#68FB7A] transition"
          >
            Tester SimplyFoot gratuitement
          </a>
        </section>
      </div>
    </main>
  );
}
