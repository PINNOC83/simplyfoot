// /app/blog/[slug]/page.tsx
import { notFound } from "next/navigation";

const blogs = [
  {
    slug: "comment-optimiser-la-gestion-du-club",
    title: "Comment optimiser la gestion de son club amateur ?",
    content: `
## Optimiser la gestion de son club

Utilisez SimplyFoot pour automatiser vos convocations, générer vos feuilles de match, centraliser vos docs, etc.

- Planification rapide
- Scan & classement intelligent
- Statistiques avancées
- Communication parents/joueurs
`,
    date: "2024-07-01",
  },
  {
    slug: "7-astuces-pour-parents",
    title: "7 astuces pour mieux communiquer avec les parents de joueurs",
    content: `
## Communication club/familles

Simplifiez la communication et créez un vrai lien grâce à la messagerie, notifications et modules familles de SimplyFoot.

- Notifications personnalisées
- Validation d’absence
- Fiches santé intégrées
`,
    date: "2024-06-22",
  },
];

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const blog = blogs.find((b) => b.slug === params.slug);
  if (!blog) return notFound();

  return (
    <main className="max-w-2xl mx-auto px-6 py-20">
      <h1 className="text-3xl md:text-5xl font-bold text-[#175438] mb-4">{blog.title}</h1>
      <div className="text-xs mb-8 text-[#14482F]/70">{blog.date}</div>
      <article className="prose prose-lg prose-headings:text-[#175438] prose-a:text-[#5BE37D] prose-li:marker:text-[#5BE37D] text-[#232729]">
        {blog.content.split('\n').map((line, i) =>
          line.startsWith("##") ? <h2 key={i}>{line.replace(/^##\s*/, "")}</h2>
          : line.startsWith("- ") ? <li key={i}>{line.replace(/^- /, "")}</li>
          : line.trim() === "" ? <br key={i}/>
          : <p key={i}>{line}</p>
        )}
      </article>
    </main>
  );
}
