import { createContext, useContext, useState, useMemo, useEffect } from 'react';
import { translations } from './lib/translations'; // adjust path if needed

const LanguageContext = createContext(null);

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState(() => {
    return localStorage.getItem('lang') || 'EN';
  });

  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);

  const toggleLanguage = () => {
    setLanguage((prevLang) => (prevLang === 'EN' ? 'HI' : 'EN'));
  };

  const t = useMemo(() => {
    return (key) => {
      return translations[language]?.[key] || translations['EN']?.[key] || key;
    };
  }, [language]);

  const value = {
    language,
    setLanguage,
    toggleLanguage,
    t,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
