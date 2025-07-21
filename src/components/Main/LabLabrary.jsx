import { motion } from "framer-motion";
import { useEffect } from "react";
import labImage from "../assets/labs.png";
import libraryImage from "../assets/lib.png";
import { useLanguage } from "../Main/context/Languagecontext";

const LabsAndLibraries = () => {
  const { language, toggleLanguage, t } = useLanguage();
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-800 mb-10"
        >
          🏫{" "}
          {language === "EN" ? "Labs & Libraries" : "प्रयोगशालाएँ और पुस्तकालय"}
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Labs */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={labImage}
              alt="Lab Facility"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {language === "EN"
                  ? "Science & Computer Labs"
                  : "विज्ञान और कंप्यूटर प्रयोगशालाएँ"}
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>
                  {language === "EN"
                    ? "Fully equipped Physics, Chemistry & Biology labs"
                    : "पूरी तरह से सुसज्जित भौतिकी, रसायन विज्ञान और जीव विज्ञान प्रयोगशालाएँ"}
                </li>
                <li>
                  {language === "EN"
                    ? "Modern Computer Lab with high-speed internet"
                    : "उच्च गति इंटरनेट के साथ आधुनिक कंप्यूटर लैब"}
                </li>
                <li>
                  {language === "EN"
                    ? "Projector-based practical demonstrations"
                    : "प्रोजेक्टर-आधारित व्यावहारिक प्रदर्शन"}
                </li>
                <li>
                  {language === "EN"
                    ? "Robotics and Electronics experimentation setup"
                    : "रोबोटिक्स और इलेक्ट्रॉनिक्स प्रयोग सेटअप"}
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Libraries */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-md overflow-hidden"
          >
            <img
              src={libraryImage}
              alt="Library Facility"
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {language === "EN" ? "Digital & Book Libraries" : "डिजिटल और पुस्तक पुस्तकालय"}
              </h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>
                  {language === "EN"
                    ? "Thousands of academic & reference books"
                    : "हज़ारों शैक्षणिक व संदर्भ पुस्तकें"}
                </li>
                <li>
                  {language === "EN"
                    ? "Access to digital resources & e-books"
                    : "डिजिटल संसाधनों और ई-बुक्स की सुविधा"}
                </li>
                <li>
                  {language === "EN"
                    ? "Quiet study zones and discussion rooms"
                    : "शांत अध्ययन क्षेत्र और चर्चा कक्ष"}
                </li>
                <li>
                  {language === "EN"
                    ? "Library management system for easy search"
                    : "आसान खोज के लिए पुस्तकालय प्रबंधन प्रणाली"}
                </li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default LabsAndLibraries;
