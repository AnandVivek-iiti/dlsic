import { useState, useEffect } from 'react';
import StudentResources from './StudyResources';
import DoubtSolver from './Doubtform';
import Doubtlist from './DoubtList';
import Mentor from './MentorDashboard';
import StudentProfile from './StudentProfile';
import TimeTable from './TimeTable';
import 'vanilla-tilt';
import CareerGuidance from './CareerGuidance';
import NoticeLinks from './NoticeLinks';

export default function Student() {
  const [currentView, setCurrentView] = useState(null);

  const dummyProfile = {
    name: 'Anand Vivek',
    rollNumber: 'ME24B999',
    degree: 'BTech Mechanical Engineering',
    year: '1st',
    hostelName: 'Himalaya',
    profileImage: 'https://via.placeholder.com/150',
  };

  useEffect(() => {
    const last = localStorage.getItem('student_last_section');
    if (last) setCurrentView(last);
  }, []);

  const studentCards = [
    {
      icon: '🗓',
      title: 'Class Timetable',
      items: [
        'Daily schedule for all streams',
        'Updated exam calendar',
        'Lab & activity slots',
      ],
      btn: 'View Timetable',
      action: 'TimeTable',
    },
    {
      icon: '📚',
      title: 'Study Material',
      items: [
        'PDF notes & assignments',
        'Recorded video lectures',
        'Previous year question papers',
      ],
      btn: 'Access Materials',
      action: 'material',
    },
    {
      icon: '📈',
      title: 'Progress Report',
      items: [
        'Marks & attendance',
        'Term-wise performance',
        'Parent-teacher comments',
      ],
      btn: 'Check Progress',
      action: 'profile',
    },
    {
      icon: '🧠',
      title: 'Student Support',
      items: [
        'Mentor & counselor help',
        'Feedback & concerns',
        'Wellbeing sessions',
      ],
      btn: 'Get Support',
      action: 'doubts',
    },
    {
      icon: '💡',
      title: 'Career Guidance',
      items: [
        'Workshops & webinars',
        'Competitive exam prep',
        'Counselor sessions',
      ],
      btn: 'Explore Careers',
      action: 'CareerGuidance',
    },
    {
      icon: '📌',
      title: 'Notices & Links',
      items: [
        'Latest announcements',
        'Download forms & circulars',
        'School calendar & policies',
      ],
      btn: 'View Notices',
      action: 'NoticeLinks',
    },
  ];

  const handleCardClick = (action) => {
    if (action) {
      setCurrentView(action);
      localStorage.setItem('student_last_section', action);
    }
  };

  const handleBack = () => {
    setCurrentView(null);
    localStorage.removeItem('student_last_section');
  };

  if (currentView === 'material') {
    return (
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <button onClick={handleBack} className="text-indigo-600 font-medium underline mb-4">← Back to Dashboard</button>
          <StudentResources />
        </div>
      </section>
    );
  }

  if (currentView === 'doubts') {
    return (
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <button onClick={handleBack} className="text-indigo-600 font-medium underline mb-4">← Back to Dashboard</button>
          <DoubtSolver />
        </div>
      </section>
    );
  }

  if (currentView === 'profile') {
    return (
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <button onClick={handleBack} className="text-indigo-600 font-medium underline mb-4">← Back to Dashboard</button>
          <StudentProfile profile={dummyProfile} />
        </div>
      </section>
    );
  }

  if (currentView === 'TimeTable') {
    return (
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <button onClick={handleBack} className="text-indigo-600 font-medium underline mb-4">← Back to Dashboard</button>
          <TimeTable />
        </div>
      </section>
    );
  }

  if (currentView === 'CareerGuidance') {
    return (
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <button onClick={handleBack} className="text-indigo-600 font-medium underline mb-4">← Back to Dashboard</button>
          <CareerGuidance />
        </div>
      </section>
    );
  }

  if (currentView === 'NoticeLinks') {
    return (
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <button onClick={handleBack} className="text-indigo-600 font-medium underline mb-4">← Back to Dashboard</button>
          <NoticeLinks />
        </div>
      </section>
    );
  }

  return (
    <section className="bg-gradient-to-br from-indigo-100 to-slate-50 shadow-2xl py-16 px-4">
      <h2 className="text-4xl text-center font-bold text-indigo-800 mb-4 tracking-wide">
        🎓 Student Dashboard
      </h2>
      <p className="text-center text-gray-600 text-lg max-w-xl mx-auto mb-12">
        Everything a DLS student needs in one place — from timetables and learning materials to support and progress tracking.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {studentCards.map((item, index) => (
          <div
            key={index}
            className="bg-white w-[320px] min-h-[360px] p-8 rounded-[22px] shadow-xl flex flex-col transform transition-transform duration-300 hover:scale-[1.04] hover:-translate-y-2 hover:z-10 relative"
          >
            <div className="w-full flex flex-col items-center text-center">
              <span className="text-4xl text-indigo-800 drop-shadow-md mb-2">{item.icon}</span>
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">{item.title}</h3>
            </div>

            <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1 text-sm text-left">
              {item.items.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>

            <div className="w-full flex justify-center mt-auto">
              <button
                onClick={() => handleCardClick(item.action)}
                disabled={!item.action}
                className={`text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-md
                  ${item.action
                    ? 'bg-indigo-600 text-white hover:bg-indigo-500 hover:shadow-lg hover:scale-105'
                    : 'bg-gray-300 text-white cursor-not-allowed'}`}
              >
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}