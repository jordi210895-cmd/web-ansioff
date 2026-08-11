"use client";

import { useSyncExternalStore } from "react";
import Link from "next/link";
import Script from "next/script";

type ConsentChoice = "accepted" | "rejected" | null;

const CONSENT_KEY = "ansioff-analytics-consent";
const CONSENT_EVENT = "ansioff-consent-change";

const subscribeToConsent = (callback: () => void) => {
  window.addEventListener("storage", callback);
  window.addEventListener(CONSENT_EVENT, callback);

  return () => {
    window.removeEventListener("storage", callback);
    window.removeEventListener(CONSENT_EVENT, callback);
  };
};

const getConsentSnapshot = (): ConsentChoice => {
  const savedConsent = window.localStorage.getItem(CONSENT_KEY);
  return savedConsent === "accepted" || savedConsent === "rejected"
    ? savedConsent
    : null;
};

const getServerConsentSnapshot = (): ConsentChoice => null;
const subscribeToHydration = () => () => undefined;

export default function AnalyticsConsent() {
  const consent = useSyncExternalStore(
    subscribeToConsent,
    getConsentSnapshot,
    getServerConsentSnapshot,
  );
  const ready = useSyncExternalStore(
    subscribeToHydration,
    () => true,
    () => false,
  );

  const saveConsent = (choice: Exclude<ConsentChoice, null>) => {
    window.localStorage.setItem(CONSENT_KEY, choice);
    window.dispatchEvent(new Event(CONSENT_EVENT));
  };

  return (
    <>
      {consent === "accepted" && (
        <>
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
          <Script
            src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4114551490468306"
            strategy="afterInteractive"
            crossOrigin="anonymous"
          />
        </>
      )}

      {ready && consent === null && (
        <aside
          aria-label="Preferencias de analítica"
          className="fixed inset-x-4 bottom-4 z-[200] mx-auto max-w-3xl rounded-2xl border border-[#1e3d5c] bg-[#020e1c]/95 p-5 text-[#e8f4ff] shadow-2xl backdrop-blur-md md:flex md:items-center md:gap-6"
        >
          <div className="flex-1">
            <p className="font-sora text-sm font-semibold">Tu privacidad importa</p>
            <p className="mt-1 text-xs leading-relaxed text-[#8ab0cc]">
              Usamos analítica y publicidad de Google solo si lo aceptas para medir visitas y clics hacia la App Store. Puedes continuar sin aceptar. Consulta la{" "}
              <Link href="/privacy" className="text-[#14b8a6] underline underline-offset-2">
                política de privacidad
              </Link>
              .
            </p>
          </div>
          <div className="mt-4 flex shrink-0 gap-2 md:mt-0">
            <button
              type="button"
              onClick={() => saveConsent("rejected")}
              className="rounded-lg border border-[#1e3d5c] px-4 py-2 text-xs font-semibold text-[#8ab0cc] hover:text-[#e8f4ff]"
            >
              Rechazar
            </button>
            <button
              type="button"
              onClick={() => saveConsent("accepted")}
              className="rounded-lg bg-[#14b8a6] px-4 py-2 text-xs font-semibold text-[#020e1c] hover:bg-[#0d9488]"
            >
              Aceptar
            </button>
          </div>
        </aside>
      )}
    </>
  );
}
