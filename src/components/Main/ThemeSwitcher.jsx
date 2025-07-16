// components/ThemeToggle.jsx
import { Sun, Moon } from "lucide-react";
import { useTheme } from './context/ThemeContext';

const ThemeToggle = () => {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`p-2 rounded-md transition-all duration-300
        bg-gradient-to-r from-blue-500 to-indigo-500 text-white
        hover:from-indigo-600 hover:to-blue-600 hover:scale-[1.03] hover:shadow-lg`}
    >
      {isDark ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
    </button>
  );
};

export default ThemeToggle;
