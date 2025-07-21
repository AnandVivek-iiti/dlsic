import { useState, useEffect } from "react";
import StudentResources from "./StudyResources";
import { useNavigate } from "react-router";
import DoubtSolver from "./StudentSupport";
// import DoubtSolver from './Doubtform';
// import Doubtlist from './DoubtList';
// import Mentor from './MentorDashboard';
import StudentProfile from "./StudentProfile";
import TimeTable from "./TimeTable";
import "vanilla-tilt";
import CareerGuidance from "./CareerGuidance";
import NoticeLinks from "./NoticeLinks";
import { useLanguage } from "../context/Languagecontext";

export default function Student(props) {
  const [currentView, setCurrentView] = useState(null);
  const { language, toggleLanguage, t } = useLanguage();
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  useEffect(() => {
    const last = localStorage.getItem("student_last_section");
    if (last) setCurrentView(last);
  }, []);
  const Navigate = useNavigate();
  const handleBack = () => {
    Navigate(-1);
  };
  const studentCards = [
    {
      icon: "🗓",
      title: language === "EN" ? "Class Timetable" : "कक्षा समय-सारणी",
      items: [
        language === "EN"
          ? "Daily schedule for all streams"
          : "सभी स्ट्रीम्स की दैनिक समय-सारणी",
        language === "EN" ? "Updated exam calendar" : "अपडेटेड परीक्षा कैलेंडर",
        language === "EN"
          ? "Lab & activity slots"
          : "प्रयोगशाला और गतिविधि स्लॉट्स",
      ],
      btn: language === "EN" ? "View Timetable" : "समय-सारणी देखें",
      action: "TimeTable",
      cardColor:
        "from-yellow-100 to-yellow-50 border-yellow-300 text-yellow-700",
    },
    {
      icon: "📚",
      title: language === "EN" ? "Study Material" : "अध्ययन सामग्री",
      items: [
        language === "EN"
          ? "PDF notes & assignments"
          : "PDF नोट्स और असाइनमेंट्स",
        language === "EN"
          ? "Recorded video lectures"
          : "रिकॉर्डेड वीडियो लेक्चर",
        language === "EN"
          ? "Previous year question papers"
          : "पिछले वर्षों के प्रश्न पत्र",
      ],
      btn: language === "EN" ? "Access Materials" : "सामग्री प्राप्त करें",
      action: "material",
      cardColor: "from-pink-200 to-orange-100 border-red-400 text-red-600",
    },
    {
      icon: "📈",
      title: language === "EN" ? "Progress Report" : "प्रगति रिपोर्ट",
      items: [
        language === "EN" ? "Marks & attendance" : "अंक और उपस्थिति",
        language === "EN" ? "Term-wise performance" : "टर्म अनुसार प्रदर्शन",
        language === "EN"
          ? "Parent-teacher comments"
          : "अभिभावक-शिक्षक टिप्पणियाँ",
      ],
      btn: language === "EN" ? "Check Progress" : "प्रगति देखें",
      action: "profile",
      cardColor: "from-gray-200 to-blue-50 border-blue-300 text-blue-700",
    },
    {
      icon: "🧠",
      title: language === "EN" ? "Student Support" : "छात्र सहायता",
      items: [
        language === "EN"
          ? "Mentor & counselor help"
          : "मेंटोर और काउंसलर सहायता",
        language === "EN" ? "Feedback & concerns" : "प्रतिक्रिया और चिंताएं",
        language === "EN" ? "Wellbeing sessions" : "कल्याण सत्र",
      ],
      btn: language === "EN" ? "Get Support" : "सहायता प्राप्त करें",
      action: "doubts",
      cardColor: "from-green-100 to-green-50 border-green-300 text-green-700",
    },
    {
      icon: "💡",
      title: language === "EN" ? "Career Guidance" : "करियर मार्गदर्शन",
      items: [
        language === "EN" ? "Workshops & webinars" : "कार्यशालाएं और वेबिनार",
        language === "EN"
          ? "Competitive exam prep"
          : "प्रतियोगी परीक्षा की तैयारी",
        language === "EN" ? "Counselor sessions" : "काउंसलर सत्र",
      ],
      btn: language === "EN" ? "Explore Careers" : "करियर जानें",
      action: "CareerGuidance",
      cardColor: "from-blue-100 to-blue-50 border-blue-300 text-blue-700",
    },
    {
      icon: "📌",
      title: language === "EN" ? "Notices & Links" : "सूचनाएं और लिंक",
      items: [
        language === "EN" ? "Latest announcements" : "नवीनतम घोषणाएं",
        language === "EN"
          ? "Download forms & circulars"
          : "फॉर्म और परिपत्र डाउनलोड करें",
        language === "EN"
          ? "School calendar & policies"
          : "विद्यालय कैलेंडर और नीतियाँ",
      ],
      btn: language === "EN" ? "View Notices" : "सूचनाएं देखें",
      action: "NoticeLinks",
      cardColor: "from-pink-100 to-pink-50 border-pink-300 text-pink-700",
      btnColor: "from-pink-300 to-pink-200 border-pink-500",
    },
  ];

  const handleCardClick = (action) => {
    if (action) {
      setCurrentView(action);
      // localStorage.setItem('student_last_section', action);
    }
  };
  if (currentView === "material") {
    return (
      <section className="py-2 px-1">
        <div
          className={
            "bg-gray-300 text-black max-w-5xl mx-auto  rounded-xl shadow-lg p-6"
          }
        >
          <button
            onClick={() => setCurrentView(null)}
            className="flex items-center gap-1 text-indigo-600 font-2xl hover:underline hover:-translate-x-1 transition-transform duration-200"
          >
            🔙
          </button>

          <StudentResources />
        </div>
      </section>
    );
  }

  if (currentView === "doubts") {
    return (
      <section className="py-0 px-0">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <button
            onClick={() => setCurrentView(null)}
            className="flex items-center gap-1 text-indigo-600 font-2xl hover:underline hover:-translate-x-1 transition-transform duration-200"
          >
            🔙
          </button>

          <DoubtSolver />
        </div>
      </section>
    );
  }

  if (currentView === "profile") {
    return (
      <section className="py-0 px-0">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <button
            onClick={() => setCurrentView(null)}
            className="flex items-center gap-1 text-indigo-600 font-2xl hover:underline hover:-translate-x-1 transition-transform duration-200"
          >
            🔙
          </button>

          <StudentProfile />
        </div>
      </section>
    );
  }

  if (currentView === "TimeTable") {
    return (
      <section className="py-0 px-0">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <button
            onClick={() => setCurrentView(null)}
            className="flex items-center gap-1 text-indigo-600 font-2xl hover:underline hover:-translate-x-1 transition-transform duration-200"
          >
            🔙
          </button>

          <TimeTable />
        </div>
      </section>
    );
  }

  if (currentView === "CareerGuidance") {
    return (
      <section className="py-0 px-0">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <button
            onClick={() => setCurrentView(null)}
            className="flex items-center gap-1 text-indigo-600 font-2xl hover:underline hover:-translate-x-1 transition-transform duration-200"
          >
            🔙
          </button>

          <CareerGuidance />
        </div>
      </section>
    );
  }

  if (currentView === "NoticeLinks") {
    return (
      <section className="py-0 px-0">
        <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-6">
          <button
            onClick={() => setCurrentView(null)}
            className="flex items-center gap-1 text-indigo-600 font-2xl hover:underline hover:-translate-x-1 transition-transform duration-200"
          >
            🔙
          </button>

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
          {language === "EN"
            ? "Everything a DLS student needs in one place — from timetables and learning materials to support and progress tracking."
            : "डीएलएस छात्र को जो कुछ भी चाहिए वह सब एक ही स्थान पर - समय-सारिणी और शिक्षण सामग्री से लेकर सहायता और प्रगति ट्रैकिंग तक।"}
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {studentCards.map((item, index) => (
            <div
              key={index}
              className={`cursor-pointer bg-gradient-to-br ${item.cardColor}} border-2 border-solid hover:border-3 border-solid w-[320px] min-h-[360px] p-8 rounded-[22px] shadow-xl flex flex-col transform transition-transform duration-300 hover:scale-[1.04] hover:-translate-y-2 hover:z-10 relative`}
            >
              <div className="w-full flex flex-col items-center text-center">
                <span className="text-4xl text-indigo-800 drop-shadow-md mb-2">
                  {item.icon}
                </span>
                <h3 className="text-xl font-semibold text-indigo-800 mb-3">
                  {item.title}
                </h3>
              </div>

              <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1  text-left">
                {item.items.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="w-full flex justify-center mt-auto">
                <button
                  onClick={() => handleCardClick(item.action)}
                  disabled={!item.action}
                  className={`text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-md
                  ${
                    item.action
                      ? `cursor-pointer bg-gradient-to-br ${item.cardColor} border-2 border-solid hover:border-3 hover:border-solid   hover:bg-indigo-500 hover:shadow-3xl hover:scale-105`
                      : "bg-gray-300 text-white cursor-pointer"
                  }`}
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
