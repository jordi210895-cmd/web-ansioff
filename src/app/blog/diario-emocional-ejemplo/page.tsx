import type { Metadata } from "next";
import Link from "next/link";
import AppStoreLink from "@/components/app-store-link";
import BlogHeader from "@/components/blog-header";
import SiteFooter from "@/components/site-footer";
import { getBlogPost } from "@/lib/blog-posts";

const articlePost = getBlogPost("diario-emocional-ejemplo");

if (!articlePost) {
  throw new Error("No se ha encontrado el artículo diario-emocional-ejemplo");
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
    tags: ["diario emocional", "ejemplo", "plantilla", "registro de emociones"],
  },
  twitter: {
    card: "summary",
    title: post.title,
    description: post.description,
  },
};

const faqs = [
  {
    question: "¿Qué se escribe en un diario emocional?",
    answer:
      "Puedes registrar una situación concreta, las emociones y su intensidad, sensaciones físicas, pensamientos que aparecieron, lo que hiciste y una respuesta más equilibrada o el siguiente paso. No es necesario incluir todos los campos cada vez ni escribir una historia larga.",
  },
  {
    question: "¿Cómo empezar un diario emocional si no sé qué siento?",
    answer:
      "Empieza por lo observable: qué ocurrió, qué notaste en el cuerpo y qué impulso tuviste. Después prueba nombres amplios como miedo, tristeza, enfado, alegría, culpa o sorpresa y puntúa su intensidad. Puedes dejar la emoción sin nombre y volver más tarde.",
  },
  {
    question: "¿Cuánto tiempo hay que escribir?",
    answer:
      "No existe una duración obligatoria. Una entrada de cinco a diez minutos sobre un solo momento puede ser suficiente. Si escribir durante mucho tiempo te lleva a repetir la misma preocupación o aumenta el malestar, detente y cambia de actividad.",
  },
  {
    question: "¿Tengo que escribir todos los días?",
    answer:
      "No. Puedes usarlo cuando quieras entender una reacción, antes de una consulta o para revisar un patrón. Convertirlo en una obligación puede hacerlo menos útil. Es mejor un formato sostenible que una racha perfecta.",
  },
  {
    question: "¿Un diario emocional sustituye a la terapia?",
    answer:
      "No. Puede ayudarte a organizar información, pero no diagnostica ni sustituye una valoración o tratamiento. Un profesional puede adaptar el registro a tu situación y ayudarte si escribir activa recuerdos, pensamientos o síntomas difíciles de manejar.",
  },
  {
    question: "¿Cuándo conviene pedir ayuda?",
    answer:
      "Consulta si el malestar es frecuente, empeora, interfiere con tu vida o te cuesta mantenerte a salvo. Ante una emergencia vital llama al 112. Si hay pensamientos de suicidio o riesgo de conducta suicida en España, llama al 024 o al 112 si el riesgo es inminente.",
  },
];

export default function EmotionalJournalExampleArticle() {
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
          "diario emocional ejemplo",
          "cómo hacer un diario emocional",
          "plantilla diario emocional",
          "diario de emociones ejemplo",
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
          {
            "@type": "ListItem",
            position: 1,
            name: "ANSIOFF",
            item: "https://ansioff.com/",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Blog",
            item: "https://ansioff.com/blog",
          },
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
              No necesitas escribir páginas ni encontrar la palabra perfecta. Un registro breve puede separar lo que ocurrió, lo que sentiste, lo que pensaste y lo que hiciste. Aquí tienes una entrada completa y una plantilla que puedes reutilizar.
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
              Para empezar un diario emocional, elige una situación concreta y anota: qué pasó, qué emoción apareció y su intensidad, qué notaste en el cuerpo, qué pensaste, qué hiciste y qué respuesta más equilibrada o próximo paso puedes considerar. Cinco minutos y frases breves son suficientes.
            </p>
          </aside>

          <nav aria-labelledby="contenido-articulo" className="mt-10 rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
            <h2 id="contenido-articulo" className="font-sora text-base font-semibold">En esta guía</h2>
            <ol className="mt-4 grid gap-2 text-sm text-[#8ab0cc] sm:grid-cols-2">
              <li><a href="#que-es" className="hover:text-[#14b8a6]">1. Qué es un diario emocional</a></li>
              <li><a href="#como-hacerlo" className="hover:text-[#14b8a6]">2. Cómo hacerlo paso a paso</a></li>
              <li><a href="#ejemplo" className="hover:text-[#14b8a6]">3. Ejemplo completo</a></li>
              <li><a href="#plantilla" className="hover:text-[#14b8a6]">4. Plantilla reutilizable</a></li>
              <li><a href="#bloqueo" className="hover:text-[#14b8a6]">5. Qué escribir si te bloqueas</a></li>
              <li><a href="#errores" className="hover:text-[#14b8a6]">6. Errores y límites</a></li>
              <li><a href="#preguntas" className="hover:text-[#14b8a6]">7. Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <div className="mt-14 space-y-16 text-[17px] leading-8 text-[#a9c5da]">
            <section id="que-es" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué es un diario emocional y en qué se diferencia de un diario personal</h2>
              <div className="mt-6 space-y-5">
                <p>
                  Un diario personal puede contar lo que hiciste durante el día. Un diario emocional se centra en un momento y organiza varios elementos: situación, emoción, cuerpo, pensamiento y conducta. El objetivo no es escribir bonito, sino observar conexiones que de memoria pueden mezclarse.
                </p>
                <p>
                  Los registros de pensamientos utilizados en terapia cognitivo-conductual añaden preguntas para revisar pruebas a favor y en contra de una interpretación y construir una alternativa más realista o neutral. Puedes usar una versión sencilla por tu cuenta, pero no es necesario cuestionar cada pensamiento ni hacerlo cuando estás demasiado activado.
                </p>
                <p>
                  Registrar una emoción no demuestra que tu interpretación sea correcta o incorrecta. Tampoco convierte el diario en un diagnóstico. Es una fotografía escrita de cómo viviste un momento, útil para detectar preguntas o patrones que después puedes revisar.
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-[#0e2a4a] bg-[#04152b] p-6">
                <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Una entrada útil suele ser</h3>
                <ul className="mt-4 grid gap-3 text-base sm:grid-cols-2">
                  <li>• Concreta: un momento, no toda la semana.</li>
                  <li>• Breve: frases o palabras clave.</li>
                  <li>• Descriptiva: separa hechos e interpretaciones.</li>
                  <li>• Gradual: no exige recordar todos los detalles.</li>
                  <li>• Privada: evita datos sensibles innecesarios.</li>
                  <li>• Flexible: puedes dejar campos sin completar.</li>
                </ul>
              </div>
            </section>

            <section id="como-hacerlo" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cómo hacer un diario emocional paso a paso</h2>
              <p className="mt-6">
                Elige una situación reciente que puedas observar con algo de distancia. Si estás en una emergencia o escribir aumenta mucho el malestar, prioriza tu seguridad y pide ayuda.
              </p>

              <ol className="mt-8 space-y-7">
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">1.</span>Situación: ¿qué ocurrió?</h3>
                  <p className="mt-3">Describe el momento como si fuera una cámara: lugar, personas y frase o acción concreta. Evita empezar con «siempre» o «nunca». Ejemplo: «Mi responsable me escribió: mañana tenemos que hablar».</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">2.</span>Emociones: ¿qué sentiste y con qué intensidad?</h3>
                  <p className="mt-3">Elige una o dos palabras y puntúa de 0 a 10. Ansiedad, miedo, tristeza, enfado, culpa, vergüenza, alivio o alegría son ejemplos. No busques la etiqueta perfecta: «malestar 7/10» también sirve.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">3.</span>Cuerpo: ¿qué sensaciones aparecieron?</h3>
                  <p className="mt-3">Anota observaciones concretas: hombros tensos, calor, respiración rápida, nudo en el estómago o cansancio. No tienes que decidir si la emoción las causó ni interpretarlas como un diagnóstico.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">4.</span>Pensamiento: ¿qué frase pasó por tu mente?</h3>
                  <p className="mt-3">Escribe la interpretación tal como apareció, aunque suene exagerada: «seguro que he hecho algo mal». Distinguirla del hecho permite revisarla después sin negar la emoción.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">5.</span>Respuesta: ¿qué hiciste o qué impulso tuviste?</h3>
                  <p className="mt-3">Anota acciones y evitaciones: releí el mensaje, busqué confirmación, cancelé un plan, me quedé quieto o pedí apoyo. No lo escribas para juzgarte, sino para observar qué siguió al pensamiento.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">6.</span>Otra perspectiva: ¿qué datos faltan?</h3>
                  <p className="mt-3">Revisa pruebas a favor y en contra. Busca una frase creíble, no obligatoriamente positiva: «no sé de qué quiere hablar; puedo preparar mis preguntas y esperar a tener información».</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">7.</span>Siguiente paso y nueva intensidad</h3>
                  <p className="mt-3">Elige una acción pequeña y vuelve a puntuar la emoción. No necesitas que baje. Ejemplo: «anoto tres asuntos para la reunión; ansiedad 6/10».</p>
                </li>
              </ol>
            </section>

            <section id="ejemplo" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Ejemplo completo de diario emocional</h2>
              <p className="mt-6">
                Este ejemplo es ficticio y muestra una entrada breve. No pretende indicar cómo deberías sentirte ni cuál debe ser el resultado.
              </p>
              <div className="mt-7 space-y-4">
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Situación</strong><span className="mt-2 block">A las 17:30 recibí un mensaje de mi responsable: «Mañana tenemos que hablar diez minutos».</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Emoción e intensidad</strong><span className="mt-2 block">Ansiedad 8/10 y miedo 6/10.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Sensaciones físicas</strong><span className="mt-2 block">Hombros tensos, presión en el estómago y dificultad para concentrarme.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Pensamiento automático</strong><span className="mt-2 block">«He cometido un error y me va a dar una mala noticia».</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Qué hice</strong><span className="mt-2 block">Releí el mensaje cinco veces y revisé el correo buscando algo que hubiera hecho mal.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Pruebas que consideré</strong><span className="mt-2 block">A favor: no suele escribir así. En contra: no ha mencionado ningún problema, también tenemos revisiones breves y la semana pasada valoró mi trabajo.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Perspectiva alternativa</strong><span className="mt-2 block">«No conozco el motivo. Puede ser algo rutinario o importante. Puedo preparar preguntas sin asumir el resultado».</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Siguiente paso</strong><span className="mt-2 block">Anotar tres puntos pendientes y dejar de revisar el correo. Ansiedad después: 6/10.</span></div>
              </div>
            </section>

            <section id="plantilla" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Plantilla de diario emocional para reutilizar</h2>
              <p className="mt-6">
                Puedes copiar estas preguntas en papel, notas o una app. Deja espacios en blanco si no tienes una respuesta.
              </p>
              <div className="mt-7 rounded-2xl border border-[#14b8a6]/30 bg-[#0d2d3e]/60 p-6 text-base leading-8 text-[#c8dff0]">
                <ol className="space-y-4">
                  <li><strong className="text-[#4ddbc4]">1. Situación:</strong> ¿qué pasó, cuándo y dónde?</li>
                  <li><strong className="text-[#4ddbc4]">2. Emoción:</strong> ¿qué sentí y con qué intensidad de 0 a 10?</li>
                  <li><strong className="text-[#4ddbc4]">3. Cuerpo:</strong> ¿qué sensaciones físicas noté?</li>
                  <li><strong className="text-[#4ddbc4]">4. Pensamiento:</strong> ¿qué frase, imagen o recuerdo apareció?</li>
                  <li><strong className="text-[#4ddbc4]">5. Respuesta:</strong> ¿qué hice o evité hacer?</li>
                  <li><strong className="text-[#4ddbc4]">6. Perspectiva:</strong> ¿qué pruebas tengo y qué información falta?</li>
                  <li><strong className="text-[#4ddbc4]">7. Próximo paso:</strong> ¿qué acción pequeña puedo elegir y cómo está ahora la emoción?</li>
                </ol>
              </div>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Versión de 1 minuto</strong><span className="mt-2 block">Situación + emoción 0-10 + siguiente paso.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Versión para consulta</strong><span className="mt-2 block">Añade frecuencia, duración y cómo afectó a tu día.</span></div>
              </div>
            </section>

            <section id="bloqueo" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué escribir en un diario de emociones si te quedas en blanco</h2>
              <p className="mt-6">
                No intentes responder «por qué soy así». Empieza por preguntas pequeñas que puedas contestar con observaciones:
              </p>
              <ul className="mt-7 space-y-4">
                <li><strong className="text-[#e8f4ff]">¿Qué ocurrió justo antes?</strong> Una frase, un mensaje, un recuerdo o un cambio corporal.</li>
                <li><strong className="text-[#e8f4ff]">¿Qué ganas de hacer aparecieron?</strong> Irte, responder, llorar, comprobar, esconderte o acercarte.</li>
                <li><strong className="text-[#e8f4ff]">¿Dónde se nota en el cuerpo?</strong> Tensión, temperatura, movimiento, presión o cansancio.</li>
                <li><strong className="text-[#e8f4ff]">¿Qué palabra se aproxima?</strong> Miedo, tristeza, enfado, culpa, vergüenza, alegría, alivio o confusión.</li>
                <li><strong className="text-[#e8f4ff]">¿Qué necesito en los próximos diez minutos?</strong> Información, pausa, apoyo, movimiento o terminar una tarea concreta.</li>
              </ul>
              <p className="mt-6">
                También puedes escribir «no sé qué siento; noto ___ y tengo ganas de ___». Una entrada incompleta sigue siendo una entrada válida.
              </p>
            </section>

            <section id="errores" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Errores frecuentes y límites del diario emocional</h2>
              <ul className="mt-7 space-y-4">
                <li><strong className="text-[#e8f4ff]">Contar todo el día de una vez.</strong> Elegir una escena facilita separar situación, emoción y pensamiento.</li>
                <li><strong className="text-[#e8f4ff]">Juzgar la emoción.</strong> Cambia «no debería sentir esto» por el nombre y la intensidad que observas.</li>
                <li><strong className="text-[#e8f4ff]">Forzar un pensamiento positivo.</strong> Busca una alternativa creíble que incluya lo que sabes y lo que todavía no sabes.</li>
                <li><strong className="text-[#e8f4ff]">Escribir hasta agotarte.</strong> Pon un límite de tiempo si notas que repites la preocupación sin obtener información nueva.</li>
                <li><strong className="text-[#e8f4ff]">Convertirlo en una obligación diaria.</strong> La regularidad puede ayudar, pero una racha no mide tu progreso.</li>
                <li><strong className="text-[#e8f4ff]">Guardar datos sensibles sin protección.</strong> Evita nombres completos, información laboral confidencial o detalles de terceros que no necesitas.</li>
                <li><strong className="text-[#e8f4ff]">Usarlo en lugar de pedir ayuda.</strong> Un registro acompaña una valoración; no la sustituye.</li>
              </ul>

              <p className="mt-6">
                Si escribir activa recuerdos intensos, aumenta de forma clara el malestar o te deja atrapado en el mismo pensamiento, detente. Oriéntate al entorno, habla con alguien de confianza o busca apoyo profesional. Puedes llevar una entrada a consulta sin seguir escribiendo por tu cuenta.
              </p>

              <div className="mt-8 rounded-2xl border border-[#f87171]/35 bg-[#2a0e0e]/60 p-6">
                <h3 className="font-sora text-xl font-semibold text-[#fca5a5]">Si necesitas ayuda urgente en España</h3>
                <p className="mt-3 text-base leading-7 text-[#f3caca]">
                  Ante una emergencia vital, llama al <strong>112</strong>. Si tienes pensamientos de suicidio o riesgo de conducta suicida, puedes llamar al <strong>024</strong>, un servicio nacional, gratuito, confidencial y disponible las 24 horas. El 024 no sustituye la atención sanitaria presencial cuando sea necesaria.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Crear tu registro en ANSIOFF</h2>
              <p className="mt-6">
                El diario emocional de ANSIOFF te permite registrar una situación, la emoción y su intensidad sin empezar desde una página en blanco. Puedes volver a las entradas para observar momentos repetidos y preparar información que quieras compartir con tu psicólogo.
              </p>
              <p className="mt-4">
                ANSIOFF es una herramienta de bienestar. No interpreta tus entradas, no diagnostica un trastorno y no sustituye a un psicólogo, médico o servicio de emergencias.
              </p>
              <AppStoreLink
                placement="blog_diario_emocional_ejemplo_mid_cta"
                className="mt-7 inline-flex rounded-xl bg-[#14b8a6] px-6 py-3 text-sm font-semibold text-[#020e1c] hover:bg-[#0d9488]"
              >
                 Descargar ANSIOFF en App Store
              </AppStoreLink>
            </section>

            <section id="preguntas" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Preguntas frecuentes sobre el diario emocional</h2>
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
                Hemos priorizado organismos sanitarios y recursos clínicos públicos. El artículo adapta un registro general y no sustituye indicaciones terapéuticas individuales.
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6">
                <li><a href="https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/self-help-cbt-techniques/thought-record/" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">NHS Every Mind Matters: registro de pensamientos en siete pasos</a></li>
                <li><a href="https://www.cci.health.wa.gov.au/Resources/Looking-after-yourself/anxiety" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">Centre for Clinical Interventions: registros para ansiedad</a></li>
                <li><a href="https://www.cci.health.wa.gov.au/Resources/Looking-After-Yourself" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">Centre for Clinical Interventions: límites de los recursos de autoayuda</a></li>
                <li><a href="https://medlineplus.gov/spanish/anxiety.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: ansiedad, emociones, pensamientos y tratamiento</a></li>
                <li><a href="https://administracion.gob.es/pag_Home/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/asistencia-sanitaria/numeros-urgencia.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">Administración General del Estado: teléfono de emergencias 112</a></li>
                <li><a href="https://www.sanidad.gob.es/linea024/home.htm" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">Ministerio de Sanidad: Línea 024</a></li>
              </ul>
            </section>
          </div>
        </div>
      </article>

      <section className="border-t border-[#0e2a4a] bg-[#04152b] px-6 py-16" aria-labelledby="articulos-relacionados">
        <div className="mx-auto max-w-5xl">
          <p className="font-sora text-xs font-bold uppercase tracking-[2px] text-[#14b8a6]">SIGUE APRENDIENDO</p>
          <h2 id="articulos-relacionados" className="mt-3 font-sora text-3xl font-semibold">Artículos relacionados</h2>
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            {[
              {
                href: "/blog/ansiedad-al-despertar",
                label: "Ansiedad y rutinas",
                title: "Qué hacer si te despiertas con ansiedad",
                text: "Una rutina breve para los primeros minutos y señales que conviene consultar.",
              },
              {
                href: "/blog/ansiedad-por-la-noche",
                label: "Ansiedad y sueño",
                title: "Qué hacer si la ansiedad aparece por la noche",
                text: "Un plan para bajar la activación y salir del bucle de preocupación al acostarte.",
              },
              {
                href: "/blog/tecnica-5-4-3-2-1-ansiedad",
                label: "Técnicas de anclaje",
                title: "Cómo hacer la técnica 5-4-3-2-1",
                text: "Vuelve al presente con los cinco sentidos y aprende a adaptar cada paso.",
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
