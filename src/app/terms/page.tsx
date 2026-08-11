import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Términos de servicio | ANSIOFF",
  description: "Términos generales de acceso y uso de ANSIOFF y su sitio web.",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <LegalPage
      eyebrow="Condiciones de uso"
      title="Términos de servicio"
      intro="Al utilizar esta web o acceder a ANSIOFF aceptas utilizar el servicio de forma responsable y de acuerdo con estas condiciones y con las condiciones aplicables de la App Store."
      sections={[
        {
          title: "Descripción",
          content: (
            <p>ANSIOFF ofrece recursos de bienestar como un Kit SOS, respiración guiada, diario emocional, sonidos relajantes y programas de autocuidado. ANSIOFF Business añade una experiencia para empleados y métricas agregadas para RRHH.</p>
          ),
        },
        {
          title: "No es un servicio de emergencia",
          content: (
            <p>ANSIOFF no sustituye la atención sanitaria ni los servicios de emergencia. Si existe riesgo inmediato para ti o para otra persona, contacta con los servicios de emergencia de tu zona.</p>
          ),
        },
        {
          title: "Uso de la aplicación",
          content: (
            <p>Debes utilizar la aplicación conforme a la ley, mantener seguras tus credenciales y no intentar alterar, copiar, descompilar o acceder de forma no autorizada al servicio.</p>
          ),
        },
        {
          title: "Disponibilidad y cambios",
          content: (
            <p>Las funciones, precios y disponibilidad pueden evolucionar. Los cambios materiales se comunicarán por los medios adecuados. Las compras o suscripciones realizadas mediante Apple también están sujetas a sus condiciones.</p>
          ),
        },
        {
          title: "Contenido personal",
          content: (
            <p>Eres responsable de la información que introduces. Evita incluir datos de terceros sin autorización y consulta la política de privacidad para conocer cómo se trata la información.</p>
          ),
        },
        {
          title: "Contacto",
          content: (
            <p>
              Para preguntas sobre estas condiciones puedes escribir a{" "}
              <a className="text-[#14b8a6] underline" href="mailto:ansioffapp@gmail.com">
                ansioffapp@gmail.com
              </a>
              .
            </p>
          ),
        },
      ]}
    />
  );
}
