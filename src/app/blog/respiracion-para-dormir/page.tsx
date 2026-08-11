import type { Metadata } from "next";
import Link from "next/link";
import AppStoreLink from "@/components/app-store-link";
import BlogHeader from "@/components/blog-header";
import SiteFooter from "@/components/site-footer";
import { getBlogPost } from "@/lib/blog-posts";

const articlePost = getBlogPost("respiracion-para-dormir");

if (!articlePost) {
  throw new Error("No se ha encontrado el artículo respiracion-para-dormir");
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
    tags: ["respiración para dormir", "ejercicios de respiración", "sueño", "relajación"],
  },
  twitter: {
    card: "summary",
    title: post.title,
    description: post.description,
  },
};

const faqs = [
  {
    question: "¿Cuál es la mejor respiración para dormir?",
    answer:
      "No hay un ritmo único que sea el mejor para todas las personas. Empieza con una respiración suave y regular que no exija llenar los pulmones, retener el aire ni alcanzar una cuenta concreta. El ejercicio más útil será el que puedas hacer sin mareo, presión ni sensación de falta de aire.",
  },
  {
    question: "¿Una técnica de respiración puede hacerme dormir rápido?",
    answer:
      "No se puede garantizar. La respiración puede formar parte de una rutina para bajar el ritmo antes de acostarte, pero las técnicas de relajación por sí solas no han demostrado resolver el insomnio crónico. Si llevas meses con problemas de sueño o afectan a tu vida diaria, solicita valoración profesional.",
  },
  {
    question: "¿Cuánto tiempo debo practicar antes de dormir?",
    answer:
      "Puedes empezar con dos a cinco minutos y observar cómo te sientes. No necesitas prolongarlo hasta quedarte dormido. Si contar te mantiene alerta, termina el ejercicio y deja que la respiración vuelva a su ritmo espontáneo.",
  },
  {
    question: "¿La respiración 4-7-8 es peligrosa?",
    answer:
      "La retención de siete segundos y la exhalación larga pueden resultar incómodas para algunas personas. No fuerces los tiempos. Si aparece mareo, dolor, hormigueo, ansiedad o sensación de ahogo, detente y respira con normalidad. Consulta con un profesional si tienes una enfermedad respiratoria, cardiovascular u otra condición que pueda afectar la práctica.",
  },
  {
    question: "¿Qué es la respiración militar para dormir?",
    answer:
      "En internet se utiliza ese nombre para distintas combinaciones de respiración, relajación muscular y visualización; no describe un único protocolo clínico. Desconfía de promesas como dormir en uno o dos minutos y elige instrucciones claras que puedas adaptar sin forzar el aire.",
  },
  {
    question: "¿Qué hago si al acostarme siento que no puedo respirar?",
    answer:
      "No lo trates únicamente con un ejercicio. Los ronquidos fuertes, pausas respiratorias observadas, jadeos o sensación de ahogo al dormir y somnolencia intensa durante el día necesitan valoración sanitaria porque pueden aparecer en trastornos como la apnea del sueño.",
  },
  {
    question: "¿Cuándo conviene consultar por problemas de sueño?",
    answer:
      "Consulta si los cambios de hábitos no ayudan, llevas meses con insomnio, el problema afecta a tu vida o existen señales de otro trastorno del sueño. Ante dificultad respiratoria intensa, dolor torácico, desmayo u otra emergencia vital, llama al 112.",
  },
];

export default function BreathingForSleepArticle() {
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
          "respiración para dormir",
          "ejercicios de respiración para dormir",
          "técnicas de respiración para dormir",
          "cómo respirar para dormir",
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
              No necesitas tomar el máximo aire ni aguantar una cuenta difícil. Aquí tienes tres ejercicios de respiración para dormir que puedes adaptar, una forma de elegir entre ellos y una rutina breve que no depende de quedarte dormido al instante.
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
              Para probar una respiración antes de dormir, túmbate o siéntate con apoyo, observa el aire sin cambiarlo y elige un ritmo cómodo: contar igual al inhalar y exhalar, alargar suavemente la exhalación o dirigir el aire hacia el abdomen. Practica de dos a cinco minutos sin forzar y vuelve a tu respiración normal si aparece malestar.
            </p>
          </aside>

          <nav aria-labelledby="contenido-articulo" className="mt-10 rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
            <h2 id="contenido-articulo" className="font-sora text-base font-semibold">En esta guía</h2>
            <ol className="mt-4 grid gap-2 text-sm text-[#8ab0cc] sm:grid-cols-2">
              <li><a href="#que-puede-hacer" className="hover:text-[#14b8a6]">1. Qué puede aportar la respiración</a></li>
              <li><a href="#preparacion" className="hover:text-[#14b8a6]">2. Cómo prepararte</a></li>
              <li><a href="#ejercicios" className="hover:text-[#14b8a6]">3. Tres ejercicios paso a paso</a></li>
              <li><a href="#elegir" className="hover:text-[#14b8a6]">4. Cómo elegir un ritmo</a></li>
              <li><a href="#rutina" className="hover:text-[#14b8a6]">5. Rutina nocturna de 5 minutos</a></li>
              <li><a href="#limites" className="hover:text-[#14b8a6]">6. Límites y cuándo consultar</a></li>
              <li><a href="#preguntas" className="hover:text-[#14b8a6]">7. Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <div className="mt-14 space-y-16 text-[17px] leading-8 text-[#a9c5da]">
            <section id="que-puede-hacer" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué puede aportar una respiración para dormir y qué no</h2>
              <div className="mt-6 space-y-5">
                <p>
                  Un ejercicio respiratorio dirige la atención a una tarea sencilla y puede formar parte de una pausa de relajación. El objetivo no es introducir más aire, sino encontrar un ritmo suave, regular y cómodo. Si intentas respirar demasiado profundo o rápido, puedes marearte o sentir más activación.
                </p>
                <p>
                  Practicar antes de acostarte puede ayudarte a marcar una transición entre la actividad del día y el descanso. Sin embargo, ninguna cuenta garantiza que te duermas rápido. La evidencia disponible no permite considerar las técnicas de relajación por sí solas como una solución especialmente eficaz para el insomnio crónico; pueden ser una parte de un plan más amplio.
                </p>
                <p>
                  Si el problema principal es que anticipas «tengo que dormirme ya», usa la práctica como cinco minutos de descanso y no como un examen. Comprobar el reloj o repetir ciclos durante mucho tiempo puede aumentar la presión por dormir.
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-[#0e2a4a] bg-[#04152b] p-6">
                <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Una expectativa más útil</h3>
                <p className="mt-3 text-base">
                  Cambia «esta respiración tiene que dormirme» por «voy a practicar un ritmo cómodo durante tres minutos y después observaré cómo estoy». Dormirse puede llegar después, pero no es una fase que puedas ordenar al cuerpo.
                </p>
              </div>
            </section>

            <section id="preparacion" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cómo prepararte antes de un ejercicio de respiración</h2>
              <ol className="mt-8 space-y-7">
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">1.</span>Busca una postura con apoyo</h3>
                  <p className="mt-3">Puedes tumbarte o sentarte con la espalda apoyada. Afloja prendas que restrinjan la respiración. No necesitas adoptar una postura perfecta ni mantener el cuerpo rígido.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">2.</span>Observa tres respiraciones normales</h3>
                  <p className="mt-3">Antes de contar, nota dónde se mueve el cuerpo y cuánto dura el aire de forma espontánea. Esta referencia evita elegir una pauta muy alejada de tu ritmo.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">3.</span>Elige una duración breve</h3>
                  <p className="mt-3">Empieza con dos o tres minutos. Puedes continuar hasta cinco si resulta cómodo. Más tiempo no significa necesariamente más relajación.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">4.</span>Decide cuándo parar</h3>
                  <p className="mt-3">Detén la práctica si aparece mareo, dolor, hormigueo, presión, ansiedad creciente o sensación de falta de aire. Recupera tu respiración habitual y solicita ayuda si el síntoma es intenso o no cede.</p>
                </li>
              </ol>
            </section>

            <section id="ejercicios" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Tres ejercicios de respiración para dormir paso a paso</h2>
              <p className="mt-6">
                Las cuentas son orientativas. Acórtalas o deja de contar si tienes que esforzarte. Respira con suavidad y evita llenar los pulmones al máximo.
              </p>

              <div className="mt-8 space-y-8">
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <p className="font-sora text-xs font-bold uppercase tracking-[2px] text-[#14b8a6]">EJERCICIO 1</p>
                  <h3 className="mt-3 font-sora text-2xl font-semibold text-[#e8f4ff]">Respiración regular con cuenta igual</h3>
                  <ol className="mt-5 space-y-3 text-base">
                    <li><strong className="text-[#4ddbc4]">1.</strong> Inhala suavemente por la nariz mientras cuentas de 1 a 4.</li>
                    <li><strong className="text-[#4ddbc4]">2.</strong> Exhala sin empujar el aire mientras cuentas de 1 a 4.</li>
                    <li><strong className="text-[#4ddbc4]">3.</strong> Repite entre seis y diez ciclos.</li>
                    <li><strong className="text-[#4ddbc4]">4.</strong> Si cuatro es largo, utiliza una cuenta de 2 o 3.</li>
                  </ol>
                  <p className="mt-5 text-base">Puede encajar si quieres una referencia simétrica y no te resulta cómodo retener el aire.</p>
                </div>

                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <p className="font-sora text-xs font-bold uppercase tracking-[2px] text-[#14b8a6]">EJERCICIO 2</p>
                  <h3 className="mt-3 font-sora text-2xl font-semibold text-[#e8f4ff]">Exhalación un poco más larga</h3>
                  <ol className="mt-5 space-y-3 text-base">
                    <li><strong className="text-[#4ddbc4]">1.</strong> Inhala con comodidad durante una cuenta de 3.</li>
                    <li><strong className="text-[#4ddbc4]">2.</strong> Exhala suavemente durante una cuenta de 4.</li>
                    <li><strong className="text-[#4ddbc4]">3.</strong> Repite cinco ciclos y comprueba si hay esfuerzo.</li>
                    <li><strong className="text-[#4ddbc4]">4.</strong> Mantén 3-4 o prueba 4-5 solo si el aire fluye sin tensión.</li>
                  </ol>
                  <p className="mt-5 text-base">No exprimas el aire al final ni retrases la siguiente inhalación. La diferencia entre ambas fases debe ser pequeña y cómoda.</p>
                </div>

                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <p className="font-sora text-xs font-bold uppercase tracking-[2px] text-[#14b8a6]">EJERCICIO 3</p>
                  <h3 className="mt-3 font-sora text-2xl font-semibold text-[#e8f4ff]">Respiración abdominal sin una cuenta fija</h3>
                  <ol className="mt-5 space-y-3 text-base">
                    <li><strong className="text-[#4ddbc4]">1.</strong> Coloca una mano sobre el abdomen y otra donde te resulte cómoda.</li>
                    <li><strong className="text-[#4ddbc4]">2.</strong> Deja que el abdomen se mueva suavemente al entrar el aire.</li>
                    <li><strong className="text-[#4ddbc4]">3.</strong> Suelta el aire sin contraer con fuerza el vientre.</li>
                    <li><strong className="text-[#4ddbc4]">4.</strong> Continúa durante uno o dos minutos con el mínimo esfuerzo posible.</li>
                  </ol>
                  <p className="mt-5 text-base">Puede ser una alternativa si los números te mantienen pendiente de hacerlo «bien». El movimiento puede ser pequeño; no intentes empujar la mano.</p>
                </div>
              </div>
            </section>

            <section id="elegir" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cómo elegir una técnica de respiración para dormir</h2>
              <p className="mt-6">
                Elige por comodidad, no por el número más llamativo. Prueba un solo ejercicio durante varias noches antes de cambiarlo y registra si facilita una transición tranquila, si no notas diferencia o si aumenta la activación.
              </p>

              <div className="mt-8 grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Si retener el aire incomoda</strong><span className="mt-2 block">Usa cuenta igual o respiración abdominal.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Si necesitas una pauta clara</strong><span className="mt-2 block">Empieza con 4 al inhalar y 4 al exhalar.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Si contar te activa</strong><span className="mt-2 block">Observa el abdomen sin imponer segundos.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Si quieres una exhalación larga</strong><span className="mt-2 block">Prueba 3 al inhalar y 4 al exhalar.</span></div>
              </div>

              <div className="mt-8 rounded-2xl border border-[#14b8a6]/30 bg-[#0d2d3e]/60 p-6">
                <h3 className="font-sora text-xl font-semibold text-[#4ddbc4]">¿Y la respiración 4-7-8?</h3>
                <p className="mt-3 text-base leading-7 text-[#c8dff0]">
                  Es un ritmo concreto que incluye una retención: inhalar 4, mantener 7 y exhalar 8. Puede resultarte fácil de seguir o demasiado exigente. Si quieres probarla, consulta la <Link href="/respiracion-4-7-8" className="font-semibold text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">guía de respiración 4-7-8</Link>, acorta los tiempos cuando sea necesario y vuelve al ritmo normal ante cualquier molestia.
                </p>
              </div>
            </section>

            <section id="rutina" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Rutina de respiración de cinco minutos antes de dormir</h2>
              <p className="mt-6">
                Integra el ejercicio dentro de una transición más amplia. Los hábitos de sueño suelen importar más que encontrar una cuenta perfecta.
              </p>
              <ol className="mt-8 space-y-5">
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Minuto 0-1 · Preparar</strong><span className="mt-2 block">Deja el móvil, baja la luz y adopta una postura cómoda. Practica cuando tengas sueño, no como obligación a una hora exacta.</span></li>
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Minuto 1-2 · Observar</strong><span className="mt-2 block">Nota tres respiraciones espontáneas, la mandíbula, los hombros y los puntos de apoyo.</span></li>
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Minuto 2-4 · Practicar</strong><span className="mt-2 block">Elige uno de los tres ejercicios. Si pierdes la cuenta, empieza donde estás sin reiniciar.</span></li>
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Minuto 4-5 · Soltar</strong><span className="mt-2 block">Deja de dirigir el aire y observa el ritmo natural. Termina aunque todavía estés despierto.</span></li>
              </ol>
              <p className="mt-6">
                Puedes combinarla con una hora de desconexión, un dormitorio oscuro y tranquilo y horarios regulares. Si la preocupación es el problema principal, revisa también qué hacer cuando aparece <Link href="/blog/ansiedad-por-la-noche" className="font-semibold text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">ansiedad por la noche</Link>.
              </p>
            </section>

            <section id="limites" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Errores, límites y cuándo consultar</h2>
              <ul className="mt-7 space-y-4">
                <li><strong className="text-[#e8f4ff]">Respirar al máximo.</strong> La profundidad debe ser cómoda. Más aire no significa más relajación.</li>
                <li><strong className="text-[#e8f4ff]">Forzar una cuenta.</strong> Acorta los segundos si llegas al final con tensión o urgencia por inhalar.</li>
                <li><strong className="text-[#e8f4ff]">Repetir hasta dormirte.</strong> Pon un final breve para evitar convertir la técnica en otra exigencia.</li>
                <li><strong className="text-[#e8f4ff]">Cambiar de método cada noche.</strong> Mantener unos días una pauta cómoda facilita saber cómo te sienta.</li>
                <li><strong className="text-[#e8f4ff]">Atribuir la falta de aire a ansiedad.</strong> Los síntomas respiratorios nocturnos también pueden tener causas médicas.</li>
                <li><strong className="text-[#e8f4ff]">Sustituir un tratamiento.</strong> Una app o un ejercicio no reemplazan la terapia cognitivo-conductual para el insomnio ni la atención sanitaria.</li>
              </ul>

              <p className="mt-6">
                Consulta si llevas meses con insomnio, los cambios de hábitos no ayudan o el cansancio dificulta tu vida diaria. Los ronquidos fuertes, pausas respiratorias observadas, jadeos, despertares con sensación de ahogo o somnolencia intensa durante el día pueden aparecer en la apnea del sueño y requieren valoración. No conduzcas si sientes sueño.
              </p>

              <p className="mt-6">
                Las técnicas de relajación suelen considerarse seguras para personas sanas, pero ocasionalmente pueden aumentar la ansiedad, provocar pensamientos intrusivos o generar miedo a perder el control. Si una práctica empeora de forma repetida tu malestar, déjala y coméntalo con un profesional.
              </p>

              <div className="mt-8 rounded-2xl border border-[#f87171]/35 bg-[#2a0e0e]/60 p-6">
                <h3 className="font-sora text-xl font-semibold text-[#fca5a5]">Si necesitas ayuda urgente en España</h3>
                <p className="mt-3 text-base leading-7 text-[#f3caca]">
                  Ante dificultad respiratoria intensa, dolor torácico, desmayo u otra emergencia vital, llama al <strong>112</strong>. Si tienes pensamientos de suicidio o riesgo de conducta suicida, puedes llamar al <strong>024</strong> o al 112 si el riesgo es inminente.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Sigue el ritmo visual de ANSIOFF</h2>
              <p className="mt-6">
                ANSIOFF incluye una guía visual de respiración para que no tengas que controlar el tiempo por tu cuenta. Puedes probar un ritmo breve, detenerlo si resulta incómodo y combinarlo con sonidos relajantes o un registro en el diario emocional.
              </p>
              <p className="mt-4">
                ANSIOFF es una herramienta de bienestar. No mide tu respiración, no diagnostica un trastorno del sueño y no sustituye la valoración de un médico, psicólogo o especialista en sueño.
              </p>
              <AppStoreLink
                placement="blog_respiracion_dormir_mid_cta"
                className="mt-7 inline-flex rounded-xl bg-[#14b8a6] px-6 py-3 text-sm font-semibold text-[#020e1c] hover:bg-[#0d9488]"
              >
                 Descargar ANSIOFF en App Store
              </AppStoreLink>
            </section>

            <section id="preguntas" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Preguntas frecuentes sobre la respiración para dormir</h2>
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
                Hemos priorizado organismos sanitarios públicos y distinguido entre una práctica de relajación y el tratamiento de un problema de sueño.
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6">
                <li><a href="https://www.nhs.uk/mental-health/self-help/guides-tools-and-activities/breathing-exercises-for-stress/" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">NHS: ejercicio de respiración suave y sin forzar</a></li>
                <li><a href="https://www.nhs.uk/conditions/insomnia/" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">NHS: insomnio, hábitos de sueño y cuándo consultar</a></li>
                <li><a href="https://www.nccih.nih.gov/health/relaxation-techniques-what-you-need-to-know" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">NCCIH: evidencia y seguridad de las técnicas de relajación</a></li>
                <li><a href="https://www.va.gov/WHOLEHEALTHLIBRARY/docs/The-Power-Of-Breath-Diaphragmatic-Breathing.pdf" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">Departamento de Asuntos de Veteranos de EE. UU.: respiración diafragmática</a></li>
                <li><a href="https://medlineplus.gov/spanish/sleepapnea.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: apnea del sueño y respiración interrumpida</a></li>
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
          <div className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                href: "/blog/ansiedad-por-la-noche",
                label: "Ansiedad y sueño",
                title: "Qué hacer si la ansiedad aparece por la noche",
                text: "Un plan para bajar la activación y salir del bucle de preocupación.",
              },
              {
                href: "/blog/ansiedad-al-despertar",
                label: "Ansiedad y rutinas",
                title: "Qué hacer si te despiertas con ansiedad",
                text: "Una rutina breve para los primeros minutos de la mañana.",
              },
              {
                href: "/blog/tecnica-5-4-3-2-1-ansiedad",
                label: "Técnicas de anclaje",
                title: "Cómo hacer la técnica 5-4-3-2-1",
                text: "Orienta la atención al presente con los cinco sentidos.",
              },
              {
                href: "/blog/diario-emocional-ejemplo",
                label: "Diario emocional",
                title: "Ejemplo y plantilla de diario emocional",
                text: "Registra qué ocurre antes de acostarte y cómo respondes.",
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
