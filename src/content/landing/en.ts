import type { LandingCopy, Step } from './types';

const STEPS: Step[] = [
  { title: '1. Drop your PDF', body: 'Choose a file or drag it onto the page. It opens locally — nothing is sent to a server.' },
  { title: '2. Automatic detection', body: 'Pattern matching and an on-device AI model locate the sensitive text for you.' },
  { title: '3. Download or copy', body: 'Get a redacted PDF with the text truly removed, or copy the cleaned text.' },
];

export const en: Record<string, LandingCopy> = {
  'redact-pdf': {
    navLabel: 'Redact PDF',
    seoTitle: 'Redact PDF Online — Free, Permanent & In Your Browser | AnonymousPDF',
    seoDescription:
      'Redact a PDF for free. Permanently black out and remove names, emails, account numbers and other sensitive text — automatically, 100% in your browser. No upload, no sign-up.',
    h1: 'Redact PDF online — free and permanent',
    sub: 'Black out sensitive information and remove it from the file for good. Your PDF is processed in your browser and never uploaded.',
    intro: [
      'Redacting a PDF means more than drawing a black rectangle over a name. If the text underneath is still there, anyone can copy it out or search for it. AnonymousPDF removes the underlying content entirely, so redacted information cannot be recovered.',
      'Upload a document and the tool automatically finds sensitive data — email addresses, phone numbers, IBANs and bank-card numbers, ID and case numbers, plus names and organisations — and blacks them out. Everything runs locally on your device; no file ever leaves your browser.',
    ],
    steps: STEPS,
    faqHeading: 'Frequently asked questions',
    faq: [
      { q: 'Is the redaction permanent?', a: 'Yes. The page is rebuilt so the redacted text is no longer part of the file — it cannot be copied, searched or recovered, unlike a black box drawn over live text.' },
      { q: 'Are my files uploaded anywhere?', a: 'No. All processing happens in your browser on your own device. Your document is never transmitted to us or anyone else.' },
      { q: 'Is it really free?', a: 'Yes — no account, no email, no watermark and no page limits.' },
      { q: 'What does it detect automatically?', a: 'Emails, phone numbers, IBANs, card numbers, IP addresses, URLs, common ID and case numbers, and — via an on-device AI model — names, organisations and locations.' },
    ],
  },

  'anonymize-pdf': {
    navLabel: 'Anonymize PDF',
    seoTitle: 'Anonymize PDF — Remove Names & Personal Data Free | AnonymousPDF',
    seoDescription:
      'Anonymize PDF files automatically. Detect and remove names, emails, phone numbers, IBANs and IDs in seconds — free and 100% in your browser. Nothing is uploaded.',
    h1: 'Anonymize PDF documents automatically',
    sub: 'Automatically detect and remove personal data from a PDF — names, contact details, account and ID numbers — without uploading anything.',
    intro: [
      'Anonymising a document means removing the details that identify people: names, addresses, contact details and reference numbers. AnonymousPDF scans your PDF and takes them out automatically, so you can share or archive the file without exposing personal data.',
      'Detection combines precise pattern matching for structured data (emails, phone numbers, IBANs, card and ID numbers) with an on-device AI model for names, organisations and places. It is a practical first step for data minimisation under rules like the GDPR — and because everything runs in your browser, the personal data never leaves your device.',
    ],
    steps: STEPS,
    faqHeading: 'Frequently asked questions',
    faq: [
      { q: "What's the difference between redacting and anonymising?", a: 'Redacting blacks out specific content; anonymising focuses on removing the personal data that identifies individuals. This tool does both — it finds personal data and removes it from the file.' },
      { q: 'Does it remove names?', a: 'Yes. An AI model running in your browser detects person and organisation names in addition to pattern-based data like emails and IBANs.' },
      { q: 'Is anything uploaded?', a: 'No — your file is processed locally and never sent anywhere.' },
      { q: 'Will it catch everything?', a: 'Automatic detection is very good but not perfect. Always review the result before sharing, especially for unusual names or formats.' },
    ],
  },

  'redaction-tool': {
    navLabel: 'Redaction tool',
    seoTitle: 'Free Online Redaction Tool & Software — No Install | AnonymousPDF',
    seoDescription:
      'A free online redaction tool for PDFs. Automatically find and permanently remove sensitive data — no software to install, nothing uploaded, no sign-up.',
    h1: 'A free online redaction tool',
    sub: 'Redaction software without the install. Find and permanently remove sensitive data from PDFs, right in your browser.',
    intro: [
      'Traditional redaction software is desktop-bound, expensive and often leaves recoverable text behind. AnonymousPDF is a browser-based redaction tool: nothing to install, nothing to upload, and the redacted text is genuinely removed from the file.',
      'It automatically detects sensitive data and blacks it out, then lets you download a clean PDF or copy the redacted text. Because it runs entirely on your device, it is safe to use even with confidential documents.',
    ],
    steps: STEPS,
    faqHeading: 'Frequently asked questions',
    faq: [
      { q: 'Do I need to install anything?', a: 'No. It runs in any modern browser, on desktop or mobile.' },
      { q: 'How is this different from drawing black boxes?', a: 'Drawn boxes usually leave the text underneath intact and recoverable. This tool rebuilds the page so the content is actually gone.' },
      { q: 'Is it safe for confidential files?', a: 'Yes — files are processed locally and are never uploaded.' },
      { q: 'Is there a cost or limit?', a: 'It is free with no sign-up and no page limit.' },
    ],
  },

  'data-masking': {
    navLabel: 'Data masking',
    seoTitle: 'Data Masking for PDFs — Mask PII Online Free | AnonymousPDF',
    seoDescription:
      'Mask sensitive data in PDF documents. Automatically detect and remove PII — emails, phone numbers, account and ID numbers, names — free and entirely in your browser.',
    h1: 'Data masking for PDF documents',
    sub: 'Mask personally identifiable information (PII) in a PDF automatically — without sending your data to a cloud service.',
    intro: [
      'Data masking removes sensitive values so a document can be shared, reviewed or archived without exposing real personal information. AnonymousPDF masks PII in PDFs by detecting it and removing it from the file.',
      'It recognises structured identifiers — email addresses, phone numbers, IBANs, card numbers, IP addresses and ID or reference numbers — and uses an on-device AI model to catch names, organisations and locations. All masking happens in your browser, so the original data is never transmitted.',
    ],
    steps: STEPS,
    faqHeading: 'Frequently asked questions',
    faq: [
      { q: 'What counts as PII here?', a: 'Contact details, financial identifiers (IBANs, cards), network identifiers (IPs), ID and reference numbers, and names, organisations and places.' },
      { q: 'Is the original data sent to a server?', a: 'No. Detection and masking run locally in your browser.' },
      { q: 'Can I get the masked text, not just a PDF?', a: "Yes — use 'Copy text' to get the masked text with labels like [NAME] and [EMAIL]." },
      { q: 'Is it free for business use?', a: 'Yes, it is free to use. For sensitive workflows, always review the output before sharing.' },
    ],
  },

  'pseudonymize-pdf': {
    navLabel: 'Pseudonymize PDF',
    seoTitle: 'Pseudonymize PDF — Replace Names with Person_1, ORG_1 | AnonymousPDF',
    seoDescription:
      'Pseudonymize a PDF for free: automatically replace names, organisations and other personal data with consistent placeholders like Person_1 and ORG_1 — 100% in your browser, nothing uploaded.',
    h1: 'Pseudonymize PDF documents automatically',
    sub: 'Replace personal data with consistent placeholders — the same name always becomes the same Person_1 — without uploading your file.',
    intro: [
      'Pseudonymisation keeps a document readable while breaking the link to real people: instead of deleting a name, it is replaced with a neutral, consistent label such as Person_1 or ORG_1. The same value always maps to the same placeholder, so the text still makes sense — you just can no longer tell who it refers to.',
      'AnonymousPDF detects names, organisations, emails, phone numbers, IBANs, IDs and dates, then rebuilds the PDF with each value swapped for its placeholder. The originals are removed from the file, not hidden, and everything happens in your browser — the source data never leaves your device.',
    ],
    steps: STEPS,
    faqHeading: 'Frequently asked questions',
    faq: [
      { q: 'How is pseudonymisation different from redaction?', a: 'Redaction blacks information out; pseudonymisation replaces it with a consistent placeholder (Person_1, ORG_1, Date_1) so the document stays readable while the real identities are gone.' },
      { q: 'Are the same names replaced consistently?', a: 'Yes. Every occurrence of the same value gets the same number, so relationships in the text are preserved while the identity is removed.' },
      { q: 'Can the original values be recovered?', a: 'No. The PDF is rebuilt from the replaced content, so the original names and numbers are no longer in the file.' },
      { q: 'Is it free and private?', a: 'Yes — free, no sign-up, and 100% in your browser. Nothing is uploaded.' },
    ],
  },

  'gdpr-pdf': {
    navLabel: 'GDPR PDF',
    seoTitle: 'GDPR PDF Anonymization — Remove Personal Data Free | AnonymousPDF',
    seoDescription:
      'Anonymize PDFs for GDPR: detect and remove personal data — names, contact details, IBANs, IDs — automatically and 100% in your browser. A practical data-minimisation step. No upload.',
    h1: 'GDPR-friendly PDF anonymization',
    sub: 'Remove personal data from PDFs to support GDPR data minimisation — automatically, and without sending anything to a server.',
    intro: [
      'The GDPR asks you to process only the personal data you actually need and to keep it protected. Before sharing, archiving or publishing a PDF, removing names, contact details and identifiers is a simple, effective data-minimisation step. AnonymousPDF finds that data automatically and takes it out of the file.',
      'Because detection and removal run entirely in your browser, the personal data is never transmitted to a third party — which matters when the document itself is the thing you are trying to protect. Automatic detection is a strong first pass, not legal advice; always review the result for your specific obligations.',
    ],
    steps: STEPS,
    faqHeading: 'Frequently asked questions',
    faq: [
      { q: 'Does this make my document GDPR-compliant?', a: 'It helps with data minimisation by removing personal data, but compliance depends on your full process. Treat it as a practical tool, not legal advice, and review the output.' },
      { q: 'Is any data sent to a server?', a: 'No. Everything runs locally in your browser, so the personal data never leaves your device.' },
      { q: 'What personal data does it detect?', a: 'Names and organisations, emails, phone numbers, IBANs and card numbers, IP addresses, ID and case numbers, and dates.' },
      { q: 'Can I keep the document readable?', a: 'Yes — values are replaced with neutral placeholders (e.g. Person_1), so the text still reads naturally without identifying anyone.' },
    ],
  },

  'remove-names-from-pdf': {
    navLabel: 'Remove names',
    seoTitle: 'Remove Names from PDF — Free & Automatic | AnonymousPDF',
    seoDescription:
      'Remove names from a PDF automatically. An on-device AI model detects person and organisation names and takes them out — free, 100% in your browser, nothing uploaded.',
    h1: 'Remove names from a PDF',
    sub: 'Automatically detect and remove people’s and organisations’ names from a PDF — without uploading the file.',
    intro: [
      'Names are often the most sensitive part of a document, and the hardest to catch with a simple search-and-replace. AnonymousPDF uses an AI model running in your browser to recognise person and organisation names — even ones you would not think to search for — and removes them from the file.',
      'Alongside names it also detects emails, phone numbers, IBANs, IDs and dates. Each name is replaced with a neutral placeholder such as Person_1, so the document stays readable while no longer identifying anyone. Everything runs on your device.',
    ],
    steps: STEPS,
    faqHeading: 'Frequently asked questions',
    faq: [
      { q: 'How are names detected?', a: 'A multilingual AI model (NER) runs in your browser and flags person and organisation names, in addition to pattern-based data like emails and IBANs.' },
      { q: 'Does it work for names in other languages?', a: 'Yes — the model supports several major languages. Detection is very good but not perfect, so review the result.' },
      { q: 'Are the names really gone?', a: 'Yes. The PDF is rebuilt with each name replaced, so the original is no longer in the file.' },
      { q: 'Is it free?', a: 'Yes, free and with no sign-up, processed entirely in your browser.' },
    ],
  },

  'censor-pdf': {
    navLabel: 'Censor PDF',
    seoTitle: 'Censor PDF Online — Hide Sensitive Text Free | AnonymousPDF',
    seoDescription:
      'Censor a PDF for free: automatically find and remove sensitive text — names, emails, numbers — and rebuild the file so it cannot be recovered. 100% in your browser, no upload.',
    h1: 'Censor a PDF online',
    sub: 'Find and remove the sensitive parts of a PDF automatically, then download a file where the censored content is truly gone.',
    intro: [
      'Censoring a PDF should mean the hidden text is actually unreadable — not just covered by a box you can copy underneath. AnonymousPDF removes the sensitive content from the file entirely and rebuilds the page, so censored information cannot be selected, searched or recovered.',
      'It automatically detects what to censor — names, organisations, emails, phone numbers, IBANs, IDs and dates — and replaces each with a neutral placeholder. All of it happens in your browser; the original document never leaves your device.',
    ],
    steps: STEPS,
    faqHeading: 'Frequently asked questions',
    faq: [
      { q: 'Is the censored text recoverable?', a: 'No. The page is rebuilt, so the original text is removed from the file rather than hidden behind a box.' },
      { q: 'What gets censored automatically?', a: 'Names and organisations, emails, phone numbers, IBANs and cards, IP addresses, ID and case numbers, and dates.' },
      { q: 'Do I have to upload my file?', a: 'No — everything is processed locally in your browser.' },
      { q: 'Is it free?', a: 'Yes, free with no account and no page limit.' },
    ],
  },

  'black-out-pdf': {
    navLabel: 'Black out PDF',
    seoTitle: 'Black Out Text in a PDF — Free & Permanent | AnonymousPDF',
    seoDescription:
      'Black out text in a PDF for free. Automatically detect sensitive information and remove it permanently from the file — 100% in your browser, nothing uploaded.',
    h1: 'Black out text in a PDF',
    sub: 'Permanently remove the sensitive text from a PDF — not just cover it — automatically and in your browser.',
    intro: [
      'Drawing a black rectangle over text in most editors leaves the words intact underneath, where they can still be copied or searched. AnonymousPDF blacks out information the safe way: it removes the underlying text from the file and rebuilds the page, so it is genuinely gone.',
      'You do not have to mark anything by hand — the tool detects sensitive data automatically (names, emails, phone numbers, IBANs, IDs, dates and more) and removes it. It runs entirely on your device, so confidential files stay private.',
    ],
    steps: STEPS,
    faqHeading: 'Frequently asked questions',
    faq: [
      { q: 'Does the text stay under the black box?', a: 'No. Unlike a drawn rectangle, this removes the text from the file, so nothing can be copied or recovered.' },
      { q: 'Can I choose what to black out?', a: 'The tool detects sensitive data automatically; always review the result before sharing.' },
      { q: 'Is anything uploaded?', a: 'No, it is processed locally in your browser.' },
      { q: 'How much does it cost?', a: 'Nothing — it is free, with no sign-up.' },
    ],
  },

  'hide-information-in-pdf': {
    navLabel: 'Hide information',
    seoTitle: 'Hide Information in a PDF — Free & Automatic | AnonymousPDF',
    seoDescription:
      'Hide sensitive information in a PDF automatically and for free. Detect and remove names, contact details, account and ID numbers — 100% in your browser, nothing uploaded.',
    h1: 'Hide information in a PDF',
    sub: 'Automatically find and remove the information you do not want to share from a PDF — without uploading the file.',
    intro: [
      'Sometimes you need to share a document but keep parts of it private — a name, an address, an account number. AnonymousPDF finds that information automatically and removes it from the file, so what is left is safe to send.',
      'It recognises contact details, financial and ID numbers, IP addresses, dates and — via an on-device AI model — names, organisations and locations. Hidden values are replaced with neutral placeholders, and because everything runs in your browser, the original information is never transmitted.',
    ],
    steps: STEPS,
    faqHeading: 'Frequently asked questions',
    faq: [
      { q: 'Is the hidden information removed or just covered?', a: 'Removed. The PDF is rebuilt without the original text, so it cannot be recovered.' },
      { q: 'What can it hide?', a: 'Names, organisations, emails, phone numbers, IBANs and cards, IP addresses, ID and case numbers, and dates.' },
      { q: 'Does my file get uploaded?', a: 'No — processing is entirely local to your browser.' },
      { q: 'Is it really free?', a: 'Yes, free and no sign-up.' },
    ],
  },

  'remove-personal-information-pdf': {
    navLabel: 'Remove personal info',
    seoTitle: 'Remove Personal Information from a PDF — Free | AnonymousPDF',
    seoDescription:
      'Remove personal information from a PDF automatically: names, contact details, IBANs, IDs and more. Free, 100% in your browser, nothing uploaded.',
    h1: 'Remove personal information from a PDF',
    sub: 'Strip personal information out of a PDF automatically — names, contact details, account and ID numbers — without sending anything to a server.',
    intro: [
      'Personal information hides in more places than you expect: signatures, headers, references, contact blocks. AnonymousPDF scans the whole document and removes the personal details automatically, so you can reuse or share it safely.',
      'Detection pairs precise pattern matching (emails, phone numbers, IBANs, card and ID numbers, IP addresses, dates) with an on-device AI model for names, organisations and places. Each value is replaced with a neutral placeholder, and the file is processed entirely on your device.',
    ],
    steps: STEPS,
    faqHeading: 'Frequently asked questions',
    faq: [
      { q: 'What counts as personal information here?', a: 'Names and organisations, contact details, financial identifiers (IBANs, cards), IP addresses, ID and reference numbers, and dates.' },
      { q: 'Is the original information sent anywhere?', a: 'No. Detection and removal run locally in your browser.' },
      { q: 'Can I get the cleaned text too?', a: 'Yes — use Copy text or Download text to get the anonymised text with placeholders.' },
      { q: 'Will it catch everything?', a: 'It is a strong automatic pass but not perfect; review the result before sharing, especially unusual formats.' },
    ],
  },

  'document-redact': {
    navLabel: 'Redact document',
    seoTitle: 'Redact a Document Online — Free & Secure | AnonymousPDF',
    seoDescription:
      'Redact a document online for free. Automatically detect and permanently remove sensitive data from PDFs — contracts, letters, statements — 100% in your browser, no upload.',
    h1: 'Redact a document — online and secure',
    sub: 'Automatically detect and permanently remove sensitive parts of your PDF documents — without uploading anything.',
    intro: [
      'Whether it is a contract, a letter, an invoice or an official notice, sensitive details often need to be removed before you pass it on. AnonymousPDF detects that data automatically and removes it from the document for good — not just visually with a box, but from the file itself.',
      'It recognises emails, phone numbers, IBANs and card numbers, IP addresses, ID and case numbers, and — via an on-device AI model — names, organisations and locations. Processing happens entirely on your device, so confidential documents never leave your browser.',
    ],
    steps: STEPS,
    faqHeading: 'Frequently asked questions',
    faq: [
      { q: 'Which documents can I redact?', a: 'Any PDF. If your document is a Word file, save it as a PDF first.' },
      { q: 'Is the redaction secure?', a: 'Yes. Redacted content is removed from the file and cannot be recovered.' },
      { q: 'Are documents uploaded?', a: 'No — processing happens locally in your browser.' },
      { q: 'Does it cost anything?', a: 'No, the tool is free and needs no sign-up.' },
    ],
  },
};
