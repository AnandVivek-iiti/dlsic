import { useState , useEffect } from "react";
import { motion } from "framer-motion";
import { BookOpen, DownloadCloud, UploadCloud } from "lucide-react";


const subjectColors = {
  English: "bg-purple-100",
  Hindi: "bg-orange-100",
  Math: "bg-green-100",
  Science: "bg-blue-100",
  SocialScience: "bg-pink-100",
  Physics: "bg-indigo-100",
  Chemistry: "bg-red-100",
  Biology: "bg-emerald-100",
  Accountancy: "bg-yellow-100",
  Business: "bg-teal-100",
  Economics: "bg-sky-100",
  History: "bg-rose-100",
  Geography: "bg-cyan-100",
  PoliticalScience: "bg-lime-100",
  Notes: "bg-gray-100",
};

const initialStudyMaterial = {
  6: {
    English: [
      { title: "Honeysuckle", link: "https://ncert.nic.in/textbook/pdf/hesc1dd.zip" },
      { title: "A Pact with the Sun", link: "https://ncert.nic.in/textbook/pdf/hesc2dd.zip" },
    ],
    Hindi: [
      { title: "Vasant Bhag 1", link: "https://ncert.nic.in/textbook/pdf/chhn1dd.zip" },
      { title: "Bal Ram Katha", link: "https://ncert.nic.in/textbook/pdf/chbr1dd.zip" },
    ],
    Math: [
      { title: "Mathematics", link: "https://ncert.nic.in/textbook/pdf/memh1dd.zip" },
    ],
    Science: [
      { title: "Science", link: "https://ncert.nic.in/textbook/pdf/hesc1dd.zip" },
    ],
    Notes: [],
  },
  7: {
    English: [
      { title: "Honeycomb", link: "https://ncert.nic.in/textbook/pdf/hesc1dd.zip" },
      { title: "An Alien Hand", link: "https://ncert.nic.in/textbook/pdf/hesc2dd.zip" },
    ],
    Hindi: [
      { title: "Vasant Bhag 2", link: "https://ncert.nic.in/textbook/pdf/chhn2dd.zip" },
      { title: "Durva 2", link: "https://ncert.nic.in/textbook/pdf/chdu2dd.zip" },
    ],
    Math: [
      { title: "Mathematics", link: "https://ncert.nic.in/textbook/pdf/memh2dd.zip" },
    ],
    Science: [
      { title: "Science", link: "https://ncert.nic.in/textbook/pdf/hesc2dd.zip" },
    ],
    Notes: [],
  },
  8: {
    English: [
      { title: "Honeydew", link: "https://ncert.nic.in/textbook/pdf/hesc1dd.zip" },
      { title: "It So Happened", link: "https://ncert.nic.in/textbook/pdf/hesc2dd.zip" },
    ],
    Hindi: [
      { title: "Vasant Bhag 3", link: "https://ncert.nic.in/textbook/pdf/chhn3dd.zip" },
      { title: "Durva 3", link: "https://ncert.nic.in/textbook/pdf/chdu3dd.zip" },
    ],
    Math: [
      { title: "Mathematics", link: "https://ncert.nic.in/textbook/pdf/memh3dd.zip" },
    ],
    Science: [
      { title: "Science", link: "https://ncert.nic.in/textbook/pdf/hesc3dd.zip" },
    ],
    Notes: [],
  },
  9: {
    English: [
      { title: "Beehive", link: "https://ncert.nic.in/textbook/pdf/jesc1dd.zip" },
      { title: "Moments", link: "https://ncert.nic.in/textbook/pdf/jesc2dd.zip" },
    ],
    Hindi: [
      { title: "Kshitij", link: "https://ncert.nic.in/textbook/pdf/jhsk1dd.zip" },
      { title: "Kritika", link: "https://ncert.nic.in/textbook/pdf/jhkr1dd.zip" },
    ],
    Math: [
      { title: "Mathematics", link: "https://ncert.nic.in/textbook/pdf/jemh1dd.zip" },
    ],
    Science: [
      { title: "Science", link: "https://ncert.nic.in/textbook/pdf/jesc1dd.zip" },
    ],
    SocialScience: [
      { title: "India & the Contemporary World – I", link: "https://ncert.nic.in/textbook/pdf/jhwh1dd.zip" },
    ],
    Notes: [],
  },
  10: {
    English: [
      { title: "First Flight", link: "https://ncert.nic.in/textbook/pdf/jesc1dd.zip" },
      { title: "Footprints Without Feet", link: "https://ncert.nic.in/textbook/pdf/jesc2dd.zip" },
    ],
    Hindi: [
      { title: "Kshitij 2", link: "https://ncert.nic.in/textbook/pdf/jhsk2dd.zip" },
      { title: "Kritika 2", link: "https://ncert.nic.in/textbook/pdf/jhkr2dd.zip" },
    ],
    Math: [
      { title: "Mathematics", link: "https://ncert.nic.in/textbook/pdf/jemh2dd.zip" },
    ],
    Science: [
      { title: "Science", link: "https://ncert.nic.in/textbook/pdf/jesc2dd.zip" },
    ],
    SocialScience: [
      { title: "India & Contemporary World – II", link: "https://ncert.nic.in/textbook/pdf/jhwh2dd.zip" },
    ],
    Notes: [],
  },
  11: {
    Physics: [
      { title: "Physics Part 1", link: "https://ncert.nic.in/textbook/pdf/keph1dd.zip" },
      { title: "Physics Part 2", link: "https://ncert.nic.in/textbook/pdf/keph2dd.zip" },
    ],
    Chemistry: [
      { title: "Chemistry Part 1", link: "https://ncert.nic.in/textbook/pdf/kech1dd.zip" },
      { title: "Chemistry Part 2", link: "https://ncert.nic.in/textbook/pdf/kech2dd.zip" },
    ],
    Biology: [
      { title: "Biology", link: "https://ncert.nic.in/textbook/pdf/kebo1dd.zip" },
    ],
    Accountancy: [
      { title: "Accountancy Part 1", link: "https://ncert.nic.in/textbook/pdf/kacc1dd.zip" },
      { title: "Accountancy Part 2", link: "https://ncert.nic.in/textbook/pdf/kacc2dd.zip" },
    ],
    Business: [
      { title: "Business Studies", link: "https://ncert.nic.in/textbook/pdf/kbst1dd.zip" },
    ],
    Economics: [
      { title: "Indian Eco. Development", link: "https://ncert.nic.in/textbook/pdf/keec1dd.zip" },
    ],
    History: [
      { title: "Themes in World History", link: "https://ncert.nic.in/textbook/pdf/kjhh1dd.zip" },
    ],
    Geography: [
      { title: "Fundamentals of Physical Geography", link: "https://ncert.nic.in/textbook/pdf/kegg1dd.zip" },
    ],
    PoliticalScience: [
      { title: "Indian Constitution at Work", link: "https://ncert.nic.in/textbook/pdf/kjps1dd.zip" },
    ],
    Notes: [],
  },
  12: {
    Physics: [
      { title: "Physics Part 1", link: "https://ncert.nic.in/textbook/pdf/leph1dd.zip" },
      { title: "Physics Part 2", link: "https://ncert.nic.in/textbook/pdf/leph2dd.zip" },
    ],
    Chemistry: [
      { title: "Chemistry Part 1", link: "https://ncert.nic.in/textbook/pdf/lech1dd.zip" },
      { title: "Chemistry Part 2", link: "https://ncert.nic.in/textbook/pdf/lech2dd.zip" },
    ],
    Biology: [
      { title: "Biology", link: "https://ncert.nic.in/textbook/pdf/lebo1dd.zip" },
    ],
    Accountancy: [
      { title: "Accountancy Part 1", link: "https://ncert.nic.in/textbook/pdf/lacc1dd.zip" },
      { title: "Accountancy Part 2", link: "https://ncert.nic.in/textbook/pdf/lacc2dd.zip" },
    ],
    Business: [
      { title: "Business Studies", link: "https://ncert.nic.in/textbook/pdf/lbst1dd.zip" },
    ],
    Economics: [
      { title: "Introductory Macro Economics", link: "https://ncert.nic.in/textbook/pdf/leec1dd.zip" },
    ],
    History: [
      { title: "Themes in Indian History Part 1", link: "https://ncert.nic.in/textbook/pdf/ljhh1dd.zip" },
    ],
    Geography: [
      { title: "Fundamentals of Human Geography", link: "https://ncert.nic.in/textbook/pdf/legg1dd.zip" },
    ],
    PoliticalScience: [
      { title: "Contemporary World Politics", link: "https://ncert.nic.in/textbook/pdf/ljps1dd.zip" },
    ],
    Notes: [],
  },

};


export default function StudyResources() {
  const [studyMaterial, setStudyMaterial] = useState(initialStudyMaterial);
  const [selectedClass, setSelectedClass] = useState(6);
  const [noteTitle, setNoteTitle] = useState("");
  const [noteFile, setNoteFile] = useState(null);
  const [selectedSubject, setSelectedSubject] = useState("");

  const classList = Object.keys(initialStudyMaterial).map(Number);
  const subjectList = Object.keys(initialStudyMaterial[selectedClass]);

  const handleNoteUpload = () => {
    if (noteTitle && selectedClass && selectedSubject && noteFile) {
      // const fileURL = URL.createObjectURL(noteFile);
      const newNote = { title: noteTitle ,link :' /api/Notes'  };

      setStudyMaterial((prev) => {
        const updated = { ...prev };
        updated[selectedClass] = {
          ...updated[selectedClass],
          [selectedSubject]: [...(updated[selectedClass][selectedSubject] || []), newNote],
        };
        return updated;
      });

      setNoteTitle("");
      setNoteFile(null);
      setSelectedSubject("");
      alert(`📤 "${noteTitle}" uploaded to Class ${selectedClass} - ${selectedSubject}`);
    } else {
      alert("❗ Please fill all fields before uploading.");
    }

useEffect(() => {
    const fetchNotes= async () => {
      try {
        const res = await fetch(' /api/Notes', {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`,
          },
        });
        const data = await res.json();
        if (res.ok) {
          setNoteFile(data);
          alert(data.message || 'Notes uploaded successfully !!');
        } else {
          alert(data.message || 'Failed to upload notes');
        }
      } catch (err) {
        console.error(err);
        alert('Error fetching Notes');
      }
    };
    fetchNotes();
  }, []);

 
  };

  return (
    <div className=" bg-gradient-to-br from-white via-blue-50 to-blue-100 rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold text-center text-blue-700 mb-6">📘 Study Material</h2>

      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {classList.map((cls) => (
          <button
            key={cls}
            onClick={() => {
              setSelectedClass(cls);
              setSelectedSubject("");
            }}
            className={`px-4 py-2 rounded-xl border transition-all ${
              selectedClass === cls
                ? "bg-blue-600 text-white shadow-md"
                : "bg-gray-100 text-gray-800 hover:bg-gray-200"
            }`}
          >
            Class {cls}
          </button>
        ))}
      </div>

      <motion.div
        key={selectedClass}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {Object.entries(studyMaterial[selectedClass]).map(([subject, files]) => (
          <div
            key={subject}
            className={`p-4 rounded-xl border shadow-sm ${subjectColors[subject] || "bg-white"}`}
          >
            <h3 className="text-lg font-bold mb-2 text-blue-800 flex items-center">
              <BookOpen className="w-5 h-5 mr-2" /> {subject}
            </h3>
            <ul className="space-y-2 text-sm">
              {files.map((file, idx) => (
                <li key={idx} className="flex justify-between items-center">
                  <span>{file.title}</span>
                  <a
                    href={file.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:text-blue-800"
                  >
                    <DownloadCloud className="w-5 h-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </motion.div>

      <div className="mt-10 bg-white p-6 rounded-2xl shadow-lg border border-blue-100 w-full max-w-3xl mx-auto">
  <h3 className="text-xl font-bold mb-6 flex items-center text-blue-800">
    <UploadCloud className="w-5 h-5 mr-2" /> Upload Notes
  </h3>

  <div className="grid gap-4 sm:grid-cols-2 w-full">
    <div className="col-span-2 sm:col-span-1">
      <input
        type="text"
        placeholder="Title of Notes"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      />
    </div>

    <div className="col-span-2 sm:col-span-1">
      <select
        value={selectedSubject}
        onChange={(e) => setSelectedSubject(e.target.value)}
        className="w-full border border-gray-300 p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
      >
        <option value="">Select Subject</option>
        {subjectList.map((sub) => (
          <option key={sub} value={sub}>{sub}</option>
        ))}
      </select>
    </div>

    <div className="col-span-2">
     
       <input
              type="file"
              accept=".pdf"
              onChange={(e) => {
                const file = e.target.files[0];
                const reader = new FileReader();
                reader.onloadend = () => {
                  setNoteFile({ ...noteFile, noteFile: reader.result });
                };
                if (file) reader.readAsDataURL(file);
              }}
                      className="w-full border border-gray-300 p-2 rounded file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100"

            />
    </div>

    <div className="col-span-2">
      <button
        onClick={handleNoteUpload}
        className="w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
      >
        Upload Note
      </button>
    </div>
  </div>
</div>
    </div>
  );
}

