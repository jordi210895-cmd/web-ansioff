import type { MetadataRoute } from "next";

const routes = [
  "",
  "/app-para-la-ansiedad",
  "/respiracion-4-7-8",
  "/respiracion-para-la-ansiedad",
  "/diario-emocional",
  "/sonidos-relajantes",
  "/kit-sos-ansiedad",
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
  const lastModified = new Date("2026-08-11");

  return routes.map((route) => ({
    url: `https://ansioff.com${route || "/"}`,
    lastModified,
    changeFrequency: route === "" ? "weekly" : "monthly",
    priority: route === "" ? 1 : route === "/business" ? 0.9 : 0.7,
  }));
}
