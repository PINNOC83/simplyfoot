import { ShieldCheck, CalendarDays, FileText, Users, BarChart3, MessageCircle, LayoutDashboard, Video } from "lucide-react";

const FEATURES = [
  {
    title: "Gestion de club",
    desc: "Tableau de bord président, staff, coach, joueur : centralisez tout, multi-rôles, sécurité et accès personnalisés.",
    icon: <ShieldCheck size={32} className="text-[#175438]" />,
  },
  {
    title: "Planification & convocations",
    desc: "Organisez tous vos matchs et entraînements, rappels automatiques, plannings interactifs.",
    icon: <CalendarDays size={32} className="text-[#175438]" />,
  },
  {
    title: "Feuilles de match & compos",
    desc: "Générez vos feuilles FFF en PDF, compositions visuelles sur terrain, signature numérique.",
    icon: <LayoutDashboard size={32} className="text-[#175438]" />,
  },
  {
    title: "Statistiques & IA",
    desc: "Analyse individuelle et collective, dashboards visuels, conseils IA sur-mesure.",
    icon: <BarChart3 size={32} className="text-[#175438]" />,
  },
  {
    title: "Scan & classement intelligent",
    desc: "Scannez et classez tous vos documents : licences, cartes d'identité, certificats médicaux.",
    icon: <FileText size={32} className="text-[#175438]" />,
  },
  {
    title: "Communication club & familles",
    desc: "Messagerie, notifications parents/joueurs, centralisation, validation numérique.",
    icon: <MessageCircle size={32} className="text-[#175438]" />,
  },
  {
    title: "Compositions visuelles avancées",
    desc: "Drag & drop des joueurs sur terrain interactif, exports visuels, multi-équipes.",
    icon: <Users size={32} className="text-[#175438]" />,
  },
  {
    title: "Vidéo & IA coach (bientôt)",
    desc: "Analyse vidéo automatisée, tracking IA, dashboards coach et joueur.",
    icon: <Video size={32} className="text-[#175438]" />,
  },
];

export default function FonctionnalitesPage() {
  return (
    <main className="min-h-screen w-full bg-[#D9C6A3] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#175438] mb-12">Fonctionnalités SimplyFoot</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="bg-white/60 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg border border-[#175438]/15"
            >
              <span className="mb-4">{f.icon}</span>
              <h2 className="text-lg font-extrabold text-[#14482F] mb-2">{f.title}</h2>
              <p className="text-base text-[#232729] font-medium">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
