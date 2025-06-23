import { useEffect, useState } from 'react';
import axios from 'axios';

export default function NotesList({ darkMode }) {
  const [notes, setNotes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        const res = await axios.get('http://localhost:3000/api/notes');
        setNotes(res.data);
      } catch (err) {
        console.error('Failed to fetch notes:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  return (
    <div className={`max-w-3xl mx-auto p-4 mt-6 rounded shadow 
      ${darkMode ? 'bg-black text-white' : 'bg-white text-black'}`}>

      <h2 className="text-2xl font-bold text-[#981F4D] text-center mb-4">Uploaded Notes</h2>
      {loading ? (
        <p className="text-center">Loading...</p>
      ) : notes.length === 0 ? (
        <p className="text-center">No notes uploaded yet.</p>
      ) : (
        <ul className="space-y-4">
          {notes.map((note, index) => (
            <li key={index} className="border p-4 rounded hover:bg-gray-50 transition">
              <h3 className="text-lg font-semibold">{note.title}</h3>
              <p className="text-sm text-gray-600">Subject: {note.subject}</p>
              <p className="text-sm text-gray-500">Uploaded At: {new Date(note.uploadedAt).toLocaleString()}</p>
              <a
                href={note.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block mt-2 text-blue-600 underline hover:text-blue-800"
              >
                View / Download PDF
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
