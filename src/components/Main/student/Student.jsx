import { useState } from 'react';
import ClassSelector from './ClassSelector';
import SubjectSelector from './SubjectSelector';
import TopicList from './TopicList';
import UploadNotes from './UploadNotes';
import NotesList from './NotesList';
import BackButton from './BackButton';
export default function Student() {
  const [selectedClass, setSelectedClass] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState(null);
  const [showUpload, setShowUpload] = useState(false);

  const resetAll = () => {
    setSelectedClass(null);
    setSelectedSubject(null);
    setShowUpload(false);
  };

  return (
    <section id="student" className="p-8 bg-white">
      {/* ✨ Static Info Section */}
      <h2 className="text-2xl font-bold mb-4 text-center">Student Resources</h2>
      <p className="text-center max-w-3xl mx-auto mb-8">
        We empower students with access to digital resources and academic materials to enhance their learning experience.
      </p>

      <div className="flex flex-wrap justify-center gap-6 mb-10">
        <div className="bg-gray-100 rounded-lg shadow-md p-4 w-80 text-center">
          <img src="https://source.unsplash.com/400x300/?schedule,timetable" alt="Timetable" className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl font-semibold mt-4">Time Table</h3>
          <p className="my-2">Organized schedules help students plan their studies efficiently.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">See more</button>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-md p-4 w-80 text-center">
          <img src="https://source.unsplash.com/400x300/?assignments,books" alt="Assignments" className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl font-semibold mt-4">Assignments & Homework</h3>
          <p className="my-2">Students receive regular assignments to build subject understanding.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">See more</button>
        </div>

        <div className="bg-gray-100 rounded-lg shadow-md p-4 w-80 text-center">
          <img src="https://source.unsplash.com/400x300/?students,attendance" alt="Attendance" className="w-full h-48 object-cover rounded" />
          <h3 className="text-xl font-semibold mt-4">Attendance Tracking</h3>
          <p className="my-2">Students and parents can monitor class attendance regularly.</p>
          <button className="bg-blue-500 text-white py-2 px-4 rounded">See more</button>
        </div>
      </div>

      {/* 📚 Interactive Section */}
      <div className="p-4 max-w-3xl mx-auto">
        <h1 className="text-2xl font-bold text-center text-[#981F4D] mb-6">📚 Study Material Portal</h1>

        {!selectedClass ? (
          <ClassSelector onSelectClass={setSelectedClass} />
        ) : !selectedSubject ? (
          <>
            <BackButton onBack={() => setSelectedClass(null)} />
            <SubjectSelector onSelectSubject={setSelectedSubject} />
          </>
        ) : (
          <>
            <BackButton onBack={() => setSelectedSubject(null)} />
            <div className="flex justify-between items-center my-4">
              <h2 className="text-xl font-semibold text-[#981F4D]">
                Class {selectedClass} - {selectedSubject}
              </h2>
              <button
                onClick={() => setShowUpload((prev) => !prev)}
                className="bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-600 text-sm"
              >
                {showUpload ? 'Hide Upload' : 'Upload New Note'}
              </button>
            </div>

            {/* 📝 NCERT Topics */}
            <TopicList subject={selectedSubject} classLevel={selectedClass} />

            {/* ⬆️ Upload Section */}
            {showUpload && (
              <div className="mt-6">
                <UploadNotes />
              </div>
            )}

            {/* 📥 Uploaded Notes */}
            <div className="mt-8">
              <NotesList subject={selectedSubject} />
            </div>

            {/* 🔁 Reset All */}
            <div className="text-center mt-6">
              <button
                onClick={resetAll}
                className="text-red-500 text-sm underline hover:text-red-700"
              >
                🔁 Reset All
              </button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
