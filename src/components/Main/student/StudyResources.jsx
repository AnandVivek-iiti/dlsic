// StudentResources.jsx
import { useState } from 'react';

const classes = ['Class 6', 'Class 7', 'Class 8', 'Class 9', 'Class 10', 'Class 11', 'Class 12'];

const generateResources = (className) => ([
  {
    icon: '📘',
    label: `NCERT Book - ${className}`,
    color: 'bg-blue-500',
    viewLink: '#',      // Replace with actual view link
    downloadLink: '#',  // Replace with actual download link
  },
  {
    icon: '📕',
    label: `Exemplar Book - ${className}`,
    color: 'bg-red-500',
    viewLink: '#',
    downloadLink: '#',
  },
  {
    icon: '📒',
    label: 'Notes - Coming Soon',
    color: 'bg-yellow-400',
    viewLink: null,
    downloadLink: null,
  },
]);

const resources = Object.fromEntries(classes.map(cls => [cls, generateResources(cls)]));

const StudentResources = () => {
  const [selectedClass, setSelectedClass] = useState('Class 12');

  return (
    <div className="resources-container">
      <div className="bg-gray-900 min-h-screen max-w-6xl text-white flex flex-col items-center px-4 py-10">
        <h1 className="text-3xl font-bold mb-8">Student Resources</h1>

        {/* Class Selection Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-8">
          {classes.map((cls) => (
            <button
              key={cls}
              onClick={() => setSelectedClass(cls)}
              className={`px-4 py-2 rounded-md text-sm font-semibold transition duration-200 ${
                selectedClass === cls
                  ? 'bg-gray-700 text-white'
                  : 'bg-gray-800 hover:bg-gray-700'
              }`}
            >
              {cls}
            </button>
          ))}
        </div>

        {/* Resource Cards */}
        <div className="w-full max-w-5xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {resources[selectedClass]?.map((res, index) => (
            <div
              key={index}
              className="flex flex-col justify-between bg-gray-800 rounded-lg p-4 shadow-lg hover:scale-[1.02] transition-transform duration-200"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-3 h-3 rounded-full ${res.color}`}></div>
                <span className="text-lg">{res.icon}</span>
                <span className="text-sm font-medium">{res.label}</span>
              </div>

              <div className="mt-auto flex gap-2">
                <button
                  className={`w-full py-1 text-sm rounded-md ${
                    res.viewLink
                      ? 'bg-blue-600 hover:bg-blue-700'
                      : 'bg-gray-700 cursor-not-allowed'
                  }`}
                  disabled={!res.viewLink}
                  onClick={() => res.viewLink && window.open(res.viewLink, '_blank')}
                >
                  View
                </button>
                <button
                  className={`w-full py-1 text-sm rounded-md ${
                    res.downloadLink
                      ? 'bg-green-600 hover:bg-green-700'
                      : 'bg-gray-700 cursor-not-allowed'
                  }`}
                  disabled={!res.downloadLink}
                  onClick={() => res.downloadLink && window.open(res.downloadLink, '_blank')}
                >
                  Download
                </button>
              </div>
            </div>
          )) || (
            <div className="text-center col-span-full text-gray-400">
              Resources not available yet.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentResources;
