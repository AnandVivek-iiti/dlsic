import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DoubtList = () => {
  const [doubts, setDoubts] = useState([]);

  useEffect(() => {
    axios.get('/api/doubts/list').then(res => setDoubts(res.data));
  }, []);

  return (
    <div>
      {doubts.map(d => (
        <div key={d._id}>
          <strong>{d.category}</strong>: {d.question}
          <br />
          <em>{d.answer || "Awaiting answer"}</em>
        </div>
      ))}
    </div>
  );
};

export default DoubtList;

