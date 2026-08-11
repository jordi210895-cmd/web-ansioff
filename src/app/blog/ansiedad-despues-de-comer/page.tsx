import type { Metadata } from "next";
import Link from "next/link";
import AppStoreLink from "@/components/app-store-link";
import BlogHeader from "@/components/blog-header";
import SiteFooter from "@/components/site-footer";
import { getBlogPost } from "@/lib/blog-posts";

const articlePost = getBlogPost("ansiedad-despues-de-comer");

if (!articlePost) {
  throw new Error("No se ha encontrado el artículo ansiedad-despues-de-comer");
}

const post = articlePost;

export const metadata: Metadata = {
  title: post.seoTitle,
  description: post.description,
  alternates: { canonical: `/blog/${post.slug}` },
  openGraph: {
    type: "article",
    locale: "es_ES",
    url: `/blog/${post.slug}`,
    siteName: "ANSIOFF",
    title: post.title,
    description: post.description,
    publishedTime: post.publishedAt,
    modifiedTime: post.modifiedAt,
    section: post.category,
    tags: ["ansiedad después de comer", "ataque de ansiedad", "mareo", "alimentación"],
  },
  twitter: {
    card: "summary",
    title: post.title,
    description: post.description,
  },
};

const faqs = [
  {
    question: "¿Por qué me da ansiedad justo después de comer?",
    answer:
      "Puede coincidir con sensaciones normales de la digestión, indigestión o reflujo, cafeína, miedo a que se repita un episodio anterior o un ataque de pánico. También existen causas físicas con síntomas parecidos. El momento en que aparece no permite confirmar la causa sin valorar el conjunto de síntomas y antecedentes.",
  },
  {
    question: "¿Cuáles son los síntomas de ansiedad después de comer?",
    answer:
      "Un ataque de pánico puede incluir palpitaciones, temblor, sudoración, mareo, náuseas, falta de aire, sensación de ahogo y miedo intenso. Algunos de esos síntomas también aparecen en problemas digestivos, glucosa baja, alergias u otras condiciones, por lo que no son exclusivos de la ansiedad.",
  },
  {
    question: "¿El mareo y la ansiedad después de comer significan hipoglucemia?",
    answer:
      "No. La hipoglucemia puede causar temblor, sudoración, ansiedad, confusión, mareo o hambre, pero esos síntomas no la confirman. Si tienes diabetes, sigue el plan indicado por tu equipo y mide la glucosa cuando corresponda. Sin diabetes o sin una medición, evita diagnosticarte o tratarte por tu cuenta.",
  },
  {
    question: "¿Qué hago si me da un ataque de ansiedad después de comer?",
    answer:
      "Primero comprueba si hay dificultad respiratoria intensa, hinchazón de labios, lengua o garganta, urticaria generalizada, desmayo, dolor de pecho u otra señal urgente. Si no la hay, detén la actividad, siéntate en un lugar seguro, deja que la respiración vuelva a un ritmo cómodo y observa cómo evoluciona.",
  },
  {
    question: "¿Puede ser una alergia alimentaria y no ansiedad?",
    answer:
      "Sí. Una alergia puede comenzar desde minutos hasta unas horas después de comer y causar urticaria, picor, hinchazón, vómitos, mareo, tos, sibilancias o dificultad respiratoria. Ante hinchazón de lengua o garganta, dificultad para respirar, desmayo o una reacción grave, llama al 112.",
  },
  {
    question: "¿Debo dejar de comer el alimento que tomé antes del episodio?",
    answer:
      "No inicies una dieta restrictiva basándote en un solo episodio ni hagas pruebas caseras de exposición. Registra el alimento y los síntomas y pide valoración si sospechas una reacción. Si un profesional ya te diagnosticó una alergia, sigue exactamente tu plan de evitación y emergencia.",
  },
  {
    question: "¿Cuándo debo consultar si siempre me pasa después de comer?",
    answer:
      "Solicita valoración si se repite, empeora, aparece con alimentos concretos, te hace saltarte comidas, provoca pérdida de peso o interfiere con tu vida. También consulta si tienes diabetes, cambios de medicación, síntomas digestivos persistentes o ataques de pánico frecuentes.",
  },
  {
    question: "¿Cuándo debo llamar al 112?",
    answer:
      "Llama al 112 ante dificultad respiratoria intensa, hinchazón de labios, lengua o garganta, desmayo, confusión grave, convulsiones, dolor o presión en el pecho, piel azulada o una reacción alérgica grave. No conduzcas tú hasta urgencias.",
  },
];

export default function AnxietyAfterEatingArticle() {
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline: post.title,
        description: post.description,
        datePublished: post.publishedAt,
        dateModified: post.modifiedAt,
        mainEntityOfPage: `https://ansioff.com/blog/${post.slug}`,
        inLanguage: "es-ES",
        articleSection: post.category,
        keywords: [
          "por qué me da ansiedad después de comer",
          "después de comer me da ansiedad",
          "ataques de ansiedad después de comer",
          "mareo y ansiedad después de comer",
        ],
        author: { "@type": "Organization", name: "Equipo ANSIOFF" },
        publisher: {
          "@type": "Organization",
          name: "ANSIOFF",
          url: "https://ansioff.com",
        },
        isAccessibleForFree: true,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "ANSIOFF", item: "https://ansioff.com/" },
          { "@type": "ListItem", position: 2, name: "Blog", item: "https://ansioff.com/blog" },
          {
            "@type": "ListItem",
            position: 3,
            name: post.title,
            item: `https://ansioff.com/blog/${post.slug}`,
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((faq) => ({
          "@type": "Question",
          name: faq.question,
          acceptedAnswer: { "@type": "Answer", text: faq.answer },
        })),
      },
    ],
  };

  return (
    <main className="min-h-screen bg-[#020e1c] text-[#e8f4ff]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />
      <BlogHeader />

      <article>
        <header className="border-b border-[#0e2a4a] bg-[#04152b] px-6 py-14 md:py-20">
          <div className="mx-auto max-w-3xl">
            <nav aria-label="Migas de pan" className="text-sm text-[#5a7a94]">
              <Link href="/" className="hover:text-[#14b8a6]">ANSIOFF</Link>
              <span className="mx-2">/</span>
              <Link href="/blog" className="hover:text-[#14b8a6]">Blog</Link>
              <span className="mx-2">/</span>
              <span>{post.category}</span>
            </nav>

            <p className="mt-8 font-sora text-xs font-bold uppercase tracking-[2px] text-[#14b8a6]">{post.category}</p>
            <h1 className="mt-4 font-sora text-4xl font-semibold leading-tight md:text-5xl">
              {post.title}
            </h1>
            <p className="mt-6 text-lg leading-8 text-[#8ab0cc]">
              Notar nerviosismo, palpitaciones, mareo o miedo después de una comida puede resultar desconcertante. El momento en que aparece orienta el registro, pero no demuestra que la causa sea ansiedad ni permite descartar una reacción física.
            </p>
            <div className="mt-7 flex flex-wrap gap-x-4 gap-y-2 text-xs text-[#5a7a94]">
              <span>Por Equipo ANSIOFF</span>
              <time dateTime={post.publishedAt}>{post.displayDate}</time>
              <span>{post.readingTime}</span>
              <span>Contenido informativo</span>
            </div>
          </div>
        </header>

        <div className="mx-auto max-w-3xl px-6 py-12 md:py-16">
          <aside className="rounded-2xl border border-[#14b8a6]/30 bg-[#0d2d3e]/60 p-6" aria-labelledby="respuesta-breve">
            <h2 id="respuesta-breve" className="font-sora text-lg font-semibold text-[#4ddbc4]">Respuesta breve</h2>
            <p className="mt-3 leading-7 text-[#c8dff0]">
              La ansiedad después de comer puede relacionarse con la interpretación de sensaciones digestivas, el miedo a repetir una crisis, el estrés, la cafeína u otros factores. También puede confundirse con reflujo, indigestión, cambios de glucosa, una reacción alérgica u otra condición. Si el episodio se repite, registra el contexto y consulta; llama al 112 ante dificultad respiratoria intensa, hinchazón de labios, lengua o garganta, desmayo, dolor de pecho o una reacción grave.
            </p>
          </aside>

          <nav aria-labelledby="contenido-articulo" className="mt-10 rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
            <h2 id="contenido-articulo" className="font-sora text-base font-semibold">En esta guía</h2>
            <ol className="mt-4 grid gap-2 text-sm text-[#8ab0cc] sm:grid-cols-2">
              <li><a href="#identificar" className="hover:text-[#14b8a6]">1. Qué estás sintiendo</a></li>
              <li><a href="#factores" className="hover:text-[#14b8a6]">2. Qué puede influir</a></li>
              <li><a href="#momento" className="hover:text-[#14b8a6]">3. Qué hacer en el momento</a></li>
              <li><a href="#diferenciar" className="hover:text-[#14b8a6]">4. Patrones que conviene observar</a></li>
              <li><a href="#evitar" className="hover:text-[#14b8a6]">5. Qué conviene evitar</a></li>
              <li><a href="#registrar" className="hover:text-[#14b8a6]">6. Registro para consulta</a></li>
              <li><a href="#consulta" className="hover:text-[#14b8a6]">7. Consulta y urgencias</a></li>
              <li><a href="#preguntas" className="hover:text-[#14b8a6]">8. Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <div className="mt-14 space-y-16 text-[17px] leading-8 text-[#a9c5da]">
            <section id="identificar" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">«Ansiedad después de comer» puede describir sensaciones distintas</h2>
              <p className="mt-6">
                Para algunas personas significa una oleada repentina de miedo con palpitaciones, temblor, sudoración, mareo, náuseas o sensación de ahogo. Para otras es inquietud que aumenta poco a poco al notar el estómago lleno, acidez, gases o cambios en la respiración. También puede aparecer preocupación anticipada antes de terminar la comida.
              </p>
              <p className="mt-5">
                Un ataque de pánico puede incluir síntomas digestivos, cardíacos y respiratorios. Sin embargo, esos síntomas no son exclusivos de la ansiedad. La valoración profesional puede revisar la historia, la exploración y, cuando corresponda, pruebas para descartar causas físicas.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Describe lo observable</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li>Cuánto tiempo pasó desde que comiste.</li>
                    <li>Qué sensación apareció primero.</li>
                    <li>Si hubo síntomas digestivos, cutáneos o respiratorios.</li>
                    <li>Cuánto duró y cómo evolucionó.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Evita concluir de inmediato</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li>«Es solo ansiedad».</li>
                    <li>«Seguro que tengo una alergia».</li>
                    <li>«Es una bajada de azúcar» sin medición ni diagnóstico.</li>
                    <li>«Ese alimento está prohibido para mí».</li>
                  </ul>
                </div>
              </div>
            </section>

            <section id="factores" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué puede influir en la ansiedad después de comer</h2>
              <p className="mt-6">
                Puede haber más de un factor a la vez. Esta lista ayuda a preparar preguntas para una consulta; no sirve para elegir un diagnóstico en casa.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  ["Sensaciones digestivas", "La plenitud, la hinchazón, las náuseas, los eructos, la indigestión o el reflujo pueden resultar alarmantes, sobre todo si ya temes los síntomas físicos."],
                  ["Miedo aprendido", "Si una crisis anterior ocurrió al comer, el cuerpo puede entrar en alerta al reconocer la mesa, un alimento o una sensación parecida."],
                  ["Cafeína, alcohol y hábitos", "Café, bebidas energéticas, alcohol, nicotina, comer muy rápido o hacerlo bajo mucho estrés pueden influir en cómo te encuentras."],
                  ["Medicamentos y salud física", "La glucosa baja, cambios de medicación y otras condiciones pueden parecerse a la ansiedad. Su diagnóstico requiere contexto y, a veces, mediciones o pruebas."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5">
                    <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">{title}</h3>
                    <p className="mt-3 text-base">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#f97316]/40 bg-[#2a170e] p-6 text-[#fed7aa]">
                <h3 className="font-sora text-xl font-semibold text-[#ffb47b]">Una alergia alimentaria puede empezar después de comer</h3>
                <p className="mt-3 text-base leading-7">
                  Urticaria, picor, hinchazón de la cara, labios o lengua, vómitos, tos, sibilancias, mareo y dificultad para respirar pueden indicar una reacción alérgica. La hinchazón de garganta, la dificultad respiratoria, el desmayo o una reacción grave requieren llamar al 112. Si tienes epinefrina prescrita, sigue tu plan de emergencia.
                </p>
              </div>
            </section>

            <section id="momento" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué hacer si te da ansiedad después de comer</h2>
              <p className="mt-6">
                Empieza por la seguridad. No pruebes una técnica de relajación para decidir si un síntoma grave desaparece antes de pedir ayuda.
              </p>

              <ol className="mt-8 space-y-6">
                <li className="rounded-2xl border border-[#f97316]/40 bg-[#2a170e] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#ffb47b]"><span className="mr-3">1.</span>Comprueba las señales de urgencia</h3>
                  <p className="mt-3 text-[#fed7aa]">Llama al 112 ante dificultad para respirar, hinchazón de labios, lengua o garganta, desmayo, confusión grave, dolor o presión en el pecho, piel azulada, convulsiones o deterioro rápido.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">2.</span>Detén la actividad y siéntate con seguridad</h3>
                  <p className="mt-3">Aléjate del riesgo de caídas y afloja la ropa que moleste. No conduzcas ni hagas ejercicio si estás mareado, débil o sientes que podrías desmayarte.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">3.</span>Observa sin comprobarte continuamente</h3>
                  <p className="mt-3">Anota la hora, qué síntoma apareció primero y si hay urticaria, hinchazón, dolor, dificultad respiratoria o cambios de conciencia. Repetir mediciones sin indicación puede aumentar la alarma.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">4.</span>Deja que la respiración vuelva a un ritmo cómodo</h3>
                  <p className="mt-3">Evita inspiraciones enormes o retenciones largas. Si un profesional ya evaluó episodios similares y no hay señales de alarma, céntrate en una exhalación tranquila y en notar el apoyo del cuerpo.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">5.</span>Decide el siguiente paso</h3>
                  <p className="mt-3">Si es la primera vez, el episodio cambia, dura más de lo habitual o vuelve después de distintas comidas, solicita valoración. Si tienes diabetes, sigue tu plan personal de medición y tratamiento indicado por el equipo sanitario.</p>
                </li>
              </ol>
            </section>

            <section id="diferenciar" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Patrones que conviene observar sin autodiagnosticarte</h2>
              <div className="mt-8 space-y-4">
                {[
                  ["Predomina el miedo intenso", "Palpitaciones, temblor, sudoración, mareo o sensación de ahogo pueden aparecer en un ataque de pánico, pero también en problemas físicos."],
                  ["Predominan ardor, hinchazón o plenitud", "La indigestión y el reflujo pueden causar molestias después de comer. Consulta si son persistentes, intensas o se acompañan de señales preocupantes."],
                  ["Hay urticaria, picor o hinchazón", "Puede existir una reacción alérgica. Si progresa, afecta a la respiración, causa desmayo o es generalizada, llama al 112."],
                  ["Hay temblor, sudoración o confusión", "La glucosa baja es una posibilidad, especialmente con diabetes y ciertos tratamientos, pero los síntomas por sí solos no la confirman."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-6 sm:grid sm:grid-cols-[220px_1fr] sm:gap-6">
                    <h3 className="font-sora text-base font-semibold text-[#4ddbc4]">{title}</h3>
                    <p className="mt-3 text-base sm:mt-0">{text}</p>
                  </div>
                ))}
              </div>
              <p className="mt-6">
                Si lo que más notas son latidos fuertes o rápidos, revisa la guía sobre <Link href="/blog/palpitaciones-por-ansiedad" className="font-semibold text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">palpitaciones por ansiedad y cuándo consultar</Link>. Una sensación no permite confirmar el ritmo ni su causa.
              </p>
            </section>

            <section id="evitar" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué conviene evitar después del episodio</h2>
              <div className="mt-8 rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                <ul className="space-y-4 text-base">
                  <li><strong className="text-[#4ddbc4]">Eliminar muchos alimentos:</strong> una dieta restrictiva sin valoración puede crear nuevos problemas y reforzar el miedo a comer.</li>
                  <li><strong className="text-[#4ddbc4]">Tratar una supuesta hipoglucemia:</strong> no tomes azúcar o cambies una medicación como prueba si no forma parte de un plan indicado.</li>
                  <li><strong className="text-[#4ddbc4]">Provocar otra exposición:</strong> no vuelvas a comer deliberadamente un alimento sospechoso para comprobar una alergia.</li>
                  <li><strong className="text-[#4ddbc4]">Compensar:</strong> no te saltes la siguiente comida ni hagas ejercicio intenso para «corregir» lo comido.</li>
                  <li><strong className="text-[#4ddbc4]">Esperar ante una urgencia:</strong> el grounding o la respiración no sustituyen al 112.</li>
                </ul>
              </div>
            </section>

            <section id="registrar" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Registro de ansiedad después de comer para una consulta</h2>
              <p className="mt-6">
                Registra hechos, no conclusiones. Una nota breve puede mostrar si el patrón se relaciona con el horario, una sensación concreta, una sustancia o un contexto emocional.
              </p>
              <div className="mt-8 rounded-2xl border border-[#14b8a6]/30 bg-[#0d2d3e]/60 p-6 text-base leading-8 text-[#c8dff0]">
                <h3 className="font-sora text-lg font-semibold text-[#4ddbc4]">Plantilla del episodio</h3>
                <ol className="mt-4 space-y-3">
                  <li><strong>Fecha y hora de la comida:</strong> ___</li>
                  <li><strong>Alimentos, bebidas y cantidad aproximada:</strong> ___</li>
                  <li><strong>Velocidad y contexto:</strong> rápido, con estrés, solo, acompañado u otro</li>
                  <li><strong>Tiempo hasta el primer síntoma:</strong> ___</li>
                  <li><strong>Síntoma inicial y síntomas posteriores:</strong> ___</li>
                  <li><strong>Piel, respiración, digestión, dolor o conciencia:</strong> ___</li>
                  <li><strong>Cafeína, alcohol, nicotina y medicación:</strong> ___</li>
                  <li><strong>Duración, evolución y qué hiciste:</strong> ___</li>
                </ol>
              </div>
              <p className="mt-6">
                El <Link href="/blog/diario-emocional-ejemplo" className="font-semibold text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">ejemplo de diario emocional</Link> puede ayudarte a añadir situación, emoción, pensamiento y respuesta sin convertir el registro en un diagnóstico.
              </p>
            </section>

            <section id="consulta" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cuándo pedir cita y cuándo llamar al 112</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]">Solicita valoración</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li>Los episodios se repiten o empeoran.</li>
                    <li>Empiezas a evitar comidas o grupos de alimentos.</li>
                    <li>Hay pérdida de peso, vómitos o molestias digestivas persistentes.</li>
                    <li>Aparecen después de iniciar o cambiar un medicamento.</li>
                    <li>Tienes diabetes o antecedentes alérgicos.</li>
                    <li>Los ataques de pánico afectan a tu vida diaria.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-[#f97316]/40 bg-[#2a170e] p-6 text-[#fed7aa]">
                  <h3 className="font-sora text-xl font-semibold text-[#ffb47b]">Llama al 112 en España</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li>Dificultad respiratoria intensa o sibilancias graves.</li>
                    <li>Hinchazón de labios, lengua o garganta.</li>
                    <li>Desmayo, confusión grave o convulsiones.</li>
                    <li>Dolor o presión en el pecho.</li>
                    <li>Piel azulada o deterioro rápido.</li>
                  </ul>
                  <p className="mt-5 text-sm leading-6">Si tienes epinefrina prescrita, usa el plan indicado y llama al 112. No conduzcas tú hasta urgencias.</p>
                </div>
              </div>
            </section>

            <section id="herramienta" className="scroll-mt-24 rounded-2xl border border-[#14b8a6]/30 bg-[#0d2d3e]/60 p-7">
              <h2 className="font-sora text-2xl font-semibold leading-tight text-[#e8f4ff]">Cómo puede ayudarte ANSIOFF después de comprobar tu seguridad</h2>
              <p className="mt-4 text-base leading-7 text-[#c8dff0]">
                Cuando no existe una urgencia, ANSIOFF puede ayudarte a anotar el contexto, identificar emociones y organizar registros para compartirlos con tu psicólogo. Si el miedo aparece al notar sensaciones corporales, puedes trabajar ese patrón dentro de un plan profesional.
              </p>
              <p className="mt-4 text-base leading-7 text-[#c8dff0]">
                ANSIOFF no identifica alérgenos, no mide glucosa, pulso ni tensión y no diagnostica trastornos digestivos o ataques de pánico. El botón SOS tampoco sustituye al 112 ni a la valoración sanitaria.
              </p>
              <AppStoreLink
                placement="blog_ansiedad_despues_comer_mid_cta"
                className="mt-7 inline-flex rounded-xl bg-[#14b8a6] px-6 py-3 text-sm font-semibold text-[#020e1c] hover:bg-[#0d9488]"
              >
                 Ver ANSIOFF en App Store
              </AppStoreLink>
            </section>

            <section id="preguntas" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Preguntas frecuentes sobre la ansiedad después de comer</h2>
              <div className="mt-7 space-y-4">
                {faqs.map((faq) => (
                  <details key={faq.question} className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5">
                    <summary className="cursor-pointer font-sora text-base font-semibold text-[#e8f4ff]">{faq.question}</summary>
                    <p className="mt-4 text-base leading-7">{faq.answer}</p>
                  </details>
                ))}
              </div>
            </section>

            <section className="border-t border-[#0e2a4a] pt-12">
              <h2 className="font-sora text-2xl font-semibold text-[#e8f4ff]">Fuentes consultadas</h2>
              <p className="mt-4 text-sm leading-7 text-[#8ab0cc]">
                Hemos priorizado recursos públicos de salud. La información ayuda a preparar decisiones y una consulta, pero no determina por internet la causa de un síntoma posterior a una comida.
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6">
                <li><a href="https://medlineplus.gov/spanish/pruebas-de-laboratorio/prueba-del-trastorno-de-panico/" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: síntomas de pánico y descarte de causas físicas</a></li>
                <li><a href="https://medlineplus.gov/spanish/foodallergy.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: alergia alimentaria y anafilaxia</a></li>
                <li><a href="https://medlineplus.gov/spanish/hypoglycemia.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: hipoglucemia, síntomas, medición y tratamiento</a></li>
                <li><a href="https://medlineplus.gov/spanish/indigestion.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: indigestión y factores que pueden empeorarla</a></li>
                <li><a href="https://medlineplus.gov/spanish/gerd.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: reflujo gastroesofágico y señales de atención inmediata</a></li>
                <li><a href="https://administracion.gob.es/pag_Home/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/asistencia-sanitaria/numeros-urgencia.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">Administración General del Estado: teléfono de emergencias 112</a></li>
              </ul>
            </section>
          </div>
        </div>
      </article>

      <section className="border-t border-[#0e2a4a] bg-[#04152b] px-6 py-16" aria-labelledby="articulos-relacionados">
        <div className="mx-auto max-w-5xl">
          <p className="font-sora text-xs font-bold uppercase tracking-[2px] text-[#14b8a6]">SIGUE APRENDIENDO</p>
          <h2 id="articulos-relacionados" className="mt-3 font-sora text-3xl font-semibold">Artículos relacionados</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/blog/palpitaciones-por-ansiedad",
                label: "Síntomas físicos",
                title: "Palpitaciones por ansiedad: qué hacer",
                text: "Distingue la sensación de latidos de una causa que necesita valoración.",
              },
              {
                href: "/blog/debilidad-despues-ataque-ansiedad",
                label: "Recuperación",
                title: "Por qué puedes sentirte débil después",
                text: "Diferencia cansancio general de una pérdida real de fuerza.",
              },
              {
                href: "/blog/diario-emocional-ejemplo",
                label: "Diario emocional",
                title: "Ejemplo y plantilla de diario emocional",
                text: "Registra situación, emoción, pensamiento y respuesta con claridad.",
              },
              {
                href: "/blog/tecnica-5-4-3-2-1-ansiedad",
                label: "Técnicas de anclaje",
                title: "Cómo hacer la técnica 5-4-3-2-1",
                text: "Una pauta para orientarte después de comprobar que estás seguro.",
              },
            ].map((related) => (
              <Link key={related.href} href={related.href} className="rounded-2xl border border-[#0e2a4a] bg-[#020e1c] p-6 hover:border-[#14b8a6]/50">
                <span className="text-xs font-bold uppercase tracking-wide text-[#14b8a6]">{related.label}</span>
                <span className="mt-3 block font-sora text-lg font-semibold leading-snug">{related.title}</span>
                <span className="mt-3 block text-sm leading-6 text-[#8ab0cc]">{related.text}</span>
              </Link>
            ))}
          </div>
          <Link href="/blog" className="mt-8 inline-flex text-sm font-semibold text-[#14b8a6] hover:text-[#4ddbc4]">
            Ver todos los artículos <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
