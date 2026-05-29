import type { LandingCopy, Step } from './types';

const STEPS: Step[] = [
  { title: '1. PDF auswählen', body: 'Datei wählen oder auf die Seite ziehen. Sie wird lokal geöffnet – nichts wird an einen Server gesendet.' },
  { title: '2. Automatische Erkennung', body: 'Muster und ein KI-Modell im Browser finden die sensiblen Stellen für Sie.' },
  { title: '3. Herunterladen oder kopieren', body: 'Geschwärztes PDF mit wirklich entferntem Text erhalten oder den bereinigten Text kopieren.' },
];

export const de: Record<string, LandingCopy> = {
  'redact-pdf': {
    navLabel: 'PDF schwärzen',
    seoTitle: 'PDF schwärzen – kostenlos & dauerhaft im Browser | AnonymousPDF',
    seoDescription:
      'PDF kostenlos schwärzen: Namen, E-Mails, Kontonummern und andere sensible Daten automatisch dauerhaft entfernen – zu 100 % im Browser. Kein Upload, keine Anmeldung.',
    h1: 'PDF schwärzen – kostenlos und dauerhaft',
    sub: 'Sensible Informationen unkenntlich machen und endgültig aus der Datei entfernen. Ihr PDF wird im Browser verarbeitet und niemals hochgeladen.',
    intro: [
      'Ein PDF zu schwärzen bedeutet mehr, als einen schwarzen Balken über einen Namen zu legen. Bleibt der Text darunter erhalten, lässt er sich weiterhin markieren, kopieren oder durchsuchen. AnonymousPDF entfernt den darunterliegenden Inhalt vollständig, sodass geschwärzte Informationen nicht wiederhergestellt werden können.',
      'Laden Sie ein Dokument und das Tool findet automatisch sensible Daten – E-Mail-Adressen, Telefonnummern, IBANs und Kartennummern, Aktenzeichen sowie Namen und Organisationen – und schwärzt sie. Alles läuft lokal auf Ihrem Gerät; keine Datei verlässt Ihren Browser.',
    ],
    steps: STEPS,
    faqHeading: 'Häufige Fragen',
    faq: [
      { q: 'Ist die Schwärzung dauerhaft?', a: 'Ja. Die Seite wird neu aufgebaut, sodass der geschwärzte Text nicht mehr Teil der Datei ist – er lässt sich nicht kopieren, durchsuchen oder wiederherstellen, anders als ein bloßer Balken über lebendem Text.' },
      { q: 'Werden meine Dateien irgendwo hochgeladen?', a: 'Nein. Die gesamte Verarbeitung erfolgt im Browser auf Ihrem eigenen Gerät. Ihr Dokument wird niemals übertragen.' },
      { q: 'Ist es wirklich kostenlos?', a: 'Ja – ohne Konto, ohne E-Mail, ohne Wasserzeichen und ohne Seitenlimit.' },
      { q: 'Was wird automatisch erkannt?', a: 'E-Mails, Telefonnummern, IBANs, Kartennummern, IP-Adressen, URLs, gängige Aktenzeichen und Nummern und – über ein KI-Modell im Browser – Namen, Organisationen und Orte.' },
    ],
  },

  'anonymize-pdf': {
    navLabel: 'PDF anonymisieren',
    seoTitle: 'PDF anonymisieren – Namen & persönliche Daten entfernen | AnonymousPDF',
    seoDescription:
      'PDF automatisch anonymisieren: Namen, E-Mails, Telefonnummern, IBANs und Aktenzeichen in Sekunden erkennen und entfernen – kostenlos, 100 % im Browser. Kein Upload.',
    h1: 'PDF anonymisieren – automatisch',
    sub: 'Persönliche Daten automatisch aus einem PDF erkennen und entfernen – Namen, Kontaktdaten, Konto- und Aktenzeichen – ohne etwas hochzuladen.',
    intro: [
      'Ein Dokument zu anonymisieren bedeutet, die Angaben zu entfernen, die Personen identifizieren: Namen, Adressen, Kontaktdaten und Aktenzeichen. AnonymousPDF durchsucht Ihr PDF und entfernt sie automatisch, damit Sie die Datei weitergeben oder archivieren können, ohne personenbezogene Daten preiszugeben.',
      'Die Erkennung kombiniert präzise Muster für strukturierte Daten (E-Mails, Telefonnummern, IBANs, Karten- und Aktenzeichen) mit einem KI-Modell für Namen, Organisationen und Orte. Ein praktischer erster Schritt zur Datenminimierung im Sinne der DSGVO – und da alles im Browser läuft, verlassen die personenbezogenen Daten Ihr Gerät nicht.',
    ],
    steps: STEPS,
    faqHeading: 'Häufige Fragen',
    faq: [
      { q: 'Worin unterscheiden sich Schwärzen und Anonymisieren?', a: 'Beim Schwärzen werden bestimmte Inhalte unkenntlich gemacht; beim Anonymisieren geht es um das Entfernen der personenbezogenen Daten, die Einzelne identifizieren. Dieses Tool macht beides.' },
      { q: 'Werden auch Namen entfernt?', a: 'Ja. Ein KI-Modell im Browser erkennt Namen von Personen und Organisationen zusätzlich zu musterbasierten Daten wie E-Mails und IBANs.' },
      { q: 'Wird etwas hochgeladen?', a: 'Nein – Ihre Datei wird lokal verarbeitet und niemals übertragen.' },
      { q: 'Wird alles erkannt?', a: 'Die automatische Erkennung ist sehr gut, aber nicht perfekt. Prüfen Sie das Ergebnis vor der Weitergabe, besonders bei ungewöhnlichen Namen oder Formaten.' },
    ],
  },

  'document-redact': {
    navLabel: 'Dokument schwärzen',
    seoTitle: 'Dokument schwärzen – online, kostenlos & sicher | AnonymousPDF',
    seoDescription:
      'Dokumente online schwärzen: sensible Daten in PDFs automatisch erkennen und dauerhaft entfernen – kostenlos, ohne Upload, direkt im Browser.',
    h1: 'Dokument schwärzen – online und sicher',
    sub: 'Sensible Stellen in Ihren PDF-Dokumenten automatisch erkennen und dauerhaft entfernen – ohne etwas hochzuladen.',
    intro: [
      'Ob Vertrag, Schriftsatz, Rechnung oder Bescheid: Vor der Weitergabe müssen sensible Stellen oft geschwärzt werden. AnonymousPDF erkennt diese Daten automatisch und entfernt sie dauerhaft aus dem Dokument – nicht nur optisch mit einem Balken, sondern aus der Datei selbst.',
      'Erkannt werden E-Mail-Adressen, Telefonnummern, IBANs und Kartennummern, IP-Adressen, Aktenzeichen sowie – über ein KI-Modell im Browser – Namen, Organisationen und Orte. Die Verarbeitung erfolgt vollständig auf Ihrem Gerät, sodass vertrauliche Dokumente Ihren Browser nie verlassen.',
    ],
    steps: STEPS,
    faqHeading: 'Häufige Fragen',
    faq: [
      { q: 'Welche Dokumente kann ich schwärzen?', a: 'Alle PDF-Dokumente. Liegt Ihr Dokument als Word-Datei vor, speichern Sie es zunächst als PDF.' },
      { q: 'Ist die Schwärzung wirklich sicher?', a: 'Ja. Der geschwärzte Inhalt wird aus der Datei entfernt und kann nicht wiederhergestellt werden.' },
      { q: 'Werden die Dokumente hochgeladen?', a: 'Nein – die Verarbeitung erfolgt lokal im Browser.' },
      { q: 'Kostet das etwas?', a: 'Nein, das Tool ist kostenlos und ohne Anmeldung nutzbar.' },
    ],
  },
};
