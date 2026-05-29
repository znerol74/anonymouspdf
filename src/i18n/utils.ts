import { LOCALES, defaultLang, type Lang } from './site';
import { ui, type UiKey } from './ui';

export function getLangFromUrl(url: URL): Lang {
  const seg = url.pathname.split('/')[1];
  return (LOCALES as readonly string[]).includes(seg) ? (seg as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
  const table = ui[lang] ?? ui[defaultLang]!;
  return function t(key: UiKey): string {
    return table[key] ?? ui[defaultLang]![key];
  };
}
