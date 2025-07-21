import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import AcademicDetail from "./AcademicDetails";
import Faculty from "./Facultylist";
import Lab from "./LabLabrary";
import Streams from "./Streams";
import { useLanguage } from "../Main/context/Languagecontext";

const AcademicSection = () => {
  const [currentView, setCurrentView] = useState(null);
  const { language, toggleLanguage, t } = useLanguage();
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const academicData = [
    {
      icon: "📚",
      title: t("academics.streams.title"),
      points: [
        language === "EN"
          ? "Physics, Chemistry, Biology, Mathematics"
          : "भौतिकी, रसायन, जीवविज्ञान, गणित",
        language === "EN"
          ? "Modern, well-equipped laboratories"
          : "आधुनिक, सुसज्जित प्रयोगशालाएं",
        language === "EN"
          ? "Expert faculty & competitive exam guidance"
          : "विशेषज्ञ शिक्षक और प्रतियोगी परीक्षा मार्गदर्शन",
      ],
      action: "Streams",
      cardColor:
        "from-yellow-100 to-yellow-50 border-yellow-300 text-yellow-700",
    },
    {
      icon: "🏅",
      title: language === "EN" ? "Academic Excellence" : "शैक्षणिक उत्कृष्टता",
      points: [
        language === "EN"
          ? "Regular tests & assessments"
          : "नियमित परीक्षण और मूल्यांकन",
        language === "EN"
          ? "Remedial & doubt-clearing sessions"
          : "सुधारात्मक और संदेह समाधान सत्र",
        language === "EN"
          ? "Smart classrooms & topper mentorship"
          : "स्मार्ट कक्षाएं और टॉपर मेंटरशिप",
        language === "EN"
          ? "Scholarships & rewards for meritorious students"
          : "मेधावी छात्रों के लिए छात्रवृत्ति और पुरस्कार",
      ],
      action: "academic-details",
      cardColor: "from-blue-100 to-blue-50 border-blue-300 text-blue-700",
    },
    {
      icon: "🧑‍🏫",
      title: language === "EN" ? "Faculty & Environment" : "शिक्षक एवं वातावरण",
      points: [
        language === "EN"
          ? "Experienced, dedicated teachers"
          : "अनुभवी, समर्पित शिक्षक",
        language === "EN"
          ? "Positive, disciplined learning environment"
          : "सकारात्मक, अनुशासित शिक्षण वातावरण",
        language === "EN"
          ? "Personalized attention & mentorship"
          : "व्यक्तिगत मार्गदर्शन और ध्यान",
      ],
      action: "faculty",
      cardColor: "from-green-100 to-green-50 border-green-300 text-green-700",
    },
    {
      icon: "🧪",
      title: language === "EN" ? "Labs & Library" : "प्रयोगशालाएं और पुस्तकालय",
      points: [
        language === "EN"
          ? "Science & computer labs for hands-on learning"
          : "व्यावहारिक सीखने हेतु साइंस व कंप्यूटर लैब",
        language === "EN"
          ? "Digital & traditional library resources"
          : "डिजिटल और पारंपरिक पुस्तकालय संसाधन",
        language === "EN"
          ? "Focus on practical knowledge"
          : "व्यावहारिक ज्ञान पर बल",
      ],
      action: "lab",
      cardColor: "from-pink-100 to-pink-50 border-pink-300 text-pink-700",
    },
  ];

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
          📘 {t("academics.pageTitle")}
        </h2>
        <p className="text-center text-gray-700 text-lg max-w-3xl mx-auto leading-relaxed py-6">
          {language === "EN"
            ? "At DLS Inter College, Rithora, we are committed to nurturing well-rounded, responsible, and curious learners. Our curriculum is designed to foster conceptual understanding, critical thinking, and personal growth."
            : "DLS इंटर कॉलेज, रिठोरा में हम सर्वांगीण, जिम्मेदार और जिज्ञासु छात्रों के विकास के लिए प्रतिबद्ध हैं। हमारा पाठ्यक्रम वैचारिक समझ, आलोचनात्मक सोच और व्यक्तिगत विकास को प्रोत्साहित करता है।"}
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
                    <span className="relative z-10">{ language === "EN" ? "See More" : "और देखें"}</span>
                    <span className="absolute inset-0 w-[60%] skew-x-[-25deg] bg-white/20 left-[-60%] transition-all duration-500 hover:left-[110%]" />
                  </Link>
                ) : (
                  <button
                    onClick={() => handleCardClick(item.action)}
                    className={`cursor-pointer bg-gradient-to-br ${item.cardColor} border-2 border-solid hover:border-3 hover:border-solid   hover:bg-indigo-500 hover:shadow-3xl hover:scale-105 text-sm font-semibold px-6 py-2 rounded-full transition-all duration-300 shadow-md`}
                  >
                   { language === "EN" ? "See More" : "और देखें"}
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
