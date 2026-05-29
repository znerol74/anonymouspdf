import type { LandingCopy, Step } from './types';

const STEPS: Step[] = [
  { title: '1. Suba su PDF', body: 'Elija un archivo o arrástrelo a la página. Se abre localmente: no se envía nada a un servidor.' },
  { title: '2. Detección automática', body: 'La coincidencia de patrones y un modelo de IA en el dispositivo localizan el texto sensible por usted.' },
  { title: '3. Descargar o copiar', body: 'Obtenga un PDF con el texto realmente eliminado o copie el texto limpio.' },
];

export const es: Record<string, LandingCopy> = {
  'redact-pdf': {
    navLabel: 'Tachar PDF',
    seoTitle: 'Tachar PDF online — gratis, permanente y en tu navegador | AnonymousPDF',
    seoDescription:
      'Tacha un PDF gratis: oculta y elimina de forma permanente nombres, correos, números de cuenta y otros datos sensibles, automáticamente y 100 % en tu navegador. Sin subida, sin registro.',
    h1: 'Tachar PDF online — gratis y permanente',
    sub: 'Oculta información sensible y elimínala del archivo para siempre. Tu PDF se procesa en tu navegador y nunca se sube.',
    intro: [
      'Tachar un PDF es más que dibujar un rectángulo negro sobre un nombre. Si el texto de debajo sigue ahí, cualquiera puede copiarlo o buscarlo. AnonymousPDF elimina por completo el contenido subyacente, de modo que la información tachada no se puede recuperar.',
      'Sube un documento y la herramienta encuentra automáticamente los datos sensibles —direcciones de correo, números de teléfono, IBAN y números de tarjeta, números de identificación y de expediente, además de nombres y organizaciones— y los tacha. Todo se ejecuta localmente en tu dispositivo; ningún archivo sale de tu navegador.',
    ],
    steps: STEPS,
    faqHeading: 'Preguntas frecuentes',
    faq: [
      { q: '¿La tachadura es permanente?', a: 'Sí. La página se reconstruye, así que el texto tachado deja de formar parte del archivo: no se puede copiar, buscar ni recuperar, a diferencia de un recuadro negro sobre texto activo.' },
      { q: '¿Se suben mis archivos a algún sitio?', a: 'No. Todo el procesamiento ocurre en tu navegador, en tu propio dispositivo. Tu documento nunca se transmite.' },
      { q: '¿Es realmente gratis?', a: 'Sí: sin cuenta, sin correo, sin marca de agua y sin límite de páginas.' },
      { q: '¿Qué detecta automáticamente?', a: 'Correos, teléfonos, IBAN, tarjetas, direcciones IP, URLs, números de identificación y expediente habituales y —mediante un modelo de IA en el dispositivo— nombres, organizaciones y lugares.' },
    ],
  },

  'anonymize-pdf': {
    navLabel: 'Anonimizar PDF',
    seoTitle: 'Anonimizar PDF — eliminar nombres y datos personales gratis | AnonymousPDF',
    seoDescription:
      'Anonimiza archivos PDF automáticamente. Detecta y elimina nombres, correos, teléfonos, IBAN e identificadores en segundos: gratis y 100 % en tu navegador. No se sube nada.',
    h1: 'Anonimizar documentos PDF automáticamente',
    sub: 'Detecta y elimina automáticamente los datos personales de un PDF —nombres, datos de contacto, números de cuenta e identificación— sin subir nada.',
    intro: [
      'Anonimizar un documento significa eliminar los datos que identifican a las personas: nombres, direcciones, datos de contacto y números de referencia. AnonymousPDF analiza tu PDF y los retira automáticamente, para que puedas compartir o archivar el archivo sin exponer datos personales.',
      'La detección combina patrones precisos para datos estructurados (correos, teléfonos, IBAN, tarjetas e identificadores) con un modelo de IA en el dispositivo para nombres, organizaciones y lugares. Es un primer paso práctico para la minimización de datos según normas como el RGPD, y como todo se ejecuta en tu navegador, los datos personales nunca salen de tu dispositivo.',
    ],
    steps: STEPS,
    faqHeading: 'Preguntas frecuentes',
    faq: [
      { q: '¿Qué diferencia hay entre tachar y anonimizar?', a: 'Tachar oculta contenidos concretos; anonimizar se centra en eliminar los datos personales que identifican a las personas. Esta herramienta hace ambas cosas.' },
      { q: '¿Elimina los nombres?', a: 'Sí. Un modelo de IA en tu navegador detecta nombres de personas y organizaciones, además de datos basados en patrones como correos e IBAN.' },
      { q: '¿Se sube algo?', a: 'No: tu archivo se procesa localmente y nunca se envía a ningún sitio.' },
      { q: '¿Lo detecta todo?', a: 'La detección automática es muy buena, pero no perfecta. Revisa siempre el resultado antes de compartir, sobre todo con nombres o formatos poco habituales.' },
    ],
  },

  'redaction-tool': {
    navLabel: 'Herramienta de tachado',
    seoTitle: 'Herramienta de tachado de PDF online y gratuita — sin instalar | AnonymousPDF',
    seoDescription:
      'Una herramienta de tachado de PDF online y gratuita. Encuentra y elimina permanentemente datos sensibles: nada que instalar, nada que subir, sin registro.',
    h1: 'Una herramienta de tachado de PDF gratuita',
    sub: 'Software de tachado sin instalación. Encuentra y elimina permanentemente datos sensibles de tus PDF, directamente en tu navegador.',
    intro: [
      'El software de tachado tradicional depende del escritorio, es caro y a menudo deja texto recuperable. AnonymousPDF es una herramienta de tachado basada en el navegador: nada que instalar, nada que subir, y el texto tachado se elimina realmente del archivo.',
      'Detecta automáticamente los datos sensibles y los oculta, y luego te permite descargar un PDF limpio o copiar el texto tachado. Como se ejecuta por completo en tu dispositivo, es seguro incluso con documentos confidenciales.',
    ],
    steps: STEPS,
    faqHeading: 'Preguntas frecuentes',
    faq: [
      { q: '¿Tengo que instalar algo?', a: 'No. Funciona en cualquier navegador moderno, en ordenador o móvil.' },
      { q: '¿En qué se diferencia de dibujar recuadros negros?', a: 'Los recuadros dibujados suelen dejar el texto intacto y recuperable. Esta herramienta reconstruye la página, de modo que el contenido desaparece de verdad.' },
      { q: '¿Es seguro para archivos confidenciales?', a: 'Sí: los archivos se procesan localmente y nunca se suben.' },
      { q: '¿Tiene coste o límite?', a: 'Es gratis, sin registro y sin límite de páginas.' },
    ],
  },

  'data-masking': {
    navLabel: 'Enmascarar datos',
    seoTitle: 'Enmascaramiento de datos en PDF — ocultar PII online gratis | AnonymousPDF',
    seoDescription:
      'Enmascara datos sensibles en documentos PDF. Detecta y elimina automáticamente PII —correos, teléfonos, números de cuenta e identificación, nombres— gratis y por completo en tu navegador.',
    h1: 'Enmascaramiento de datos para documentos PDF',
    sub: 'Enmascara automáticamente la información de identificación personal (PII) de un PDF, sin enviar tus datos a un servicio en la nube.',
    intro: [
      'El enmascaramiento de datos elimina valores sensibles para poder compartir, revisar o archivar un documento sin exponer información personal real. AnonymousPDF enmascara la PII de los PDF detectándola y eliminándola del archivo.',
      'Reconoce identificadores estructurados —correos, teléfonos, IBAN, tarjetas, direcciones IP y números de identificación o referencia— y usa un modelo de IA en el dispositivo para nombres, organizaciones y lugares. Todo el enmascaramiento ocurre en tu navegador, así que los datos originales nunca se transmiten.',
    ],
    steps: STEPS,
    faqHeading: 'Preguntas frecuentes',
    faq: [
      { q: '¿Qué se considera PII aquí?', a: 'Datos de contacto, identificadores financieros (IBAN, tarjetas), identificadores de red (IP), números de identificación y referencia, y nombres, organizaciones y lugares.' },
      { q: '¿Se envían los datos originales a un servidor?', a: 'No. La detección y el enmascaramiento se ejecutan localmente en tu navegador.' },
      { q: '¿Puedo obtener el texto enmascarado, no solo un PDF?', a: 'Sí: usa «Copiar texto» para obtener el texto enmascarado con etiquetas como [NAME] y [EMAIL].' },
      { q: '¿Es gratis para uso empresarial?', a: 'Sí, su uso es gratuito. Para flujos sensibles, revisa siempre el resultado antes de compartir.' },
    ],
  },

  'pseudonymize-pdf': {
    navLabel: 'Seudonimizar PDF',
    seoTitle: 'Seudonimizar PDF — sustituir nombres por Persona_1, ORG_1 | AnonymousPDF',
    seoDescription:
      'Seudonimiza un PDF gratis: sustituye automáticamente nombres, organizaciones y otros datos personales por marcadores coherentes como Person_1 y ORG_1, 100 % en tu navegador. No se sube nada.',
    h1: 'Seudonimizar documentos PDF automáticamente',
    sub: 'Sustituye los datos personales por marcadores coherentes —el mismo nombre siempre se convierte en el mismo Person_1— sin subir tu archivo.',
    intro: [
      'La seudonimización mantiene un documento legible a la vez que rompe el vínculo con personas reales: en lugar de borrar un nombre, se sustituye por una etiqueta neutra y coherente como Person_1 u ORG_1. El mismo valor siempre se asigna al mismo marcador, así que el texto sigue teniendo sentido, pero ya no se puede saber a quién se refiere.',
      'AnonymousPDF detecta nombres, organizaciones, correos, teléfonos, IBAN, identificadores y fechas, y luego reconstruye el PDF con cada valor sustituido por su marcador. Los originales se eliminan del archivo, no se ocultan, y todo ocurre en tu navegador: los datos de origen nunca salen de tu dispositivo.',
    ],
    steps: STEPS,
    faqHeading: 'Preguntas frecuentes',
    faq: [
      { q: '¿En qué se diferencia la seudonimización del tachado?', a: 'El tachado oculta la información; la seudonimización la sustituye por un marcador coherente (Person_1, ORG_1, Date_1) para que el documento siga siendo legible mientras desaparecen las identidades reales.' },
      { q: '¿Se sustituyen los mismos nombres de forma coherente?', a: 'Sí. Cada aparición del mismo valor recibe el mismo número, así que se conservan las relaciones del texto mientras se elimina la identidad.' },
      { q: '¿Se pueden recuperar los valores originales?', a: 'No. El PDF se reconstruye a partir del contenido sustituido, así que los nombres y números originales ya no están en el archivo.' },
      { q: '¿Es gratis y privado?', a: 'Sí: gratis, sin registro y 100 % en tu navegador. No se sube nada.' },
    ],
  },

  'gdpr-pdf': {
    navLabel: 'PDF y RGPD',
    seoTitle: 'Anonimización de PDF para el RGPD — eliminar datos personales gratis | AnonymousPDF',
    seoDescription:
      'Anonimiza PDF para el RGPD: detecta y elimina datos personales —nombres, contacto, IBAN, identificadores— automáticamente y 100 % en tu navegador. Un paso práctico de minimización. Sin subida.',
    h1: 'Anonimización de PDF compatible con el RGPD',
    sub: 'Elimina datos personales de los PDF para favorecer la minimización de datos del RGPD, automáticamente y sin enviar nada a un servidor.',
    intro: [
      'El RGPD pide tratar solo los datos personales que realmente necesitas y mantenerlos protegidos. Antes de compartir, archivar o publicar un PDF, eliminar nombres, datos de contacto e identificadores es un paso de minimización sencillo y eficaz. AnonymousPDF encuentra esos datos automáticamente y los retira del archivo.',
      'Como la detección y la eliminación se ejecutan por completo en tu navegador, los datos personales nunca se transmiten a un tercero, algo clave cuando el propio documento es lo que intentas proteger. La detección automática es una buena primera pasada, no asesoramiento legal; revisa siempre el resultado según tus obligaciones.',
    ],
    steps: STEPS,
    faqHeading: 'Preguntas frecuentes',
    faq: [
      { q: '¿Esto hace que mi documento cumpla el RGPD?', a: 'Ayuda con la minimización de datos al eliminar datos personales, pero el cumplimiento depende de todo tu proceso. Tómalo como una herramienta práctica, no como asesoramiento legal, y revisa el resultado.' },
      { q: '¿Se envía algún dato a un servidor?', a: 'No. Todo se ejecuta localmente en tu navegador, así que los datos personales nunca salen de tu dispositivo.' },
      { q: '¿Qué datos personales detecta?', a: 'Nombres y organizaciones, correos, teléfonos, IBAN y tarjetas, direcciones IP, números de identificación y expediente, y fechas.' },
      { q: '¿Puedo mantener el documento legible?', a: 'Sí: los valores se sustituyen por marcadores neutros (p. ej. Person_1), así que el texto sigue leyéndose con naturalidad sin identificar a nadie.' },
    ],
  },

  'remove-names-from-pdf': {
    navLabel: 'Eliminar nombres',
    seoTitle: 'Eliminar nombres de un PDF — gratis y automático | AnonymousPDF',
    seoDescription:
      'Elimina nombres de un PDF automáticamente. Un modelo de IA en el dispositivo detecta nombres de personas y organizaciones y los retira: gratis, 100 % en tu navegador, sin subir nada.',
    h1: 'Eliminar nombres de un PDF',
    sub: 'Detecta y elimina automáticamente los nombres de personas y organizaciones de un PDF, sin subir el archivo.',
    intro: [
      'Los nombres suelen ser lo más sensible de un documento y lo más difícil de captar con una simple búsqueda y reemplazo. AnonymousPDF usa un modelo de IA que se ejecuta en tu navegador para reconocer nombres de personas y organizaciones —incluso los que no se te ocurriría buscar— y los elimina del archivo.',
      'Junto a los nombres también detecta correos, teléfonos, IBAN, identificadores y fechas. Cada nombre se sustituye por un marcador neutro como Person_1, para que el documento siga siendo legible sin identificar a nadie. Todo se ejecuta en tu dispositivo.',
    ],
    steps: STEPS,
    faqHeading: 'Preguntas frecuentes',
    faq: [
      { q: '¿Cómo se detectan los nombres?', a: 'Un modelo de IA multilingüe (NER) se ejecuta en tu navegador y marca nombres de personas y organizaciones, además de datos basados en patrones como correos e IBAN.' },
      { q: '¿Funciona con nombres en otros idiomas?', a: 'Sí: el modelo admite varios idiomas principales. La detección es muy buena, pero no perfecta, así que revisa el resultado.' },
      { q: '¿Los nombres desaparecen de verdad?', a: 'Sí. El PDF se reconstruye con cada nombre sustituido, así que el original ya no está en el archivo.' },
      { q: '¿Es gratis?', a: 'Sí, gratis y sin registro, procesado por completo en tu navegador.' },
    ],
  },

  'censor-pdf': {
    navLabel: 'Censurar PDF',
    seoTitle: 'Censurar PDF online — ocultar texto sensible gratis | AnonymousPDF',
    seoDescription:
      'Censura un PDF gratis: encuentra y elimina automáticamente el texto sensible —nombres, correos, números— y reconstruye el archivo para que no se pueda recuperar. 100 % en tu navegador, sin subida.',
    h1: 'Censurar un PDF online',
    sub: 'Encuentra y elimina automáticamente las partes sensibles de un PDF y descarga un archivo en el que el contenido censurado realmente desaparece.',
    intro: [
      'Censurar un PDF debería significar que el texto oculto sea de verdad ilegible, no solo cubierto por un recuadro bajo el que puedes copiar. AnonymousPDF elimina por completo el contenido sensible del archivo y reconstruye la página, así que la información censurada no se puede seleccionar, buscar ni recuperar.',
      'Detecta automáticamente qué censurar —nombres, organizaciones, correos, teléfonos, IBAN, identificadores y fechas— y sustituye cada elemento por un marcador neutro. Todo ocurre en tu navegador; el documento original nunca sale de tu dispositivo.',
    ],
    steps: STEPS,
    faqHeading: 'Preguntas frecuentes',
    faq: [
      { q: '¿Se puede recuperar el texto censurado?', a: 'No. La página se reconstruye, así que el texto original se elimina del archivo en lugar de ocultarse tras un recuadro.' },
      { q: '¿Qué se censura automáticamente?', a: 'Nombres y organizaciones, correos, teléfonos, IBAN y tarjetas, direcciones IP, números de identificación y expediente, y fechas.' },
      { q: '¿Tengo que subir mi archivo?', a: 'No: todo se procesa localmente en tu navegador.' },
      { q: '¿Es gratis?', a: 'Sí, gratis, sin cuenta y sin límite de páginas.' },
    ],
  },

  'black-out-pdf': {
    navLabel: 'Ennegrecer PDF',
    seoTitle: 'Ennegrecer texto en un PDF — gratis y permanente | AnonymousPDF',
    seoDescription:
      'Ennegrece texto en un PDF gratis. Detecta automáticamente la información sensible y elimínala de forma permanente del archivo: 100 % en tu navegador, sin subir nada.',
    h1: 'Ennegrecer texto en un PDF',
    sub: 'Elimina de forma permanente el texto sensible de un PDF —no solo cubrirlo— automáticamente y en tu navegador.',
    intro: [
      'Dibujar un rectángulo negro sobre el texto en la mayoría de los editores deja las palabras intactas debajo, donde aún se pueden copiar o buscar. AnonymousPDF ennegrece la información de forma segura: elimina el texto subyacente del archivo y reconstruye la página, así que desaparece de verdad.',
      'No tienes que marcar nada a mano: la herramienta detecta los datos sensibles automáticamente (nombres, correos, teléfonos, IBAN, identificadores, fechas y más) y los elimina. Se ejecuta por completo en tu dispositivo, así que los archivos confidenciales siguen siendo privados.',
    ],
    steps: STEPS,
    faqHeading: 'Preguntas frecuentes',
    faq: [
      { q: '¿El texto se queda bajo el recuadro negro?', a: 'No. A diferencia de un rectángulo dibujado, esto elimina el texto del archivo, así que nada se puede copiar ni recuperar.' },
      { q: '¿Puedo elegir qué ennegrecer?', a: 'La herramienta detecta los datos sensibles automáticamente; revisa siempre el resultado antes de compartir.' },
      { q: '¿Se sube algo?', a: 'No, se procesa localmente en tu navegador.' },
      { q: '¿Cuánto cuesta?', a: 'Nada: es gratis y sin registro.' },
    ],
  },

  'hide-information-in-pdf': {
    navLabel: 'Ocultar información',
    seoTitle: 'Ocultar información en un PDF — gratis y automático | AnonymousPDF',
    seoDescription:
      'Oculta información sensible en un PDF automáticamente y gratis. Detecta y elimina nombres, datos de contacto, números de cuenta e identificación: 100 % en tu navegador, sin subir nada.',
    h1: 'Ocultar información en un PDF',
    sub: 'Encuentra y elimina automáticamente la información que no quieres compartir de un PDF, sin subir el archivo.',
    intro: [
      'A veces necesitas compartir un documento pero mantener partes privadas: un nombre, una dirección, un número de cuenta. AnonymousPDF encuentra esa información automáticamente y la elimina del archivo, de modo que lo que queda es seguro de enviar.',
      'Reconoce datos de contacto, números financieros y de identificación, direcciones IP, fechas y —mediante un modelo de IA en el dispositivo— nombres, organizaciones y lugares. Los valores ocultos se sustituyen por marcadores neutros y, como todo se ejecuta en tu navegador, la información original nunca se transmite.',
    ],
    steps: STEPS,
    faqHeading: 'Preguntas frecuentes',
    faq: [
      { q: '¿La información oculta se elimina o solo se cubre?', a: 'Se elimina. El PDF se reconstruye sin el texto original, así que no se puede recuperar.' },
      { q: '¿Qué puede ocultar?', a: 'Nombres, organizaciones, correos, teléfonos, IBAN y tarjetas, direcciones IP, números de identificación y expediente, y fechas.' },
      { q: '¿Se sube mi archivo?', a: 'No: el procesamiento es totalmente local en tu navegador.' },
      { q: '¿Es realmente gratis?', a: 'Sí, gratis y sin registro.' },
    ],
  },

  'remove-personal-information-pdf': {
    navLabel: 'Eliminar datos personales',
    seoTitle: 'Eliminar datos personales de un PDF — gratis | AnonymousPDF',
    seoDescription:
      'Elimina datos personales de un PDF automáticamente: nombres, datos de contacto, IBAN, identificadores y más. Gratis, 100 % en tu navegador, sin subir nada.',
    h1: 'Eliminar datos personales de un PDF',
    sub: 'Extrae los datos personales de un PDF automáticamente —nombres, datos de contacto, números de cuenta e identificación— sin enviar nada a un servidor.',
    intro: [
      'Los datos personales se esconden en más sitios de los que crees: firmas, encabezados, referencias, bloques de contacto. AnonymousPDF analiza todo el documento y elimina los datos personales automáticamente, para que puedas reutilizarlo o compartirlo con seguridad.',
      'La detección combina coincidencia de patrones precisa (correos, teléfonos, IBAN, tarjetas e identificadores, direcciones IP, fechas) con un modelo de IA en el dispositivo para nombres, organizaciones y lugares. Cada valor se sustituye por un marcador neutro y el archivo se procesa por completo en tu dispositivo.',
    ],
    steps: STEPS,
    faqHeading: 'Preguntas frecuentes',
    faq: [
      { q: '¿Qué se considera datos personales aquí?', a: 'Nombres y organizaciones, datos de contacto, identificadores financieros (IBAN, tarjetas), direcciones IP, números de identificación y referencia, y fechas.' },
      { q: '¿Se envía la información original a algún sitio?', a: 'No. La detección y la eliminación se ejecutan localmente en tu navegador.' },
      { q: '¿Puedo obtener también el texto limpio?', a: 'Sí: usa «Copiar texto» o «Descargar texto» para obtener el texto anonimizado con marcadores.' },
      { q: '¿Lo detecta todo?', a: 'Es una buena pasada automática, pero no perfecta; revisa el resultado antes de compartir, sobre todo con formatos poco habituales.' },
    ],
  },

  'document-redact': {
    navLabel: 'Censurar documento',
    seoTitle: 'Censurar un documento online — gratis y seguro | AnonymousPDF',
    seoDescription:
      'Censura un documento online gratis. Detecta y elimina permanentemente datos sensibles de los PDF —contratos, cartas, extractos— 100 % en tu navegador, sin subida.',
    h1: 'Censurar un documento — online y seguro',
    sub: 'Detecta y elimina permanentemente las partes sensibles de tus documentos PDF, sin subir nada.',
    intro: [
      'Ya sea un contrato, una carta, una factura o una notificación oficial, a menudo hay que eliminar los datos sensibles antes de entregarlo. AnonymousPDF detecta esos datos automáticamente y los elimina del documento para siempre: no solo visualmente con un recuadro, sino del propio archivo.',
      'Reconoce correos, teléfonos, IBAN y tarjetas, direcciones IP, números de identificación y expediente, y —mediante un modelo de IA en el dispositivo— nombres, organizaciones y lugares. El procesamiento ocurre por completo en tu dispositivo, así que los documentos confidenciales nunca salen de tu navegador.',
    ],
    steps: STEPS,
    faqHeading: 'Preguntas frecuentes',
    faq: [
      { q: '¿Qué documentos puedo censurar?', a: 'Cualquier PDF. Si tu documento es un archivo de Word, guárdalo primero como PDF.' },
      { q: '¿La censura es segura?', a: 'Sí. El contenido censurado se elimina del archivo y no se puede recuperar.' },
      { q: '¿Se suben los documentos?', a: 'No: el procesamiento ocurre localmente en tu navegador.' },
      { q: '¿Tiene algún coste?', a: 'No, la herramienta es gratuita y no requiere registro.' },
    ],
  },
};
