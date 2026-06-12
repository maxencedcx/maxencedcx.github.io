import en from './en';
import fr from './fr';
import type {Translations} from "./type.ts";

export const translations = { en, fr };
export type Lang = keyof typeof translations;

export function t(lang: Lang) : Translations {
    return translations[lang];
}

export const date = new Date();
export const receipt_number = `#${date.getDate()}${date.getMonth().toString().padStart(2, '0')}${date.getFullYear()}`;

export function getLangFromUrl(url: URL): Lang {
    const [, lang] = url.pathname.split('/');
    if (lang === 'en') return 'en';
    if (lang === 'fr') return 'fr';
    return 'en';
}

export function getLocalePath(lang: Lang, path: string) {
    return `/${lang}${path}`;
}
