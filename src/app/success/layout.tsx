import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solicitud recibida | ANSIOFF Business",
  description: "Confirmación de solicitud de demo de ANSIOFF Business.",
  robots: {
    index: false,
    follow: false,
    googleBot: {
      index: false,
      follow: false,
    },
  },
};

export default function SuccessLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
