import Image from "next/image";

// Divisions personnalisées pour les joueurs d’équipe avec aspect ludique et compétitif
const DIVISIONS_EQUIPE = [
  { nom: "Bronze", src: "/bronze.png", desc: "Débutants, faites vos preuves et amusez-vous." },
  { nom: "Argent", src: "/argent.png", desc: "Engagés, améliorez vos compétences et performances." },
  { nom: "Or", src: "/or.PNG", desc: "Confirmés, montrez votre talent et votre esprit d'équipe." },
  { nom: "Platine", src: "/platine.png", desc: "Experts, devenez essentiels et brillez ensemble." },
  { nom: "Diamant", src: "/diamant.png", desc: "Élite, menez votre équipe vers la victoire." },
  { nom: "Master", src: "/coupe.jpg", desc: "Légendes, inspirez tous les membres du groupe." },
];

// Modules spécifiques pour particuliers (joueurs, capitaines, coachs, parents)
const MODULES_EQUIPE = [
  {
    icon: "⚽",
    title: "Créer facilement votre équipe",
    desc: "Invitez vos coéquipiers, organisez vos rencontres et gérez tout simplement votre groupe.",
  },
  {
    icon: "📅",
    title: "Organisation parfaite du calendrier",
    desc: "Programmation simplifiée des matchs et entraînements, rappels automatisés.",
  },
  {
    icon: "📈",
    title: "Classement et statistiques motivants",
    desc: "Mesurez les performances individuelles et collectives grâce à un suivi ludique et complet.",
  },
  {
    icon: "🚗",
    title: "Gestion du covoiturage optimisée",
    desc: "Simplifiez la logistique de vos déplacements, évitez les soucis d'organisation.",
  },
  {
    icon: "📱",
    title: "Communication fluide en équipe",
    desc: "Messagerie intégrée, partage rapide d'informations, photos et vidéos.",
  },
  {
    icon: "📁",
    title: "Documents centralisés et sécurisés",
    desc: "Stockage et partage facile de vos documents administratifs et sportifs.",
  },
  {
    icon: "🤖",
    title: "Recommandations personnalisées par IA",
    desc: "Conseils intelligents et exercices adaptés pour faire progresser chaque membre.",
  },
  {
    icon: "🏆",
    title: "Challengez-vous avec le système de badges",
    desc: "Atteignez des niveaux supérieurs et gagnez des badges valorisants pour renforcer la cohésion.",
  },
];

export default function GestionEquipePage() {
  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-[#14482F] to-[#1B5E3C] py-20">
      <div className="max-w-7xl mx-auto px-6 flex flex-col gap-14">
        {/* Hero Section Améliorée */}
        <section className="flex flex-col md:flex-row gap-12 items-center mb-12">
          <div className="flex-1">
            <h1 className="text-4xl md:text-6xl font-extrabold text-[#5BE37D] mb-6">
              Gérez votre équipe comme jamais avec <span className="text-white">SimplyFoot</span>
            </h1>
            <p className="text-[#D9C6A3] text-xl font-semibold mb-8">
              Une plateforme intuitive, ludique et motivante pour gérer votre équipe, se challenger et renforcer l&apos;esprit d&apos;équipe.
            </p>
            <ul className="text-white/90 text-lg ml-6 space-y-3 list-disc">
              <li>Créez facilement votre équipe et invitez des membres.</li>
              <li>Calendrier intuitif, notifications automatiques.</li>
              <li>Système de classement ludique avec badges et niveaux.</li>
              <li>Communication facilitée et gestion optimisée du covoiturage.</li>
            </ul>
            <div className="mt-8 flex gap-4">
              <a
                href="/offres"
                className="px-8 py-4 bg-[#5BE37D] text-[#14482F] font-bold rounded-xl shadow-lg hover:bg-[#68FB7A] transition-all duration-200"
              >
                Créer mon équipe
              </a>
              <a
                href="#contact"
                className="px-8 py-4 border border-[#D9C6A3]/60 text-[#D9C6A3] rounded-xl hover:border-[#5BE37D] hover:text-[#5BE37D] transition duration-200"
              >
                Demander une démo
              </a>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <Image
              src="/team-gestion.jpg"
              alt="Gestion d'équipe SimplyFoot"
              width={450}
              height={450}
              className="rounded-3xl shadow-2xl border-4 border-[#5BE37D]/40 object-cover"
            />
          </div>
        </section>

        {/* Section Divisions avec badges ludiques */}
        <section>
          <h2 className="text-4xl font-bold text-[#5BE37D] mb-10 text-center">
            Progresser, se challenger, s&apos;amuser ensemble !
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10">
            {DIVISIONS_EQUIPE.map((d) => (
              <div
                key={d.nom}
                className="flex flex-col items-center bg-[#232729]/90 rounded-xl p-6 shadow-xl hover:scale-105 transition-transform duration-200"
              >
                <Image src={d.src} alt={d.nom} width={120} height={120} className="mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">{d.nom}</h3>
                <p className="text-[#D9C6A3] text-center text-sm">{d.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Modules de gestion avec icônes claires */}
        <section>
          <h2 className="text-4xl font-bold text-[#5BE37D] mb-10 text-center">
            Simplifiez-vous la vie avec SimplyFoot
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {MODULES_EQUIPE.map((mod) => (
              <div
                key={mod.title}
                className="bg-[#D9C6A3]/95 rounded-xl p-6 shadow-md flex flex-col items-center text-center border border-[#5BE37D]/20 hover:shadow-xl transition-shadow duration-200"
              >
                <span className="text-3xl mb-3">{mod.icon}</span>
                <h3 className="text-lg font-extrabold text-[#14482F] mb-2">{mod.title}</h3>
                <p className="text-[#232729] text-sm">{mod.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Call to action final renforcé */}
        <section className="flex flex-col items-center mt-10">
          <h2 className="text-3xl md:text-4xl font-bold text-[#5BE37D] mb-6 text-center">
            Passez à l&apos;action et donnez un nouvel élan à votre équipe !
          </h2>
          <a
            href="/offres"
            className="px-10 py-4 bg-[#5BE37D] text-[#14482F] rounded-xl font-bold shadow-xl hover:bg-[#68FB7A] transition duration-200"
          >
            Essayez gratuitement
          </a>
        </section>
      </div>
    </main>
  );
}
