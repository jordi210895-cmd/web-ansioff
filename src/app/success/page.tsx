"use client";

import React from "react";
import Link from "next/link";
import Script from "next/script";

export default function SuccessPage() {
  return (
    <div className="bg-[#020e1c] text-[#e8f4ff] min-h-screen flex items-center justify-center p-6 text-center font-sans">
      <Script id="google-conversion" strategy="afterInteractive">
        {`
          gtag('event', 'conversion', {
              'send_to': 'AW-18311870973/m1EWCN-z4s0cEP3z45tE',
              'value': 1.0,
              'currency': 'EUR',
              'transaction_id': ''
          });
        `}
      </Script>
      <div className="max-w-xl w-full bg-[#04152b] border border-[#0e2a4a] rounded-[32px] p-10 md:p-16 shadow-2xl relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute -top-24 -left-24 w-64 h-64 bg-[#3b8ee8]/10 blur-[100px] rounded-full"></div>
        
        <div className="relative z-10">
          <div className="w-20 h-20 bg-[#185FA5]/20 rounded-2xl flex items-center justify-center mx-auto mb-8 border border-[#3b8ee8]/30">
            <span className="text-4xl text-[#3b8ee8]">✓</span>
          </div>
          
          <h1 className="font-sora text-3xl md:text-4xl font-semibold mb-4">¡Solicitud Recibida!</h1>
          <p className="text-[#8ab0cc] mb-10 leading-relaxed text-lg">
            Gracias por interesarte en <span className="text-[#e8f4ff] font-medium">ANSIOFF Business</span>. 
            Un experto en bienestar organizacional se pondrá en contacto contigo en las próximas <span className="text-[#3b8ee8] font-semibold">24 horas</span> para agendar tu demo personalizada.
          </p>

          <div className="space-y-4 mb-10">
            <div className="bg-[#020e1c] p-5 rounded-2xl border border-[#0e2a4a] text-left">
              <div className="text-[10px] text-[#3b8ee8] font-bold tracking-[1.5px] uppercase mb-2">PRÓXIMOS PASOS</div>
              <ul className="space-y-3 text-sm text-[#8ab0cc]">
                <li className="flex gap-3">
                  <span className="text-[#3b8ee8] font-bold">1.</span>
                  <span>Revisaremos el perfil de tu empresa para preparar una demo adaptada.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#3b8ee8] font-bold">2.</span>
                  <span>Recibirás un email para elegir el horario que mejor te convenga.</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-[#3b8ee8] font-bold">3.</span>
                  <span>Te daremos acceso temporal al Dashboard de RRHH para que lo explores.</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="pt-8 border-t border-[#0e2a4a]">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 text-[#3b8ee8] hover:text-[#85b7eb] transition-colors font-medium"
            >
              ← Volver a la web principal
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
