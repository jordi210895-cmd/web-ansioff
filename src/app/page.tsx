"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";

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
}

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
      subtitle: "Alivio de pánico en tiempo real",
      badge: "CBT / TERAPIA",
      badgeBg: "bg-[#2a0e0e]",
      badgeText: "text-[#f87171]",
      badgeBorder: "border-[#ef4444]/30",
      desc: "Cuando sientas que pierdes el control, pulsa el botón de emergencia. La app te guiará con técnicas de desescalada clínica, respiración asistida y anclaje sensorial en menos de 3 minutos.",
      img: "/app-screens/sos.png",
    },
    {
      id: "diario",
      title: "Diario Inteligente IA",
      subtitle: "Detecta tus distorsiones cognitivas",
      badge: "IA CLÍNICA",
      badgeBg: "bg-[#1e1b4b]",
      badgeText: "text-[#a78bfa]",
      badgeBorder: "border-[#8b5cf6]/30",
      desc: "Escribe libremente sobre tu día o tus miedos. Nuestra IA clínica analizará tu escritura de forma 100% privada para señalar patrones de pensamiento nocivos (como la catastrofización) y sugerir reframings.",
      img: "/app-screens/diary_ai.png",
    },
    {
      id: "audios",
      title: "Sonido Neuroacústico",
      subtitle: "Frecuencias binaurales y Alpha",
      badge: "NEUROESTIMULACIÓN",
      badgeBg: "bg-[#0c2e4e]",
      badgeText: "text-[#60a5fa]",
      badgeBorder: "border-[#3b82f6]/30",
      desc: "Escucha paisajes sonoros diseñados científicamente con ondas binaurales y frecuencias Alpha. Ideados para calmar el ritmo cerebral sobreexcitado y inducir estados de relajación profunda o concentración.",
      img: "/app-screens/sounds.png",
    },
    {
      id: "programas",
      title: "Programas de Terapia",
      subtitle: "Módulos de base científica",
      badge: "CBT / ACT",
      badgeBg: "bg-[#2e1d0f]",
      badgeText: "text-[#fb923c]",
      badgeBorder: "border-[#f97316]/30",
      desc: "Aprende herramientas duraderas con lecciones guiadas basadas en Terapia Cognitivo-Conductual (CBT) y de Aceptación y Compromiso (ACT). Creadas por psicólogos clínicos especializados en ansiedad.",
      img: "/app-screens/modules.png",
    },
  ];

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
      default: return "Haz clic abajo para iniciar el simulador de respiración clínica 4-7-8.";
    }
  };

  return (
    <div className="bg-[#020e1c] text-[#e8f4ff] font-sans leading-relaxed selection:bg-[#14b8a6]/30 min-h-screen">
      
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
              ANSIOFF DISPONIBLE EN IOS (IPHONE)
            </div>
            <h1 className="font-sora text-4xl md:text-5xl lg:text-[54px] font-semibold leading-[1.1] mb-6">
              Retoma el control. Di adiós a la <span className="text-[#14b8a6] drop-shadow-[0_0_15px_rgba(20,184,166,0.3)]">ansiedad</span>.
            </h1>
            <p className="text-lg text-[#8ab0cc] mb-10 leading-[1.65] max-w-[580px]">
              Tu compañero clínico de bolsillo diseñado para aliviar la ansiedad, el estrés y los ataques de pánico en minutos. Terapia de base científica y herramientas prácticas siempre contigo.
            </p>
            
            {/* Download Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-6">
              <div className="flex flex-col gap-3">
                <a 
                  href="#download" 
                  onClick={(e) => { e.preventDefault(); scrollTo('download'); }}
                  className="bg-[#14b8a6] hover:bg-[#0d9488] text-[#020e1c] px-8 py-3.5 rounded-xl text-[15px] font-semibold transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2.5"
                >
                  <span></span>
                  Ver en App Store
                </a>
                
                <div className="flex items-center justify-center sm:justify-start gap-4 mt-1.5">
                  <span className="text-xs text-[#5a7a94] flex items-center gap-1">
                    Disponible exclusivamente en iOS (App Store)
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
              <img 
                src="/app-screens/main.png" 
                alt="Pantalla Principal ANSIOFF" 
                className="w-full h-full object-cover select-none"
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
              <div className="font-sora text-sm font-semibold text-[#e8f4ff]">Alivio rápido</div>
              <div className="text-[10px] text-[#5a7a94] mt-0.5">Calma en menos de 3 minutos</div>
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
          { n: "-42%", l: "Reducción media de ansiedad en 2 semanas" },
          { n: "9 / 10", l: "Usuarios reportan alivio inmediato con botón SOS" },
          { n: "CBT + ACT", l: "Metodologías clínicas acreditadas y probadas" },
          { n: "AES-256", l: "Encriptación de grado militar. Privacidad total." },
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
            <div className="text-[11px] text-[#14b8a6] font-bold tracking-[2px] uppercase mb-2 font-sora">Herramientas Clínicas</div>
            <h2 className="font-sora text-3xl md:text-[38px] font-semibold mb-4">Todo lo que necesitas para calmar tu mente</h2>
            <p className="text-[15px] text-[#8ab0cc]">Explora las potentes funcionalidades de la app, creadas bajo protocolos médicos reales para entrenar tu bienestar diario.</p>
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
            </div>

            {/* Right side active mockup */}
            <div className="lg:col-span-5 flex justify-center">
              <div className="relative w-[260px] md:w-[280px] aspect-[9/18.5] bg-[#020e1c] rounded-[38px] border-[6px] border-[#0e2a4a] shadow-2xl overflow-hidden transition-all duration-500">
                {/* Dynamically switched screen */}
                <img
                  src={features.find(f => f.id === activeTab)?.img}
                  alt={features.find(f => f.id === activeTab)?.title}
                  className="w-full h-full object-cover select-none animate-scaleIn"
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

      {/* HOW IT WORKS / BREATH SIMULATOR */}
      <section id="breathe" className="bg-[#030f1f] py-20 lg:py-28 px-6 border-b border-[#0e2a4a] relative overflow-hidden">
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-[#14b8a6]/5 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          <div className="text-[11px] text-[#14b8a6] font-bold tracking-[2px] uppercase mb-2 font-sora">Simulador de calma</div>
          <h2 className="font-sora text-3xl md:text-[38px] font-semibold mb-4">El Ritmo de Respiración 4-7-8</h2>
          <p className="text-[15px] text-[#8ab0cc] max-w-xl mx-auto mb-12">
            La respiración guiada de base clínica reduce instantáneamente el estrés físico. Prueba nuestro simulador interactivo.
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
                  Empezar Ejercicio
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
            <h2 className="font-sora text-3xl font-semibold mb-3">Diseño premium enfocado en la calma</h2>
            <p className="text-[14px] text-[#8ab0cc]">Una interfaz de tonos oscuros y orgánicos diseñada minuciosamente para evitar la sobreestimulación visual y facilitar el uso bajo ansiedad severa.</p>
          </div>

          {/* Horizontal scroll container with beautiful mobile frames (no biofeedback mention, breathing becomes pure breathing guide) */}
          <div className="flex gap-6 overflow-x-auto pb-8 scrollbar-thin scrollbar-thumb-[#0e2a4a] scrollbar-track-transparent snap-x">
            {[
              { src: "/app-screens/main.png", title: "Pantalla Principal", desc: "Monitoreo del estado mental diario" },
              { src: "/app-screens/sos.png", title: "Botón de Pánico SOS", desc: "Técnicas de calma clínica inmediatas" },
              { src: "/app-screens/breathing.png", title: "Entrenamiento de Respiración", desc: "Guías dinámicas de inhalación y exhalación" },
              { src: "/app-screens/diary.png", title: "Historial de Diarios", desc: "Tus pensamientos y evolución diaria" },
              { src: "/app-screens/diary_ai.png", title: "Análisis IA", desc: "Búsqueda automatizada de distorsiones" },
              { src: "/app-screens/sounds.png", title: "Neuro-acústica", desc: "Paisajes de audio binaural y Alpha" },
              { src: "/app-screens/modules.png", title: "Módulos de Terapia", desc: "Cursos de CBT y ACT paso a paso" },
            ].map((scr, idx) => (
              <div key={idx} className="snap-start shrink-0 w-[240px] md:w-[270px]">
                <div className="bg-[#020e1c] border border-[#0e2a4a] rounded-[30px] p-3 shadow-lg hover:border-[#14b8a6]/30 transition-all group">
                  <div className="relative aspect-[9/18.5] rounded-[22px] overflow-hidden bg-black select-none">
                    <img
                      src={scr.src}
                      alt={scr.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
            <p className="text-[14px] text-[#8ab0cc]">Si tienes cualquier otra pregunta sobre el funcionamiento clínico o técnico, estamos aquí para ayudarte.</p>
          </div>

          <div className="space-y-3">
            {[
              {
                q: "¿Sustituye la app a un tratamiento psicológico real?",
                a: "No. ANSIOFF es un asistente y complemento digital basado en protocolos de Terapia Cognitivo-Conductual (CBT). Sirve como una herramienta de apoyo en tu día a día o de co-ayuda junto a tu terapia convencional, pero nunca debe sustituir el diagnóstico o tratamiento de un profesional de la salud mental."
              },
              {
                q: "¿Son privadas mis anotaciones en el Diario Inteligente de IA?",
                a: "Absolutamente. La privacidad es nuestro pilar fundamental. Todos tus datos clínicos y anotaciones escritas se encriptan con algoritmos AES-256 antes de guardarse. La IA procesa la información de forma totalmente anónima, y tus diarios nunca serán compartidos ni leídos por nadie."
              },
              {
                q: "¿Cómo funciona el acceso y la suscripción a la aplicación?",
                a: "ANSIOFF es una aplicación premium de salud mental. Para garantizar la máxima calidad clínica, la ausencia absoluta de publicidad o patrocinio comercial, y la total privacidad de tus datos clínicos, el acceso ilimitado a nuestros programas de terapia, audios neuroacústicos y análisis de Diario IA requiere una suscripción activa."
              },
              {
                q: "¿Está disponible la aplicación en Android?",
                a: "En la actualidad, ANSIOFF está disponible de manera exclusiva para dispositivos iOS a través de la App Store de Apple, donde ha sido optimizada para ofrecer el mejor rendimiento clínico y de experiencia de usuario."
              }
            ].map((item, idx) => {
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
            Comienza tu camino hoy
          </div>
          <h2 className="font-sora text-3xl md:text-5xl font-semibold mb-6 max-w-2xl mx-auto leading-tight">
            Descubre la tranquilidad de tener el control en tu iPhone
          </h2>
          <p className="text-lg text-[#8ab0cc] mb-12 max-w-xl mx-auto leading-relaxed">
            Consigue la aplicación en tu iPhone e inicia tus programas clínicos para recuperar la tranquilidad.
          </p>

          <div className="max-w-md mx-auto bg-[#020e1c] border border-[#0e2a4a] p-8 rounded-[32px]">
            {/* App Store Link */}
            <div className="flex flex-col items-center text-center w-full">
              <span className="text-4xl mb-4">📱</span>
              <h3 className="font-sora text-lg font-semibold text-[#e8f4ff] mb-2">Descargar para iOS</h3>
              <p className="text-sm text-[#8ab0cc] mb-6 max-w-[280px]">Haz clic en el enlace inferior para ir directamente a la App Store y descargar ANSIOFF en tu iPhone.</p>
              
              <a 
                href="https://apps.apple.com/app/ansioff"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 rounded-xl bg-[#14b8a6] hover:bg-[#0d9488] text-[#020e1c] text-sm font-bold transition-all flex items-center justify-center gap-2"
              >
                <span></span> Ir a la App Store
              </a>
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
          <a href="#" className="hover:text-[#5a7a94]">Política de privacidad</a>
          <a href="#" className="hover:text-[#5a7a94]">Aviso legal</a>
          <a href="#" className="hover:text-[#5a7a94]">Términos de servicio</a>
        </div>
      </footer>
    </div>
  );
}
