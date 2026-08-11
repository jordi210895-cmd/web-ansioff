import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Salud mental en el trabajo para empresas | ANSIOFF",
  description:
    "Plataforma de bienestar laboral con recursos para empleados y métricas agregadas para RRHH. Apoya la prevención del estrés y el burnout. Solicita una demo.",
  alternates: {
    canonical: "/business",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/business",
    siteName: "ANSIOFF",
    title: "Salud mental en el trabajo para empresas | ANSIOFF",
    description:
      "Bienestar laboral para empleados y métricas agregadas para RRHH. Conoce ANSIOFF Business y solicita una demo.",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "ANSIOFF Business, bienestar laboral para empresas",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "Salud mental en el trabajo para empresas | ANSIOFF",
    description:
      "Herramientas para empleados y métricas agregadas de bienestar laboral para RRHH.",
    images: ["/icon-512.png"],
  },
};

export default function BusinessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
