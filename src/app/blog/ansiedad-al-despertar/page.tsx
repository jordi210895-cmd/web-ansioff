import type { Metadata } from "next";
import Link from "next/link";
import AppStoreLink from "@/components/app-store-link";
import BlogHeader from "@/components/blog-header";
import SiteFooter from "@/components/site-footer";
import { getBlogPost } from "@/lib/blog-posts";

const articlePost = getBlogPost("ansiedad-al-despertar");

if (!articlePost) {
  throw new Error("No se ha encontrado el artículo ansiedad-al-despertar");
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
    tags: ["ansiedad al despertar", "ansiedad por la mañana", "rutina matutina", "bienestar emocional"],
  },
  twitter: {
    card: "summary",
    title: post.title,
    description: post.description,
  },
};

const faqs = [
  {
    question: "¿Por qué me despierto con ansiedad sin una causa clara?",
    answer:
      "No siempre es posible reconocer un desencadenante al instante. Pueden influir preocupaciones, estrés, descanso insuficiente, cafeína, sustancias, medicamentos o problemas de salud que producen síntomas parecidos. La hora a la que aparece la sensación no permite diagnosticar su causa. Si se repite o interfiere con tu vida, conviene consultarlo.",
  },
  {
    question: "¿Por qué la ansiedad puede sentirse peor por la mañana?",
    answer:
      "Al despertar pueden volver de golpe las tareas y preocupaciones del día, especialmente tras un sueño poco reparador. Algunas personas también notan más los síntomas físicos en silencio. No existe una explicación única que sirva para todos, por lo que es mejor observar el patrón sin asumir que se debe a una sola hormona o enfermedad.",
  },
  {
    question: "¿Qué hago si me despierto con ansiedad?",
    answer:
      "Comprueba primero que no hay una urgencia. Después, apoya los pies, oriéntate en el lugar, respira de forma cómoda con una exhalación algo más larga, pon nombre a lo que notas y elige una sola acción pequeña para empezar la mañana. Evita buscar síntomas o revisar mensajes de inmediato si eso aumenta la activación.",
  },
  {
    question: "¿El café puede empeorar la ansiedad al despertar?",
    answer:
      "La cafeína puede empeorar los síntomas de ansiedad en algunas personas y también interferir con el sueño. Si observas una relación, registra cantidad y horario y prueba a reducirla con prudencia. Consulta a un profesional si tienes dudas, especialmente si tomas medicación o consumes mucha cafeína.",
  },
  {
    question: "¿Cuándo debo consultar por ansiedad al despertar?",
    answer:
      "Pide ayuda profesional si ocurre con frecuencia, dura semanas, empeora, afecta al trabajo o las relaciones, provoca evitación o incluye síntomas físicos nuevos. Ante una emergencia vital llama al 112. Si hay pensamientos de suicidio o riesgo de conducta suicida en España, llama al 024 o al 112 si el riesgo es inminente.",
  },
];

export default function AnxietyOnWakingArticle() {
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
          "ansiedad al despertar",
          "ansiedad por la mañana",
          "ansiedad al despertar síntomas",
          "me despierto con ansiedad",
          "ansiedad al despertar qué hacer",
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
              Despertarte con inquietud, presión en el pecho o pensamientos acelerados no te dice por sí solo cuál es la causa. Esta guía te ayuda a atravesar los primeros minutos, observar el patrón sin autodiagnosticarte y reconocer cuándo conviene pedir ayuda.
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
              La ansiedad al despertar puede relacionarse con preocupaciones, estrés, descanso poco reparador, estimulantes, medicamentos o problemas físicos que producen síntomas parecidos. Al levantarte, comprueba que estás a salvo, oriéntate, respira sin forzar y elige una primera acción pequeña. Si sucede a menudo, empeora o limita tu día, consulta a un profesional.
            </p>
          </aside>

          <nav aria-labelledby="contenido-articulo" className="mt-10 rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
            <h2 id="contenido-articulo" className="font-sora text-base font-semibold">En esta guía</h2>
            <ol className="mt-4 grid gap-2 text-sm text-[#8ab0cc] sm:grid-cols-2">
              <li><a href="#que-significa" className="hover:text-[#14b8a6]">1. Qué puede significar</a></li>
              <li><a href="#por-que-aparece" className="hover:text-[#14b8a6]">2. Qué puede influir</a></li>
              <li><a href="#primeros-minutos" className="hover:text-[#14b8a6]">3. Qué hacer al despertar</a></li>
              <li><a href="#registrar-patron" className="hover:text-[#14b8a6]">4. Cómo observar el patrón</a></li>
              <li><a href="#que-evitar" className="hover:text-[#14b8a6]">5. Qué conviene evitar</a></li>
              <li><a href="#pedir-ayuda" className="hover:text-[#14b8a6]">6. Cuándo pedir ayuda</a></li>
              <li><a href="#preguntas" className="hover:text-[#14b8a6]">7. Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <div className="mt-14 space-y-16 text-[17px] leading-8 text-[#a9c5da]">
            <section id="que-significa" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">¿Qué significa despertarse con ansiedad?</h2>
              <div className="mt-6 space-y-5">
                <p>
                  La ansiedad puede incluir miedo, inquietud, tensión, pensamientos difíciles de controlar y síntomas físicos como palpitaciones, mareo o falta de aire. Sentirla una mañana no significa automáticamente que tengas un trastorno. Importan la frecuencia, la intensidad, cuánto dura y cómo afecta a tu vida.
                </p>
                <p>
                  Algunas personas abren los ojos y notan primero el cuerpo: el corazón más presente, el estómago cerrado o una sensación de alarma. Otras empiezan a repasar tareas, conflictos o decisiones antes de levantarse. Ambas experiencias pueden sentirse como ansiedad al despertar, pero la descripción no permite saber la causa sin una valoración individual.
                </p>
                <p>
                  Tampoco es buena idea atribuir todos los síntomas a la ansiedad. Algunas afecciones físicas, sustancias y medicamentos pueden causar o empeorar sensaciones similares. Un profesional puede revisar el contexto, la historia clínica y, si hace falta, descartar otros problemas.
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-[#0e2a4a] bg-[#04152b] p-6">
                <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Síntomas que algunas personas notan por la mañana</h3>
                <ul className="mt-4 grid gap-3 text-base sm:grid-cols-2">
                  <li>• Sensación de alarma o preocupación inmediata.</li>
                  <li>• Latidos rápidos o más perceptibles.</li>
                  <li>• Respiración rápida o sensación de falta de aire.</li>
                  <li>• Tensión muscular, temblor o sudor.</li>
                  <li>• Molestias de estómago, mareo o náusea.</li>
                  <li>• Dificultad para concentrarse o empezar el día.</li>
                </ul>
              </div>
            </section>

            <section id="por-que-aparece" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">¿Por qué puede aparecer ansiedad al despertar?</h2>
              <p className="mt-6">
                No hay una explicación única. En lugar de buscar una causa universal, conviene revisar varios factores que pueden combinarse:
              </p>
              <div className="mt-7 space-y-5">
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]">Las preocupaciones vuelven antes de levantarte</h3>
                  <p className="mt-3">Trabajo, salud, dinero, relaciones o responsabilidades pueden aparecer en cuanto termina el sueño. Si tu primera acción es repasar todo lo pendiente, la sensación de amenaza puede crecer rápidamente.</p>
                </div>
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]">El descanso ha sido corto o poco reparador</h3>
                  <p className="mt-3">La ansiedad puede dificultar conciliar o mantener el sueño, y una noche fragmentada puede dejarte con menos margen para afrontar las sensaciones de la mañana. Mantener horarios regulares y revisar los hábitos de sueño ayuda a entender este círculo.</p>
                </div>
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]">Cafeína, nicotina, alcohol u otras sustancias</h3>
                  <p className="mt-3">La cafeína y otras sustancias pueden empeorar síntomas de ansiedad en algunas personas y alterar el descanso. No hace falta eliminar todo sin criterio: registra cantidad, horario y respuesta para comentarlo con un profesional si ves una relación.</p>
                </div>
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]">Medicamentos o problemas de salud</h3>
                  <p className="mt-3">Algunos medicamentos y problemas físicos pueden producir inquietud, palpitaciones, mareo o falta de aire. Si los síntomas son nuevos, cambian después de una medicación o se acompañan de señales físicas intensas, pide una valoración en vez de asumir que son ansiedad.</p>
                </div>
              </div>
              <p className="mt-6 text-sm leading-7 text-[#8ab0cc]">
                La idea de que la ansiedad matutina siempre se debe a una sola hormona simplifica demasiado el problema. La hora del síntoma es una pista para registrar, no un diagnóstico.
              </p>
            </section>

            <section id="primeros-minutos" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué hacer si te despiertas con ansiedad: una rutina de 10 minutos</h2>
              <p className="mt-6">
                No necesitas sentirte bien para empezar el día. El objetivo es reducir decisiones, comprobar tu seguridad y pasar del bucle mental a una acción concreta.
              </p>

              <ol className="mt-8 space-y-7">
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">1.</span>Comprueba si necesitas atención urgente</h3>
                  <p className="mt-3">Si hay dolor intenso en el pecho, desmayo, dificultad respiratoria grave u otro síntoma nuevo que pueda ser una emergencia, llama al 112. Una técnica de respiración no sustituye una valoración urgente.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">2.</span>Oriéntate antes de mirar el móvil</h3>
                  <p className="mt-3">Nombra dónde estás, qué día es y cuál es la primera tarea necesaria. Apoya los pies y nota tres puntos de contacto. Posponer unos minutos los mensajes y las búsquedas evita añadir información al estado de alarma.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">3.</span>Respira de forma cómoda durante 90 segundos</h3>
                  <p className="mt-3">Inhala suavemente y deja que la exhalación dure un poco más, sin llenar los pulmones al máximo ni hacer pausas forzadas. Puedes contar 3 al inhalar y 5 al exhalar. Si aparece mareo, dolor o más sensación de ahogo, detente y respira con normalidad.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">4.</span>Describe, no diagnostiques</h3>
                  <p className="mt-3">Cambia «algo malo me pasa» por una descripción: «noto tensión en el pecho, preocupación y un 7 sobre 10 de intensidad». Nombrar lo observable te permite registrar el episodio sin decidir su causa desde el miedo.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">5.</span>Elige una sola acción de dos minutos</h3>
                  <p className="mt-3">Abrir la persiana, lavarte la cara, vestirte o preparar agua son pasos suficientes. Divide la mañana hasta encontrar una acción que puedas hacer incluso con ansiedad. Después elige la siguiente.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">6.</span>Busca luz y movimiento suave si te sientan bien</h3>
                  <p className="mt-3">Pasar tiempo al aire libre y mantener actividad física forman parte de unos hábitos de sueño saludables. Una caminata breve o estirar puede ayudarte a entrar en la rutina, pero no lo conviertas en una prueba que debas superar.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">7.</span>Decide qué harás con la cafeína</h3>
                  <p className="mt-3">Si el café aumenta tus palpitaciones o inquietud, prueba a reducir cantidad o frecuencia y observa la diferencia. Evita hacer cambios bruscos si consumes mucha cafeína o tienes indicaciones médicas; puedes pedir orientación profesional.</p>
                </li>
              </ol>
            </section>

            <section id="registrar-patron" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cómo registrar la ansiedad por la mañana durante una semana</h2>
              <p className="mt-6">
                Un registro breve puede mostrar si existe relación con el sueño, determinados días o la primera actividad. No hace falta escribir mucho ni vigilarte todo el día. Anota una vez por la mañana:
              </p>
              <ul className="mt-7 grid gap-4 sm:grid-cols-2">
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Descanso</strong><span className="mt-2 block">Hora aproximada de dormir y despertares.</span></li>
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Intensidad</strong><span className="mt-2 block">Una puntuación de 0 a 10 al despertar.</span></li>
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Pensamiento</strong><span className="mt-2 block">La primera preocupación que recuerdas.</span></li>
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Cuerpo</strong><span className="mt-2 block">Síntomas concretos, sin interpretarlos.</span></li>
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Contexto</strong><span className="mt-2 block">Cafeína, alcohol, cambios de medicación o estrés.</span></li>
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Respuesta</strong><span className="mt-2 block">Qué hiciste y cómo estabas 20 minutos después.</span></li>
              </ul>
              <p className="mt-6">
                Lleva este resumen a la consulta si decides pedir ayuda. Aporta más información que intentar recordar cada episodio de memoria y evita sacar conclusiones por una sola mañana.
              </p>
            </section>

            <section id="que-evitar" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué conviene evitar cuando la mañana empieza con ansiedad</h2>
              <ul className="mt-7 space-y-4">
                <li><strong className="text-[#e8f4ff]">Buscar síntomas durante mucho tiempo.</strong> Puede aumentar la vigilancia. Anota la duda y consulta una fuente fiable o un profesional.</li>
                <li><strong className="text-[#e8f4ff]">Comprobar el pulso una y otra vez.</strong> Si existe una preocupación médica, pide valoración; repetir comprobaciones no aclara la causa.</li>
                <li><strong className="text-[#e8f4ff]">Cancelar automáticamente todo el día.</strong> Reduce la tarea al siguiente paso posible y decide después qué necesitas adaptar.</li>
                <li><strong className="text-[#e8f4ff]">Tomar medicación, suplementos o alcohol por tu cuenta.</strong> Pueden tener efectos adversos e interacciones y no sustituyen una evaluación.</li>
                <li><strong className="text-[#e8f4ff]">Forzarte a completar una rutina perfecta.</strong> Elige una práctica corta. Si una técnica aumenta el malestar, déjala.</li>
                <li><strong className="text-[#e8f4ff]">Dar por hecho que todo es psicológico.</strong> Los síntomas nuevos, intensos o diferentes merecen atención sanitaria.</li>
              </ul>
            </section>

            <section id="pedir-ayuda" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cuándo pedir ayuda profesional</h2>
              <p className="mt-6">Consulta con atención primaria o un profesional de salud mental si:</p>
              <ul className="mt-5 space-y-3">
                <li>• Te despiertas con ansiedad con frecuencia durante varias semanas.</li>
                <li>• El malestar dificulta trabajar, estudiar, cuidar de ti o relacionarte.</li>
                <li>• Empiezas a evitar actividades por miedo a los síntomas.</li>
                <li>• Tienes ataques de pánico repetidos o la intensidad está aumentando.</li>
                <li>• Los síntomas aparecen tras cambiar una medicación o el consumo de una sustancia.</li>
                <li>• Hay palpitaciones, mareo, falta de aire u otros síntomas nuevos que te preocupan.</li>
                <li>• Lo que pruebas por tu cuenta no ayuda o te cuesta mantenerte a salvo.</li>
              </ul>

              <div className="mt-8 rounded-2xl border border-[#f87171]/35 bg-[#2a0e0e]/60 p-6">
                <h3 className="font-sora text-xl font-semibold text-[#fca5a5]">Si necesitas ayuda urgente en España</h3>
                <p className="mt-3 text-base leading-7 text-[#f3caca]">
                  Ante una emergencia vital, llama al <strong>112</strong>. Si tienes pensamientos de suicidio o riesgo de conducta suicida, puedes llamar al <strong>024</strong>, un servicio nacional, gratuito, confidencial y disponible las 24 horas. El 024 no sustituye la atención sanitaria presencial cuando sea necesaria.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cómo puede acompañarte ANSIOFF por la mañana</h2>
              <p className="mt-6">
                ANSIOFF reúne una guía de respiración y un diario emocional que puedes usar para seguir una pauta conocida sin improvisar. Registra intensidad, pensamiento y respuesta, o acompaña una exhalación cómoda durante los primeros minutos.
              </p>
              <p className="mt-4">
                La app es una herramienta de bienestar. No identifica la causa de los síntomas, no diagnostica un trastorno ni sustituye a un psicólogo, médico o servicio de emergencias.
              </p>
              <AppStoreLink
                placement="blog_ansiedad_despertar_mid_cta"
                className="mt-7 inline-flex rounded-xl bg-[#14b8a6] px-6 py-3 text-sm font-semibold text-[#020e1c] hover:bg-[#0d9488]"
              >
                 Descargar ANSIOFF en App Store
              </AppStoreLink>
            </section>

            <section id="preguntas" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Preguntas frecuentes sobre ansiedad al despertar</h2>
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
                <li><a href="https://medlineplus.gov/spanish/anxiety.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: ansiedad, síntomas, causas y tratamiento</a></li>
                <li><a href="https://medlineplus.gov/spanish/ency/article/000917.htm" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: trastorno de ansiedad generalizada</a></li>
                <li><a href="https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/anxiety-fear-panic/" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">NHS: ansiedad, miedo y pánico</a></li>
                <li><a href="https://www.nimh.nih.gov/health/topics/anxiety-disorders" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">National Institute of Mental Health: trastornos de ansiedad</a></li>
                <li><a href="https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">NHLBI (NIH): hábitos saludables de sueño</a></li>
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
                href: "/blog/tecnica-5-4-3-2-1-ansiedad",
                label: "Técnicas de anclaje",
                title: "Cómo hacer la técnica 5-4-3-2-1",
                text: "Vuelve al presente con los cinco sentidos y aprende a adaptar cada paso.",
              },
              {
                href: "/blog/ansiedad-por-la-noche",
                label: "Ansiedad y sueño",
                title: "Qué hacer si la ansiedad aparece por la noche",
                text: "Un plan para bajar la activación y salir del bucle de preocupación al acostarte.",
              },
              {
                href: "/blog/palpitaciones-por-ansiedad",
                label: "Ansiedad y síntomas físicos",
                title: "Qué hacer ante palpitaciones por ansiedad",
                text: "Distingue autocuidado, valoración médica y señales de urgencia.",
              },
              {
                href: "/blog/diario-emocional-ejemplo",
                label: "Diario emocional",
                title: "Ejemplo y plantilla de diario emocional",
                text: "Aprende qué escribir con una entrada completa y una plantilla reutilizable.",
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
