import type { Metadata } from "next";
import Link from "next/link";
import AppStoreLink from "@/components/app-store-link";
import BlogHeader from "@/components/blog-header";
import SiteFooter from "@/components/site-footer";
import { getBlogPost } from "@/lib/blog-posts";

const articlePost = getBlogPost("tecnica-5-4-3-2-1-ansiedad");

if (!articlePost) {
  throw new Error("No se ha encontrado el artículo tecnica-5-4-3-2-1-ansiedad");
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
    tags: ["técnica 5-4-3-2-1", "grounding", "ansiedad", "cinco sentidos"],
  },
  twitter: {
    card: "summary",
    title: post.title,
    description: post.description,
  },
};

const faqs = [
  {
    question: "¿Qué es la técnica 5-4-3-2-1 para la ansiedad?",
    answer:
      "Es un ejercicio de grounding o anclaje que dirige la atención al presente mediante los sentidos. Consiste en identificar 5 cosas que ves, 4 que sientes con el tacto, 3 que oyes, 2 que hueles y 1 que saboreas. No diagnostica ni trata por sí solo un trastorno de ansiedad.",
  },
  {
    question: "¿Qué pasa si no encuentro dos olores o un sabor?",
    answer:
      "No necesitas completar la secuencia de forma perfecta. Puedes notar un olor muy suave, recordar un aroma agradable sin forzarte o sustituir ese paso por más detalles de otro sentido. Para el sabor sirve el que ya tengas en la boca o un sorbo de agua, si es seguro para ti.",
  },
  {
    question: "¿Puedo hacer la técnica 5-4-3-2-1 en público?",
    answer:
      "Sí. Puedes recorrer los cinco sentidos mentalmente sin hablar ni tocar objetos ajenos. Si estás conduciendo o realizando una tarea de riesgo, prioriza la seguridad y detente en un lugar adecuado antes de practicar un ejercicio que desvíe tu atención.",
  },
  {
    question: "¿Cuántas veces se puede repetir el ejercicio?",
    answer:
      "Puedes repetirlo si te resulta útil, pero no tiene que convertirse en una comprobación obligatoria. Tras una ronda, observa cómo estás y elige una acción pequeña. Si repetirlo aumenta la vigilancia o el malestar, detente y prueba otra estrategia.",
  },
  {
    question: "¿La técnica 5-4-3-2-1 detiene un ataque de pánico?",
    answer:
      "No se puede garantizar. Puede ayudar a algunas personas a orientar la atención al entorno, pero un ataque de pánico puede necesitar otras estrategias y valoración profesional si se repite. Los síntomas físicos nuevos o intensos no deben atribuirse automáticamente a la ansiedad.",
  },
  {
    question: "¿Cuándo debo pedir ayuda profesional?",
    answer:
      "Consulta si la ansiedad o los ataques se repiten, empeoran, provocan evitación o interfieren con tu vida. Ante una emergencia vital llama al 112. Si hay pensamientos de suicidio o riesgo de conducta suicida en España, llama al 024 o al 112 si el riesgo es inminente.",
  },
];

export default function Grounding54321Article() {
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
          "técnica 5 4 3 2 1 ansiedad",
          "grounding ansiedad",
          "técnica 5 sentidos ansiedad",
          "ejercicio 5 sentidos ansiedad",
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
              Cuando la atención se queda atrapada en pensamientos o sensaciones de alarma, este ejercicio usa detalles normales del entorno para volver al presente. Aquí puedes seguirlo sin memorizarlo, adaptarlo y entender lo que puede y no puede hacer.
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
              La técnica 5-4-3-2-1 consiste en nombrar 5 cosas que ves, 4 que notas con el tacto, 3 que oyes, 2 que hueles y 1 que saboreas. Es una forma de grounding: desplaza la atención hacia el entorno actual. Hazla despacio, sin buscar respuestas perfectas, y detente si te activa más.
            </p>
          </aside>

          <nav aria-labelledby="contenido-articulo" className="mt-10 rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
            <h2 id="contenido-articulo" className="font-sora text-base font-semibold">En esta guía</h2>
            <ol className="mt-4 grid gap-2 text-sm text-[#8ab0cc] sm:grid-cols-2">
              <li><a href="#que-es" className="hover:text-[#14b8a6]">1. Qué es el grounding</a></li>
              <li><a href="#paso-a-paso" className="hover:text-[#14b8a6]">2. Técnica paso a paso</a></li>
              <li><a href="#ejemplo" className="hover:text-[#14b8a6]">3. Ejemplo completo</a></li>
              <li><a href="#adaptaciones" className="hover:text-[#14b8a6]">4. Cómo adaptarla</a></li>
              <li><a href="#errores" className="hover:text-[#14b8a6]">5. Errores frecuentes</a></li>
              <li><a href="#limites" className="hover:text-[#14b8a6]">6. Límites y cuándo consultar</a></li>
              <li><a href="#preguntas" className="hover:text-[#14b8a6]">7. Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <div className="mt-14 space-y-16 text-[17px] leading-8 text-[#a9c5da]">
            <section id="que-es" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué es el grounding y para qué sirve el método 5-4-3-2-1</h2>
              <div className="mt-6 space-y-5">
                <p>
                  Grounding significa anclaje. Son ejercicios que orientan la atención hacia el momento y el lugar presentes cuando los pensamientos, recuerdos o sensaciones se sienten abrumadores. El método 5-4-3-2-1 organiza ese cambio de atención mediante vista, tacto, oído, olfato y gusto.
                </p>
                <p>
                  No se trata de convencerte de que no sientes ansiedad ni de obligarte a relajarte. La tarea es más concreta: describir lo que ya está a tu alrededor. Un reflejo en la pared, la presión de los pies o un sonido lejano pueden darte una referencia externa mientras atraviesas el momento.
                </p>
                <p>
                  Algunas personas lo usan ante preocupación intensa, pensamientos intrusivos o al acostarse. No funciona igual para todo el mundo y no sustituye el tratamiento de un trastorno de ansiedad, pánico o trauma. Puedes conservarlo como una herramienta, no como una prueba que debas superar.
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-[#0e2a4a] bg-[#04152b] p-6">
                <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Antes de empezar</h3>
                <ul className="mt-4 space-y-3 text-base">
                  <li>• Comprueba que estás en un lugar seguro.</li>
                  <li>• Siéntate o apoya ambos pies si eso te resulta cómodo.</li>
                  <li>• No cierres los ojos si prefieres mantener referencias visuales.</li>
                  <li>• Haz una ronda sin exigirte que desaparezca la ansiedad.</li>
                  <li>• Si estás conduciendo, detente primero en un lugar seguro.</li>
                </ul>
              </div>
            </section>

            <section id="paso-a-paso" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cómo hacer la técnica 5-4-3-2-1 para la ansiedad</h2>
              <p className="mt-6">
                Recorre los sentidos despacio. No hace falta que cada elemento sea diferente o especial. Si pierdes la cuenta, continúa desde donde recuerdes.
              </p>

              <ol className="mt-8 space-y-7">
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-3xl text-[#14b8a6]">5</span>Cosas que puedes ver</h3>
                  <p className="mt-3">Mira alrededor y nombra cinco objetos o detalles: un color, una sombra, una letra, una esquina o la forma de una superficie. Añade una característica a cada uno: «veo una taza azul con un borde blanco».</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-3xl text-[#14b8a6]">4</span>Sensaciones que puedes notar</h3>
                  <p className="mt-3">Fíjate en cuatro puntos de contacto: los pies dentro del calzado, la ropa sobre los hombros, el respaldo o la temperatura del aire. Puedes tocar un objeto propio y describir su peso o textura.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-3xl text-[#14b8a6]">3</span>Sonidos que puedes oír</h3>
                  <p className="mt-3">Escucha tres sonidos cercanos o lejanos: una conversación, ventilación, tráfico, pájaros o tu ropa al moverte. No necesitas averiguar exactamente de dónde vienen.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-3xl text-[#14b8a6]">2</span>Olores que puedes identificar</h3>
                  <p className="mt-3">Nota dos olores presentes, aunque sean suaves: jabón, ropa, aire exterior o comida. No acerques productos irritantes ni uses una sustancia que no sea segura. Si no percibes olores, adapta el paso en vez de forzarlo.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-3xl text-[#14b8a6]">1</span>Sabor que puedes reconocer</h3>
                  <p className="mt-3">Observa el sabor que ya tienes en la boca. También puedes tomar un sorbo de agua o usar un alimento habitual si es seguro para ti. El objetivo no es encontrar un sabor intenso, sino describir uno.</p>
                </li>
              </ol>

              <p className="mt-7">
                Al terminar, mira de nuevo el lugar y completa una frase: «Estoy en ___, hoy es ___ y lo siguiente que voy a hacer es ___». Después comprueba si puedes dar un paso pequeño, aunque la ansiedad siga presente.
              </p>
            </section>

            <section id="ejemplo" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Ejemplo de la técnica de los cinco sentidos</h2>
              <p className="mt-6">
                Imagina que notas ansiedad sentado en una sala de espera. Una ronda sencilla podría ser esta:
              </p>
              <div className="mt-7 space-y-4">
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">5 cosas que veo</strong><span className="mt-2 block">Una puerta gris, una planta, dos líneas del suelo, una lámpara redonda y letras negras en un cartel.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">4 cosas que siento</strong><span className="mt-2 block">Los pies dentro de los zapatos, el respaldo, el móvil en la mano y la manga en la muñeca.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">3 cosas que oigo</strong><span className="mt-2 block">Una puerta, pasos en el pasillo y el aire acondicionado.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">2 cosas que huelo</strong><span className="mt-2 block">Jabón en las manos y café lejano.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">1 cosa que saboreo</strong><span className="mt-2 block">El sabor neutro de un sorbo de agua.</span></div>
              </div>
              <p className="mt-6">
                Las respuestas no tienen que ser calmantes. Su utilidad está en observar detalles presentes. Si durante el ejercicio aparece otra preocupación, vuelve al sentido en el que estabas sin discutir con el pensamiento.
              </p>
            </section>

            <section id="adaptaciones" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cómo adaptar el ejercicio de grounding</h2>
              <div className="mt-7 grid gap-5 sm:grid-cols-2">
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Si estás en público</h3>
                  <p className="mt-3 text-base">Haz la lista mentalmente y limita el tacto a objetos propios o puntos de contacto de tu cuerpo.</p>
                </div>
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Si un sentido no está disponible</h3>
                  <p className="mt-3 text-base">Sustituye ese paso por más detalles de otro sentido. La secuencia es una guía, no una regla clínica.</p>
                </div>
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Si tienes los ojos cerrados</h3>
                  <p className="mt-3 text-base">Puedes abrirlos si es seguro o empezar por tacto y sonidos. No necesitas imaginar cinco imágenes.</p>
                </div>
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Si un estímulo te activa</h3>
                  <p className="mt-3 text-base">Déjalo y elige algo neutral. Si el ejercicio aumenta el malestar de forma repetida, coméntalo con un profesional.</p>
                </div>
              </div>

              <div className="mt-8 rounded-xl border border-[#14b8a6]/30 bg-[#0d2d3e]/60 p-6">
                <h3 className="font-sora text-lg font-semibold text-[#4ddbc4]">Versión corta: 3-3-3</h3>
                <p className="mt-3 text-base leading-7 text-[#c8dff0]">
                  Si contar hasta cinco te resulta largo, identifica tres cosas que ves, tres sonidos y tres puntos de contacto. No es necesario completar el formato exacto para orientar la atención al entorno.
                </p>
              </div>
            </section>

            <section id="errores" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Errores frecuentes al practicar el método 5-4-3-2-1</h2>
              <ul className="mt-7 space-y-4">
                <li><strong className="text-[#e8f4ff]">Buscar objetos especiales.</strong> Los detalles ordinarios sirven; no necesitas preparar el entorno.</li>
                <li><strong className="text-[#e8f4ff]">Hacerlo a toda velocidad.</strong> Añadir una característica a cada elemento ayuda a mantener la atención en la tarea.</li>
                <li><strong className="text-[#e8f4ff]">Convertirlo en un examen.</strong> Saltarte un número, repetir un objeto o adaptar un sentido no invalida el ejercicio.</li>
                <li><strong className="text-[#e8f4ff]">Medirlo solo por si elimina la ansiedad.</strong> El primer objetivo es orientarte, no conseguir una puntuación de cero.</li>
                <li><strong className="text-[#e8f4ff]">Repetirlo de forma obligatoria.</strong> Si se convierte en una comprobación constante, detente y consulta otra estrategia.</li>
                <li><strong className="text-[#e8f4ff]">Usarlo para ignorar una emergencia.</strong> Los síntomas nuevos o graves necesitan valoración, no solo grounding.</li>
              </ul>
            </section>

            <section id="limites" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué hacer después y cuáles son sus límites</h2>
              <p className="mt-6">
                Tras una ronda, observa la intensidad sin exigir un cambio concreto. Puedes anotar «antes» y «después» de 0 a 10, qué sentido fue más fácil y cuál es tu siguiente acción. Esta información te permite saber si la técnica te resulta útil en algún contexto.
              </p>
              <p className="mt-5">
                El grounding no explica la causa de la ansiedad, no evita necesariamente un ataque de pánico y no sustituye psicoterapia, medicación prescrita o atención médica. Si la ansiedad es frecuente, aumenta o te lleva a evitar lugares y actividades, pide una valoración profesional.
              </p>
              <p className="mt-5">
                Si tienes dolor intenso en el pecho, desmayo, dificultad respiratoria grave u otro síntoma que pueda ser una urgencia, llama al 112. No des por hecho que se trata de ansiedad, especialmente si es nuevo o diferente a lo habitual.
              </p>

              <div className="mt-8 rounded-2xl border border-[#f87171]/35 bg-[#2a0e0e]/60 p-6">
                <h3 className="font-sora text-xl font-semibold text-[#fca5a5]">Si necesitas ayuda urgente en España</h3>
                <p className="mt-3 text-base leading-7 text-[#f3caca]">
                  Ante una emergencia vital, llama al <strong>112</strong>. Si tienes pensamientos de suicidio o riesgo de conducta suicida, puedes llamar al <strong>024</strong>, un servicio nacional, gratuito, confidencial y disponible las 24 horas. El 024 no sustituye la atención sanitaria presencial cuando sea necesaria.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Practicar el 5-4-3-2-1 con ANSIOFF</h2>
              <p className="mt-6">
                El Kit SOS de ANSIOFF puede acompañarte mientras recorres los cinco sentidos. Después puedes registrar en el diario dónde estabas, qué notaste y qué paso te ayudó a orientarte para reconocer patrones con el tiempo.
              </p>
              <p className="mt-4">
                ANSIOFF es una herramienta de bienestar. No garantiza detener una crisis, no diagnostica un trastorno y no sustituye a un psicólogo, médico o servicio de emergencias.
              </p>
              <AppStoreLink
                placement="blog_tecnica_54321_mid_cta"
                className="mt-7 inline-flex rounded-xl bg-[#14b8a6] px-6 py-3 text-sm font-semibold text-[#020e1c] hover:bg-[#0d9488]"
              >
                 Descargar ANSIOFF en App Store
              </AppStoreLink>
            </section>

            <section id="preguntas" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Preguntas frecuentes sobre la técnica 5-4-3-2-1</h2>
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
                Hemos priorizado organismos sanitarios y servicios públicos. El artículo resume información general y no sustituye una valoración individual.
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6">
                <li><a href="https://oxfordhealth.nhs.uk/camhs/self-care/sleep/relaxation/ground-yourself/" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">Oxford Health NHS: método de grounding 5-4-3-2-1</a></li>
                <li><a href="https://www.hey.nhs.uk/wp/wp-content/uploads/2023/02/HEY1322-2022-Grounding.pdf" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">Hull University Teaching Hospitals NHS Trust: grounding y cinco sentidos</a></li>
                <li><a href="https://medlineplus.gov/spanish/anxiety.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: ansiedad, síntomas, diagnóstico y tratamiento</a></li>
                <li><a href="https://medlineplus.gov/spanish/panicdisorder.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: ataques y trastorno de pánico</a></li>
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
                href: "/respiracion-para-la-ansiedad",
                label: "Respiración",
                title: "Ejercicios de respiración para la ansiedad",
                text: "Una guía visual para practicar sin forzar el aire ni los tiempos.",
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
