import { useEffect, useState } from 'react';
import axios from 'axios';

export default function NotesList({ subject }) {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/notes').then((res) => {
      const filtered = res.data.filter(note => note.subject === subject);
      setNotes(filtered);
    });
  }, [subject]);

  return (
    <div className="mt-6">
      <h3 className="text-lg font-semibold mb-2">Uploaded Notes</h3>
      {notes.length === 0 ? (
        <p className="text-gray-500">No notes available for this subject.</p>
      ) : (
        <ul className="list-disc pl-5 space-y-2">
          {notes.map((note, i) => (
            <li key={i}>
              <a href={note.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                {note.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
