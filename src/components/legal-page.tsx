import type { ReactNode } from "react";
import Link from "next/link";

type LegalSection = {
  title: string;
  content: ReactNode;
};

type LegalPageProps = {
  eyebrow: string;
  title: string;
  intro: string;
  sections: LegalSection[];
};

export default function LegalPage({
  eyebrow,
  title,
  intro,
  sections,
}: LegalPageProps) {
  return (
    <main className="min-h-screen bg-[#020e1c] px-6 py-12 text-[#e8f4ff]">
      <div className="mx-auto max-w-3xl">
        <nav className="mb-12 flex items-center justify-between">
          <Link href="/" className="font-sora text-lg font-semibold tracking-tight">
            ANSI<span className="text-[#14b8a6]">OFF</span>
          </Link>
          <Link href="/" className="text-sm text-[#8ab0cc] hover:text-[#e8f4ff]">
            Volver a la página principal
          </Link>
        </nav>

        <header className="mb-12 border-b border-[#0e2a4a] pb-10">
          <p className="font-sora text-xs font-bold uppercase tracking-[2px] text-[#14b8a6]">
            {eyebrow}
          </p>
          <h1 className="mt-3 font-sora text-3xl font-semibold md:text-5xl">{title}</h1>
          <p className="mt-5 text-base leading-relaxed text-[#8ab0cc]">{intro}</p>
          <p className="mt-4 text-xs text-[#5a7a94]">Última actualización: 11 de agosto de 2026</p>
        </header>

        <div className="space-y-10">
          {sections.map((section) => (
            <section key={section.title}>
              <h2 className="font-sora text-xl font-semibold">{section.title}</h2>
              <div className="mt-3 space-y-3 text-sm leading-7 text-[#8ab0cc]">
                {section.content}
              </div>
            </section>
          ))}
        </div>

        <footer className="mt-14 border-t border-[#0e2a4a] pt-8 text-xs text-[#5a7a94]">
          <div className="flex flex-wrap gap-4">
            <Link href="/privacy" className="hover:text-[#8ab0cc]">Privacidad</Link>
            <Link href="/legal" className="hover:text-[#8ab0cc]">Aviso legal</Link>
            <Link href="/terms" className="hover:text-[#8ab0cc]">Términos</Link>
          </div>
        </footer>
      </div>
    </main>
  );
}
