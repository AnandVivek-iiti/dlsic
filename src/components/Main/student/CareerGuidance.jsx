import { useEffect, useState } from 'react';
import VanillaTilt from 'vanilla-tilt';
import { motion, AnimatePresence } from 'framer-motion';

const allClasses = [
  {
    stream: "Science",
    class: "Class 11 (Science)",
    subjects: "Physics, Chemistry, Math/Biology",
    careers: "Engineering, Medical, Research",
    exams: "IIT-JEE, NEET, CUET",
    colleges: "IITs, AIIMS, NITs, DU",
    icon: "🔬",
    color: "from-purple-500 to-indigo-700 hover:from-purple-400 hover:to-indigo-600",
    pdf: "/pdfs/science11.pdf",
    flowchart: "📘 Science → 🧪 Engineering/Medical → 🏫 IIT/AIIMS → 👨‍💻 Career",
  },
  {
    stream: "Science",
    class: "Class 12 (Science)",
    subjects: "Adv. PCM / PCB",
    careers: "IITs, NEET, CUET, Research Fields",
    exams: "IIT-JEE, NEET, CUET, NDA",
    colleges: "IITs, AIIMS, IISERs, DU",
    icon: "🧪",
    color: "from-indigo-500 to-indigo-800 hover:from-indigo-400 hover:to-indigo-700",
    pdf: "/pdfs/science12.pdf",
    flowchart: "🧪 12th Sci → 📚 JEE/NEET/CUET → 🏫 IIT/AIIMS → 👨‍🔬 R&D/Doctor/Engineer",
  },
  {
    stream: "Commerce",
    class: "Class 11 (Commerce)",
    subjects: "Accounts, Business, Economics",
    careers: "CA, CS, B.Com, MBA",
    exams: "CUET, CA Foundation, IPMAT",
    colleges: "SRCC, IIM Indore, DU, NMIMS",
    icon: "💼",
    color: "from-yellow-400 to-yellow-600 hover:from-yellow-300 hover:to-yellow-500",
    pdf: "/pdfs/commerce11.pdf",
    flowchart: "📙 Commerce → 📈 CA/CS/B.Com → 🎓 MBA → 💼 Corporate/Finance",
  },
  {
    stream: "Commerce",
    class: "Class 12 (Commerce)",
    subjects: "Adv. Accounts, Eco, Business",
    careers: "CA Inter, CUET, BBA, Banking",
    exams: "CUET, CA Inter, IPMAT, CLAT",
    colleges: "IIMs, DU, NMIMS, Christ Univ",
    icon: "📊",
    color: "from-orange-500 to-orange-700 hover:from-orange-400 hover:to-orange-600",
    pdf: "/pdfs/commerce12.pdf",
    flowchart: "📊 12th Comm → 💼 B.Com/BBA → 📈 MBA/CA → 🏦 Finance/Management",
  },
  {
    stream: "Arts",
    class: "Class 11 (Arts)",
    subjects: "History, Pol Sci, Psychology",
    careers: "Law, UPSC, Journalism",
    exams: "CUET, CLAT, NID",
    colleges: "JNU, NLU, BHU, DU",
    icon: "🎨",
    color: "from-pink-500 to-pink-700 hover:from-pink-400 hover:to-pink-600",
    pdf: "/pdfs/arts11.pdf",
    flowchart: "🎨 Arts → ⚖️ Law/UPSC/Design → 🏛️ Civil Services/Media",
  },
  {
    stream: "Arts",
    class: "Class 12 (Arts)",
    subjects: "Adv. History, Pol Sci, Lit",
    careers: "UPSC, BA Hons, Design, Law",
    exams: "CUET, NID, CLAT, UPSC",
    colleges: "JNU, DU, BHU, NLU, NID",
    icon: "🖌️",
    color: "from-rose-500 to-rose-700 hover:from-rose-400 hover:to-rose-600",
    pdf: "/pdfs/arts12.pdf",
    flowchart: "🖌️ 12th Arts → 🎓 BA/CLAT/NID → 🏛️ UPSC/Media/Law",
  },
  {
    stream: "All",
    class: "Class 9",
    subjects: "General foundation building",
    careers: "Olympiads, Reading, Coding",
    exams: "NTSE, NSO, IMO",
    colleges: "Guidance stage",
    icon: "🎯",
    color: "from-green-400 to-green-600 hover:from-green-300 hover:to-green-500",
    pdf: "/pdfs/class9.pdf",
    flowchart: "🧠 Explore → 📚 Skill Build → 🎯 Find Interest",
  },
  {
    stream: "All",
    class: "Class 10",
    subjects: "Core: Math, Science, Social",
    careers: "Stream decision year",
    exams: "Board Exam, NTSE",
    colleges: "Guidance stage",
    icon: "📘",
    color: "from-blue-400 to-blue-600 hover:from-blue-300 hover:to-blue-500",
    pdf: "/pdfs/class10.pdf",
    flowchart: "📘 Learn Basics → 🔍 Discover → 🧭 Choose Stream",
  },
];

const CareerClassSection = () => {
  const [selected, setSelected] = useState(null);

  useEffect(() => {
    VanillaTilt.init(document.querySelectorAll(".tilt-card"), {
      max: 20,
      speed: 400,
      glare: true,
      "max-glare": 0.3,
    });
  }, []);

  return (
    <section className=" bg-gradient-to-br from-gray-900 to-black text-white relative z-10 py-16">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold mb-2">🎓 Career Guidance by Class</h2>
        <p className="text-gray-300">Click a card to explore stream-wise career suggestions</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 px-6 max-w-6xl mx-auto">
        {allClasses.map((item, index) => (
          <motion.div
            key={index}
            className={`tilt-card bg-gradient-to-br ${item.color} p-6 rounded-2xl shadow-2xl cursor-pointer border border-white/20 backdrop-blur-xl transition-all duration-300`}
            whileHover={{ scale: 1.05 }}
            onClick={() => {
              setSelected(item);
              setTimeout(() => {
                document.getElementById("career-modal")?.scrollIntoView({ behavior: "smooth", block: "center" });
              }, 100);
            }}
          >
            <div className="text-5xl mb-4">{item.icon}</div>
            <h3 className="text-2xl font-bold mb-2 text-white/95 drop-shadow-md">{item.class}</h3>
            <p className="text-sm text-white/90 drop-shadow-sm">{item.subjects}</p>
            <a
              href={item.pdf}
              download
              onClick={(e) => e.stopPropagation()}
              className="inline-flex items-center gap-1 text-sm text-white/90 hover:text-white hover:underline mt-2"
            >
              📄 Download PDF
            </a>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            id="career-modal"
            className="fixed top-0 left-0 w-full h-full bg-black/60 backdrop-blur-md flex justify-center items-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`bg-gradient-to-br ${selected.color} text-white p-8 rounded-2xl max-w-md w-[90%] shadow-2xl relative border border-white/20 backdrop-blur-sm`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute top-3 right-4 text-white text-xl hover:text-red-300"
              >
                ✖
              </button>
              <div className="text-4xl mb-3 drop-shadow-xl">{selected.icon}</div>
              <h2 className="text-2xl font-bold mb-4 text-white/95 drop-shadow-md">{selected.class}</h2>

              <motion.div
                className="space-y-3 text-[15px]"
                initial="hidden"
                animate="show"
                variants={{
                  hidden: {},
                  show: { transition: { staggerChildren: 0.15 } },
                }}
              >
                {["subjects", "careers", "exams", "colleges", "flowchart"].map((field, i) => (
                  <motion.p
                    key={i}
                    variants={{ hidden: { opacity: 0, y: 10 }, show: { opacity: 1, y: 0 } }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                    className="bg-white/10 rounded-lg px-3 py-2 shadow-inner border-l-4 border-white/30"
                  >
                    <strong className="text-white font-semibold">
                      {field.charAt(0).toUpperCase() + field.slice(1).replace("flowchart", "Career Path").replace("careers", "Career Options").replace("exams", "Entrance Exams").replace("colleges", "Top Colleges")}:
                    </strong>{" "}
                    <span className="text-white/95 drop-shadow-sm">{selected[field]}</span>
                  </motion.p>
                ))}
              </motion.div>

              <a
                href={selected.pdf}
                download
                className="inline-block mt-6 text-sm text-white/90 hover:underline"
              >
                📎 Download Career Guide (PDF)
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default CareerClassSection;


