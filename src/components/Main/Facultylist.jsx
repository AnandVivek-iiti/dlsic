import { useState } from 'react';


const Faculty = () => {
  const facultyList = [
    {
      name: "Mr. आशीष कुमार सिंह",
      role: "Principal & English lecturer",
      img: "faculty1.jpg"
    },
    {
      name: "Dr. हरमीत सिंह",
      role: "SubPrincipal & Hindi lecturer",
      img: "faculty2.jpg"
    },
    {
      name: "Mr. राजेश कुमार द्विवेदी",
      role: "Hindi & Sanskrit expert",
      img: "faculty3.jpg"
    },
    {
      name: "Dr. राजेश गंगवार",
      role: "English / Communication expert and lecturer",
      img: "faculty4.jpg"
    },
    {
      name: "Mr. रघुवीर शरण",
      role: "Physics & Mathematics expert",
      img: "faculty5.jpg"
    },
    {
      name: "Mr. रावेन्द प्रताप सिंह",
      role: "Biology & Chemistry lecturer",
      img: "faculty5.jpg"
    },
    {
      name: "Mr. अतुल कुमार मौर्य",
      role: "Agriculture lecturer",
      img: "faculty5.jpg"
    },
    {
      name: "Mr. रमेश चंद्र",
      role: "Mathematics lecturer",
      img: "faculty5.jpg"
    },
    {
      name: "Mr. अमरेश कुमार",
      role: "Biology & Chemistry lecturer",
      img: "faculty5.jpg"
    },
    {
      name: "Mr. जयदीप सिंह",
      role: "Physics & Mathematics lecturer",
      img: "faculty5.jpg"
    },
    {
      name: "Mr. सुरेश चंद्र",
      role: "Economics & Commerce lecturer",
      img: "faculty5.jpg"
    },
    {
      name: "Mr. राजपाल सिंह",
      role: "sociology & Political Science lecturer",
      img: "faculty5.jpg"
    },
    {
      name: "Mr. रामसिंह",
      role: "Mathematics lecturer",
      img: "faculty5.jpg"
    },
    {
      name: "Mr. राजेश कुमार गंगवार",
      role: "English & Communication",
      img: "faculty5.jpg"
    },
    {
      name: "Dr. सर्वेश कुमार",
      role: "History social science ecturer",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. कुशुम गंगवार",
      role: "History & Geography lecturer",
      img: "faculty5.jpg"
    },
    {
      name: "Mrs. ग्रिजेश गंगवार",
      role: "Hindi & sanskrit lecturer",
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

export default Faculty;


