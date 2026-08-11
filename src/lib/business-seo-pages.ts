import type { SeoFaq, SeoSection } from "@/lib/personal-seo-pages";

export type BusinessSeoPage = {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  highlights: string[];
  sections: SeoSection[];
  faqs: SeoFaq[];
  related: string[];
  sources?: { label: string; url: string }[];
};

export const businessSeoPages: Record<string, BusinessSeoPage> = {
  "salud-mental-en-el-trabajo": {
    slug: "salud-mental-en-el-trabajo",
    keyword: "salud mental en el trabajo",
    title: "Salud mental en el trabajo para empresas | ANSIOFF",
    description:
      "Impulsa la salud mental en el trabajo con recursos para empleados y métricas agregadas para RRHH. Conoce ANSIOFF Business y solicita una demo.",
    eyebrow: "SALUD MENTAL EN EL TRABAJO",
    h1: "Salud mental en el trabajo con herramientas para empleados y RRHH",
    intro:
      "ANSIOFF Business combina una app de bienestar emocional para empleados con un panel de uso y adopción agregados para RRHH. La empresa puede incorporar recursos cotidianos dentro de una estrategia más amplia de salud mental en el trabajo.",
    highlights: [
      "Kit SOS, respiración y diario emocional desde el móvil",
      "Métricas agregadas de uso y adopción para RRHH",
      "Planes escalables según el tamaño del equipo",
      "Demo adaptada a las necesidades de la empresa",
    ],
    sections: [
      {
        title: "Una experiencia sencilla para el empleado",
        paragraphs: [
          "El equipo accede desde el iPhone a respiración guiada, sonidos relajantes, diario emocional y programas de autocuidado. Los recursos están organizados para facilitar pausas breves durante o fuera de la jornada.",
          "La aplicación es una herramienta de bienestar. No sustituye la asistencia psicológica, el diagnóstico ni las obligaciones preventivas de la empresa.",
        ],
      },
      {
        title: "Información agregada para orientar el bienestar laboral",
        paragraphs: [
          "RRHH puede revisar tendencias de adopción y uso de los recursos sin exponer el contenido de las notas personales. Esto permite detectar qué herramientas utiliza el equipo y decidir dónde reforzar comunicación, formación o acompañamiento.",
          "Las métricas deben interpretarse junto con otras fuentes internas y nunca utilizarse para diagnosticar o evaluar clínicamente a una persona.",
        ],
      },
      {
        title: "Cómo integrar ANSIOFF en la empresa",
        paragraphs: [
          "El punto de partida es definir el objetivo: facilitar recursos, apoyar una campaña de bienestar, acompañar periodos de carga o complementar un programa existente. Durante la demo se revisan el tamaño del equipo, la comunicación de lanzamiento y las métricas disponibles.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿ANSIOFF sustituye la prevención de riesgos psicosociales?",
        a: "No. Es una herramienta de bienestar complementaria y no sustituye la evaluación preventiva, la intervención organizativa ni el seguimiento exigible.",
      },
      {
        q: "¿Qué ve RRHH en el panel?",
        a: "Métricas agregadas de uso y adopción de los recursos disponibles, sin mostrar el contenido de las notas personales.",
      },
    ],
    related: ["bienestar-laboral", "burnout-laboral", "riesgos-psicosociales"],
    sources: [
      { label: "INSST: riesgos psicosociales", url: "https://www.insst.es/materias/riesgos/riesgos-psicosociales" },
      { label: "BOE: Ley 31/1995 de Prevención de Riesgos Laborales", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292" },
    ],
  },
  "bienestar-laboral": {
    slug: "bienestar-laboral",
    keyword: "bienestar laboral",
    title: "Bienestar laboral para empresas y empleados | ANSIOFF",
    description:
      "Crea un plan de bienestar laboral con recursos móviles para empleados y métricas agregadas para RRHH. Solicita una demo de ANSIOFF Business.",
    eyebrow: "BIENESTAR LABORAL",
    h1: "Bienestar laboral con recursos que el equipo puede usar cada día",
    intro:
      "Un plan de bienestar laboral necesita ser fácil de comunicar, sencillo de utilizar y medible sin invadir la privacidad. ANSIOFF ofrece herramientas móviles para empleados y una visión agregada para RRHH.",
    highlights: [
      "Acceso móvil a recursos de bienestar emocional",
      "Onboarding y comunicación para facilitar la adopción",
      "Seguimiento agregado de uso por parte de RRHH",
      "Precio por empleado y mes",
    ],
    sections: [
      {
        title: "Del beneficio corporativo al uso cotidiano",
        paragraphs: [
          "El bienestar laboral no depende únicamente de ofrecer una herramienta, sino de explicar cuándo puede utilizarse y facilitar el acceso. ANSIOFF agrupa respiración, diario emocional, sonidos y pautas breves en una experiencia móvil.",
          "La comunicación de lanzamiento puede vincular cada recurso con situaciones concretas: pausas, concentración, registro emocional o momentos de estrés.",
        ],
      },
      {
        title: "Medir la adopción sin leer contenido personal",
        paragraphs: [
          "El panel para RRHH se orienta a métricas agregadas de uso y adopción. La finalidad es entender qué recursos se utilizan y mejorar el programa, no acceder a anotaciones personales ni inferir diagnósticos.",
          "Antes del lanzamiento conviene definir qué indicadores son útiles, quién los revisará y cómo se comunicarán los límites de la herramienta al equipo.",
        ],
      },
      {
        title: "Un plan de bienestar laboral que pueda evolucionar",
        paragraphs: [
          "La empresa puede comenzar con un equipo, observar la adopción y ajustar la comunicación antes de ampliar el programa. ANSIOFF ofrece planes por tamaño y una demo para revisar el encaje.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué incluye un plan de bienestar laboral con ANSIOFF?",
        a: "Incluye acceso del empleado a las herramientas de la app, onboarding y un panel de métricas agregadas para RRHH según el plan contratado.",
      },
      {
        q: "¿Puede implantarse por fases?",
        a: "Sí. La demo permite revisar el tamaño del equipo y plantear una implantación acorde con las necesidades de la empresa.",
      },
    ],
    related: ["salud-mental-en-el-trabajo", "beneficios-para-empleados", "burnout-laboral"],
  },
  "burnout-laboral": {
    slug: "burnout-laboral",
    keyword: "burnout laboral",
    title: "Burnout laboral: prevención y apoyo al equipo | ANSIOFF",
    description:
      "Aborda el burnout laboral con medidas organizativas y recursos de bienestar para empleados. Descubre cómo ANSIOFF puede complementar tu estrategia.",
    eyebrow: "BURNOUT LABORAL",
    h1: "Burnout laboral: prevención organizativa y apoyo cotidiano",
    intro:
      "El burnout laboral no se resuelve únicamente con una app. Requiere revisar las condiciones de trabajo, la carga, los recursos y la organización. ANSIOFF puede complementar ese trabajo con herramientas de bienestar accesibles para el equipo.",
    highlights: [
      "Pausas guiadas y respiración desde el móvil",
      "Diario emocional para registrar situaciones y emociones",
      "Recursos de autocuidado y concentración",
      "Adopción agregada para orientar la comunicación interna",
    ],
    sections: [
      {
        title: "La prevención del burnout empieza en la organización",
        paragraphs: [
          "Las acciones deben considerar carga de trabajo, autonomía, claridad de funciones, apoyo, horarios y recuperación. Un recurso individual puede acompañar, pero no compensar por sí solo un problema estructural.",
          "Por eso ANSIOFF debe integrarse en un plan que incluya escucha, evaluación, intervención y seguimiento por parte de la empresa y sus responsables de prevención.",
        ],
      },
      {
        title: "Recursos de bienestar para el día a día",
        paragraphs: [
          "Los empleados pueden utilizar respiración guiada, sonidos relajantes y pausas breves cuando necesiten centrar la atención. El diario emocional ayuda a registrar situaciones y observar temas repetidos.",
          "La app no etiqueta a la persona ni determina su nivel de burnout. Cualquier evaluación debe realizarse con metodología adecuada y profesionales competentes.",
        ],
      },
      {
        title: "Comunicación y seguimiento",
        paragraphs: [
          "Una implantación responsable explica qué ofrece la herramienta, qué datos se agregan y cuándo buscar ayuda. RRHH puede revisar la adopción para mejorar la comunicación sin convertir el uso en una medida de rendimiento.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Una app puede prevenir por sí sola el burnout laboral?",
        a: "No. Puede aportar recursos de apoyo, pero la prevención requiere medidas organizativas, evaluación y seguimiento adecuados.",
      },
      {
        q: "¿ANSIOFF diagnostica burnout?",
        a: "No. ANSIOFF no realiza diagnósticos ni sustituye la valoración de profesionales competentes.",
      },
    ],
    related: ["riesgos-psicosociales", "bienestar-laboral", "salud-mental-en-el-trabajo"],
    sources: [
      { label: "INSST: riesgos psicosociales", url: "https://www.insst.es/materias/riesgos/riesgos-psicosociales" },
    ],
  },
  "riesgos-psicosociales": {
    slug: "riesgos-psicosociales",
    keyword: "riesgos psicosociales en el trabajo",
    title: "Riesgos psicosociales en el trabajo: guía | ANSIOFF",
    description:
      "Conoce cómo abordar los riesgos psicosociales en el trabajo y qué papel puede tener una herramienta de bienestar dentro de la prevención empresarial.",
    eyebrow: "RIESGOS PSICOSOCIALES EN EL TRABAJO",
    h1: "Riesgos psicosociales en el trabajo: evaluación, intervención y apoyo",
    intro:
      "Los riesgos psicosociales en el trabajo deben abordarse mediante identificación, evaluación, intervención y seguimiento. ANSIOFF puede ofrecer recursos de bienestar, pero no sustituye las obligaciones preventivas ni la metodología profesional.",
    highlights: [
      "Herramienta complementaria, no evaluación legal",
      "Recursos para pausas y autorregistro emocional",
      "Métricas agregadas de adopción para RRHH",
      "Límites claros sobre diagnóstico y cumplimiento",
    ],
    sections: [
      {
        title: "Qué debe hacer la empresa",
        paragraphs: [
          "La prevención requiere analizar factores relacionados con la organización, el contenido y las condiciones del trabajo. La empresa debe aplicar una metodología adecuada, proteger la confidencialidad, diseñar medidas y revisar su eficacia.",
          "Una app no reemplaza entrevistas, cuestionarios validados, trabajo de campo, análisis técnico ni participación de las personas trabajadoras cuando estos sean necesarios.",
        ],
      },
      {
        title: "El papel de una herramienta de bienestar",
        paragraphs: [
          "ANSIOFF puede complementar un programa ofreciendo respiración guiada, Kit SOS, diario emocional y sonidos relajantes. Estos recursos se orientan al bienestar cotidiano, no a clasificar riesgos o emitir diagnósticos.",
          "El panel para RRHH muestra adopción agregada. Estos datos pueden ayudar a mejorar la comunicación del programa, pero no deben utilizarse como sustituto de una evaluación de riesgos psicosociales.",
        ],
      },
      {
        title: "Marco aplicable en España",
        paragraphs: [
          "En España, la referencia general es la Ley 31/1995 de Prevención de Riesgos Laborales y los criterios técnicos del Instituto Nacional de Seguridad y Salud en el Trabajo. La NOM-035 pertenece a México y no debe presentarse como norma de cumplimiento española.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿ANSIOFF cumple o sustituye la evaluación de riesgos psicosociales?",
        a: "No. ANSIOFF es una herramienta complementaria de bienestar y no sustituye la evaluación, intervención y seguimiento preventivos.",
      },
      {
        q: "¿La NOM-035 es aplicable en España?",
        a: "No. La NOM-035 es una norma mexicana. En España deben consultarse la normativa y las guías de los organismos competentes.",
      },
    ],
    related: ["salud-mental-en-el-trabajo", "burnout-laboral", "bienestar-laboral"],
    sources: [
      { label: "INSST: riesgos psicosociales", url: "https://www.insst.es/materias/riesgos/riesgos-psicosociales" },
      { label: "BOE: Ley 31/1995", url: "https://www.boe.es/buscar/act.php?id=BOE-A-1995-24292" },
      { label: "Gobierno de México: NOM-035", url: "https://www.gob.mx/stps/articulos/norma-oficial-mexicana-nom-035-stps-2018-factores-de-riesgo-psicosocial-en-el-trabajo-identificacion-analisis-y-prevencion" },
    ],
  },
  "absentismo-laboral": {
    slug: "absentismo-laboral",
    keyword: "absentismo laboral",
    title: "Absentismo laboral: análisis y plan de actuación | ANSIOFF",
    description:
      "Analiza el absentismo laboral con datos internos, causas organizativas y un plan de actuación. Descubre cómo complementar el bienestar del equipo.",
    eyebrow: "ABSENTISMO LABORAL",
    h1: "Absentismo laboral: cómo analizarlo y actuar con contexto",
    intro:
      "El absentismo laboral es un indicador amplio y no tiene una causa única. Para actuar con rigor conviene revisar los datos internos, diferenciar tipos de ausencia y analizar factores organizativos antes de decidir medidas.",
    highlights: [
      "Diferenciar ausencias justificadas y no justificadas",
      "Analizar evolución, equipos y periodos sin señalar personas",
      "Combinar datos con escucha y evaluación preventiva",
      "Diseñar medidas organizativas y revisar resultados",
    ],
    sections: [
      {
        title: "Cómo empezar un análisis de absentismo laboral",
        paragraphs: [
          "Define primero qué ausencias incluye el indicador, el periodo de análisis y la fuente de datos. Comparar áreas sin contexto puede llevar a conclusiones equivocadas, por lo que deben considerarse tamaño del equipo, estacionalidad, tipo de trabajo y cambios organizativos.",
          "El análisis debe respetar la privacidad y evitar atribuir causas de salud a una persona sin información y base adecuadas.",
        ],
      },
      {
        title: "Preguntas antes de elegir una medida",
        paragraphs: [
          "Conviene revisar si existen picos de carga, falta de autonomía, conflictos, horarios difíciles, problemas de conciliación o recursos insuficientes. La escucha del equipo y la evaluación preventiva aportan contexto que una cifra aislada no contiene.",
          "Las medidas pueden afectar a planificación, liderazgo, comunicación, flexibilidad, prevención o acceso a apoyo. Deben responder a las causas observadas y no limitarse a incentivar la asistencia.",
        ],
      },
      {
        title: "Dónde encaja ANSIOFF",
        paragraphs: [
          "ANSIOFF puede incorporarse como beneficio de bienestar y recurso cotidiano para empleados. Su panel ayuda a observar la adopción agregada del programa, pero no determina causas de absentismo ni sustituye el análisis de RRHH y prevención.",
          "En la demo se revisa cómo comunicar la herramienta y qué métricas de uso pueden resultar útiles dentro de un plan más amplio.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿ANSIOFF reduce por sí solo el absentismo laboral?",
        a: "No puede garantizarlo. El absentismo tiene causas diversas y requiere análisis, medidas organizativas y seguimiento adecuados.",
      },
      {
        q: "¿Qué aporta ANSIOFF al plan de actuación?",
        a: "Aporta recursos de bienestar para empleados y métricas agregadas de adopción del programa para RRHH.",
      },
    ],
    related: ["bienestar-laboral", "riesgos-psicosociales", "salud-mental-en-el-trabajo"],
  },
  "beneficios-para-empleados": {
    slug: "beneficios-para-empleados",
    keyword: "beneficios para empleados",
    title: "Beneficios para empleados: bienestar emocional | ANSIOFF",
    description:
      "Añade ANSIOFF a tus beneficios para empleados: recursos de bienestar emocional en el móvil y métricas agregadas de adopción para RRHH.",
    eyebrow: "BENEFICIOS PARA EMPLEADOS",
    h1: "ANSIOFF como beneficio de bienestar emocional para empleados",
    intro:
      "Los beneficios para empleados funcionan mejor cuando responden a una necesidad clara y son fáciles de utilizar. ANSIOFF ofrece recursos de bienestar emocional desde el móvil y una implantación orientada a la adopción.",
    highlights: [
      "Acceso móvil durante y fuera de la jornada",
      "Kit SOS, respiración, diario y sonidos",
      "Onboarding para presentar usos y límites",
      "Métricas agregadas para mejorar la adopción",
    ],
    sections: [
      {
        title: "Un beneficio accesible desde el móvil",
        paragraphs: [
          "El empleado puede abrir una respiración guiada, un sonido relajante o el diario emocional sin desplazamientos ni citas. El Kit SOS ofrece una pauta breve para momentos de ansiedad o sobrecarga.",
          "La disponibilidad no implica uso obligatorio. La comunicación debe presentar ANSIOFF como un recurso voluntario y explicar que no sustituye la atención profesional.",
        ],
      },
      {
        title: "Cómo comunicar el beneficio al equipo",
        paragraphs: [
          "Una presentación eficaz explica qué incluye, cuándo puede utilizarse y qué información ve RRHH. También conviene recordar periódicamente herramientas concretas en lugar de comunicar únicamente el nombre de la app.",
          "Los datos agregados de adopción permiten observar si la comunicación está funcionando y qué recursos generan más interés.",
        ],
      },
      {
        title: "Evaluar el encaje antes del lanzamiento",
        paragraphs: [
          "Durante la demo se revisan tamaño del equipo, objetivos, onboarding y métricas disponibles. Así la empresa puede valorar si ANSIOFF encaja como beneficio independiente o como parte de un plan de bienestar laboral.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué recibe cada empleado?",
        a: "Acceso a las herramientas incluidas en el plan de ANSIOFF Business desde su dispositivo compatible.",
      },
      {
        q: "¿RRHH puede leer el diario emocional?",
        a: "La propuesta de ANSIOFF Business se basa en métricas agregadas; el contenido de las notas personales no se muestra en el panel para RRHH.",
      },
    ],
    related: ["bienestar-laboral", "salud-mental-en-el-trabajo", "absentismo-laboral"],
  },
};

export const businessSeoSlugs = Object.keys(businessSeoPages);
