import { translations, defaultLanguage } from './translations';

/**
 * Safely fetches a translated string with fallback to English.
 * @param {string} key - The translation key, like 'header.login'.
 * @param {string} lang - The selected language code ('EN' | 'HI').
 * @returns {string}
 */
export const t = (key, lang) => {
  const selected = translations[lang] || {};
  const fallback = translations[defaultLanguage] || {};
  return selected[key] || fallback[key] || key;
};