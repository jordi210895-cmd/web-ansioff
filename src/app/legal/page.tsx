import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Aviso legal | ANSIOFF",
  description: "Aviso legal y condiciones de acceso al sitio web de ANSIOFF.",
  alternates: { canonical: "/legal" },
};

export default function LegalNoticePage() {
  return (
    <LegalPage
      eyebrow="Información legal"
      title="Aviso legal"
      intro="Este aviso regula el acceso y el uso de ansioff.com, sitio informativo de la aplicación ANSIOFF y de su solución de bienestar laboral para empresas."
      sections={[
        {
          title: "Titular y contacto",
          content: (
            <p>
              Titular del servicio: ANSIOFF. Correo de contacto:{" "}
              <a className="text-[#14b8a6] underline" href="mailto:ansioffapp@gmail.com">
                ansioffapp@gmail.com
              </a>
              . Dominio: ansioff.com.
            </p>
          ),
        },
        {
          title: "Objeto del sitio",
          content: (
            <p>El sitio presenta las funciones de ANSIOFF, facilita el acceso a la ficha de la aplicación en la App Store y permite solicitar información o una demo de ANSIOFF Business.</p>
          ),
        },
        {
          title: "Uso responsable",
          content: (
            <p>El usuario debe utilizar el sitio de forma lícita, respetar los derechos de terceros y abstenerse de intentar acceder sin autorización a sistemas, formularios o datos.</p>
          ),
        },
        {
          title: "Propiedad intelectual",
          content: (
            <p>Los textos, diseños, marcas, capturas y demás elementos propios de ANSIOFF están protegidos por la normativa aplicable. No se autoriza su reproducción o explotación comercial sin permiso.</p>
          ),
        },
        {
          title: "Enlaces externos",
          content: (
            <p>El sitio puede enlazar con la App Store y con fuentes de terceros. ANSIOFF no controla sus contenidos, disponibilidad ni políticas y no responde de cambios realizados por esos servicios.</p>
          ),
        },
        {
          title: "Naturaleza del servicio",
          content: (
            <p>La información de esta web y las herramientas de ANSIOFF tienen fines de bienestar y apoyo. No constituyen atención de emergencia, diagnóstico médico ni tratamiento psicológico o psiquiátrico.</p>
          ),
        },
      ]}
    />
  );
}
