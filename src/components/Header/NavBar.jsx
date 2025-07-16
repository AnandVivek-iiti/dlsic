import { Link, useLocation, useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import saraswatiLogo from "../assets/Saraswati.png";
import U from "../assets/user.png";
import LanguageSwitcher from "../LanguageSwitcher";
import { useLanguage } from "../Main/context/Languagecontext.jsx";
import ThemeToggle from "../Main/ThemeSwitcher.jsx";

export default function NavBar(props) {
 const user = props.personinfo;


  const navigate = useNavigate();
  const [isuserinfoopen, setisuserinfoopen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navigation = [
    { name: "Home", path: "/" },
    { name: "Academic", path: "/Academic" },
    { name: "Student", path: "/Student" },
    { name: "Alumni", path: "/Alumni" },
    { name: "Contact Us", path: "/contact" },
    ...(!props.issignup ? [{ name: "Signup", path: "/signup" }] : []),
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

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center space-x-6 p-4">
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
              <LanguageSwitcher className="bg-gray-600 text-white hover:bg-gray-700" />
              {props.issignup && (
                <div className="relative">
                  <img
                    src={user?.profileImage || U}
                    alt="User"
                    className="w-11 h-11 rounded-full border border-gray-300 object-cover cursor-pointer hover:opacity-80"
                    onClick={() => setisuserinfoopen(!isuserinfoopen)}
                  />
                  {isuserinfoopen && (
                    <div className="absolute top-16 right-0 z-50 w-80 bg-white rounded-md border shadow-lg p-4">
                      <div className="text-center mb-3">
                        <p className="font-semibold">
                          {props.personinfo?.username || "No name"}
                        </p>
                        <p className="text-sm">{props.personinfo?.email}</p>
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
                            props.setissignup(false);
                            props.setpersoninfo(null);
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

            {/* Mobile Menu Toggle */}
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
              {/* Header with Close and Logo */}
              <div className="flex items-center justify-between px-4 py-4 border-b">
                <div className="flex items-center gap-2">
                  <img
                    src={user?.profileImage || U}
                    alt="User"
                    className="w-12 h-12 border-2 border-indigo-300 rounded-full object-cover"
                  />

                  <h1 className="text-lg font-bold text-blue-700">
                    DLS Inter College
                  </h1>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="text-gray-600 hover:text-black text-xl"
                >
                  ✕
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col px-4 py-6 space-y-3">
                {navigation.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setIsOpen(false)}
                    className={`block py-3 px-4 rounded-lg transition-all duration-200 text-base font-medium ${
                      location.pathname === item.path
                        ? "bg-orange-100 text-blue-700 font-semibold"
                        : "hover:bg-gray-200 text-gray-800"
                    }`}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>

              {/* Language Switcher */}
              <div className="px-4 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm text-gray-600">Language / भाषा</span>
                  <LanguageSwitcher className="bg-white text-blue-600 border border-gray-300 px-4 py-1 rounded-md shadow-sm hover:bg-gray-100 transition duration-200 text-sm font-semibold" />
                </div>
              </div>

              {/* User Info */}
              {props.issignup && (
                <div className="px-4 pt-4 border-t border-gray-200">
                  <div className="mb-2 text-gray-700">
                    <div className="font-semibold">
                      {props.personinfo?.name || "No name"}
                    </div>
                    <div className="text-sm">{props.personinfo?.email}</div>
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
                      📄 View Profile
                    </button>
                    <button
                      onClick={() => {
                        if (window.confirm("Do you want to logout?")) {
                          localStorage.removeItem("personinfo");
                          props.setissignup(false);
                          props.setpersoninfo(null);
                          setIsOpen(false);
                          navigate("/signup");
                        }
                      }}
                      className="w-full bg-red-100 text-red-600 py-2 rounded-md font-semibold hover:bg-red-200 transition"
                    >
                      🔓 Logout
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
