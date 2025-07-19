import { useState } from "react";
import { Link } from "react-router-dom";
import AcademicDetail from "./AcademicDetails";
import Faculty from "./Facultylist";
import Lab from "./LabLabrary";
import Streams from "./Streams";
import { useLanguage } from "../context/Languagecontext";

const academicData = [
  {
    icon: "📚",
    title: t("student.support.academic.title"),
    points: [
      "Physics, Chemistry, Biology, Mathematics",
      "Modern, well-equipped laboratories",
      "Expert faculty & competitive exam guidance",
    ],
    action: "Streams",
    cardColor: "from-yellow-100 to-yellow-50 border-yellow-300 text-yellow-700",
  },
  {
    icon: "🏅",
    title: "Academic Excellence",
    points: [
      "Regular tests & assessments",
      "Remedial & doubt-clearing sessions",
      "Smart classrooms & topper mentorship",
      "Scholarships & rewards for meritorious students",
    ],
    action: "academic-details",
    cardColor: "from-blue-100 to-blue-50 border-blue-300 text-blue-700",
  },
  {
    icon: "🧑‍🏫",
    title: "Faculty & Environment",
    points: [
      "Experienced, dedicated teachers",
      "Positive, disciplined learning environment",
      "Personalized attention & mentorship",
    ],
    action: "faculty",
    cardColor: "from-green-100 to-green-50 border-green-300 text-green-700",
  },
  {
    icon: "🧪",
    title: "Labs & Library",
    points: [
      "Science & computer labs for hands-on learning",
      "Digital & traditional library resources",
      "Focus on practical knowledge",
    ],
    action: "lab", // ✅ changed from link to action for internal render
    cardColor: "from-pink-100 to-pink-50 border-pink-300 text-pink-700",
  },
];

const AcademicSection = () => {
  const [currentView, setCurrentView] = useState(null);
  const { language, toggleLanguage, t } = useLanguage();
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const handleCardClick = (action) => {
    if (action === "academic-details") {
      localStorage.setItem("student_last_section", "academic-details");
      setCurrentView("academic");
    } else if (action === "faculty") {
      setCurrentView("faculty");
    } else if (action === "lab") {
      setCurrentView("lab");
    } else if (action === "Streams") {
      setCurrentView("Streams");
    }
  };

  // Conditional Rendering
  if (currentView === "academic") return <AcademicDetail />;
  if (currentView === "faculty") return <Faculty />;
  if (currentView === "lab") return <Lab />;
  if (currentView === "Streams") return <Streams />;

  return (
    <div className="shadow-lg overflow-hidden bordershadow-md border-[1px] border-orange-500 border-t-[4px] rounded-xl">
      <section className="bg-gradient-to-br from-indigo-100 to-slate-50 shadow-2xl py-16 px-4">
        <h2 className="text-4xl text-center font-bold text-indigo-800 mb-4 tracking-wide">
          📘 Our Academic Excellence
        </h2>
        <p className="text-center text-gray-600 text-lg max-w-xl mx-auto mb-12">
          At DLS Inter College, Rithora, we are committed to nurturing
          well-rounded, responsible, and curious learners. Our curriculum is
          designed to foster conceptual understanding, critical thinking, and
          personal growth.
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {academicData.map((item, index) => (
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

              <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1 text-sm text-left">
                {item.points.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="w-full flex justify-center mt-auto">
                {item.link ? (
                  <Link
                    to={item.link}
                    className="relative inline-block bg-gradient-to-r from-blue-800 to-blue-400 text-white font-semibold text-sm px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:rotate-[-1deg] overflow-hidden"
                  >
                    <span className="relative z-10">See More</span>
                    <span className="absolute inset-0 w-[60%] skew-x-[-25deg] bg-white/20 left-[-60%] transition-all duration-500 hover:left-[110%]" />
                  </Link>
                ) : (
                  <button
                    onClick={() => handleCardClick(item.action)}
                    className={`cursor-pointer bg-gradient-to-br ${item.cardColor} border-2 border-solid hover:border-3 hover:border-solid   hover:bg-indigo-500 hover:shadow-3xl hover:scale-105 text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-md`}
                  >
                    See More
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default AcademicSection;
