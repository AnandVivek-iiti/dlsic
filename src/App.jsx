import { useState } from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';

import Header1 from './components/Header/Header1';
import Home from './components/Home';
import Login from './components/Header/Login';
import Signup from './components/Header/Signup';
import About from './components/Main/About';
import Alumni from './components/Main/Alumni';
import Student from './components/Main/student/Student';
import Acedemic from './components/Main/Acedemic';
import ClassSelector from './components/Main/student/ClassSelector';
import SubjectSelector from './components/Main/student/SubjectSelector';
import TopicList from './components/Main/student/TopicList';
import Footer1 from './components/Footer/Footer1'
function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className="w-full overflow-x-hidden">
<div className={`${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
  {/* 🏫 College Title */}
  <div className={`${darkMode ? 'bg-black text-white' : 'bg-gray-600 text-white'} py-4`}>
    <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center px-4">
      <p className="text-lg mx-auto sm:text-xl md:text-2xl font-semibold text-center w-full sm:w-auto mb-2 sm:mb-0">
        दरबारी लाल शर्मा इंटर कॉलेज, रिठौरा बरेली
      </p>

      {/* 🌗 Dark Mode Toggle */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="border px-4 py-2 rounded bg-gray-800 hover:bg-gray-700 text-white text-sm"
      >
        {darkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
      </button>
    </div>
 </div>

  {/* 🔗 Navbar */}
  <Header1 darkMode={darkMode} setDarkMode={setDarkMode} />
</div>

      {/* 📄 Routes */}
      <div className={`flex-1 px-4 py-6 ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>
        <Routes>
          <Route path="/Home" element={<Home darkMode={darkMode} />} />
          <Route  name='/login' path="/login" element={<Login darkMode={darkMode} />} />
          <Route path='/'   element={<Signup darkMode={darkMode} />} />
          <Route path="/About" element={<About darkMode={darkMode} />} />
          <Route path="/Alumni" element={<Alumni darkMode={darkMode} />} />
          <Route path="/Student" element={<Student darkMode={darkMode} />} />
          <Route path="/Acedemic" element={<Acedemic darkMode={darkMode} />} />
          <Route path="/ClassSelector" element={<ClassSelector darkMode={darkMode} />} />
          <Route path="/subject/:classId" element={<SubjectSelector darkMode={darkMode} />} />
          <Route path="/topics/:classId/:subject" element={<TopicList darkMode={darkMode} />} />
        </Routes>
      </div>
    
    <Footer1/>
   </div>
  );
}

export default App;
