import { Sora, DM_Sans } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const sora = Sora({
  subsets: ["latin"],
  variable: "--font-sora",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
});

export const metadata = {
  title: "ANSIOFF Business — Salud Mental Corporativa",
  description: "La única plataforma que combina terapia clínica real para empleados con un dashboard de ROI para RRHH. Datos, no promesas.",
  verification: {
    google: "iWzifyqtckncXrB80nz_lcA6kOyhmuU7rnPwoxgIwiQ",
  },
  other: {
    "google-adsense-account": "ca-pub-4114551490468306",
  },
  appleWebApp: {
    capable: true,
    title: "ANSIOFF Business",
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
        {/* Google AdSense direct raw tag */}
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4114551490468306"
          crossOrigin="anonymous"
        />
        {/* Google tag (gtag.js) */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=AW-18311870973"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'AW-18311870973');
          `}
        </Script>
        <Script id="sw-register" strategy="afterInteractive">
          {`
            if ('serviceWorker' in navigator) {
              window.addEventListener('load', function() {
                navigator.serviceWorker.register('/sw.js').catch(function(err) {
                  console.error('Service Worker registration failed:', err);
                });
              });
            }
          `}
        </Script>
      </head>
      <body
        className={`${sora.variable} ${dmSans.variable} font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
