"use client";
import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    nom: "",
    email: "",
    sujet: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ici tu peux brancher ton envoi API/email
    setSent(true);
    setForm({ nom: "", email: "", sujet: "", message: "" });
  };

  return (
    <main className="w-full min-h-screen bg-[#14482F] py-14 px-2">
      <div className="max-w-3xl mx-auto bg-white/95 shadow-2xl rounded-3xl px-6 py-12 mb-10 border border-[#5BE37D]/10">
        <h1 className="text-4xl md:text-5xl font-extrabold text-[#5BE37D] mb-2 text-center">
          Contactez l’équipe SimplyFoot
        </h1>
        <p className="text-center text-[#14482F] text-lg mb-10">
          Une question, un projet, une démo ? Écrivez-nous et notre équipe vous répondra dans les meilleurs délais.
        </p>
        <div className="flex flex-col md:flex-row gap-10 mb-8">
          {/* Bloc infos - toujours visible */}
          <div className="flex-1 flex flex-col gap-6 justify-center">
            <div className="flex items-center gap-3">
              <Mail className="text-[#5BE37D] w-6 h-6 min-w-6" />
              <span className="font-bold text-[#14482F] select-all">
                <a
                  href="mailto:contact@simplyfoot.fr"
                  className="hover:underline hover:text-[#5BE37D] transition"
                  style={{ color: "#14482F" }}
                >
                  contact@simplifoot.fr
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="text-[#5BE37D] w-6 h-6 min-w-6" />
              <span className="font-bold text-[#14482F] select-all">
                <a
                  href="tel:0682845641"
                  className="hover:underline hover:text-[#5BE37D] transition"
                  style={{ color: "#14482F" }}
                >
                  06&nbsp;82&nbsp;84&nbsp;56&nbsp;41
                </a>
              </span>
            </div>
            <div className="flex items-center gap-3">
              <MapPin className="text-[#5BE37D] w-6 h-6 min-w-6" />
              <span className="font-bold text-[#14482F]">
                628 chemin de l’Oratoire,<br />
                83200 Le Revest-les-Eaux, France
              </span>
            </div>
            <div className="flex items-center gap-3">
              <Send className="text-[#5BE37D] w-6 h-6 min-w-6" />
              <a
                href="https://calendly.com/"
                target="_blank"
                rel="noopener"
                className="font-bold underline hover:text-[#5BE37D] transition"
                style={{ color: "#14482F" }}
              >
                Prendre rendez-vous en visio
              </a>
            </div>
          </div>
          {/* Bloc formulaire */}
          <div className="flex-1">
            <form
              onSubmit={handleSubmit}
              className="bg-[#F7F6F3] rounded-2xl p-6 shadow flex flex-col gap-5 border border-[#5BE37D]/10"
            >
              <label className="font-semibold text-[#14482F]">
                Nom / Club
                <input
                  name="nom"
                  value={form.nom}
                  onChange={handleChange}
                  required
                  className="block mt-2 w-full px-3 py-2 rounded border border-gray-200 bg-gray-100"
                  placeholder="Votre nom ou celui du club"
                />
              </label>
              <label className="font-semibold text-[#14482F]">
                Email
                <input
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  required
                  className="block mt-2 w-full px-3 py-2 rounded border border-gray-200 bg-gray-100"
                  placeholder="adresse@email.com"
                />
              </label>
              <label className="font-semibold text-[#14482F]">
                Sujet
                <input
                  name="sujet"
                  value={form.sujet}
                  onChange={handleChange}
                  required
                  className="block mt-2 w-full px-3 py-2 rounded border border-gray-200 bg-gray-100"
                  placeholder="Sujet de votre demande"
                />
              </label>
              <label className="font-semibold text-[#14482F]">
                Message
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  required
                  className="block mt-2 w-full px-3 py-2 rounded border border-gray-200 bg-gray-100 min-h-[80px]"
                  placeholder="Votre message"
                />
              </label>
              <button
                type="submit"
                className="mt-4 px-8 py-3 rounded-lg font-bold bg-[#5BE37D] text-[#14482F] text-lg shadow hover:bg-[#68FB7A] transition"
              >
                Envoyer
              </button>
              {sent && (
                <div className="text-green-700 font-bold text-center mt-2">
                  Merci, votre message a bien été envoyé ! <br />
                  Notre équipe vous recontactera très vite.
                </div>
              )}
            </form>
          </div>
        </div>
        {/* Bloc équipe */}
        <div className="mt-8 border-t pt-8 flex flex-col items-center">
          <h2 className="text-2xl font-bold text-[#14482F] mb-4">
            Notre équipe à votre service
          </h2>
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#5BE37D] flex items-center justify-center text-white font-bold text-2xl shadow">
                RP
              </div>
              <div className="font-semibold text-[#14482F]">Romain Pennacchio</div>
              <div className="text-[#14482F]/60 text-sm">Fondateur – Associé</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 rounded-full bg-[#5BE37D] flex items-center justify-center text-white font-bold text-2xl shadow">
                JB
              </div>
              <div className="font-semibold text-[#14482F]">Jérémy Baruc</div>
              <div className="text-[#14482F]/60 text-sm">Fondateur – Associé</div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
