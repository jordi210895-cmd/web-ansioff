export type SeoSection = {
  title: string;
  paragraphs: string[];
};

export type SeoFaq = {
  q: string;
  a: string;
};

export type PersonalSeoPage = {
  slug: string;
  keyword: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  image: string;
  imageAlt: string;
  steps: string[];
  sections: SeoSection[];
  faqs: SeoFaq[];
  related: string[];
};

export const personalSeoPages: Record<string, PersonalSeoPage> = {
  "app-para-la-ansiedad": {
    slug: "app-para-la-ansiedad",
    keyword: "app para la ansiedad",
    title: "App para la ansiedad en iPhone | ANSIOFF",
    description:
      "Descubre una app para la ansiedad con Kit SOS, respiración guiada, diario emocional y sonidos relajantes. Descarga ANSIOFF para iPhone.",
    eyebrow: "APP PARA LA ANSIEDAD",
    h1: "Una app para la ansiedad con herramientas prácticas en tu iPhone",
    intro:
      "ANSIOFF reúne respiración para la ansiedad, un Kit SOS, diario emocional y sonidos relajantes para que puedas crear una rutina de calma y tener apoyo práctico siempre a mano.",
    image: "/app-screens/main.png",
    imageAlt: "Pantalla principal de ANSIOFF, app para la ansiedad en iPhone",
    steps: [
      "Abre el Kit SOS cuando necesites una guía breve y ordenada.",
      "Sigue un ejercicio de respiración visual y temporizado.",
      "Registra emociones y pensamientos en el diario emocional.",
      "Acompaña tus pausas con sonidos relajantes.",
    ],
    sections: [
      {
        title: "Herramientas de calma en un solo lugar",
        paragraphs: [
          "Buscar una app para la ansiedad suele responder a una necesidad muy concreta: disponer de una pauta sencilla cuando cuesta concentrarse. ANSIOFF organiza sus herramientas para que puedas elegir entre respiración guiada, anclaje sensorial, escritura y audio según el momento.",
          "La aplicación está disponible para iPhone. Cada recurso puede utilizarse por separado o integrarse en una rutina personal de bienestar.",
        ],
      },
      {
        title: "Respiración y diario emocional para observar patrones",
        paragraphs: [
          "Los ejercicios de respiración para la ansiedad muestran el ritmo de inhalación, pausa y exhalación. El diario emocional permite anotar qué ha ocurrido, cómo te sientes y qué temas aparecen con frecuencia.",
          "El análisis del diario organiza tus notas y propone preguntas de reflexión. No realiza diagnósticos ni sustituye la valoración de un profesional.",
        ],
      },
      {
        title: "Cuándo pedir ayuda profesional",
        paragraphs: [
          "Una app de salud mental puede servir como apoyo cotidiano, pero no reemplaza un diagnóstico ni un tratamiento. Si la ansiedad es intensa, persiste, limita tu vida diaria o existe riesgo para ti o para otra persona, busca ayuda profesional o contacta con los servicios de emergencia de tu zona.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué incluye ANSIOFF como app para la ansiedad?",
        a: "Incluye Kit SOS, respiración guiada, diario emocional, sonidos relajantes y programas de autocuidado desde el iPhone.",
      },
      {
        q: "¿Una app de salud mental sustituye a un psicólogo?",
        a: "No. ANSIOFF es una herramienta de bienestar y apoyo, no un servicio de diagnóstico o tratamiento.",
      },
    ],
    related: ["respiracion-4-7-8", "diario-emocional", "sonidos-relajantes"],
  },
  "respiracion-4-7-8": {
    slug: "respiracion-4-7-8",
    keyword: "respiración 4 7 8",
    title: "Respiración 4-7-8 guiada paso a paso | ANSIOFF",
    description:
      "Prueba la respiración 4-7-8 guiada: inhala 4 segundos, mantén 7 y exhala 8. Sigue el ritmo visual y practícala en ANSIOFF.",
    eyebrow: "RESPIRACIÓN 4-7-8",
    h1: "Prueba la respiración 4-7-8 paso a paso",
    intro:
      "La respiración 4-7-8 utiliza un ritmo sencillo: inhalar durante 4 segundos, mantener el aire durante 7 y exhalar durante 8. ANSIOFF te ayuda a seguir cada fase con una guía visual.",
    image: "/app-screens/breathing.png",
    imageAlt: "Ejercicio visual de respiración 4-7-8 en ANSIOFF",
    steps: [
      "Adopta una postura cómoda y suelta los hombros.",
      "Inhala suavemente por la nariz durante 4 segundos.",
      "Mantén el aire durante 7 segundos sin forzarte.",
      "Exhala despacio durante 8 segundos y vuelve a tu respiración normal.",
    ],
    sections: [
      {
        title: "Cómo hacer la respiración 4-7-8",
        paragraphs: [
          "Empieza en un lugar tranquilo y sigue el temporizador. No necesitas llenar los pulmones al máximo: el objetivo es mantener un ritmo cómodo y prestar atención a la exhalación lenta.",
          "Si siete u ocho segundos resultan incómodos, detén el ejercicio y respira con normalidad. La práctica no debe provocar mareo, dolor ni sensación de ahogo.",
        ],
      },
      {
        title: "Respiración para momentos de estrés",
        paragraphs: [
          "Puedes utilizar el ejercicio como una pausa breve antes de dormir, durante un descanso o cuando notes que el ritmo se acelera. La guía visual evita tener que contar mentalmente cada fase.",
          "La respiración 4-7-8 es una herramienta de bienestar. No sustituye la atención sanitaria ni debe utilizarse como respuesta única ante una emergencia.",
        ],
      },
      {
        title: "Lleva el temporizador en tu iPhone",
        paragraphs: [
          "ANSIOFF incluye el ritmo 4-7-8 junto al Kit SOS, el diario emocional y los sonidos relajantes. Así puedes pasar de la respiración a otra herramienta sin cambiar de aplicación.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Qué significa 4-7-8 en la respiración?",
        a: "Son los segundos de cada fase: 4 para inhalar, 7 para mantener el aire y 8 para exhalar.",
      },
      {
        q: "¿Qué hago si me mareo durante el ejercicio?",
        a: "Detén el ejercicio, vuelve a respirar con normalidad y no fuerces los tiempos. Si el malestar continúa, consulta con un profesional sanitario.",
      },
    ],
    related: ["respiracion-para-la-ansiedad", "kit-sos-ansiedad", "app-para-la-ansiedad"],
  },
  "respiracion-para-la-ansiedad": {
    slug: "respiracion-para-la-ansiedad",
    keyword: "respiración para la ansiedad",
    title: "Ejercicios de respiración para la ansiedad | ANSIOFF",
    description:
      "Sigue ejercicios de respiración para la ansiedad con una guía visual. Descubre el ritmo 4-7-8 y otras pausas de respiración en ANSIOFF.",
    eyebrow: "RESPIRACIÓN PARA LA ANSIEDAD",
    h1: "Ejercicios de respiración para la ansiedad con guía visual",
    intro:
      "Los ejercicios de respiración para la ansiedad pueden ayudarte a centrar la atención en un ritmo concreto. ANSIOFF muestra cada fase en pantalla para que puedas practicar sin contar por tu cuenta.",
    image: "/app-screens/breathing.png",
    imageAlt: "Ejercicios de respiración para la ansiedad guiados en iPhone",
    steps: [
      "Busca una postura estable y apoya bien los pies.",
      "Observa primero tu respiración sin intentar cambiarla.",
      "Sigue el ritmo visual de inhalación y exhalación.",
      "Termina con dos respiraciones normales antes de continuar.",
    ],
    sections: [
      {
        title: "Un ejercicio breve cuando la ansiedad sube",
        paragraphs: [
          "Cuando cuesta ordenar los pensamientos, una pauta visual puede reducir el esfuerzo de decidir qué hacer primero. Abre la respiración guiada, sigue el círculo y vuelve a tu ritmo normal cuando lo necesites.",
          "No existe un único ritmo adecuado para todas las personas. Practica sin forzar la profundidad ni la duración de la respiración.",
        ],
      },
      {
        title: "Respiración 4-7-8 y anclaje sensorial",
        paragraphs: [
          "ANSIOFF incluye la respiración 4-7-8 y un Kit SOS con pautas de anclaje sensorial. Puedes usar primero la respiración y después dirigir la atención a lo que ves, escuchas o notas a tu alrededor.",
          "Estas herramientas buscan acompañar una pausa de calma; no realizan una evaluación clínica.",
        ],
      },
      {
        title: "Crear una rutina de respiración",
        paragraphs: [
          "Practicar en un momento tranquilo permite conocer la guía antes de necesitarla. Puedes guardar unos minutos al inicio o al final del día y registrar en el diario emocional cómo te has sentido.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuánto debe durar un ejercicio de respiración para la ansiedad?",
        a: "Empieza con una práctica breve y cómoda. Detente si aparece mareo o malestar y vuelve a respirar con normalidad.",
      },
      {
        q: "¿Puedo combinar respiración y diario emocional?",
        a: "Sí. Después de la pausa puedes anotar qué ocurrió, cómo te sentías y qué te ayudó a centrar la atención.",
      },
    ],
    related: ["respiracion-4-7-8", "kit-sos-ansiedad", "diario-emocional"],
  },
  "diario-emocional": {
    slug: "diario-emocional",
    keyword: "diario emocional",
    title: "Diario emocional en iPhone: registra cómo te sientes",
    description:
      "Usa un diario emocional para registrar emociones, situaciones y pensamientos. Observa patrones y añade preguntas de reflexión con ANSIOFF.",
    eyebrow: "DIARIO EMOCIONAL",
    h1: "Un diario emocional para registrar cómo te sientes",
    intro:
      "El diario emocional de ANSIOFF te permite anotar situaciones, emociones y pensamientos desde el iPhone. Después puedes revisar los temas que se repiten y añadir preguntas de reflexión.",
    image: "/app-screens/diary_ai.png",
    imageAlt: "Diario emocional con preguntas de reflexión en ANSIOFF",
    steps: [
      "Describe brevemente qué ha ocurrido.",
      "Pon nombre a la emoción y anota su intensidad percibida.",
      "Escribe los pensamientos que aparecieron en ese momento.",
      "Revisa más adelante los temas y situaciones que se repiten.",
    ],
    sections: [
      {
        title: "Qué escribir en un diario de emociones",
        paragraphs: [
          "No necesitas redactar un texto largo. Una entrada puede incluir el contexto, la emoción principal, una sensación corporal y el pensamiento que más ocupaba tu atención.",
          "Registrar también qué hiciste después permite comparar situaciones y observar qué recursos te resultaron más fáciles de utilizar.",
        ],
      },
      {
        title: "Identificar patrones sin convertirlos en diagnósticos",
        paragraphs: [
          "El análisis organiza lo que escribes y puede sugerir preguntas para profundizar. Su función es ayudarte a revisar tus propias notas, no etiquetar emociones ni emitir un diagnóstico.",
          "Si las anotaciones reflejan malestar persistente o interfieren con tu vida diaria, compartirlas con un profesional puede facilitar la conversación.",
        ],
      },
      {
        title: "Combinar diario emocional y respiración",
        paragraphs: [
          "Puedes escribir antes de una pausa de respiración y volver al diario después. Así registras el contexto y observas si cambia tu percepción del momento, sin exigir un resultado concreto.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Con qué frecuencia debo escribir en un diario emocional?",
        a: "No hay una frecuencia obligatoria. Puedes escribir cuando quieras recordar una situación o reservar un momento breve al final del día.",
      },
      {
        q: "¿El diario emocional de ANSIOFF realiza diagnósticos?",
        a: "No. Organiza notas y ofrece preguntas de reflexión, pero no diagnostica ni sustituye a un profesional.",
      },
    ],
    related: ["app-para-la-ansiedad", "respiracion-para-la-ansiedad", "kit-sos-ansiedad"],
  },
  "sonidos-relajantes": {
    slug: "sonidos-relajantes",
    keyword: "sonidos relajantes",
    title: "Sonidos relajantes para ansiedad y concentración | ANSIOFF",
    description:
      "Escucha sonidos relajantes y música para la ansiedad, las pausas, el descanso o la concentración desde la app ANSIOFF para iPhone.",
    eyebrow: "SONIDOS RELAJANTES",
    h1: "Sonidos relajantes para crear una pausa de calma",
    intro:
      "Los sonidos relajantes de ANSIOFF acompañan momentos de pausa, respiración, descanso o concentración. Elige un paisaje sonoro desde el iPhone y ajusta la escucha a tu rutina.",
    image: "/app-screens/sounds.png",
    imageAlt: "Biblioteca de sonidos relajantes en la app ANSIOFF",
    steps: [
      "Elige un paisaje sonoro adecuado para tu momento.",
      "Ajusta el volumen a un nivel cómodo y seguro.",
      "Combina el audio con una pausa o respiración guiada.",
      "Detén la reproducción cuando quieras volver a tu actividad.",
    ],
    sections: [
      {
        title: "Sonidos para relajarse, descansar o concentrarse",
        paragraphs: [
          "La biblioteca reúne paisajes sonoros pensados para acompañar diferentes contextos: una pausa entre tareas, una rutina nocturna, un ejercicio de respiración o un periodo de concentración.",
          "Los sonidos no exigen seguir instrucciones. Puedes utilizarlos solos o como fondo mientras practicas otra herramienta de bienestar.",
        ],
      },
      {
        title: "Música para la ansiedad como apoyo cotidiano",
        paragraphs: [
          "Algunas personas buscan música para la ansiedad cuando necesitan reducir estímulos externos y crear un ambiente más predecible. ANSIOFF permite acceder a los audios desde la misma app que contiene el Kit SOS y el diario emocional.",
          "La experiencia es personal: elige sonidos que te resulten agradables y evita utilizarlos en situaciones que requieran atención completa, como conducir.",
        ],
      },
      {
        title: "Una rutina sencilla de audio y respiración",
        paragraphs: [
          "Puedes comenzar con un sonido relajante, realizar unas respiraciones cómodas y cerrar la pausa con una nota breve en el diario. La app agrupa las tres herramientas para reducir pasos.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿Cuándo puedo escuchar sonidos relajantes?",
        a: "Durante una pausa, al preparar el descanso, al concentrarte o mientras sigues un ejercicio de respiración, siempre que el entorno sea seguro.",
      },
      {
        q: "¿Los sonidos relajantes sustituyen un tratamiento?",
        a: "No. Son un recurso de bienestar y no sustituyen la evaluación o el tratamiento de un profesional.",
      },
    ],
    related: ["respiracion-para-la-ansiedad", "diario-emocional", "app-para-la-ansiedad"],
  },
  "kit-sos-ansiedad": {
    slug: "kit-sos-ansiedad",
    keyword: "calmar ansiedad",
    title: "Kit SOS para calmar la ansiedad paso a paso | ANSIOFF",
    description:
      "Accede a una guía breve con respiración y anclaje sensorial cuando la ansiedad sube. Descubre el Kit SOS de ANSIOFF para iPhone.",
    eyebrow: "KIT SOS PARA LA ANSIEDAD",
    h1: "Un Kit SOS para calmar la ansiedad paso a paso",
    intro:
      "Cuando la ansiedad sube puede resultar difícil decidir por dónde empezar. El Kit SOS de ANSIOFF ofrece una secuencia breve de respiración, anclaje sensorial y orientación para centrar la atención.",
    image: "/app-screens/sos.png",
    imageAlt: "Kit SOS de ANSIOFF con guía para momentos de ansiedad",
    steps: [
      "Abre el Kit SOS y busca una posición segura y estable.",
      "Sigue el ritmo de respiración sin forzar el aire.",
      "Dirige la atención a sensaciones y elementos de tu entorno.",
      "Elige después si quieres escribir o pedir apoyo a otra persona.",
    ],
    sections: [
      {
        title: "Qué hacer cuando quieres calmar la ansiedad",
        paragraphs: [
          "Una secuencia visible reduce el número de decisiones necesarias. El Kit SOS presenta una acción cada vez para que puedas avanzar a tu ritmo y detenerte cuando lo necesites.",
          "No promete eliminar la ansiedad de inmediato. Su objetivo es ofrecer una pauta práctica que puedas tener preparada en el iPhone.",
        ],
      },
      {
        title: "Respiración y anclaje sensorial",
        paragraphs: [
          "La respiración guiada centra la atención en un ritmo. El anclaje sensorial invita a observar elementos concretos del entorno, como colores, sonidos o el contacto de los pies con el suelo.",
          "Puedes repetir únicamente la parte que te resulte cómoda o pasar al diario emocional para anotar qué estaba ocurriendo.",
        ],
      },
      {
        title: "Cuándo buscar ayuda inmediata",
        paragraphs: [
          "El Kit SOS no es un servicio de emergencias. Si existe riesgo de hacerte daño, de dañar a otra persona o no puedes mantenerte a salvo, contacta inmediatamente con los servicios de emergencia de tu zona o con una persona de confianza.",
        ],
      },
    ],
    faqs: [
      {
        q: "¿El Kit SOS calma la ansiedad rápido?",
        a: "Ofrece una pauta breve para centrar la atención, pero cada persona y cada momento son diferentes. No garantiza un resultado inmediato.",
      },
      {
        q: "¿El Kit SOS sustituye una atención de emergencia?",
        a: "No. Si no puedes mantenerte a salvo, contacta con los servicios de emergencia o con una persona de confianza.",
      },
    ],
    related: ["respiracion-para-la-ansiedad", "respiracion-4-7-8", "diario-emocional"],
  },
};

export const personalSeoSlugs = Object.keys(personalSeoPages);
