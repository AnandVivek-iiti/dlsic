import { motion } from "framer-motion";
import { useEffect } from "react";
import {
  BookOpen,
  FlaskConical,
  LandPlot,
  BriefcaseBusiness,
} from "lucide-react";
import { useLanguage } from "../Main/context/Languagecontext";

const Streams = () => {
  const { language } = useLanguage();

  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  const streams = [
    {
      title:
        language === "EN" ? "Science Stream" : "विज्ञान स्ट्रीम",
      icon: <FlaskConical className="w-10 h-10 text-blue-600" />,
      color: "from-blue-100 to-blue-50",
      subjects: language === "EN"
        ? [
            "Physics, Chemistry, Biology, Mathematics",
            "Competitive Exam Preparation",
            "Modern Labs & Practicals",
          ]
        : [
            "भौतिकी, रसायन, जीवविज्ञान, गणित",
            "प्रतियोगी परीक्षा की तैयारी",
            "आधुनिक प्रयोगशालाएं और प्रैक्टिकल्स",
          ],
    },
    {
      title:
        language === "EN" ? "Commerce Stream" : "वाणिज्य स्ट्रीम",
      icon: <BriefcaseBusiness className="w-10 h-10 text-yellow-600" />,
      color: "from-yellow-100 to-yellow-50",
      subjects: language === "EN"
        ? [
            "Accountancy, Business Studies, Economics",
            "Practical Simulations & Projects",
            "Workshops & Finance Skills",
          ]
        : [
            "लेखाशास्त्र, व्यवसाय अध्ययन, अर्थशास्त्र",
            "व्यावहारिक प्रोजेक्ट और सिमुलेशन",
            "वित्तीय कौशल और वर्कशॉप्स",
          ],
    },
    {
      title:
        language === "EN" ? "Arts Stream" : "कला स्ट्रीम",
      icon: <BookOpen className="w-10 h-10 text-pink-600" />,
      color: "from-pink-100 to-pink-50",
      subjects: language === "EN"
        ? [
            "History, Political Science, Hindi, English",
            "Creative Expression & Analysis",
            "Debates, Events & Culture Focus",
          ]
        : [
            "इतिहास, राजनीति विज्ञान, हिंदी, अंग्रेज़ी",
            "रचनात्मक अभिव्यक्ति और विश्लेषण",
            "वाद-विवाद, आयोजन और सांस्कृतिक झुकाव",
          ],
    },
    {
      title:
        language === "EN" ? "Agriculture Stream" : "कृषि स्ट्रीम",
      icon: <LandPlot className="w-10 h-10 text-green-600" />,
      color: "from-green-100 to-green-50",
      subjects: language === "EN"
        ? [
            "Soil Science, Horticulture, Agronomy",
            "Field Training & Lab Practices",
            "Modern Farming Techniques",
          ]
        : [
            "मृदा विज्ञान, बागवानी, कृषि विज्ञान",
            "मैदान प्रशिक्षण और प्रयोगशाला अभ्यास",
            "आधुनिक खेती की तकनीकें",
          ],
    },
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-slate-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          🎓 {language === "EN" ? "Available Streams" : "उपलब्ध स्ट्रीम्स"}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {streams.map((stream, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.03 }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`bg-gradient-to-br ${stream.color} p-6 rounded-2xl shadow-xl transition-transform duration-300`}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-white rounded-full shadow">
                  {stream.icon}
                </div>
                <h3 className="text-2xl font-semibold text-gray-800">
                  {stream.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-3">
                {stream.subjects.map((item, i) => (
                  <span
                    key={i}
                    className="bg-white/70 backdrop-blur-sm text-gray-800 text-sm px-4 py-2 rounded-full shadow-sm border border-gray-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Streams;
