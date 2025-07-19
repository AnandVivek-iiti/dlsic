import { useState, useEffect } from 'react';
import StudentResources from './StudyResources';
import DoubtSolver from './StudentSupport';
// import DoubtSolver from './Doubtform';
// import Doubtlist from './DoubtList';
// import Mentor from './MentorDashboard';
import StudentProfile from './StudentProfile';
import TimeTable from './TimeTable';
import 'vanilla-tilt';
import CareerGuidance from './CareerGuidance';
import NoticeLinks from './NoticeLinks';
import { useLanguage } from '../context/Languagecontext';
export default function Student(props) {
  const [currentView, setCurrentView] = useState(null);
const { language, toggleLanguage, t } = useLanguage();
useEffect(() => {
  localStorage.setItem('lang', language);
}, [language]);



  useEffect(() => {
    const last = localStorage.getItem('student_last_section');
    if (last) setCurrentView(last);
  }, []);
const studentCards = [
  {
    icon: '🗓',
    title: t("student.timetable.title"),
    items: t("student.timetable.points", { returnObjects: true }),
    btn: t("student.timetable.btn"),
    action: 'TimeTable',
    cardColor: 'from-yellow-100 to-yellow-50 border-yellow-300 text-yellow-700',
  },
  {
    icon: '📚',
    title: t("student.material.title"),
    items: t("student.material.points", { returnObjects: true }),
    btn: t("student.material.btn"),
    action: 'material',
    cardColor: 'from-pink-200 to-orange-100 border-red-400 text-red-600',
  },
  {
    icon: '📈',
    title: t("student.profile.title"),
    items: t("student.profile.points", { returnObjects: true }),
    btn: t("student.profile.btn"),
    action: 'profile',
    cardColor: 'from-gray-200 to-blue-50 border-blue-300 text-blue-700',
  },
  {
    icon: '🧠',
    title: t("student.support.title"),
    items: t("student.support.points", { returnObjects: true }),
    btn: t("student.support.btn"),
    action: 'doubts',
    cardColor: 'from-green-100 to-green-50 border-green-300 text-green-700',
  },
  {
    icon: '💡',
    title: t("student.career.title"),
    items: t("student.career.points", { returnObjects: true }),
    btn: t("student.career.btn"),
    action: 'CareerGuidance',
    cardColor: 'from-blue-100 to-blue-50 border-blue-300 text-blue-700',
  },
  {
    icon: '📌',
    title: t("student.notice.title"),
    items: t("student.notice.points", { returnObjects: true }),
    btn: t("student.notice.btn"),
    action: 'NoticeLinks',
    cardColor: 'from-pink-100 to-pink-50 border-pink-300 text-pink-700',
  },
];


  const handleCardClick = (action) => {
    if (action) {
      setCurrentView(action);
      // localStorage.setItem('student_last_section', action);
    }
  };
  if (currentView === 'material') {
    return (
      <section className="py-2 px-1">
        <div className={
            "bg-gray-300 text-black max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6"}>
          {/* <button  className="text-indigo-600 font-medium underline mb-4">← Back to Dashboard</button> */}
          <StudentResources />
        </div>
      </section>
    );
  }

  if (currentView === 'doubts') {
    return (
      <section className="py-0 px-0">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          {/* <button onClick={handleBack} className="text-indigo-600 font-medium underline mb-4">← Back to Dashboard</button> */}
          <DoubtSolver />
        </div>
      </section>
    );
  }

  if (currentView === 'profile') {
    return (
      <section className="py-0 px-0">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          {/* <button onClick={handleBack} className="text-indigo-600 font-medium underline mb-4">← Back to Dashboard</button> */}
          <StudentProfile />
        </div>
      </section>
    );
  }

  if (currentView === 'TimeTable') {
    return (
      <section className="py-0 px-0">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          {/* <button onClick={handleBack} className="text-indigo-600 font-medium underline mb-4">← Back to Dashboard</button> */}
          <TimeTable />
        </div>
      </section>
    );
  }

  if (currentView === 'CareerGuidance') {
    return (
      <section className="py-0 px-0">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          {/* <button onClick={handleBack} className="text-indigo-600 font-medium underline mb-4">← Back to Dashboard</button> */}
          <CareerGuidance />
        </div>
      </section>
    );
  }

  if (currentView === 'NoticeLinks') {
    return (
      <section className="py-0 px-0">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          {/* <button onClick={handleBack} className="text-indigo-600 font-medium underline mb-4">← Back to Dashboard</button> */}
          <NoticeLinks />
        </div>
      </section>
    );
  }

  return (
              <div className="shadow-lg overflow-hidden bordershadow-md border-[1px] border-orange-500 border-t-[4px] rounded-xl">


    <section className="bg-gradient-to-br from-indigo-100 to-slate-50  shadow-lg overflow-hidden py-16 px-4">

      <h2 className="text-4xl text-center font-bold text-indigo-800 mb-4 tracking-wide">
        🎓{t("student.pageTitle")}
      </h2>
      <p className="text-center text-gray-600 text-lg max-w-xl mx-auto mb-12">
        Everything a DLS student needs in one place — from timetables and learning materials to support and progress tracking.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {studentCards.map((item, index) => (
          <div
            key={index}
            className={`cursor-pointer bg-gradient-to-br ${item.cardColor}} border-2 border-solid hover:border-3 border-solid w-[320px] min-h-[360px] p-8 rounded-[22px] shadow-xl flex flex-col transform transition-transform duration-300 hover:scale-[1.04] hover:-translate-y-2 hover:z-10 relative`}
          >
            <div className="w-full flex flex-col items-center text-center">
              <span className="text-4xl text-indigo-800 drop-shadow-md mb-2">{item.icon}</span>
              <h3 className="text-xl font-semibold text-indigo-800 mb-3">{item.title}</h3>
            </div>

            <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1 text-left">
  {(Array.isArray(item.items) ? item.items : [item.items]).map((point, i) => (
    <li key={i}>{point}</li>
  ))}
</ul>


            <div className="w-full flex justify-center mt-auto">
              <button
                onClick={() => handleCardClick(item.action)}
                disabled={!item.action}
                className={`text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-md
                  ${item.action
                    ? `cursor-pointer bg-gradient-to-br ${item.cardColor} border-2 border-solid hover:border-3 hover:border-solid   hover:bg-indigo-500 hover:shadow-3xl hover:scale-105`
                    : 'bg-gray-300 text-white cursor-pointer'}`}
              >
                {item.btn}
              </button>
            </div>
          </div>
        ))}
      </div>

    </section>
    </div>
  );
}
