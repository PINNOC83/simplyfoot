"use client";
import { useState } from "react";
import Image from "next/image";

const BLOGS = [
  {
    id: 1,
    titre: "Bienvenue sur le blog SimplyFoot",
    resume: "Découvrez toutes les actus et conseils pour booster la gestion de votre club.",
    image: "/3.jpg",
    contenu:
      "Ceci est le premier article du blog. Restez connectés pour plus de contenu exclusif ! Vous trouverez ici tous nos conseils, guides, retours d’expérience, nouveautés, et astuces pour faire briller votre club amateur.",
    auteur: "L’équipe SimplyFoot",
    date: "2024-07-13",
  },
  // Tu peux ajouter d'autres articles...
];

export default function BlogPage() {
  const [selected, setSelected] = useState<number | null>(null);

  return (
    <main className="w-full min-h-screen bg-gradient-to-br from-[#14482F] via-[#185C41] to-[#25693e] py-12">
      <div className="max-w-7xl mx-auto px-5">
        <h1 className="text-center text-5xl md:text-6xl font-extrabold text-[#5BE37D] mb-8 drop-shadow-xl">
          SimplyFoot Le Journal
        </h1>
        <p className="text-center text-[#D9C6A3] mb-12 text-2xl font-semibold">
          Conseils, innovations & actualités pour les clubs amateurs
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          {BLOGS.map((blog, idx) => (
            <div
              key={blog.id}
              className="rounded-3xl shadow-2xl bg-white/95 hover:bg-[#E9F6ED] border-2 border-[#5BE37D]/25 transition-all overflow-hidden flex flex-col cursor-pointer"
              style={{ minHeight: 380 }}
              onClick={() => setSelected(idx)}
            >
              <div className="relative w-full h-44 overflow-hidden">
                <Image src={blog.image} alt={blog.titre} fill className="object-cover" />
              </div>
              <div className="flex-1 flex flex-col p-6">
                <h2 className="text-2xl font-bold mb-2 text-[#14482F]">{blog.titre}</h2>
                <div className="mb-3 text-[#175438] font-medium">{blog.resume}</div>
                <div className="mt-auto flex items-center justify-between">
                  <span className="text-[#14482F]/70 text-sm">{blog.auteur}</span>
                  <span className="text-[#5BE37D] text-xs">{new Date(blog.date).toLocaleDateString("fr-FR")}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Modal d'article plein écran */}
        {selected !== null && (
          <div
            className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center"
            onClick={() => setSelected(null)}
          >
            <div
              className="bg-white max-w-2xl w-full rounded-2xl p-10 shadow-2xl relative"
              onClick={e => e.stopPropagation()}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-4 right-4 text-[#14482F] font-bold text-2xl hover:text-[#5BE37D] transition"
              >
                ×
              </button>
              <Image
                src={BLOGS[selected].image}
                alt={BLOGS[selected].titre}
                width={800}
                height={300}
                className="w-full h-56 object-cover rounded-xl mb-6"
              />
              <h2 className="text-3xl font-bold mb-2 text-[#14482F]">{BLOGS[selected].titre}</h2>
              <div className="mb-4 text-[#175438] font-medium">{BLOGS[selected].resume}</div>
              <div className="text-[#232729] text-lg mb-4 whitespace-pre-line">{BLOGS[selected].contenu}</div>
              <div className="flex items-center justify-between text-sm text-[#5BE37D]">
                <span>{BLOGS[selected].auteur}</span>
                <span>{new Date(BLOGS[selected].date).toLocaleDateString("fr-FR")}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}

