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

  'redaction-tool': {
    navLabel: 'Schwärzungstool',
    seoTitle: 'Schwärzungstool für PDF — online & kostenlos, ohne Installation | AnonymousPDF',
    seoDescription:
      'Ein kostenloses Online-Schwärzungstool für PDFs. Sensible Daten automatisch finden und dauerhaft entfernen — nichts zu installieren, nichts hochzuladen, ohne Anmeldung.',
    h1: 'Ein kostenloses Online-Schwärzungstool',
    sub: 'Schwärzungssoftware ohne Installation. Sensible Daten in PDFs finden und dauerhaft entfernen, direkt im Browser.',
    intro: [
      'Klassische Schwärzungssoftware ist an den Desktop gebunden, teuer und lässt oft wiederherstellbaren Text zurück. AnonymousPDF ist ein browserbasiertes Schwärzungstool: nichts zu installieren, nichts hochzuladen, und der geschwärzte Text wird wirklich aus der Datei entfernt.',
      'Es erkennt sensible Daten automatisch und schwärzt sie, dann können Sie ein sauberes PDF herunterladen oder den geschwärzten Text kopieren. Da alles auf Ihrem Gerät läuft, ist es selbst für vertrauliche Dokumente sicher.',
    ],
    steps: STEPS,
    faqHeading: 'Häufige Fragen',
    faq: [
      { q: 'Muss ich etwas installieren?', a: 'Nein. Es läuft in jedem modernen Browser, am Desktop oder mobil.' },
      { q: 'Wie unterscheidet es sich von schwarzen Balken?', a: 'Gezeichnete Balken lassen den Text darunter meist intakt und wiederherstellbar. Dieses Tool baut die Seite neu auf, sodass der Inhalt wirklich weg ist.' },
      { q: 'Ist es für vertrauliche Dateien sicher?', a: 'Ja — Dateien werden lokal verarbeitet und nie hochgeladen.' },
      { q: 'Gibt es Kosten oder Limits?', a: 'Es ist kostenlos, ohne Anmeldung und ohne Seitenlimit.' },
    ],
  },

  'data-masking': {
    navLabel: 'Daten maskieren',
    seoTitle: 'Datenmaskierung für PDFs — PII online kostenlos maskieren | AnonymousPDF',
    seoDescription:
      'Sensible Daten in PDF-Dokumenten maskieren. PII automatisch erkennen und entfernen — E-Mails, Telefonnummern, Konto- und Aktenzeichen, Namen — kostenlos und vollständig im Browser.',
    h1: 'Datenmaskierung für PDF-Dokumente',
    sub: 'Personenbezogene Daten (PII) in einem PDF automatisch maskieren — ohne Ihre Daten an einen Cloud-Dienst zu senden.',
    intro: [
      'Datenmaskierung entfernt sensible Werte, damit ein Dokument geteilt, geprüft oder archiviert werden kann, ohne echte personenbezogene Daten preiszugeben. AnonymousPDF maskiert PII in PDFs, indem es sie erkennt und aus der Datei entfernt.',
      'Es erkennt strukturierte Kennungen — E-Mail-Adressen, Telefonnummern, IBANs, Kartennummern, IP-Adressen sowie Aktenzeichen — und nutzt ein KI-Modell im Gerät für Namen, Organisationen und Orte. Die Maskierung erfolgt im Browser, sodass die Originaldaten nie übertragen werden.',
    ],
    steps: STEPS,
    faqHeading: 'Häufige Fragen',
    faq: [
      { q: 'Was gilt hier als PII?', a: 'Kontaktdaten, Finanzkennungen (IBANs, Karten), Netzwerkkennungen (IPs), Aktenzeichen sowie Namen, Organisationen und Orte.' },
      { q: 'Werden die Originaldaten an einen Server gesendet?', a: 'Nein. Erkennung und Maskierung laufen lokal in Ihrem Browser.' },
      { q: 'Bekomme ich auch den maskierten Text, nicht nur ein PDF?', a: 'Ja — mit „Text kopieren“ erhalten Sie den maskierten Text mit Platzhaltern wie [NAME] und [EMAIL].' },
      { q: 'Ist es für geschäftliche Nutzung kostenlos?', a: 'Ja, die Nutzung ist kostenlos. Prüfen Sie das Ergebnis bei sensiblen Abläufen stets vor der Weitergabe.' },
    ],
  },

  'pseudonymize-pdf': {
    navLabel: 'PDF pseudonymisieren',
    seoTitle: 'PDF pseudonymisieren — Namen durch Person_1, ORG_1 ersetzen | AnonymousPDF',
    seoDescription:
      'PDF kostenlos pseudonymisieren: Namen, Organisationen und andere personenbezogene Daten automatisch durch konsistente Platzhalter wie Person_1 und ORG_1 ersetzen — 100 % im Browser. Kein Upload.',
    h1: 'PDF-Dokumente automatisch pseudonymisieren',
    sub: 'Personenbezogene Daten durch konsistente Platzhalter ersetzen — derselbe Name wird immer zum selben Person_1 — ohne Ihre Datei hochzuladen.',
    intro: [
      'Pseudonymisierung hält ein Dokument lesbar und trennt zugleich den Bezug zu realen Personen: Statt einen Namen zu löschen, wird er durch eine neutrale, konsistente Bezeichnung wie Person_1 oder ORG_1 ersetzt. Derselbe Wert wird immer demselben Platzhalter zugeordnet, sodass der Text weiterhin Sinn ergibt — man kann nur nicht mehr erkennen, um wen es geht.',
      'AnonymousPDF erkennt Namen, Organisationen, E-Mails, Telefonnummern, IBANs, Kennungen und Daten und baut das PDF dann mit ersetzten Werten neu auf. Die Originale werden aus der Datei entfernt, nicht versteckt, und alles geschieht im Browser — die Ausgangsdaten verlassen Ihr Gerät nie.',
    ],
    steps: STEPS,
    faqHeading: 'Häufige Fragen',
    faq: [
      { q: 'Worin unterscheidet sich Pseudonymisierung vom Schwärzen?', a: 'Schwärzen macht Informationen unkenntlich; Pseudonymisierung ersetzt sie durch einen konsistenten Platzhalter (Person_1, ORG_1, Date_1), sodass das Dokument lesbar bleibt, während die echten Identitäten verschwinden.' },
      { q: 'Werden gleiche Namen konsistent ersetzt?', a: 'Ja. Jedes Vorkommen desselben Werts erhält dieselbe Nummer, sodass Bezüge im Text erhalten bleiben, während die Identität entfernt wird.' },
      { q: 'Lassen sich die Originalwerte wiederherstellen?', a: 'Nein. Das PDF wird aus dem ersetzten Inhalt neu aufgebaut, sodass die ursprünglichen Namen und Nummern nicht mehr in der Datei sind.' },
      { q: 'Ist es kostenlos und privat?', a: 'Ja — kostenlos, ohne Anmeldung und zu 100 % im Browser. Nichts wird hochgeladen.' },
    ],
  },

  'gdpr-pdf': {
    navLabel: 'DSGVO-PDF',
    seoTitle: 'PDF DSGVO-konform anonymisieren — personenbezogene Daten entfernen | AnonymousPDF',
    seoDescription:
      'PDFs für die DSGVO anonymisieren: personenbezogene Daten — Namen, Kontaktdaten, IBANs, Kennungen — automatisch erkennen und entfernen, 100 % im Browser. Ein praktischer Schritt zur Datenminimierung. Kein Upload.',
    h1: 'DSGVO-konforme PDF-Anonymisierung',
    sub: 'Personenbezogene Daten aus PDFs entfernen, um die Datenminimierung der DSGVO zu unterstützen — automatisch und ohne etwas an einen Server zu senden.',
    intro: [
      'Die DSGVO verlangt, nur die personenbezogenen Daten zu verarbeiten, die Sie wirklich brauchen, und sie zu schützen. Vor dem Teilen, Archivieren oder Veröffentlichen eines PDFs ist das Entfernen von Namen, Kontaktdaten und Kennungen ein einfacher, wirksamer Schritt zur Datenminimierung. AnonymousPDF findet diese Daten automatisch und entfernt sie aus der Datei.',
      'Da Erkennung und Entfernung vollständig im Browser laufen, werden die personenbezogenen Daten nie an Dritte übertragen — entscheidend, wenn das Dokument selbst das Schützenswerte ist. Die automatische Erkennung ist ein starker erster Durchlauf, keine Rechtsberatung; prüfen Sie das Ergebnis stets für Ihre konkreten Pflichten.',
    ],
    steps: STEPS,
    faqHeading: 'Häufige Fragen',
    faq: [
      { q: 'Wird mein Dokument damit DSGVO-konform?', a: 'Es hilft bei der Datenminimierung, indem personenbezogene Daten entfernt werden, doch die Konformität hängt von Ihrem gesamten Prozess ab. Betrachten Sie es als praktisches Werkzeug, nicht als Rechtsberatung, und prüfen Sie das Ergebnis.' },
      { q: 'Werden Daten an einen Server gesendet?', a: 'Nein. Alles läuft lokal im Browser, sodass die personenbezogenen Daten Ihr Gerät nie verlassen.' },
      { q: 'Welche personenbezogenen Daten werden erkannt?', a: 'Namen und Organisationen, E-Mails, Telefonnummern, IBANs und Kartennummern, IP-Adressen, Aktenzeichen und Daten.' },
      { q: 'Kann das Dokument lesbar bleiben?', a: 'Ja — Werte werden durch neutrale Platzhalter ersetzt (z. B. Person_1), sodass sich der Text natürlich liest, ohne jemanden zu identifizieren.' },
    ],
  },

  'remove-names-from-pdf': {
    navLabel: 'Namen entfernen',
    seoTitle: 'Namen aus PDF entfernen — kostenlos & automatisch | AnonymousPDF',
    seoDescription:
      'Namen automatisch aus einem PDF entfernen. Ein KI-Modell im Gerät erkennt Namen von Personen und Organisationen und entfernt sie — kostenlos, 100 % im Browser, kein Upload.',
    h1: 'Namen aus einem PDF entfernen',
    sub: 'Namen von Personen und Organisationen automatisch in einem PDF erkennen und entfernen — ohne die Datei hochzuladen.',
    intro: [
      'Namen sind oft das Sensibelste in einem Dokument und am schwersten mit einfachem Suchen-und-Ersetzen zu erfassen. AnonymousPDF nutzt ein KI-Modell im Browser, um Namen von Personen und Organisationen zu erkennen — auch solche, nach denen man nicht suchen würde — und entfernt sie aus der Datei.',
      'Neben Namen erkennt es auch E-Mails, Telefonnummern, IBANs, Kennungen und Daten. Jeder Name wird durch einen neutralen Platzhalter wie Person_1 ersetzt, sodass das Dokument lesbar bleibt, ohne jemanden zu identifizieren. Alles läuft auf Ihrem Gerät.',
    ],
    steps: STEPS,
    faqHeading: 'Häufige Fragen',
    faq: [
      { q: 'Wie werden Namen erkannt?', a: 'Ein mehrsprachiges KI-Modell (NER) läuft in Ihrem Browser und markiert Namen von Personen und Organisationen, zusätzlich zu musterbasierten Daten wie E-Mails und IBANs.' },
      { q: 'Funktioniert es auch mit Namen in anderen Sprachen?', a: 'Ja — das Modell unterstützt mehrere wichtige Sprachen. Die Erkennung ist sehr gut, aber nicht perfekt; prüfen Sie das Ergebnis.' },
      { q: 'Sind die Namen wirklich weg?', a: 'Ja. Das PDF wird mit ersetzten Namen neu aufgebaut, sodass das Original nicht mehr in der Datei ist.' },
      { q: 'Ist es kostenlos?', a: 'Ja, kostenlos und ohne Anmeldung, vollständig im Browser verarbeitet.' },
    ],
  },

  'censor-pdf': {
    navLabel: 'PDF zensieren',
    seoTitle: 'PDF zensieren online — sensiblen Text kostenlos verbergen | AnonymousPDF',
    seoDescription:
      'Ein PDF kostenlos zensieren: sensiblen Text — Namen, E-Mails, Nummern — automatisch finden und entfernen und die Datei so neu aufbauen, dass nichts wiederherstellbar ist. 100 % im Browser, kein Upload.',
    h1: 'Ein PDF online zensieren',
    sub: 'Die sensiblen Stellen eines PDFs automatisch finden und entfernen und eine Datei herunterladen, in der der zensierte Inhalt wirklich verschwunden ist.',
    intro: [
      'Ein PDF zu zensieren sollte bedeuten, dass der verborgene Text wirklich unlesbar ist — nicht nur von einem Kasten überdeckt, unter dem man kopieren kann. AnonymousPDF entfernt den sensiblen Inhalt vollständig aus der Datei und baut die Seite neu auf, sodass zensierte Informationen nicht markiert, durchsucht oder wiederhergestellt werden können.',
      'Es erkennt automatisch, was zu zensieren ist — Namen, Organisationen, E-Mails, Telefonnummern, IBANs, Kennungen und Daten — und ersetzt jedes Element durch einen neutralen Platzhalter. Alles geschieht im Browser; das Originaldokument verlässt Ihr Gerät nie.',
    ],
    steps: STEPS,
    faqHeading: 'Häufige Fragen',
    faq: [
      { q: 'Ist der zensierte Text wiederherstellbar?', a: 'Nein. Die Seite wird neu aufgebaut, sodass der Originaltext aus der Datei entfernt statt hinter einem Kasten versteckt wird.' },
      { q: 'Was wird automatisch zensiert?', a: 'Namen und Organisationen, E-Mails, Telefonnummern, IBANs und Karten, IP-Adressen, Aktenzeichen und Daten.' },
      { q: 'Muss ich meine Datei hochladen?', a: 'Nein — alles wird lokal in Ihrem Browser verarbeitet.' },
      { q: 'Ist es kostenlos?', a: 'Ja, kostenlos, ohne Konto und ohne Seitenlimit.' },
    ],
  },

  'black-out-pdf': {
    navLabel: 'Text schwärzen',
    seoTitle: 'Text in einem PDF schwärzen — kostenlos & dauerhaft | AnonymousPDF',
    seoDescription:
      'Text in einem PDF kostenlos schwärzen. Sensible Informationen automatisch erkennen und dauerhaft aus der Datei entfernen — 100 % im Browser, kein Upload.',
    h1: 'Text in einem PDF schwärzen',
    sub: 'Sensiblen Text dauerhaft aus einem PDF entfernen — nicht nur überdecken — automatisch und im Browser.',
    intro: [
      'Ein schwarzes Rechteck über Text zu zeichnen lässt in den meisten Editoren die Wörter darunter intakt, wo sie weiterhin kopiert oder durchsucht werden können. AnonymousPDF schwärzt Informationen sicher: Es entfernt den darunterliegenden Text aus der Datei und baut die Seite neu auf, sodass er wirklich weg ist.',
      'Sie müssen nichts von Hand markieren — das Tool erkennt sensible Daten automatisch (Namen, E-Mails, Telefonnummern, IBANs, Kennungen, Daten und mehr) und entfernt sie. Es läuft vollständig auf Ihrem Gerät, sodass vertrauliche Dateien privat bleiben.',
    ],
    steps: STEPS,
    faqHeading: 'Häufige Fragen',
    faq: [
      { q: 'Bleibt der Text unter dem schwarzen Kasten?', a: 'Nein. Anders als ein gezeichnetes Rechteck entfernt dies den Text aus der Datei, sodass nichts kopiert oder wiederhergestellt werden kann.' },
      { q: 'Kann ich wählen, was geschwärzt wird?', a: 'Das Tool erkennt sensible Daten automatisch; prüfen Sie das Ergebnis stets vor der Weitergabe.' },
      { q: 'Wird etwas hochgeladen?', a: 'Nein, es wird lokal in Ihrem Browser verarbeitet.' },
      { q: 'Was kostet es?', a: 'Nichts — es ist kostenlos, ohne Anmeldung.' },
    ],
  },

  'hide-information-in-pdf': {
    navLabel: 'Infos verbergen',
    seoTitle: 'Informationen in einem PDF verbergen — kostenlos & automatisch | AnonymousPDF',
    seoDescription:
      'Sensible Informationen in einem PDF automatisch und kostenlos verbergen. Namen, Kontaktdaten, Konto- und Aktenzeichen erkennen und entfernen — 100 % im Browser, kein Upload.',
    h1: 'Informationen in einem PDF verbergen',
    sub: 'Die Informationen, die Sie nicht teilen möchten, automatisch in einem PDF finden und entfernen — ohne die Datei hochzuladen.',
    intro: [
      'Manchmal müssen Sie ein Dokument teilen, aber Teile privat halten — einen Namen, eine Adresse, eine Kontonummer. AnonymousPDF findet diese Informationen automatisch und entfernt sie aus der Datei, sodass das Verbleibende sicher versendet werden kann.',
      'Es erkennt Kontaktdaten, Finanz- und Aktenzeichen, IP-Adressen, Daten und — über ein KI-Modell im Gerät — Namen, Organisationen und Orte. Verborgene Werte werden durch neutrale Platzhalter ersetzt, und da alles im Browser läuft, wird die Originalinformation nie übertragen.',
    ],
    steps: STEPS,
    faqHeading: 'Häufige Fragen',
    faq: [
      { q: 'Wird die verborgene Information entfernt oder nur überdeckt?', a: 'Entfernt. Das PDF wird ohne den Originaltext neu aufgebaut, sodass er nicht wiederhergestellt werden kann.' },
      { q: 'Was kann es verbergen?', a: 'Namen, Organisationen, E-Mails, Telefonnummern, IBANs und Karten, IP-Adressen, Aktenzeichen und Daten.' },
      { q: 'Wird meine Datei hochgeladen?', a: 'Nein — die Verarbeitung erfolgt vollständig lokal in Ihrem Browser.' },
      { q: 'Ist es wirklich kostenlos?', a: 'Ja, kostenlos und ohne Anmeldung.' },
    ],
  },

  'remove-personal-information-pdf': {
    navLabel: 'Persönliche Daten entfernen',
    seoTitle: 'Persönliche Daten aus einem PDF entfernen — kostenlos | AnonymousPDF',
    seoDescription:
      'Persönliche Daten automatisch aus einem PDF entfernen: Namen, Kontaktdaten, IBANs, Kennungen und mehr. Kostenlos, 100 % im Browser, kein Upload.',
    h1: 'Persönliche Daten aus einem PDF entfernen',
    sub: 'Persönliche Daten automatisch aus einem PDF herauslösen — Namen, Kontaktdaten, Konto- und Aktenzeichen — ohne etwas an einen Server zu senden.',
    intro: [
      'Persönliche Daten verstecken sich an mehr Stellen als gedacht: Signaturen, Kopfzeilen, Aktenzeichen, Kontaktblöcke. AnonymousPDF durchsucht das gesamte Dokument und entfernt die persönlichen Angaben automatisch, sodass Sie es sicher wiederverwenden oder teilen können.',
      'Die Erkennung kombiniert präzise Muster (E-Mails, Telefonnummern, IBANs, Karten- und Aktenzeichen, IP-Adressen, Daten) mit einem KI-Modell im Gerät für Namen, Organisationen und Orte. Jeder Wert wird durch einen neutralen Platzhalter ersetzt, und die Datei wird vollständig auf Ihrem Gerät verarbeitet.',
    ],
    steps: STEPS,
    faqHeading: 'Häufige Fragen',
    faq: [
      { q: 'Was gilt hier als persönliche Daten?', a: 'Namen und Organisationen, Kontaktdaten, Finanzkennungen (IBANs, Karten), IP-Adressen, Aktenzeichen und Daten.' },
      { q: 'Wird die Originalinformation irgendwohin gesendet?', a: 'Nein. Erkennung und Entfernung laufen lokal in Ihrem Browser.' },
      { q: 'Bekomme ich auch den bereinigten Text?', a: 'Ja — mit „Text kopieren“ oder „Text herunterladen“ erhalten Sie den anonymisierten Text mit Platzhaltern.' },
      { q: 'Wird alles erkannt?', a: 'Es ist ein starker automatischer Durchlauf, aber nicht perfekt; prüfen Sie das Ergebnis vor der Weitergabe, besonders bei ungewöhnlichen Formaten.' },
    ],
  },
};
