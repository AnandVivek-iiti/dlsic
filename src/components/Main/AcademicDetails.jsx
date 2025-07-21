import { useState, useEffect } from "react";
import image from "../assets/image.png";
import AV from "../assets/AV.png";
import SR from "../assets/SR.png";
import AP from "../assets/AP.png";
import AS from "../assets/AS.png";
import { useLanguage } from "../Main/context/Languagecontext";

const AcademicExcellence = () => {
  const [showMore, setShowMore] = useState(false);
  const { language } = useLanguage();
  useEffect(() => {
    localStorage.setItem("lang", language);
  }, [language]);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        🏆 {language === "EN" ? "Academic Excellence" : "शैक्षणिक उत्कृष्टता"}
      </h2>
      <p className="text-gray-600">
        {language === "EN"
          ? "Our students are consistently performing excellently in board examinations and competitive examinations."
          : "हमारे छात्र लगातार बोर्ड परीक्षाओं और प्रतियोगी परीक्षाओं में उत्कृष्ट प्रदर्शन कर रहे हैं।"}
      </p>

      <div className="flex justify-between my-4 flex-wrap gap-2">
        <div className="flex-1 bg-cyan-100 p-4 rounded-md text-center">
          <span className="text-2xl">📈</span>
          <strong className="block">
            {language === "EN" ? "95%+ Board Results" : "95%+ बोर्ड परिणाम"}
          </strong>
        </div>
        <div className="flex-1 bg-cyan-100 p-4 rounded-md text-center">
          <span className="text-2xl">🏅</span>
          <strong className="block">
            {language === "EN" ? "District Toppers" : "जिला टॉपर्स"}
          </strong>
        </div>
        <div className="flex-1 bg-cyan-100 p-4 rounded-md text-center">
          <span className="text-2xl">🎓</span>
          <strong className="block">
            {language === "EN" ? "NEET / JEE Selections" : "NEET / JEE चयन"}
          </strong>
        </div>
      </div>

      <button
        onClick={() => setShowMore(!showMore)}
        className="bg-blue-400 text-white px-4 py-2 rounded-md mt-4 hover:bg-blue-600 transition-colors duration-300"
      >
        {language === "EN" ? "See More" : "और देखें "}
      </button>

      {showMore && (
        <div className="mt-6 animate-fadeIn space-y-6">
          <div className="bg-gray-100 p-6 border-l-4 border-blue-600 rounded">
            <h3 className="text-xl font-semibold">
              📚{" "}
              {language === "EN"
                ? "Board Exam Highlights"
                : "बोर्ड परीक्षा परिणाम"}
            </h3>
            <ul className="list-disc pl-6 mt-2">
              {language === "EN" ? (
                <>
                  <li>5 students scored more than 90% marks</li>
                  <li>Subject-wise toppers list available</li>
                  <li>Position in state level merit</li>
                  <li>Highest marks in session 2024: 96.4%</li>
                </>
              ) : (
                <>
                  <li>5 छात्रों ने 90% से अधिक अंक प्राप्त किए</li>
                  <li>विषयवार टॉपर्स की सूची उपलब्ध</li>
                  <li>राज्य स्तर की मेरिट में स्थान</li>
                  <li>सत्र 2024 में उच्चतम अंक: 96.4%</li>
                </>
              )}
            </ul>
          </div>

          <div className="bg-gray-100 p-6 border-l-4 border-blue-600 rounded">
            <h3 className="text-xl font-semibold">
              🎯{" "}
              {language === "EN" ? "Competitive Exams" : "प्रतियोगी परीक्षाएँ"}
            </h3>
            <ul className="list-disc pl-6 mt-2">
              {language === "EN" ? (
                <>
                  <li>Selection of a meritorious student in NEET exam</li>
                  <li>Success in IIT-JEE and NDA</li>
                  <li>Passing scholarship exam</li>
                  <li>Participation in Olympiad and NTSE</li>
                  <li>First position in state level mathematics competition</li>
                </>
              ) : (
                <>
                  <li>NEET परीक्षा में एक मेधावी छात्र का चयन</li>
                  <li>IIT-JEE and NDA में सफलता</li>
                  <li>छात्रवृत्ति परीक्षा उत्तीर्ण करने वाले</li>
                  <li>Olympiad और NTSE में प्रतिभाग</li>
                  <li>राज्य स्तरीय गणित प्रतियोगिता में प्रथम स्थान</li>
                </>
              )}
            </ul>
          </div>

          <div className="bg-gray-100 p-6 border-l-4 border-blue-600 rounded">
            <h3 className="text-xl font-semibold">
              👩‍🏫 {language === "EN" ? "Teaching & Learning" : "पठन-पाठन"}
            </h3>
            <ul className="list-disc pl-6 mt-2">
              {language === "EN" ? (
                <>
                  <li>Team of experienced teachers</li>
                  <li>Smart classes, library, practical labs</li>
                  <li>Online content and support</li>
                  <li>Weekly tests and assessments</li>
                  <li>Individual doubt-clearing sessions</li>
                </>
              ) : (
                <>
                  <li>अनुभवी शिक्षकों की टीम</li>
                  <li>स्मार्ट क्लासेस, पुस्तकालय, प्रैक्टिकल लैब</li>
                  <li>ऑनलाइन सामग्री और सहायता</li>
                  <li>साप्ताहिक टेस्ट और मूल्यांकन</li>
                  <li>व्यक्तिगत संदेह-समाधान सत्र</li>
                </>
              )}
            </ul>
          </div>

          <div className="bg-gray-100 p-6 border-l-4 border-blue-600 rounded">
            <h3 className="text-xl font-semibold">
              🏅
              {language === "EN"
                ? "Achievements & Awards"
                : "उपलब्धियाँ और पुरस्कार"}
            </h3>
            <ul className="list-disc pl-6 mt-2">
              {language === "EN" ? (
                <>
                  <li>Awards in State Level Science Fair</li>
                  <li>Success in National Level Mathematics Competition</li>
                  <li>Excellence in Cultural and Sports Activities</li>
                  <li>Students honoured in various fields</li>
                  <li>
                    Contribution in Social Service and Environmental Protection
                  </li>
                </>
              ) : (
                <>
                  <li>राज्य स्तरीय विज्ञान मेले में पुरस्कार</li>
                  <li>राष्ट्रीय स्तर की गणित प्रतियोगिता में सफलता</li>
                  <li>सांस्कृतिक और खेल गतिविधियों में उत्कृष्टता</li>
                  <li>छात्रों को विभिन्न क्षेत्रों में सम्मानित किया गया</li>
                  <li>समाज सेवा और पर्यावरण संरक्षण में योगदान</li>
                </>
              )}
            </ul>
          </div>

          <div className="bg-gray-100 p-6 border-l-4 border-blue-600 rounded">
            <h3 className="text-xl font-semibold">
              🌟 {language === "EN" ? "Honor Students" : "सम्मानित छात्र"}
            </h3>

            {/* Batch 2024-25 */}
            <h4 className="mt-6 text-blue-600 text-lg font-bold">
              🎓 {language === "EN" ? "Batch: 2024-25" : "बैच: 2024-25"}
            </h4>
            <p className="text-center font-semibold italic">{language === "EN" ? "Science Students" : "विज्ञान के छात्र"}</p>
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <HonorCard
                name="रितिका शुक्ला"
                desc="Class 10 - 88% Class Topper"
                img="images/honor1.jpg"
              />
              <HonorCard
                name="आनंद विवेक"
                desc="Class Topper with 81.1%"
                img="images/honor3.jpg"
              />
            </div>

            {/* Batch 2023-24 */}
            <h4 className="mt-6 text-blue-600 text-lg font-bold">
              🎓 {language === "EN" ? "Batch: 2023-24" : "बैच: 2023-24"}
            </h4>
            <p className="text-center font-semibold italic">{language === "EN" ? "Science Students" : "विज्ञान के छात्र"}</p>
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <HonorCard
                name="रितिका शुक्ला"
                desc="Class 10 - 88% class topper"
                img={image}
              />
              <HonorCard
                name="आनंद विवेक"
                desc="District Rank #1 with 95.2%, IIT-JEE / NDA Qualified, Study at IIT Indore"
                img={AV}
              />
            </div>

            {/* Batch 2022-23 */}
            <h4 className="mt-6 text-blue-600 text-lg font-bold">
              🎓{language === "EN" ? "Batch: 2022-23" : "बैच: 2022-23"}
            </h4>
            <p className="text-center font-semibold italic">{language === "EN" ? "Science Students" : "विज्ञान के छात्र"}</p>
            <div className="flex flex-wrap justify-center gap-6 mt-4">
              <HonorCard
                name="सोवरन"
                desc="Class 12 - 85.2%, IIT-JEE Qualified, Study at IIIT Jabalpur"
                img={SR}
              />
              <HonorCard
                name="अनुराग पांडेय"
                desc="District Topper #9 with 92.2%, Indian Navy"
                img={AP}
              />
              <HonorCard name="आशीष शर्मा" desc="NEET Qualified" img={AS} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

const HonorCard = ({ name, desc, img }) => (
  <div className="w-36 text-center">
    <img
      src={img}
      alt={name}
      className="w-full h-36 object-cover rounded-lg shadow-md"
    />
    <p className="mt-2 text-sm font-medium">
      <strong>{name}</strong>
      <br />
      {desc}
    </p>
  </div>
);

export default AcademicExcellence;
