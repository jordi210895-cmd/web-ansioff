import type { MetadataRoute } from "next";

const routes = [
  "",
  "/como-usar-ansioff",
  "/app-para-la-ansiedad",
  "/respiracion-4-7-8",
  "/respiracion-para-la-ansiedad",
  "/diario-emocional",
  "/sonidos-relajantes",
  "/kit-sos-ansiedad",
  "/blog",
  "/blog/ansiedad-al-despertar",
  "/blog/ansiedad-despues-de-comer",
  "/blog/ansiedad-por-la-noche",
  "/blog/diario-emocional-ejemplo",
  "/blog/debilidad-despues-ataque-ansiedad",
  "/blog/miedo-a-conducir",
  "/blog/miedo-a-salir-a-la-calle",
  "/blog/palpitaciones-por-ansiedad",
  "/blog/que-decir-a-persona-con-ansiedad",
  "/blog/respiracion-para-dormir",
  "/blog/tecnica-5-4-3-2-1-ansiedad",
  "/business",
  "/business/salud-mental-en-el-trabajo",
  "/business/bienestar-laboral",
  "/business/burnout-laboral",
  "/business/riesgos-psicosociales",
  "/business/absentismo-laboral",
  "/business/beneficios-para-empleados",
  "/privacy",
  "/legal",
  "/terms",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date("2026-08-12");

  return routes.map((route) => ({
    url: `https://ansioff.com${route || "/"}`,
    lastModified,
    changeFrequency: route === "" || route === "/blog" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/como-usar-ansioff" ? 0.9 : route === "/business" ? 0.9 : route === "/blog" ? 0.8 : 0.7,
  }));
}
