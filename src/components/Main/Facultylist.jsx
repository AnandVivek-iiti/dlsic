const FacultySection = () => {
  const facultyList = [
    {
      name: "डॉ. सीमा गुप्ता",
      role: "Physics Lecturer",
      img: "faculty1.jpg"
    },
    {
      name: "प्रो. अनुराग मिश्रा",
      role: "Mathematics HOD",
      img: "faculty2.jpg"
    },
    {
      name: "Ms. रितु सिंह",
      role: "Biology Expert",
      img: "faculty3.jpg"
    },
    {
      name: "Mr. आशीष वर्मा",
      role: "Chemistry Mentor",
      img: "faculty4.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. नेहा सक्सेना",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
  ];

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl p-6 shadow-md mt-10">
      <h2 className="text-2xl font-bold text-gray-800 mb-2">👨‍🏫 Faculty & Mentors (शिक्षक और मार्गदर्शक)</h2>
      <p className="text-gray-600">हमारे शिक्षकगण छात्रों के लिए ज्ञान, मार्गदर्शन और प्रेरणा के प्रतीक हैं।</p>

      <div className="flex justify-between my-4 flex-wrap gap-2">
        <div className="flex-1 bg-cyan-100 p-4 rounded-md text-center">
          <span className="text-2xl">🎓</span>
          <strong className="block">Experienced Faculty</strong>
        </div>
        <div className="flex-1 bg-cyan-100 p-4 rounded-md text-center">
          <span className="text-2xl">📘</span>
          <strong className="block">Subject Experts</strong>
        </div>
        <div className="flex-1 bg-cyan-100 p-4 rounded-md text-center">
          <span className="text-2xl">🧑‍🏫</span>
          <strong className="block">Personal Mentorship</strong>
        </div>
      </div>

      <div className="bg-gray-100 p-6 border-l-4 border-blue-600 rounded space-y-2">
        <h3 className="text-xl font-semibold">Teaching Highlights (शिक्षण विशेषताएँ)</h3>
        <ul className="list-disc pl-6">
          <li>Highly qualified and passionate educators</li>
          <li>Regular training and skill upgradation workshops</li>
          <li>Supportive and motivating academic environment</li>
          <li>1:1 mentoring and counseling sessions</li>
          <li>Integration of modern teaching tools and methods</li>
        </ul>
      </div>

      <div className="bg-gray-100 p-6 border-l-4 border-blue-600 rounded mt-6">
        <h3 className="text-xl font-semibold mb-4">👩‍🏫 Our Faculty Members (हमारे शिक्षक)</h3>
        <div className="flex flex-wrap justify-center gap-6">
          {facultyList.map((fac, index) => (
            <div key={index} className="w-36 text-center">
              <img src={fac.img} alt={fac.name} className="w-full h-36 object-cover rounded-lg shadow-md" />
              <p className="mt-2 text-sm font-medium">
                <strong>{fac.name}</strong>
                <br />{fac.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FacultySection;

