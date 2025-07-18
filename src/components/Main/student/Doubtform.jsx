import React, { useState } from 'react';
import axios from 'axios';

const DoubtForm = () => {
  const [form, setForm] = useState({ userName: '', category: '', question: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    await axios.post('/api/doubts/submit', form);
    alert("Doubt submitted!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="Name" value={form.userName} onChange={e => setForm({ ...form, userName: e.target.value })} />
      <input placeholder="Category" value={form.category} onChange={e => setForm({ ...form, category: e.target.value })} />
      <textarea placeholder="Your Doubt" value={form.question} onChange={e => setForm({ ...form, question: e.target.value })} />
      <button type="submit">Submit</button>
    </form>
  );
};



export default DoubtForm;
