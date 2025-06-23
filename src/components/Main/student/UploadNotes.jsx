// UploadNotes.jsx
import { useState } from 'react';
import axios from 'axios';

export default function UploadNotes({ darkMode }) {
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [pdfFile, setPdfFile] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    if (!title || !subject || !pdfFile) {
      alert('Please fill all fields');
      return;
    }

    try {
      setUploading(true);
      const formData = new FormData();
      formData.append('pdf', pdfFile);
      formData.append('title', title);
      formData.append('subject', subject);

      const res = await axios.post('http://localhost:3000/api/upload', formData);
      setMessage(res.data.message);
      console.log('Uploaded:', res.data);

      setTitle('');
      setSubject('');
      setPdfFile(null);
    } catch (err) {
      alert('Upload failed');
      console.error(err);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className={`${darkMode ? 'bg-{#092730} text-white' : 'bg-white text-black'} p-4`}>
      <h2 className="text-lg font-bold mb-4 text-center text-[#981F4D]">Upload New Note</h2>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 border mb-2 rounded"
      />
      <input
        type="text"
        value={subject}
        onChange={(e) => setSubject(e.target.value)}
        placeholder="Subject"
        className="w-full p-2 border mb-2 rounded"
      />
      <input
        type="file"
        accept="application/pdf"
        onChange={(e) => setPdfFile(e.target.files[0])}
        className="w-full p-2 border mb-2 rounded"
      />
      <button
        onClick={handleUpload}
        disabled={uploading}
        className="w-full bg-[#981F4D] text-white py-2 rounded hover:bg-[#7e1a3f]"
      >
        {uploading ? 'Uploading...' : 'Upload Note'}
      </button>
      {message && <p className="mt-2 text-green-600 text-center">{message}</p>}
    </div>
  );
}
