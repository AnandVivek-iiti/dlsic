import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState,useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import saraswatiLogo from "../assets/Saraswati.png";
import U from "../assets/Saraswati.png";
import ThemeToggle  from "../Main/ThemeSwitcher";
import { useTheme } from "../Main/context/ThemeContext";
import LanguageSwitcher from '../LanguageSwitcher'
import NotificationBell from "../NotificationBell";
import { useLanguage } from '../Main/context/Languagecontext';


export default function NavBar({
  changestatus,
  setissignup,
  closeset,
  personinfo,
  setpersoninfo,
  issignup,
}) {
  const [user] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem("personinfo") || "null");
    } catch {
      return null;
    }
  });
  const { language, toggleLanguage, t } = useLanguage();
  useEffect(() => {
    localStorage.setItem('lang', language);
  }, [language]);


  const navigate = useNavigate();
  const [isuserinfoopen, setisuserinfoopen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: t("header.home"), path: "/" },
    { name: t("header.academic"), path: "/Academic" },
    { name: t("header.student"), path: "/Student" },
    { name: t("header.alumni"), path: "/Alumni" },
    { name: t("header.contact"), path: "/Contact" },
    ...(!issignup ? [{ name: t("header.login"), path: "/signup" }] : []),
  ];

  return (
    <div className="Nav-container sticky top-0 z-50">
      <header className="bg-gradient-to-br from-indigo-200 to-slate-200 text-black shadow-md">
        <div className="max-w-[99%] mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo + College Name */}
            <div className="flex items-center space-x-4">
              <img
                src={saraswatiLogo}
                alt="Logo"
                className="h-16 w-16 border-2 border-indigo-300 rounded-full"
              />
              <motion.h1
                className="text-lg sm:text-2xl font-extrabold text-blue-700 glow"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Typewriter
                  words={["DLS Inter College Bareilly"]}
                  loop={1}
                  cursor
                  cursorStyle=""
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </motion.h1>
            </div>

            {/* Desktop Menu */}
            <nav className="hidden md:flex items-center space-x-6">
              {navigation.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-bold text-lg ${
                    location.pathname === item.path
                      ? "text-blue-500"
                      : "text-black hover:text-blue-500"
                  }`}
                >
                  {item.name}
                </Link>
              ))}

              {/* Notification, Language, Theme */}
              <NotificationBell />
              <LanguageSwitcher className="bg-gray-600 text-white hover:bg-gray-700" />
              <ThemeToggle  />

              {/* User Profile */}
              {issignup && (
                <div className="relative">
                  <img
                    src={U}
                    alt="User"
                    className="w-11 h-11 cursor-pointer hover:opacity-80"
                    onClick={() => setisuserinfoopen(!isuserinfoopen)}
                  />
                  {isuserinfoopen && (
                    <div className="absolute top-16 right-0 z-50 w-80 bg-white rounded-md border shadow-lg p-4">
                      <div className="text-center mb-3">
                        <p className="font-semibold">{user?.username }</p>
                        <p className="text-sm">{personinfo?.email}</p>
                        <p className="text-sm">{user?.phone}</p>
                      </div>
                      <button
                        onClick={() => {
                          setisuserinfoopen(false);
                          navigate("/profile");
                        }}
                        className="w-full py-2 text-left hover:bg-gray-100 rounded px-2"
                      >
                        📄 View Profile
                      </button>
                      <button
                        onClick={() => {
                          if (window.confirm("Do you want to logout?")) {
                            localStorage.removeItem("personinfo");
                            setissignup(false);
                            setpersoninfo(null);
                            setisuserinfoopen(false);
                            navigate("/signup");
                          }
                        }}
                        className="w-full py-2 text-left text-red-600 hover:bg-gray-100 rounded px-2"
                      >
                        🔓 Logout
                      </button>
                    </div>
                  )}
                </div>
              )}
            </nav>

            {/* Mobile Toggle Button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-3xl focus:outline-none"
              >
                {isOpen ? "✖" : "☰"}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ y: "-100%", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: "-100%", opacity: 0 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
              className="fixed top-0 left-0 w-full h-screen bg-white z-50 shadow-lg flex flex-col overflow-y-auto"
            >
              <div className="flex items-center justify-between px-4 py-4 border-b">
                <div className="flex items-center gap-2">
                  <img src={U} alt="Logo" className="w-12 h-12 border-2 border-indigo-300 rounded-full" />
                  <h1 className="text-lg font-bold text-blue-700">DLS Inter College</h1>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-black text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Mobile Links */}
              <div className="flex flex-col px-4 py-6 space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-lg text-base font-medium ${
                      location.pathname === item.path
                        ? "bg-orange-100 text-blue-700 font-semibold"
                        : "hover:bg-gray-200 text-gray-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Mobile Settings: Language, Theme, Notification */}
              <div className="px-4 pt-4 border-t border-gray-200 space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Language / भाषा</span>
                  <LanguageSwitcher className="bg-white text-blue-600 border border-gray-300 px-4 py-1 rounded-md shadow-sm hover:bg-gray-100 text-sm font-semibold" />
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Theme / थीम</span>
                  <ThemeToggle />
                </div>

                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Notifications </span>
                  <NotificationBell />
                </div>
              </div>

              {/* Mobile User Info */}
              {issignup && (
                <div className="px-4 pt-4 border-t border-gray-200">
                  <div className="mb-2 text-gray-700">
                    <div className="font-semibold">{personinfo?.name }</div>
                    <div className="text-sm">{personinfo?.email}</div>
                    <div className="text-sm">{user?.phone}</div>
                  </div>
                  <div className="flex flex-col space-y-2 mt-3">
                    <button
                      onClick={() => {
                        setIsOpen(false);
                        navigate("/profile");
                      }}
                      className="w-full bg-blue-600 text-white py-2 rounded-md font-semibold"
                    >
                      📄 {t("header.mobileProfile")}
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm("Do you want to logout?")) {
                          localStorage.removeItem("personinfo");
                          setissignup(false);
                          setpersoninfo(null);
                          setIsOpen(false);
                          navigate("/signup");
                        }
                      }}
                      className="w-full bg-red-100 text-red-600 py-2 rounded-md font-semibold hover:bg-red-200 transition"
                    >
                      🔓Logout
                    </button>
                  </div>
                </div>
              )}
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </div>
  );
}
