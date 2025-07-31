export default function TarifsPage() {
  const offres = [
    {
      nom: "Mini Club",
      prix: "19€",
      cible: "Petits clubs ou équipes (<30 licenciés)",
      details: ["Convocations", "Planning", "Docs", "Statistiques de base"],
    },
    {
      nom: "Local Club",
      prix: "29€",
      cible: "Clubs jusqu'à 60 licenciés",
      details: ["Tout Mini + Compos visuelles", "Scan & classement", "Support prioritaire"],
    },
    {
      nom: "Régional Club",
      prix: "49€",
      cible: "Clubs 60 à 120 licenciés",
      details: ["Tout Local + Tableaux avancés", "Gestion multi-équipes", "Exports PDF", "Automatisation IA"],
    },
    {
      nom: "Grand Club",
      prix: "79€",
      cible: "Clubs 120 à 200 licenciés",
      details: ["Tout Régional + Accès club élargi", "Tableaux exports", "Outils d’analyse coach"],
    },
    {
      nom: "Maxi Club",
      prix: "99€",
      cible: "Clubs 200+ licenciés",
      details: ["Tout Grand + Offre sur-mesure", "Dédié grands clubs, districts", "Accompagnement personnalisé"],
    },
  ];

  return (
    <main className="w-full min-h-screen bg-[#14482F] py-16">
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold text-center text-[#5BE37D] mb-12">Nos tarifs</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {offres.map((offre) => (
            <div
              key={offre.nom}
              className="bg-[#D9C6A3]/95 rounded-3xl shadow-lg border border-[#175438]/10 p-8 flex flex-col items-center text-center"
            >
              <h2 className="text-2xl font-bold mb-2 text-[#175438]">{offre.nom}</h2>
              <div className="text-3xl font-extrabold text-[#14482F] mb-2">{offre.prix}/mois</div>
              <div className="mb-2 text-[#175438]/80">{offre.cible}</div>
              <ul className="list-disc text-[#232729] text-base text-left pl-5 mb-4">
                {offre.details.map((d) => (
                  <li key={d}>{d}</li>
                ))}
              </ul>
              <button className="mt-auto px-6 py-2 rounded-lg font-bold bg-[#5BE37D] text-[#14482F] hover:bg-[#68FB7A] transition shadow">
                Demander un devis
              </button>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
