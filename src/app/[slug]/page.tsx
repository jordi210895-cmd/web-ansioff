import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import AppStoreLink from "@/components/app-store-link";
import PlayStoreLink from "@/components/play-store-link";
import SiteFooter from "@/components/site-footer";
import {
  personalSeoPages,
  personalSeoSlugs,
} from "@/lib/personal-seo-pages";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export const dynamicParams = false;

export function generateStaticParams() {
  return personalSeoSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = personalSeoPages[slug];

  if (!page) return {};

  return {
    title: page.title,
    description: page.description,
    alternates: { canonical: `/${page.slug}` },
    openGraph: {
      type: "website",
      locale: "es_ES",
      url: `/${page.slug}`,
      siteName: "ANSIOFF",
      title: page.title,
      description: page.description,
      images: [{ url: page.image, alt: page.imageAlt }],
    },
    twitter: {
      card: "summary_large_image",
      title: page.title,
      description: page.description,
      images: [page.image],
    },
  };
}

export default async function PersonalSeoLanding({ params }: PageProps) {
  const { slug } = await params;
  const page = personalSeoPages[slug];

  if (!page) notFound();

  const relatedPages = page.related
    .map((relatedSlug) => personalSeoPages[relatedSlug])
    .filter(Boolean);

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        name: page.h1,
        url: `https://ansioff.com/${page.slug}`,
        description: page.description,
        about: page.keyword,
        isPartOf: {
          "@type": "WebSite",
          name: "ANSIOFF",
          url: "https://ansioff.com",
        },
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
            name: page.h1,
            item: `https://ansioff.com/${page.slug}`,
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
        <Link href="/" className="font-sora text-lg font-semibold tracking-tight">
          ANSI<span className="text-[#14b8a6]">OFF</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/business" className="hidden text-sm text-[#8ab0cc] hover:text-[#e8f4ff] sm:inline">
            Para empresas
          </Link>
          <AppStoreLink
            placement={`${page.slug}_nav`}
            className="rounded-lg bg-[#14b8a6] px-4 py-2 text-xs font-semibold text-[#020e1c] hover:bg-[#0d9488]"
          >
            Descargar en App Store
          </AppStoreLink>
        </div>
      </nav>

      <section className="border-b border-[#0e2a4a] bg-[#04152b] px-6 py-16 md:py-24">
        <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <div className="mb-6 text-sm text-[#5a7a94]">
              <Link href="/" className="hover:text-[#14b8a6]">ANSIOFF</Link>
              <span className="mx-2">/</span>
              <span>{page.keyword}</span>
            </div>
            <p className="font-sora text-xs font-bold tracking-[2px] text-[#14b8a6]">{page.eyebrow}</p>
            <h1 className="mt-4 max-w-3xl font-sora text-4xl font-semibold leading-tight md:text-5xl">
              {page.h1}
            </h1>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#8ab0cc]">{page.intro}</p>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <AppStoreLink
                placement={`${page.slug}_hero`}
                className="rounded-xl bg-[#14b8a6] px-6 py-3.5 text-sm font-semibold text-[#020e1c] hover:bg-[#0d9488]"
              >
                 App Store (iOS)
              </AppStoreLink>
              <PlayStoreLink
                placement={`${page.slug}_hero`}
                className="rounded-xl bg-[#0e2a4a] border border-[#14b8a6]/40 px-6 py-3.5 text-sm font-semibold text-[#e8f4ff] hover:bg-[#153a63]"
              >
                ▶ Google Play (Android)
              </PlayStoreLink>
              <span className="text-xs text-[#5a7a94] w-full mt-1">Herramienta de bienestar · No sustituye atención profesional</span>
            </div>
          </div>

          <div className="flex justify-center lg:col-span-5">
            <div className="relative aspect-[9/18.5] w-[260px] overflow-hidden rounded-[38px] border-[7px] border-[#0e2a4a] bg-[#020e1c] shadow-2xl">
              <Image
                src={page.image}
                alt={page.imageAlt}
                fill
                priority
                sizes="260px"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="border-b border-[#0e2a4a] px-6 py-16">
        <div className="mx-auto max-w-4xl">
          <p className="font-sora text-xs font-bold tracking-[2px] text-[#14b8a6]">PASO A PASO</p>
          <h2 className="mt-3 font-sora text-3xl font-semibold">Cómo utilizar esta herramienta</h2>
          <ol className="mt-8 grid gap-4 md:grid-cols-2">
            {page.steps.map((step, index) => (
              <li key={step} className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-5 text-sm leading-6 text-[#8ab0cc]">
                <span className="mr-3 font-sora text-lg font-semibold text-[#14b8a6]">{index + 1}</span>
                {step}
              </li>
            ))}
          </ol>
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
          <h2 className="font-sora text-2xl font-semibold">Explora otras herramientas de ANSIOFF</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-3">
            {relatedPages.map((related) => (
              <Link
                key={related.slug}
                href={`/${related.slug}`}
                className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5 hover:border-[#14b8a6]/50"
              >
                <span className="text-xs font-bold uppercase tracking-wide text-[#14b8a6]">{related.keyword}</span>
                <span className="mt-2 block font-sora text-sm font-semibold">{related.h1}</span>
              </Link>
            ))}
          </div>
        </section>
      </div>

      <section className="border-t border-[#0e2a4a] bg-[#04152b] px-6 py-16 text-center">
        <h2 className="font-sora text-3xl font-semibold">Lleva estas herramientas en tu teléfono</h2>
        <p className="mx-auto mt-4 max-w-xl text-[#8ab0cc]">Descarga ANSIOFF y accede al Kit SOS, la respiración guiada, el diario emocional y los sonidos relajantes.</p>
        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
          <AppStoreLink
            placement={`${page.slug}_final_cta`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#14b8a6] px-7 py-3.5 text-sm font-semibold text-[#020e1c] hover:bg-[#0d9488] w-full sm:w-auto"
          >
             App Store (iOS)
          </AppStoreLink>
          <PlayStoreLink
            placement={`${page.slug}_final_cta`}
            className="inline-flex items-center justify-center gap-2 rounded-xl bg-[#0e2a4a] border border-[#14b8a6]/40 px-7 py-3.5 text-sm font-semibold text-[#e8f4ff] hover:bg-[#153a63] w-full sm:w-auto"
          >
            <span className="text-xs font-bold text-[#14b8a6]">▶</span> Google Play (Android)
          </PlayStoreLink>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
