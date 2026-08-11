import Link from "next/link";
import AppStoreLink from "@/components/app-store-link";

export default function BlogHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-[#0e2a4a] bg-[#04152b]/95 backdrop-blur-md">
      <nav aria-label="Navegación principal" className="mx-auto flex max-w-6xl items-center justify-between gap-5 px-6 py-4">
        <Link href="/" className="font-sora text-lg font-semibold tracking-tight">
          ANSI<span className="text-[#14b8a6]">OFF</span>
        </Link>

        <div className="flex items-center gap-4">
          <Link href="/app-para-la-ansiedad" className="hidden text-sm text-[#8ab0cc] hover:text-[#e8f4ff] sm:inline">
            Herramientas
          </Link>
          <AppStoreLink
            placement="blog_nav"
            className="rounded-lg bg-[#14b8a6] px-4 py-2 text-xs font-semibold text-[#020e1c] hover:bg-[#0d9488]"
          >
            Descargar app
          </AppStoreLink>
        </div>
      </nav>
    </header>
  );
}
