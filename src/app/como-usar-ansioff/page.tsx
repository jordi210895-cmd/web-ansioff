import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AppStoreLink from "@/components/app-store-link";
import PlayStoreLink from "@/components/play-store-link";
import SiteFooter from "@/components/site-footer";

export const metadata: Metadata = {
  title: "¿Cómo utilizar ANSIOFF? Guía paso a paso de la app | ANSIOFF",
  description:
    "Descubre cómo usar ANSIOFF en tu iPhone: Kit SOS para ataques de pánico, respiración guiada 4-7-8, diario emocional con IA y programas de bienestar.",
  alternates: {
    canonical: "https://ansioff.com/como-usar-ansioff",
  },
  openGraph: {
    title: "¿Cómo utilizar ANSIOFF? Guía completa de uso",
    description:
      "Aprende a sacar el máximo partido a tu app para la ansiedad: Kit SOS, respiración, diario con IA y sonidos relajantes.",
    url: "https://ansioff.com/como-usar-ansioff",
    siteName: "ANSIOFF",
    locale: "es_ES",
    type: "article",
  },
};

const modules = [
  {
    step: "01",
    id: "sos",
    title: "Kit SOS para momentos de crisis",
    badge: "EMERGENCIA",
    badgeColor: "border-[#ef4444]/40 text-[#f87171] bg-[#2a0e0e]",
    img: "/app-screens/sos.png",
    when: "Usa este módulo cuando sientas que la ansiedad sube repentinamente, tengas palpitaciones o notes los primeros síntomas de un ataque de pánico.",
    how: [
      "Abre ANSIOFF y pulsa el botón rojo de SOS ubicado en el centro o en el menú principal.",
      "Sigue la secuencia de desescalada clínica: inhalación guiada, retención y exhalación en tiempo real.",
      "Aplica el ejercicio de anclaje sensorial (5 cosas que ves, 4 que tocas, 3 que oyes) que aparece en pantalla para traer tu atención al presente.",
      "La app no te pedirá que leas textos largos ni que tomes decisiones complejas; todo está diseñado para calmar tu sistema nervioso en menos de 3 minutos.",
    ],
  },
  {
    step: "02",
    id: "respiracion",
    title: "Ejercicios de Respiración Guiada",
    badge: "CALMA FÍSICA",
    badgeColor: "border-[#14b8a6]/40 text-[#14b8a6] bg-[#0d2d3e]",
    img: "/app-screens/breathing.png",
    when: "Ideal para realizar al despertar, durante pausas de trabajo, antes de hablar en público o antes de dormir.",
    how: [
      "Accede a la pestaña 'Respira' desde la barra inferior.",
      "Elige el patrón según tu objetivo: 4-7-8 para relajación profunda, Caja (4-4-4-4) para concentración o Coherente (5-5) para estabilizar el ritmo cardíaco.",
      "Presiona 'Comenzar' y observa la esfera dinámica: inhala suavemente mientras se expande y exhala lentamente cuando se contraiga.",
      "Puedes activar la vibración háptica para seguir el ritmo con los ojos cerrados.",
    ],
  },
  {
    step: "03",
    id: "diario",
    title: "Diario Emocional con Análisis de IA",
    badge: "CBT / ACT",
    badgeColor: "border-[#8b5cf6]/40 text-[#a78bfa] bg-[#1e1b4b]",
    img: "/app-screens/diary_ai.png",
    when: "Recomendado para la noche o momentos en los que sientas la mente sobrecargada de pensamientos rumiativos.",
    how: [
      "Entra en la sección 'Diario' y pulsa en 'Nueva nota'.",
      "Escribe con libertad cómo te sientes, qué te ha preocupado o qué ha desencadenado tu estrés.",
      "Pulsa en 'Analizar pensamiento' para que la IA detecte distorsiones cognitivas comunes (como el catastrofismo o la lectura de mente).",
      "Lee el reencuadre sugerido y responde a las preguntas de reflexión para cambiar de perspectiva sin juzgarte.",
    ],
  },
  {
    step: "04",
    id: "sonidos",
    title: "Sonidos Relajantes y Neuro-acústica",
    badge: "AUDIO",
    badgeColor: "border-[#3b82f6]/40 text-[#60a5fa] bg-[#0c2e4e]",
    img: "/app-screens/sounds.png",
    when: "Úsalos mientras trabajas, estudias, haces estiramientos o te preparas para conciliar el sueño.",
    how: [
      "Ve a la pestaña 'Sonidos' para explorar la biblioteca de ambiente.",
      "Elige entre lluvia suave, bosque nocturno, olas del mar o frecuencias Alpha (432Hz).",
      "Ajusta el temporizador de apagado automático si vas a usarlos para dormir.",
      "Los audios pueden reproducirse en segundo plano mientras utilizas otras aplicaciones en tu iPhone.",
    ],
  },
  {
    step: "05",
    id: "programas",
    title: "Programas de Terapia y Cursos Guiados",
    badge: "APRENDIZAJE",
    badgeColor: "border-[#f97316]/40 text-[#fb923c] bg-[#2e1d0f]",
    img: "/app-screens/modules.png",
    when: "Para dedicar 5 minutos al día a construir hábitos duraderos de salud mental.",
    how: [
      "Ingresa en la pestaña 'Programas'.",
      "Selecciona un curso adaptado a ti: 'Reestructuración Cognitiva', 'Manejo del Estrés' o 'Aceptación y Compromiso'.",
      "Completa una lección diaria en audio o texto interactivo y realiza los pequeños ejercicios prácticos al final.",
      "Consulta tu gráfica de racha para ver tu constancia semana a semana.",
    ],
  },
];

export default function ComoUsarPage() {
  return (
    <div className="min-h-screen bg-[#020e1c] font-sans leading-relaxed text-[#e8f4ff] selection:bg-[#14b8a6]/30">
      {/* HEADER NAV */}
      <header className="sticky top-0 z-50 flex items-center justify-between border-b border-[#0e2a4a] bg-[#04152b] px-6 py-4 md:px-12">
        <Link href="/" className="font-sora text-lg font-semibold tracking-tight hover:opacity-90">
          ANSI<span className="text-[#14b8a6]">OFF</span>
        </Link>

        <nav className="hidden items-center gap-6 text-sm text-[#8ab0cc] md:flex">
          <Link href="/" className="hover:text-[#e8f4ff]">Inicio</Link>
          <Link href="/app-para-la-ansiedad" className="hover:text-[#e8f4ff]">Herramientas</Link>
          <Link href="/blog" className="hover:text-[#e8f4ff]">Blog</Link>
          <Link href="/business" className="hover:text-[#e8f4ff]">Business</Link>
        </nav>

        <AppStoreLink
          placement="como_usar_header"
          className="rounded-lg bg-[#14b8a6] px-4 py-2 text-xs font-semibold text-[#020e1c] transition-colors hover:bg-[#0d9488]"
        >
          Descargar para iPhone
        </AppStoreLink>
      </header>

      <main className="mx-auto max-w-5xl px-6 py-12 md:py-20">
        {/* HERO INTRO */}
        <div className="mb-16 text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#14b8a6]/30 bg-[#0d2d3e] px-4 py-1.5 font-sora text-xs font-medium tracking-wide text-[#4ddbc4]">
            <span className="h-1.5 w-1.5 rounded-full bg-[#14b8a6] animate-pulse" />
            GUÍA DE USO PASO A PASO
          </div>
          <h1 className="mb-6 font-sora text-3xl font-semibold leading-tight md:text-5xl">
            ¿Cómo utilizar <span className="text-[#14b8a6]">ANSIOFF</span> en tu iPhone?
          </h1>
          <p className="mx-auto max-w-2xl text-base text-[#8ab0cc] md:text-lg">
            ANSIOFF está diseñada para ser intuitiva, rápida y sin sobreestimulación. Descubre qué incluye la aplicación y cómo sacarle el máximo partido en tu día a día.
          </p>
        </div>

        {/* SUMMARY CARDS GRID */}
        <div className="mb-20 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: "🚨", title: "1. Kit SOS", desc: "Desescalada rápida y respiración asistida para momentos de pánico." },
            { icon: "🧘", title: "2. Respiración", desc: "Ritmos 4-7-8, Caja y Coherente para regular tu cuerpo." },
            { icon: "📝", title: "3. Diario IA", desc: "Identifica distorsiones cognitivas y reencuadra tus pensamientos." },
            { icon: "🌧️", title: "4. Sonidos", desc: "Paisajes de audio binaural y relajantes para pausas o dormir." },
            { icon: "📚", title: "5. Programas", desc: "Lecciones breves de terapia cognitivo-conductual (CBT/ACT)." },
            { icon: "⏰", title: "6. Recordatorios", desc: "Pausas conscientes mañana y noche para mantener el hábito." },
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-5">
              <span className="text-2xl">{item.icon}</span>
              <h2 className="mt-3 font-sora text-base font-semibold text-[#e8f4ff]">{item.title}</h2>
              <p className="mt-2 text-xs leading-relaxed text-[#8ab0cc]">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* DETAILED MODULE WALKTHROUGHS */}
        <div className="space-y-16">
          {modules.map((m) => (
            <section
              key={m.id}
              id={m.id}
              className="grid gap-8 rounded-3xl border border-[#0e2a4a] bg-[#04152b] p-6 md:grid-cols-12 md:p-10"
            >
              <div className="space-y-4 md:col-span-7">
                <div className="flex items-center gap-3">
                  <span className="font-sora text-2xl font-bold text-[#14b8a6]">{m.step}</span>
                  <span className={`rounded border px-2.5 py-0.5 font-sora text-[10px] font-bold uppercase tracking-wider ${m.badgeColor}`}>
                    {m.badge}
                  </span>
                </div>

                <h2 className="font-sora text-2xl font-semibold text-[#e8f4ff]">{m.title}</h2>

                <div className="rounded-xl border border-[#0e2a4a] bg-[#020e1c] p-4 text-xs text-[#8ab0cc]">
                  <strong className="text-[#14b8a6]">¿Cuándo usarlo?:</strong> {m.when}
                </div>

                <div className="space-y-3 pt-2">
                  <h3 className="font-sora text-sm font-semibold text-[#e8f4ff]">¿Cómo utilizarlo paso a paso?</h3>
                  <ul className="space-y-2.5 text-xs text-[#8ab0cc]">
                    {m.how.map((stepText, idx) => (
                      <li key={idx} className="flex items-start gap-2.5">
                        <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-[#14b8a6]/20 text-[10px] font-bold text-[#14b8a6]">
                          {idx + 1}
                        </span>
                        <span>{stepText}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* MOCKUP DISPLAY */}
              <div className="flex items-center justify-center md:col-span-5">
                <div className="relative aspect-[9/18.5] w-[210px] overflow-hidden rounded-[32px] border-[5px] border-[#0e2a4a] bg-[#020e1c] shadow-xl md:w-[230px]">
                  <Image
                    src={m.img}
                    alt={m.title}
                    fill
                    sizes="(max-width: 768px) 210px, 230px"
                    className="object-cover"
                  />
                </div>
              </div>
            </section>
          ))}
        </div>

        {/* USAGE RECOMMENDATIONS & TIPS */}
        <section className="mt-20 rounded-3xl border border-[#0e2a4a] bg-[#030f1f] p-8 md:p-12">
          <div className="mb-8 text-center">
            <h2 className="font-sora text-2xl font-semibold md:text-3xl">Consejos para sacar el máximo partido a ANSIOFF</h2>
            <p className="mt-2 text-sm text-[#8ab0cc]">Pautas sencillas para integrar la app en tu rutina diaria sin presión.</p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="rounded-2xl border border-[#0e2a4a] bg-[#020e1c] p-6">
              <div className="mb-3 text-xl">📱</div>
              <h3 className="font-sora text-base font-semibold text-[#14b8a6]">1. Pon el SOS a un toque</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#8ab0cc]">
                Mantén ANSIOFF en la pantalla de inicio de tu iPhone o en el dock principal para acceder al Kit SOS sin buscar carpetas cuando sientas ansiedad.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0e2a4a] bg-[#020e1c] p-6">
              <div className="mb-3 text-xl">⏳</div>
              <h3 className="font-sora text-base font-semibold text-[#3b8ee8]">2. Haz sesiones breves</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#8ab0cc]">
                No necesitas dedicar horas: 3 minutos de respiración 4-7-8 al día son suficientes para entrenar la respuesta de calma de tu cuerpo.
              </p>
            </div>

            <div className="rounded-2xl border border-[#0e2a4a] bg-[#020e1c] p-6">
              <div className="mb-3 text-xl">🔒</div>
              <h3 className="font-sora text-base font-semibold text-[#fb923c]">3. Privacidad total</h3>
              <p className="mt-2 text-xs leading-relaxed text-[#8ab0cc]">
                Escribe en tu diario con tranquilidad. Tus notas se procesan con la máxima privacidad y están pensadas únicamente para tu espacio personal.
              </p>
            </div>
          </div>
        </section>

        {/* CTA DOWNLOAD */}
        <div className="mt-20 text-center">
          <h2 className="font-sora text-2xl font-semibold md:text-4xl">¿Listo para empezar a usar ANSIOFF?</h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-[#8ab0cc]">
            Descarga la aplicación en tu dispositivo iOS o Android y lleva contigo el Kit SOS, los ejercicios de respiración y tu diario emocional.
          </p>
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <AppStoreLink
              placement="como_usar_footer_cta"
              className="flex items-center justify-center gap-2.5 rounded-xl bg-[#14b8a6] px-8 py-3.5 font-sora text-sm font-semibold text-[#020e1c] transition-all hover:bg-[#0d9488] hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span></span> App Store (iOS)
            </AppStoreLink>
            <PlayStoreLink
              placement="como_usar_footer_cta"
              className="flex items-center justify-center gap-2.5 rounded-xl bg-[#0e2a4a] border border-[#14b8a6]/40 px-8 py-3.5 font-sora text-sm font-semibold text-[#e8f4ff] transition-all hover:bg-[#153a63] hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <span className="text-xs font-bold text-[#14b8a6]">▶</span> Google Play (Android)
            </PlayStoreLink>
          </div>
        </div>
      </main>

      <SiteFooter />
    </div>
  );
}
