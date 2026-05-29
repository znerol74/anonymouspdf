import type { LandingCopy, Step } from './types';

const STEPS: Step[] = [
  { title: '1. Upload je PDF', body: 'Kies een bestand of sleep het naar de pagina. Het opent lokaal: er wordt niets naar een server gestuurd.' },
  { title: '2. Automatische detectie', body: 'Patroonherkenning en een AI-model op je apparaat vinden de gevoelige tekst voor je.' },
  { title: '3. Downloaden of kopiëren', body: 'Krijg een PDF waarin de tekst echt verwijderd is, of kopieer de opgeschoonde tekst.' },
];

export const nl: Record<string, LandingCopy> = {
  'redact-pdf': {
    navLabel: 'PDF zwartlakken',
    seoTitle: 'PDF zwartlakken online — gratis, permanent en in je browser | AnonymousPDF',
    seoDescription:
      'Lak een PDF gratis zwart: verberg en verwijder permanent namen, e-mails, rekeningnummers en andere gevoelige gegevens, automatisch en 100% in je browser. Geen upload, geen registratie.',
    h1: 'PDF zwartlakken online — gratis en permanent',
    sub: 'Verberg gevoelige informatie en verwijder die definitief uit het bestand. Je PDF wordt in je browser verwerkt en nooit geüpload.',
    intro: [
      'Een PDF zwartlakken is meer dan een zwarte rechthoek over een naam tekenen. Als de tekst eronder er nog staat, kan iedereen die kopiëren of doorzoeken. AnonymousPDF verwijdert de onderliggende inhoud volledig, zodat zwartgelakte informatie niet kan worden hersteld.',
      'Upload een document en de tool vindt automatisch de gevoelige gegevens — e-mailadressen, telefoonnummers, IBANs en kaartnummers, identificatie- en dossiernummers, plus namen en organisaties — en lakt ze zwart. Alles draait lokaal op je apparaat; geen bestand verlaat je browser.',
    ],
    steps: STEPS,
    faqHeading: 'Veelgestelde vragen',
    faq: [
      { q: 'Is het zwartlakken permanent?', a: 'Ja. De pagina wordt opnieuw opgebouwd, zodat de zwartgelakte tekst geen deel meer uitmaakt van het bestand: hij kan niet worden gekopieerd, doorzocht of hersteld, anders dan een zwart vlak over levende tekst.' },
      { q: 'Worden mijn bestanden ergens geüpload?', a: 'Nee. Alle verwerking gebeurt in je browser, op je eigen apparaat. Je document wordt nooit verzonden.' },
      { q: 'Is het echt gratis?', a: 'Ja — geen account, geen e-mail, geen watermerk en geen paginalimiet.' },
      { q: 'Wat detecteert het automatisch?', a: 'E-mails, telefoons, IBANs, kaarten, IP-adressen, URLs, gangbare identificatie- en dossiernummers en — via een AI-model op het apparaat — namen, organisaties en locaties.' },
    ],
  },

  'anonymize-pdf': {
    navLabel: 'PDF anonimiseren',
    seoTitle: 'PDF anonimiseren — namen en persoonsgegevens gratis verwijderen | AnonymousPDF',
    seoDescription:
      'Anonimiseer PDF-bestanden automatisch. Detecteer en verwijder namen, e-mails, telefoons, IBANs en identificatienummers in seconden — gratis en 100% in je browser. Niets wordt geüpload.',
    h1: 'PDF-documenten automatisch anonimiseren',
    sub: 'Detecteer en verwijder automatisch persoonsgegevens uit een PDF — namen, contactgegevens, rekening- en identificatienummers — zonder iets te uploaden.',
    intro: [
      'Een document anonimiseren betekent de gegevens verwijderen die personen identificeren: namen, adressen, contactgegevens en referentienummers. AnonymousPDF doorzoekt je PDF en haalt ze er automatisch uit, zodat je het bestand kunt delen of archiveren zonder persoonsgegevens prijs te geven.',
      'De detectie combineert nauwkeurige patronen voor gestructureerde gegevens (e-mails, telefoons, IBANs, kaarten en identificatienummers) met een AI-model op het apparaat voor namen, organisaties en plaatsen. Het is een praktische eerste stap voor dataminimalisatie onder de AVG — en omdat alles in je browser draait, verlaten de persoonsgegevens je apparaat nooit.',
    ],
    steps: STEPS,
    faqHeading: 'Veelgestelde vragen',
    faq: [
      { q: 'Wat is het verschil tussen zwartlakken en anonimiseren?', a: 'Zwartlakken verbergt specifieke inhoud; anonimiseren richt zich op het verwijderen van de persoonsgegevens die individuen identificeren. Deze tool doet beide.' },
      { q: 'Verwijdert het namen?', a: 'Ja. Een AI-model in je browser detecteert namen van personen en organisaties, naast patroongebaseerde gegevens zoals e-mails en IBANs.' },
      { q: 'Wordt er iets geüpload?', a: 'Nee — je bestand wordt lokaal verwerkt en nooit ergens naartoe gestuurd.' },
      { q: 'Vindt het alles?', a: 'Automatische detectie is erg goed maar niet perfect. Controleer het resultaat altijd voor je deelt, vooral bij ongewone namen of formaten.' },
    ],
  },

  'redaction-tool': {
    navLabel: 'Redactietool',
    seoTitle: 'Online redactietool voor PDF — gratis, zonder installatie | AnonymousPDF',
    seoDescription:
      'Een gratis online redactietool voor PDF. Vind en verwijder permanent gevoelige gegevens — niets te installeren, niets te uploaden, geen registratie.',
    h1: 'Een gratis online redactietool',
    sub: 'Redactiesoftware zonder installatie. Vind en verwijder permanent gevoelige gegevens uit PDF’s, rechtstreeks in je browser.',
    intro: [
      'Traditionele redactiesoftware is gebonden aan de desktop, duur en laat vaak herstelbare tekst achter. AnonymousPDF is een browsergebaseerde redactietool: niets te installeren, niets te uploaden, en de geredigeerde tekst wordt echt uit het bestand verwijderd.',
      'Het detecteert automatisch gevoelige gegevens en lakt ze zwart, en laat je vervolgens een schone PDF downloaden of de geredigeerde tekst kopiëren. Omdat het volledig op je apparaat draait, is het veilig zelfs voor vertrouwelijke documenten.',
    ],
    steps: STEPS,
    faqHeading: 'Veelgestelde vragen',
    faq: [
      { q: 'Moet ik iets installeren?', a: 'Nee. Het werkt in elke moderne browser, op desktop of mobiel.' },
      { q: 'Hoe verschilt dit van zwarte vlakken tekenen?', a: 'Getekende vlakken laten de tekst eronder meestal intact en herstelbaar. Deze tool bouwt de pagina opnieuw op, zodat de inhoud echt weg is.' },
      { q: 'Is het veilig voor vertrouwelijke bestanden?', a: 'Ja — bestanden worden lokaal verwerkt en nooit geüpload.' },
      { q: 'Zijn er kosten of limieten?', a: 'Het is gratis, zonder registratie en zonder paginalimiet.' },
    ],
  },

  'data-masking': {
    navLabel: 'Data maskeren',
    seoTitle: 'Datamaskering voor PDF — PII online gratis maskeren | AnonymousPDF',
    seoDescription:
      'Maskeer gevoelige gegevens in PDF-documenten. Detecteer en verwijder automatisch PII — e-mails, telefoons, rekening- en identificatienummers, namen — gratis en volledig in je browser.',
    h1: 'Datamaskering voor PDF-documenten',
    sub: 'Maskeer automatisch persoonlijk identificeerbare informatie (PII) in een PDF — zonder je gegevens naar een clouddienst te sturen.',
    intro: [
      'Datamaskering verwijdert gevoelige waarden zodat een document kan worden gedeeld, beoordeeld of gearchiveerd zonder echte persoonsgegevens prijs te geven. AnonymousPDF maskeert PII in PDF’s door ze te detecteren en uit het bestand te verwijderen.',
      'Het herkent gestructureerde identificatoren — e-mailadressen, telefoons, IBANs, kaarten, IP-adressen en identificatie- of referentienummers — en gebruikt een AI-model op het apparaat voor namen, organisaties en locaties. Alle maskering gebeurt in je browser, dus de oorspronkelijke gegevens worden nooit verzonden.',
    ],
    steps: STEPS,
    faqHeading: 'Veelgestelde vragen',
    faq: [
      { q: 'Wat telt hier als PII?', a: 'Contactgegevens, financiële identificatoren (IBANs, kaarten), netwerkidentificatoren (IP’s), identificatie- en referentienummers, en namen, organisaties en plaatsen.' },
      { q: 'Worden de oorspronkelijke gegevens naar een server gestuurd?', a: 'Nee. Detectie en maskering draaien lokaal in je browser.' },
      { q: 'Kan ik de gemaskeerde tekst krijgen, niet alleen een PDF?', a: 'Ja — gebruik «Tekst kopiëren» voor de gemaskeerde tekst met labels als [NAME] en [EMAIL].' },
      { q: 'Is het gratis voor zakelijk gebruik?', a: 'Ja, het gebruik is gratis. Controleer bij gevoelige workflows altijd het resultaat voor je deelt.' },
    ],
  },

  'pseudonymize-pdf': {
    navLabel: 'PDF pseudonimiseren',
    seoTitle: 'PDF pseudonimiseren — namen vervangen door Person_1, ORG_1 | AnonymousPDF',
    seoDescription:
      'Pseudonimiseer een PDF gratis: vervang automatisch namen, organisaties en andere persoonsgegevens door consistente labels als Person_1 en ORG_1 — 100% in je browser. Niets wordt geüpload.',
    h1: 'PDF-documenten automatisch pseudonimiseren',
    sub: 'Vervang persoonsgegevens door consistente labels — dezelfde naam wordt altijd dezelfde Person_1 — zonder je bestand te uploaden.',
    intro: [
      'Pseudonimisering houdt een document leesbaar en verbreekt tegelijk de link met echte personen: in plaats van een naam te wissen, wordt die vervangen door een neutraal, consistent label als Person_1 of ORG_1. Dezelfde waarde krijgt altijd hetzelfde label, dus de tekst blijft logisch — je kunt alleen niet meer zien naar wie hij verwijst.',
      'AnonymousPDF detecteert namen, organisaties, e-mails, telefoons, IBANs, identificatienummers en datums, en bouwt de PDF vervolgens opnieuw op met elke waarde vervangen door zijn label. De originelen worden uit het bestand verwijderd, niet verborgen, en alles gebeurt in je browser — de brongegevens verlaten je apparaat nooit.',
    ],
    steps: STEPS,
    faqHeading: 'Veelgestelde vragen',
    faq: [
      { q: 'Hoe verschilt pseudonimisering van zwartlakken?', a: 'Zwartlakken verbergt informatie; pseudonimisering vervangt die door een consistent label (Person_1, ORG_1, Date_1) zodat het document leesbaar blijft terwijl de echte identiteiten verdwijnen.' },
      { q: 'Worden dezelfde namen consistent vervangen?', a: 'Ja. Elke keer dat dezelfde waarde voorkomt, krijgt die hetzelfde nummer, zodat de relaties in de tekst behouden blijven terwijl de identiteit wordt verwijderd.' },
      { q: 'Kunnen de oorspronkelijke waarden worden hersteld?', a: 'Nee. De PDF wordt opnieuw opgebouwd uit de vervangen inhoud, dus de oorspronkelijke namen en nummers staan niet meer in het bestand.' },
      { q: 'Is het gratis en privé?', a: 'Ja — gratis, zonder registratie en 100% in je browser. Niets wordt geüpload.' },
    ],
  },

  'gdpr-pdf': {
    navLabel: 'PDF en AVG',
    seoTitle: 'PDF-anonimisering voor de AVG — persoonsgegevens gratis verwijderen | AnonymousPDF',
    seoDescription:
      'Anonimiseer PDF’s voor de AVG: detecteer en verwijder persoonsgegevens — namen, contactgegevens, IBANs, identificatienummers — automatisch en 100% in je browser. Een praktische stap in dataminimalisatie. Geen upload.',
    h1: 'AVG-vriendelijke PDF-anonimisering',
    sub: 'Verwijder persoonsgegevens uit PDF’s om de dataminimalisatie van de AVG te ondersteunen — automatisch en zonder iets naar een server te sturen.',
    intro: [
      'De AVG vraagt om alleen de persoonsgegevens te verwerken die je echt nodig hebt en die te beschermen. Voordat je een PDF deelt, archiveert of publiceert, is het verwijderen van namen, contactgegevens en identificatienummers een eenvoudige, effectieve stap in dataminimalisatie. AnonymousPDF vindt die gegevens automatisch en haalt ze uit het bestand.',
      'Omdat detectie en verwijdering volledig in je browser draaien, worden de persoonsgegevens nooit naar een derde verzonden — cruciaal wanneer het document zelf is wat je probeert te beschermen. Automatische detectie is een sterke eerste stap, geen juridisch advies; controleer het resultaat altijd voor je specifieke verplichtingen.',
    ],
    steps: STEPS,
    faqHeading: 'Veelgestelde vragen',
    faq: [
      { q: 'Maakt dit mijn document AVG-conform?', a: 'Het helpt bij dataminimalisatie door persoonsgegevens te verwijderen, maar conformiteit hangt af van je hele proces. Beschouw het als een praktische tool, geen juridisch advies, en controleer het resultaat.' },
      { q: 'Worden er gegevens naar een server gestuurd?', a: 'Nee. Alles draait lokaal in je browser, dus de persoonsgegevens verlaten je apparaat nooit.' },
      { q: 'Welke persoonsgegevens detecteert het?', a: 'Namen en organisaties, e-mails, telefoons, IBANs en kaartnummers, IP-adressen, identificatie- en dossiernummers, en datums.' },
      { q: 'Kan het document leesbaar blijven?', a: 'Ja — waarden worden vervangen door neutrale labels (bijv. Person_1), zodat de tekst natuurlijk leest zonder iemand te identificeren.' },
    ],
  },

  'remove-names-from-pdf': {
    navLabel: 'Namen verwijderen',
    seoTitle: 'Namen verwijderen uit een PDF — gratis en automatisch | AnonymousPDF',
    seoDescription:
      'Verwijder namen automatisch uit een PDF. Een AI-model op het apparaat detecteert namen van personen en organisaties en haalt ze eruit — gratis, 100% in je browser, geen upload.',
    h1: 'Namen verwijderen uit een PDF',
    sub: 'Detecteer en verwijder automatisch namen van personen en organisaties uit een PDF — zonder het bestand te uploaden.',
    intro: [
      'Namen zijn vaak het gevoeligste deel van een document en het moeilijkst te vangen met een simpele zoek-en-vervang. AnonymousPDF gebruikt een AI-model in je browser om namen van personen en organisaties te herkennen — ook namen waar je niet op zou zoeken — en haalt ze uit het bestand.',
      'Naast namen detecteert het ook e-mails, telefoons, IBANs, identificatienummers en datums. Elke naam wordt vervangen door een neutraal label als Person_1, zodat het document leesbaar blijft zonder iemand te identificeren. Alles draait op je apparaat.',
    ],
    steps: STEPS,
    faqHeading: 'Veelgestelde vragen',
    faq: [
      { q: 'Hoe worden namen gedetecteerd?', a: 'Een meertalig AI-model (NER) draait in je browser en markeert namen van personen en organisaties, naast patroongebaseerde gegevens zoals e-mails en IBANs.' },
      { q: 'Werkt het met namen in andere talen?', a: 'Ja — het model ondersteunt meerdere belangrijke talen. De detectie is erg goed maar niet perfect, dus controleer het resultaat.' },
      { q: 'Zijn de namen echt weg?', a: 'Ja. De PDF wordt opnieuw opgebouwd met elke naam vervangen, dus het origineel staat niet meer in het bestand.' },
      { q: 'Is het gratis?', a: 'Ja, gratis en zonder registratie, volledig verwerkt in je browser.' },
    ],
  },

  'censor-pdf': {
    navLabel: 'PDF censureren',
    seoTitle: 'PDF censureren online — gevoelige tekst gratis verbergen | AnonymousPDF',
    seoDescription:
      'Censureer een PDF gratis: vind en verwijder automatisch gevoelige tekst — namen, e-mails, nummers — en bouw het bestand opnieuw op zodat het niet kan worden hersteld. 100% in je browser, geen upload.',
    h1: 'Een PDF online censureren',
    sub: 'Vind en verwijder automatisch de gevoelige delen van een PDF en download een bestand waarin de gecensureerde inhoud echt weg is.',
    intro: [
      'Een PDF censureren zou moeten betekenen dat de verborgen tekst echt onleesbaar is — niet alleen bedekt door een vlak waaronder je kunt kopiëren. AnonymousPDF verwijdert de gevoelige inhoud volledig uit het bestand en bouwt de pagina opnieuw op, zodat gecensureerde informatie niet kan worden geselecteerd, doorzocht of hersteld.',
      'Het detecteert automatisch wat er gecensureerd moet worden — namen, organisaties, e-mails, telefoons, IBANs, identificatienummers en datums — en vervangt elk element door een neutraal label. Alles gebeurt in je browser; het oorspronkelijke document verlaat je apparaat nooit.',
    ],
    steps: STEPS,
    faqHeading: 'Veelgestelde vragen',
    faq: [
      { q: 'Is de gecensureerde tekst herstelbaar?', a: 'Nee. De pagina wordt opnieuw opgebouwd, dus de oorspronkelijke tekst wordt uit het bestand verwijderd in plaats van achter een vlak verborgen.' },
      { q: 'Wat wordt automatisch gecensureerd?', a: 'Namen en organisaties, e-mails, telefoons, IBANs en kaarten, IP-adressen, identificatie- en dossiernummers, en datums.' },
      { q: 'Moet ik mijn bestand uploaden?', a: 'Nee — alles wordt lokaal in je browser verwerkt.' },
      { q: 'Is het gratis?', a: 'Ja, gratis, zonder account en zonder paginalimiet.' },
    ],
  },

  'black-out-pdf': {
    navLabel: 'Tekst zwart maken',
    seoTitle: 'Tekst zwart maken in een PDF — gratis en permanent | AnonymousPDF',
    seoDescription:
      'Maak tekst in een PDF gratis zwart. Detecteer automatisch gevoelige informatie en verwijder die permanent uit het bestand — 100% in je browser, geen upload.',
    h1: 'Tekst zwart maken in een PDF',
    sub: 'Verwijder gevoelige tekst permanent uit een PDF — niet alleen bedekken — automatisch en in je browser.',
    intro: [
      'Een zwarte rechthoek over tekst tekenen laat in de meeste editors de woorden eronder intact, waar ze nog kunnen worden gekopieerd of doorzocht. AnonymousPDF maakt informatie veilig zwart: het verwijdert de onderliggende tekst uit het bestand en bouwt de pagina opnieuw op, zodat hij echt weg is.',
      'Je hoeft niets met de hand te markeren — de tool detecteert gevoelige gegevens automatisch (namen, e-mails, telefoons, IBANs, identificatienummers, datums en meer) en verwijdert ze. Het draait volledig op je apparaat, dus vertrouwelijke bestanden blijven privé.',
    ],
    steps: STEPS,
    faqHeading: 'Veelgestelde vragen',
    faq: [
      { q: 'Blijft de tekst onder het zwarte vlak staan?', a: 'Nee. Anders dan een getekende rechthoek verwijdert dit de tekst uit het bestand, dus er kan niets worden gekopieerd of hersteld.' },
      { q: 'Kan ik kiezen wat zwart wordt gemaakt?', a: 'De tool detecteert gevoelige gegevens automatisch; controleer het resultaat altijd voor je deelt.' },
      { q: 'Wordt er iets geüpload?', a: 'Nee, het wordt lokaal in je browser verwerkt.' },
      { q: 'Hoeveel kost het?', a: 'Niets — het is gratis, zonder registratie.' },
    ],
  },

  'hide-information-in-pdf': {
    navLabel: 'Informatie verbergen',
    seoTitle: 'Informatie verbergen in een PDF — gratis en automatisch | AnonymousPDF',
    seoDescription:
      'Verberg gevoelige informatie in een PDF automatisch en gratis. Detecteer en verwijder namen, contactgegevens, rekening- en identificatienummers — 100% in je browser, geen upload.',
    h1: 'Informatie verbergen in een PDF',
    sub: 'Vind en verwijder automatisch de informatie die je niet wilt delen uit een PDF — zonder het bestand te uploaden.',
    intro: [
      'Soms moet je een document delen maar delen ervan privé houden — een naam, een adres, een rekeningnummer. AnonymousPDF vindt die informatie automatisch en verwijdert die uit het bestand, zodat wat overblijft veilig te versturen is.',
      'Het herkent contactgegevens, financiële en identificatienummers, IP-adressen, datums en — via een AI-model op het apparaat — namen, organisaties en locaties. Verborgen waarden worden vervangen door neutrale labels, en omdat alles in je browser draait, wordt de oorspronkelijke informatie nooit verzonden.',
    ],
    steps: STEPS,
    faqHeading: 'Veelgestelde vragen',
    faq: [
      { q: 'Wordt de verborgen informatie verwijderd of alleen bedekt?', a: 'Verwijderd. De PDF wordt opnieuw opgebouwd zonder de oorspronkelijke tekst, dus die kan niet worden hersteld.' },
      { q: 'Wat kan het verbergen?', a: 'Namen, organisaties, e-mails, telefoons, IBANs en kaarten, IP-adressen, identificatie- en dossiernummers, en datums.' },
      { q: 'Wordt mijn bestand geüpload?', a: 'Nee — de verwerking is volledig lokaal in je browser.' },
      { q: 'Is het echt gratis?', a: 'Ja, gratis en zonder registratie.' },
    ],
  },

  'remove-personal-information-pdf': {
    navLabel: 'Persoonsgegevens verwijderen',
    seoTitle: 'Persoonsgegevens verwijderen uit een PDF — gratis | AnonymousPDF',
    seoDescription:
      'Verwijder persoonsgegevens automatisch uit een PDF: namen, contactgegevens, IBANs, identificatienummers en meer. Gratis, 100% in je browser, geen upload.',
    h1: 'Persoonsgegevens verwijderen uit een PDF',
    sub: 'Haal persoonsgegevens automatisch uit een PDF — namen, contactgegevens, rekening- en identificatienummers — zonder iets naar een server te sturen.',
    intro: [
      'Persoonsgegevens verbergen zich op meer plekken dan je denkt: handtekeningen, kopteksten, referenties, contactblokken. AnonymousPDF doorzoekt het hele document en verwijdert de persoonsgegevens automatisch, zodat je het veilig kunt hergebruiken of delen.',
      'De detectie combineert nauwkeurige patroonherkenning (e-mails, telefoons, IBANs, kaarten en identificatienummers, IP-adressen, datums) met een AI-model op het apparaat voor namen, organisaties en locaties. Elke waarde wordt vervangen door een neutraal label en het bestand wordt volledig op je apparaat verwerkt.',
    ],
    steps: STEPS,
    faqHeading: 'Veelgestelde vragen',
    faq: [
      { q: 'Wat telt hier als persoonsgegevens?', a: 'Namen en organisaties, contactgegevens, financiële identificatoren (IBANs, kaarten), IP-adressen, identificatie- en referentienummers, en datums.' },
      { q: 'Wordt de oorspronkelijke informatie ergens naartoe gestuurd?', a: 'Nee. Detectie en verwijdering draaien lokaal in je browser.' },
      { q: 'Kan ik ook de opgeschoonde tekst krijgen?', a: 'Ja — gebruik «Tekst kopiëren» of «Tekst downloaden» voor de geanonimiseerde tekst met labels.' },
      { q: 'Vindt het alles?', a: 'Het is een sterke automatische stap maar niet perfect; controleer het resultaat voor je deelt, vooral bij ongewone formaten.' },
    ],
  },

  'document-redact': {
    navLabel: 'Document redigeren',
    seoTitle: 'Een document online redigeren — gratis en veilig | AnonymousPDF',
    seoDescription:
      'Redigeer een document online gratis. Detecteer en verwijder permanent gevoelige gegevens uit PDF’s — contracten, brieven, afschriften — 100% in je browser, geen upload.',
    h1: 'Een document redigeren — online en veilig',
    sub: 'Detecteer en verwijder permanent de gevoelige delen van je PDF-documenten — zonder iets te uploaden.',
    intro: [
      'Of het nu een contract, een brief, een factuur of een officiële kennisgeving is, gevoelige details moeten vaak worden verwijderd voordat je het doorgeeft. AnonymousPDF detecteert die gegevens automatisch en verwijdert ze voorgoed uit het document — niet alleen visueel met een vlak, maar uit het bestand zelf.',
      'Het herkent e-mails, telefoons, IBANs en kaartnummers, IP-adressen, identificatie- en dossiernummers, en — via een AI-model op het apparaat — namen, organisaties en locaties. De verwerking gebeurt volledig op je apparaat, dus vertrouwelijke documenten verlaten je browser nooit.',
    ],
    steps: STEPS,
    faqHeading: 'Veelgestelde vragen',
    faq: [
      { q: 'Welke documenten kan ik redigeren?', a: 'Elke PDF. Als je document een Word-bestand is, sla het dan eerst op als PDF.' },
      { q: 'Is het redigeren veilig?', a: 'Ja. De geredigeerde inhoud wordt uit het bestand verwijderd en kan niet worden hersteld.' },
      { q: 'Worden documenten geüpload?', a: 'Nee — de verwerking gebeurt lokaal in je browser.' },
      { q: 'Kost het iets?', a: 'Nee, de tool is gratis en vereist geen registratie.' },
    ],
  },
};
