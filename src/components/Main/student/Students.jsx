import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import DoubtSolver from './DoubtSolver';
import StudentProfile from './StudentProfile';
import StudentResources from './StudyResources';

export default function Student() {
  const navigate = useNavigate();

  const [showMaterialFlow, setShowMaterialFlow] = useState(false);
  const [showDoubtSolver, setShowDoubtSolver] = useState(false);
  const [showProfileView, setShowProfileView] = useState(false);

  const dummyProfile = {
    name: "Anand Vivek",
    rollNumber: "ME24B999",
    degree: "BTech Mechanical Engineering",
    year: "1st",
    hostelName: "Himalaya",
    profileImage: "https://via.placeholder.com/150",
  };

  useEffect(() => {
    const last = localStorage.getItem("student_last_section");
  //   if (last === 'material') {
  //     setShowMaterialFlow(true);
  //   } else if (last === 'doubts') {
  //     setShowDoubtSolver(true);
  //   } else if (last === 'profile') {
  //     setShowProfileView(true);
  //   }
  }, []);

  const studentCards = [
    {
      icon: '🗓',
      title: 'Class Timetable',
      items: ['Daily schedule for all streams', 'Updated exam calendar', 'Lab & activity slots'],
      btn: 'View Timetable',
      action: null,
    },
    {
      icon: '📚',
      title: 'Study Material',
      items: ['PDF notes & assignments', 'Recorded video lectures', 'Previous year question papers'],
      btn: 'Access Materials',
      action: 'material',
    },
    {
      icon: '📈',
      title: 'Progress Report',
      items: ['Marks & attendance', 'Term-wise performance', 'Parent-teacher comments'],
      btn: 'Check Progress',
      action: 'profile',
    },
    {
      icon: '🧠',
      title: 'Student Support',
      items: ['Mentor & counselor help', 'Feedback & concerns', 'Wellbeing sessions'],
      btn: 'Get Support',
      action: 'doubts',
    },
    {
      icon: '💡',
      title: 'Career Guidance',
      items: ['Workshops & webinars', 'Competitive exam prep', 'Counselor sessions'],
      btn: 'Explore Careers',
      action: null,
    },
    {
      icon: '📌',
      title: 'Notices & Links',
      items: ['Latest announcements', 'Download forms & circulars', 'School calendar & policies'],
      btn: 'View Notices',
      action: null,
    },
  ];

  const handleCardClick = (action) => {
    if (action === 'material') {
      setShowMaterialFlow(true);
      // localStorage.setItem("student_last_section", 'material');
    } else if (action === 'doubts') {
      setShowDoubtSolver(true);
    //   localStorage.setItem("student_last_section", 'doubts');
     } else if (action === 'profile') {
      setShowProfileView(true);
    //   localStorage.setItem("student_last_section", 'profile');
     }
  };

  return (
    <section id="student" className="py-8 bg-gradient-to-br from-indigo-100 to-slate-50 shadow-2xl">
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-2">🎓 Student Resources</h2>
      <p className="text-center max-w-2xl mx-auto mb-10 text-gray-600">
        Everything a DLS student needs in one place — from timetables and learning materials to support and progress tracking.
      </p>

      {/* Cards View */}
      {!showMaterialFlow && !showDoubtSolver && !showProfileView ? (
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {studentCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white w-[320px] min-h-[360px] p-8 rounded-[22px] shadow-md flex flex-col items-start transform transition duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <span className="text-4xl text-indigo-800 drop-shadow-md mb-2">{card.icon}</span>
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">{card.title}</h3>
              <ul className="mb-4 list-disc list-inside text-gray-700">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button
                onClick={() => handleCardClick(card.action)}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full text-sm font-semibold"
              >
                {card.btn}
              </button>
            </div>
          ))}
        </div>
      ) : showMaterialFlow ? (
        <div className="p-4 mx-auto max-w-3xl bg-white rounded shadow">
          <button
            className="mt-4 text-indigo-600 underline"
            onClick={() => {
              setShowMaterialFlow(false);
              localStorage.removeItem("student_last_section");
            }}
          >
            ← Back
          </button>
          <StudentResources />
        </div>
      ) : showDoubtSolver ? (
        <div className="p-4 mx-auto bg-white rounded shadow">
          <button
            className="mb-4 text-indigo-600 underline"
            onClick={() => {
              setShowDoubtSolver(false);
              localStorage.removeItem("student_last_section");
            }}
          >
            ← Back
          </button>
          <DoubtSolver />
        </div>
      ) : showProfileView ? (
        <div className="p-4 max-w-4xl mx-auto bg-white rounded shadow">
          <button
            className="mb-4 text-indigo-600 underline"
            onClick={() => {
              setShowProfileView(false);
              localStorage.removeItem("student_last_section");
            }}
          >
            ← Back
          </button>
          <StudentProfile profile={dummyProfile} />
        </div>
      ) : null}
    </section>
  );
}
