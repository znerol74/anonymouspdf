import type { LandingCopy, Step } from './types';

const STEPS: Step[] = [
  { title: '1. Déposez votre PDF', body: "Choisissez un fichier ou glissez-le sur la page. Il s'ouvre localement : rien n'est envoyé à un serveur." },
  { title: '2. Détection automatique', body: "La correspondance de motifs et un modèle d'IA sur l'appareil localisent le texte sensible pour vous." },
  { title: '3. Télécharger ou copier', body: 'Obtenez un PDF dont le texte est vraiment supprimé, ou copiez le texte nettoyé.' },
];

export const fr: Record<string, LandingCopy> = {
  'redact-pdf': {
    navLabel: 'Caviarder un PDF',
    seoTitle: 'Caviarder un PDF en ligne — gratuit, permanent et dans votre navigateur | AnonymousPDF',
    seoDescription:
      'Caviardez un PDF gratuitement : masquez et supprimez définitivement noms, e-mails, numéros de compte et autres données sensibles, automatiquement et 100 % dans votre navigateur. Sans envoi, sans inscription.',
    h1: 'Caviarder un PDF en ligne — gratuit et permanent',
    sub: "Masquez les informations sensibles et supprimez-les définitivement du fichier. Votre PDF est traité dans votre navigateur et n'est jamais envoyé.",
    intro: [
      "Caviarder un PDF, c'est plus que dessiner un rectangle noir sur un nom. Si le texte en dessous est toujours là, n'importe qui peut le copier ou le rechercher. AnonymousPDF supprime entièrement le contenu sous-jacent, de sorte que les informations caviardées ne peuvent pas être récupérées.",
      "Importez un document et l'outil trouve automatiquement les données sensibles — adresses e-mail, numéros de téléphone, IBAN et numéros de carte, numéros d'identification et de dossier, ainsi que noms et organisations — et les masque. Tout s'exécute localement sur votre appareil ; aucun fichier ne quitte votre navigateur.",
    ],
    steps: STEPS,
    faqHeading: 'Questions fréquentes',
    faq: [
      { q: 'Le caviardage est-il permanent ?', a: 'Oui. La page est reconstruite, de sorte que le texte caviardé ne fait plus partie du fichier : il ne peut être ni copié, ni recherché, ni récupéré, contrairement à un cadre noir posé sur du texte actif.' },
      { q: 'Mes fichiers sont-ils envoyés quelque part ?', a: 'Non. Tout le traitement se fait dans votre navigateur, sur votre propre appareil. Votre document n’est jamais transmis.' },
      { q: 'Est-ce vraiment gratuit ?', a: 'Oui — sans compte, sans e-mail, sans filigrane et sans limite de pages.' },
      { q: 'Que détecte-t-il automatiquement ?', a: "E-mails, téléphones, IBAN, cartes, adresses IP, URL, numéros d'identification et de dossier courants et — via un modèle d'IA sur l'appareil — noms, organisations et lieux." },
    ],
  },

  'anonymize-pdf': {
    navLabel: 'Anonymiser un PDF',
    seoTitle: 'Anonymiser un PDF — supprimer noms et données personnelles gratuitement | AnonymousPDF',
    seoDescription:
      'Anonymisez des fichiers PDF automatiquement. Détectez et supprimez noms, e-mails, téléphones, IBAN et identifiants en quelques secondes — gratuit et 100 % dans votre navigateur. Rien n’est envoyé.',
    h1: 'Anonymiser des documents PDF automatiquement',
    sub: 'Détectez et supprimez automatiquement les données personnelles d’un PDF — noms, coordonnées, numéros de compte et d’identification — sans rien importer.',
    intro: [
      'Anonymiser un document, c’est supprimer les éléments qui identifient les personnes : noms, adresses, coordonnées et numéros de référence. AnonymousPDF analyse votre PDF et les retire automatiquement, pour que vous puissiez partager ou archiver le fichier sans exposer de données personnelles.',
      "La détection combine une correspondance de motifs précise pour les données structurées (e-mails, téléphones, IBAN, cartes et identifiants) avec un modèle d'IA sur l'appareil pour les noms, organisations et lieux. C’est une première étape pratique de minimisation des données au titre du RGPD — et comme tout s’exécute dans votre navigateur, les données personnelles ne quittent jamais votre appareil.",
    ],
    steps: STEPS,
    faqHeading: 'Questions fréquentes',
    faq: [
      { q: 'Quelle différence entre caviarder et anonymiser ?', a: 'Le caviardage masque des contenus précis ; l’anonymisation vise à supprimer les données personnelles qui identifient les individus. Cet outil fait les deux.' },
      { q: 'Supprime-t-il les noms ?', a: "Oui. Un modèle d'IA dans votre navigateur détecte les noms de personnes et d’organisations, en plus des données par motifs comme les e-mails et IBAN." },
      { q: 'Quelque chose est-il envoyé ?', a: 'Non — votre fichier est traité localement et n’est jamais envoyé nulle part.' },
      { q: 'Détecte-t-il tout ?', a: 'La détection automatique est très bonne mais pas parfaite. Vérifiez toujours le résultat avant de partager, surtout avec des noms ou formats inhabituels.' },
    ],
  },

  'redaction-tool': {
    navLabel: 'Outil de caviardage',
    seoTitle: 'Outil de caviardage de PDF en ligne et gratuit — sans installation | AnonymousPDF',
    seoDescription:
      'Un outil de caviardage de PDF en ligne et gratuit. Trouvez et supprimez définitivement les données sensibles — rien à installer, rien à envoyer, sans inscription.',
    h1: 'Un outil de caviardage de PDF gratuit',
    sub: 'Un logiciel de caviardage sans installation. Trouvez et supprimez définitivement les données sensibles de vos PDF, directement dans votre navigateur.',
    intro: [
      "Les logiciels de caviardage classiques sont liés au bureau, coûteux et laissent souvent du texte récupérable. AnonymousPDF est un outil de caviardage basé sur le navigateur : rien à installer, rien à envoyer, et le texte caviardé est réellement supprimé du fichier.",
      "Il détecte automatiquement les données sensibles et les masque, puis vous permet de télécharger un PDF propre ou de copier le texte caviardé. Comme il s'exécute entièrement sur votre appareil, il est sûr même pour des documents confidentiels.",
    ],
    steps: STEPS,
    faqHeading: 'Questions fréquentes',
    faq: [
      { q: 'Dois-je installer quelque chose ?', a: 'Non. Il fonctionne dans tout navigateur moderne, sur ordinateur ou mobile.' },
      { q: 'En quoi est-ce différent de dessiner des cadres noirs ?', a: 'Les cadres dessinés laissent en général le texte dessous intact et récupérable. Cet outil reconstruit la page, de sorte que le contenu disparaît vraiment.' },
      { q: 'Est-ce sûr pour des fichiers confidentiels ?', a: 'Oui — les fichiers sont traités localement et ne sont jamais envoyés.' },
      { q: 'Y a-t-il un coût ou une limite ?', a: 'C’est gratuit, sans inscription et sans limite de pages.' },
    ],
  },

  'data-masking': {
    navLabel: 'Masquage de données',
    seoTitle: 'Masquage de données pour PDF — masquer les PII en ligne gratuitement | AnonymousPDF',
    seoDescription:
      'Masquez les données sensibles dans des documents PDF. Détectez et supprimez automatiquement les PII — e-mails, téléphones, numéros de compte et d’identification, noms — gratuit et entièrement dans votre navigateur.',
    h1: 'Masquage de données pour documents PDF',
    sub: 'Masquez automatiquement les informations personnelles identifiables (PII) d’un PDF — sans envoyer vos données à un service cloud.',
    intro: [
      'Le masquage de données supprime les valeurs sensibles afin qu’un document puisse être partagé, examiné ou archivé sans exposer de vraies informations personnelles. AnonymousPDF masque les PII des PDF en les détectant et en les supprimant du fichier.',
      "Il reconnaît les identifiants structurés — adresses e-mail, téléphones, IBAN, cartes, adresses IP et numéros d’identification ou de référence — et utilise un modèle d'IA sur l'appareil pour les noms, organisations et lieux. Tout le masquage se fait dans votre navigateur, donc les données d’origine ne sont jamais transmises.",
    ],
    steps: STEPS,
    faqHeading: 'Questions fréquentes',
    faq: [
      { q: 'Qu’est-ce qui compte comme PII ici ?', a: 'Coordonnées, identifiants financiers (IBAN, cartes), identifiants réseau (IP), numéros d’identification et de référence, et noms, organisations et lieux.' },
      { q: 'Les données d’origine sont-elles envoyées à un serveur ?', a: 'Non. La détection et le masquage s’exécutent localement dans votre navigateur.' },
      { q: 'Puis-je obtenir le texte masqué, pas seulement un PDF ?', a: 'Oui — utilisez « Copier le texte » pour obtenir le texte masqué avec des étiquettes comme [NAME] et [EMAIL].' },
      { q: 'Est-ce gratuit pour un usage professionnel ?', a: 'Oui, l’utilisation est gratuite. Pour les flux sensibles, vérifiez toujours le résultat avant de partager.' },
    ],
  },

  'pseudonymize-pdf': {
    navLabel: 'Pseudonymiser un PDF',
    seoTitle: 'Pseudonymiser un PDF — remplacer les noms par Person_1, ORG_1 | AnonymousPDF',
    seoDescription:
      'Pseudonymisez un PDF gratuitement : remplacez automatiquement noms, organisations et autres données personnelles par des marqueurs cohérents comme Person_1 et ORG_1 — 100 % dans votre navigateur. Rien n’est envoyé.',
    h1: 'Pseudonymiser des documents PDF automatiquement',
    sub: 'Remplacez les données personnelles par des marqueurs cohérents — le même nom devient toujours le même Person_1 — sans importer votre fichier.',
    intro: [
      'La pseudonymisation garde un document lisible tout en rompant le lien avec des personnes réelles : au lieu de supprimer un nom, on le remplace par une étiquette neutre et cohérente comme Person_1 ou ORG_1. La même valeur correspond toujours au même marqueur, donc le texte garde du sens — vous ne pouvez simplement plus savoir de qui il s’agit.',
      "AnonymousPDF détecte noms, organisations, e-mails, téléphones, IBAN, identifiants et dates, puis reconstruit le PDF en remplaçant chaque valeur par son marqueur. Les originaux sont supprimés du fichier, pas cachés, et tout se passe dans votre navigateur — les données sources ne quittent jamais votre appareil.",
    ],
    steps: STEPS,
    faqHeading: 'Questions fréquentes',
    faq: [
      { q: 'En quoi la pseudonymisation diffère-t-elle du caviardage ?', a: 'Le caviardage masque l’information ; la pseudonymisation la remplace par un marqueur cohérent (Person_1, ORG_1, Date_1) afin que le document reste lisible tandis que les identités réelles disparaissent.' },
      { q: 'Les mêmes noms sont-ils remplacés de façon cohérente ?', a: 'Oui. Chaque occurrence de la même valeur reçoit le même numéro, ce qui préserve les relations du texte tout en supprimant l’identité.' },
      { q: 'Les valeurs d’origine peuvent-elles être récupérées ?', a: 'Non. Le PDF est reconstruit à partir du contenu remplacé, donc les noms et numéros d’origine ne sont plus dans le fichier.' },
      { q: 'Est-ce gratuit et privé ?', a: 'Oui — gratuit, sans inscription et 100 % dans votre navigateur. Rien n’est envoyé.' },
    ],
  },

  'gdpr-pdf': {
    navLabel: 'PDF et RGPD',
    seoTitle: 'Anonymisation de PDF pour le RGPD — supprimer les données personnelles gratuitement | AnonymousPDF',
    seoDescription:
      'Anonymisez des PDF pour le RGPD : détectez et supprimez les données personnelles — noms, coordonnées, IBAN, identifiants — automatiquement et 100 % dans votre navigateur. Une étape pratique de minimisation. Sans envoi.',
    h1: 'Anonymisation de PDF compatible RGPD',
    sub: 'Supprimez les données personnelles des PDF pour favoriser la minimisation des données du RGPD — automatiquement et sans rien envoyer à un serveur.',
    intro: [
      'Le RGPD demande de ne traiter que les données personnelles réellement nécessaires et de les protéger. Avant de partager, archiver ou publier un PDF, supprimer noms, coordonnées et identifiants est une étape de minimisation simple et efficace. AnonymousPDF trouve ces données automatiquement et les retire du fichier.',
      'Comme la détection et la suppression s’exécutent entièrement dans votre navigateur, les données personnelles ne sont jamais transmises à un tiers — essentiel lorsque c’est le document lui-même que vous cherchez à protéger. La détection automatique est une bonne première passe, pas un conseil juridique ; vérifiez toujours le résultat selon vos obligations.',
    ],
    steps: STEPS,
    faqHeading: 'Questions fréquentes',
    faq: [
      { q: 'Cela rend-il mon document conforme au RGPD ?', a: 'Cela aide à la minimisation des données en supprimant les données personnelles, mais la conformité dépend de l’ensemble de votre processus. Considérez-le comme un outil pratique, pas un conseil juridique, et vérifiez le résultat.' },
      { q: 'Des données sont-elles envoyées à un serveur ?', a: 'Non. Tout s’exécute localement dans votre navigateur, donc les données personnelles ne quittent jamais votre appareil.' },
      { q: 'Quelles données personnelles détecte-t-il ?', a: 'Noms et organisations, e-mails, téléphones, IBAN et numéros de carte, adresses IP, numéros d’identification et de dossier, et dates.' },
      { q: 'Le document peut-il rester lisible ?', a: 'Oui — les valeurs sont remplacées par des marqueurs neutres (p. ex. Person_1), donc le texte se lit naturellement sans identifier personne.' },
    ],
  },

  'remove-names-from-pdf': {
    navLabel: 'Supprimer les noms',
    seoTitle: 'Supprimer les noms d’un PDF — gratuit et automatique | AnonymousPDF',
    seoDescription:
      'Supprimez les noms d’un PDF automatiquement. Un modèle d’IA sur l’appareil détecte les noms de personnes et d’organisations et les retire — gratuit, 100 % dans votre navigateur, sans envoi.',
    h1: 'Supprimer les noms d’un PDF',
    sub: 'Détectez et supprimez automatiquement les noms de personnes et d’organisations d’un PDF — sans importer le fichier.',
    intro: [
      "Les noms sont souvent l’élément le plus sensible d’un document, et le plus difficile à repérer par un simple rechercher-remplacer. AnonymousPDF utilise un modèle d'IA dans votre navigateur pour reconnaître les noms de personnes et d’organisations — même ceux qu’on ne penserait pas à chercher — et les retire du fichier.",
      'Outre les noms, il détecte aussi les e-mails, téléphones, IBAN, identifiants et dates. Chaque nom est remplacé par un marqueur neutre comme Person_1, afin que le document reste lisible sans identifier personne. Tout s’exécute sur votre appareil.',
    ],
    steps: STEPS,
    faqHeading: 'Questions fréquentes',
    faq: [
      { q: 'Comment les noms sont-ils détectés ?', a: 'Un modèle d’IA multilingue (NER) s’exécute dans votre navigateur et repère les noms de personnes et d’organisations, en plus des données par motifs comme les e-mails et IBAN.' },
      { q: 'Fonctionne-t-il avec des noms dans d’autres langues ?', a: 'Oui — le modèle prend en charge plusieurs grandes langues. La détection est très bonne mais pas parfaite, vérifiez le résultat.' },
      { q: 'Les noms ont-ils vraiment disparu ?', a: 'Oui. Le PDF est reconstruit avec chaque nom remplacé, donc l’original n’est plus dans le fichier.' },
      { q: 'Est-ce gratuit ?', a: 'Oui, gratuit et sans inscription, traité entièrement dans votre navigateur.' },
    ],
  },

  'censor-pdf': {
    navLabel: 'Censurer un PDF',
    seoTitle: 'Censurer un PDF en ligne — masquer le texte sensible gratuitement | AnonymousPDF',
    seoDescription:
      'Censurez un PDF gratuitement : trouvez et supprimez automatiquement le texte sensible — noms, e-mails, numéros — et reconstruisez le fichier pour qu’il soit irrécupérable. 100 % dans votre navigateur, sans envoi.',
    h1: 'Censurer un PDF en ligne',
    sub: 'Trouvez et supprimez automatiquement les parties sensibles d’un PDF, puis téléchargez un fichier où le contenu censuré a vraiment disparu.',
    intro: [
      "Censurer un PDF devrait signifier que le texte caché est réellement illisible — pas seulement couvert par un cadre sous lequel on peut copier. AnonymousPDF supprime entièrement le contenu sensible du fichier et reconstruit la page, de sorte que les informations censurées ne peuvent être ni sélectionnées, ni recherchées, ni récupérées.",
      'Il détecte automatiquement ce qu’il faut censurer — noms, organisations, e-mails, téléphones, IBAN, identifiants et dates — et remplace chaque élément par un marqueur neutre. Tout se passe dans votre navigateur ; le document d’origine ne quitte jamais votre appareil.',
    ],
    steps: STEPS,
    faqHeading: 'Questions fréquentes',
    faq: [
      { q: 'Le texte censuré est-il récupérable ?', a: 'Non. La page est reconstruite, donc le texte d’origine est supprimé du fichier au lieu d’être caché derrière un cadre.' },
      { q: 'Qu’est-ce qui est censuré automatiquement ?', a: 'Noms et organisations, e-mails, téléphones, IBAN et cartes, adresses IP, numéros d’identification et de dossier, et dates.' },
      { q: 'Dois-je importer mon fichier ?', a: 'Non — tout est traité localement dans votre navigateur.' },
      { q: 'Est-ce gratuit ?', a: 'Oui, gratuit, sans compte et sans limite de pages.' },
    ],
  },

  'black-out-pdf': {
    navLabel: 'Noircir un PDF',
    seoTitle: 'Noircir du texte dans un PDF — gratuit et permanent | AnonymousPDF',
    seoDescription:
      'Noircissez du texte dans un PDF gratuitement. Détectez automatiquement les informations sensibles et supprimez-les définitivement du fichier — 100 % dans votre navigateur, sans envoi.',
    h1: 'Noircir du texte dans un PDF',
    sub: 'Supprimez définitivement le texte sensible d’un PDF — pas seulement le couvrir — automatiquement et dans votre navigateur.',
    intro: [
      'Dessiner un rectangle noir sur du texte dans la plupart des éditeurs laisse les mots intacts en dessous, où ils peuvent encore être copiés ou recherchés. AnonymousPDF noircit l’information de façon sûre : il supprime le texte sous-jacent du fichier et reconstruit la page, de sorte qu’il a vraiment disparu.',
      "Vous n’avez rien à marquer à la main — l’outil détecte les données sensibles automatiquement (noms, e-mails, téléphones, IBAN, identifiants, dates et plus) et les supprime. Il s'exécute entièrement sur votre appareil, donc les fichiers confidentiels restent privés.",
    ],
    steps: STEPS,
    faqHeading: 'Questions fréquentes',
    faq: [
      { q: 'Le texte reste-t-il sous le cadre noir ?', a: 'Non. Contrairement à un rectangle dessiné, ceci supprime le texte du fichier, donc rien ne peut être copié ni récupéré.' },
      { q: 'Puis-je choisir ce qui est noirci ?', a: 'L’outil détecte les données sensibles automatiquement ; vérifiez toujours le résultat avant de partager.' },
      { q: 'Quelque chose est-il envoyé ?', a: 'Non, c’est traité localement dans votre navigateur.' },
      { q: 'Combien ça coûte ?', a: 'Rien — c’est gratuit, sans inscription.' },
    ],
  },

  'hide-information-in-pdf': {
    navLabel: 'Masquer des informations',
    seoTitle: 'Masquer des informations dans un PDF — gratuit et automatique | AnonymousPDF',
    seoDescription:
      'Masquez des informations sensibles dans un PDF automatiquement et gratuitement. Détectez et supprimez noms, coordonnées, numéros de compte et d’identification — 100 % dans votre navigateur, sans envoi.',
    h1: 'Masquer des informations dans un PDF',
    sub: 'Trouvez et supprimez automatiquement les informations que vous ne voulez pas partager dans un PDF — sans importer le fichier.',
    intro: [
      'Parfois, vous devez partager un document tout en gardant certaines parties privées — un nom, une adresse, un numéro de compte. AnonymousPDF trouve ces informations automatiquement et les supprime du fichier, de sorte que le reste peut être envoyé en toute sécurité.',
      "Il reconnaît coordonnées, numéros financiers et d’identification, adresses IP, dates et — via un modèle d'IA sur l'appareil — noms, organisations et lieux. Les valeurs masquées sont remplacées par des marqueurs neutres, et comme tout s’exécute dans votre navigateur, l’information d’origine n’est jamais transmise.",
    ],
    steps: STEPS,
    faqHeading: 'Questions fréquentes',
    faq: [
      { q: 'L’information masquée est-elle supprimée ou seulement couverte ?', a: 'Supprimée. Le PDF est reconstruit sans le texte d’origine, donc il ne peut pas être récupéré.' },
      { q: 'Que peut-il masquer ?', a: 'Noms, organisations, e-mails, téléphones, IBAN et cartes, adresses IP, numéros d’identification et de dossier, et dates.' },
      { q: 'Mon fichier est-il importé ?', a: 'Non — le traitement est entièrement local à votre navigateur.' },
      { q: 'Est-ce vraiment gratuit ?', a: 'Oui, gratuit et sans inscription.' },
    ],
  },

  'remove-personal-information-pdf': {
    navLabel: 'Données personnelles',
    seoTitle: 'Supprimer les données personnelles d’un PDF — gratuit | AnonymousPDF',
    seoDescription:
      'Supprimez les données personnelles d’un PDF automatiquement : noms, coordonnées, IBAN, identifiants et plus. Gratuit, 100 % dans votre navigateur, sans envoi.',
    h1: 'Supprimer les données personnelles d’un PDF',
    sub: 'Extrayez les données personnelles d’un PDF automatiquement — noms, coordonnées, numéros de compte et d’identification — sans rien envoyer à un serveur.',
    intro: [
      'Les données personnelles se cachent à plus d’endroits qu’on ne le pense : signatures, en-têtes, références, blocs de contact. AnonymousPDF analyse tout le document et supprime les données personnelles automatiquement, pour que vous puissiez le réutiliser ou le partager en toute sécurité.',
      "La détection associe une correspondance de motifs précise (e-mails, téléphones, IBAN, cartes et identifiants, adresses IP, dates) à un modèle d'IA sur l'appareil pour les noms, organisations et lieux. Chaque valeur est remplacée par un marqueur neutre, et le fichier est traité entièrement sur votre appareil.",
    ],
    steps: STEPS,
    faqHeading: 'Questions fréquentes',
    faq: [
      { q: 'Qu’est-ce qui compte comme données personnelles ici ?', a: 'Noms et organisations, coordonnées, identifiants financiers (IBAN, cartes), adresses IP, numéros d’identification et de référence, et dates.' },
      { q: 'L’information d’origine est-elle envoyée quelque part ?', a: 'Non. La détection et la suppression s’exécutent localement dans votre navigateur.' },
      { q: 'Puis-je obtenir aussi le texte nettoyé ?', a: 'Oui — utilisez « Copier le texte » ou « Télécharger le texte » pour obtenir le texte anonymisé avec des marqueurs.' },
      { q: 'Détecte-t-il tout ?', a: 'C’est une bonne passe automatique mais pas parfaite ; vérifiez le résultat avant de partager, surtout avec des formats inhabituels.' },
    ],
  },

  'document-redact': {
    navLabel: 'Caviarder un document',
    seoTitle: 'Caviarder un document en ligne — gratuit et sécurisé | AnonymousPDF',
    seoDescription:
      'Caviardez un document en ligne gratuitement. Détectez et supprimez définitivement les données sensibles des PDF — contrats, lettres, relevés — 100 % dans votre navigateur, sans envoi.',
    h1: 'Caviarder un document — en ligne et sécurisé',
    sub: 'Détectez et supprimez définitivement les parties sensibles de vos documents PDF — sans rien importer.',
    intro: [
      'Qu’il s’agisse d’un contrat, d’une lettre, d’une facture ou d’un avis officiel, des détails sensibles doivent souvent être supprimés avant de le transmettre. AnonymousPDF détecte ces données automatiquement et les supprime définitivement du document — pas seulement visuellement avec un cadre, mais du fichier lui-même.',
      "Il reconnaît e-mails, téléphones, IBAN et numéros de carte, adresses IP, numéros d’identification et de dossier, et — via un modèle d'IA sur l'appareil — noms, organisations et lieux. Le traitement se fait entièrement sur votre appareil, donc les documents confidentiels ne quittent jamais votre navigateur.",
    ],
    steps: STEPS,
    faqHeading: 'Questions fréquentes',
    faq: [
      { q: 'Quels documents puis-je caviarder ?', a: 'Tout PDF. Si votre document est un fichier Word, enregistrez-le d’abord en PDF.' },
      { q: 'Le caviardage est-il sûr ?', a: 'Oui. Le contenu caviardé est supprimé du fichier et ne peut pas être récupéré.' },
      { q: 'Les documents sont-ils importés ?', a: 'Non — le traitement se fait localement dans votre navigateur.' },
      { q: 'Y a-t-il un coût ?', a: 'Non, l’outil est gratuit et ne nécessite pas d’inscription.' },
    ],
  },
};
