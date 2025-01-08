import { translations } from '../i18n/translations';
import { useLanguageStore } from '../stores/lang-store';

export const t = (key) => {
  const currentLang = useLanguageStore.getState().language || 'en';
  return translations[currentLang][key] || key;
}