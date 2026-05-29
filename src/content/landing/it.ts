import type { LandingCopy, Step } from './types';

const STEPS: Step[] = [
  { title: '1. Carica il tuo PDF', body: 'Scegli un file o trascinalo nella pagina. Si apre localmente: niente viene inviato a un server.' },
  { title: '2. Rilevamento automatico', body: 'La corrispondenza di pattern e un modello di IA sul dispositivo individuano il testo sensibile per te.' },
  { title: '3. Scarica o copia', body: 'Ottieni un PDF con il testo davvero rimosso, oppure copia il testo pulito.' },
];

export const it: Record<string, LandingCopy> = {
  'redact-pdf': {
    navLabel: 'Oscurare PDF',
    seoTitle: 'Oscurare un PDF online — gratis, permanente e nel browser | AnonymousPDF',
    seoDescription:
      'Oscura un PDF gratis: nascondi ed elimina in modo permanente nomi, e-mail, numeri di conto e altri dati sensibili, automaticamente e al 100% nel tuo browser. Senza caricamento, senza registrazione.',
    h1: 'Oscurare un PDF online — gratis e permanente',
    sub: 'Nascondi le informazioni sensibili ed eliminale per sempre dal file. Il tuo PDF viene elaborato nel browser e non viene mai caricato.',
    intro: [
      'Oscurare un PDF è più che disegnare un rettangolo nero su un nome. Se il testo sottostante è ancora lì, chiunque può copiarlo o cercarlo. AnonymousPDF rimuove completamente il contenuto sottostante, così le informazioni oscurate non possono essere recuperate.',
      'Carica un documento e lo strumento trova automaticamente i dati sensibili — indirizzi e-mail, numeri di telefono, IBAN e numeri di carta, numeri identificativi e di pratica, oltre a nomi e organizzazioni — e li oscura. Tutto viene eseguito localmente sul tuo dispositivo; nessun file lascia il browser.',
    ],
    steps: STEPS,
    faqHeading: 'Domande frequenti',
    faq: [
      { q: "L'oscuramento è permanente?", a: 'Sì. La pagina viene ricostruita, quindi il testo oscurato non fa più parte del file: non può essere copiato, cercato o recuperato, a differenza di un riquadro nero sopra il testo attivo.' },
      { q: 'I miei file vengono caricati da qualche parte?', a: "No. Tutta l'elaborazione avviene nel browser, sul tuo dispositivo. Il documento non viene mai trasmesso." },
      { q: 'È davvero gratis?', a: 'Sì — senza account, senza e-mail, senza filigrana e senza limiti di pagine.' },
      { q: 'Cosa rileva automaticamente?', a: 'E-mail, telefoni, IBAN, carte, indirizzi IP, URL, numeri identificativi e di pratica comuni e — tramite un modello di IA sul dispositivo — nomi, organizzazioni e luoghi.' },
    ],
  },

  'anonymize-pdf': {
    navLabel: 'Anonimizzare PDF',
    seoTitle: 'Anonimizzare un PDF — rimuovere nomi e dati personali gratis | AnonymousPDF',
    seoDescription:
      'Anonimizza file PDF automaticamente. Rileva e rimuovi nomi, e-mail, telefoni, IBAN e identificativi in pochi secondi — gratis e al 100% nel browser. Niente viene caricato.',
    h1: 'Anonimizzare documenti PDF automaticamente',
    sub: 'Rileva e rimuovi automaticamente i dati personali da un PDF — nomi, contatti, numeri di conto e identificativi — senza caricare nulla.',
    intro: [
      'Anonimizzare un documento significa rimuovere i dati che identificano le persone: nomi, indirizzi, contatti e numeri di riferimento. AnonymousPDF analizza il tuo PDF e li toglie automaticamente, così puoi condividere o archiviare il file senza esporre dati personali.',
      'Il rilevamento combina pattern precisi per i dati strutturati (e-mail, telefoni, IBAN, carte e identificativi) con un modello di IA sul dispositivo per nomi, organizzazioni e luoghi. È un primo passo pratico per la minimizzazione dei dati ai sensi del GDPR — e poiché tutto avviene nel browser, i dati personali non lasciano mai il dispositivo.',
    ],
    steps: STEPS,
    faqHeading: 'Domande frequenti',
    faq: [
      { q: 'Che differenza c’è tra oscurare e anonimizzare?', a: 'Oscurare nasconde contenuti specifici; anonimizzare punta a rimuovere i dati personali che identificano gli individui. Questo strumento fa entrambe le cose.' },
      { q: 'Rimuove i nomi?', a: 'Sì. Un modello di IA nel browser rileva nomi di persone e organizzazioni, oltre ai dati basati su pattern come e-mail e IBAN.' },
      { q: 'Viene caricato qualcosa?', a: 'No — il file viene elaborato localmente e non viene mai inviato da nessuna parte.' },
      { q: 'Rileva tutto?', a: 'Il rilevamento automatico è ottimo ma non perfetto. Controlla sempre il risultato prima di condividere, soprattutto con nomi o formati insoliti.' },
    ],
  },

  'redaction-tool': {
    navLabel: 'Strumento di oscuramento',
    seoTitle: 'Strumento di oscuramento PDF online e gratuito — senza installazione | AnonymousPDF',
    seoDescription:
      'Uno strumento di oscuramento PDF online e gratuito. Trova e rimuovi in modo permanente i dati sensibili — niente da installare, niente da caricare, senza registrazione.',
    h1: 'Uno strumento di oscuramento PDF gratuito',
    sub: 'Software di oscuramento senza installazione. Trova e rimuovi in modo permanente i dati sensibili dai PDF, direttamente nel browser.',
    intro: [
      'Il software di oscuramento tradizionale è legato al desktop, costoso e spesso lascia testo recuperabile. AnonymousPDF è uno strumento di oscuramento basato sul browser: niente da installare, niente da caricare, e il testo oscurato viene davvero rimosso dal file.',
      'Rileva automaticamente i dati sensibili e li oscura, poi ti permette di scaricare un PDF pulito o copiare il testo oscurato. Poiché viene eseguito interamente sul dispositivo, è sicuro anche con documenti riservati.',
    ],
    steps: STEPS,
    faqHeading: 'Domande frequenti',
    faq: [
      { q: 'Devo installare qualcosa?', a: 'No. Funziona in qualsiasi browser moderno, su desktop o mobile.' },
      { q: 'In cosa differisce dal disegnare riquadri neri?', a: 'I riquadri disegnati di solito lasciano il testo sottostante intatto e recuperabile. Questo strumento ricostruisce la pagina, così il contenuto sparisce davvero.' },
      { q: 'È sicuro per file riservati?', a: 'Sì — i file vengono elaborati localmente e non vengono mai caricati.' },
      { q: 'C’è un costo o un limite?', a: 'È gratis, senza registrazione e senza limiti di pagine.' },
    ],
  },

  'data-masking': {
    navLabel: 'Mascheramento dati',
    seoTitle: 'Mascheramento dati per PDF — mascherare i PII online gratis | AnonymousPDF',
    seoDescription:
      'Maschera i dati sensibili nei documenti PDF. Rileva e rimuovi automaticamente i PII — e-mail, telefoni, numeri di conto e identificativi, nomi — gratis e interamente nel browser.',
    h1: 'Mascheramento dati per documenti PDF',
    sub: 'Maschera automaticamente le informazioni personali identificabili (PII) di un PDF — senza inviare i tuoi dati a un servizio cloud.',
    intro: [
      'Il mascheramento dei dati rimuove i valori sensibili affinché un documento possa essere condiviso, esaminato o archiviato senza esporre informazioni personali reali. AnonymousPDF maschera i PII dei PDF rilevandoli e rimuovendoli dal file.',
      'Riconosce identificatori strutturati — indirizzi e-mail, telefoni, IBAN, carte, indirizzi IP e numeri identificativi o di riferimento — e usa un modello di IA sul dispositivo per nomi, organizzazioni e luoghi. Tutto il mascheramento avviene nel browser, quindi i dati originali non vengono mai trasmessi.',
    ],
    steps: STEPS,
    faqHeading: 'Domande frequenti',
    faq: [
      { q: 'Cosa conta come PII qui?', a: 'Contatti, identificatori finanziari (IBAN, carte), identificatori di rete (IP), numeri identificativi e di riferimento, e nomi, organizzazioni e luoghi.' },
      { q: 'I dati originali vengono inviati a un server?', a: 'No. Rilevamento e mascheramento vengono eseguiti localmente nel browser.' },
      { q: 'Posso ottenere il testo mascherato, non solo un PDF?', a: 'Sì — usa «Copia testo» per ottenere il testo mascherato con etichette come [NAME] e [EMAIL].' },
      { q: 'È gratis per uso aziendale?', a: 'Sì, l’uso è gratuito. Per flussi sensibili, controlla sempre il risultato prima di condividere.' },
    ],
  },

  'pseudonymize-pdf': {
    navLabel: 'Pseudonimizzare PDF',
    seoTitle: 'Pseudonimizzare un PDF — sostituire i nomi con Person_1, ORG_1 | AnonymousPDF',
    seoDescription:
      'Pseudonimizza un PDF gratis: sostituisci automaticamente nomi, organizzazioni e altri dati personali con segnaposto coerenti come Person_1 e ORG_1 — 100% nel browser. Niente viene caricato.',
    h1: 'Pseudonimizzare documenti PDF automaticamente',
    sub: 'Sostituisci i dati personali con segnaposto coerenti — lo stesso nome diventa sempre lo stesso Person_1 — senza caricare il file.',
    intro: [
      'La pseudonimizzazione mantiene leggibile un documento spezzando al contempo il legame con le persone reali: invece di cancellare un nome, lo sostituisce con un’etichetta neutra e coerente come Person_1 o ORG_1. Lo stesso valore corrisponde sempre allo stesso segnaposto, così il testo ha ancora senso — ma non si può più capire a chi si riferisce.',
      'AnonymousPDF rileva nomi, organizzazioni, e-mail, telefoni, IBAN, identificativi e date, poi ricostruisce il PDF sostituendo ogni valore con il suo segnaposto. Gli originali vengono rimossi dal file, non nascosti, e tutto avviene nel browser — i dati di origine non lasciano mai il dispositivo.',
    ],
    steps: STEPS,
    faqHeading: 'Domande frequenti',
    faq: [
      { q: 'In cosa differisce la pseudonimizzazione dall’oscuramento?', a: 'L’oscuramento nasconde le informazioni; la pseudonimizzazione le sostituisce con un segnaposto coerente (Person_1, ORG_1, Date_1) così il documento resta leggibile mentre le identità reali spariscono.' },
      { q: 'Gli stessi nomi vengono sostituiti in modo coerente?', a: 'Sì. Ogni occorrenza dello stesso valore riceve lo stesso numero, così le relazioni nel testo si conservano mentre l’identità viene rimossa.' },
      { q: 'I valori originali possono essere recuperati?', a: 'No. Il PDF viene ricostruito dal contenuto sostituito, quindi nomi e numeri originali non sono più nel file.' },
      { q: 'È gratis e privato?', a: 'Sì — gratis, senza registrazione e 100% nel browser. Niente viene caricato.' },
    ],
  },

  'gdpr-pdf': {
    navLabel: 'PDF e GDPR',
    seoTitle: 'Anonimizzazione PDF per il GDPR — rimuovere i dati personali gratis | AnonymousPDF',
    seoDescription:
      'Anonimizza PDF per il GDPR: rileva e rimuovi i dati personali — nomi, contatti, IBAN, identificativi — automaticamente e 100% nel browser. Un passo pratico di minimizzazione. Senza caricamento.',
    h1: 'Anonimizzazione PDF conforme al GDPR',
    sub: 'Rimuovi i dati personali dai PDF per favorire la minimizzazione dei dati del GDPR — automaticamente e senza inviare nulla a un server.',
    intro: [
      'Il GDPR chiede di trattare solo i dati personali realmente necessari e di proteggerli. Prima di condividere, archiviare o pubblicare un PDF, rimuovere nomi, contatti e identificativi è un passo di minimizzazione semplice ed efficace. AnonymousPDF trova questi dati automaticamente e li toglie dal file.',
      'Poiché rilevamento e rimozione vengono eseguiti interamente nel browser, i dati personali non vengono mai trasmessi a terzi — cosa cruciale quando è il documento stesso ciò che vuoi proteggere. Il rilevamento automatico è una buona prima passata, non una consulenza legale; controlla sempre il risultato in base ai tuoi obblighi.',
    ],
    steps: STEPS,
    faqHeading: 'Domande frequenti',
    faq: [
      { q: 'Questo rende il mio documento conforme al GDPR?', a: 'Aiuta con la minimizzazione dei dati rimuovendo i dati personali, ma la conformità dipende dall’intero processo. Consideralo uno strumento pratico, non una consulenza legale, e controlla il risultato.' },
      { q: 'Vengono inviati dati a un server?', a: 'No. Tutto viene eseguito localmente nel browser, quindi i dati personali non lasciano mai il dispositivo.' },
      { q: 'Quali dati personali rileva?', a: 'Nomi e organizzazioni, e-mail, telefoni, IBAN e numeri di carta, indirizzi IP, numeri identificativi e di pratica, e date.' },
      { q: 'Il documento può restare leggibile?', a: 'Sì — i valori vengono sostituiti con segnaposto neutri (es. Person_1), così il testo si legge in modo naturale senza identificare nessuno.' },
    ],
  },

  'remove-names-from-pdf': {
    navLabel: 'Rimuovere i nomi',
    seoTitle: 'Rimuovere i nomi da un PDF — gratis e automatico | AnonymousPDF',
    seoDescription:
      'Rimuovi i nomi da un PDF automaticamente. Un modello di IA sul dispositivo rileva nomi di persone e organizzazioni e li toglie — gratis, 100% nel browser, senza caricamento.',
    h1: 'Rimuovere i nomi da un PDF',
    sub: 'Rileva e rimuovi automaticamente i nomi di persone e organizzazioni da un PDF — senza caricare il file.',
    intro: [
      'I nomi sono spesso la parte più sensibile di un documento e la più difficile da cogliere con un semplice trova-e-sostituisci. AnonymousPDF usa un modello di IA nel browser per riconoscere nomi di persone e organizzazioni — anche quelli che non penseresti di cercare — e li rimuove dal file.',
      'Oltre ai nomi rileva anche e-mail, telefoni, IBAN, identificativi e date. Ogni nome viene sostituito con un segnaposto neutro come Person_1, così il documento resta leggibile senza identificare nessuno. Tutto viene eseguito sul dispositivo.',
    ],
    steps: STEPS,
    faqHeading: 'Domande frequenti',
    faq: [
      { q: 'Come vengono rilevati i nomi?', a: 'Un modello di IA multilingue (NER) viene eseguito nel browser e segnala nomi di persone e organizzazioni, oltre ai dati basati su pattern come e-mail e IBAN.' },
      { q: 'Funziona con nomi in altre lingue?', a: 'Sì — il modello supporta diverse lingue principali. Il rilevamento è ottimo ma non perfetto, quindi controlla il risultato.' },
      { q: 'I nomi sono davvero spariti?', a: 'Sì. Il PDF viene ricostruito con ogni nome sostituito, quindi l’originale non è più nel file.' },
      { q: 'È gratis?', a: 'Sì, gratis e senza registrazione, elaborato interamente nel browser.' },
    ],
  },

  'censor-pdf': {
    navLabel: 'Censurare PDF',
    seoTitle: 'Censurare un PDF online — nascondere il testo sensibile gratis | AnonymousPDF',
    seoDescription:
      'Censura un PDF gratis: trova e rimuovi automaticamente il testo sensibile — nomi, e-mail, numeri — e ricostruisci il file così che non sia recuperabile. 100% nel browser, senza caricamento.',
    h1: 'Censurare un PDF online',
    sub: 'Trova e rimuovi automaticamente le parti sensibili di un PDF e scarica un file in cui il contenuto censurato è davvero sparito.',
    intro: [
      'Censurare un PDF dovrebbe significare che il testo nascosto è davvero illeggibile — non solo coperto da un riquadro sotto cui si può copiare. AnonymousPDF rimuove completamente il contenuto sensibile dal file e ricostruisce la pagina, così le informazioni censurate non possono essere selezionate, cercate o recuperate.',
      'Rileva automaticamente cosa censurare — nomi, organizzazioni, e-mail, telefoni, IBAN, identificativi e date — e sostituisce ogni elemento con un segnaposto neutro. Tutto avviene nel browser; il documento originale non lascia mai il dispositivo.',
    ],
    steps: STEPS,
    faqHeading: 'Domande frequenti',
    faq: [
      { q: 'Il testo censurato è recuperabile?', a: 'No. La pagina viene ricostruita, quindi il testo originale viene rimosso dal file invece di essere nascosto dietro un riquadro.' },
      { q: 'Cosa viene censurato automaticamente?', a: 'Nomi e organizzazioni, e-mail, telefoni, IBAN e carte, indirizzi IP, numeri identificativi e di pratica, e date.' },
      { q: 'Devo caricare il mio file?', a: 'No — tutto viene elaborato localmente nel browser.' },
      { q: 'È gratis?', a: 'Sì, gratis, senza account e senza limiti di pagine.' },
    ],
  },

  'black-out-pdf': {
    navLabel: 'Annerire PDF',
    seoTitle: 'Annerire il testo in un PDF — gratis e permanente | AnonymousPDF',
    seoDescription:
      'Annerisci il testo in un PDF gratis. Rileva automaticamente le informazioni sensibili e rimuovile in modo permanente dal file — 100% nel browser, senza caricamento.',
    h1: 'Annerire il testo in un PDF',
    sub: 'Rimuovi in modo permanente il testo sensibile da un PDF — non solo coprirlo — automaticamente e nel browser.',
    intro: [
      'Disegnare un rettangolo nero sul testo nella maggior parte degli editor lascia le parole intatte sotto, dove possono ancora essere copiate o cercate. AnonymousPDF annerisce le informazioni in modo sicuro: rimuove il testo sottostante dal file e ricostruisce la pagina, così è davvero sparito.',
      'Non devi segnare nulla a mano — lo strumento rileva i dati sensibili automaticamente (nomi, e-mail, telefoni, IBAN, identificativi, date e altro) e li rimuove. Viene eseguito interamente sul dispositivo, così i file riservati restano privati.',
    ],
    steps: STEPS,
    faqHeading: 'Domande frequenti',
    faq: [
      { q: 'Il testo resta sotto il riquadro nero?', a: 'No. A differenza di un rettangolo disegnato, questo rimuove il testo dal file, quindi nulla può essere copiato o recuperato.' },
      { q: 'Posso scegliere cosa annerire?', a: 'Lo strumento rileva i dati sensibili automaticamente; controlla sempre il risultato prima di condividere.' },
      { q: 'Viene caricato qualcosa?', a: 'No, viene elaborato localmente nel browser.' },
      { q: 'Quanto costa?', a: 'Niente — è gratis, senza registrazione.' },
    ],
  },

  'hide-information-in-pdf': {
    navLabel: 'Nascondere informazioni',
    seoTitle: 'Nascondere informazioni in un PDF — gratis e automatico | AnonymousPDF',
    seoDescription:
      'Nascondi informazioni sensibili in un PDF automaticamente e gratis. Rileva e rimuovi nomi, contatti, numeri di conto e identificativi — 100% nel browser, senza caricamento.',
    h1: 'Nascondere informazioni in un PDF',
    sub: 'Trova e rimuovi automaticamente le informazioni che non vuoi condividere da un PDF — senza caricare il file.',
    intro: [
      'A volte devi condividere un documento ma tenere private alcune parti — un nome, un indirizzo, un numero di conto. AnonymousPDF trova queste informazioni automaticamente e le rimuove dal file, così ciò che resta è sicuro da inviare.',
      'Riconosce contatti, numeri finanziari e identificativi, indirizzi IP, date e — tramite un modello di IA sul dispositivo — nomi, organizzazioni e luoghi. I valori nascosti vengono sostituiti con segnaposto neutri e, poiché tutto avviene nel browser, l’informazione originale non viene mai trasmessa.',
    ],
    steps: STEPS,
    faqHeading: 'Domande frequenti',
    faq: [
      { q: 'L’informazione nascosta viene rimossa o solo coperta?', a: 'Rimossa. Il PDF viene ricostruito senza il testo originale, quindi non può essere recuperato.' },
      { q: 'Cosa può nascondere?', a: 'Nomi, organizzazioni, e-mail, telefoni, IBAN e carte, indirizzi IP, numeri identificativi e di pratica, e date.' },
      { q: 'Il mio file viene caricato?', a: 'No — l’elaborazione è interamente locale nel browser.' },
      { q: 'È davvero gratis?', a: 'Sì, gratis e senza registrazione.' },
    ],
  },

  'remove-personal-information-pdf': {
    navLabel: 'Rimuovere dati personali',
    seoTitle: 'Rimuovere i dati personali da un PDF — gratis | AnonymousPDF',
    seoDescription:
      'Rimuovi i dati personali da un PDF automaticamente: nomi, contatti, IBAN, identificativi e altro. Gratis, 100% nel browser, senza caricamento.',
    h1: 'Rimuovere i dati personali da un PDF',
    sub: 'Estrai i dati personali da un PDF automaticamente — nomi, contatti, numeri di conto e identificativi — senza inviare nulla a un server.',
    intro: [
      'I dati personali si nascondono in più punti di quanto pensi: firme, intestazioni, riferimenti, blocchi di contatto. AnonymousPDF analizza l’intero documento e rimuove i dati personali automaticamente, così puoi riutilizzarlo o condividerlo in sicurezza.',
      'Il rilevamento abbina una corrispondenza di pattern precisa (e-mail, telefoni, IBAN, carte e identificativi, indirizzi IP, date) a un modello di IA sul dispositivo per nomi, organizzazioni e luoghi. Ogni valore viene sostituito con un segnaposto neutro e il file viene elaborato interamente sul dispositivo.',
    ],
    steps: STEPS,
    faqHeading: 'Domande frequenti',
    faq: [
      { q: 'Cosa conta come dati personali qui?', a: 'Nomi e organizzazioni, contatti, identificatori finanziari (IBAN, carte), indirizzi IP, numeri identificativi e di riferimento, e date.' },
      { q: 'L’informazione originale viene inviata da qualche parte?', a: 'No. Rilevamento e rimozione vengono eseguiti localmente nel browser.' },
      { q: 'Posso ottenere anche il testo pulito?', a: 'Sì — usa «Copia testo» o «Scarica testo» per ottenere il testo anonimizzato con segnaposto.' },
      { q: 'Rileva tutto?', a: 'È una buona passata automatica ma non perfetta; controlla il risultato prima di condividere, soprattutto con formati insoliti.' },
    ],
  },

  'document-redact': {
    navLabel: 'Oscurare un documento',
    seoTitle: 'Oscurare un documento online — gratis e sicuro | AnonymousPDF',
    seoDescription:
      'Oscura un documento online gratis. Rileva e rimuovi in modo permanente i dati sensibili dai PDF — contratti, lettere, estratti — 100% nel browser, senza caricamento.',
    h1: 'Oscurare un documento — online e sicuro',
    sub: 'Rileva e rimuovi in modo permanente le parti sensibili dei tuoi documenti PDF — senza caricare nulla.',
    intro: [
      'Che si tratti di un contratto, una lettera, una fattura o un atto ufficiale, i dettagli sensibili spesso devono essere rimossi prima di trasmetterlo. AnonymousPDF rileva questi dati automaticamente e li rimuove dal documento per sempre — non solo visivamente con un riquadro, ma dal file stesso.',
      'Riconosce e-mail, telefoni, IBAN e numeri di carta, indirizzi IP, numeri identificativi e di pratica, e — tramite un modello di IA sul dispositivo — nomi, organizzazioni e luoghi. L’elaborazione avviene interamente sul dispositivo, così i documenti riservati non lasciano mai il browser.',
    ],
    steps: STEPS,
    faqHeading: 'Domande frequenti',
    faq: [
      { q: 'Quali documenti posso oscurare?', a: 'Qualsiasi PDF. Se il documento è un file Word, salvalo prima come PDF.' },
      { q: 'L’oscuramento è sicuro?', a: 'Sì. Il contenuto oscurato viene rimosso dal file e non può essere recuperato.' },
      { q: 'I documenti vengono caricati?', a: 'No — l’elaborazione avviene localmente nel browser.' },
      { q: 'Ha un costo?', a: 'No, lo strumento è gratuito e non richiede registrazione.' },
    ],
  },
};
