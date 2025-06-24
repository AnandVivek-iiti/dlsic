import { useState } from 'react';
import ClassSelector from './ClassSelector';
import SubjectSelector from './SubjectSelector';
import TopicList from './TopicList';
import BackButton from './BackButton';
import DoubtSolver from './DoubtSolver';

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
    action: 'studyMaterial',
  },
  {
    icon: '📈',
    title: 'Progress Report',
    items: ['Marks & attendance', 'Term-wise performance', 'Parent-teacher comments'],
    btn: 'Check Progress',
    action: null,
  },
  {
    icon: '🧠',
    title: 'Student Support',
    items: ['Mentor & counselor help', 'Feedback & concerns', 'Wellbeing sessions'],
    btn: 'Get Support',
    action: 'doubtSolver',
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

export default function Student() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [showMaterialFlow, setShowMaterialFlow] = useState(false);
  const [showDoubtSolver, setShowDoubtSolver] = useState(false);

  return (
    <section id="student" className="py-8 bg-gradient-to-br from-indigo-100 to-slate-50 shadow-2xl">
      <h2 className="text-3xl font-bold text-center text-indigo-800 mb-2">🎓 Student Resources</h2>
      <p className="text-center max-w-2xl mx-auto mb-10 text-gray-600">
        Everything a DLS student needs in one place — from timetables and learning materials to support and progress tracking.
      </p>

      {/* Show dashboard cards if nothing is active */}
      {!showMaterialFlow && !showDoubtSolver ? (
        <div className="flex flex-wrap justify-center gap-8 mb-16">
          {studentCards.map((card, idx) => (
            <div
              key={idx}
              className="bg-white w-[320px] min-h-[360px] p-8 rounded-[22px] shadow-md flex flex-col items-start transform transition duration-300 hover:scale-105 hover:-translate-y-2"
            >
              <span className="text-[2.5rem] text-indigo-800 mb-3">{card.icon}</span>
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">{card.title}</h3>
              <ul className="list-disc text-gray-700 text-sm pl-5 mb-6 space-y-1">
                {card.items.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              <button
                onClick={() => {
                  if (card.action === 'studyMaterial') {
                    setShowMaterialFlow(true);
                  } else if (card.action === 'doubtSolver') {
                    setShowDoubtSolver(true);
                  }
                }}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-6 py-2 rounded-full text-sm font-semibold"
              >
                {card.btn}
              </button>
            </div>
          ))}
        </div>
      ) : showMaterialFlow ? (
        // ✅ Show Study Material Flow
        <div className="p-4 max-w-3xl mx-auto bg-white rounded shadow">
          {!selectedClass ? (
            <ClassSelector onSelectClass={setSelectedClass} />
          ) : !selectedSubject ? (
            <>
              <BackButton onBack={() => setSelectedClass(null)} />
              <SubjectSelector onSelectSubject={setSelectedSubject} />
            </>
          ) : (
            <>
              <BackButton onBack={() => setSelectedSubject(null)} />
              <div className="flex justify-between items-center my-4">
                <h2 className="text-xl font-semibold text-[#981F4D]">
                  Class {selectedClass} - {selectedSubject}
                </h2>
              </div>
              <TopicList subject={selectedSubject} classLevel={selectedClass} />
            </>
          )}
        </div>
      ) : showDoubtSolver ? (
        // ✅ Show Doubt Solver Chat
        <div className="p-4 max-w-3xl mx-auto bg-white rounded shadow">
          <BackButton onBack={() => setShowDoubtSolver(false)} />
          <DoubtSolver />
        </div>
      ) : null}
    </section>
  );
}
