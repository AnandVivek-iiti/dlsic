import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

import AV from '../assets/AV.png';
import SR from '../assets/SR.png';
import AP from '../assets/AP.png';
import AS from '../assets/AS.png';
import IMG from '../assets/image.png';
import M from '../assets/M.png';

const alumniData = [
  {
    name: { en: 'Sovran Raj', hi: 'सोवरन राज' },
    batch: { en: 'Batch of 2023', hi: '2023 बैच' },
    role: { en: 'Student at IIIT Jabalpur', hi: 'आईआईआईटी जबलपुर के छात्र' },
    quote: {
      en: 'DLS gave me the foundation I needed to dream big.',
      hi: 'DLS ने मुझे बड़ा सपना देखने की नींव दी।',
    },
    achievements: ['AI Hackathon Finalist', 'Techfest Winner at IIIT'],
    image: SR,
    cardColor: 'from-purple-500 to-pink-500',
    popupColor: 'bg-gradient-to-br from-purple-800 to-pink-700',
  },
  {
    name: { en: 'Anurag Pandey', hi: 'अनुराग पांडेय' },
    batch: { en: 'Batch of 2023', hi: '2023 बैच' },
    role: { en: 'Indian Navy Officer', hi: 'भारतीय नौसेना अधिकारी' },
    quote: {
      en: 'The discipline and guidance at DLS shaped my journey.',
      hi: 'DLS की अनुशासन और मार्गदर्शन ने मेरी यात्रा बनाई।',
    },
    achievements: ['Commissioned Officer, 2024', 'Best Cadet Award'],
    image: AP,
    cardColor: 'from-blue-500 to-cyan-500',
    popupColor: 'bg-gradient-to-br from-blue-800 to-cyan-700',
  },
  {
    name: { en: 'Ashish Sharma', hi: 'आशीष शर्मा' },
    batch: { en: 'Batch of 2023', hi: '2023 बैच' },
    role: { en: 'NEET Qualifier', hi: 'नीट क्वालिफायर' },
    quote: {
      en: 'DLS gave me the foundation I needed to dream big.',
      hi: 'DLS ने मुझे बड़ा सपना देखने की नींव दी।',
    },
    achievements: ['Scored 680 in NEET', 'Top 1000 AIR'],
    image: AS,
    cardColor: 'from-green-500 to-emerald-500',
    popupColor: 'bg-gradient-to-br from-green-800 to-emerald-700',
  },
  {
    name: { en: 'Vikas Yadav', hi: 'विकास यादव' },
    batch: { en: 'Batch of 2023', hi: '2023 बैच' },
    role: { en: 'Indian Army', hi: 'भारतीय सेना' },
    quote: {
      en: 'DLS gave me the foundation I needed to dream big.',
      hi: 'DLS ने मुझे बड़ा सपना देखने की नींव दी।',
    },
    achievements: ['Para Regiment Inductee', 'Gallantry Training Medal'],
    image: IMG,
    cardColor: 'from-rose-500 to-red-500',
    popupColor: 'bg-gradient-to-br from-rose-800 to-red-700',
  },
  {
    name: { en: 'Anand Vivek', hi: 'आनंद विवेक' },
    batch: { en: 'Batch of 2024', hi: '2024 बैच' },
    role: { en: 'Student at IIT Indore', hi: 'आईआईटी इंदौर के छात्र' },
    quote: {
      en: 'DLS helped me grow as a leader and learner.',
      hi: 'DLS ने मुझे एक नेता और शिक्षार्थी के रूप में बढ़ने में मदद की।',
    },
    achievements: ['IIT Techfest Organizer', 'Coding Club President'],
    image: AV,
    cardColor: 'from-indigo-500 to-blue-500',
    popupColor: 'bg-gradient-to-br from-indigo-800 to-blue-700',
  },
  {
    name: { en: 'Mohit', hi: 'मोहित' },
    batch: { en: 'Batch of 2024', hi: '2024 बैच' },
    role: {
      en: 'Student at SLIET Punjab, and preparing for DRDO.',
      hi: 'SLIET पंजाब में छात्र, DRDO की तैयारी कर रहे हैं।',
    },
    quote: {
      en: 'DLS helped me grow as a leader and learner.',
      hi: 'DLS ने मुझे एक नेता और शिक्षार्थी के रूप में बढ़ने में मदद की।',
    },
    achievements: ['SLIET Scholarship Holder', 'DRDO Aspirant'],
    image: M,
    cardColor: 'from-yellow-500 to-orange-500',
    popupColor: 'bg-gradient-to-br from-yellow-700 to-orange-600',
  },
];

export default function AlumniSection() {
  const [selectedAlumni, setSelectedAlumni] = useState(null);
  const [language, setLanguage] = useState('en');

  return (
    <section className="relative py-20 bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-indigo-500/20 via-indigo-300/10 to-transparent opacity-50 z-0" />

      <div className="relative z-10 max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl font-bold text-indigo-300 drop-shadow-xl">🎓 DLS Alumni</h2>
          <button
            onClick={() => setLanguage(language === 'en' ? 'hi' : 'en')}
            className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-2 rounded-full shadow"
          >
            {language === 'en' ? 'हिन्दी' : 'English'}
          </button>
        </div>

        <p className="text-center text-gray-300 max-w-xl mx-auto text-lg mb-12">
          {language === 'en'
            ? 'Our proud alumni are making a difference across industries and nations. Here’s what some of them have to say.'
            : 'हमारे गौरवशाली पूर्व छात्र विभिन्न क्षेत्रों में प्रभावशाली कार्य कर रहे हैं। यहां कुछ के अनुभव हैं।'}
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          {alumniData.map((alumni, index) => (
            <motion.div
              key={index}
              onClick={() => setSelectedAlumni(alumni)}
              whileHover={{ scale: 1.05, y: -6 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`cursor-pointer bg-gradient-to-br ${alumni.cardColor}
                text-white rounded-2xl shadow-lg w-[300px] min-h-[360px] p-6 text-center
                hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transform transition duration-300`}
            >
              <img
                src={alumni.image}
                alt={alumni.name.en}
                className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-white/30 shadow-lg ring-4 ring-white/40"
              />
              <h3 className="text-xl font-semibold text-white">{alumni.name[language]}</h3>
              <p className="text-sm text-indigo-100 italic">{alumni.batch[language]}</p>
              <p className="text-sm text-white mt-1">{alumni.role[language]}</p>
              <p className="text-sm text-indigo-100 mt-4 px-2 font-medium">“{alumni.quote[language]}”</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedAlumni && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-60 backdrop-blur-md z-50 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              className={`text-white rounded-3xl p-8 w-[90%] max-w-md shadow-2xl relative ${selectedAlumni.popupColor}`}
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 50, opacity: 0 }}
              transition={{ type: 'spring', damping: 20, stiffness: 300 }}
            >
              <button
                onClick={() => setSelectedAlumni(null)}
                className="absolute top-4 right-4 text-gray-200 hover:text-white text-xl font-bold"
              >
                &times;
              </button>
              <img
                src={selectedAlumni.image}
                alt={selectedAlumni.name.en}
                className="w-28 h-28 rounded-full mx-auto mb-4 border-4 border-white/20 shadow ring-4 ring-white/30"
              />
              <h3 className="text-2xl font-bold text-white text-center">{selectedAlumni.name[language]}</h3>
              <p className="text-sm text-indigo-200 text-center">{selectedAlumni.batch[language]}</p>
              <p className="text-sm text-white text-center mt-1">{selectedAlumni.role[language]}</p>
              <p className="text-md italic text-indigo-100 mt-4 text-center px-4">“{selectedAlumni.quote[language]}”</p>

              <div className="mt-6">
                <h4 className="text-white font-semibold mb-2 text-center">🎖 {language === 'en' ? 'Achievements' : 'उपलब्धियां'}</h4>
                <ul className="list-disc list-inside text-white/90 text-sm space-y-1 px-4">
                  {selectedAlumni.achievements.map((achieve, i) => (
                    <li key={i}>{achieve}</li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

