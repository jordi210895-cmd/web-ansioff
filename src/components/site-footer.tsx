import Link from "next/link";

type SiteFooterProps = {
  section?: "Personal" | "Business";
};

export default function SiteFooter({ section = "Personal" }: SiteFooterProps) {
  return (
    <footer className="flex flex-col items-center justify-between gap-5 border-t border-[#0e2a4a] bg-[#020e1c] px-6 py-8 text-xs text-[#5a7a94] md:flex-row md:px-12">
      <Link href="/" className="font-sora text-[15px] hover:text-[#8ab0cc]">
        ANSI<span className="text-[#14b8a6]">OFF</span>{" "}
        <span className="text-[#5a7a94]">{section}</span>
      </Link>

      <div className="flex flex-wrap items-center justify-center gap-x-5 gap-y-3">
        <span className="text-[#2d4a61]">© 2026 ANSIOFF</span>
        <nav aria-label="Enlaces del pie de página" className="flex flex-wrap justify-center gap-x-5 gap-y-3">
          <Link href="/blog" className="hover:text-[#8ab0cc]">Blog</Link>
          <Link href="/privacy" className="hover:text-[#8ab0cc]">Política de privacidad</Link>
          <Link href="/legal" className="hover:text-[#8ab0cc]">Aviso legal</Link>
          <Link href="/terms" className="hover:text-[#8ab0cc]">Términos de servicio</Link>
        </nav>
      </div>
    </footer>
  );
}
