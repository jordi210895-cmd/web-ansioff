import type { Metadata } from "next";
import Link from "next/link";
import AppStoreLink from "@/components/app-store-link";
import BlogHeader from "@/components/blog-header";
import SiteFooter from "@/components/site-footer";
import { getBlogPost } from "@/lib/blog-posts";

const articlePost = getBlogPost("debilidad-despues-ataque-ansiedad");

if (!articlePost) {
  throw new Error("No se ha encontrado el artículo debilidad-despues-ataque-ansiedad");
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
    tags: ["ataque de ansiedad", "debilidad", "cansancio", "recuperación"],
  },
  twitter: {
    card: "summary",
    title: post.title,
    description: post.description,
  },
};

const faqs = [
  {
    question: "¿Es normal sentirse débil después de un ataque de ansiedad?",
    answer:
      "Algunas personas sienten cansancio, temblor, piernas flojas o necesidad de descansar después de un ataque de pánico. Aun así, la sensación no confirma por sí sola que la causa sea ansiedad. Si es la primera vez, es diferente de otros episodios o persiste, consulta para descartar una causa física.",
  },
  {
    question: "¿Cuánto dura el cansancio después de un ataque de ansiedad?",
    answer:
      "No existe una duración fija que permita saber si todo va bien. Puede variar según la intensidad del episodio, el sueño, la alimentación, el estado de salud y otros factores. Pide valoración si el cansancio no mejora, empeora, se repite o interfiere con tus actividades habituales.",
  },
  {
    question: "¿Por qué me da sueño después de un ataque de ansiedad?",
    answer:
      "Tras un periodo de mucha alerta algunas personas notan agotamiento y sueño. También pueden influir una noche de poco descanso, haber comido o bebido poco, sustancias o medicamentos. No atribuyas una somnolencia intensa, repentina o acompañada de confusión únicamente a la ansiedad.",
  },
  {
    question: "¿Qué hago para recuperarme después de un ataque de ansiedad?",
    answer:
      "Si no hay señales de alarma, detén el esfuerzo, siéntate o túmbate en un lugar seguro, deja que la respiración vuelva a un ritmo cómodo, bebe y come de forma habitual si puedes, y reduce temporalmente las exigencias. No conduzcas mientras sigas débil o mareado.",
  },
  {
    question: "¿Puedo hacer ejercicio si me siento débil después?",
    answer:
      "No fuerces el ejercicio mientras notes debilidad, mareo, dolor, falta de aire o un malestar que no comprendes. Reanuda tus actividades de forma gradual solo si te encuentras estable y el episodio coincide con un patrón ya evaluado. Ante síntomas nuevos o persistentes, consulta antes.",
  },
  {
    question: "¿Y si sigo cansado al día siguiente?",
    answer:
      "Descansar una noche no sirve como prueba de que la causa sea ansiedad. Si al día siguiente la debilidad continúa, limita tu actividad o se acompaña de otros síntomas, solicita orientación sanitaria. Una repetición frecuente también merece una evaluación profesional.",
  },
  {
    question: "¿Qué significa que solo tenga débil un brazo o una pierna?",
    answer:
      "La pérdida repentina de fuerza o el entumecimiento de la cara, un brazo o una pierna, sobre todo en un lado, puede ser una señal de accidente cerebrovascular. Llama al 112 inmediatamente, especialmente si también hay dificultad para hablar, ver, caminar o entender.",
  },
  {
    question: "¿Cuándo debo llamar al 112?",
    answer:
      "Llama al 112 ante debilidad repentina de un lado, cara caída, dificultad para hablar o ver, confusión, desmayo, dolor o presión en el pecho, falta de aire intensa, convulsiones u otro deterioro grave. No conduzcas tú hasta urgencias.",
  },
];

export default function PostPanicWeaknessArticle() {
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
          "por qué después de un ataque de ansiedad me siento débil",
          "cansancio después de un ataque de ansiedad",
          "debilidad después de un ataque de pánico",
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
              Sentirse cansado o con el cuerpo flojo puede ocurrir después de un ataque de ansiedad. Pero una sensación general de agotamiento no es lo mismo que perder fuerza en una parte del cuerpo, y ningún síntoma nuevo debe atribuirse automáticamente a la ansiedad.
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
              Después de un ataque de ansiedad puedes notar cansancio, tensión, temblor o piernas flojas por el esfuerzo del episodio. También pueden influir el sueño, la respiración rápida, no haber comido o bebido lo habitual, sustancias, medicamentos u otra causa física. Descansa en un lugar seguro y observa la evolución, pero llama al 112 ante una pérdida repentina de fuerza —especialmente en un lado—, dificultad para hablar o ver, desmayo, dolor de pecho o falta de aire intensa.
            </p>
          </aside>

          <nav aria-labelledby="contenido-articulo" className="mt-10 rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
            <h2 id="contenido-articulo" className="font-sora text-base font-semibold">En esta guía</h2>
            <ol className="mt-4 grid gap-2 text-sm text-[#8ab0cc] sm:grid-cols-2">
              <li><a href="#diferencia" className="hover:text-[#14b8a6]">1. Cansancio o pérdida de fuerza</a></li>
              <li><a href="#motivos" className="hover:text-[#14b8a6]">2. Qué puede influir</a></li>
              <li><a href="#recuperacion" className="hover:text-[#14b8a6]">3. Recuperación paso a paso</a></li>
              <li><a href="#evitar" className="hover:text-[#14b8a6]">4. Qué conviene evitar</a></li>
              <li><a href="#registrar" className="hover:text-[#14b8a6]">5. Qué registrar</a></li>
              <li><a href="#consulta" className="hover:text-[#14b8a6]">6. Consulta y urgencias</a></li>
              <li><a href="#herramienta" className="hover:text-[#14b8a6]">7. Cómo puede ayudar ANSIOFF</a></li>
              <li><a href="#preguntas" className="hover:text-[#14b8a6]">8. Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <div className="mt-14 space-y-16 text-[17px] leading-8 text-[#a9c5da]">
            <section id="diferencia" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Primero distingue cansancio general de pérdida de fuerza</h2>
              <p className="mt-6">
                Cuando alguien dice «me siento débil» puede referirse a sensaciones diferentes. El cansancio es una falta general de energía: el cuerpo pesa, apetece sentarse o cuesta retomar el día. También puedes notar temblor o piernas inestables aunque todavía puedas moverlas con normalidad.
              </p>
              <p className="mt-5">
                La pérdida real de fuerza significa que una parte del cuerpo no responde como siempre: un brazo cae al intentar mantenerlo levantado, una mano no puede sujetar algo o una pierna deja de sostenerte. Si aparece de repente, sobre todo en un lado, no esperes a comprobar si «solo era ansiedad».
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Sensación de agotamiento</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li>Falta general de energía.</li>
                    <li>Necesidad de sentarte o descansar.</li>
                    <li>Tensión, temblor o pesadez en ambos lados.</li>
                    <li>Mejora progresiva sin síntomas nuevos.</li>
                  </ul>
                </div>
                <div className="rounded-xl border border-[#f97316]/40 bg-[#2a170e] p-6 text-[#fed7aa]">
                  <h3 className="font-sora text-lg font-semibold text-[#ffb47b]">Pérdida repentina de fuerza</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li>Cara caída o sonrisa desigual.</li>
                    <li>Un brazo o una pierna no responde.</li>
                    <li>Dificultad para hablar, ver o caminar.</li>
                    <li>Confusión o dolor de cabeza intenso y repentino.</li>
                  </ul>
                  <p className="mt-5 text-sm leading-6">Estas señales requieren llamar al 112, aunque luego mejoren.</p>
                </div>
              </div>
            </section>

            <section id="motivos" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Por qué después de un ataque de ansiedad puedes sentirte débil</h2>
              <p className="mt-6">
                Un ataque de pánico activa una respuesta de alerta intensa. Durante el episodio pueden aparecer palpitaciones, temblor, sudoración, respiración difícil, mareo o debilidad. Cuando el pico pasa, es posible percibir el esfuerzo acumulado como cansancio. No existe una sola explicación ni una prueba casera que confirme la causa.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  ["Alerta y tensión muscular", "Mantener el cuerpo preparado para reaccionar puede dejar sensación de rigidez, dolor o agotamiento."],
                  ["Respiración rápida", "Respirar deprisa durante el episodio puede aumentar mareo, hormigueo o sensación de inestabilidad."],
                  ["Sueño y alimentación", "Dormir poco, saltarse una comida o beber menos de lo habitual pueden coincidir con el episodio."],
                  ["Sustancias y medicación", "Cafeína, alcohol, otras sustancias y algunos medicamentos pueden influir. No cambies una pauta por tu cuenta."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5">
                    <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">{title}</h3>
                    <p className="mt-3 text-base">{text}</p>
                  </div>
                ))}
              </div>

              <p className="mt-6">
                Anemia, alteraciones de la glucosa o la tensión, infecciones, problemas tiroideos, cardíacos o neurológicos y otras condiciones también pueden causar debilidad. Por eso conviene consultar cuando el síntoma es nuevo, se repite, cambia o no mejora, incluso si ya has tenido ansiedad antes.
              </p>
            </section>

            <section id="recuperacion" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué hacer después de un ataque de ansiedad</h2>
              <p className="mt-6">
                No necesitas conseguir que el cuerpo vuelva a la normalidad en un número exacto de minutos. El objetivo es mantenerte seguro, reducir exigencias y comprobar que la evolución sea favorable.
              </p>

              <ol className="mt-8 space-y-6">
                <li className="rounded-2xl border border-[#f97316]/40 bg-[#2a170e] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#ffb47b]"><span className="mr-3">1.</span>Descarta señales de alarma</h3>
                  <p className="mt-3 text-[#fed7aa]">Comprueba si existe pérdida de fuerza de un lado, cara caída, dificultad para hablar o ver, confusión, desmayo, dolor de pecho, falta de aire intensa o empeoramiento grave. Si aparece una de ellas, llama al 112.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">2.</span>Ponte en una posición segura</h3>
                  <p className="mt-3">Detén el esfuerzo y siéntate o túmbate donde no puedas caer. Si estabas conduciendo, detente primero en un lugar permitido y no reanudes la marcha mientras tengas debilidad o mareo.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">3.</span>Deja que la respiración se estabilice</h3>
                  <p className="mt-3">Afloja la ropa que moleste y permite que el aire entre y salga a un ritmo cómodo. Evita inspiraciones enormes, retenciones largas o repetir una técnica si aumenta el mareo.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">4.</span>Vuelve a lo básico sin forzarte</h3>
                  <p className="mt-3">Cuando te encuentres estable, bebe y come según tu rutina y necesidades habituales. Descansa en un entorno tranquilo y reduce temporalmente tareas que exijan equilibrio, fuerza o mucha atención.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">5.</span>Revisa cómo evolucionas</h3>
                  <p className="mt-3">Observa si recuperas energía de forma gradual y si aparece algún síntoma nuevo. Si sigues débil al día siguiente, empeoras o el episodio se repite, solicita orientación sanitaria.</p>
                </li>
              </ol>
            </section>

            <section id="evitar" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué conviene evitar mientras te sientes débil</h2>
              <div className="mt-8 rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                <ul className="space-y-4 text-base">
                  <li><strong className="text-[#4ddbc4]">Conducir o usar maquinaria:</strong> espera hasta encontrarte completamente estable.</li>
                  <li><strong className="text-[#4ddbc4]">Forzar ejercicio:</strong> no uses el esfuerzo para demostrarte que «no pasa nada».</li>
                  <li><strong className="text-[#4ddbc4]">Tomar dosis adicionales:</strong> no añadas sedantes, estimulantes o suplementos sin indicación.</li>
                  <li><strong className="text-[#4ddbc4]">Comprobarte sin parar:</strong> medir cada sensación repetidamente puede aumentar la alarma y no sustituye una evaluación.</li>
                  <li><strong className="text-[#4ddbc4]">Esperar ante una urgencia:</strong> una técnica de relajación no debe retrasar una llamada al 112.</li>
                </ul>
              </div>
              <p className="mt-6">
                Si el episodio ya fue evaluado y no hay señales médicas de alarma, una <Link href="/blog/tecnica-5-4-3-2-1-ansiedad" className="font-semibold text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">técnica de anclaje como la 5-4-3-2-1</Link> puede ayudarte a orientarte en el presente. No sirve para decidir si una debilidad es segura.
              </p>
            </section>

            <section id="registrar" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué registrar para explicárselo a un profesional</h2>
              <p className="mt-6">
                Un registro corto puede aportar contexto sin convertirte en tu propio diagnóstico. Anótalo cuando ya estés seguro y no retrases una consulta para completar la información.
              </p>
              <div className="mt-8 rounded-2xl border border-[#14b8a6]/30 bg-[#0d2d3e]/60 p-6 text-base leading-8 text-[#c8dff0]">
                <h3 className="font-sora text-lg font-semibold text-[#4ddbc4]">Plantilla después del episodio</h3>
                <ol className="mt-4 space-y-3">
                  <li><strong>Fecha, hora y duración aproximada:</strong> ___</li>
                  <li><strong>Qué ocurrió antes y durante:</strong> ___</li>
                  <li><strong>Cómo era la debilidad:</strong> general o localizada; repentina o gradual</li>
                  <li><strong>Otros síntomas:</strong> mareo, dolor, falta de aire, visión, habla, desmayo u otros</li>
                  <li><strong>Sueño, comidas, líquidos, cafeína o alcohol:</strong> ___</li>
                  <li><strong>Medicamentos y cambios recientes:</strong> ___</li>
                  <li><strong>Cuándo y cómo empezaste a recuperarte:</strong> ___</li>
                </ol>
              </div>
              <p className="mt-6">
                Puedes organizar este contexto con un <Link href="/blog/diario-emocional-ejemplo" className="font-semibold text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">ejemplo de diario emocional</Link>. Lleva además una lista de medicamentos y antecedentes a la consulta.
              </p>
            </section>

            <section id="consulta" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cuándo pedir cita y cuándo llamar al 112</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]">Solicita valoración</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li>Es la primera vez que sucede.</li>
                    <li>La debilidad persiste, empeora o vuelve con frecuencia.</li>
                    <li>Es diferente de episodios ya evaluados.</li>
                    <li>Te impide trabajar, caminar o realizar tareas habituales.</li>
                    <li>Coincide con un cambio de medicación o una enfermedad.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-[#f97316]/40 bg-[#2a170e] p-6 text-[#fed7aa]">
                  <h3 className="font-sora text-xl font-semibold text-[#ffb47b]">Llama al 112 en España</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li>Debilidad repentina en la cara, un brazo o una pierna, especialmente de un lado.</li>
                    <li>Dificultad para hablar, entender, ver o caminar.</li>
                    <li>Confusión, desmayo o convulsiones.</li>
                    <li>Dolor o presión en el pecho.</li>
                    <li>Falta de aire intensa u otro deterioro grave.</li>
                  </ul>
                  <p className="mt-5 text-sm leading-6">No conduzcas tú. Sigue las indicaciones del servicio de emergencias.</p>
                </div>
              </div>
            </section>

            <section id="herramienta" className="scroll-mt-24 rounded-2xl border border-[#14b8a6]/30 bg-[#0d2d3e]/60 p-7">
              <h2 className="font-sora text-2xl font-semibold leading-tight text-[#e8f4ff]">Cómo puede ayudarte ANSIOFF después de comprobar tu seguridad</h2>
              <p className="mt-4 text-base leading-7 text-[#c8dff0]">
                Una vez descartada una urgencia, ANSIOFF puede ayudarte a registrar el estado de ánimo, escribir qué ocurrió y reunir información para compartirla con tu psicólogo. Observar patrones puede facilitar una conversación profesional, pero no demuestra el origen de la debilidad.
              </p>
              <p className="mt-4 text-base leading-7 text-[#c8dff0]">
                ANSIOFF no mide la fuerza, la glucosa, la tensión, el pulso ni la respiración; tampoco diagnostica ataques de pánico. El botón SOS no sustituye al 112 ni a una evaluación sanitaria.
              </p>
              <AppStoreLink
                placement="blog_debilidad_post_ataque_mid_cta"
                className="mt-7 inline-flex rounded-xl bg-[#14b8a6] px-6 py-3 text-sm font-semibold text-[#020e1c] hover:bg-[#0d9488]"
              >
                 Ver ANSIOFF en App Store
              </AppStoreLink>
            </section>

            <section id="preguntas" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Preguntas frecuentes sobre el cansancio después de un ataque de ansiedad</h2>
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
                Hemos priorizado recursos sanitarios públicos. Este contenido es informativo y no sustituye una consulta ni permite atribuir un síntoma físico a la ansiedad.
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6">
                <li><a href="https://medlineplus.gov/spanish/panicdisorder.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: trastorno de pánico, síntomas y evaluación</a></li>
                <li><a href="https://www.oxfordhealth.nhs.uk/wp-content/uploads/2020/03/OH-202.20-Panic-Attacks.pdf" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">Oxford Health NHS: qué hacer durante y después de un ataque de pánico</a></li>
                <li><a href="https://medlineplus.gov/spanish/ischemicstroke.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: señales de accidente cerebrovascular isquémico</a></li>
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
                text: "Cómo responder con prudencia y reconocer cuándo hace falta valoración.",
              },
              {
                href: "/blog/que-decir-a-persona-con-ansiedad",
                label: "Apoyo y ansiedad",
                title: "Qué decirle a una persona con ansiedad",
                text: "Frases y pasos para acompañar sin invalidar ni asumir un diagnóstico.",
              },
              {
                href: "/blog/diario-emocional-ejemplo",
                label: "Diario emocional",
                title: "Ejemplo y plantilla de diario emocional",
                text: "Ordena el contexto, lo que sentiste y cómo evolucionó el episodio.",
              },
              {
                href: "/blog/tecnica-5-4-3-2-1-ansiedad",
                label: "Técnicas de anclaje",
                title: "Cómo hacer la técnica 5-4-3-2-1",
                text: "Una pauta para orientarte cuando ya has comprobado que estás seguro.",
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
