"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function AnsioffBusinessLanding() {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    employees: "",
    hp: "",
  });

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/demo", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        router.push("/success");
      } else {
        alert("Hubo un error al enviar la solicitud. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error(error);
      alert("Error de conexión. Revisa tu internet.");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="bg-[#020e1c] text-[#e8f4ff] font-sans leading-relaxed selection:bg-[#3b8ee8]/30 min-h-screen">
      {/* NAV */}
      <nav className="flex items-center justify-between px-6 md:px-12 py-4 bg-[#04152b] border-b border-[#0e2a4a] sticky top-0 z-[100]">
        <div className="flex items-center gap-4">
          <Link href="/" className="font-sora text-lg font-semibold tracking-tight hover:opacity-90">
            ANSI<span className="text-[#3b8ee8]">OFF</span>
          </Link>
          
          {/* Segment Toggle */}
          <div className="flex bg-[#020e1c] rounded-full p-0.5 border border-[#0e2a4a] text-[11px] font-medium">
            <Link 
              href="/" 
              className="px-2.5 py-0.5 rounded-full text-[#8ab0cc] hover:text-[#e8f4ff] transition-colors"
            >
              Para ti
            </Link>
            <span 
              className="px-2.5 py-0.5 rounded-full bg-[#185FA5] text-[#e6f1fb] font-semibold"
            >
              Business
            </span>
          </div>
        </div>
        <ul className="hidden md:flex items-center gap-8 text-sm text-[#8ab0cc]">
          <li><button onClick={() => scrollTo('plataforma')} className="hover:text-[#e8f4ff] transition-colors">Plataforma</button></li>
          <li><button onClick={() => scrollTo('modulos')} className="hover:text-[#e8f4ff] transition-colors">Módulos</button></li>
          <li><button onClick={() => scrollTo('pricing')} className="hover:text-[#e8f4ff] transition-colors">Pricing</button></li>
          <li><button onClick={() => scrollTo('demo')} className="hover:text-[#e8f4ff] transition-colors">Contacto</button></li>
        </ul>
        <button 
          onClick={() => scrollTo('demo')}
          className="bg-[#185FA5] hover:bg-[#3b8ee8] text-[#e6f1fb] px-5 py-2 rounded-lg text-sm font-medium transition-colors"
        >
          Solicitar demo
        </button>
      </nav>

      {/* HERO */}
      <section className="bg-[#04152b] py-24 px-6 text-center border-b border-[#0e2a4a] relative overflow-hidden">
        {/* Background glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#3b8ee8]/5 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="relative z-10">
          <div className="inline-block bg-[#0c2d4e] text-[#85b7eb] text-[11px] font-medium px-4 py-1.5 rounded-full mb-6 border border-[#185FA5] tracking-[0.8px] font-sora">
            SALUD MENTAL CORPORATIVA · PLATAFORMA CLÍNICA
          </div>
          <h1 className="font-sora text-4xl md:text-5xl lg:text-[48px] font-semibold leading-[1.15] max-w-[680px] mx-auto mb-5">
            Convierte el bienestar mental en <span className="text-[#3b8ee8]">productividad medible</span>
          </h1>
          <p className="text-lg text-[#8ab0cc] max-w-[520px] mx-auto mb-10 leading-[1.65]">
            La única plataforma que combina terapia clínica real para empleados con un dashboard de ROI para RRHH. Datos, no promesas.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => scrollTo('demo')}
              className="bg-[#185FA5] hover:bg-[#3b8ee8] text-[#e6f1fb] px-8 py-3.5 rounded-xl text-[15px] font-medium transition-all hover:-translate-y-0.5"
            >
              Solicitar demo gratuita
            </button>
            <button 
              onClick={() => scrollTo('plataforma')}
              className="bg-transparent border border-[#1e3d5c] hover:border-[#185FA5] text-[#8ab0cc] hover:text-[#e8f4ff] px-8 py-3.5 rounded-xl text-[15px] transition-colors"
            >
              Ver la plataforma
            </button>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-[#020e1c] border-b border-[#0e2a4a]">
        {[
          { n: "€3.200", l: "Coste anual por empleado con ansiedad no tratada" },
          { n: "23%", l: "Empleados con estrés crónico en España (2024)" },
          { n: "92%", l: "Eficacia operativa media en empresas ANSIOFF" },
          { n: "NOM-035", l: "Cumplimiento normativo incluido en todos los planes" },
        ].map((s, i) => (
          <div key={i} className="p-8 text-center border-r border-[#0e2a4a] last:border-r-0">
            <div className="font-sora text-3xl font-semibold text-[#3b8ee8]">{s.n}</div>
            <div className="text-xs text-[#5a7a94] mt-1.5 leading-relaxed">{s.l}</div>
          </div>
        ))}
      </div>

      {/* PLATAFORMA */}
      <section id="plataforma" className="bg-[#04152b] py-20 px-6 border-b border-[#0e2a4a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] text-[#3b8ee8] font-bold tracking-[2px] uppercase mb-2 font-sora">La plataforma</div>
          <h2 className="font-sora text-3xl md:text-[34px] font-semibold mb-2">Dos capas. Un solo sistema.</h2>
          <p className="text-[15px] text-[#5a7a94] mb-12">El empleado trabaja su salud mental. La empresa ve el impacto.</p>
          
          <div className="grid md:grid-cols-2 gap-5">
            {/* EMPLEADO */}
            <div className="bg-[#04152b] border border-[#0e2a4a] rounded-2xl p-8">
              <span className="bg-[#0c2d4e] text-[#85b7eb] text-[10px] font-bold px-2.5 py-1 rounded border border-[#185FA5] tracking-[0.5px]">EMPLEADO</span>
              <h3 className="font-sora text-base font-semibold mt-3 mb-1.5">Portal personal de bienestar</h3>
              <p className="text-[13px] text-[#5a7a94] mb-4">App propia con acceso a módulos clínicos, planificador y respiración guiada en tiempo real.</p>
              
              <div className="bg-[#020e1c] rounded-xl p-5 mt-4">
                <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#3b8ee8] mb-3">BIENESTAR MENTAL</div>
                <div className="font-sora text-[26px] font-semibold">8.4 <span className="text-[13px] text-[#97c459] ml-1">+2.1%</span></div>
                <div className="h-1.5 bg-[#0e2a4a] rounded-full mt-2.5 mb-4 overflow-hidden">
                  <div className="h-full bg-[#185FA5] w-[84%]"></div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#04152b] rounded-lg p-3">
                    <div className="text-[10px] text-[#5a7a94] uppercase">RACHA ACTIVA</div>
                    <div className="font-sora text-lg font-semibold mt-0.5">7 días</div>
                  </div>
                  <div className="bg-[#04152b] rounded-lg p-3">
                    <div className="text-[10px] text-[#5a7a94] uppercase">RIESGO BURNOUT</div>
                    <div className="font-sora text-sm font-semibold mt-0.5 text-[#97c459]">Muy bajo</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RRHH */}
            <div className="bg-[#04152b] border border-[#0e2a4a] rounded-2xl p-8">
              <span className="bg-[#1f1200] text-[#ef9f27] text-[10px] font-bold px-2.5 py-1 rounded border border-[#854f0b] tracking-[0.5px]">RRHH / ADMIN</span>
              <h3 className="font-sora text-base font-semibold mt-3 mb-1.5">Dashboard de inteligencia corporativa</h3>
              <p className="text-[13px] text-[#5a7a94] mb-4">ROI financiero, heatmap de estrés, métricas de adopción por equipo y sede.</p>
              
              <div className="bg-[#020e1c] rounded-xl p-5 mt-4">
                <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#ef9f27] mb-3">CORPORATE INTELLIGENCE</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#04152b] rounded-lg p-3">
                    <div className="font-sora text-[22px] font-semibold text-[#3b8ee8]">1</div>
                    <div className="text-[10px] text-[#5a7a94]">Empresas activas</div>
                  </div>
                  <div className="bg-[#04152b] rounded-lg p-3">
                    <div className="font-sora text-[22px] font-semibold text-[#3b8ee8]">92.4%</div>
                    <div className="text-[10px] text-[#5a7a94]">Eficacia operativa</div>
                  </div>
                </div>
                <div className="text-[10px] text-[#5a7a94] mt-3 mb-1.5">STRESS PEAKS · HOY</div>
                <div className="grid grid-cols-5 gap-1">
                  {[0.1, 0.3, 0.5, 0.3, 0.1, 0.2, 0.8, 0.5, 0.3, 0.1].map((v, i) => (
                    <div key={i} className="h-5 rounded-[3px]" style={{ backgroundColor: i === 6 ? '#3b8ee8' : i === 2 || i === 7 ? '#185FA5' : i === 1 || i === 3 || i === 8 ? '#0c2d4e' : '#04152b' }}></div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MODULOS (Biofeedback replaced with Respiración) */}
      <section id="modulos" className="bg-[#030f1f] py-20 px-6 border-b border-[#0e2a4a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] text-[#3b8ee8] font-bold tracking-[2px] uppercase mb-2 font-sora">Módulos clínicos</div>
          <h2 className="font-sora text-3xl md:text-[34px] font-semibold mb-2">No es meditación. Es terapia.</h2>
          <p className="text-[15px] text-[#5a7a94] mb-12">9 módulos basados en protocolos clínicos reales, no en contenido de bienestar genérico.</p>
          
          <div className="grid md:grid-cols-3 gap-3.5">
            {[
              { name: "Pensamientos", desc: "Reestructuración cognitiva", tag: "CBT" },
              { name: "Flexibilidad psicológica", desc: "Aceptación y compromiso", tag: "ACT" },
              { name: "Respiración 4-7-8", desc: "Relajación diafragmática asistida", tag: "BREATHE" },
              { name: "Audio neuro-acústico", desc: "Frecuencias Alpha y binaural", tag: "SOUND" },
              { name: "Deep Work", desc: "Concentración profunda", tag: "FOCUS" },
              { name: "Diario IA", desc: "Escritura terapéutica consciente", tag: "JOURNAL" },
              { name: "Prevención burnout", desc: "Detección temprana algorítmica", tag: "RISK", tagColor: "#f09575", tagBorder: "#993c1d", tagBg: "#1f0800" },
              { name: "Conciliación", desc: "Equilibrio vida-trabajo", tag: "LIFE" },
              { name: "Canal ético", desc: "Reporte anónimo y seguro", tag: "COMP" },
            ].map((m, i) => (
              <div key={i} className="bg-[#020e1c] border border-[#0e2a4a] rounded-xl p-5 flex flex-col justify-between min-h-[100px]">
                <div className="flex justify-between items-start mb-2">
                  <div>
                    <div className="text-sm font-medium text-[#c8dff0]">{m.name}</div>
                    <div className="text-[12px] text-[#5a7a94]">{m.desc}</div>
                  </div>
                  <span 
                    className="text-[10px] font-bold px-2 py-0.5 rounded border tracking-[0.5px]"
                    style={{ 
                      color: m.tagColor || '#85b7eb', 
                      borderColor: m.tagBorder || '#185FA5', 
                      backgroundColor: m.tagBg || '#0c2d4e' 
                    }}
                  >
                    {m.tag}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-[#030f1f] py-20 px-6 border-b border-[#0e2a4a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] text-[#3b8ee8] font-bold tracking-[2px] uppercase mb-2 font-sora">Pricing</div>
          <h2 className="font-sora text-3xl md:text-[34px] font-semibold mb-2">Precio por empleado/mes.</h2>
          <p className="text-[15px] text-[#5a7a94] mb-12">Cuanto más crece tu equipo, menos pagas. Sin permanencia. Alta en 24h.</p>
          
          <div className="grid md:grid-cols-3 gap-5">
            {/* STARTER */}
            <div className="bg-[#030f1f] border border-[#0e2a4a] rounded-2xl p-8 flex flex-col">
              <div className="font-sora text-sm font-semibold">Starter</div>
              <div className="text-[12px] text-[#5a7a94] mt-0.5">1 – 10 empleados</div>
              <div className="font-sora text-4xl font-semibold text-[#3b8ee8] mt-3 mb-0.5">9,99€ <span className="text-base text-[#5a7a94] font-normal">/ emp · mes</span></div>
              <div className="bg-[#0c2d4e] text-[#85b7eb] text-[12px] rounded-lg py-2.5 px-3 text-center mt-4 mb-4 font-medium">
                Ejemplo: 10 empleados = <span className="font-bold">99,90€/mes</span>
              </div>
              <hr className="border-[#0e2a4a] my-4" />
              <div className="space-y-2.5 mb-8">
                {["9 módulos clínicos completos", "Respiración 4-7-8 guiada", "Dashboard RRHH", "Informe mensual", "Soporte email"].map((f, i) => (
                  <div key={i} className="text-[13px] text-[#8ab0cc] flex gap-2">
                    <span className="text-[#3b8ee8]">·</span> {f}
                  </div>
                ))}
              </div>
              <button onClick={() => scrollTo('demo')} className="w-full mt-auto py-3 rounded-lg text-sm font-medium border border-[#0e2a4a] text-[#8ab0cc] hover:border-[#3b8ee8] hover:text-[#e8f4ff] transition-all">
                Solicitar demo
              </button>
            </div>

            {/* GROWTH */}
            <div className="bg-[#030f1f] border-2 border-[#185FA5] rounded-2xl p-8 flex flex-col relative overflow-hidden">
              <div className="flex justify-between items-start">
                <div className="font-sora text-sm font-semibold">Growth</div>
                <span className="bg-[#0c2d4e] text-[#85b7eb] text-[10px] font-bold px-2 py-0.5 rounded border border-[#185FA5]">MÁS POPULAR</span>
              </div>
              <div className="text-[12px] text-[#5a7a94] mt-0.5">10 – 50 empleados</div>
              <div className="font-sora text-4xl font-semibold text-[#3b8ee8] mt-3 mb-0.5">5,99€ <span className="text-base text-[#5a7a94] font-normal">/ emp · mes</span></div>
              <div className="bg-[#0c2d4e] text-[#85b7eb] text-[12px] rounded-lg py-2.5 px-3 text-center mt-4 mb-4 font-medium">
                Ejemplo: 30 empleados = <span className="font-bold">179,70€/mes</span>
              </div>
              <hr className="border-[#0e2a4a] my-4" />
              <div className="space-y-2.5 mb-8">
                {["Todo lo de Starter", "ROI financiero en tiempo real", "Heatmap de estrés predictivo", "Canal ético + NOM-035", "Focus League por equipos", "Soporte prioritario"].map((f, i) => (
                  <div key={i} className="text-[13px] text-[#8ab0cc] flex gap-2">
                    <span className="text-[#3b8ee8]">·</span> {f}
                  </div>
                ))}
              </div>
              <button onClick={() => scrollTo('demo')} className="w-full mt-auto py-3 rounded-lg text-sm font-medium bg-[#185FA5] text-[#e6f1fb] hover:bg-[#3b8ee8] transition-all">
                Solicitar demo
              </button>
            </div>

            {/* ENTERPRISE */}
            <div className="bg-[#030f1f] border border-[#0e2a4a] rounded-2xl p-8 flex flex-col">
              <div className="font-sora text-sm font-semibold">Enterprise</div>
              <div className="text-[12px] text-[#5a7a94] mt-0.5">+50 empleados</div>
              <div className="font-sora text-4xl font-semibold text-[#3b8ee8] mt-3 mb-0.5">3,99€ <span className="text-base text-[#5a7a94] font-normal">/ emp · mes</span></div>
              <div className="bg-[#0a1f0f] text-[#97c459] text-[12px] rounded-lg py-2.5 px-3 text-center mt-4 mb-4 font-medium">
                Ejemplo: 100 empleados = <span className="font-bold">399€/mes</span>
              </div>
              <hr className="border-[#0e2a4a] my-4" />
              <div className="space-y-2.5 mb-8">
                {["Todo lo de Growth", "Multi-sede y multi-empresa", "SSO + integración HRIS", "Panel Maestro global", "SLA dedicado"].map((f, i) => (
                  <div key={i} className="text-[13px] text-[#8ab0cc] flex gap-2">
                    <span className="text-[#3b8ee8]">·</span> {f}
                  </div>
                ))}
              </div>
              <button onClick={() => scrollTo('demo')} className="w-full mt-auto py-3 rounded-lg text-sm font-medium border border-[#0e2a4a] text-[#8ab0cc] hover:border-[#3b8ee8] hover:text-[#e8f4ff] transition-all">
                Contactar
              </button>
            </div>
          </div>
          <p className="text-center mt-8 text-[13px] text-[#2d4a61]">Todos los planes incluyen onboarding gratuito · Cancela cuando quieras · Sin costes ocultos</p>
        </div>
      </section>

      {/* DEMO / CONTACT */}
      <section id="demo" className="bg-[#04152b] py-20 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <div className="text-[11px] text-[#3b8ee8] font-bold tracking-[2px] uppercase mb-2 font-sora">Demo</div>
          <h2 className="font-sora text-3xl md:text-[34px] font-semibold mb-2">¿Listo para verlo en acción?</h2>
          <p className="text-[15px] text-[#5a7a94] mb-10">Te mostramos la plataforma completa adaptada a tu empresa. Sin compromiso.</p>
          
          <form onSubmit={handleSubmit} className="bg-[#020e1c] border border-[#0e2a4a] rounded-2xl p-10 max-w-[560px] mx-auto text-left">
            {/* Honeypot field - Invisible for humans */}
            <div style={{ display: 'none' }} aria-hidden="true">
              <input 
                type="text" 
                name="hp"
                value={formData.hp}
                onChange={handleChange}
                tabIndex={-1}
                autoComplete="off"
              />
            </div>

            <div className="grid md:grid-cols-2 gap-3 mb-3">
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Nombre" 
                className="bg-[#04152b] border border-[#0e2a4a] rounded-lg px-3.5 py-3 text-sm text-[#c8dff0] focus:border-[#185FA5] outline-none w-full" 
              />
              <input 
                type="text" 
                name="company"
                value={formData.company}
                onChange={handleChange}
                required
                placeholder="Empresa" 
                className="bg-[#04152b] border border-[#0e2a4a] rounded-lg px-3.5 py-3 text-sm text-[#c8dff0] focus:border-[#185FA5] outline-none w-full" 
              />
            </div>
            <div className="grid md:grid-cols-2 gap-3 mb-3">
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="Email corporativo" 
                className="bg-[#04152b] border border-[#0e2a4a] rounded-lg px-3.5 py-3 text-sm text-[#c8dff0] focus:border-[#185FA5] outline-none w-full" 
              />
              <input 
                type="number" 
                name="employees"
                value={formData.employees}
                onChange={handleChange}
                required
                placeholder="Nº empleados" 
                className="bg-[#04152b] border border-[#0e2a4a] rounded-lg px-3.5 py-3 text-sm text-[#c8dff0] focus:border-[#185FA5] outline-none w-full" 
              />
            </div>
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#185FA5] hover:bg-[#3b8ee8] text-[#e6f1fb] py-3.5 rounded-xl text-[15px] font-medium transition-all mt-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? "Enviando..." : "Solicitar demo gratuita"}
            </button>
            <p className="text-[12px] text-[#2d4a61] text-center mt-3">Respuesta en menos de 24h · Sin compromiso · Tus datos están protegidos bajo GDPR</p>
          </form>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#020e1c] py-8 px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-4 border-t border-[#0e2a4a]">
        <div className="font-sora text-[15px] text-[#2d4a61]">ANSIOFF Business</div>
        <div className="text-[12px] text-[#2d4a61] flex flex-wrap justify-center gap-4">
          <span>© 2026 ANSIOFF</span>
          <a href="#" className="hover:text-[#5a7a94]">Política de privacidad</a>
          <a href="#" className="hover:text-[#5a7a94]">Aviso legal</a>
          <a href="#" className="hover:text-[#5a7a94]">GDPR</a>
        </div>
      </footer>
    </div>
  );
}
