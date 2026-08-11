import type { Metadata } from "next";
import Link from "next/link";
import AppStoreLink from "@/components/app-store-link";
import BlogHeader from "@/components/blog-header";
import SiteFooter from "@/components/site-footer";
import { getBlogPost } from "@/lib/blog-posts";

const articlePost = getBlogPost("miedo-a-conducir");

if (!articlePost) {
  throw new Error("No se ha encontrado el artículo miedo-a-conducir");
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
    tags: ["miedo a conducir", "ansiedad al conducir", "amaxofobia", "exposición gradual"],
  },
  twitter: {
    card: "summary",
    title: post.title,
    description: post.description,
  },
};

const faqs = [
  {
    question: "¿Cómo se llama el miedo a conducir?",
    answer:
      "El término habitual es amaxofobia. Sin embargo, reconocer el nombre no permite saber si existe una fobia específica. Un profesional debe valorar la intensidad, la duración, la evitación, el impacto cotidiano y otras posibles explicaciones.",
  },
  {
    question: "¿Por qué me da miedo conducir?",
    answer:
      "Puede aparecer después de un siniestro o un susto, tras mucho tiempo sin conducir, por inseguridad con determinadas maniobras o junto a otros problemas de ansiedad. A veces se concentra en autopistas, túneles, lluvia, tráfico denso o conducir a solas. No hay una única causa que pueda determinarse con un artículo.",
  },
  {
    question: "¿Cómo puedo perder el miedo a conducir?",
    answer:
      "No hay un método que garantice perderlo de inmediato. Un enfoque utilizado para las fobias es ordenar las situaciones de menor a mayor dificultad y practicar de forma gradual y repetida. Al tratarse de conducción, las prácticas deben cumplir las normas y proteger la seguridad; puede ser necesario contar con un psicólogo, un profesor de formación vial o ambos.",
  },
  {
    question: "¿Qué hago si aparece ansiedad mientras conduzco?",
    answer:
      "Mantén la atención en la vía, evita usar el móvil o hacer ejercicios que distraigan, reduce la velocidad de manera progresiva y aumenta la distancia de seguridad. Busca una salida o un lugar permitido donde detenerte sin crear otro peligro. Si no puedes controlar el vehículo con seguridad o existe una posible urgencia médica, llama al 112 cuando ya estés detenido de forma segura o pide a otra persona que lo haga.",
  },
  {
    question: "¿Se puede conducir teniendo ansiedad?",
    answer:
      "Tener ansiedad no responde por sí solo a esa pregunta. Importa si los síntomas, el sueño, la concentración o un tratamiento afectan a tu capacidad para conducir con seguridad. Si tienes dudas, síntomas intensos o efectos de medicación como somnolencia, visión borrosa o mareo, no conduzcas y consulta a un profesional sanitario.",
  },
  {
    question: "¿Cómo afrontar el miedo a conducir por autopista?",
    answer:
      "No empieces por una ruta larga ni en condiciones difíciles. Puede ser más seguro revisar primero incorporaciones y salidas con un profesor, practicar en una hora de poco tráfico y recorrer solo el tramo entre dos salidas conocidas. La dificultad debe adaptarse a tu experiencia real y a las condiciones de la vía.",
  },
  {
    question: "Tengo el carnet pero me da miedo conducir, ¿por dónde empiezo?",
    answer:
      "Si te falta práctica o ha pasado mucho tiempo, unas clases de actualización con un profesor pueden ayudarte a separar una necesidad técnica del miedo. Después puedes crear una secuencia gradual con rutas conocidas, condiciones sencillas y objetivos concretos.",
  },
  {
    question: "¿Cuándo conviene pedir ayuda profesional?",
    answer:
      "Consulta si dejas de conducir aunque lo necesitas, el miedo se extiende a más rutas, aparecen ataques de pánico, hubo un siniestro traumático o la ansiedad afecta a la concentración. La terapia cognitivo-conductual puede incluir exposición gradual; en conducción también puede ser útil coordinarla con formación vial.",
  },
];

export default function FearOfDrivingArticle() {
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
          "miedo a conducir",
          "fobia a conducir",
          "ansiedad al conducir",
          "miedo a conducir por autopista",
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
              Si te da miedo conducir, el objetivo no tiene que ser subirte hoy a una autopista ni eliminar toda la ansiedad. Empieza por identificar la situación concreta, separar la práctica emocional de la formación vial y preparar un paso gradual que sea legal, seguro y repetible.
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
              Para afrontar el miedo a conducir, concreta qué trayectos o maniobras temes, ordénalos por dificultad y practica desde el paso más sencillo en condiciones seguras. Si te falta destreza, recurre a clases de actualización; si el miedo es intenso, hubo un accidente o aparecen ataques de pánico, prepara el proceso con un profesional de salud mental. Nunca uses el móvil ni una app mientras conduces.
            </p>
          </aside>

          <nav aria-labelledby="contenido-articulo" className="mt-10 rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
            <h2 id="contenido-articulo" className="font-sora text-base font-semibold">En esta guía</h2>
            <ol className="mt-4 grid gap-2 text-sm text-[#8ab0cc] sm:grid-cols-2">
              <li><a href="#entender" className="hover:text-[#14b8a6]">1. Entender el miedo</a></li>
              <li><a href="#seguridad" className="hover:text-[#14b8a6]">2. Comprobar la seguridad</a></li>
              <li><a href="#jerarquia" className="hover:text-[#14b8a6]">3. Crear una jerarquía</a></li>
              <li><a href="#autopista" className="hover:text-[#14b8a6]">4. Autopista y conducir a solas</a></li>
              <li><a href="#durante" className="hover:text-[#14b8a6]">5. Ansiedad al volante</a></li>
              <li><a href="#revisar" className="hover:text-[#14b8a6]">6. Revisar y pedir ayuda</a></li>
              <li><a href="#herramienta" className="hover:text-[#14b8a6]">7. Usar ANSIOFF con seguridad</a></li>
              <li><a href="#preguntas" className="hover:text-[#14b8a6]">8. Preguntas frecuentes</a></li>
            </ol>
          </nav>

          <div className="mt-14 space-y-16 text-[17px] leading-8 text-[#a9c5da]">
            <section id="entender" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Miedo a conducir, fobia a conducir y amaxofobia</h2>
              <div className="mt-6 space-y-5">
                <p>
                  «Amaxofobia» es el nombre que suele utilizarse para el miedo a conducir. Saber cómo se llama no equivale a recibir un diagnóstico. El miedo puede aparecer solo en una situación, como una incorporación, o interferir tanto que la persona deje de conducir por completo. Un profesional valora la intensidad, la persistencia, la evitación y el impacto antes de hablar de una fobia específica.
                </p>
                <p>
                  Puede comenzar después de un siniestro o un susto, tras años sin conducir, al obtener el permiso sin haber consolidado práctica o junto a otros problemas de ansiedad. También puede concentrarse en lluvia, túneles, puentes, tráfico denso, carreteras desconocidas, conducir de noche o llevar pasajeros. Tener miedo no demuestra falta de capacidad, pero sí merece atención si afecta a la conducción segura.
                </p>
                <p>
                  Evitar el coche alivia el malestar a corto plazo. Si se repite, puede reforzar la predicción de que conducir es insoportable o imposible. La exposición gradual se utiliza para poner a prueba esas predicciones, pero la carretera no es un laboratorio: la seguridad vial, la experiencia técnica y las normas siempre tienen prioridad.
                </p>
              </div>

              <div className="mt-8 rounded-xl border border-[#0e2a4a] bg-[#04152b] p-6">
                <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Define qué significa «me da miedo conducir» en tu caso</h3>
                <ul className="mt-4 space-y-3 text-base">
                  <li><strong className="text-[#4ddbc4]">Situación:</strong> ¿arrancar, aparcar, entrar en una rotonda, conducir a solas o usar una vía rápida?</li>
                  <li><strong className="text-[#4ddbc4]">Predicción:</strong> ¿temes bloquearte, perder el control, equivocarte o no encontrar una salida?</li>
                  <li><strong className="text-[#4ddbc4]">Respuesta:</strong> ¿evitas, cancelas, pides que otra persona conduzca o sales de la ruta cuanto antes?</li>
                  <li><strong className="text-[#4ddbc4]">Necesidad técnica:</strong> ¿hay una maniobra que todavía no dominas y conviene practicar con un profesor?</li>
                </ul>
              </div>
            </section>

            <section id="seguridad" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Antes de practicar: comprueba si estás en condiciones de conducir</h2>
              <p className="mt-6">
                Una práctica gradual no justifica conducir sin permiso, con sueño, bajo los efectos del alcohol o drogas, ni cuando un síntoma o un medicamento reduce la atención. Si no sabes si estás en condiciones, pospón la conducción y consulta. No cambies ni suspendas una medicación por tu cuenta.
              </p>

              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                {[
                  ["Permiso y destreza", "Conduce en vía pública solo si estás legalmente habilitado. Si necesitas recuperar técnica, elige una autoescuela y un vehículo preparado para prácticas."],
                  ["Sueño y concentración", "No practiques si estás somnoliento, mareado, desorientado o no puedes mantener la atención en la vía."],
                  ["Medicamentos", "Revisa el prospecto y el pictograma de conducción. Pregunta a tu médico o farmacéutico si puede causar sueño, visión borrosa o lentitud de reacción."],
                  ["Ruta y condiciones", "Empieza con una ruta conocida, luz diurna, tiempo estable y tráfico moderado. No conviertas lluvia, noche y autopista en el primer paso."],
                ].map(([title, text]) => (
                  <div key={title} className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5">
                    <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">{title}</h3>
                    <p className="mt-3 text-base">{text}</p>
                  </div>
                ))}
              </div>

              <div className="mt-8 rounded-2xl border border-[#f97316]/40 bg-[#2a170e] p-6 text-base leading-7 text-[#fed7aa]">
                <h3 className="font-sora text-lg font-semibold text-[#ffb47b]">La seguridad no es una conducta de evitación</h3>
                <p className="mt-3">
                  No conducir cuando tu capacidad está afectada es una decisión de seguridad. La exposición consiste en trabajar un miedo dentro de condiciones razonables, no en ignorar sueño, efectos de medicación, falta de formación o un posible problema médico.
                </p>
              </div>
            </section>

            <section id="jerarquia" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cómo crear una jerarquía para afrontar el miedo a conducir</h2>
              <p className="mt-6">
                Escribe situaciones concretas y puntúa la dificultad prevista de 0 a 10. Las cifras siguientes son solo un ejemplo: debes cambiar el orden según tu experiencia, tus habilidades y el entorno. Si una tarea exige una maniobra que no dominas, practícala con un profesor de formación vial.
              </p>

              <div className="mt-7 space-y-4">
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">2/10 · Preparar el puesto</strong><span className="mt-2 block">Sentarte con el coche estacionado, ajustar asiento y espejos y repasar los mandos sin iniciar la marcha.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">3/10 · Recuperar sensaciones</strong><span className="mt-2 block">En una clase o zona autorizada, practicar arranque, detención y control básico con apoyo adecuado.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">4/10 · Ruta muy conocida</strong><span className="mt-2 block">Recorrer un trayecto corto y sencillo en una hora tranquila con un acompañante acordado.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">5/10 · Repetir la misma ruta</strong><span className="mt-2 block">Hacer el trayecto varios días y registrar qué anticipabas, qué ocurrió y qué necesitas practicar.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">6/10 · Añadir una dificultad</strong><span className="mt-2 block">Ampliar unos minutos, incluir una rotonda conocida o reducir una ayuda, pero no cambiarlo todo a la vez.</span></div>
                <div className="rounded-xl border border-[#0e2a4a] bg-[#04152b] p-5"><strong className="text-[#14b8a6]">7/10 · Vía más exigente</strong><span className="mt-2 block">Practicar una incorporación o un tramo de autovía primero con un profesor, si esa es tu dificultad.</span></div>
              </div>

              <div className="mt-8 rounded-2xl border border-[#14b8a6]/30 bg-[#0d2d3e]/60 p-6 text-base leading-8 text-[#c8dff0]">
                <h3 className="font-sora text-lg font-semibold text-[#4ddbc4]">Registro breve después de cada práctica</h3>
                <ol className="mt-4 space-y-3">
                  <li><strong>Situación practicada:</strong> ___</li>
                  <li><strong>Dificultad prevista y máxima:</strong> ___/10 y ___/10</li>
                  <li><strong>Predicción:</strong> «Pensaba que ___»</li>
                  <li><strong>Lo que ocurrió:</strong> ___</li>
                  <li><strong>Necesidad técnica detectada:</strong> ___</li>
                  <li><strong>Siguiente repetición o ajuste:</strong> ___</li>
                </ol>
              </div>
            </section>

            <section id="autopista" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Ansiedad al conducir por autopista o al conducir a solas</h2>
              <p className="mt-6">
                La velocidad, las incorporaciones, la sensación de no poder parar de inmediato y la distancia entre salidas pueden aumentar el miedo a conducir en autopista o autovía. Empezar directamente por un recorrido largo añade demasiadas variables y puede impedir saber qué parte necesitas trabajar.
              </p>

              <div className="mt-8 grid gap-5 md:grid-cols-2">
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]">Para una vía rápida</h3>
                  <ol className="mt-4 space-y-3 text-base">
                    <li><strong className="text-[#4ddbc4]">1.</strong> Revisa la incorporación y la salida con un profesor.</li>
                    <li><strong className="text-[#4ddbc4]">2.</strong> Elige un tramo conocido entre dos salidas próximas.</li>
                    <li><strong className="text-[#4ddbc4]">3.</strong> Practica con luz, tiempo estable y poco tráfico.</li>
                    <li><strong className="text-[#4ddbc4]">4.</strong> Repite el mismo tramo antes de alargar la ruta.</li>
                  </ol>
                </div>
                <div className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]">Si te da miedo conducir a solas</h3>
                  <ol className="mt-4 space-y-3 text-base">
                    <li><strong className="text-[#4ddbc4]">1.</strong> Aclara qué apoyo aporta el acompañante.</li>
                    <li><strong className="text-[#4ddbc4]">2.</strong> Pídele que dé menos indicaciones en una ruta dominada.</li>
                    <li><strong className="text-[#4ddbc4]">3.</strong> Haz el mismo trayecto con la persona esperando al llegar.</li>
                    <li><strong className="text-[#4ddbc4]">4.</strong> Amplía después una sola variable cada vez.</li>
                  </ol>
                </div>
              </div>

              <p className="mt-6">
                El acompañamiento puede facilitar el inicio, pero no debe convertirse en instrucciones constantes que te distraigan. Acordad antes cómo ayudar. Si la práctica requiere correcciones técnicas, sustituye al acompañante informal por un profesor.
              </p>
            </section>

            <section id="durante" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Qué hacer si aparece ansiedad mientras conduces</h2>
              <p className="mt-6">
                La prioridad es conservar el control del vehículo y la atención en la vía. Este no es el momento de abrir ANSIOFF, mirar el móvil, cerrar los ojos, escribir un registro ni iniciar una técnica que compita con la conducción.
              </p>

              <ol className="mt-8 space-y-6">
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">1.</span>Mantén la mirada y el control</h3>
                  <p className="mt-3">Dirige la atención al carril, la señalización y los vehículos. Sujeta el volante con normalidad y evita comprobar continuamente el pulso o las sensaciones.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">2.</span>Crea margen de seguridad</h3>
                  <p className="mt-3">Reduce la velocidad progresivamente dentro de las normas, aumenta la distancia con el vehículo de delante y evita maniobras bruscas.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">3.</span>Busca dónde detenerte sin añadir peligro</h3>
                  <p className="mt-3">Señaliza con antelación y toma una salida o aparca en un lugar permitido. No te detengas de forma repentina en el carril ni uses el arcén como primera opción si puedes abandonar la vía de manera segura.</p>
                </li>
                <li className="rounded-2xl border border-[#0e2a4a] bg-[#04152b] p-6">
                  <h3 className="font-sora text-xl font-semibold text-[#e8f4ff]"><span className="mr-3 text-[#14b8a6]">4.</span>Decide cuando ya estés estacionado</h3>
                  <p className="mt-3">Con el vehículo inmovilizado en un lugar seguro, valora si puedes continuar, si otra persona debe conducir o si necesitas asistencia. No retomes la marcha si sigues sin poder atender al tráfico.</p>
                </li>
              </ol>

              <div className="mt-8 rounded-2xl border border-[#f97316]/40 bg-[#2a170e] p-6 text-base leading-7 text-[#fed7aa]">
                <h3 className="font-sora text-lg font-semibold text-[#ffb47b]">Cuándo tratarlo como una posible urgencia</h3>
                <p className="mt-3">
                  No atribuyas automáticamente a la ansiedad un dolor intenso en el pecho, desmayo, dificultad respiratoria nueva, debilidad de un lado, confusión u otros síntomas graves o diferentes de los habituales. Detente de forma segura y llama al 112, o pide a otra persona que llame, si existe peligro inmediato o una posible urgencia médica.
                </p>
              </div>
            </section>

            <section id="revisar" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Cómo revisar la práctica sin convertirla en un examen</h2>
              <p className="mt-6">
                Una práctica no se mide solo por cuánta ansiedad sentiste. Revisa si respetaste las normas, mantuviste la atención, completaste el objetivo previsto y detectaste alguna habilidad que requiere formación. Que haya malestar no significa que hayas fracasado; que haya riesgo real tampoco debe ignorarse para cumplir el plan.
              </p>

              <div className="mt-8 rounded-xl border border-[#0e2a4a] bg-[#04152b] p-6">
                <h3 className="font-sora text-lg font-semibold text-[#e8f4ff]">Repite, ajusta o pide apoyo</h3>
                <ul className="mt-4 space-y-3 text-base">
                  <li><strong className="text-[#4ddbc4]">Repite:</strong> si el paso fue seguro y quieres consolidarlo antes de avanzar.</li>
                  <li><strong className="text-[#4ddbc4]">Ajusta:</strong> si añadiste demasiadas dificultades o la ruta no permitía practicar con calma.</li>
                  <li><strong className="text-[#4ddbc4]">Autoescuela:</strong> si necesitas recuperar maniobras, normas o confianza técnica.</li>
                  <li><strong className="text-[#4ddbc4]">Salud mental:</strong> si el miedo es intenso, se amplía, provoca pánico o está relacionado con un trauma.</li>
                  <li><strong className="text-[#4ddbc4]">Profesional sanitario:</strong> si existen síntomas físicos nuevos o dudas sobre medicación y conducción.</li>
                </ul>
              </div>
            </section>

            <section id="herramienta" className="scroll-mt-24 rounded-2xl border border-[#14b8a6]/30 bg-[#0d2d3e]/60 p-7">
              <h2 className="font-sora text-2xl font-semibold leading-tight text-[#e8f4ff]">Usar ANSIOFF antes y después, nunca mientras conduces</h2>
              <p className="mt-4 text-base leading-7 text-[#c8dff0]">
                En ANSIOFF puedes ordenar situaciones en una jerarquía de exposición, registrar cómo fue una práctica y preparar información para compartir con tu psicólogo. Hazlo antes de iniciar la marcha o después, con el coche estacionado en un lugar permitido. No manipules el teléfono, la app ni el botón SOS mientras conduces.
              </p>
              <p className="mt-4 text-base leading-7 text-[#c8dff0]">
                La app es una herramienta de apoyo y registro. No enseña técnicas de conducción, no determina si estás en condiciones de conducir y no sustituye a una autoescuela, a un psicólogo ni a la atención sanitaria.
              </p>
              <AppStoreLink
                placement="blog_miedo_conducir_mid_cta"
                className="mt-7 inline-flex rounded-xl bg-[#14b8a6] px-6 py-3 text-sm font-semibold text-[#020e1c] hover:bg-[#0d9488]"
              >
                 Ver ANSIOFF en App Store
              </AppStoreLink>
            </section>

            <section id="preguntas" className="scroll-mt-24">
              <h2 className="font-sora text-3xl font-semibold leading-tight text-[#e8f4ff]">Preguntas frecuentes sobre el miedo a conducir</h2>
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
                Hemos separado las recomendaciones generales sobre exposición de las decisiones de seguridad vial. La jerarquía es un ejemplo educativo, no un programa terapéutico ni una clase de conducción.
              </p>
              <ul className="mt-5 space-y-3 text-sm leading-6">
                <li><a href="https://revista.dgt.es/es/noticias/nacional/2018/12DICIEMBRE/1213-Amaxofobia.shtml" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">Revista DGT: amaxofobia, situaciones temidas y apoyo especializado</a></li>
                <li><a href="https://www.dgt.es/muevete-con-seguridad/evita-conductas-de-riesgo/Conducir-con-estres" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">DGT: cómo afecta el estrés a la conducción</a></li>
                <li><a href="https://www.dgt.es/muevete-con-seguridad/evita-conductas-de-riesgo/Conducir-con-sueno-o-cansancio" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">DGT: sueño, cansancio, medicación y capacidad para conducir</a></li>
                <li><a href="https://www.nhs.uk/every-mind-matters/mental-wellbeing-tips/self-help-cbt-techniques/facing-your-fears/" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">NHS Every Mind Matters: afrontar los miedos gradualmente</a></li>
                <li><a href="https://medlineplus.gov/spanish/ency/article/000956.htm" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">MedlinePlus: fobia específica y tratamiento basado en exposición</a></li>
                <li><a href="https://www.dgt.es/muevete-con-seguridad/viaja-seguro/consejos-extranjeros/en-caso-de-emergencia/" target="_blank" rel="noreferrer" className="text-[#4ddbc4] underline decoration-[#14b8a6]/40 underline-offset-4">DGT: actuación y teléfono 112 en una emergencia vial</a></li>
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
                href: "/blog/miedo-a-salir-a-la-calle",
                label: "Ansiedad y exposición",
                title: "Qué hacer si te da miedo salir a la calle",
                text: "Otra jerarquía gradual para entender el ciclo de evitación.",
              },
              {
                href: "/blog/tecnica-5-4-3-2-1-ansiedad",
                label: "Técnicas de anclaje",
                title: "Cómo hacer la técnica 5-4-3-2-1",
                text: "Practícala antes o después del trayecto, nunca mientras conduces.",
              },
              {
                href: "/blog/diario-emocional-ejemplo",
                label: "Diario emocional",
                title: "Ejemplo y plantilla de diario emocional",
                text: "Registra predicción, emoción y resultado después de una práctica.",
              },
              {
                href: "/blog/que-decir-a-persona-con-ansiedad",
                label: "Apoyo y ansiedad",
                title: "Qué decirle a una persona con ansiedad",
                text: "Acompaña sin forzar ni convertirte en instructor improvisado.",
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
