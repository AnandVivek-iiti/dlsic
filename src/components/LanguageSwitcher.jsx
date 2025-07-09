import { useLanguage } from './Main/context/Languagecontext.jsx';
import { languages } from './Main/context/lib/translations';

const LanguageSwitcher = () => {
  const { language, setLanguage } = useLanguage();

  const toggleLang = () => {
    setLanguage(language === 'EN' ? 'HI' : 'EN');
  };

  return (
    <button
      onClick={toggleLang}
       className={`rounded-full bg-gray-400 text-black px-2 py-1 text-sm hover:bg-gray-500 transition `}
    >
     🌐 {language === 'EN' ? 'हिन्दी' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;
