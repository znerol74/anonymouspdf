import type { LandingCopy, Step } from './types';

const STEPS: Step[] = [
  { title: '1. Augšupielādējiet savu PDF', body: 'Izvēlieties failu vai velciet to uz lapas. Tas atveras lokāli: nekas netiek sūtīts uz serveri.' },
  { title: '2. Automātiska atpazīšana', body: 'Šablonu atbilstība un ierīcē darbināts MI modelis atrod jutīgo tekstu jūsu vietā.' },
  { title: '3. Lejupielādēt vai kopēt', body: 'Iegūstiet PDF, kurā teksts ir patiešām noņemts, vai kopējiet attīrīto tekstu.' },
];

export const lv: Record<string, LandingCopy> = {
  'redact-pdf': {
    navLabel: 'Aizkrāsot PDF',
    seoTitle: 'Aizkrāsot PDF tiešsaistē — bez maksas, pastāvīgi un jūsu pārlūkā | AnonymousPDF',
    seoDescription:
      'Aizkrāsojiet PDF bez maksas: pastāvīgi noslēpiet un noņemiet vārdus, e-pastus, kontu numurus un citus jutīgus datus, automātiski un 100% jūsu pārlūkā. Bez augšupielādes, bez reģistrācijas.',
    h1: 'Aizkrāsot PDF tiešsaistē — bez maksas un pastāvīgi',
    sub: 'Noslēpiet jutīgu informāciju un neatgriezeniski noņemiet to no faila. Jūsu PDF tiek apstrādāts pārlūkā un nekad netiek augšupielādēts.',
    intro: [
      'Aizkrāsot PDF nozīmē vairāk nekā uzzīmēt melnu taisnstūri virs vārda. Ja teksts zem tā paliek, ikviens to var nokopēt vai sameklēt. AnonymousPDF pilnībā noņem pamatā esošo saturu, tāpēc aizkrāsoto informāciju nevar atjaunot.',
      'Augšupielādējiet dokumentu, un rīks automātiski atrod jutīgos datus — e-pasta adreses, tālruņu numurus, IBAN un karšu numurus, ID un lietu numurus, kā arī vārdus un organizācijas — un tos aizkrāso. Viss notiek lokāli jūsu ierīcē; neviens fails neatstāj jūsu pārlūku.',
    ],
    steps: STEPS,
    faqHeading: 'Biežāk uzdotie jautājumi',
    faq: [
      { q: 'Vai aizkrāsošana ir pastāvīga?', a: 'Jā. Lapa tiek pārveidota, tāpēc aizkrāsotais teksts vairs nav daļa no faila: to nevar nokopēt, sameklēt vai atjaunot, atšķirībā no melna lauka virs dzīva teksta.' },
      { q: 'Vai mani faili kaut kur tiek augšupielādēti?', a: 'Nē. Visa apstrāde notiek jūsu pārlūkā, jūsu ierīcē. Jūsu dokuments nekad netiek pārsūtīts.' },
      { q: 'Vai tas tiešām ir bez maksas?', a: 'Jā — bez konta, bez e-pasta, bez ūdenszīmes un bez lapu ierobežojuma.' },
      { q: 'Ko tas atpazīst automātiski?', a: 'E-pastus, tālruņus, IBAN, kartes, IP adreses, URL, izplatītus ID un lietu numurus un — ar ierīcē darbinātu MI modeli — vārdus, organizācijas un vietas.' },
    ],
  },

  'anonymize-pdf': {
    navLabel: 'Anonimizēt PDF',
    seoTitle: 'Anonimizēt PDF — noņemt vārdus un personas datus bez maksas | AnonymousPDF',
    seoDescription:
      'Anonimizējiet PDF failus automātiski. Atpazīstiet un noņemiet vārdus, e-pastus, tālruņus, IBAN un identifikatorus dažās sekundēs — bez maksas un 100% jūsu pārlūkā. Nekas netiek augšupielādēts.',
    h1: 'Anonimizēt PDF dokumentus automātiski',
    sub: 'Automātiski atpazīstiet un noņemiet personas datus no PDF — vārdus, kontaktinformāciju, kontu un ID numurus — neko neaugšupielādējot.',
    intro: [
      'Dokumenta anonimizēšana nozīmē noņemt informāciju, kas identificē personas: vārdus, adreses, kontaktinformāciju un atsauces numurus. AnonymousPDF skenē jūsu PDF un tos automātiski izņem, lai jūs varētu kopīgot vai arhivēt failu, neatklājot personas datus.',
      'Atpazīšana apvieno precīzu šablonu atbilstību strukturētiem datiem (e-pasti, tālruņi, IBAN, kartes un identifikatori) ar ierīcē darbinātu MI modeli vārdiem, organizācijām un vietām. Tas ir praktisks pirmais solis datu minimizēšanā saskaņā ar VDAR — un, tā kā viss notiek pārlūkā, personas dati nekad neatstāj jūsu ierīci.',
    ],
    steps: STEPS,
    faqHeading: 'Biežāk uzdotie jautājumi',
    faq: [
      { q: 'Kāda atšķirība starp aizkrāsošanu un anonimizēšanu?', a: 'Aizkrāsošana noslēpj konkrētu saturu; anonimizēšana koncentrējas uz personas datu noņemšanu, kas identificē indivīdus. Šis rīks dara abus.' },
      { q: 'Vai tas noņem vārdus?', a: 'Jā. MI modelis jūsu pārlūkā atpazīst personu un organizāciju vārdus papildus uz šabloniem balstītiem datiem, piemēram, e-pastiem un IBAN.' },
      { q: 'Vai kaut kas tiek augšupielādēts?', a: 'Nē — jūsu fails tiek apstrādāts lokāli un nekad nekur netiek sūtīts.' },
      { q: 'Vai tas atpazīst visu?', a: 'Automātiskā atpazīšana ir ļoti laba, bet ne nevainojama. Vienmēr pārbaudiet rezultātu pirms kopīgošanas, īpaši ar neparastiem vārdiem vai formātiem.' },
    ],
  },

  'redaction-tool': {
    navLabel: 'Aizkrāsošanas rīks',
    seoTitle: 'Tiešsaistes PDF aizkrāsošanas rīks bez maksas — bez instalēšanas | AnonymousPDF',
    seoDescription:
      'Bezmaksas tiešsaistes PDF aizkrāsošanas rīks. Atrodiet un pastāvīgi noņemiet jutīgus datus — nekas nav jāinstalē, nekas nav jāaugšupielādē, bez reģistrācijas.',
    h1: 'Bezmaksas tiešsaistes aizkrāsošanas rīks',
    sub: 'Aizkrāsošanas programmatūra bez instalēšanas. Atrodiet un pastāvīgi noņemiet jutīgus datus no PDF tieši jūsu pārlūkā.',
    intro: [
      'Tradicionālā aizkrāsošanas programmatūra ir piesaistīta datoram, dārga un bieži atstāj atjaunojamu tekstu. AnonymousPDF ir uz pārlūku balstīts aizkrāsošanas rīks: nekas nav jāinstalē, nekas nav jāaugšupielādē, un aizkrāsotais teksts patiešām tiek noņemts no faila.',
      'Tas automātiski atpazīst jutīgos datus un aizkrāso tos, pēc tam ļauj lejupielādēt tīru PDF vai kopēt aizkrāsoto tekstu. Tā kā tas darbojas pilnībā jūsu ierīcē, tas ir drošs pat ar konfidenciāliem dokumentiem.',
    ],
    steps: STEPS,
    faqHeading: 'Biežāk uzdotie jautājumi',
    faq: [
      { q: 'Vai man kaut kas jāinstalē?', a: 'Nē. Tas darbojas jebkurā mūsdienīgā pārlūkā, datorā vai mobilajā ierīcē.' },
      { q: 'Ar ko tas atšķiras no melnu lauku zīmēšanas?', a: 'Uzzīmētie lauki parasti atstāj tekstu zem tiem neskartu un atjaunojamu. Šis rīks pārveido lapu, tāpēc saturs patiešām pazūd.' },
      { q: 'Vai tas ir drošs konfidenciāliem failiem?', a: 'Jā — faili tiek apstrādāti lokāli un nekad netiek augšupielādēti.' },
      { q: 'Vai ir maksa vai ierobežojums?', a: 'Tas ir bez maksas, bez reģistrācijas un bez lapu ierobežojuma.' },
    ],
  },

  'data-masking': {
    navLabel: 'Datu maskēšana',
    seoTitle: 'Datu maskēšana PDF failiem — maskēt personas datus tiešsaistē bez maksas | AnonymousPDF',
    seoDescription:
      'Maskējiet jutīgus datus PDF dokumentos. Automātiski atpazīstiet un noņemiet personas datus — e-pastus, tālruņus, kontu un ID numurus, vārdus — bez maksas un pilnībā jūsu pārlūkā.',
    h1: 'Datu maskēšana PDF dokumentiem',
    sub: 'Automātiski maskējiet personas identificējošo informāciju (PII) PDF failā — nesūtot savus datus uz mākoņpakalpojumu.',
    intro: [
      'Datu maskēšana noņem jutīgas vērtības, lai dokumentu varētu kopīgot, pārskatīt vai arhivēt, neatklājot reālu personas informāciju. AnonymousPDF maskē PII PDF failos, tos atpazīstot un noņemot no faila.',
      'Tas atpazīst strukturētus identifikatorus — e-pasta adreses, tālruņus, IBAN, kartes, IP adreses un ID vai atsauces numurus — un izmanto ierīcē darbinātu MI modeli vārdiem, organizācijām un vietām. Visa maskēšana notiek jūsu pārlūkā, tāpēc oriģinālie dati nekad netiek pārsūtīti.',
    ],
    steps: STEPS,
    faqHeading: 'Biežāk uzdotie jautājumi',
    faq: [
      { q: 'Kas šeit tiek uzskatīts par PII?', a: 'Kontaktinformācija, finanšu identifikatori (IBAN, kartes), tīkla identifikatori (IP), ID un atsauces numuri, kā arī vārdi, organizācijas un vietas.' },
      { q: 'Vai oriģinālie dati tiek sūtīti uz serveri?', a: 'Nē. Atpazīšana un maskēšana notiek lokāli jūsu pārlūkā.' },
      { q: 'Vai varu iegūt maskēto tekstu, ne tikai PDF?', a: 'Jā — izmantojiet «Kopēt tekstu», lai iegūtu maskēto tekstu ar iezīmēm, piemēram, [NAME] un [EMAIL].' },
      { q: 'Vai tas ir bez maksas uzņēmējdarbībai?', a: 'Jā, lietošana ir bez maksas. Jutīgām darbplūsmām vienmēr pārbaudiet rezultātu pirms kopīgošanas.' },
    ],
  },

  'pseudonymize-pdf': {
    navLabel: 'Pseidonimizēt PDF',
    seoTitle: 'Pseidonimizēt PDF — aizstāt vārdus ar Person_1, ORG_1 | AnonymousPDF',
    seoDescription:
      'Pseidonimizējiet PDF bez maksas: automātiski aizstājiet vārdus, organizācijas un citus personas datus ar konsekventām iezīmēm, piemēram, Person_1 un ORG_1 — 100% jūsu pārlūkā. Nekas netiek augšupielādēts.',
    h1: 'Pseidonimizēt PDF dokumentus automātiski',
    sub: 'Aizstājiet personas datus ar konsekventām iezīmēm — tas pats vārds vienmēr kļūst par to pašu Person_1 — neaugšupielādējot failu.',
    intro: [
      'Pseidonimizācija saglabā dokumentu lasāmu, vienlaikus pārraujot saiti ar reālām personām: vārda dzēšanas vietā tas tiek aizstāts ar neitrālu, konsekventu iezīmi, piemēram, Person_1 vai ORG_1. Tā pati vērtība vienmēr atbilst tai pašai iezīmei, tāpēc teksts joprojām ir jēgpilns — jūs vienkārši vairs nevarat noteikt, uz ko tas attiecas.',
      'AnonymousPDF atpazīst vārdus, organizācijas, e-pastus, tālruņus, IBAN, identifikatorus un datumus, pēc tam pārveido PDF, katru vērtību aizstājot ar tās iezīmi. Oriģināli tiek noņemti no faila, nevis paslēpti, un viss notiek jūsu pārlūkā — avota dati nekad neatstāj jūsu ierīci.',
    ],
    steps: STEPS,
    faqHeading: 'Biežāk uzdotie jautājumi',
    faq: [
      { q: 'Ar ko pseidonimizācija atšķiras no aizkrāsošanas?', a: 'Aizkrāsošana noslēpj informāciju; pseidonimizācija to aizstāj ar konsekventu iezīmi (Person_1, ORG_1, Date_1), lai dokuments paliktu lasāms, kamēr reālās identitātes pazūd.' },
      { q: 'Vai vienādi vārdi tiek aizstāti konsekventi?', a: 'Jā. Katra tās pašas vērtības parādīšanās saņem to pašu numuru, tāpēc teksta sakarības tiek saglabātas, kamēr identitāte tiek noņemta.' },
      { q: 'Vai oriģinālās vērtības var atjaunot?', a: 'Nē. PDF tiek pārveidots no aizstātā satura, tāpēc oriģinālie vārdi un numuri vairs nav failā.' },
      { q: 'Vai tas ir bez maksas un privāts?', a: 'Jā — bez maksas, bez reģistrācijas un 100% jūsu pārlūkā. Nekas netiek augšupielādēts.' },
    ],
  },

  'gdpr-pdf': {
    navLabel: 'PDF un VDAR',
    seoTitle: 'PDF anonimizēšana VDAR vajadzībām — noņemt personas datus bez maksas | AnonymousPDF',
    seoDescription:
      'Anonimizējiet PDF VDAR vajadzībām: atpazīstiet un noņemiet personas datus — vārdus, kontaktinformāciju, IBAN, identifikatorus — automātiski un 100% jūsu pārlūkā. Praktisks datu minimizēšanas solis. Bez augšupielādes.',
    h1: 'VDAR draudzīga PDF anonimizēšana',
    sub: 'Noņemiet personas datus no PDF, lai atbalstītu VDAR datu minimizēšanu — automātiski un nesūtot neko uz serveri.',
    intro: [
      'VDAR prasa apstrādāt tikai tos personas datus, kas patiešām nepieciešami, un tos aizsargāt. Pirms PDF kopīgošanas, arhivēšanas vai publicēšanas vārdu, kontaktinformācijas un identifikatoru noņemšana ir vienkāršs, efektīvs datu minimizēšanas solis. AnonymousPDF atrod šos datus automātiski un izņem tos no faila.',
      'Tā kā atpazīšana un noņemšana notiek pilnībā jūsu pārlūkā, personas dati nekad netiek pārsūtīti trešajai pusei — tas ir būtiski, kad tieši dokuments ir tas, ko cenšaties aizsargāt. Automātiskā atpazīšana ir spēcīgs pirmais solis, nevis juridiska konsultācija; vienmēr pārbaudiet rezultātu atbilstoši saviem pienākumiem.',
    ],
    steps: STEPS,
    faqHeading: 'Biežāk uzdotie jautājumi',
    faq: [
      { q: 'Vai tas padara manu dokumentu atbilstošu VDAR?', a: 'Tas palīdz ar datu minimizēšanu, noņemot personas datus, taču atbilstība ir atkarīga no visa jūsu procesa. Uztveriet to kā praktisku rīku, nevis juridisku konsultāciju, un pārbaudiet rezultātu.' },
      { q: 'Vai kādi dati tiek sūtīti uz serveri?', a: 'Nē. Viss notiek lokāli jūsu pārlūkā, tāpēc personas dati nekad neatstāj jūsu ierīci.' },
      { q: 'Kādus personas datus tas atpazīst?', a: 'Vārdus un organizācijas, e-pastus, tālruņus, IBAN un karšu numurus, IP adreses, ID un lietu numurus un datumus.' },
      { q: 'Vai dokuments var palikt lasāms?', a: 'Jā — vērtības tiek aizstātas ar neitrālām iezīmēm (piem., Person_1), tāpēc teksts lasās dabiski, nevienu neidentificējot.' },
    ],
  },

  'remove-names-from-pdf': {
    navLabel: 'Noņemt vārdus',
    seoTitle: 'Noņemt vārdus no PDF — bez maksas un automātiski | AnonymousPDF',
    seoDescription:
      'Noņemiet vārdus no PDF automātiski. Ierīcē darbināts MI modelis atpazīst personu un organizāciju vārdus un tos izņem — bez maksas, 100% jūsu pārlūkā, bez augšupielādes.',
    h1: 'Noņemt vārdus no PDF',
    sub: 'Automātiski atpazīstiet un noņemiet personu un organizāciju vārdus no PDF — neaugšupielādējot failu.',
    intro: [
      'Vārdi bieži ir jutīgākā dokumenta daļa un visgrūtāk noķeramā ar vienkāršu meklēt-un-aizstāt. AnonymousPDF izmanto MI modeli jūsu pārlūkā, lai atpazītu personu un organizāciju vārdus — pat tādus, kurus nedomātu meklēt — un izņem tos no faila.',
      'Līdzās vārdiem tas atpazīst arī e-pastus, tālruņus, IBAN, identifikatorus un datumus. Katrs vārds tiek aizstāts ar neitrālu iezīmi, piemēram, Person_1, lai dokuments paliktu lasāms, nevienu neidentificējot. Viss notiek jūsu ierīcē.',
    ],
    steps: STEPS,
    faqHeading: 'Biežāk uzdotie jautājumi',
    faq: [
      { q: 'Kā vārdi tiek atpazīti?', a: 'Daudzvalodu MI modelis (NER) darbojas jūsu pārlūkā un atzīmē personu un organizāciju vārdus papildus uz šabloniem balstītiem datiem, piemēram, e-pastiem un IBAN.' },
      { q: 'Vai tas darbojas ar vārdiem citās valodās?', a: 'Jā — modelis atbalsta vairākas galvenās valodas. Atpazīšana ir ļoti laba, bet ne nevainojama, tāpēc pārbaudiet rezultātu.' },
      { q: 'Vai vārdi patiešām ir prom?', a: 'Jā. PDF tiek pārveidots ar katru aizstāto vārdu, tāpēc oriģināls vairs nav failā.' },
      { q: 'Vai tas ir bez maksas?', a: 'Jā, bez maksas un bez reģistrācijas, pilnībā apstrādāts jūsu pārlūkā.' },
    ],
  },

  'censor-pdf': {
    navLabel: 'Cenzēt PDF',
    seoTitle: 'Cenzēt PDF tiešsaistē — noslēpt jutīgu tekstu bez maksas | AnonymousPDF',
    seoDescription:
      'Cenzējiet PDF bez maksas: automātiski atrodiet un noņemiet jutīgu tekstu — vārdus, e-pastus, numurus — un pārveidojiet failu tā, lai to nevarētu atjaunot. 100% jūsu pārlūkā, bez augšupielādes.',
    h1: 'Cenzēt PDF tiešsaistē',
    sub: 'Automātiski atrodiet un noņemiet jutīgās PDF daļas, pēc tam lejupielādējiet failu, kurā cenzētais saturs patiešām ir pazudis.',
    intro: [
      'PDF cenzēšanai vajadzētu nozīmēt, ka paslēptais teksts patiešām nav lasāms — nevis tikai pārklāts ar lauku, zem kura var kopēt. AnonymousPDF pilnībā noņem jutīgo saturu no faila un pārveido lapu, tāpēc cenzēto informāciju nevar iezīmēt, sameklēt vai atjaunot.',
      'Tas automātiski atpazīst, kas jācenzē — vārdus, organizācijas, e-pastus, tālruņus, IBAN, identifikatorus un datumus — un aizstāj katru elementu ar neitrālu iezīmi. Viss notiek jūsu pārlūkā; oriģinālais dokuments nekad neatstāj jūsu ierīci.',
    ],
    steps: STEPS,
    faqHeading: 'Biežāk uzdotie jautājumi',
    faq: [
      { q: 'Vai cenzēto tekstu var atjaunot?', a: 'Nē. Lapa tiek pārveidota, tāpēc oriģinālais teksts tiek noņemts no faila, nevis paslēpts aiz lauka.' },
      { q: 'Kas tiek cenzēts automātiski?', a: 'Vārdi un organizācijas, e-pasti, tālruņi, IBAN un kartes, IP adreses, ID un lietu numuri un datumi.' },
      { q: 'Vai man jāaugšupielādē fails?', a: 'Nē — viss tiek apstrādāts lokāli jūsu pārlūkā.' },
      { q: 'Vai tas ir bez maksas?', a: 'Jā, bez maksas, bez konta un bez lapu ierobežojuma.' },
    ],
  },

  'black-out-pdf': {
    navLabel: 'Aizmelnot tekstu',
    seoTitle: 'Aizmelnot tekstu PDF failā — bez maksas un pastāvīgi | AnonymousPDF',
    seoDescription:
      'Aizmelnojiet tekstu PDF failā bez maksas. Automātiski atpazīstiet jutīgu informāciju un pastāvīgi noņemiet to no faila — 100% jūsu pārlūkā, bez augšupielādes.',
    h1: 'Aizmelnot tekstu PDF failā',
    sub: 'Pastāvīgi noņemiet jutīgu tekstu no PDF — ne tikai pārklājiet to — automātiski un jūsu pārlūkā.',
    intro: [
      'Melna taisnstūra zīmēšana virs teksta vairumā redaktoru atstāj vārdus zem tā neskartus, kur tos joprojām var kopēt vai meklēt. AnonymousPDF aizmelno informāciju droši: tas noņem pamatā esošo tekstu no faila un pārveido lapu, tāpēc tas patiešām ir prom.',
      'Jums nekas nav jāiezīmē manuāli — rīks automātiski atpazīst jutīgos datus (vārdus, e-pastus, tālruņus, IBAN, identifikatorus, datumus un citus) un noņem tos. Tas darbojas pilnībā jūsu ierīcē, tāpēc konfidenciālie faili paliek privāti.',
    ],
    steps: STEPS,
    faqHeading: 'Biežāk uzdotie jautājumi',
    faq: [
      { q: 'Vai teksts paliek zem melnā lauka?', a: 'Nē. Atšķirībā no uzzīmēta taisnstūra tas noņem tekstu no faila, tāpēc neko nevar nokopēt vai atjaunot.' },
      { q: 'Vai varu izvēlēties, ko aizmelnot?', a: 'Rīks automātiski atpazīst jutīgos datus; vienmēr pārbaudiet rezultātu pirms kopīgošanas.' },
      { q: 'Vai kaut kas tiek augšupielādēts?', a: 'Nē, tas tiek apstrādāts lokāli jūsu pārlūkā.' },
      { q: 'Cik tas maksā?', a: 'Neko — tas ir bez maksas, bez reģistrācijas.' },
    ],
  },

  'hide-information-in-pdf': {
    navLabel: 'Slēpt informāciju',
    seoTitle: 'Slēpt informāciju PDF failā — bez maksas un automātiski | AnonymousPDF',
    seoDescription:
      'Slēpiet jutīgu informāciju PDF failā automātiski un bez maksas. Atpazīstiet un noņemiet vārdus, kontaktinformāciju, kontu un ID numurus — 100% jūsu pārlūkā, bez augšupielādes.',
    h1: 'Slēpt informāciju PDF failā',
    sub: 'Automātiski atrodiet un noņemiet informāciju, ko nevēlaties kopīgot, no PDF — neaugšupielādējot failu.',
    intro: [
      'Dažreiz dokuments jākopīgo, bet daļas jāpatur privātas — vārds, adrese, konta numurs. AnonymousPDF atrod šo informāciju automātiski un noņem to no faila, lai atlikušais būtu droši nosūtāms.',
      'Tas atpazīst kontaktinformāciju, finanšu un ID numurus, IP adreses, datumus un — ar ierīcē darbinātu MI modeli — vārdus, organizācijas un vietas. Paslēptās vērtības tiek aizstātas ar neitrālām iezīmēm, un, tā kā viss notiek jūsu pārlūkā, oriģinālā informācija nekad netiek pārsūtīta.',
    ],
    steps: STEPS,
    faqHeading: 'Biežāk uzdotie jautājumi',
    faq: [
      { q: 'Vai paslēptā informācija tiek noņemta vai tikai pārklāta?', a: 'Noņemta. PDF tiek pārveidots bez oriģinālā teksta, tāpēc to nevar atjaunot.' },
      { q: 'Ko tas var paslēpt?', a: 'Vārdus, organizācijas, e-pastus, tālruņus, IBAN un kartes, IP adreses, ID un lietu numurus un datumus.' },
      { q: 'Vai mans fails tiek augšupielādēts?', a: 'Nē — apstrāde notiek pilnībā lokāli jūsu pārlūkā.' },
      { q: 'Vai tas tiešām ir bez maksas?', a: 'Jā, bez maksas un bez reģistrācijas.' },
    ],
  },

  'remove-personal-information-pdf': {
    navLabel: 'Noņemt personas datus',
    seoTitle: 'Noņemt personas datus no PDF — bez maksas | AnonymousPDF',
    seoDescription:
      'Noņemiet personas datus no PDF automātiski: vārdus, kontaktinformāciju, IBAN, identifikatorus un citus. Bez maksas, 100% jūsu pārlūkā, bez augšupielādes.',
    h1: 'Noņemt personas datus no PDF',
    sub: 'Automātiski izņemiet personas datus no PDF — vārdus, kontaktinformāciju, kontu un ID numurus — nesūtot neko uz serveri.',
    intro: [
      'Personas dati slēpjas vairāk vietās, nekā domājat: parakstos, galvenēs, atsaucēs, kontaktu blokos. AnonymousPDF skenē visu dokumentu un automātiski noņem personas datus, lai jūs to varētu droši atkārtoti izmantot vai kopīgot.',
      'Atpazīšana apvieno precīzu šablonu atbilstību (e-pasti, tālruņi, IBAN, kartes un identifikatori, IP adreses, datumi) ar ierīcē darbinātu MI modeli vārdiem, organizācijām un vietām. Katra vērtība tiek aizstāta ar neitrālu iezīmi, un fails tiek apstrādāts pilnībā jūsu ierīcē.',
    ],
    steps: STEPS,
    faqHeading: 'Biežāk uzdotie jautājumi',
    faq: [
      { q: 'Kas šeit tiek uzskatīts par personas datiem?', a: 'Vārdi un organizācijas, kontaktinformācija, finanšu identifikatori (IBAN, kartes), IP adreses, ID un atsauces numuri un datumi.' },
      { q: 'Vai oriģinālā informācija kaut kur tiek sūtīta?', a: 'Nē. Atpazīšana un noņemšana notiek lokāli jūsu pārlūkā.' },
      { q: 'Vai varu iegūt arī attīrīto tekstu?', a: 'Jā — izmantojiet «Kopēt tekstu» vai «Lejupielādēt tekstu», lai iegūtu anonimizēto tekstu ar iezīmēm.' },
      { q: 'Vai tas atpazīst visu?', a: 'Tas ir spēcīgs automātisks solis, bet ne nevainojams; pārbaudiet rezultātu pirms kopīgošanas, īpaši ar neparastiem formātiem.' },
    ],
  },

  'document-redact': {
    navLabel: 'Aizkrāsot dokumentu',
    seoTitle: 'Aizkrāsot dokumentu tiešsaistē — bez maksas un droši | AnonymousPDF',
    seoDescription:
      'Aizkrāsojiet dokumentu tiešsaistē bez maksas. Atpazīstiet un pastāvīgi noņemiet jutīgus datus no PDF — līgumiem, vēstulēm, izrakstiem — 100% jūsu pārlūkā, bez augšupielādes.',
    h1: 'Aizkrāsot dokumentu — tiešsaistē un droši',
    sub: 'Atpazīstiet un pastāvīgi noņemiet jutīgās PDF dokumentu daļas — neko neaugšupielādējot.',
    intro: [
      'Vai tas būtu līgums, vēstule, rēķins vai oficiāls paziņojums, jutīgas detaļas bieži jānoņem pirms nodošanas tālāk. AnonymousPDF atpazīst šos datus automātiski un noņem tos no dokumenta uz visiem laikiem — ne tikai vizuāli ar lauku, bet no paša faila.',
      'Tas atpazīst e-pastus, tālruņus, IBAN un karšu numurus, IP adreses, ID un lietu numurus un — ar ierīcē darbinātu MI modeli — vārdus, organizācijas un vietas. Apstrāde notiek pilnībā jūsu ierīcē, tāpēc konfidenciāli dokumenti nekad neatstāj jūsu pārlūku.',
    ],
    steps: STEPS,
    faqHeading: 'Biežāk uzdotie jautājumi',
    faq: [
      { q: 'Kādus dokumentus varu aizkrāsot?', a: 'Jebkuru PDF. Ja jūsu dokuments ir Word fails, vispirms saglabājiet to kā PDF.' },
      { q: 'Vai aizkrāsošana ir droša?', a: 'Jā. Aizkrāsotais saturs tiek noņemts no faila, un to nevar atjaunot.' },
      { q: 'Vai dokumenti tiek augšupielādēti?', a: 'Nē — apstrāde notiek lokāli jūsu pārlūkā.' },
      { q: 'Vai tas kaut ko maksā?', a: 'Nē, rīks ir bez maksas un nav nepieciešama reģistrācija.' },
    ],
  },
};
