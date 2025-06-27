import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

// Components
import Header1 from './components/Header/Header1';
import Home from './components/Home';
import Login from './components/Header/Login';
import Signup from './components/Header/Signup';
import About from './components/Main/About';
import Alumni from './components/Main/Alumni';
import StudentDashboard from './components/Main/student/Students'; // renamed to avoid conflict
import Acedemic from './components/Main/Acedemic';
import StudentProfile from './components/Main/student/StudentProfile'; // Fixed typo in path
import StudyResources from './components/Main/student/StudyResources';
import DoubtSolver from './components/Main/student/Doubts'; // Fixed path to match case
import Footer1 from './components/Footer/Footer1';
import Profile from './components/Main/student/StudentProfile'; // Fixed typo in path

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const dummyProfile = {
    name: "Anand Vivek",
    rollNumber: "ME24B999",
    degree: "BTech Mechanical Engineering",
    year: "1st",
    hostelName: "Himalaya",
    profileImage: "",
  };

  return (
    <div className="w-full overflow-x-hidden">
      {/* Dark Mode Wrapper */}
      <div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        {/* Header Title */}
        <div className={`${darkMode ? 'bg-black text-white' : 'bg-gray-600 text-white'} py-4`}>
          <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4">
            <p className="text-lg mx-auto sm:text-xl md:text-2xl font-semibold text-center w-full sm:w-auto mb-2 sm:mb-0">
              दरबारी लाल शर्मा इंटर कॉलेज, रिठौरा बरेली
            </p>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="border px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 text-white text-sm"
            >
              {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
            </button>
          </div>
        </div>

        {/* Navbar */}
        <Header1 darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      {/* Routing */}
      <div className={`flex-1 px-4 py-6 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <Routes>
          <Route path="/Home" element={<Home darkMode={darkMode} />} />
          <Route path="/login" element={<Login darkMode={darkMode} />} />
          <Route path="/" element={<Signup darkMode={darkMode} />} />
          <Route path="/About" element={<About darkMode={darkMode} />} />
          <Route path="/Alumni" element={<Alumni darkMode={darkMode} />} />
          <Route path="/Student" element={<StudentDashboard darkMode={darkMode} />} />
          <Route path="/Acedemic" element={<Acedemic darkMode={darkMode} />} />
          <Route path="/Profile" element={<Profile darkMode={darkMode} />} />
          <Route path="/student/profile" element={<StudentProfile profile={dummyProfile} darkMode={darkMode} />} />
          <Route path="/student/materials" element={<StudyResources darkMode={darkMode} />} />
          <Route path="/student/doubts" element={<DoubtSolver darkMode={darkMode} />} />
          <Route path="*" element={<div className="text-center mt-10 text-gray-500">404 - Not Found</div>} />
        </Routes>
      </div>

      {/* Footer */}
      <Footer1 />
    </div>
  );
}

export default App;
