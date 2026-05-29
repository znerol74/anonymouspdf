import { type Lang, defaultLang } from './site';

export { defaultLang };
export type { Lang };

const en = {
  'site.name': 'AnonymousPDF',
  'site.tagline': 'Redact & anonymize PDFs in your browser',
  'nav.redact': 'Redact PDF',
  'nav.anonymize': 'Anonymize PDF',
  'cta.start': 'Redact a PDF',
  'hero.title': 'Redact & anonymize PDFs — right in your browser',
  'hero.subtitle':
    'Drop in a PDF and AnonymousPDF automatically finds and removes emails, phone numbers, account numbers, IDs and names. Nothing is uploaded — every file is processed on your own device.',
  'how.title': 'How it works',
  'how.step1.title': '1. Drop your PDF',
  'how.step1.body': 'Select or drag a PDF onto the page. It opens locally — it is never sent to a server.',
  'how.step2.title': '2. We detect the sensitive data',
  'how.step2.body': 'Patterns (emails, phones, IBANs, IDs) and an on-device AI model for names and organisations.',
  'how.step3.title': '3. Download the redacted file',
  'how.step3.body': 'Preview the result, then download a PDF with the text truly removed, or copy the clean text.',
  'trust.local.title': '100% in your browser',
  'trust.local.body': 'Files are processed on your device and never uploaded to any server.',
  'trust.free.title': 'Free, no sign-up',
  'trust.free.body': 'No account, no email, no watermark. Just open it and go.',
  'trust.true.title': 'Real redaction',
  'trust.true.body': 'The underlying text is removed, not just hidden behind a black box.',
  'tool.placeholder': 'The PDF redaction tool loads here.',
  'footer.rights': 'All rights reserved.',
  'footer.localnote': 'All processing happens locally in your browser. Files never leave your device.',
} as const;

const de: Record<UiKey, string> = {
  'site.name': 'AnonymousPDF',
  'site.tagline': 'PDFs schwärzen & anonymisieren – direkt im Browser',
  'nav.redact': 'PDF schwärzen',
  'nav.anonymize': 'PDF anonymisieren',
  'cta.start': 'PDF schwärzen',
  'hero.title': 'PDFs schwärzen & anonymisieren – direkt im Browser',
  'hero.subtitle':
    'Ziehen Sie ein PDF hinein und AnonymousPDF findet und entfernt automatisch E-Mail-Adressen, Telefonnummern, Kontonummern, Aktenzeichen und Namen. Nichts wird hochgeladen – jede Datei wird auf Ihrem eigenen Gerät verarbeitet.',
  'how.title': 'So funktioniert es',
  'how.step1.title': '1. PDF hineinziehen',
  'how.step1.body': 'Wählen Sie ein PDF aus oder ziehen Sie es auf die Seite. Es wird lokal geöffnet – nie an einen Server gesendet.',
  'how.step2.title': '2. Wir erkennen die sensiblen Daten',
  'how.step2.body': 'Muster (E-Mails, Telefon, IBAN, Aktenzeichen) und ein KI-Modell direkt im Browser für Namen und Organisationen.',
  'how.step3.title': '3. Geschwärzte Datei herunterladen',
  'how.step3.body': 'Ergebnis prüfen und ein PDF herunterladen, bei dem der Text wirklich entfernt ist – oder den bereinigten Text kopieren.',
  'trust.local.title': '100% im Browser',
  'trust.local.body': 'Dateien werden auf Ihrem Gerät verarbeitet und niemals auf einen Server hochgeladen.',
  'trust.free.title': 'Kostenlos, ohne Anmeldung',
  'trust.free.body': 'Kein Konto, keine E-Mail, kein Wasserzeichen. Einfach öffnen und loslegen.',
  'trust.true.title': 'Echte Schwärzung',
  'trust.true.body': 'Der darunterliegende Text wird entfernt – nicht nur hinter einem schwarzen Balken versteckt.',
  'tool.placeholder': 'Hier wird das PDF-Schwärzungstool geladen.',
  'footer.rights': 'Alle Rechte vorbehalten.',
  'footer.localnote': 'Die gesamte Verarbeitung erfolgt lokal in Ihrem Browser. Dateien verlassen niemals Ihr Gerät.',
};

const es: Record<UiKey, string> = {
  'site.name': 'AnonymousPDF',
  'site.tagline': 'Tacha y anonimiza PDF en tu navegador',
  'nav.redact': 'Tachar PDF',
  'nav.anonymize': 'Anonimizar PDF',
  'cta.start': 'Tachar un PDF',
  'hero.title': 'Tacha y anonimiza PDF — directamente en tu navegador',
  'hero.subtitle':
    'Suelta un PDF y AnonymousPDF encuentra y elimina automáticamente correos, teléfonos, números de cuenta, identificadores y nombres. No se sube nada: cada archivo se procesa en tu propio dispositivo.',
  'how.title': 'Cómo funciona',
  'how.step1.title': '1. Suelta tu PDF',
  'how.step1.body': 'Selecciona o arrastra un PDF a la página. Se abre localmente: nunca se envía a un servidor.',
  'how.step2.title': '2. Detectamos los datos sensibles',
  'how.step2.body': 'Patrones (correos, teléfonos, IBAN, identificadores) y un modelo de IA en el dispositivo para nombres y organizaciones.',
  'how.step3.title': '3. Descarga el archivo tachado',
  'how.step3.body': 'Previsualiza el resultado y descarga un PDF con el texto realmente eliminado, o copia el texto limpio.',
  'trust.local.title': '100% en tu navegador',
  'trust.local.body': 'Los archivos se procesan en tu dispositivo y nunca se suben a ningún servidor.',
  'trust.free.title': 'Gratis, sin registro',
  'trust.free.body': 'Sin cuenta, sin correo, sin marca de agua. Solo ábrelo y listo.',
  'trust.true.title': 'Tachado real',
  'trust.true.body': 'El texto subyacente se elimina, no solo se oculta tras un recuadro negro.',
  'tool.placeholder': 'Aquí se carga la herramienta de tachado de PDF.',
  'footer.rights': 'Todos los derechos reservados.',
  'footer.localnote': 'Todo el procesamiento ocurre localmente en tu navegador. Los archivos nunca salen de tu dispositivo.',
};

const fr: Record<UiKey, string> = {
  'site.name': 'AnonymousPDF',
  'site.tagline': 'Caviardez et anonymisez vos PDF dans votre navigateur',
  'nav.redact': 'Caviarder un PDF',
  'nav.anonymize': 'Anonymiser un PDF',
  'cta.start': 'Caviarder un PDF',
  'hero.title': 'Caviardez et anonymisez vos PDF — directement dans votre navigateur',
  'hero.subtitle':
    'Déposez un PDF et AnonymousPDF trouve et supprime automatiquement e-mails, téléphones, numéros de compte, identifiants et noms. Rien n’est envoyé : chaque fichier est traité sur votre propre appareil.',
  'how.title': 'Comment ça marche',
  'how.step1.title': '1. Déposez votre PDF',
  'how.step1.body': 'Sélectionnez ou glissez un PDF sur la page. Il s’ouvre localement — il n’est jamais envoyé à un serveur.',
  'how.step2.title': '2. Nous détectons les données sensibles',
  'how.step2.body': 'Des motifs (e-mails, téléphones, IBAN, identifiants) et un modèle d’IA sur l’appareil pour les noms et organisations.',
  'how.step3.title': '3. Téléchargez le fichier caviardé',
  'how.step3.body': 'Prévisualisez le résultat, puis téléchargez un PDF dont le texte est vraiment supprimé, ou copiez le texte propre.',
  'trust.local.title': '100 % dans votre navigateur',
  'trust.local.body': 'Les fichiers sont traités sur votre appareil et ne sont jamais envoyés à un serveur.',
  'trust.free.title': 'Gratuit, sans inscription',
  'trust.free.body': 'Pas de compte, pas d’e-mail, pas de filigrane. Ouvrez et c’est parti.',
  'trust.true.title': 'Vrai caviardage',
  'trust.true.body': 'Le texte sous-jacent est supprimé, pas seulement caché derrière un cadre noir.',
  'tool.placeholder': 'L’outil de caviardage de PDF se charge ici.',
  'footer.rights': 'Tous droits réservés.',
  'footer.localnote': 'Tout le traitement se fait localement dans votre navigateur. Les fichiers ne quittent jamais votre appareil.',
};

export type UiKey = keyof typeof en;

/** Per-locale UI strings. Partial: a missing locale falls back to `defaultLang`. */
export const ui: Partial<Record<Lang, Record<UiKey, string>>> = { en, de, es, fr };
