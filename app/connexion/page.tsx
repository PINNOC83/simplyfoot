"use client";
import { useState } from "react";

export default function ConnexionClub() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");
    if (!email || !password) return setError("Remplis ton email et mot de passe.");
    // Ici, branche la connexion à ton API
    window.location.href = "/dashboard";
  };

  return (
    <main className="w-full min-h-screen bg-[#14482F] flex flex-col items-center justify-center py-10">
      <div className="bg-white/95 rounded-2xl shadow-2xl px-6 py-10 max-w-md w-full border border-[#5BE37D]/10">
        <h1 className="text-3xl font-bold mb-6 text-[#14482F] text-center">
          Connexion à l’espace club
        </h1>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <label className="font-semibold text-[#14482F]">
            Email
            <input
              className="block mt-2 w-full px-3 py-2 rounded border border-gray-200 bg-gray-100"
              type="email"
              required
              value={email}
              onChange={e => setEmail(e.target.value)}
              placeholder="adresse@email.com"
            />
          </label>
          <label className="font-semibold text-[#14482F]">
            Mot de passe
            <input
              className="block mt-2 w-full px-3 py-2 rounded border border-gray-200 bg-gray-100"
              type="password"
              required
              value={password}
              onChange={e => setPassword(e.target.value)}
            />
          </label>
          {error && <div className="text-red-600 font-semibold">{error}</div>}
          <button
            type="submit"
            className="mt-4 px-8 py-3 rounded-lg font-bold bg-[#5BE37D] text-[#14482F] text-lg shadow hover:bg-[#68FB7A] transition"
          >
            Se connecter
          </button>
        </form>
        <p className="text-center text-[#14482F] mt-6">
          Pas encore de compte club ?{" "}
          <a href="/inscription" className="underline font-bold hover:text-[#5BE37D]">Créer mon compte</a>
        </p>
      </div>
    </main>
  );
}
