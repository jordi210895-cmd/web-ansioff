import { Sora, DM_Sans } from "next/font/google";
import type { Metadata } from "next";
import AnalyticsConsent from "@/components/analytics-consent";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://ansioff.com"),
  title: "App para la ansiedad: respiración y diario | ANSIOFF",
  description:
    "Calma la ansiedad con respiración guiada, Kit SOS, diario emocional y sonidos relajantes. Descarga ANSIOFF para iPhone en la App Store.",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "es_ES",
    url: "/",
    siteName: "ANSIOFF",
    title: "App para la ansiedad: respiración y diario | ANSIOFF",
    description:
      "Respiración guiada, Kit SOS, diario emocional y sonidos relajantes para afrontar momentos de ansiedad y estrés desde tu iPhone.",
    images: [
      {
        url: "/icon-512.png",
        width: 512,
        height: 512,
        alt: "ANSIOFF, app para la ansiedad en iPhone",
      },
    ],
  },
  twitter: {
    card: "summary",
    title: "App para la ansiedad: respiración y diario | ANSIOFF",
    description:
      "Kit SOS, respiración guiada, diario emocional y sonidos relajantes en tu iPhone.",
    images: ["/icon-512.png"],
  },
  verification: {
    google: "iWzifyqtckncXrB80nz_lcA6kOyhmuU7rnPwoxgIwiQ",
  },
  other: {
    "google-adsense-account": "ca-pub-4114551490468306",
  },
  appleWebApp: {
    capable: true,
    title: "ANSIOFF",
    statusBarStyle: "black-translucent",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "ANSIOFF",
              url: "https://ansioff.com",
              logo: "https://ansioff.com/icon-512.png",
              email: "ansioffapp@gmail.com",
            }),
          }}
        />
      </head>
      <body
        className={`${sora.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
        <AnalyticsConsent />
      </body>
    </html>
  );
}
