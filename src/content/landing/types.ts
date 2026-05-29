export interface Step {
  title: string;
  body: string;
}
export interface Faq {
  q: string;
  a: string;
}
export interface LandingCopy {
  /** Short label used in the footer/nav for this concept. */
  navLabel: string;
  seoTitle: string;
  seoDescription: string;
  h1: string;
  sub: string;
  intro: string[];
  steps: Step[];
  faqHeading: string;
  faq: Faq[];
}
export interface HomeMeta {
  seoTitle: string;
  seoDescription: string;
  priceCurrency: string;
}

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

/** Build WebApplication structured data for a home page. */
export function webAppLd(url: string, description: string, priceCurrency: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebApplication',
    name: 'AnonymousPDF',
    url,
    applicationCategory: 'UtilitiesApplication',
    operatingSystem: 'Any (web browser)',
    offers: { '@type': 'Offer', price: '0', priceCurrency },
    description,
  };
}
