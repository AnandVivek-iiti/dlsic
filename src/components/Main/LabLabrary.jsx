import { motion } from 'framer-motion'
import labImage from '../assets/labs.png'
import libraryImage from '../assets/lib.png'

const LabsAndLibraries = () => {
  return (
    <section className="bg-gray-100 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-3xl font-bold text-center text-gray-800 mb-10"
        >
          🏫 Labs & Libraries
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Science & Computer Labs</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Fully equipped Physics, Chemistry & Biology labs</li>
                <li>Modern Computer Lab with high-speed internet</li>
                <li>Projector-based practical demonstrations</li>
                <li>Robotics and Electronics experimentation setup</li>
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
              <h3 className="text-xl font-semibold text-gray-800 mb-2">Digital & Book Libraries</h3>
              <ul className="list-disc pl-5 text-gray-600 space-y-1">
                <li>Thousands of academic & reference books</li>
                <li>Access to digital resources & e-books</li>
                <li>Quiet study zones and discussion rooms</li>
                <li>Library management system for easy search</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default LabsAndLibraries
