"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import SiteFooter from "@/components/site-footer";

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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            name: "ANSIOFF Business",
            serviceType: "Plataforma de bienestar laboral para empresas",
            provider: {
              "@type": "Organization",
              name: "ANSIOFF",
              url: "https://ansioff.com",
            },
            areaServed: {
              "@type": "Country",
              name: "España",
            },
            url: "https://ansioff.com/business",
            description:
              "Plataforma de salud mental en el trabajo con recursos para empleados y métricas agregadas para RRHH.",
          }),
        }}
      />
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
            PLATAFORMA DE BIENESTAR LABORAL PARA EMPRESAS
          </div>
          <h1 className="font-sora text-4xl md:text-5xl lg:text-[48px] font-semibold leading-[1.15] max-w-[680px] mx-auto mb-5">
            Salud mental en el trabajo con <span className="text-[#3b8ee8]">herramientas para empleados y datos para RRHH</span>
          </h1>
          <p className="text-lg text-[#8ab0cc] max-w-[520px] mx-auto mb-10 leading-[1.65]">
            ANSIOFF reúne una app de bienestar emocional para el equipo y un panel con métricas agregadas para RRHH. Detecta tendencias, impulsa la adopción y apoya una estrategia de bienestar laboral medible.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <button 
              onClick={() => scrollTo('demo')}
              className="bg-[#185FA5] hover:bg-[#3b8ee8] text-[#e6f1fb] px-8 py-3.5 rounded-xl text-[15px] font-medium transition-all hover:-translate-y-0.5"
            >
              Solicitar una demo para mi empresa
            </button>
            <button 
              onClick={() => scrollTo('plataforma')}
              className="bg-transparent border border-[#1e3d5c] hover:border-[#185FA5] text-[#8ab0cc] hover:text-[#e8f4ff] px-8 py-3.5 rounded-xl text-[15px] transition-colors"
            >
              Ver cómo funciona ANSIOFF
            </button>
          </div>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="grid grid-cols-2 md:grid-cols-4 bg-[#020e1c] border-b border-[#0e2a4a]">
        {[
          { n: "24/7", l: "Recursos de bienestar disponibles para el equipo" },
          { n: "Agregados", l: "Datos para RRHH sin exponer notas personales" },
          { n: "Escalable", l: "Planes según el tamaño de la empresa" },
          { n: "Privacidad", l: "Seguimiento de adopción y tendencias del equipo" },
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
          <div className="text-[11px] text-[#3b8ee8] font-bold tracking-[2px] uppercase mb-2 font-sora">BIENESTAR LABORAL PARA EMPRESAS</div>
          <h2 className="font-sora text-3xl md:text-[34px] font-semibold mb-2">Una experiencia para el empleado y una visión agregada para RRHH</h2>
          <p className="text-[15px] text-[#5a7a94] mb-12">El equipo accede a herramientas de bienestar desde el móvil. RRHH consulta adopción y tendencias agregadas para orientar sus iniciativas.</p>
          
          <div className="grid md:grid-cols-2 gap-5">
            {/* EMPLEADO */}
            <div className="bg-[#04152b] border border-[#0e2a4a] rounded-2xl p-8">
              <span className="bg-[#0c2d4e] text-[#85b7eb] text-[10px] font-bold px-2.5 py-1 rounded border border-[#185FA5] tracking-[0.5px]">EMPLEADO</span>
              <h3 className="font-sora text-base font-semibold mt-3 mb-1.5">App de bienestar emocional para empleados</h3>
              <p className="text-[13px] text-[#5a7a94] mb-4">Acceso móvil a Kit SOS, respiración guiada, diario emocional, sonidos y programas de autocuidado.</p>
              
              <div className="bg-[#020e1c] rounded-xl p-5 mt-4">
                <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#3b8ee8] mb-3">BIENESTAR MENTAL</div>
                <div className="font-sora text-[20px] font-semibold">Rutina de bienestar</div>
                <div className="h-1.5 bg-[#0e2a4a] rounded-full mt-2.5 mb-4 overflow-hidden">
                  <div className="h-full bg-[#185FA5] w-[72%]"></div>
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#04152b] rounded-lg p-3">
                    <div className="text-[10px] text-[#5a7a94] uppercase">RESPIRACIÓN</div>
                    <div className="font-sora text-sm font-semibold mt-0.5">Guía 4-7-8</div>
                  </div>
                  <div className="bg-[#04152b] rounded-lg p-3">
                    <div className="text-[10px] text-[#5a7a94] uppercase">DIARIO</div>
                    <div className="font-sora text-sm font-semibold mt-0.5 text-[#97c459]">Reflexión</div>
                  </div>
                </div>
              </div>
            </div>

            {/* RRHH */}
            <div className="bg-[#04152b] border border-[#0e2a4a] rounded-2xl p-8">
              <span className="bg-[#1f1200] text-[#ef9f27] text-[10px] font-bold px-2.5 py-1 rounded border border-[#854f0b] tracking-[0.5px]">RRHH / ADMIN</span>
              <h3 className="font-sora text-base font-semibold mt-3 mb-1.5">Panel de bienestar laboral para RRHH</h3>
              <p className="text-[13px] text-[#5a7a94] mb-4">Métricas agregadas de uso y adopción para entender qué recursos utiliza el equipo y orientar acciones de bienestar.</p>
              
              <div className="bg-[#020e1c] rounded-xl p-5 mt-4">
                <div className="text-[10px] font-bold tracking-[1.5px] uppercase text-[#ef9f27] mb-3">VISIÓN AGREGADA PARA RRHH</div>
                <div className="grid grid-cols-2 gap-2">
                  <div className="bg-[#04152b] rounded-lg p-3">
                    <div className="font-sora text-base font-semibold text-[#3b8ee8]">Uso</div>
                    <div className="text-[10px] text-[#5a7a94]">Adopción del equipo</div>
                  </div>
                  <div className="bg-[#04152b] rounded-lg p-3">
                    <div className="font-sora text-base font-semibold text-[#3b8ee8]">Tendencias</div>
                    <div className="text-[10px] text-[#5a7a94]">Recursos utilizados</div>
                  </div>
                </div>
                <div className="text-[10px] text-[#5a7a94] mt-3 mb-1.5">ACTIVIDAD AGREGADA · EJEMPLO</div>
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
          <div className="text-[11px] text-[#3b8ee8] font-bold tracking-[2px] uppercase mb-2 font-sora">HERRAMIENTAS DE SALUD MENTAL EN EL TRABAJO</div>
          <h2 className="font-sora text-3xl md:text-[34px] font-semibold mb-2">Apoyo práctico para el estrés laboral y el bienestar diario</h2>
          <p className="text-[15px] text-[#5a7a94] mb-12">Recursos breves para ayudar al equipo a hacer una pausa, regular el estrés y construir hábitos de autocuidado durante la jornada.</p>
          
          <div className="grid md:grid-cols-3 gap-3.5">
            {[
              { name: "Pensamientos", desc: "Preguntas de observación y reflexión", tag: "CBT" },
              { name: "Flexibilidad psicológica", desc: "Ejercicios de aceptación y compromiso", tag: "ACT" },
              { name: "Respiración 4-7-8", desc: "Respiración visual y temporizada", tag: "BREATHE" },
              { name: "Sonidos relajantes", desc: "Paisajes sonoros para las pausas", tag: "SOUND" },
              { name: "Deep Work", desc: "Concentración profunda", tag: "FOCUS" },
              { name: "Diario emocional", desc: "Registro y reflexión sobre emociones", tag: "JOURNAL" },
              { name: "Prevención del burnout", desc: "Recursos de autocuidado y pausas", tag: "RISK", tagColor: "#f09575", tagBorder: "#993c1d", tagBg: "#1f0800" },
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

      {/* BUSINESS SEO GUIDES */}
      <section className="bg-[#020e1c] py-16 px-6 border-b border-[#0e2a4a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] text-[#3b8ee8] font-bold tracking-[2px] uppercase mb-2 font-sora">RECURSOS PARA EMPRESAS</div>
          <h2 className="font-sora text-3xl md:text-[34px] font-semibold">Guías sobre salud mental y bienestar laboral</h2>
          <p className="text-[15px] text-[#5a7a94] mt-3 max-w-3xl">Contenido para RRHH, prevención y dirección sobre bienestar, burnout, riesgos psicosociales y absentismo laboral.</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 mt-10">
            {[
              { href: "/business/salud-mental-en-el-trabajo", label: "Salud mental en el trabajo" },
              { href: "/business/bienestar-laboral", label: "Bienestar laboral" },
              { href: "/business/burnout-laboral", label: "Burnout laboral" },
              { href: "/business/riesgos-psicosociales", label: "Riesgos psicosociales en el trabajo" },
              { href: "/business/absentismo-laboral", label: "Absentismo laboral" },
              { href: "/business/beneficios-para-empleados", label: "Beneficios para empleados" },
            ].map((guide) => (
              <Link key={guide.href} href={guide.href} className="bg-[#04152b] border border-[#0e2a4a] rounded-xl p-5 hover:border-[#3b8ee8]/40 transition-colors">
                <h3 className="font-sora text-sm font-semibold text-[#85b7eb]">{guide.label}</h3>
                <p className="text-xs leading-relaxed text-[#5a7a94] mt-2">Información práctica y límites claros para una implantación responsable.</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="bg-[#030f1f] py-20 px-6 border-b border-[#0e2a4a]">
        <div className="max-w-5xl mx-auto">
          <div className="text-[11px] text-[#3b8ee8] font-bold tracking-[2px] uppercase mb-2 font-sora">PLANES DE BIENESTAR PARA EMPRESAS</div>
          <h2 className="font-sora text-3xl md:text-[34px] font-semibold mb-2">Precio claro por empleado y mes</h2>
          <p className="text-[15px] text-[#5a7a94] mb-12">Elige un plan según el tamaño de tu equipo. Sin permanencia y con onboarding incluido.</p>
          
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
                {["9 módulos de bienestar", "Respiración 4-7-8 guiada", "Panel para RRHH", "Informe mensual", "Soporte por email"].map((f, i) => (
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
                {["Todo lo de Starter", "Métricas agregadas de adopción", "Tendencias de uso", "Canal ético para el equipo", "Focus League por equipos", "Soporte prioritario"].map((f, i) => (
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
          <div className="text-[11px] text-[#3b8ee8] font-bold tracking-[2px] uppercase mb-2 font-sora">DEMO DE BIENESTAR LABORAL</div>
          <h2 className="font-sora text-3xl md:text-[34px] font-semibold mb-2">Descubre cómo ANSIOFF puede apoyar a tu equipo</h2>
          <p className="text-[15px] text-[#5a7a94] mb-10">En una demo personalizada revisaremos las necesidades de tu empresa, la experiencia del empleado y las métricas disponibles para RRHH.</p>
          
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
              {loading ? "Enviando..." : "Solicitar demo de ANSIOFF Business"}
            </button>
            <p className="text-[12px] text-[#2d4a61] text-center mt-3">Respuesta en menos de 24h · Sin compromiso · Tus datos están protegidos bajo GDPR</p>
          </form>
        </div>
      </section>

      <SiteFooter section="Business" />
    </div>
  );
}
