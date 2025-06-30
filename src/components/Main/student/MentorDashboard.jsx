import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MentorDashboard = () => {
  const [doubts, setDoubts] = useState([]);
  const [reply, setReply] = useState("");

  useEffect(() => {
    axios.get('/api/mentors/unanswered').then(res => setDoubts(res.data));
  }, []);

  const submitAnswer = async (id) => {
    await axios.post(`/api/mentors/answer/${id}`, { answer: reply });
    alert("Answer submitted");
    setReply("");
  };

  return (
    <div>
      {doubts.map(d => (
        <div key={d._id}>
          <p>{d.question}</p>
          <textarea value={reply} onChange={e => setReply(e.target.value)} />
          <button onClick={() => submitAnswer(d._id)}>Submit Answer</button>
        </div>
      ))}
    </div>
  );
};

export default MentorDashboard;
