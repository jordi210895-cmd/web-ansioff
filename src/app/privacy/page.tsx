import type { Metadata } from "next";
import LegalPage from "@/components/legal-page";

export const metadata: Metadata = {
  title: "Política de privacidad | ANSIOFF",
  description: "Información sobre el tratamiento de datos personales en la web de ANSIOFF.",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <LegalPage
      eyebrow="Privacidad"
      title="Política de privacidad"
      intro="Esta política explica qué información trata ANSIOFF a través de ansioff.com, para qué se utiliza y qué opciones tienes. La información sobre los datos tratados dentro de la aplicación debe consultarse también en su ficha de la App Store."
      sections={[
        {
          title: "Responsable y contacto",
          content: (
            <p>
              El servicio ANSIOFF gestiona los datos recogidos en este sitio web. Para consultas de privacidad o para ejercer tus derechos puedes escribir a{" "}
              <a className="text-[#14b8a6] underline" href="mailto:ansioffapp@gmail.com">
                ansioffapp@gmail.com
              </a>
              .
            </p>
          ),
        },
        {
          title: "Datos que recogemos en la web",
          content: (
            <>
              <p>Si solicitas una demo de ANSIOFF Business, tratamos el nombre, empresa, correo corporativo y número aproximado de empleados que introduces en el formulario.</p>
              <p>Si aceptas la analítica, Google puede recoger identificadores y datos técnicos de navegación para medir visitas, rendimiento y clics hacia la App Store. Estos servicios no se cargan si rechazas la analítica.</p>
            </>
          ),
        },
        {
          title: "Finalidades y base jurídica",
          content: (
            <>
              <p>Usamos los datos del formulario para responder a tu solicitud, preparar la demo y mantener comunicaciones relacionadas con ella. La base es tu consentimiento y la aplicación de medidas precontractuales solicitadas por ti.</p>
              <p>La analítica y la publicidad se activan únicamente con tu consentimiento, que puedes rechazar sin perder acceso a la web.</p>
            </>
          ),
        },
        {
          title: "Conservación y destinatarios",
          content: (
            <>
              <p>Conservamos los datos durante el tiempo necesario para atender la solicitud y, posteriormente, durante los plazos exigibles para responder a posibles responsabilidades.</p>
              <p>Podemos utilizar proveedores técnicos para alojamiento, correo y analítica. Solo acceden a los datos necesarios para prestar su servicio y deben aplicar las garantías correspondientes.</p>
            </>
          ),
        },
        {
          title: "Tus derechos",
          content: (
            <p>Puedes solicitar acceso, rectificación, supresión, oposición, limitación o portabilidad escribiendo al correo de contacto. También puedes retirar tu consentimiento y presentar una reclamación ante la Agencia Española de Protección de Datos.</p>
          ),
        },
        {
          title: "Herramienta de bienestar",
          content: (
            <p>ANSIOFF es una herramienta de bienestar. No realiza diagnósticos ni sustituye la evaluación o el tratamiento de un profesional de la salud mental.</p>
          ),
        },
      ]}
    />
  );
}
