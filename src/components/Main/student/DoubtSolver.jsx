// StudentSupport.jsx
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaUserGraduate, FaHandsHelping, FaTools, FaComments,
  FaMoneyCheckAlt, FaPhoneAlt, FaCalendarAlt, FaBrain, FaEnvelope,
  FaBookOpen, FaGlobe, FaFileAlt, FaSearch, FaChalkboardTeacher
} from 'react-icons/fa';

const supportTabs = [
  { id: 'counseling', label: 'Counseling', icon: <FaUserGraduate /> },
  { id: 'grievance', label: 'Grievance', icon: <FaComments /> },
  { id: 'tech', label: 'Tech Help', icon: <FaTools /> },
  { id: 'mentorship', label: 'Mentorship', icon: <FaHandsHelping /> },
  { id: 'scholarship', label: 'Scholarships', icon: <FaMoneyCheckAlt /> },
  { id: 'helplines', label: 'Helplines', icon: <FaPhoneAlt /> },
];

const supportContent = {
  counseling: {
    en: [
      { icon: <FaBrain className="text-purple-500" />, text: "Personal, Academic & Career Counseling", modal: true },
      { icon: <FaCalendarAlt className="text-blue-500" />, text: "Book One-on-One Sessions", modal: true },
      { icon: <FaUserGraduate className="text-green-600" />, text: "Wellness & Motivation Workshops", link: "#" }
    ],
    hi: [
      { icon: <FaBrain className="text-purple-500" />, text: "व्यक्तिगत, शैक्षणिक और करियर परामर्श", modal: true },
      { icon: <FaCalendarAlt className="text-blue-500" />, text: "एकल सत्र बुक करें", modal: true },
      { icon: <FaUserGraduate className="text-green-600" />, text: "कल्याण और प्रेरणा कार्यशालाएँ", link: "#" }
    ]
  },
  grievance: {
    en: [
      { icon: <FaComments className="text-red-500" />, text: "Submit Complaints", modal: true },
      { icon: <FaSearch className="text-orange-500" />, text: "Track Your Complaint", link: "/track" },
      { icon: <FaEnvelope className="text-teal-500" />, text: "Contact Committee", link: "/contact-grievance" }
    ],
    hi: [
      { icon: <FaComments className="text-red-500" />, text: "शिकायत दर्ज करें", modal: true },
      { icon: <FaSearch className="text-orange-500" />, text: "शिकायत ट्रैक करें", link: "/track" },
      { icon: <FaEnvelope className="text-teal-500" />, text: "समिति से संपर्क करें", link: "/contact-grievance" }
    ]
  },
  tech: {
    en: [
      { icon: <FaTools className="text-indigo-500" />, text: "Online Class / LMS Help", link: "#" },
      { icon: <FaChalkboardTeacher className="text-yellow-500" />, text: "Report Lab Issue", modal: true },
      { icon: <FaEnvelope className="text-blue-500" />, text: "Email / ID Help", link: "#" }
    ],
    hi: [
      { icon: <FaTools className="text-indigo-500" />, text: "ऑनलाइन कक्षा / LMS सहायता", link: "#" },
      { icon: <FaChalkboardTeacher className="text-yellow-500" />, text: "लैब समस्या दर्ज करें", modal: true },
      { icon: <FaEnvelope className="text-blue-500" />, text: "ईमेल / आईडी सहायता", link: "#" }
    ]
  },
  mentorship: {
    en: [
      { icon: <FaHandsHelping className="text-green-500" />, text: "Senior Mentorship Program", link: "/mentorship" },
      { icon: <FaBookOpen className="text-blue-600" />, text: "Group Study Support", link: "#" },
      { icon: <FaUserGraduate className="text-purple-600" />, text: "Become a Mentor", modal: true }
    ],
    hi: [
      { icon: <FaHandsHelping className="text-green-500" />, text: "वरिष्ठ मेंटरशिप कार्यक्रम", link: "/mentorship" },
      { icon: <FaBookOpen className="text-blue-600" />, text: "समूह अध्ययन सहायता", link: "#" },
      { icon: <FaUserGraduate className="text-purple-600" />, text: "मेंटॉर बनें", modal: true }
    ]
  },
  scholarship: {
    en: [
      { icon: <FaFileAlt className="text-pink-500" />, text: "Scholarship Info PDF", download: true, link: "/files/scholarships.pdf" },
      { icon: <FaBookOpen className="text-teal-600" />, text: "Help With Documents", modal: true },
      { icon: <FaCalendarAlt className="text-orange-600" />, text: "Reminders & Alerts", link: "#" }
    ],
    hi: [
      { icon: <FaFileAlt className="text-pink-500" />, text: "छात्रवृत्ति पीडीएफ", download: true, link: "/files/scholarships.pdf" },
      { icon: <FaBookOpen className="text-teal-600" />, text: "दस्तावेज़ सहायता", modal: true },
      { icon: <FaCalendarAlt className="text-orange-600" />, text: "अनुस्मारक और अलर्ट", link: "#" }
    ]
  },
  helplines: {
    en: [
      { icon: <FaPhoneAlt className="text-pink-600" />, text: "Emergency Contact", link: "tel:1800123456" },
      { icon: <FaGlobe className="text-blue-500" />, text: "Academic Portals", link: "https://ncert.nic.in" },
      { icon: <FaBookOpen className="text-green-600" />, text: "Online Resources", link: "https://epathshala.nic.in" }
    ],
    hi: [
      { icon: <FaPhoneAlt className="text-pink-600" />, text: "आपातकालीन संपर्क", link: "tel:1800123456" },
      { icon: <FaGlobe className="text-blue-500" />, text: "शैक्षणिक पोर्टल", link: "https://ncert.nic.in" },
      { icon: <FaBookOpen className="text-green-600" />, text: "ऑनलाइन संसाधन", link: "https://epathshala.nic.in" }
    ]
  }
};

export default function StudentSupport() {
  const [activeTab, setActiveTab] = useState('counseling');
  const [lang, setLang] = useState('en');
  const [modalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleClick = (item) => {
    if (item.modal) {
      setModalContent(item.text);
      setModalOpen(true);
    } else if (item.download) {
      const link = document.createElement('a');
      link.href = item.link;
      link.download = '';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  };

  const renderContent = () =>
    supportContent[activeTab][lang].map((item, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: idx * 0.1 }}
        onClick={() => handleClick(item)}
        className="flex items-center gap-3 bg-white p-4 rounded-xl shadow hover:shadow-md transition-all text-gray-800 cursor-pointer"
      >
        <div className="text-2xl">{item.icon}</div>
        {item.link && !item.modal && !item.download ? (
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="font-medium hover:underline">
            {item.text}
          </a>
        ) : (
          <span className="font-medium">{item.text}</span>
        )}
      </motion.div>
    ));

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-2xl max-w-6xl mx-auto mt-10">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-3xl font-bold text-blue-800">🎯 Student Support</h2>
        <button
          onClick={() => setLang(lang === 'en' ? 'hi' : 'en')}
          className="text-sm bg-blue-200 px-3 py-1 rounded-full shadow hover:bg-blue-300 transition-all"
        >
          {lang === 'en' ? 'हिंदी में' : 'In English'}
        </button>
      </div>

      <div className="flex flex-wrap gap-3 mb-6">
        {supportTabs.map(tab => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full transition-all ${
              activeTab === tab.id ? 'bg-blue-100 text-blue-900 shadow-lg' : 'bg-white/40 text-gray-700'
            }`}
          >
            {tab.icon}
            {tab.label}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-4">{renderContent()}</div>

      <div className="mt-10 text-center">
        <h3 className="text-xl font-semibold text-blue-700 mb-2">📣 Need More Help?</h3>
        <button
          onClick={() => {
            setModalContent('Feedback / Support Request');
            setModalOpen(true);
          }}
          className="px-5 py-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 text-white font-semibold shadow-lg hover:scale-105 transition"
        >
          Submit Feedback / Request Support
        </button>
      </div>

      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/30 flex items-center justify-center z-50"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-6 w-full max-w-md shadow-xl text-center"
            >
              <h2 className="text-2xl font-semibold mb-4 text-blue-800">🔔 {modalContent}</h2>
              <p className="text-gray-600 mb-4">This feature will open a form or process soon.</p>
              <button
                onClick={() => setModalOpen(false)}
                className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
