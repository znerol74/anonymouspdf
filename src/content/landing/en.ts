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
};
