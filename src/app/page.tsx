"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import AppStoreLink from "@/components/app-store-link";

type TabId = "sos" | "diario" | "audios" | "programas";

interface FeatureTab {
  id: TabId;
  title: string;
  subtitle: string;
  badge: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  desc: string;
  img: string;
  href: string;
}

const faqItems = [
  {
    q: "¿Cómo puede ayudarme una app para la ansiedad?",
    a: "Una app para la ansiedad puede ayudarte a tener a mano ejercicios de respiración, pautas de anclaje y un espacio para registrar cómo te sientes. ANSIOFF reúne estas herramientas de bienestar en el iPhone, pero no diagnostica ni sustituye la atención de un profesional.",
  },
  {
    q: "¿Qué incluye el Kit SOS de ANSIOFF?",
    a: "El Kit SOS ofrece una guía breve y ordenada para momentos de ansiedad: respiración asistida, anclaje sensorial y orientación paso a paso. Puedes abrirlo cuando necesites centrar tu atención y bajar el ritmo.",
  },
  {
    q: "¿Cómo funciona la respiración 4-7-8?",
    a: "La respiración 4-7-8 propone inhalar durante 4 segundos, mantener el aire durante 7 y exhalar durante 8. ANSIOFF muestra el ritmo de forma visual y temporizada para que puedas seguir el ejercicio paso a paso.",
  },
  {
    q: "¿Qué puedo registrar en el diario emocional?",
    a: "Puedes escribir cómo te sientes, qué ha ocurrido y qué pensamientos se repiten. El diario emocional organiza tus notas y ofrece preguntas de reflexión para ayudarte a observar patrones; no realiza diagnósticos.",
  },
  {
    q: "¿ANSIOFF sustituye a un psicólogo?",
    a: "No. ANSIOFF es una herramienta de bienestar y apoyo para el día a día. No sustituye la evaluación, el diagnóstico ni el tratamiento de un psicólogo, psiquiatra u otro profesional sanitario.",
  },
  {
    q: "¿ANSIOFF está disponible para Android?",
    a: "Actualmente ANSIOFF está disponible para iPhone a través de la App Store de Apple. La versión para Android no está disponible en este momento.",
  },
];

export default function AnsioffPersonalLanding() {
  // States for Breathing Simulator
  const [breatheState, setBreatheState] = useState<"idle" | "inhale" | "hold" | "exhale">("idle");
  const [timer, setTimer] = useState(0);

  // States for Interactive Phone Showcase
  const [activeTab, setActiveTab] = useState<TabId>("sos");

  // States for FAQ Accordion
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Breathing simulation loop
  useEffect(() => {
    if (breatheState === "idle") return;

    const interval = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          if (breatheState === "inhale") {
            setBreatheState("hold");
            return 7; // Hold for 7 seconds
          } else if (breatheState === "hold") {
            setBreatheState("exhale");
            return 8; // Exhale for 8 seconds
          } else {
            setBreatheState("inhale");
            return 4; // Inhale for 4 seconds
          }
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [breatheState]);

  const startBreathe = () => {
    setBreatheState("inhale");
    setTimer(4);
  };

  const stopBreathe = () => {
    setBreatheState("idle");
    setTimer(0);
  };

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  // Feature tabs data with their respective screenshots from public/app-screens/ (biofeedback removed)
  const features: FeatureTab[] = [
    {
      id: "sos",
      title: "Botón SOS",
      subtitle: "Guía rápida para momentos de ansiedad",
      badge: "KIT SOS",
      badgeBg: "bg-[#2a0e0e]",
      badgeText: "text-[#f87171]",
      badgeBorder: "border-[#ef4444]/30",
      desc: "Cuando notes que la ansiedad sube, abre el Kit SOS y sigue una secuencia breve de respiración, anclaje sensorial y orientación paso a paso.",
      img: "/app-screens/sos.png",
      href: "/kit-sos-ansiedad",
    },
    {
      id: "diario",
      title: "Diario emocional con IA",
      subtitle: "Identifica patrones en lo que escribes",
      badge: "DIARIO EMOCIONAL",
      badgeBg: "bg-[#1e1b4b]",
      badgeText: "text-[#a78bfa]",
      badgeBorder: "border-[#8b5cf6]/30",
      desc: "Escribe cómo te sientes y revisa los temas que se repiten. El análisis organiza tus notas y ofrece preguntas de reflexión; no realiza diagnósticos.",
      img: "/app-screens/diary_ai.png",
      href: "/diario-emocional",
    },
    {
      id: "audios",
      title: "Sonidos relajantes",
      subtitle: "Audios para relajarte y concentrarte",
      badge: "SONIDOS",
      badgeBg: "bg-[#0c2e4e]",
      badgeText: "text-[#60a5fa]",
      badgeBorder: "border-[#3b82f6]/30",
      desc: "Elige paisajes sonoros para acompañar tus pausas, ejercicios de respiración, momentos de concentración o rutina de descanso.",
      img: "/app-screens/sounds.png",
      href: "/sonidos-relajantes",
    },
    {
      id: "programas",
      title: "Programas de bienestar guiados",
      subtitle: "Ejercicios inspirados en CBT y ACT",
      badge: "CBT / ACT",
      badgeBg: "bg-[#2e1d0f]",
      badgeText: "text-[#fb923c]",
      badgeBorder: "border-[#f97316]/30",
      desc: "Aprende técnicas para observar pensamientos, aceptar emociones difíciles y construir hábitos de autocuidado a tu ritmo.",
      img: "/app-screens/modules.png",
      href: "/app-para-la-ansiedad",
    },
  ];
  const activeFeature = features.find((feature) => feature.id === activeTab) ?? features[0];

  const getBubbleStyle = () => {
    if (breatheState === "inhale") {
      return {
        transform: "scale(1.5)",
        borderColor: "#14b8a6",
        boxShadow: "0 0 50px rgba(20, 184, 166, 0.6)",
      };
    }
    if (breatheState === "hold") {
      return {
        transform: "scale(1.5)",
        borderColor: "#3b8ee8",
        boxShadow: "0 0 60px rgba(59, 142, 232, 0.7)",
      };
    }
    if (breatheState === "exhale") {
      return {
        transform: "scale(1.0)",
        borderColor: "#fb923c",
        boxShadow: "0 0 40px rgba(251, 146, 60, 0.4)",
      };
    }
    return {
      transform: "scale(1.0)",
      borderColor: "rgba(20, 184, 166, 0.3)",
      boxShadow: "0 0 20px rgba(20, 184, 166, 0.1)",
    };
  };

  const getBreatheLabel = () => {
    switch (breatheState) {
      case "inhale": return "Inhala suavemente";
      case "hold": return "Mantén el aire";
      case "exhale": return "Suelta despacio";
      default: return "Listo para empezar";
    }
  };

  const getBreatheInstruction = () => {
    switch (breatheState) {
      case "inhale": return "Llena tus pulmones...";
      case "hold": return "Sostén la respiración y relaja tus hombros...";
      case "exhale": return "Libera toda la tensión de tu cuerpo lentamente...";
      default: return "Pulsa el botón para probar el ejercicio de respiración 4-7-8.";
    }
  };

  return (
    <div className="bg-[#020e1c] text-[#e8f4ff] font-sans leading-relaxed selection:bg-[#14b8a6]/30 min-h-screen">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "MobileApplication",
                name: "ANSIOFF: Ansiedad y Calma",
                operatingSystem: "iOS",
                applicationCategory: "HealthApplication",
                url: "https://ansioff.com/",
                downloadUrl:
                  "https://apps.apple.com/es/app/ansioff-ansiedad-y-calma/id6761905804",
                description:
                  "App para la ansiedad con respiración guiada, Kit SOS, diario emocional y sonidos relajantes.",
              },
              {
                "@type": "FAQPage",
                mainEntity: faqItems.map((item) => ({
                  "@type": "Question",
                  name: item.q,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: item.a,
                  },
                })),
              },
            ],
          }),
        }}
      />
      
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-[#04152b] border-b border-[#0e2a4a] sticky top-0 z-[100]">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-sora text-lg font-semibold tracking-tight hover:opacity-90">
            ANSI<span className="text-[#14b8a6]">OFF</span>
          </Link>
          
          {/* Segment Toggle */}
          <div className="flex bg-[#020e1c] rounded-full p-0.5 border border-[#0e2a4a] text-[11px] font-medium">
            <span className="px-2.5 py-0.5 rounded-full bg-[#14b8a6] text-[#020e1c] font-semibold">
              Para ti
            </span>
            <Link 
              href="/business" 
              className="px-2.5 py-0.5 rounded-full text-[#8ab0cc] hover:text-[#e8f4ff] transition-colors"
            >
              Business
            </Link>
          </div>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-sm text-[#8ab0cc]">
          <li><button onClick={() => scrollTo('features')} className="hover:text-[#e8f4ff] transition-colors">Características</button></li>
          <li><button onClick={() => scrollTo('breathe')} className="hover:text-[#e8f4ff] transition-colors">Cómo funciona</button></li>
          <li><button onClick={() => scrollTo('screens')} className="hover:text-[#e8f4ff] transition-colors">Pantallas</button></li>
          <li><button onClick={() => scrollTo('faq')} className="hover:text-[#e8f4ff] transition-colors">Preguntas</button></li>
        </ul>
        <button 
          onClick={() => scrollTo('download')}
          className="bg-[#14b8a6] hover:bg-[#0d9488] text-[#020e1c] px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
        >
          Descargar App
        </button>
      </nav>

      {/* HERO */}
      <section className="bg-[#04152b] py-20 lg:py-28 px-6 border-b border-[#0e2a4a] relative overflow-hidden">
        {/* Glow gradients */}
        <div className="absolute top-1/4 left-1/4 w-[350px] h-[350px] bg-[#14b8a6]/10 blur-[100px] rounded-full pointer-events-none"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-[#3b8ee8]/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero text */}
          <div className="lg:col-span-7 text-left">
            <div className="inline-flex items-center gap-2 bg-[#0d2d3e] text-[#4ddbc4] text-[11px] font-medium px-4 py-1.5 rounded-full mb-6 border border-[#14b8a6]/30 tracking-[0.8px] font-sora">
              <span className="w-1.5 h-1.5 rounded-full bg-[#14b8a6] animate-pulse"></span>
              APP PARA LA ANSIEDAD EN IPHONE
            </div>
            <h1 className="font-sora text-4xl md:text-5xl lg:text-[54px] font-semibold leading-[1.1] mb-6">
              Tu app para <span className="text-[#14b8a6] drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]">calmar la ansiedad</span> cuando más lo necesitas
            </h1>
            <p className="text-lg text-[#8ab0cc] mb-10 leading-[1.65] max-w-[580px]">
              Respiración guiada, Kit SOS, diario emocional y sonidos relajantes para afrontar momentos de ansiedad y estrés. Lleva herramientas de calma siempre contigo en tu iPhone.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
              <div className="flex flex-col gap-3">
                <AppStoreLink
                  placement="home_hero"
                  className="bg-[#14b8a6] hover:bg-[#0d9488] text-[#020e1c] px-8 py-3.5 rounded-xl text-[15px] font-semibold transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
                >
                  <span></span>
                  Descargar ANSIOFF en App Store
                </AppStoreLink>
                
                <div className="flex items-center justify-center sm:justify-start gap-4 mt-1.5">
                  <span className="text-xs text-[#5a7a94] flex items-center gap-1">
                    Disponible para iPhone · Herramienta de bienestar; no sustituye la atención profesional
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Hero mockup */}
          <div className="lg:col-span-5 flex justify-center relative">
            {/* Soft decorative glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#14b8a6]/20 blur-[80px] rounded-full pointer-events-none"></div>

            <div className="relative w-[280px] sm:w-[320px] aspect-[9/18.5] bg-[#020e1c] rounded-[42px] border-[8px] border-[#0e2a4a] shadow-[0_25px_60px_-15px_rgba(2,14,28,0.9)] overflow-hidden flex flex-col">
              {/* Dynamic screen image */}
              <Image
                src="/app-screens/main.png"
                alt="Pantalla principal de ANSIOFF, app para la ansiedad"
                fill
                priority
                sizes="(max-width: 640px) 280px, 320px"
                className="object-cover select-none"
              />
              {/* Phone Camera Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-4.5 bg-[#0e2a4a] rounded-full flex items-center justify-center">
                <div className="w-2.5 h-2.5 rounded-full bg-black/40 mr-12"></div>
                <div className="w-1.5 h-1.5 rounded-full bg-[#1e3d5c]"></div>
              </div>
            </div>

            {/* Floating Card 1 (Biofeedback replaced with SOS) */}
            <div className="absolute -left-6 bottom-16 bg-[#041d38]/90 border border-[#14b8a6]/30 backdrop-blur-md rounded-2xl p-4 shadow-xl max-w-[170px] animate-bounce-slow">
              <div className="flex items-center gap-2 mb-1.5">
                <span className="w-2 h-2 rounded-full bg-[#14b8a6] animate-ping"></span>
                <span className="text-[9px] font-bold text-[#14b8a6] uppercase tracking-wider">Sesión SOS</span>
              </div>
              <div className="font-sora text-sm font-semibold text-[#e8f4ff]">Guía paso a paso</div>
              <div className="text-[10px] text-[#5a7a94] mt-0.5">Respiración y anclaje sensorial</div>
            </div>

            {/* Floating Card 2 */}
            <div className="absolute -right-6 top-16 bg-[#041d38]/90 border border-[#3b8ee8]/30 backdrop-blur-md rounded-2xl p-4 shadow-xl max-w-[170px]">
              <div className="flex items-center gap-2 mb-1">
                <span className="text-base">🧘</span>
                <span className="text-[9px] font-bold text-[#3b8ee8] uppercase tracking-wider">Racha Activa</span>
              </div>
              <div className="font-sora text-sm font-semibold text-[#e8f4ff]">7 días seguidos</div>
              <div className="text-[10px] text-[#5a7a94] mt-0.5">¡Estás cuidando de ti!</div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS / VALIDATION BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-[#020e1c] border-b border-[#0e2a4a]">
        {[
          { n: "Kit SOS", l: "Guía paso a paso para momentos difíciles" },
          { n: "4-7-8", l: "Ejercicio visual de respiración temporizada" },
          { n: "Diario", l: "Registra emociones y observa patrones" },
          { n: "iPhone", l: "Disponible directamente en la App Store" },
        ].map((s, i) => (
          <div key={i} className="p-8 text-center border-r border-[#0e2a4a] last:border-r-0">
            <div className="font-sora text-3xl font-semibold text-[#14b8a6]">{s.n}</div>
            <div className="text-xs text-[#5a7a94] mt-1.5 leading-relaxed">{s.l}</div>
          </div>
        ))}
      </div>

      {/* INTERACTIVE PHONE SHOWCASE */}
      <section id="features" className="bg-[#04152b] py-20 lg:py-28 px-6 border-b border-[#0e2a4a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <div className="text-[11px] text-[#14b8a6] font-bold tracking-[2px] uppercase mb-2 font-sora">HERRAMIENTAS PARA LA ANSIEDAD</div>
            <h2 className="font-sora text-3xl md:text-[38px] font-semibold mb-4">Respiración, diario emocional y apoyo para momentos de ansiedad</h2>
            <p className="text-[15px] text-[#8ab0cc]">Combina ejercicios breves de respiración, un Kit SOS, seguimiento emocional y sonidos relajantes para crear una rutina de calma en tu iPhone.</p>
          </div>

          <div className="grid lg:grid-cols-12 gap-8 items-center">
            {/* Left side tabs */}
            <div className="lg:col-span-7 space-y-3">
              {features.map((feat) => {
                const isActive = activeTab === feat.id;
                return (
                  <button
                    key={feat.id}
                    onClick={() => setActiveTab(feat.id)}
                    className={`w-full text-left p-5 rounded-2xl border transition-all duration-300 flex flex-col justify-between ${
                      isActive 
                        ? "bg-[#020e1c] border-[#14b8a6]/40 shadow-lg shadow-[#14b8a6]/5 translate-x-1" 
                        : "bg-transparent border-[#0e2a4a] hover:border-[#14b8a6]/20 hover:bg-[#020e1c]/40"
                    }`}
                  >
                    <div className="flex justify-between items-start w-full mb-1">
                      <div>
                        <h3 className={`font-sora font-semibold text-base transition-colors ${isActive ? "text-[#14b8a6]" : "text-[#c8dff0]"}`}>
                          {feat.title}
                        </h3>
                        <div className="text-xs text-[#5a7a94] font-medium">{feat.subtitle}</div>
                      </div>
                      <span className={`text-[9px] font-bold px-2.5 py-0.5 rounded border tracking-[0.5px] uppercase ${feat.badgeBg} ${feat.badgeText} ${feat.badgeBorder}`}>
                        {feat.badge}
                      </span>
                    </div>
                    {isActive && (
                      <p className="text-[13px] text-[#8ab0cc] mt-3 leading-relaxed animate-fadeIn">
                        {feat.desc}
                      </p>
                    )}
                  </button>
                );
              })}
              <Link
                href={activeFeature.href}
                className="inline-flex mt-3 text-xs font-semibold text-[#14b8a6] hover:text-[#4ddbc4]"
              >
                Más información sobre esta herramienta →
              </Link>
            </div>

            {/* Right side active mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-[260px] md:w-[280px] aspect-[9/18.5] bg-[#020e1c] rounded-[38px] border-[6px] border-[#0e2a4a] shadow-2xl overflow-hidden transition-all duration-500">
                {/* Dynamically switched screen */}
                <Image
                  src={activeFeature.img}
                  alt={activeFeature.title}
                  fill
                  sizes="(max-width: 768px) 260px, 280px"
                  className="object-cover select-none animate-scaleIn"
                  key={activeTab} // triggers re-render animation when activeTab changes
                />
                
                {/* Phone Notch */}
                <div className="absolute top-2.5 left-1/2 -translate-x-1/2 w-24 h-4 bg-[#0e2a4a] rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 rounded-full bg-black/40 mr-10"></div>
                  <div className="w-1 h-1 rounded-full bg-[#1e3d5c]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SEO TOOL GUIDES */}
      <section className="bg-[#020e1c] py-16 px-6 border-b border-[#0e2a4a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-center max-w-2xl mx-auto">
            <div className="text-[11px] text-[#14b8a6] font-bold tracking-[2px] uppercase mb-2 font-sora">GUÍAS DE ANSIOFF</div>
            <h2 className="font-sora text-3xl font-semibold">Aprende a utilizar cada herramienta de calma</h2>
            <p className="text-sm text-[#8ab0cc] mt-4">Consulta guías prácticas sobre respiración para la ansiedad, diario emocional, sonidos relajantes y el Kit SOS.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {[
              { href: "/app-para-la-ansiedad", label: "App para la ansiedad", text: "Todas las herramientas de ANSIOFF en un solo lugar." },
              { href: "/respiracion-4-7-8", label: "Respiración 4-7-8", text: "Sigue el ritmo de inhalación, pausa y exhalación." },
              { href: "/respiracion-para-la-ansiedad", label: "Respiración para la ansiedad", text: "Ejercicios visuales para centrar la atención." },
              { href: "/diario-emocional", label: "Diario emocional", text: "Registra emociones, situaciones y pensamientos." },
              { href: "/sonidos-relajantes", label: "Sonidos relajantes", text: "Audios para acompañar pausas y concentración." },
              { href: "/kit-sos-ansiedad", label: "Kit SOS para la ansiedad", text: "Una guía paso a paso para momentos difíciles." },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="bg-[#04152b] border border-[#0e2a4a] rounded-xl p-5 hover:border-[#14b8a6]/40 transition-colors">
                <h3 className="font-sora text-sm font-semibold text-[#14b8a6]">{guide.label}</h3>
                <p className="text-xs leading-relaxed text-[#5a7a94] mt-2">{guide.text}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* HOW IT WORKS / BREATH SIMULATOR */}
      <section id="breathe" className="bg-[#030f1f] py-20 lg:py-28 px-6 border-b border-[#0e2a4a] relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#14b8a6]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-[11px] text-[#14b8a6] font-bold tracking-[2px] uppercase mb-2 font-sora">EJERCICIO DE RESPIRACIÓN PARA LA ANSIEDAD</div>
          <h2 className="font-sora text-3xl md:text-[38px] font-semibold mb-4">Prueba la respiración 4-7-8</h2>
          <p className="text-[15px] text-[#8ab0cc] max-w-xl mx-auto mb-12">
            Sigue el ritmo: inhala 4 segundos, mantén 7 y exhala 8. Una práctica guiada que puede ayudarte a bajar el ritmo en momentos de estrés.
          </p>

          <div className="bg-[#020e1c] border border-[#0e2a4a] rounded-[32px] p-8 md:p-12 max-w-[580px] mx-auto shadow-xl">
            {/* Dynamic Label & Instruction */}
            <div className="mb-8 min-h-[64px]">
              <div className="text-xs text-[#5a7a94] uppercase tracking-[1.5px] font-medium mb-1">
                {breatheState === "idle" ? "PASO DE INICIO" : "FASE ACTUAL"}
              </div>
              <h3 className="font-sora text-xl font-semibold text-[#e8f4ff] mb-1">
                {getBreatheLabel()}
              </h3>
              <p className="text-xs text-[#8ab0cc] leading-relaxed max-w-[360px] mx-auto">
                {getBreatheInstruction()}
              </p>
            </div>

            {/* Breathing Bubble Display */}
            <div className="flex items-center justify-center py-8">
              <div 
                className="w-36 h-36 rounded-full border-4 flex flex-col items-center justify-center relative transition-all"
                style={{
                  ...getBubbleStyle(),
                  transition: breatheState === "inhale" 
                    ? "transform 4000ms ease-in-out, border-color 1000ms, box-shadow 1000ms" 
                    : breatheState === "exhale" 
                    ? "transform 8000ms ease-in-out, border-color 1000ms, box-shadow 1000ms" 
                    : "transform 1000ms ease-in-out, border-color 1000ms, box-shadow 1000ms"
                }}
              >
                {/* Ring animation */}
                {breatheState !== "idle" && (
                  <div className={`absolute inset-0 rounded-full border-2 border-current opacity-20 ${
                    breatheState === "hold" ? "animate-ping" : "animate-none"
                  }`}></div>
                )}
                
                {breatheState !== "idle" ? (
                  <>
                    <span className="font-sora text-4xl font-bold text-[#e8f4ff]">
                      {timer}
                    </span>
                    <span className="text-[10px] text-[#5a7a94] mt-1 uppercase font-bold tracking-[1px]">
                      segundos
                    </span>
                  </>
                ) : (
                  <span className="text-3xl">🧘</span>
                )}
              </div>
            </div>

            {/* Controls */}
            <div className="mt-8">
              {breatheState === "idle" ? (
                <button
                  onClick={startBreathe}
                  className="bg-[#14b8a6] hover:bg-[#0d9488] text-[#020e1c] px-8 py-3 rounded-xl text-sm font-semibold transition-all shadow-md shadow-[#14b8a6]/10"
                >
                  Probar respiración 4-7-8
                </button>
              ) : (
                <button
                  onClick={stopBreathe}
                  className="border border-[#e11d48]/40 hover:border-[#e11d48] text-[#f87171] hover:text-[#f43f5e] px-8 py-3 rounded-xl text-sm font-semibold transition-all bg-[#e11d48]/5"
                >
                  Pausar Ejercicio
                </button>
              )}
            </div>
            
            {/* Scientific Explanation Info */}
            <div className="mt-8 pt-6 border-t border-[#0e2a4a] grid grid-cols-3 gap-3 text-center">
              <div>
                <div className="text-[10px] text-[#5a7a94] uppercase tracking-wider">Inhala</div>
                <div className="font-sora text-sm font-bold text-[#14b8a6] mt-0.5">4s</div>
              </div>
              <div className="border-x border-[#0e2a4a]">
                <div className="text-[10px] text-[#5a7a94] uppercase tracking-wider">Retén</div>
                <div className="font-sora text-sm font-bold text-[#3b8ee8] mt-0.5">7s</div>
              </div>
              <div>
                <div className="text-[10px] text-[#5a7a94] uppercase tracking-wider">Exhala</div>
                <div className="font-sora text-sm font-bold text-[#fb923c] mt-0.5">8s</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SCREENSHOTS SHOWCASE */}
      <section id="screens" className="bg-[#04152b] py-20 px-6 border-b border-[#0e2a4a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center max-w-xl mx-auto mb-16">
            <div className="text-[11px] text-[#14b8a6] font-bold tracking-[2px] uppercase mb-2 font-sora">Galería de Interfaz</div>
            <h2 className="font-sora text-3xl font-semibold mb-3">Así es ANSIOFF, tu app de calma en iPhone</h2>
            <p className="text-[14px] text-[#8ab0cc]">Explora el Kit SOS, los ejercicios de respiración, el diario emocional, los sonidos relajantes y el seguimiento de tu progreso.</p>
          </div>

          {/* Horizontal scroll container with beautiful mobile frames (no biofeedback mention, breathing becomes pure breathing guide) */}
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-[#0e2a4a] scrollbar-track-transparent snap-x">
            {[
              { src: "/app-screens/main.png", title: "Pantalla principal", desc: "Acceso a tus herramientas de bienestar" },
              { src: "/app-screens/sos.png", title: "Kit SOS para la ansiedad", desc: "Respiración y anclaje paso a paso" },
              { src: "/app-screens/breathing.png", title: "Respiración guiada", desc: "Ritmos visuales de inhalación y exhalación" },
              { src: "/app-screens/diary.png", title: "Diario emocional", desc: "Registro de emociones y notas diarias" },
              { src: "/app-screens/diary_ai.png", title: "Análisis del diario", desc: "Organiza temas y preguntas de reflexión" },
              { src: "/app-screens/sounds.png", title: "Sonidos relajantes", desc: "Paisajes sonoros para tus pausas" },
              { src: "/app-screens/modules.png", title: "Programas de bienestar", desc: "Ejercicios guiados de autocuidado" },
            ].map((scr, idx) => (
              <div key={idx} className="snap-start shrink-0 w-[240px] md:w-[270px]">
                <div className="bg-[#020e1c] border border-[#0e2a4a] rounded-[30px] p-3 shadow-lg hover:border-[#14b8a6]/30 transition-all group">
                  <div className="relative aspect-[9/18.5] rounded-[22px] overflow-hidden bg-black select-none">
                    <Image
                      src={scr.src}
                      alt={scr.title}
                      fill
                      sizes="(max-width: 768px) 216px, 246px"
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="mt-3 px-1.5 pb-1">
                    <h3 className="font-sora text-sm font-semibold text-[#e8f4ff]">{scr.title}</h3>
                    <p className="text-[11px] text-[#5a7a94] mt-0.5">{scr.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section id="faq" className="bg-[#030f1f] py-20 px-6 border-b border-[#0e2a4a]">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-14">
            <div className="text-[11px] text-[#14b8a6] font-bold tracking-[2px] uppercase mb-2 font-sora">Soporte y dudas</div>
            <h2 className="font-sora text-3xl font-semibold mb-3">Preguntas Frecuentes</h2>
            <p className="text-[14px] text-[#8ab0cc]">Resolvemos las dudas más frecuentes sobre la app para la ansiedad, el Kit SOS, la respiración 4-7-8 y el diario emocional.</p>
          </div>

          <div className="space-y-3">
            {faqItems.map((item, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div key={idx} className="bg-[#020e1c] border border-[#0e2a4a] rounded-xl overflow-hidden transition-all duration-300">
                  <button
                    onClick={() => toggleFaq(idx)}
                    className="w-full flex items-center justify-between p-5 text-left font-medium text-sm text-[#e8f4ff] hover:bg-[#04152b] transition-colors"
                  >
                    <span className="font-sora">{item.q}</span>
                    <span className={`text-lg text-[#14b8a6] transition-transform duration-300 ${isOpen ? "rotate-45" : "rotate-0"}`}>
                      +
                    </span>
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-5 pt-1 text-xs text-[#8ab0cc] leading-relaxed border-t border-[#0e2a4a]/40 bg-[#04152b]/10 animate-fadeIn">
                      {item.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* DOWNLOAD SECTION (CTA) - Google Play & APK completely removed */}
      <section id="download" className="bg-[#04152b] py-20 lg:py-28 px-6 text-center relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#14b8a6]/5 blur-[140px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          <div className="inline-block bg-[#0f2e2a] text-[#14b8a6] text-[11px] font-bold px-4.5 py-1.5 rounded-full mb-6 border border-[#14b8a6]/20 tracking-[1.5px] uppercase font-sora">
            DESCARGA LA APP PARA LA ANSIEDAD
          </div>
          <h2 className="font-sora text-3xl md:text-5xl font-semibold mb-6 max-w-2xl mx-auto leading-tight">
            Lleva ejercicios de respiración y calma en tu iPhone
          </h2>
          <p className="text-lg text-[#8ab0cc] mb-12 max-w-xl mx-auto leading-relaxed">
            Descarga ANSIOFF y accede al Kit SOS, la respiración guiada, el diario emocional y los sonidos relajantes desde un solo lugar.
          </p>

          <div className="max-w-md mx-auto bg-[#020e1c] border border-[#0e2a4a] p-8 rounded-[32px]">
            {/* App Store Link */}
            <div className="flex flex-col items-center text-center w-full">
              <span className="text-4xl mb-4">📱</span>
              <h3 className="font-sora text-lg font-semibold text-[#e8f4ff] mb-2">Descargar para iOS</h3>
              <p className="text-sm text-[#8ab0cc] mb-6 max-w-[280px]">Haz clic en el enlace inferior para ir directamente a la App Store y descargar ANSIOFF en tu iPhone.</p>
              
              <AppStoreLink
                placement="home_final_cta"
                className="px-8 py-3.5 rounded-xl bg-[#14b8a6] hover:bg-[#0d9488] text-[#020e1c] text-sm font-bold transition-all flex items-center justify-center gap-2"
              >
                <span></span> Descargar ANSIOFF para iPhone
              </AppStoreLink>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020e1c] py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#0e2a4a]">
        <div className="font-sora text-[15px] text-[#5a7a94]">
          ANSI<span className="text-[#14b8a6]">OFF</span> Personal
        </div>
        <div className="text-[12px] text-[#2d4a61] flex flex-wrap justify-center gap-4">
          <span>© 2026 ANSIOFF</span>
          <Link href="/privacy" className="hover:text-[#5a7a94]">Política de privacidad</Link>
          <Link href="/legal" className="hover:text-[#5a7a94]">Aviso legal</Link>
          <Link href="/terms" className="hover:text-[#5a7a94]">Términos de servicio</Link>
        </div>
      </footer>
    </div>
  );
}
