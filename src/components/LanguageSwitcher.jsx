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
      className={`
        flex items-center gap-2
        bg-gradient-to-r from-blue-500 to-indigo-500
        text-white font-semibold
        px-4 py-1.5 rounded-sm shadow-md
        hover:from-indigo-600 hover:to-blue-600
        hover:shadow-lg hover:scale-[1.03]
        transition-all duration-300 ease-in-out
        text-sm
      `}
    >
      🌐 {language === 'EN' ? 'हिन्दी' : 'English'}
    </button>
  );
};

export default LanguageSwitcher;
