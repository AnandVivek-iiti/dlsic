import { motion } from "framer-motion";

const notices = [
  {
    title: "📢 Mid-Term Exam Schedule Released",
    date: "28 June 2025",
    file: "/notices/midterm-schedule.pdf",
    description: "Get ready for exams with full schedule details.",
    tag: "Exams",
  },
  {
    title: "📝 Admit Card Available for Class 12",
    date: "24 June 2025",
    file: "/notices/admit-card.pdf",
    description: "Download your admit card for upcoming exams.",
    tag: "Admission",
  },
  {
    title: "🎉 Independence Day Celebration Notice",
    date: "22 June 2025",
    file: "/notices/independence-day.pdf",
    description: "Join us for cultural programs and events.",
    tag: "Events",
  },
];

const links = [
  {
    title: "📘 NCERT Official Website",
    url: "https://ncert.nic.in/",
    description: "Access NCERT textbooks and resources.",
  },
  {
    title: "🎓 UP Board Result Portal",
    url: "https://upresults.nic.in/",
    description: "Check your exam results directly here.",
  },
   {
    title: "📋 SSC Official Site",
    url: "https://ssc.nic.in/",
    description: "Staff Selection Commission exam updates and resources.",
  },
  {
    title: "📝 UPSC Official Website",
    url: "https://upsc.gov.in/",
    description: "Union Public Service Commission exam details and notifications.",
  },
  {
    title: "🔬 NEET Official Website",
    url: "https://ntaneet.nic.in/",
    description: "National Eligibility cum Entrance Test info and updates.",
  },
  {
    title: "🎓 JEE Official Portal",
    url: "https://jeemain.nta.nic.in/",
    description: "Joint Entrance Exam main information and resources.",
  },
  {
    title: "💡 CUET UG Official Site",
    url: "https://cuet.samarth.ac.in/",
    description: "Get updates for the CUET UG entrance exam.",
  },
  {
    title: "🖥️ DigiLocker",
    url: "https://digilocker.gov.in/",
    description: "Securely store and access your important documents online.",
  },
  {
    title: "🎯 SWAYAM",
    url: "https://swayam.gov.in/",
    description: "Free online courses and educational resources.",
  },
];


const NoticeLinks = () => {
  return (
    <section className=" bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white relative max-w-auto">
      <div className="text-center ">
        <h2 className="text-3xl font-extrabold mb-3 drop-shadow-lg">
          📎 Notices & Important Links
        </h2>
        <p className="text-indigo-300 max-w-auto mx-auto text-lg font-medium">
          Stay updated with all the latest announcements and essential resources
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12  max-w-auto mx-auto">
        {/* Notices */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8  border border-indigo-700 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
        >
          <h3 className="text-3xl font-semibold mb-8 text-indigo-300 tracking-wide">
            📄 Latest Notices
          </h3>
          <ul className="space-y-6">
            {notices.map((n, i) => (
              <li
                key={i}
                className="p-6 rounded-xl bg-gradient-to-r from-indigo-800 to-purple-900 border border-indigo-600 hover:from-purple-700 hover:to-indigo-800 transition-transform transform hover:scale-[1.03] shadow-lg cursor-pointer"
              >
                <div className="flex justify-between items-start">
                  <div className="max-w-[90%]">
                    <h4 className="text-white text-xl font-semibold mb-1">
                      {n.title}
                    </h4>
                    <p className="text-indigo-300 text-sm mb-2">{n.date}</p>
                    <p className="text-indigo-200 text-sm">{n.description}</p>
                  </div>
                  <div className="flex flex-col items-end space-y-2">
                    {n.tag && (
                      <span className="bg-purple-700 px-3 py-1 rounded-full text-xs font-semibold text-indigo-100 uppercase select-none">
                        {n.tag}
                      </span>
                    )}
                    {n.file && (
                      <a
                        href={n.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-4 py-2 bg-indigo-600 rounded-lg text-white text-sm font-medium hover:bg-indigo-500 transition"
                      >
                        View PDF
                      </a>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* Important Links */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/10 backdrop-blur-xl rounded-3xl p-8 border border-indigo-700 shadow-[0_0_20px_rgba(139,92,246,0.4)]"
        >
          <h3 className="text-3xl font-semibold mb-8 text-indigo-300 tracking-wide">
            🔗 Important Links
          </h3>
          <ul className="space-y-6">
            {links.map((link, i) => (
              <li
                key={i}
                className="p-6 rounded-xl bg-gradient-to-r from-indigo-800 to-purple-900 border border-indigo-600 hover:from-purple-700 hover:to-indigo-800 transition-transform transform hover:scale-[1.03] shadow-lg cursor-pointer"
              >
                <a
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block text-white font-semibold text-lg hover:text-purple-300 transition"
                  title={link.description}
                >
                  {link.title}
                </a>
                <p className="mt-1 text-indigo-300 text-sm">{link.description}</p>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
};

export default NoticeLinks;

