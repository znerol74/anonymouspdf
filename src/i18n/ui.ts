export const languages = {
  en: 'English',
  de: 'Deutsch',
} as const;

export const defaultLang = 'en' as const;

export type Lang = keyof typeof languages;

export const ui = {
  en: {
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
  },
  de: {
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
  },
} as const;
