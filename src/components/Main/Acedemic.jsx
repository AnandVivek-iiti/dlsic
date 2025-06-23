

const academicData = [
  {
    icon: '🔬',
    title: 'Science Stream',
    points: [
      'Physics, Chemistry, Biology, Mathematics',
      'Modern, well-equipped laboratories',
      'Expert faculty & competitive exam guidance',
    ],
    link: 'academic-details.html?stream=science',
  },
  {
    icon: '💼',
    title: 'Commerce Stream',
    points: [
      'Business Studies, Accountancy, Economics',
      'Project-based & practical learning',
      'Real-world simulations & workshops',
    ],
    link: 'academic-details.html?stream=commerce',
  },
  {
    icon: '🎨',
    title: 'Arts Stream',
    points: [
      'History, Political Science, Sociology, Hindi, English',
      'Focus on creativity & critical analysis',
      'Co-curricular activities for holistic growth',
    ],
    link: 'academic-details.html?stream=arts',
  },
  {
    icon: '🏅',
    title: 'Academic Excellence',
    points: [
      'Regular tests & assessments',
      'Remedial & doubt-clearing sessions',
      'Smart classrooms & topper mentorship',
      'Scholarships & rewards for meritorious students',
    ],
    link: 'academic-details.html?stream=excellence',
  },
  {
    icon: '🧑‍🏫',
    title: 'Faculty & Environment',
    points: [
      'Experienced, dedicated teachers',
      'Positive, disciplined learning environment',
      'Personalized attention & mentorship',
    ],
    link: 'academic-details.html?stream=faculty',
  },
  {
    icon: '🧪',
    title: 'Labs & Library',
    points: [
      'Science & computer labs for hands-on learning',
      'Digital & traditional library resources',
      'Focus on practical knowledge',
    ],
    link: 'academic-details.html?stream=labs',
  },
];

const AcademicSection = () => {
  return (
    <section className=" bg-gradient-to-br from-indigo-100 to-slate-50 shadow-2xl">
      <h2 className="text-4xl text-center font-bold text-indigo-800 mb-2 tracking-wide">
        📘 Our Academic Excellence
      </h2>
      <p className="text-center text-gray-600 text-lg max-w-xl mx-auto mb-10">
        At DLS Inter College, Rithora, we are committed to nurturing well-rounded,
        responsible, and curious learners. Our curriculum is designed to foster
        conceptual understanding, critical thinking, and personal growth.
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        {academicData.map((item, index) => (
          <div
            key={index}
            className="bg-white w-[320px] min-h-[340px] p-8 rounded-[22px] shadow-xl flex flex-col items-start transform transition-transform duration-300 hover:scale-[1.04] hover:-translate-y-2 hover:rotate-y-2 hover:z-10 relative"
          >
            <span className="text-4xl text-indigo-800 drop-shadow-md mb-3">{item.icon}</span>
            <h3 className="text-xl font-semibold text-indigo-800 mb-3">{item.title}</h3>
            <ul className="list-disc pl-5 text-gray-700 mb-6 space-y-1">
              {item.points.map((point, i) => (
                <li key={i}>{point}</li>
              ))}
            </ul>
            <a
              href={item.link}
              className="self-end relative mx-auto inline-block bg-gradient-to-r from-blue-800 to-blue-400 text-white font-semibold text-base px-6 py-2 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:-translate-y-1 hover:rotate-[-1deg] overflow-hidden"
            >
              <span className="relative z-10 mx-auto">See More</span>
              <span className="absolute inset-0 w-[60%] skew-x-[-25deg] bg-white/20 left-[-60%] transition-all duration-500 hover:left-[110%]" />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default AcademicSection;