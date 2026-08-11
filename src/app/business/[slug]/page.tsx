import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import SiteFooter from "@/components/site-footer";
import {
  businessSeoPages,
  businessSeoSlugs,
} from "@/lib/business-seo-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return businessSeoSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = businessSeoPages[slug];

  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/business/${page.slug}` },
    openGraph: {
      type: "article",
      locale: "es_ES",
      url: `/business/${page.slug}`,
      siteName: "ANSIOFF",
      title: page.title,
      description: page.description,
      images: [{ url: "/icon-512.png", alt: `ANSIOFF Business: ${page.keyword}` }],
    },
    twitter: {
      card: "summary",
      title: page.title,
      description: page.description,
      images: ["/icon-512.png"],
    },
  };
}

export default async function BusinessSeoLanding({ params }: PageProps) {
  const { slug } = await params;
  const page = businessSeoPages[slug];

  if (!page) notFound();

  const relatedPages = page.related
    .map((relatedSlug) => businessSeoPages[relatedSlug])
    .filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        headline: page.h1,
        description: page.description,
        mainEntityOfPage: `https://ansioff.com/business/${page.slug}`,
        author: { "@type": "Organization", name: "ANSIOFF" },
        publisher: { "@type": "Organization", name: "ANSIOFF" },
        inLanguage: "es-ES",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "ANSIOFF",
            item: "https://ansioff.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "ANSIOFF Business",
            item: "https://ansioff.com/business",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: page.keyword,
            item: `https://ansioff.com/business/${page.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: page.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#020e1c] text-[#e8f4ff]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-[#0e2a4a] bg-[#04152b]/95 px-6 py-4 backdrop-blur-md md:px-12">
        <Link href="/business" className="font-sora text-lg font-semibold tracking-tight">
          ANSI<span className="text-[#3b8ee8]">OFF</span> Business
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="hidden text-sm text-[#8ab0cc] hover:text-[#e8f4ff] sm:inline">
            App para particulares
          </Link>
          <Link
            href="/business#demo"
            className="rounded-lg bg-[#185FA5] px-4 py-2 text-xs font-semibold text-[#e6f1fb] hover:bg-[#3b8ee8]"
          >
            Solicitar demo
          </Link>
        </div>
      </nav>

      <section className="border-b border-[#0e2a4a] bg-[#04152b] px-6 py-20 md:py-28">
        <div className="mx-auto max-w-5xl">
          <div className="mb-6 text-sm text-[#5a7a94]">
            <Link href="/business" className="hover:text-[#3b8ee8]">ANSIOFF Business</Link>
            <span className="mx-2">/</span>
            <span>{page.keyword}</span>
          </div>
          <p className="font-sora text-xs font-bold tracking-[2px] text-[#3b8ee8]">{page.eyebrow}</p>
          <h1 className="mt-4 max-w-4xl font-sora text-4xl font-semibold leading-tight md:text-6xl">{page.h1}</h1>
          <p className="mt-7 max-w-3xl text-lg leading-8 text-[#8ab0cc]">{page.intro}</p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <Link
              href="/business#demo"
              className="rounded-xl bg-[#185FA5] px-7 py-3.5 text-sm font-semibold text-[#e6f1fb] hover:bg-[#3b8ee8]"
            >
              Solicitar una demo para mi empresa
            </Link>
            <span className="text-xs text-[#5a7a94]">Demo personalizada · Sin compromiso</span>
          </div>
        </div>
      </section>

      <section className="border-b border-[#0e2a4a] px-6 py-12">
        <div className="mx-auto grid max-w-5xl gap-4 md:grid-cols-2">
          {page.highlights.map((highlight) => (
            <div key={highlight} className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5 text-sm leading-6 text-[#8ab0cc]">
              <span className="mr-3 text-[#3b8ee8]">✓</span>{highlight}
            </div>
          ))}
        </div>
      </section>

      <div className="mx-auto max-w-4xl px-6 py-16">
        <div className="space-y-14">
          {page.sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-sora text-2xl font-semibold md:text-3xl">{section.title}</h2>
              <div className="mt-5 space-y-4 text-base leading-8 text-[#8ab0cc]">
                {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
              </div>
            </section>
          ))}
        </div>

        {page.sources && (
          <aside className="mt-14 rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
            <h2 className="font-sora text-lg font-semibold">Fuentes oficiales</h2>
            <ul className="mt-4 space-y-2 text-sm text-[#8ab0cc]">
              {page.sources.map((source) => (
                <li key={source.url}>
                  <a href={source.url} target="_blank" rel="noopener noreferrer" className="text-[#85b7eb] underline underline-offset-2 hover:text-[#e8f4ff]">
                    {source.label}
                  </a>
                </li>
              ))}
            </ul>
          </aside>
        )}

        <section className="mt-16 border-t border-[#0e2a4a] pt-14">
          <h2 className="font-sora text-2xl font-semibold">Preguntas frecuentes</h2>
          <div className="mt-6 space-y-4">
            {page.faqs.map((faq) => (
              <details key={faq.q} className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5">
                <summary className="cursor-pointer font-sora text-sm font-semibold">{faq.q}</summary>
                <p className="mt-4 text-sm leading-7 text-[#8ab0cc]">{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="mt-16 border-t border-[#0e2a4a] pt-14">
          <h2 className="font-sora text-2xl font-semibold">Más recursos para empresas</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedPages.map((related) => (
              <Link
                key={related.slug}
                href={`/business/${related.slug}`}
                className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5 hover:border-[#3b8ee8]/50"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-[#3b8ee8]">{related.keyword}</span>
                <span className="mt-2 block font-sora text-sm font-semibold">{related.h1}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <section className="border-t border-[#0e2a4a] bg-[#04152b] px-6 py-16 text-center">
        <h2 className="font-sora text-3xl font-semibold">Descubre cómo ANSIOFF puede apoyar a tu equipo</h2>
        <p className="mx-auto mt-4 max-w-xl text-[#8ab0cc]">Revisaremos las necesidades de tu empresa, la experiencia del empleado y las métricas disponibles para RRHH.</p>
        <Link
          href="/business#demo"
          className="mt-8 inline-flex rounded-xl bg-[#185FA5] px-7 py-3.5 text-sm font-semibold text-[#e6f1fb] hover:bg-[#3b8ee8]"
        >
          Solicitar demo de ANSIOFF Business
        </Link>
      </section>

      <SiteFooter section="Business" />
    </main>
  );
}
