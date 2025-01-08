import { createStore } from 'zustand/vanilla';

const SUPPORTED_LANGUAGES = ['en', 'tr'];


const getBrowserLang = () => {
    // Get browser language (e.g., 'en-US' or 'tr-TR')
    const browserLang = navigator.language || navigator.userLanguage;
    
    // Get the primary language code (e.g., 'en' or 'tr')
    const primaryLang = browserLang.split('-')[0];
    
    // Return primary language if supported, otherwise return 'en'
    return SUPPORTED_LANGUAGES.includes(primaryLang) ? primaryLang : 'en';
  }
  
  const getInitialLang = () => {
    // Check localStorage first
    const storedLang = localStorage.getItem('lang');
    
    // If no stored language, use browser language
    if (!storedLang) {
      const browserLang = getBrowserLang();
      localStorage.setItem('lang', browserLang);
      return browserLang;
    }
    
    return storedLang;
  }

export const useLanguageStore = createStore((set) => ({
    language: getInitialLang(),
    setLanguage: (language) => set({ language })
  }));