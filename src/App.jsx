import { useState, useEffect } from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";

// Components
import Header1 from "./components/Header/NavBar";
import Home from "./components/Home";
import Login from "./components/Header/Login";
import Signup from "./components/Header/Signup";
import Alumni from "./components/Main/Alumni";
import StudentDashboard from "./components/Main/student/Students";
import Academic from "./components/Main/Academic";
import StudyResources from "./components/Main/student/StudyResources";
import Doubts from "./components/Main/student/StudentSupport";
import Footer1 from "./components/Footer/Footer1";
import Profile from "./components/Main/student/StudentProfile";
import AcedemicDetails from "./components/Main/AcademicDetails";
import Contacts from "./components/Main/Contact";
import Set from "./components/Header/Set";
import { motion, AnimatePresence } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [issignup, setissignup] = useState(false);
  const [personinfo, setpersoninfo] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const changestatus = () => setIsOpen(!isOpen);
  const closeset = () => setIsOpen(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [darkMode]);

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    if (storedTheme === "dark") setDarkMode(true);
  }, []);

  return (
    <div className="w-full overflow-x-hidden">
      <div className="min-h-screen flex flex-col bg-white text-black dark:bg-[#01011b] dark:text-white transition-colors duration-300">
        {/* Header Title */}
        <div
          className={`${
            darkMode ? "bg-white-300 text-black" : "bg-[#020f2d] text-white"
          } py-4`}
        >
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4">
            {/* <p className="text-lg mx-auto sm:text-xl md:text-2xl font-semibold text-center w-full sm:w-auto mb-2 sm:mb-0">
              दरबारी लाल शर्मा इंटर कॉलेज, रिठौरा बरेली
            </p> */}
            <motion.h1
                className="text-lg mx-auto sm:text-xl md:text-2xl font-semibold text-center w-full sm:w-auto mb-2 sm:mb-0 text-white glow"
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <Typewriter
                  words={["दरबारी लाल शर्मा इंटर कॉलेज, रिठौरा बरेली"]}
                  loop={0}
                  cursor
                  cursorStyle="-"
                  typeSpeed={100}
                  deleteSpeed={50}
                  delaySpeed={3000}
                />
              </motion.h1>
          </div>
        </div>

        {/* Navbar */}
        <Header1
          changestatus={changestatus}
          setissignup={setissignup}
          closeset={closeset}
          personinfo={personinfo}
          setpersoninfo={setpersoninfo}
          issignup={issignup}
          isOpen={isOpen}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Register / Login Popup */}
        {isOpen && (
          <Set
            changestatus={changestatus}
            setissignup={setissignup}
            issignup={issignup}
            personinfo={personinfo}
            setpersoninfo={setpersoninfo}
            closeset={closeset}
            isOpen={isOpen}
          />
        )}

        {/* Main Routing */}
        <div
          className={`flex-1 px-4 py-6 ${
            darkMode ? "bg-black text-white" : "bg-white text-black"
          }`}
        >
          <Routes>
            <Route path="/" element={<Home darkMode={darkMode} />} />
            <Route
              path="/signup"
              element={
                <Signup
                  setissignup={setissignup}
                  setpersoninfo={setpersoninfo}
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              }
            />
            <Route
              path="/login"
              element={
                <Login
                  setissignup={setissignup}
                  setpersoninfo={setpersoninfo}
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              }
            />
            <Route
              path="/Student"
              element={
                <StudentDashboard
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              }
            />
            <Route
              path="/Alumni"
              element={
                <Alumni darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
            <Route
              path="/Academic"
              element={
                <Academic darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
            <Route path="/Contact" element={<Contacts />} />
            <Route
              path="/profile"
              element={
                <Profile darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
            <Route
              path="/student/profile"
              element={
                <Profile darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
            <Route
              path="/student/materials"
              element={
                <StudyResources darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
            <Route
              path="/student/doubts"
              element={
                <Doubts darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
            <Route
              path="/academic-details"
              element={
                <AcedemicDetails
                  darkMode={darkMode}
                  setDarkMode={setDarkMode}
                />
              }
            />
            <Route
              path="*"
              element={
                <div className="text-center mt-10 text-gray-500">
                  404 - Not Found
                </div>
              }
            />
          </Routes>
        </div>

        {/* Footer */}
        <Footer1 darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>
    </div>
  );
}

export default App;
