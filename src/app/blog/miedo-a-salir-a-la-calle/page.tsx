import type { Metadata } from "next";
import Link from "next/link";
import AppStoreLink from "@/components/app-store-link";
import BlogHeader from "@/components/blog-header";
import SiteFooter from "@/components/site-footer";
import { getBlogPost } from "@/lib/blog-posts";

const articlePost = getBlogPost("miedo-a-salir-a-la-calle");

if (!articlePost) {
  throw new Error("No se ha encontrado el artículo miedo-a-salir-a-la-calle");
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
    tags: ["miedo a salir a la calle", "ansiedad", "exposición gradual", "evitación"],
  },
  twitter: {
    card: "summary",
    title: post.title,
    description: post.description,
  },
};

const faqs = [
  {
    question: "¿Por qué me da ansiedad salir de casa?",
    answer:
      "Puede haber distintos motivos: miedo a notar síntomas físicos, a no poder escapar, a estar lejos de una persona o lugar seguro, a una situación social o a que ocurra algo concreto. Un artículo no puede determinar la causa. Si el miedo se repite, limita tu vida o no sabes qué lo provoca, conviene consultarlo con un profesional sanitario.",
  },
  {
    question: "¿El miedo a salir a la calle significa que tengo agorafobia?",
    answer:
      "No necesariamente. La agorafobia implica un patrón específico de miedo o ansiedad ante lugares o situaciones donde escapar o recibir ayuda podría parecer difícil. Solo un profesional puede valorar si se cumplen criterios diagnósticos y descartar otras explicaciones.",
  },
  {
    question: "¿Cómo superar el miedo a salir a la calle?",
    answer:
      "No existe un resultado inmediato garantizado. Un enfoque utilizado en terapia es ordenar situaciones de menor a mayor dificultad, empezar por un paso modesto, repetirlo y revisar qué ocurrió antes de avanzar. Si el miedo es intenso o hay ataques de pánico, es preferible preparar la exposición con un profesional.",
  },
  {
    question: "¿Debo obligarme a salir aunque tenga mucha ansiedad?",
    answer:
      "No se trata de forzarte ni de empezar por la situación más difícil. El paso debe ser seguro, concreto y lo bastante pequeño como para poder intentarlo y repetirlo. Si te desbordas, te desorientas, tienes riesgo de caerte o conducir no es seguro, detente y busca apoyo.",
  },
  {
    question: "¿Es malo salir acompañado?",
    answer:
      "No. La compañía puede hacer posible un primer paso. Lo importante es acordar qué apoyo necesitas y observar si, con el tiempo, quieres reducirlo de forma gradual. No retires de golpe un apoyo esencial; un profesional puede ayudarte a planificar esa transición.",
  },
  {
    question: "¿Qué hago si aparece pánico cuando estoy fuera?",
    answer:
      "Prioriza la seguridad física, especialmente si conduces o estás cerca del tráfico. Puedes orientarte al entorno, apoyar los pies, nombrar lo que ves y dejar que la respiración recupere un ritmo cómodo sin forzarla. Si los síntomas son nuevos, intensos o podrían tener una causa médica, solicita valoración sanitaria.",
  },
  {
    question: "¿Cuándo conviene pedir ayuda profesional?",
    answer:
      "Pide ayuda si evitas salir con frecuencia, dependes cada vez más de otras personas, faltas al trabajo o a citas, aparecen ataques de pánico o el miedo empeora. Ante una emergencia vital llama al 112. Si hay pensamientos de suicidio o riesgo de conducta suicida en España, llama al 024 o al 112 si el riesgo es inminente.",
  },
];

export default function FearOfGoingOutsideArticle() {
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
          "miedo a salir a la calle",
          "miedo a salir de casa por ansiedad",
          "ansiedad al salir a la calle",
          "cómo superar el miedo a salir a la calle",
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
              Si acercarte a la puerta, caminar por tu calle o alejarte de casa activa miedo, no tienes que empezar por el reto más difícil. Puedes observar qué temes, ordenar situaciones y preparar un primer paso pequeño que sea seguro y repetible.
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
              Si te da miedo salir a la calle, define una situación concreta, puntúa su dificultad, divídela en pasos y empieza por uno modesto. Anota qué temías que ocurriera y qué ocurrió realmente. La exposición gradual puede formar parte de la terapia cognitivo-conductual, pero no consiste en forzarte ni sustituye una valoración profesional.
            </p>
          </aside>

          <nav aria-labelledby="contenido-articulo" className="mt-10 rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
            <h2 id="contenido-articulo" className="font-sora text-base font-semibold">En esta guía</h2>
            <ol className="mt-4 grid gap-2 text-sm text-[#8ab0cc] sm:grid-cols-2">
              <li><a href="#entender" className="hover:text-[#14b8a6]">1. Entender el miedo y la evitación</a></li>
              <li><a href="#preparar" className="hover:text-[#14b8a6]">2. Preparar un primer paso</a></li>
              <li><a href="#jerarquia" className="hover:text-[#14b8a6]">3. Ejemplo de jerarquía gradual</a></li>
              <li><a href="#durante" className="hover:text-[#14b8a6]">4. Qué hacer durante la salida</a></li>
              <li><a href="#ejemplo" className="hover:text-[#14b8a6]">5. Ejemplo completo</a></li>
              <li><a href="#errores" className="hover:text-[#14b8a6]">6. Errores y cuándo pedir ayuda</a></li>
              <li><a href="#preguntas" className="hover:text-[#14b8a6]">7. Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <div className="mt-14 space-y-16 text-[17px] leading-8 text-[#a9c5da]">
            <section id="entender" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Por qué puede aparecer miedo a salir a la calle</h2>
              <div className="mt-6 space-y-5">
                <p>
                  La ansiedad puede incluir pensamientos difíciles de controlar, sensaciones como palpitaciones, mareo o falta de aire y cambios de conducta, entre ellos evitar actividades cotidianas. Al salir de casa, el temor puede centrarse en tener síntomas, no encontrar ayuda, no poder volver rápido, cruzarse con otras personas o vivir una situación concreta.
                </p>
                <p>
                  Evitar una salida puede aliviar el miedo en ese momento. Ese alivio puede reforzar la idea de que quedarse en casa era la única forma de estar a salvo y hacer que la siguiente salida parezca aún más difícil. Esto describe un posible ciclo de evitación, no una culpa ni una falta de voluntad.
                </p>
                <p>
                  Algunas personas llaman a este problema «fobia a salir de la casa». Tener miedo a salir no significa por sí solo que exista agorafobia. En la agorafobia suele haber un miedo intenso ante lugares o situaciones donde escapar o recibir ayuda se percibe como difícil. Una evaluación profesional considera la duración, las situaciones evitadas, el impacto y otras posibles causas.
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-[#0e2a4a] bg-[#04152b] p-6">
                <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Observa el patrón sin diagnosticarte</h3>
                <ul className="mt-4 space-y-3 text-base">
                  <li><strong className="text-[#4ddbc4]">Situación:</strong> ¿qué salida, lugar o distancia activa el miedo?</li>
                  <li><strong className="text-[#4ddbc4]">Predicción:</strong> ¿qué temes que ocurra exactamente?</li>
                  <li><strong className="text-[#4ddbc4]">Respuesta:</strong> ¿qué haces para evitar, escapar o comprobar que estás a salvo?</li>
                  <li><strong className="text-[#4ddbc4]">Impacto:</strong> ¿qué citas, relaciones o tareas están quedando limitadas?</li>
                </ul>
              </div>
            </section>

            <section id="preparar" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cómo preparar un primer paso si te da ansiedad salir de casa</h2>
              <p className="mt-6">
                La exposición gradual consiste en acercarse de forma planificada a situaciones temidas. En terapia se adapta a la persona y puede empezar con objetivos modestos. Antes de intentarlo por tu cuenta, comprueba que la situación es realmente segura y que el paso no requiere conducir, cruzar tráfico o hacer una actividad para la que no estás en condiciones.
              </p>

              <ol className="mt-8 space-y-7">
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">1.</span>Define una acción observable</h3>
                  <p className="mt-3">Cambia «salir sin miedo» por algo que puedas ver y medir: «estar dos minutos en el portal a las 11:00». La meta es practicar una acción, no controlar por completo cómo te sientes.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">2.</span>Puntúa la dificultad prevista</h3>
                  <p className="mt-3">Usa una escala de 0 a 10. No es una prueba clínica; sirve para ordenar. Si abrir la puerta es 3/10 y caminar diez minutos solo es 9/10, el primer paso puede estar cerca del 3.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">3.</span>Escribe la predicción</h3>
                  <p className="mt-3">Completa: «Temo que ___ y pienso que la probabilidad es ___». Una predicción concreta permite comparar después lo que imaginabas con lo que ocurrió.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">4.</span>Decide el apoyo y el momento</h3>
                  <p className="mt-3">Puedes empezar acompañado, elegir una hora tranquila y acordar cuánto durará el intento. El apoyo no invalida la práctica. Más adelante podrás valorar un cambio pequeño, no retirarlo todo de golpe.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">5.</span>Define cómo cerrarás la práctica</h3>
                  <p className="mt-3">Al terminar, registra dificultad máxima, duración, qué hiciste, qué ocurrió y qué cambiarías. No necesitas que la ansiedad llegue a cero para que el intento aporte información.</p>
                </li>
              </ol>
            </section>

            <section id="jerarquia" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Ejemplo de jerarquía para el miedo a salir a la calle</h2>
              <p className="mt-6">
                Una jerarquía ordena acciones relacionadas con tu objetivo. Las puntuaciones siguientes son ficticias: una misma situación puede resultar fácil para una persona y muy difícil para otra.
              </p>

              <div className="mt-7 space-y-4">
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">2/10 · Prepararse</strong><span className="mt-2 block">Vestirse para salir y permanecer dos minutos junto a la puerta.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">3/10 · Cruzar el umbral</strong><span className="mt-2 block">Abrir la puerta y permanecer un minuto en el rellano.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">4/10 · Llegar al portal</strong><span className="mt-2 block">Bajar acompañado, permanecer dos minutos y volver.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">5/10 · Caminar cerca</strong><span className="mt-2 block">Recorrer un tramo corto de la calle con una persona de confianza.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">6/10 · Repetir con menos apoyo</strong><span className="mt-2 block">Hacer el mismo tramo solo o con la persona esperando en el portal.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">7/10 · Hacer una tarea breve</strong><span className="mt-2 block">Entrar en una tienda cercana en una hora tranquila y comprar un artículo.</span></div>
              </div>

              <div className="mt-8 rounded-2xl border border-[#14b8a6]/30 bg-[#0d2d3e]/60 p-6 text-base leading-8 text-[#c8dff0]">
                <h3 className="font-sora text-lg font-semibold text-[#4ddbc4]">Plantilla para crear la tuya</h3>
                <ol className="mt-4 space-y-3">
                  <li><strong>Objetivo que quiero recuperar:</strong> ___</li>
                  <li><strong>Situación más sencilla relacionada:</strong> ___ · dificultad ___/10</li>
                  <li><strong>Siguiente situación:</strong> ___ · dificultad ___/10</li>
                  <li><strong>Apoyo que necesito al empezar:</strong> ___</li>
                  <li><strong>Señal para repetir o ajustar el paso:</strong> ___</li>
                </ol>
              </div>
            </section>

            <section id="durante" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué hacer si aparece ansiedad al salir a la calle</h2>
              <p className="mt-6">
                Sentir ansiedad durante una práctica no significa automáticamente que haya peligro ni que el ejercicio haya salido mal. Tampoco tienes que ignorar señales físicas nuevas o exponerte a un riesgo real. Mantén la diferencia entre malestar emocional y seguridad física.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5">
                  <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Antes</h3>
                  <p className="mt-3 text-base">Revisa el paso, la duración, la ruta y el apoyo. Come, descansa y toma la medicación solo como la haya pautado tu profesional.</p>
                </div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5">
                  <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Durante</h3>
                  <p className="mt-3 text-base">Mira el entorno, apoya los pies y deja que el aire entre y salga a un ritmo cómodo. Si conduces y no es seguro continuar, aparca en un lugar permitido.</p>
                </div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5">
                  <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Después</h3>
                  <p className="mt-3 text-base">Anota el pico de malestar, qué temías, qué sucedió y qué aprendiste. Decide si conviene repetir, reducir o avanzar un paso.</p>
                </div>
              </div>

              <p className="mt-7">
                Si notas que tu atención se queda atrapada en sensaciones o predicciones, puedes usar la <Link href="/blog/tecnica-5-4-3-2-1-ansiedad" className="font-semibold text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">técnica 5-4-3-2-1</Link> para describir estímulos presentes. No la uses como requisito para salir ni para comprobar constantemente que la ansiedad ha desaparecido.
              </p>
            </section>

            <section id="ejemplo" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Ejemplo completo de un primer intento</h2>
              <p className="mt-6">
                Este caso es ficticio. Sirve para mostrar cómo registrar una práctica sin convertir el resultado en aprobado o suspenso.
              </p>
              <div className="mt-7 space-y-4">
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Objetivo personal</strong><span className="mt-2 block">Volver a comprar el pan en una tienda situada a cinco minutos de casa.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Paso elegido</strong><span className="mt-2 block">Bajar al portal con mi hermana, permanecer tres minutos y volver. Dificultad prevista: 5/10.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Predicción</strong><span className="mt-2 block">«Me marearé y necesitaré entrar corriendo». Probabilidad estimada antes: 70 %.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Qué ocurrió</strong><span className="mt-2 block">Noté calor y piernas tensas. El malestar subió a 6/10 y después bajó a 4/10. Permanecí los tres minutos y subí andando.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Qué aprendí</strong><span className="mt-2 block">Tuve sensaciones incómodas, pero no necesité correr ni ocurrió el desmayo que imaginaba.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">Siguiente decisión</strong><span className="mt-2 block">Repetir el mismo paso dos días, sin aumentar todavía la distancia, y comentarlo en mi próxima consulta.</span></div>
              </div>

              <p className="mt-7">
                Puedes completar este registro con el <Link href="/blog/diario-emocional-ejemplo" className="font-semibold text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">ejemplo de diario emocional</Link> para separar situación, emoción, pensamiento y respuesta.
              </p>
            </section>

            <section id="errores" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Errores frecuentes y cuándo pedir ayuda</h2>
              <ul className="mt-7 space-y-4">
                <li><strong className="text-[#e8f4ff]">Empezar por el reto más difícil.</strong> Un salto grande puede hacer que la práctica sea difícil de repetir. Divide la situación.</li>
                <li><strong className="text-[#e8f4ff]">Esperar a no sentir nada.</strong> El objetivo puede ser actuar con un nivel manejable de miedo, no eliminar toda sensación antes de salir.</li>
                <li><strong className="text-[#e8f4ff]">Interpretar una retirada como fracaso.</strong> Revisa qué hizo demasiado difícil el paso y diseña uno intermedio.</li>
                <li><strong className="text-[#e8f4ff]">Cambiar muchas variables a la vez.</strong> Aumentar distancia, duración, gente y soledad al mismo tiempo impide saber qué estás practicando.</li>
                <li><strong className="text-[#e8f4ff]">Usar alcohol u otras sustancias para poder salir.</strong> Pueden empeorar los síntomas o añadir riesgos. Coméntalo con un profesional.</li>
                <li><strong className="text-[#e8f4ff]">Hacer exposición en una situación insegura.</strong> No practiques conduciendo, cerca del tráfico o en un lugar donde un mareo o desorientación puedan ponerte en peligro.</li>
                <li><strong className="text-[#e8f4ff]">Sustituir la atención profesional por una app.</strong> Un registro puede organizar la práctica, pero no evalúa causas ni adapta un tratamiento.</li>
              </ul>

              <p className="mt-6">
                Pide valoración si el miedo dura semanas, aumenta, te impide trabajar, estudiar, acudir a citas o cubrir necesidades básicas, o si necesitas que alguien te acompañe siempre. También conviene consultar si aparecen ataques de pánico, consumo de sustancias para afrontar las salidas, ánimo muy bajo o síntomas físicos nuevos. Dolor torácico, dificultad respiratoria intensa, desmayo u otros síntomas preocupantes requieren valoración sanitaria y no deben atribuirse automáticamente a la ansiedad.
              </p>

              <div className="mt-8 rounded-2xl border border-[#f87171]/35 bg-[#2a0e0e]/60 p-6">
                <h3 className="font-sora text-xl font-semibold text-[#fca5a5]">Si necesitas ayuda urgente en España</h3>
                <p className="mt-3 text-base leading-7 text-[#f3caca]">
                  Ante una emergencia vital, llama al <strong>112</strong>. Si tienes pensamientos de suicidio o riesgo de conducta suicida, puedes llamar al <strong>024</strong>, un servicio nacional, gratuito, confidencial y disponible las 24 horas. El 024 no sustituye la atención sanitaria presencial cuando sea necesaria.
                </p>
              </div>
            </section>

            <section>
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Ordena tus pasos en ANSIOFF</h2>
              <p className="mt-6">
                La herramienta de exposición gradual de ANSIOFF permite anotar un objetivo personal, ordenar situaciones de menor a mayor malestar y registrar cada intento. Así puedes llevar información concreta a una consulta y revisar qué pasos has practicado.
              </p>
              <p className="mt-4">
                ANSIOFF es una herramienta de bienestar. No decide qué exposición debes hacer, no diagnostica agorafobia y no sustituye el acompañamiento de un psicólogo, médico o servicio de emergencias.
              </p>
              <AppStoreLink
                placement="blog_miedo_salir_calle_mid_cta"
                className="mt-7 inline-flex rounded-xl bg-[#14b8a6] px-6 py-3 text-sm font-semibold text-[#020e1c] hover:bg-[#0d9488]"
              >
                 Descargar ANSIOFF en App Store
              </AppStoreLink>
            </section>

            <section id="preguntas" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Preguntas frecuentes sobre el miedo a salir de casa</h2>
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
                Hemos priorizado organismos sanitarios públicos. El ejemplo adapta principios generales de exposición gradual y no constituye una pauta terapéutica individual.
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6">
                <li><a href="https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/self-help-cbt-techniques/facing-your-fears/" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">NHS Every Mind Matters: afrontar los miedos de forma gradual</a></li>
                <li><a href="https://www.nhs.uk/mental-health/conditions/agoraphobia/treatment/" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">NHS: tratamiento de la agorafobia y objetivos modestos</a></li>
                <li><a href="https://medlineplus.gov/spanish/ency/article/000923.htm" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: agorafobia, síntomas y tratamiento</a></li>
                <li><a href="https://medlineplus.gov/spanish/anxiety.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: ansiedad, evitación y terapia de exposición</a></li>
                <li><a href="https://www.nimh.nih.gov/health/publications/panic-disorder-when-fear-overwhelms" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">NIMH: pánico, agorafobia y terapia cognitivo-conductual</a></li>
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
                text: "Practica una forma de orientar la atención a los cinco sentidos.",
              },
              {
                href: "/blog/diario-emocional-ejemplo",
                label: "Diario emocional",
                title: "Ejemplo y plantilla de diario emocional",
                text: "Registra situación, emoción, pensamiento y respuesta después de una salida.",
              },
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
                text: "Un plan para salir del bucle de preocupación antes de dormir.",
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
