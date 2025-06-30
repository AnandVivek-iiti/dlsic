import { motion, percent } from 'framer-motion';

const ProgressReport = () => {
  const student = {
    name: 'Anand Vivek',
    class: '12th Science',
    rollNumber: '5',
    percentage: '91%',
    attendance: '94%',
    remarks: 'Consistent, Active & Excellent in Science.',
    extraCurriculars: [
      '🏆 Science Winner',
      '🎤 Debate Champion',
      '🤝 Volunteer at NSS',
    ],
    subjects: [
      { name: 'Physics', marks: 92 },
      { name: 'Chemistry', marks: 88 },
      { name: 'Maths', marks: 95 },
      { name: 'English', marks: 85 },
      { name: 'Hindi', marks: 90 },
    ],
  };

  const colors = [
    'from-green-100 to-green-50 border-green-300 text-green-700',
    'from-yellow-100 to-yellow-50 border-yellow-300 text-yellow-700',
    'from-blue-100 to-blue-50 border-blue-300 text-blue-700',
    'from-pink-100 to-pink-50 border-pink-300 text-pink-700',
    'from-purple-100 to-purple-50 border-purple-300 text-purple-700',
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-slate-100 to-purple-50 py-10 rounded-xl shadow-inner">
      <div className="max-w-6xl mx-auto px-4">
        {/* Student Profile */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-2xl p-8 md:p-10 text-center mb-14"
        >
          <img
            src="AV.png"
            alt="Student"
            className="w-28 h-28 mx-auto rounded-full border-4 border-indigo-300 shadow-lg mb-4"
          />
          <h2 className="text-3xl font-bold text-indigo-700">{student.name}</h2>
          <p className="text-gray-600 mt-1 text-sm">
            Class: {student.class} • Roll No: {student.rollNumber}
          </p>
        </motion.div>

        {/* Subjects */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 mb-12"
        >
          {student.subjects.map((subject, index) => (
            <div
              key={index}
              className={`bg-gradient-to-br ${colors[index % colors.length]} border rounded-xl p-6 shadow-md hover:shadow-lg transition`}
            >
              <h3 className="text-lg font-semibold mb-1">{subject.name}</h3>
              <p className="text-sm">Marks: <span className="font-bold">{subject.marks}</span></p>
            </div>
          ))}
        </motion.div>

        {/* Performance Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg mb-12"
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-800">📊 Performance Summary</h3>
          <ul className="text-gray-700 space-y-2 text-sm md:text-base">
            <li><strong>GPA:</strong> {student.gpa}</li>
            <li><strong>Attendance:</strong> {student.attendance}</li>
            <li><strong>Remarks:</strong> {student.remarks}</li>
          </ul>
        </motion.div>

        {/* Extra Curricular */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl p-8 shadow-lg mb-12"
        >
          <h3 className="text-xl font-semibold mb-4 text-indigo-800">🎯 Extra-Curricular Achievements</h3>
          <ul className="list-disc list-inside text-gray-700 space-y-1 text-sm md:text-base">
            {student.extraCurriculars.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.div>

        {/* Download Button with Centered Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-6"
        >
          <p className="mb-2 text-gray-600 text-sm md:text-base font-medium">👉 Click below to download Report Card</p>

          <div className="flex justify-center">
            <a
              href="/downloads/report-card.pdf"
              download
              className="inline-flex items-center justify-center px-6 py-3 text-white font-semibold text-sm rounded-full bg-gradient-to-br from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg hover:shadow-xl transition-all duration-300 hover:ring-2 hover:ring-purple-400"
            >
              📥 Download Report Card
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProgressReport;

