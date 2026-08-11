import type { Metadata } from "next";
import Link from "next/link";
import AppStoreLink from "@/components/app-store-link";
import BlogHeader from "@/components/blog-header";
import SiteFooter from "@/components/site-footer";
import { getBlogPost } from "@/lib/blog-posts";

const articlePost = getBlogPost("ansiedad-por-la-noche");

if (!articlePost) {
  throw new Error("No se ha encontrado el artículo ansiedad-por-la-noche");
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
    tags: ["ansiedad por la noche", "ansiedad al dormir", "sueño", "respiración"],
  },
  twitter: {
    card: "summary",
    title: post.title,
    description: post.description,
  },
};

const faqs = [
  {
    question: "¿Por qué me da ansiedad por la noche?",
    answer:
      "No existe una única causa. Al acostarte pueden hacerse más visibles las preocupaciones del día, y el estrés o la ansiedad están entre las causas frecuentes de dificultad para dormir. La cafeína, el alcohol, algunos medicamentos y determinados problemas de salud o del sueño también pueden influir. Si ocurre con frecuencia, conviene consultarlo en lugar de autodiagnosticarse.",
  },
  {
    question: "¿Qué hago si no puedo dormir por ansiedad?",
    answer:
      "Reduce primero la activación: prueba una respiración cómoda, dirige la atención al entorno con la técnica 5-4-3-2-1 y anota las preocupaciones para retomarlas al día siguiente. Si sigues despierto, haz una actividad tranquila con poca luz y vuelve a la cama cuando aparezca sueño.",
  },
  {
    question: "¿Es normal despertarse con ansiedad de madrugada?",
    answer:
      "Puede ocurrir de forma puntual, pero despertarse repetidamente con miedo, falta de aire, palpitaciones u otros síntomas merece una valoración profesional para descartar causas de ansiedad, sueño o salud física.",
  },
  {
    question: "¿Puedo hacer la respiración 4-7-8 en la cama?",
    answer:
      "Puedes probarla si los tiempos te resultan cómodos, sin llenar los pulmones al máximo ni forzar la pausa. Si aparece mareo, dolor o sensación de ahogo, detén el ejercicio y vuelve a respirar con normalidad.",
  },
  {
    question: "¿Cuándo debo pedir ayuda profesional?",
    answer:
      "Consulta si la ansiedad o el insomnio se repiten, duran semanas, afectan a tu vida diaria o las medidas que pruebas no ayudan. Ante una emergencia vital llama al 112. Si hay pensamientos de suicidio o riesgo de conducta suicida en España, llama al 024 o al 112 si el riesgo es inminente.",
  },
];

export default function AnxietyAtNightArticle() {
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
          "ansiedad por la noche",
          "ansiedad al dormir",
          "no puedo dormir por ansiedad",
          "por qué me da ansiedad por la noche",
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
              Si la ansiedad aparece justo cuando vas a descansar, no intentes resolver toda tu vida desde la cama. Primero baja el nivel de activación, vuelve al presente y deja las decisiones para mañana. Aquí tienes un plan concreto y seguro para hacerlo.
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
              La ansiedad por la noche puede sentirse más intensa cuando disminuyen las distracciones y aparecen preocupaciones pendientes. Para cortar el bucle, prueba una respiración cómoda, la técnica 5-4-3-2-1 y una nota breve con lo que retomarás mañana. Si ocurre a menudo, afecta a tu día o incluye síntomas nuevos o intensos, consulta a un profesional.
            </p>
          </aside>

          <nav aria-labelledby="contenido-articulo" className="mt-10 rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
            <h2 id="contenido-articulo" className="font-sora text-base font-semibold">En esta guía</h2>
            <ol className="mt-4 grid gap-2 text-sm text-[#8ab0cc] sm:grid-cols-2">
              <li><a href="#por-que-aparece" className="hover:text-[#14b8a6]">1. Por qué aparece por la noche</a></li>
              <li><a href="#que-hacer" className="hover:text-[#14b8a6]">2. Qué hacer paso a paso</a></li>
              <li><a href="#que-evitar" className="hover:text-[#14b8a6]">3. Qué conviene evitar</a></li>
              <li><a href="#rutina" className="hover:text-[#14b8a6]">4. Rutina breve antes de dormir</a></li>
              <li><a href="#pedir-ayuda" className="hover:text-[#14b8a6]">5. Cuándo pedir ayuda</a></li>
              <li><a href="#preguntas" className="hover:text-[#14b8a6]">6. Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <div className="mt-14 space-y-16 text-[17px] leading-8 text-[#a9c5da]">
            <section id="por-que-aparece" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">¿Por qué puede aparecer ansiedad por la noche?</h2>
              <div className="mt-6 space-y-5">
                <p>
                  Sentir ansiedad alguna vez no significa tener un trastorno. La ansiedad es una respuesta que puede aparecer ante preocupaciones, incertidumbre o estrés. Se convierte en un problema que conviene valorar cuando no desaparece, se repite y empieza a interferir con el descanso o la vida diaria.
                </p>
                <p>
                  Por la noche hay menos tareas externas ocupando la atención. Eso puede hacer que las conversaciones pendientes, las preocupaciones económicas, el trabajo o la salud se sientan más presentes. A la vez, querer dormirse a toda costa añade presión: aparece el pensamiento «mañana estaré fatal», aumenta la vigilancia y resulta todavía más difícil desconectar.
                </p>
                <p>
                  El estrés y la ansiedad están entre las causas frecuentes del insomnio, y la propia ansiedad puede incluir dificultad para conciliar o mantener el sueño. Esto no permite saber por sí solo cuál es la causa en tu caso. La cafeína, el alcohol, la nicotina, algunos medicamentos, los horarios irregulares y ciertos problemas físicos o del sueño también pueden influir.
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-[#0e2a4a] bg-[#04152b] p-6">
                <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Señales que pueden acompañarla</h3>
                <ul className="mt-4 grid gap-3 text-base sm:grid-cols-2">
                  <li>• Pensamientos que saltan de un tema a otro.</li>
                  <li>• Tensión, inquietud o dificultad para relajarte.</li>
                  <li>• Latidos más perceptibles, sudor o temblor.</li>
                  <li>• Sensación de falta de aire o respiración rápida.</li>
                  <li>• Miedo a no dormir o a perder el control.</li>
                  <li>• Despertares con dificultad para volver a dormir.</li>
                </ul>
              </div>

              <p className="mt-6 text-sm leading-7 text-[#8ab0cc]">
                Estos síntomas también pueden tener otras causas. No des por hecho que todo es ansiedad, especialmente si el dolor en el pecho, la falta de aire, el desmayo u otro síntoma es nuevo, intenso o distinto a lo habitual.
              </p>
            </section>

            <section id="que-hacer" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué hacer si no puedes dormir por ansiedad: 7 pasos</h2>
              <p className="mt-6">
                No necesitas completar todo el plan. Empieza por el paso que requiera menos esfuerzo y conserva los demás para otra noche.
              </p>

              <ol className="mt-8 space-y-7">
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">1.</span>Comprueba primero que estás a salvo</h3>
                  <p className="mt-3">Siéntate, apoya los pies y observa lo que ocurre. Si los síntomas son nuevos, muy intensos o podrían ser una urgencia médica, no intentes solucionarlos solo con una técnica de relajación: pide ayuda.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">2.</span>Cambia el objetivo: descansar, no obligarte a dormir</h3>
                  <p className="mt-3">Repite una frase sencilla: «Ahora no tengo que resolverlo; solo voy a descansar unos minutos». Dormir no es una acción que puedas forzar. Reducir la lucha evita añadir otra preocupación al momento.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">3.</span>Haz dos minutos de respiración cómoda</h3>
                  <p className="mt-3">Inhala suavemente por la nariz y deja que la exhalación sea un poco más larga, sin llenar los pulmones al máximo. Puedes contar 4 al inhalar y 6 al exhalar. Si prefieres la respiración 4-7-8, úsala solo si mantener el aire te resulta cómodo. Detente si aparece mareo, dolor o sensación de ahogo.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">4.</span>Vuelve al presente con el método 5-4-3-2-1</h3>
                  <p className="mt-3">Nombra 5 cosas que ves, 4 sensaciones de contacto, 3 sonidos, 2 olores y 1 sabor. No busques sensaciones especiales: fíjate en detalles normales, como el peso de la manta, un ruido lejano o el sabor de la pasta de dientes.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">5.</span>Saca la preocupación de la cabeza y ponla por escrito</h3>
                  <p className="mt-3">Escribe tres líneas: «qué me preocupa», «qué puedo hacer mañana» y «qué no depende de mí ahora». No redactes una solución perfecta. El objetivo es dejar un recordatorio para que tu mente no tenga que repetirlo.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">6.</span>Si sigues despierto, cambia de escenario</h3>
                  <p className="mt-3">Si llevas un rato intentando dormir y notas que aumenta la frustración, levántate y haz una actividad tranquila con poca luz, como leer unas páginas en papel. Vuelve a la cama cuando aparezca sueño. Evita convertir la cama en el lugar donde luchas contra los pensamientos.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">7.</span>Retoma mañana un horario normal</h3>
                  <p className="mt-3">Una mala noche invita a quedarse más tiempo en la cama, pero mantener una hora de levantarte estable ayuda a proteger el ritmo de sueño. Trátate con más margen durante el día y evita conducir si tienes somnolencia.</p>
                </li>
              </ol>
            </section>

            <section id="que-evitar" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué conviene evitar cuando la ansiedad no te deja dormir</h2>
              <ul className="mt-7 space-y-4">
                <li><strong className="text-[#e8f4ff]">Mirar la hora cada pocos minutos.</strong> Convierte el descanso en una cuenta atrás y alimenta la presión por dormir.</li>
                <li><strong className="text-[#e8f4ff]">Buscar síntomas sin parar.</strong> Si necesitas información médica, anota la duda y consúltala con una fuente fiable o un profesional al día siguiente.</li>
                <li><strong className="text-[#e8f4ff]">Usar alcohol para desconectar.</strong> Puede facilitar que te duermas al principio, pero empeorar la calidad del sueño y contribuir a problemas de salud mental.</li>
                <li><strong className="text-[#e8f4ff]">Tomar medicación o suplementos por tu cuenta.</strong> Los productos para dormir pueden tener efectos adversos e interacciones. Consulta antes con un profesional sanitario.</li>
                <li><strong className="text-[#e8f4ff]">Exigirte completar todas las técnicas.</strong> Una sola acción pequeña es suficiente. Si una práctica te activa más, déjala.</li>
              </ul>
            </section>

            <section id="rutina" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Una rutina de 15 minutos para prevenir el bucle nocturno</h2>
              <p className="mt-6">
                Practicar antes de estar muy activado facilita recordar los pasos. Puedes probar esta secuencia durante una semana y registrar qué parte te resulta útil:
              </p>
              <ol className="mt-7 grid gap-4 sm:grid-cols-2">
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">5 minutos</strong><span className="mt-2 block">Anota pendientes y la primera acción de mañana.</span></li>
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">3 minutos</strong><span className="mt-2 block">Sigue una respiración lenta y cómoda.</span></li>
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">5 minutos</strong><span className="mt-2 block">Lee en papel o escucha un sonido suave a bajo volumen.</span></li>
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">2 minutos</strong><span className="mt-2 block">Haz el 5-4-3-2-1 y deja el móvil fuera de alcance.</span></li>
              </ol>
              <p className="mt-6">
                También ayuda mantener horarios regulares, reservar la última hora para actividades tranquilas, reducir la luz intensa y evitar la cafeína en las horas previas. No necesitas una rutina perfecta: busca una que puedas repetir.
              </p>
            </section>

            <section id="pedir-ayuda" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cuándo pedir ayuda profesional</h2>
              <p className="mt-6">Pide cita con un profesional de atención primaria o salud mental si:</p>
              <ul className="mt-5 space-y-3">
                <li>• La ansiedad nocturna se repite durante semanas o los problemas de sueño duran meses.</li>
                <li>• El cansancio afecta al trabajo, los estudios, la conducción o tus relaciones.</li>
                <li>• Tienes ataques de pánico frecuentes o empiezas a evitar dormir, salir o quedarte solo.</li>
                <li>• Te despiertas con ahogo, ronquidos intensos o pausas de respiración observadas por otra persona.</li>
                <li>• Los síntomas comenzaron después de cambiar una medicación o consumir una sustancia.</li>
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
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cómo puede acompañarte ANSIOFF</h2>
              <p className="mt-6">
                ANSIOFF reúne una guía de respiración, un diario emocional, sonidos relajantes y un Kit SOS para que no tengas que decidir desde cero qué hacer. Puedes guardar una preocupación en el diario, seguir un ritmo visual y volver a una pauta conocida cuando la mente se acelera.
              </p>
              <p className="mt-4">
                La app es una herramienta de bienestar. No diagnostica, no trata el insomnio ni sustituye a un psicólogo, médico o servicio de emergencias.
              </p>
              <AppStoreLink
                placement="blog_ansiedad_noche_mid_cta"
                className="mt-7 inline-flex rounded-xl bg-[#14b8a6] px-6 py-3 text-sm font-semibold text-[#020e1c] hover:bg-[#0d9488]"
              >
                 Descargar ANSIOFF en App Store
              </AppStoreLink>
            </section>

            <section id="preguntas" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Preguntas frecuentes sobre ansiedad por la noche</h2>
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
                <li><a href="https://medlineplus.gov/spanish/ency/article/000917.htm" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: trastorno de ansiedad generalizada</a></li>
                <li><a href="https://www.nhs.uk/conditions/insomnia/" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">NHS: insomnio, causas y hábitos de sueño</a></li>
                <li><a href="https://www.nhs.uk/mental-health/feelings-symptoms-behaviours/feelings-and-symptoms/anxiety-fear-panic/" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">NHS: ansiedad, miedo y pánico</a></li>
                <li><a href="https://oxfordhealth.nhs.uk/camhs/self-care/sleep/relaxation/ground-yourself/" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">Oxford Health NHS: técnica de anclaje 5-4-3-2-1</a></li>
                <li><a href="https://www.nhlbi.nih.gov/health/sleep-deprivation/healthy-sleep-habits" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">NHLBI (NIH): hábitos saludables de sueño</a></li>
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
                href: "/respiracion-para-la-ansiedad",
                label: "Respiración",
                title: "Ejercicios de respiración para la ansiedad",
                text: "Una guía visual para practicar sin forzar el aire ni los tiempos.",
              },
              {
                href: "/respiracion-4-7-8",
                label: "Paso a paso",
                title: "Cómo hacer la respiración 4-7-8",
                text: "Conoce cada fase y qué hacer si mantener el aire resulta incómodo.",
              },
              {
                href: "/diario-emocional",
                label: "Diario emocional",
                title: "Qué escribir para observar patrones",
                text: "Una estructura sencilla para registrar situación, emoción y pensamiento.",
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
