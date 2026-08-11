import type { Metadata } from "next";
import Link from "next/link";
import AppStoreLink from "@/components/app-store-link";
import BlogHeader from "@/components/blog-header";
import SiteFooter from "@/components/site-footer";
import { getBlogPost } from "@/lib/blog-posts";

const articlePost = getBlogPost("que-decir-a-persona-con-ansiedad");

if (!articlePost) {
  throw new Error("No se ha encontrado el artículo que-decir-a-persona-con-ansiedad");
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
    tags: ["qué decir a una persona con ansiedad", "apoyo emocional", "crisis de ansiedad", "pareja"],
  },
  twitter: {
    card: "summary",
    title: post.title,
    description: post.description,
  },
};

const faqs = [
  {
    question: "¿Qué decirle a una persona con ansiedad?",
    answer:
      "Puedes empezar con frases sencillas: «Estoy aquí contigo», «¿Quieres que te escuche o que pensemos qué hacer?» y «¿Qué te ayudaría ahora?». Escucha la respuesta, valida que el momento es difícil y evita prometer que todo se resolverá enseguida.",
  },
  {
    question: "¿Qué no decir a una persona con ansiedad?",
    answer:
      "Evita «cálmate», «no es para tanto», «todo está en tu cabeza», «piensa en positivo» o «yo también me estreso». Estas frases pueden restar importancia a la experiencia. Sustitúyelas por una observación, una pregunta y una oferta concreta de apoyo.",
  },
  {
    question: "¿Cómo ayudar a una persona con ansiedad a distancia?",
    answer:
      "Envía un mensaje corto, pregunta si prefiere escribir o hablar y evita mandar muchas instrucciones seguidas. Puedes decir: «No tienes que responder ahora; estaré pendiente» y acordar cuándo volverás a contactar. Si hay riesgo inmediato, intenta conocer su ubicación y llama al 112.",
  },
  {
    question: "¿Cómo ayudar a mi pareja con ansiedad sin agobiarla?",
    answer:
      "Pregunta qué tipo de apoyo desea, respeta que a veces no quiera hablar y acuerden en un momento tranquilo qué suele ayudar. Acompañar no significa revisar constantemente, decidir por la otra persona ni asumir toda la responsabilidad de su bienestar.",
  },
  {
    question: "¿Qué decir durante un ataque de ansiedad?",
    answer:
      "Habla despacio y con frases breves: «Estoy contigo», «Vamos momento a momento» y «¿Qué sueles necesitar cuando te ocurre?». Reduce estímulos si es posible y seguro. Si quiere acompasar la respiración, muestra un ritmo suave sin obligarla a respirar profundo ni a mantener contacto visual.",
  },
  {
    question: "¿Debo abrazar o tocar a la persona?",
    answer:
      "Pregunta antes: «¿Quieres que te coja la mano o prefieres espacio?». El contacto puede ayudar a unas personas y aumentar el malestar de otras. Si no puede responder, prioriza la seguridad y evita sujetarla salvo que exista un peligro físico inmediato.",
  },
  {
    question: "¿Cuándo hay que llamar al 112?",
    answer:
      "Llama al 112 ante dificultad respiratoria intensa, pérdida de conocimiento, dolor torácico nuevo o intenso, signos de ictus, una lesión, una posible intoxicación o cualquier duda razonable sobre una emergencia médica. Si existe riesgo suicida inminente, llama al 112; la Línea 024 también ofrece apoyo en España.",
  },
];

export default function WhatToSayToSomeoneWithAnxietyArticle() {
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
          "qué decirle a una persona con ansiedad",
          "qué no decir a una persona con ansiedad",
          "cómo ayudar a una persona con ataques de ansiedad",
          "cómo ayudar a mi pareja con ansiedad",
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
              No necesitas encontrar una frase perfecta ni solucionar lo que siente la otra persona. Escuchar, preguntar qué necesita y ofrecer una ayuda concreta suele ser más útil que dar muchas instrucciones o intentar convencerla de que deje de sentir ansiedad.
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
              Puedes decir: «Estoy aquí», «¿Quieres que te escuche o que busquemos una solución?» y «¿Qué te ayudaría ahora?». Habla con calma, deja espacio para responder y evita «cálmate» o «no es para tanto». Si hay síntomas nuevos o intensos que podrían ser una emergencia, llama al 112 en lugar de asumir que es ansiedad.
            </p>
          </aside>

          <nav aria-labelledby="contenido-articulo" className="mt-10 rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
            <h2 id="contenido-articulo" className="font-sora text-base font-semibold">En esta guía</h2>
            <ol className="mt-4 grid gap-2 text-sm text-[#8ab0cc] sm:grid-cols-2">
              <li><a href="#como-acercarte" className="hover:text-[#14b8a6]">1. Cómo acercarte</a></li>
              <li><a href="#frases" className="hover:text-[#14b8a6]">2. Frases que pueden ayudar</a></li>
              <li><a href="#evitar" className="hover:text-[#14b8a6]">3. Qué conviene evitar</a></li>
              <li><a href="#distancia" className="hover:text-[#14b8a6]">4. Cómo ayudar a distancia</a></li>
              <li><a href="#crisis" className="hover:text-[#14b8a6]">5. Durante una crisis</a></li>
              <li><a href="#continuidad" className="hover:text-[#14b8a6]">6. Pareja, seguimiento y límites</a></li>
              <li><a href="#urgente" className="hover:text-[#14b8a6]">7. Cuándo pedir ayuda urgente</a></li>
              <li><a href="#preguntas" className="hover:text-[#14b8a6]">8. Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <div className="mt-14 space-y-16 text-[17px] leading-8 text-[#a9c5da]">
            <section id="como-acercarte" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cómo acercarte a una persona con ansiedad</h2>
              <div className="mt-6 space-y-5">
                <p>
                  La ansiedad puede incluir preocupación difícil de controlar, tensión, palpitaciones, mareo, falta de aire o evitación. No puedes saber por una mirada qué está ocurriendo ni si existe un diagnóstico. Empieza por lo que observas y evita poner una etiqueta.
                </p>
                <p>
                  Busca un momento con algo de privacidad y tiempo. Puedes abrir la conversación así: «He notado que estos días estás más callado y quería saber cómo estás». Si responde que está bien, no la interrogues. Deja claro que puede hablar contigo más adelante.
                </p>
                <p>
                  Pregunta qué tipo de apoyo desea. Tal vez quiera que la escuches, que la acompañes a una cita, que le ayudes con una tarea concreta o que simplemente permanezcas cerca. La respuesta puede cambiar según el día.
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-[#0e2a4a] bg-[#04152b] p-6">
                <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Tres preguntas antes de aconsejar</h3>
                <ul className="mt-4 space-y-3 text-base">
                  <li>• ¿Quieres contarme qué está pasando o prefieres que me quede contigo?</li>
                  <li>• ¿Buscas que te escuche o quieres que pensemos opciones?</li>
                  <li>• ¿Hay algo que normalmente te ayude y quieras probar ahora?</li>
                </ul>
              </div>
            </section>

            <section id="frases" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué decirle a una persona con ansiedad: frases concretas</h2>
              <p className="mt-6">
                No hace falta recitar una lista. Elige una frase que encaje con vuestra relación, di una cosa cada vez y escucha la respuesta.
              </p>

              <div className="mt-8 space-y-4">
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">«Estoy aquí contigo»</strong><span className="mt-2 block">Ofrece presencia sin asegurar que sabes exactamente cómo se siente.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">«Tiene sentido que esto te esté costando»</strong><span className="mt-2 block">Valida el malestar sin confirmar una predicción catastrófica.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">«No tienes que explicarlo todo ahora»</strong><span className="mt-2 block">Reduce la presión de encontrar palabras en un momento difícil.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">«¿Qué necesitas de mí en los próximos diez minutos?»</strong><span className="mt-2 block">Convierte una ayuda general en una acción limitada y concreta.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">«Podemos ir paso a paso»</strong><span className="mt-2 block">Evita exigir una decisión grande cuando cuesta procesar información.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">«¿Quieres que te acompañe a pedir ayuda?»</strong><span className="mt-2 block">Ofrece apoyo profesional sin presentarlo como castigo ni ultimátum.</span></div>
              </div>
            </section>

            <section id="evitar" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué no decir a una persona con ansiedad y qué probar en su lugar</h2>
              <div className="mt-8 space-y-5">
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#fca5a5]">En vez de «cálmate»</h3>
                  <p className="mt-3">Prueba: «Estoy contigo. ¿Prefieres sentarte, caminar despacio o quedarte donde estás?».</p>
                </div>
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#fca5a5]">En vez de «no es para tanto»</h3>
                  <p className="mt-3">Prueba: «Veo que esto te está afectando. ¿Quieres contarme qué parte es la más difícil?».</p>
                </div>
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#fca5a5]">En vez de «piensa en positivo»</h3>
                  <p className="mt-3">Prueba: «¿Qué sabes con seguridad ahora y qué información falta?».</p>
                </div>
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#fca5a5]">En vez de «todos tenemos ansiedad»</h3>
                  <p className="mt-3">Prueba: «No quiero compararlo con lo mío. ¿Cómo es para ti?».</p>
                </div>
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#fca5a5]">En vez de dar una solución inmediata</h3>
                  <p className="mt-3">Pregunta: «¿Quieres ideas o prefieres que te escuche?». No recomiendes medicación ni cambios de dosis.</p>
                </div>
              </div>
              <p className="mt-6">
                Si ya has dicho una frase poco útil, no necesitas defenderte. Puedes corregir: «Creo que le he quitado importancia. Lo siento. Quiero escucharte mejor».
              </p>
            </section>

            <section id="distancia" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué decirle a una persona con ansiedad a distancia</h2>
              <p className="mt-6">
                Por mensaje o llamada faltan señales del lenguaje corporal. Compensa esa limitación con preguntas claras, mensajes cortos y acuerdos de seguimiento.
              </p>
              <ol className="mt-8 space-y-5">
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">1. Comprueba el canal</strong><span className="mt-2 block">«¿Prefieres escribir, una llamada o que te deje un mensaje y vuelva en media hora?».</span></li>
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">2. Reduce la carga</strong><span className="mt-2 block">Haz una pregunta cada vez. Evita enviar una lista larga de técnicas o enlaces.</span></li>
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">3. Da permiso para tardar</strong><span className="mt-2 block">«No tienes que responder ahora. Si te parece, vuelvo a escribirte a las 19:00».</span></li>
                <li className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">4. Aclara la seguridad</strong><span className="mt-2 block">Si expresa riesgo, pregunta directamente dónde está, si está sola y si puede ponerse cerca de una persona de confianza.</span></li>
              </ol>
              <p className="mt-6">
                No prometas guardar en secreto un riesgo inmediato. Explica que vas a pedir ayuda porque su seguridad importa y contacta con el 112 cuando sea necesario.
              </p>
            </section>

            <section id="crisis" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cómo actuar ante un ataque de ansiedad de otra persona</h2>
              <p className="mt-6">
                Un ataque de pánico puede incluir palpitaciones, temblor, falta de aire, mareo, dolor torácico o sensación de perder el control. Esos síntomas también pueden aparecer en problemas médicos. Si es la primera vez, son diferentes a otros episodios o tienes dudas, busca ayuda sanitaria.
              </p>

              <ol className="mt-8 space-y-7">
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">1.</span>Comprueba la seguridad</h3>
                  <p className="mt-3">Alejaos del tráfico, escaleras o aglomeraciones si podéis hacerlo sin riesgo. Pregunta si tiene una enfermedad conocida, una lesión o un plan acordado con su profesional.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">2.</span>Habla poco y despacio</h3>
                  <p className="mt-3">Puedes repetir: «Estoy aquí», «No tienes que explicarme nada ahora» y «Vamos momento a momento». Varias personas hablando a la vez pueden aumentar la confusión.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">3.</span>Pregunta antes de tocar</h3>
                  <p className="mt-3">Ofrece una mano, una silla o espacio. No sujetes, abraces ni obligues a mirar a los ojos sin consentimiento.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">4.</span>Ofrece una referencia sencilla</h3>
                  <p className="mt-3">Si la persona quiere, respira de forma suave para que pueda acompasarse o nombra objetos visibles. No le exijas inhalaciones profundas, retenciones ni completar una técnica.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">5.</span>Permanece y revisa</h3>
                  <p className="mt-3">Quédate mientras se recupera si es seguro para ambos. Después pregunta si necesita agua, descanso, transporte seguro o contactar con alguien.</p>
                </li>
              </ol>

              <p className="mt-7">
                La <Link href="/blog/tecnica-5-4-3-2-1-ansiedad" className="font-semibold text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">técnica 5-4-3-2-1</Link> puede servir como referencia sensorial si la persona ya la conoce o quiere probarla. No la conviertas en una prueba que deba completar.
              </p>
            </section>

            <section id="continuidad" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cómo ayudar a tu pareja con ansiedad sin asumirlo todo</h2>
              <div className="mt-6 space-y-5">
                <p>
                  Hablad en un momento tranquilo sobre qué suele ayudar, qué empeora el malestar y a quién contactar. Un plan acordado evita improvisar durante una crisis y respeta mejor las decisiones de la persona.
                </p>
                <p>
                  Ofrecer compañía no significa cancelar tu vida, responder a cualquier hora ni comprobar continuamente cómo se siente. Puedes expresar un límite concreto: «Hoy puedo acompañarte a la cita, pero no puedo quedarme toda la tarde».
                </p>
                <p>
                  Haz seguimiento después: «¿Cómo estás hoy?» o «¿Hubo algo de ayer que ayudara o que prefieras que no repita?». Si la ansiedad interfiere durante semanas con el trabajo, el sueño, las relaciones o las actividades cotidianas, anima a solicitar valoración profesional.
                </p>
              </div>

              <div className="mt-8 rounded-2xl border border-[#14b8a6]/30 bg-[#0d2d3e]/60 p-6">
                <h3 className="font-sora text-xl font-semibold text-[#4ddbc4]">Apoyar con consentimiento</h3>
                <p className="mt-3 text-base leading-7 text-[#c8dff0]">
                  No leas su diario, informes o registros sin permiso. Si quiere compartir información con un psicólogo, puede elegir qué enseñar y cuándo. El apoyo funciona mejor como colaboración que como vigilancia.
                </p>
              </div>
            </section>

            <section id="urgente" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cuándo pedir ayuda urgente</h2>
              <p className="mt-6">
                No atribuyas automáticamente a la ansiedad síntomas como dolor torácico, dificultad para respirar, desmayo, debilidad repentina, confusión o una posible intoxicación. Llama al 112 ante una emergencia o cuando no sea seguro esperar.
              </p>
              <p className="mt-5">
                Si la persona habla de suicidio, pregunta de forma directa si está pensando en hacerse daño, si tiene un plan y si dispone de medios. Escuchar la respuesta no sustituye la ayuda urgente. Ante riesgo inminente, llama al 112 y no la dejes sola si puedes permanecer sin ponerte en peligro.
              </p>

              <div className="mt-8 rounded-2xl border border-[#f87171]/35 bg-[#2a0e0e]/60 p-6">
                <h3 className="font-sora text-xl font-semibold text-[#fca5a5]">Ayuda urgente en España</h3>
                <p className="mt-3 text-base leading-7 text-[#f3caca]">
                  Ante una emergencia vital o riesgo suicida inminente, llama al <strong>112</strong>. La <strong>Línea 024</strong> es un servicio nacional, gratuito, confidencial y disponible las 24 horas para personas con pensamientos o riesgo de conducta suicida y sus allegados. El 024 no sustituye la atención presencial cuando sea necesaria.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Compartir una herramienta sin imponerla</h2>
              <p className="mt-6">
                Puedes enviar el enlace de ANSIOFF y dejar que la persona decida si quiere usar respiración guiada, sonidos, el diario emocional o el Kit SOS. Evita instalar la app por ella, pedirle registros como prueba o presentar una herramienta como condición para recibir tu apoyo.
              </p>
              <p className="mt-4">
                ANSIOFF es una herramienta de bienestar. No ofrece atención en tiempo real, no detecta emergencias y no sustituye a un psicólogo, médico, al 112 ni a la Línea 024.
              </p>
              <AppStoreLink
                placement="blog_que_decir_ansiedad_mid_cta"
                className="mt-7 inline-flex rounded-xl bg-[#14b8a6] px-6 py-3 text-sm font-semibold text-[#020e1c] hover:bg-[#0d9488]"
              >
                 Ver ANSIOFF en App Store
              </AppStoreLink>
            </section>

            <section id="preguntas" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Preguntas frecuentes sobre cómo ayudar a alguien con ansiedad</h2>
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
                Hemos priorizado organismos sanitarios públicos. Las frases son ejemplos de comunicación y no sustituyen formación en primeros auxilios ni atención profesional.
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6">
                <li><a href="https://magazine.medlineplus.gov/es/art%C3%ADculo/como-ayudar-a-una-persona-con-ansiedad/" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">NIH MedlinePlus Magazine: escuchar, preguntar y ofrecer recursos</a></li>
                <li><a href="https://medlineplus.gov/spanish/anxiety.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: ansiedad, síntomas y tratamiento</a></li>
                <li><a href="https://medlineplus.gov/spanish/panicdisorder.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: ataques y trastorno de pánico</a></li>
                <li><a href="https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/how-to-talk-about-your-mental-health/" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">NHS Every Mind Matters: hablar y pedir el tipo de apoyo necesario</a></li>
                <li><a href="https://www.uhsussex.nhs.uk/wp-content/uploads/2023/01/Managing-Anxiety-leaflet.pdf" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">University Hospitals Sussex NHS: acompañamiento durante el pánico</a></li>
                <li><a href="https://administracion.gob.es/pag_Home/Tu-espacio-europeo/derechos-obligaciones/ciudadanos/asistencia-sanitaria/numeros-urgencia.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">Administración General del Estado: teléfono de emergencias 112</a></li>
                <li><a href="https://www.sanidad.gob.es/linea024/home.htm" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">Ministerio de Sanidad: Línea 024 para personas y allegados</a></li>
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
                text: "Conoce los pasos antes de ofrecer la técnica a otra persona.",
              },
              {
                href: "/blog/diario-emocional-ejemplo",
                label: "Diario emocional",
                title: "Ejemplo y plantilla de diario emocional",
                text: "Una persona puede registrar lo que quiera compartir después.",
              },
              {
                href: "/blog/miedo-a-salir-a-la-calle",
                label: "Ansiedad y exposición",
                title: "Qué hacer si da miedo salir a la calle",
                text: "Cómo apoyar un primer paso sin forzar ni decidir por la otra persona.",
              },
              {
                href: "/blog/ansiedad-al-despertar",
                label: "Ansiedad y rutinas",
                title: "Qué hacer si aparece ansiedad al despertar",
                text: "Una rutina breve y señales que conviene consultar.",
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
