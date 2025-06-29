import { motion } from 'framer-motion';
import { BookOpen, FlaskConical, LandPlot, BriefcaseBusiness } from 'lucide-react';

const streams = [
  {
    title: 'Science Stream',
    icon: <FlaskConical className="w-10 h-10 text-blue-600" />,
    color: 'from-blue-100 to-blue-50',
    subjects: [
      'Physics, Chemistry, Biology, Mathematics',
      'Competitive Exam Preparation',
      'Modern Labs & Practicals'
    ],
  },
  {
    title: 'Commerce Stream',
    icon: <BriefcaseBusiness className="w-10 h-10 text-yellow-600" />,
    color: 'from-yellow-100 to-yellow-50',
    subjects: [
      'Accountancy, Business Studies, Economics',
      'Practical Simulations & Projects',
      'Workshops & Finance Skills'
    ],
  },
  {
    title: 'Arts Stream',
    icon: <BookOpen className="w-10 h-10 text-pink-600" />,
    color: 'from-pink-100 to-pink-50',
    subjects: [
      'History, Political Science, Hindi, English',
      'Creative Expression & Analysis',
      'Debates, Events & Culture Focus'
    ],
  },
  {
    title: 'Agriculture Stream',
    icon: <LandPlot className="w-10 h-10 text-green-600" />,
    color: 'from-green-100 to-green-50',
    subjects: [
      'Soil Science, Horticulture, Agronomy',
      'Field Training & Lab Practices',
      'Modern Farming Techniques'
    ],
  },
];

const Streams = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-gray-100 to-slate-50 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">
          🎓 Available Streams
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
                <div className="p-3 bg-white rounded-full shadow">{stream.icon}</div>
                <h3 className="text-2xl font-semibold text-gray-800">{stream.title}</h3>
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

