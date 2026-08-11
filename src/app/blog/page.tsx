import type { Metadata } from "next";
import Link from "next/link";
import BlogHeader from "@/components/blog-header";
import SiteFooter from "@/components/site-footer";
import { blogPosts } from "@/lib/blog-posts";

export const metadata: Metadata = {
  title: "Blog sobre ansiedad, respiración y bienestar | ANSIOFF",
  description:
    "Guías prácticas sobre ansiedad, respiración, sueño, diario emocional y autocuidado. Información clara con fuentes y límites responsables.",
  alternates: { canonical: "/blog" },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/blog",
    siteName: "ANSIOFF",
    title: "Blog sobre ansiedad y bienestar emocional | ANSIOFF",
    description:
      "Respuestas claras y prácticas para entender la ansiedad, crear pausas de calma y cuidar tu bienestar emocional.",
  },
  twitter: {
    card: "summary",
    title: "Blog sobre ansiedad y bienestar emocional | ANSIOFF",
    description:
      "Guías prácticas sobre ansiedad, respiración, sueño y diario emocional.",
  },
};

export default function BlogPage() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Blog de ANSIOFF",
    description:
      "Guías prácticas sobre ansiedad, respiración, sueño y bienestar emocional.",
    url: "https://ansioff.com/blog",
    publisher: {
      "@type": "Organization",
      name: "ANSIOFF",
      url: "https://ansioff.com",
    },
    blogPost: blogPosts.map((post) => ({
      "@type": "BlogPosting",
      headline: post.title,
      url: `https://ansioff.com/blog/${post.slug}`,
      datePublished: post.publishedAt,
      dateModified: post.modifiedAt,
    })),
  };

  return (
    <main className="min-h-screen bg-[#020e1c] text-[#e8f4ff]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogHeader />

      <section className="border-b border-[#0e2a4a] bg-[#04152b] px-6 py-16 md:py-24">
        <div className="mx-auto max-w-4xl">
          <p className="font-sora text-xs font-bold tracking-[2px] text-[#14b8a6]">BLOG DE ANSIOFF</p>
          <h1 className="mt-4 max-w-3xl font-sora text-4xl font-semibold leading-tight md:text-5xl">
            Respuestas claras para entender la ansiedad y cuidar de ti
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#8ab0cc]">
            Guías sin promesas rápidas ni diagnósticos: explicamos dudas concretas, proponemos pasos que puedes probar y señalamos cuándo es importante pedir ayuda profesional.
          </p>
        </div>
      </section>

      <section className="px-6 py-16 md:py-20">
        <div className="mx-auto max-w-4xl">
          <div className="mb-8 flex flex-wrap gap-2 text-xs text-[#8ab0cc]">
            {[
              "Ansiedad y sueño",
              "Respiración",
              "Diario emocional",
              "Exposición gradual",
            ].map((topic) => (
              <span key={topic} className="rounded-full border border-[#0e2a4a] bg-[#04152b] px-3 py-1.5">
                {topic}
              </span>
            ))}
          </div>

          <h2 className="font-sora text-2xl font-semibold">Últimos artículos</h2>
          <div className="mt-6 grid gap-5">
            {blogPosts.map((post) => (
              <article key={post.slug} className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6 md:p-8">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <span className="font-semibold uppercase tracking-wide text-[#14b8a6]">{post.category}</span>
                  <span className="text-[#5a7a94]">{post.displayDate}</span>
                  <span className="text-[#5a7a94]">{post.readingTime}</span>
                </div>
                <h3 className="mt-4 max-w-3xl font-sora text-2xl font-semibold leading-snug">
                  <Link href={`/blog/${post.slug}`} className="hover:text-[#4ddbc4]">
                    {post.title}
                  </Link>
                </h3>
                <p className="mt-4 max-w-3xl leading-7 text-[#8ab0cc]">{post.excerpt}</p>
                <Link
                  href={`/blog/${post.slug}`}
                  className="mt-6 inline-flex text-sm font-semibold text-[#14b8a6] hover:text-[#4ddbc4]"
                >
                  Leer la guía completa <span aria-hidden="true" className="ml-2">→</span>
                </Link>
              </article>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
