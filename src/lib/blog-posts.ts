export type BlogPostSummary = {
  slug: string;
  category: string;
  keyword: string;
  title: string;
  seoTitle: string;
  description: string;
  excerpt: string;
  publishedAt: string;
  modifiedAt: string;
  displayDate: string;
  readingTime: string;
};

export const blogPosts: BlogPostSummary[] = [
  {
    slug: "miedo-a-salir-a-la-calle",
    category: "Ansiedad y exposición",
    keyword: "miedo a salir a la calle",
    title: "Miedo a salir a la calle: qué hacer paso a paso si aparece ansiedad",
    seoTitle: "Miedo a salir a la calle: qué hacer | ANSIOFF",
    description:
      "¿Te da miedo salir a la calle? Entiende el ciclo de evitación y prepara primeros pasos graduales, con un ejemplo de jerarquía y señales para pedir ayuda.",
    excerpt:
      "Cómo entender el miedo, crear una jerarquía gradual y preparar una primera salida sin exigirte que la ansiedad desaparezca.",
    publishedAt: "2026-08-11",
    modifiedAt: "2026-08-11",
    displayDate: "11 de agosto de 2026",
    readingTime: "10 min de lectura",
  },
  {
    slug: "diario-emocional-ejemplo",
    category: "Diario emocional",
    keyword: "diario emocional ejemplo",
    title: "Diario emocional: ejemplo completo y qué escribir paso a paso",
    seoTitle: "Diario emocional: ejemplo y plantilla | ANSIOFF",
    description:
      "Consulta un ejemplo de diario emocional, una plantilla sencilla y preguntas concretas para registrar situación, emoción, pensamiento y respuesta.",
    excerpt:
      "Un ejemplo rellenado y una plantilla práctica para empezar a observar emociones y pensamientos sin convertir el diario en una obligación.",
    publishedAt: "2026-08-11",
    modifiedAt: "2026-08-11",
    displayDate: "11 de agosto de 2026",
    readingTime: "9 min de lectura",
  },
  {
    slug: "tecnica-5-4-3-2-1-ansiedad",
    category: "Técnicas de anclaje",
    keyword: "técnica 5 4 3 2 1 ansiedad",
    title: "Técnica 5-4-3-2-1 para la ansiedad: cómo hacerla paso a paso",
    seoTitle: "Técnica 5-4-3-2-1 para la ansiedad | ANSIOFF",
    description:
      "Aprende cómo hacer la técnica 5-4-3-2-1 para volver al presente, cómo adaptarla y qué límites tiene cuando aparece la ansiedad.",
    excerpt:
      "Una guía práctica de grounding con los cinco sentidos, ejemplos reales, adaptaciones y límites responsables.",
    publishedAt: "2026-08-11",
    modifiedAt: "2026-08-11",
    displayDate: "11 de agosto de 2026",
    readingTime: "8 min de lectura",
  },
  {
    slug: "ansiedad-al-despertar",
    category: "Ansiedad y rutinas",
    keyword: "ansiedad al despertar",
    title: "Ansiedad al despertar: por qué aparece y qué hacer por la mañana",
    seoTitle: "Ansiedad al despertar: causas y qué hacer | ANSIOFF",
    description:
      "¿Te despiertas con ansiedad? Conoce qué puede influir, qué hacer durante los primeros minutos y cuándo conviene consultar a un profesional.",
    excerpt:
      "Qué puede influir en la ansiedad matutina, una rutina breve para los primeros minutos y señales que conviene consultar.",
    publishedAt: "2026-08-11",
    modifiedAt: "2026-08-11",
    displayDate: "11 de agosto de 2026",
    readingTime: "9 min de lectura",
  },
  {
    slug: "ansiedad-por-la-noche",
    category: "Ansiedad y sueño",
    keyword: "ansiedad por la noche",
    title: "Ansiedad por la noche: por qué aparece y qué hacer si no puedes dormir",
    seoTitle: "Ansiedad por la noche: qué hacer para dormir | ANSIOFF",
    description:
      "¿La ansiedad aparece al acostarte? Descubre por qué puede intensificarse por la noche, qué hacer paso a paso y cuándo pedir ayuda profesional.",
    excerpt:
      "Una guía práctica para bajar el nivel de activación, salir del bucle de preocupación y saber cuándo conviene consultar a un profesional.",
    publishedAt: "2026-08-11",
    modifiedAt: "2026-08-11",
    displayDate: "11 de agosto de 2026",
    readingTime: "9 min de lectura",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
