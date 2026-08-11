import type { Metadata } from "next";
import Link from "next/link";
import AppStoreLink from "@/components/app-store-link";
import BlogHeader from "@/components/blog-header";
import SiteFooter from "@/components/site-footer";
import { getBlogPost } from "@/lib/blog-posts";

const articlePost = getBlogPost("palpitaciones-por-ansiedad");

if (!articlePost) {
  throw new Error("No se ha encontrado el artículo palpitaciones-por-ansiedad");
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
    tags: ["palpitaciones por ansiedad", "taquicardia", "estrés", "síntomas físicos"],
  },
  twitter: {
    card: "summary",
    title: post.title,
    description: post.description,
  },
};

const faqs = [
  {
    question: "¿Cómo son las palpitaciones por ansiedad?",
    answer:
      "Pueden percibirse como latidos fuertes, rápidos, salteados o un aleteo en el pecho, el cuello o la garganta. Esas sensaciones también pueden aparecer por otras causas, y el ritmo puede ser normal o anormal. La forma de sentirlas no permite confirmar en casa que sean por ansiedad.",
  },
  {
    question: "¿La ansiedad produce taquicardia?",
    answer:
      "La respuesta de alerta puede acelerar el corazón, por lo que la ansiedad puede acompañarse de latidos rápidos o fuertes. Sin embargo, notar el corazón acelerado no demuestra que la causa sea ansiedad. Una valoración médica puede revisar el contexto, el pulso, los medicamentos y si hacen falta pruebas como un electrocardiograma.",
  },
  {
    question: "¿Cómo calmar las palpitaciones por ansiedad?",
    answer:
      "Primero descarta señales de alarma. Si el episodio ya fue valorado, coincide con un patrón conocido y no hay dolor torácico, falta de aire, desmayo u otros síntomas preocupantes, puedes detener la actividad, sentarte y dejar que la respiración recupere un ritmo cómodo sin forzarla. No uses medicación ni maniobras físicas no indicadas para intentar cambiar el ritmo.",
  },
  {
    question: "¿Cuándo son peligrosas las palpitaciones?",
    answer:
      "No se puede determinar el peligro solo por cómo se sienten. En España llama al 112 si las palpitaciones actuales no desaparecen o se acompañan de dolor o presión en el pecho, dificultad para respirar, desmayo, sensación intensa de desmayo, alteración de la conciencia u otros síntomas graves. No conduzcas tú hasta urgencias.",
  },
  {
    question: "¿Qué hago si tengo palpitaciones por ansiedad todo el día?",
    answer:
      "Un síntoma persistente o que se repite durante el día necesita valoración médica, aunque pienses que está relacionado con ansiedad. Anota cuándo comienza, cuánto dura, qué estabas haciendo y qué otros síntomas aparecen, pero no retrases la consulta esperando que un registro confirme la causa.",
  },
  {
    question: "¿Por qué noto palpitaciones nocturnas y ansiedad?",
    answer:
      "Al acostarte puede haber menos distracciones y resultar más fácil notar los latidos, pero también existen otras causas de palpitaciones. Registra la duración, los síntomas asociados, la cafeína, el alcohol, el sueño y los medicamentos, y consulta si son nuevas, recurrentes, duran varios minutos o van a más.",
  },
  {
    question: "¿Qué significa tener palpitaciones y mareos?",
    answer:
      "El mareo puede aparecer con ansiedad, pero junto a palpitaciones también puede requerir atención médica. Si el mareo es intenso, sientes que vas a desmayarte, pierdes el conocimiento, tienes dolor de pecho o dificultad respiratoria, llama al 112. Si es leve pero nuevo o recurrente, solicita valoración.",
  },
  {
    question: "¿Cuál es la diferencia entre palpitaciones y taquicardia?",
    answer:
      "Palpitaciones describe la sensación consciente de los latidos. Taquicardia describe una frecuencia cardíaca más rápida de lo esperado en ese contexto. Puedes notar palpitaciones con un ritmo normal, rápido o irregular; por eso una sensación no sustituye una medición ni un diagnóstico profesional.",
  },
];

export default function AnxietyPalpitationsArticle() {
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
          "palpitaciones por ansiedad",
          "la ansiedad produce taquicardia",
          "palpitaciones por estrés",
          "palpitaciones por ansiedad qué hacer",
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
              Las palpitaciones pueden acompañar a la ansiedad, pero sentir el corazón fuerte, rápido o irregular no permite confirmar la causa. Empieza por comprobar si hay señales de alarma, decide cuándo consultar y registra el contexto sin usar ANSIOFF como si fuera un monitor cardíaco.
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
              Si notas palpitaciones por ansiedad, no des por hecha la causa. Llama al 112 si no desaparecen o aparecen con dolor en el pecho, dificultad respiratoria, desmayo, sensación intensa de desmayo o alteración de la conciencia. Si no hay señales urgentes, pero son nuevas, recurrentes, duran varios minutos o cambian, pide valoración médica. Solo cuando exista un patrón ya evaluado puedes aplicar una pauta de calma conocida sin retrasar atención necesaria.
            </p>
          </aside>

          <nav aria-labelledby="contenido-articulo" className="mt-10 rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
            <h2 id="contenido-articulo" className="font-sora text-base font-semibold">En esta guía</h2>
            <ol className="mt-4 grid gap-2 text-sm text-[#8ab0cc] sm:grid-cols-2">
              <li><a href="#entender" className="hover:text-[#14b8a6]">1. Entender la sensación</a></li>
              <li><a href="#causas" className="hover:text-[#14b8a6]">2. Ansiedad y otras causas</a></li>
              <li><a href="#momento" className="hover:text-[#14b8a6]">3. Qué hacer en el momento</a></li>
              <li><a href="#registrar" className="hover:text-[#14b8a6]">4. Qué conviene registrar</a></li>
              <li><a href="#noche" className="hover:text-[#14b8a6]">5. Noche y episodios frecuentes</a></li>
              <li><a href="#consulta" className="hover:text-[#14b8a6]">6. Consulta y urgencias</a></li>
              <li><a href="#herramienta" className="hover:text-[#14b8a6]">7. Cómo puede ayudar ANSIOFF</a></li>
              <li><a href="#preguntas" className="hover:text-[#14b8a6]">8. Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <div className="mt-14 space-y-16 text-[17px] leading-8 text-[#a9c5da]">
            <section id="entender" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué se siente cuando aparecen palpitaciones</h2>
              <div className="mt-6 space-y-5">
                <p>
                  «Palpitaciones» describe la percepción consciente de los latidos. Puedes sentir que el corazón golpea con fuerza, va rápido, aletea, se salta un latido o late en el pecho, el cuello o la garganta. La sensación puede aparecer con un ritmo normal, rápido o irregular; por sí sola no identifica cuál de ellos existe.
                </p>
                <p>
                  La taquicardia, en cambio, describe una frecuencia cardíaca rápida para el contexto. Puedes notar latidos fuertes sin que exista taquicardia, y también puede haber cambios de ritmo que requieran una medición o un electrocardiograma para interpretarse. Una app de bienestar y una comprobación manual no sustituyen esa valoración.
                </p>
                <p>
                  La ansiedad puede incluir latidos fuertes o rápidos. Cuando el cuerpo activa una respuesta de alerta, aumenta la atención a posibles amenazas y pueden cambiar la respiración, la tensión y la frecuencia cardíaca. Esto explica una posibilidad, no confirma que cada episodio tenga un origen ansioso.
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-[#0e2a4a] bg-[#04152b] p-6">
                <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Sensación no significa diagnóstico</h3>
                <ul className="mt-4 space-y-3 text-base">
                  <li><strong className="text-[#4ddbc4]">Latido fuerte:</strong> describe cómo lo percibes, no si el ritmo es normal.</li>
                  <li><strong className="text-[#4ddbc4]">Corazón acelerado:</strong> necesita contexto y, a veces, una medición clínica.</li>
                  <li><strong className="text-[#4ddbc4]">Latido irregular:</strong> debe comentarse con un profesional, especialmente si es nuevo.</li>
                  <li><strong className="text-[#4ddbc4]">«Es ansiedad»:</strong> es una conclusión que no debe basarse solo en sensaciones o antecedentes.</li>
                </ul>
              </div>
            </section>

            <section id="causas" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Palpitaciones por estrés, ansiedad y otras posibles causas</h2>
              <p className="mt-6">
                Estrés, miedo y crisis de pánico pueden acompañarse de palpitaciones. También pueden influir ejercicio, fiebre, falta de sueño, cafeína, nicotina, alcohol, drogas estimulantes y algunos medicamentos. Otras causas posibles incluyen anemia, alteraciones tiroideas, arritmias y otros problemas cardíacos.
              </p>
              <p className="mt-5">
                Por eso conviene evitar dos extremos: asumir que cualquier palpitación es peligrosa o atribuirla automáticamente a la ansiedad. La decisión útil es observar las señales acompañantes, la duración, si es un episodio nuevo y si existe un cambio respecto a tu patrón habitual.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  ["Contexto emocional", "¿Empezó durante preocupación, miedo o una situación que reconoces como desencadenante?"],
                  ["Sustancias y hábitos", "¿Había cafeína, nicotina, alcohol, estimulantes, poco sueño o ejercicio reciente?"],
                  ["Medicamentos", "¿Has iniciado o cambiado un medicamento, descongestionante o suplemento? No modifiques la pauta sin consultar."],
                  ["Cambio del patrón", "¿Es la primera vez, dura más, ocurre con mayor frecuencia o se acompaña de síntomas nuevos?"],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5">
                    <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">{title}</h3>
                    <p className="mt-3 text-base">{text}</p>
                  </div>
                ))}
              </div>
            </section>

            <section id="momento" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Palpitaciones por ansiedad: qué hacer en el momento</h2>
              <p className="mt-6">
                La primera pregunta no es cómo hacer que desaparezcan, sino si necesitas ayuda urgente. Si hay una señal de alarma, no pruebes técnicas para ver si mejora antes de llamar. Si no la hay, sigue una secuencia prudente.
              </p>

              <ol className="mt-8 space-y-6">
                <li className="rounded-2xl border border-[#f97316]/40 bg-[#2a170e] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#ffb47b]"><span className="mr-3">1.</span>Comprueba las señales de alarma</h3>
                  <p className="mt-3 text-[#fed7aa]">Llama al 112 si las palpitaciones actuales no desaparecen o aparecen con dolor o presión en el pecho, dificultad respiratoria, desmayo, sensación intensa de desmayo, alteración de la conciencia u otros síntomas graves. No conduzcas tú hasta urgencias.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">2.</span>Detén el esfuerzo y adopta una posición segura</h3>
                  <p className="mt-3">Interrumpe la actividad y siéntate o apóyate donde no puedas caer. Si estás conduciendo, céntrate en la vía y detente en un lugar permitido antes de hacer cualquier otra cosa.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">3.</span>Anota el inicio y los síntomas asociados</h3>
                  <p className="mt-3">Mira la hora una vez y observa si hay dolor, falta de aire, mareo, sudoración inusual o sensación de desmayo. Evita comprobar el pulso de forma repetida si eso aumenta la preocupación.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">4.</span>Usa solo una pauta conocida y compatible con tu situación</h3>
                  <p className="mt-3">Si un profesional ya evaluó episodios similares y no hay señales de alarma, deja que el aire entre y salga a un ritmo cómodo. No fuerces retenciones, no masajees el cuello y no tomes medicación adicional para intentar cambiar el ritmo salvo indicación profesional.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">5.</span>Decide el siguiente paso</h3>
                  <p className="mt-3">Si el episodio es nuevo, diferente, dura varios minutos, se repite o aumenta, solicita valoración médica. Que haya terminado no demuestra cuál fue la causa.</p>
                </li>
              </ol>
            </section>

            <section id="registrar" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué registrar para explicarlo en una consulta</h2>
              <p className="mt-6">
                Un registro breve puede ayudar a reconstruir el episodio. No intentes interpretar el ritmo ni demorar una consulta para reunir más datos. Anota solo lo que puedas observar con seguridad.
              </p>

              <div className="mt-8 rounded-2xl border border-[#14b8a6]/30 bg-[#0d2d3e]/60 p-6 text-base leading-8 text-[#c8dff0]">
                <h3 className="font-sora text-lg font-semibold text-[#4ddbc4]">Plantilla de registro de palpitaciones</h3>
                <ol className="mt-4 space-y-3">
                  <li><strong>Fecha y hora de inicio:</strong> ___</li>
                  <li><strong>Duración aproximada:</strong> ___</li>
                  <li><strong>Qué estaba haciendo:</strong> ___</li>
                  <li><strong>Cómo se sintieron:</strong> fuertes, rápidas, salteadas, aleteo u otra descripción</li>
                  <li><strong>Síntomas acompañantes:</strong> ___</li>
                  <li><strong>Sueño, cafeína, alcohol, nicotina, ejercicio o estrés reciente:</strong> ___</li>
                  <li><strong>Medicamentos o suplementos y cambios recientes:</strong> ___</li>
                  <li><strong>Qué ocurrió después:</strong> ___</li>
                </ol>
              </div>

              <p className="mt-6">
                Lleva también una lista actualizada de medicamentos y antecedentes médicos. Un profesional puede decidir si basta con la historia y la exploración o si convienen pruebas. El <Link href="/blog/diario-emocional-ejemplo" className="font-semibold text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">diario emocional</Link> puede ayudarte a ordenar el contexto, pero no registra la actividad eléctrica del corazón.
              </p>
            </section>

            <section id="noche" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Palpitaciones nocturnas, al despertar o durante todo el día</h2>
              <p className="mt-6">
                Al acostarte hay menos estímulos y puede resultar más fácil notar los latidos. La falta de sueño, el estrés, sustancias o problemas médicos también pueden influir. Que aparezcan de noche no permite clasificarlas como ansiedad nocturna.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-3">
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5">
                  <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Al acostarte</h3>
                  <p className="mt-3 text-base">Anota duración, postura, sustancias consumidas, medicación y síntomas. Consulta si es nuevo o recurrente.</p>
                </div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5">
                  <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Al despertar</h3>
                  <p className="mt-3 text-base">No asumas que es ansiedad matutina. Observa si hay mareo, falta de aire, dolor, desmayo o un cambio claro.</p>
                </div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5">
                  <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Todo el día</h3>
                  <p className="mt-3 text-base">Si son persistentes o se repiten durante horas, solicita valoración médica aunque también sientas ansiedad.</p>
                </div>
              </div>

              <p className="mt-6">
                Evita compensar por tu cuenta con suplementos, sedantes, estimulantes o cambios de medicación. Reducir cafeína, nicotina y alcohol puede formar parte del autocuidado, pero no sustituye la evaluación de un síntoma nuevo o cambiante.
              </p>
            </section>

            <section id="consulta" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cuándo pedir cita y cuándo llamar al 112</h2>

              <div className="mt-8 grid gap-6 md:grid-cols-2">
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]">Solicita valoración médica</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li>Es la primera vez que notas palpitaciones.</li>
                    <li>Vuelven, ocurren más a menudo o duran más de unos minutos.</li>
                    <li>Son diferentes de otros episodios ya valorados.</li>
                    <li>Tienes una enfermedad cardíaca o antecedentes familiares relevantes.</li>
                    <li>Coinciden con cambios de medicación, sustancias o síntomas de otra enfermedad.</li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-[#f97316]/40 bg-[#2a170e] p-6 text-[#fed7aa]">
                  <h3 className="font-sora text-xl font-semibold text-[#ffb47b]">Llama al 112 en España</h3>
                  <ul className="mt-4 space-y-3 text-base">
                    <li>Las palpitaciones actuales no desaparecen y te encuentras mal.</li>
                    <li>Hay dolor o presión en el pecho.</li>
                    <li>Aparece dificultad para respirar.</li>
                    <li>Te desmayas o sientes que vas a desmayarte.</li>
                    <li>Hay alteración de la conciencia, sudoración inusual u otros síntomas graves.</li>
                  </ul>
                  <p className="mt-5 text-sm leading-6">No conduzcas tú hasta urgencias. Pide una ambulancia o que otra persona siga las indicaciones del servicio de emergencias.</p>
                </div>
              </div>

              <p className="mt-6">
                Si las señales de alarma ya cesaron, solicita igualmente orientación sanitaria urgente. No esperes a que se repitan para comentar un episodio con dolor torácico, falta de aire o desmayo.
              </p>
            </section>

            <section id="herramienta" className="scroll-mt-24 rounded-2xl border border-[#14b8a6]/30 bg-[#0d2d3e]/60 p-7">
              <h2 className="font-sora text-2xl font-semibold leading-tight text-[#e8f4ff]">Cómo puede ayudarte ANSIOFF sin sustituir una evaluación</h2>
              <p className="mt-4 text-base leading-7 text-[#c8dff0]">
                Después de comprobar que no necesitas atención urgente, ANSIOFF puede servir para anotar el contexto, la emoción, el pensamiento y lo que hiciste. También puedes reunir registros para decidir qué información quieres compartir con tu psicólogo.
              </p>
              <p className="mt-4 text-base leading-7 text-[#c8dff0]">
                ANSIOFF no mide el pulso, no realiza electrocardiogramas, no detecta arritmias y no puede confirmar que unas palpitaciones sean por ansiedad. El botón SOS tampoco sustituye al 112 ni a la valoración sanitaria.
              </p>
              <AppStoreLink
                placement="blog_palpitaciones_ansiedad_mid_cta"
                className="mt-7 inline-flex rounded-xl bg-[#14b8a6] px-6 py-3 text-sm font-semibold text-[#020e1c] hover:bg-[#0d9488]"
              >
                 Ver ANSIOFF en App Store
              </AppStoreLink>
            </section>

            <section id="preguntas" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Preguntas frecuentes sobre palpitaciones por ansiedad</h2>
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
                Hemos priorizado recursos sanitarios públicos. Este contenido ayuda a ordenar decisiones, pero no determina la causa de un síntoma cardíaco ni sustituye una evaluación médica.
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6">
                <li><a href="https://www.medlineplus.gov/spanish/ency/article/003081.htm" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: palpitaciones, causas y señales para pedir ayuda</a></li>
                <li><a href="https://www.nhs.uk/symptoms/heart-palpitations/" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">NHS: palpitaciones y atención urgente</a></li>
                <li><a href="https://medlineplus.gov/spanish/anxiety.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: ansiedad y síntomas físicos</a></li>
                <li><a href="https://medlineplus.gov/spanish/arrhythmia.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: arritmias, diagnóstico y emergencias</a></li>
                <li><a href="https://medlineplus.gov/spanish/panicdisorder.html" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: trastorno de pánico y evaluación de los síntomas</a></li>
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
                href: "/blog/debilidad-despues-ataque-ansiedad",
                label: "Ansiedad y recuperación",
                title: "Por qué puedes sentirte débil después",
                text: "Diferencia cansancio general de una pérdida de fuerza que necesita atención.",
              },
              {
                href: "/blog/ansiedad-despues-de-comer",
                label: "Ansiedad y alimentación",
                title: "Por qué aparece ansiedad después de comer",
                text: "Distingue una crisis de ansiedad de otras sensaciones que necesitan valoración.",
              },
              {
                href: "/blog/diario-emocional-ejemplo",
                label: "Diario emocional",
                title: "Ejemplo y plantilla de diario emocional",
                text: "Ordena contexto, emoción, pensamiento y respuesta sin autodiagnosticarte.",
              },
              {
                href: "/blog/tecnica-5-4-3-2-1-ansiedad",
                label: "Técnicas de anclaje",
                title: "Cómo hacer la técnica 5-4-3-2-1",
                text: "Úsala para orientarte, no para decidir si un síntoma cardíaco es seguro.",
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
