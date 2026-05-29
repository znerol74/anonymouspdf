// Single source of truth for locales. `LOCALES`/`Lang` cover every language we
// support in the type system; `LIVE_LOCALES` is the subset currently published
// (has full content) — generation and the language switcher iterate this, so a
// locale only goes live once its content + this list include it.
export const LOCALES = ['en', 'de', 'es', 'fr', 'it', 'pt', 'nl', 'ar', 'lv', 'zh'] as const;
export type Lang = (typeof LOCALES)[number];
export const defaultLang: Lang = 'en';

export const LIVE_LOCALES: Lang[] = ['en', 'de', 'es', 'fr', 'it', 'pt', 'nl'];

export interface LocaleMeta {
  /** Native name, shown in the language switcher. */
  label: string;
  dir: 'ltr' | 'rtl';
  /** Open Graph locale code. */
  ogLocale: string;
  /** BCP-47 value for <html lang>. */
  htmlLang: string;
}

export const LOCALE_META: Record<Lang, LocaleMeta> = {
  en: { label: 'English', dir: 'ltr', ogLocale: 'en_US', htmlLang: 'en' },
  de: { label: 'Deutsch', dir: 'ltr', ogLocale: 'de_DE', htmlLang: 'de' },
  es: { label: 'Español', dir: 'ltr', ogLocale: 'es_ES', htmlLang: 'es' },
  fr: { label: 'Français', dir: 'ltr', ogLocale: 'fr_FR', htmlLang: 'fr' },
  it: { label: 'Italiano', dir: 'ltr', ogLocale: 'it_IT', htmlLang: 'it' },
  pt: { label: 'Português', dir: 'ltr', ogLocale: 'pt_PT', htmlLang: 'pt' },
  nl: { label: 'Nederlands', dir: 'ltr', ogLocale: 'nl_NL', htmlLang: 'nl' },
  ar: { label: 'العربية', dir: 'rtl', ogLocale: 'ar_AR', htmlLang: 'ar' },
  lv: { label: 'Latviešu', dir: 'ltr', ogLocale: 'lv_LV', htmlLang: 'lv' },
  zh: { label: '中文', dir: 'ltr', ogLocale: 'zh_CN', htmlLang: 'zh-Hans' },
};

export const isRtl = (lang: Lang): boolean => LOCALE_META[lang].dir === 'rtl';
export const ogLocale = (lang: Lang): string => LOCALE_META[lang].ogLocale;
