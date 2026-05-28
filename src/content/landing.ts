export interface Step {
  title: string;
  body: string;
}
export interface Faq {
  q: string;
  a: string;
}
export interface LandingCopy {
  seoTitle: string;
  seoDescription: string;
  h1: string;
  sub: string;
  intro: string[];
  steps: Step[];
  faqHeading: string;
  faq: Faq[];
}
export interface LandingEntry {
  en?: LandingCopy;
  de?: LandingCopy;
}

const EN_STEPS: Step[] = [
  { title: '1. Drop your PDF', body: 'Choose a file or drag it onto the page. It opens locally — nothing is sent to a server.' },
  { title: '2. Automatic detection', body: 'Pattern matching and an on-device AI model locate the sensitive text for you.' },
  { title: '3. Download or copy', body: 'Get a redacted PDF with the text truly removed, or copy the cleaned text.' },
];

const DE_STEPS: Step[] = [
  { title: '1. PDF auswählen', body: 'Datei wählen oder auf die Seite ziehen. Sie wird lokal geöffnet – nichts wird an einen Server gesendet.' },
  { title: '2. Automatische Erkennung', body: 'Muster und ein KI-Modell im Browser finden die sensiblen Stellen für Sie.' },
  { title: '3. Herunterladen oder kopieren', body: 'Geschwärztes PDF mit wirklich entferntem Text erhalten oder den bereinigten Text kopieren.' },
];

export const landing: Record<string, LandingEntry> = {
  'redact-pdf': {
    en: {
      seoTitle: 'Redact PDF Online — Free, Permanent & In Your Browser | AnonymousPDF',
      seoDescription:
        'Redact a PDF for free. Permanently black out and remove names, emails, account numbers and other sensitive text — automatically, 100% in your browser. No upload, no sign-up.',
      h1: 'Redact PDF online — free and permanent',
      sub: 'Black out sensitive information and remove it from the file for good. Your PDF is processed in your browser and never uploaded.',
      intro: [
        'Redacting a PDF means more than drawing a black rectangle over a name. If the text underneath is still there, anyone can copy it out or search for it. AnonymousPDF removes the underlying content entirely, so redacted information cannot be recovered.',
        'Upload a document and the tool automatically finds sensitive data — email addresses, phone numbers, IBANs and bank-card numbers, ID and case numbers, plus names and organisations — and blacks them out. Everything runs locally on your device; no file ever leaves your browser.',
      ],
      steps: EN_STEPS,
      faqHeading: 'Frequently asked questions',
      faq: [
        { q: 'Is the redaction permanent?', a: 'Yes. The page is rebuilt so the redacted text is no longer part of the file — it cannot be copied, searched or recovered, unlike a black box drawn over live text.' },
        { q: 'Are my files uploaded anywhere?', a: 'No. All processing happens in your browser on your own device. Your document is never transmitted to us or anyone else.' },
        { q: 'Is it really free?', a: 'Yes — no account, no email, no watermark and no page limits.' },
        { q: 'What does it detect automatically?', a: 'Emails, phone numbers, IBANs, card numbers, IP addresses, URLs, common ID and case numbers, and — via an on-device AI model — names, organisations and locations.' },
      ],
    },
  },

  'anonymize-pdf': {
    en: {
      seoTitle: 'Anonymize PDF — Remove Names & Personal Data Free | AnonymousPDF',
      seoDescription:
        'Anonymize PDF files automatically. Detect and remove names, emails, phone numbers, IBANs and IDs in seconds — free and 100% in your browser. Nothing is uploaded.',
      h1: 'Anonymize PDF documents automatically',
      sub: 'Automatically detect and remove personal data from a PDF — names, contact details, account and ID numbers — without uploading anything.',
      intro: [
        'Anonymising a document means removing the details that identify people: names, addresses, contact details and reference numbers. AnonymousPDF scans your PDF and takes them out automatically, so you can share or archive the file without exposing personal data.',
        'Detection combines precise pattern matching for structured data (emails, phone numbers, IBANs, card and ID numbers) with an on-device AI model for names, organisations and places. It is a practical first step for data minimisation under rules like the GDPR — and because everything runs in your browser, the personal data never leaves your device.',
      ],
      steps: EN_STEPS,
      faqHeading: 'Frequently asked questions',
      faq: [
        { q: "What's the difference between redacting and anonymising?", a: 'Redacting blacks out specific content; anonymising focuses on removing the personal data that identifies individuals. This tool does both — it finds personal data and removes it from the file.' },
        { q: 'Does it remove names?', a: 'Yes. An AI model running in your browser detects person and organisation names in addition to pattern-based data like emails and IBANs.' },
        { q: 'Is anything uploaded?', a: 'No — your file is processed locally and never sent anywhere.' },
        { q: 'Will it catch everything?', a: 'Automatic detection is very good but not perfect. Always review the result before sharing, especially for unusual names or formats.' },
      ],
    },
  },

  'redaction-tool': {
    en: {
      seoTitle: 'Free Online Redaction Tool & Software — No Install | AnonymousPDF',
      seoDescription:
        'A free online redaction tool for PDFs. Automatically find and permanently remove sensitive data — no software to install, nothing uploaded, no sign-up.',
      h1: 'A free online redaction tool',
      sub: 'Redaction software without the install. Find and permanently remove sensitive data from PDFs, right in your browser.',
      intro: [
        'Traditional redaction software is desktop-bound, expensive and often leaves recoverable text behind. AnonymousPDF is a browser-based redaction tool: nothing to install, nothing to upload, and the redacted text is genuinely removed from the file.',
        'It automatically detects sensitive data and blacks it out, then lets you download a clean PDF or copy the redacted text. Because it runs entirely on your device, it is safe to use even with confidential documents.',
      ],
      steps: EN_STEPS,
      faqHeading: 'Frequently asked questions',
      faq: [
        { q: 'Do I need to install anything?', a: 'No. It runs in any modern browser, on desktop or mobile.' },
        { q: 'How is this different from drawing black boxes?', a: 'Drawn boxes usually leave the text underneath intact and recoverable. This tool rebuilds the page so the content is actually gone.' },
        { q: 'Is it safe for confidential files?', a: 'Yes — files are processed locally and are never uploaded.' },
        { q: 'Is there a cost or limit?', a: 'It is free with no sign-up and no page limit.' },
      ],
    },
  },

  'data-masking': {
    en: {
      seoTitle: 'Data Masking for PDFs — Mask PII Online Free | AnonymousPDF',
      seoDescription:
        'Mask sensitive data in PDF documents. Automatically detect and remove PII — emails, phone numbers, account and ID numbers, names — free and entirely in your browser.',
      h1: 'Data masking for PDF documents',
      sub: 'Mask personally identifiable information (PII) in a PDF automatically — without sending your data to a cloud service.',
      intro: [
        'Data masking removes sensitive values so a document can be shared, reviewed or archived without exposing real personal information. AnonymousPDF masks PII in PDFs by detecting it and removing it from the file.',
        'It recognises structured identifiers — email addresses, phone numbers, IBANs, card numbers, IP addresses and ID or reference numbers — and uses an on-device AI model to catch names, organisations and locations. All masking happens in your browser, so the original data is never transmitted.',
      ],
      steps: EN_STEPS,
      faqHeading: 'Frequently asked questions',
      faq: [
        { q: 'What counts as PII here?', a: 'Contact details, financial identifiers (IBANs, cards), network identifiers (IPs), ID and reference numbers, and names, organisations and places.' },
        { q: 'Is the original data sent to a server?', a: 'No. Detection and masking run locally in your browser.' },
        { q: 'Can I get the masked text, not just a PDF?', a: "Yes — use 'Copy text' to get the masked text with labels like [NAME] and [EMAIL]." },
        { q: 'Is it free for business use?', a: 'Yes, it is free to use. For sensitive workflows, always review the output before sharing.' },
      ],
    },
  },

  'pdf-schwaerzen': {
    de: {
      seoTitle: 'PDF schwärzen – kostenlos & dauerhaft im Browser | AnonymousPDF',
      seoDescription:
        'PDF kostenlos schwärzen: Namen, E-Mails, Kontonummern und andere sensible Daten automatisch dauerhaft entfernen – zu 100 % im Browser. Kein Upload, keine Anmeldung.',
      h1: 'PDF schwärzen – kostenlos und dauerhaft',
      sub: 'Sensible Informationen unkenntlich machen und endgültig aus der Datei entfernen. Ihr PDF wird im Browser verarbeitet und niemals hochgeladen.',
      intro: [
        'Ein PDF zu schwärzen bedeutet mehr, als einen schwarzen Balken über einen Namen zu legen. Bleibt der Text darunter erhalten, lässt er sich weiterhin markieren, kopieren oder durchsuchen. AnonymousPDF entfernt den darunterliegenden Inhalt vollständig, sodass geschwärzte Informationen nicht wiederhergestellt werden können.',
        'Laden Sie ein Dokument und das Tool findet automatisch sensible Daten – E-Mail-Adressen, Telefonnummern, IBANs und Kartennummern, Aktenzeichen sowie Namen und Organisationen – und schwärzt sie. Alles läuft lokal auf Ihrem Gerät; keine Datei verlässt Ihren Browser.',
      ],
      steps: DE_STEPS,
      faqHeading: 'Häufige Fragen',
      faq: [
        { q: 'Ist die Schwärzung dauerhaft?', a: 'Ja. Die Seite wird neu aufgebaut, sodass der geschwärzte Text nicht mehr Teil der Datei ist – er lässt sich nicht kopieren, durchsuchen oder wiederherstellen, anders als ein bloßer Balken über lebendem Text.' },
        { q: 'Werden meine Dateien irgendwo hochgeladen?', a: 'Nein. Die gesamte Verarbeitung erfolgt im Browser auf Ihrem eigenen Gerät. Ihr Dokument wird niemals übertragen.' },
        { q: 'Ist es wirklich kostenlos?', a: 'Ja – ohne Konto, ohne E-Mail, ohne Wasserzeichen und ohne Seitenlimit.' },
        { q: 'Was wird automatisch erkannt?', a: 'E-Mails, Telefonnummern, IBANs, Kartennummern, IP-Adressen, URLs, gängige Aktenzeichen und Nummern und – über ein KI-Modell im Browser – Namen, Organisationen und Orte.' },
      ],
    },
  },

  'pdf-anonymisieren': {
    de: {
      seoTitle: 'PDF anonymisieren – Namen & persönliche Daten entfernen | AnonymousPDF',
      seoDescription:
        'PDF automatisch anonymisieren: Namen, E-Mails, Telefonnummern, IBANs und Aktenzeichen in Sekunden erkennen und entfernen – kostenlos, 100 % im Browser. Kein Upload.',
      h1: 'PDF anonymisieren – automatisch',
      sub: 'Persönliche Daten automatisch aus einem PDF erkennen und entfernen – Namen, Kontaktdaten, Konto- und Aktenzeichen – ohne etwas hochzuladen.',
      intro: [
        'Ein Dokument zu anonymisieren bedeutet, die Angaben zu entfernen, die Personen identifizieren: Namen, Adressen, Kontaktdaten und Aktenzeichen. AnonymousPDF durchsucht Ihr PDF und entfernt sie automatisch, damit Sie die Datei weitergeben oder archivieren können, ohne personenbezogene Daten preiszugeben.',
        'Die Erkennung kombiniert präzise Muster für strukturierte Daten (E-Mails, Telefonnummern, IBANs, Karten- und Aktenzeichen) mit einem KI-Modell für Namen, Organisationen und Orte. Ein praktischer erster Schritt zur Datenminimierung im Sinne der DSGVO – und da alles im Browser läuft, verlassen die personenbezogenen Daten Ihr Gerät nicht.',
      ],
      steps: DE_STEPS,
      faqHeading: 'Häufige Fragen',
      faq: [
        { q: 'Worin unterscheiden sich Schwärzen und Anonymisieren?', a: 'Beim Schwärzen werden bestimmte Inhalte unkenntlich gemacht; beim Anonymisieren geht es um das Entfernen der personenbezogenen Daten, die Einzelne identifizieren. Dieses Tool macht beides.' },
        { q: 'Werden auch Namen entfernt?', a: 'Ja. Ein KI-Modell im Browser erkennt Namen von Personen und Organisationen zusätzlich zu musterbasierten Daten wie E-Mails und IBANs.' },
        { q: 'Wird etwas hochgeladen?', a: 'Nein – Ihre Datei wird lokal verarbeitet und niemals übertragen.' },
        { q: 'Wird alles erkannt?', a: 'Die automatische Erkennung ist sehr gut, aber nicht perfekt. Prüfen Sie das Ergebnis vor der Weitergabe, besonders bei ungewöhnlichen Namen oder Formaten.' },
      ],
    },
  },

  'dokument-schwaerzen': {
    de: {
      seoTitle: 'Dokument schwärzen – online, kostenlos & sicher | AnonymousPDF',
      seoDescription:
        'Dokumente online schwärzen: sensible Daten in PDFs automatisch erkennen und dauerhaft entfernen – kostenlos, ohne Upload, direkt im Browser.',
      h1: 'Dokument schwärzen – online und sicher',
      sub: 'Sensible Stellen in Ihren PDF-Dokumenten automatisch erkennen und dauerhaft entfernen – ohne etwas hochzuladen.',
      intro: [
        'Ob Vertrag, Schriftsatz, Rechnung oder Bescheid: Vor der Weitergabe müssen sensible Stellen oft geschwärzt werden. AnonymousPDF erkennt diese Daten automatisch und entfernt sie dauerhaft aus dem Dokument – nicht nur optisch mit einem Balken, sondern aus der Datei selbst.',
        'Erkannt werden E-Mail-Adressen, Telefonnummern, IBANs und Kartennummern, IP-Adressen, Aktenzeichen sowie – über ein KI-Modell im Browser – Namen, Organisationen und Orte. Die Verarbeitung erfolgt vollständig auf Ihrem Gerät, sodass vertrauliche Dokumente Ihren Browser nie verlassen.',
      ],
      steps: DE_STEPS,
      faqHeading: 'Häufige Fragen',
      faq: [
        { q: 'Welche Dokumente kann ich schwärzen?', a: 'Alle PDF-Dokumente. Liegt Ihr Dokument als Word-Datei vor, speichern Sie es zunächst als PDF.' },
        { q: 'Ist die Schwärzung wirklich sicher?', a: 'Ja. Der geschwärzte Inhalt wird aus der Datei entfernt und kann nicht wiederhergestellt werden.' },
        { q: 'Werden die Dokumente hochgeladen?', a: 'Nein – die Verarbeitung erfolgt lokal im Browser.' },
        { q: 'Kostet das etwas?', a: 'Nein, das Tool ist kostenlos und ohne Anmeldung nutzbar.' },
      ],
    },
  },
};

/** Build FAQPage structured data from a page's FAQ list. */
export function faqLd(faq: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faq.map((f) => ({
      '@type': 'Question',
      name: f.q,
      acceptedAnswer: { '@type': 'Answer', text: f.a },
    })),
  };
}
