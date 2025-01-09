import { translations } from '../i18n/translations';
import { useLanguageStore } from '../stores/lang-store';

export const t = (key, values = {}) => {
  const currentLang = useLanguageStore.getState().language || 'en';
  let text = translations[currentLang][key] || key;
  
  // Replace placeholders with values
  Object.entries(values).forEach(([key, value]) => {
    text = text.replace(`\${${key}}`, value);
  });
  
  return text;
}