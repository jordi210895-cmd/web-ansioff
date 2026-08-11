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
