// src/components/Main/student/DoubtSolver.jsx
import { useState } from "react";
import axios from "axios";

export default function DoubtSolver() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const result = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-3.5-turbo",
          messages: [{ role: "user", content: input }],
        },
        {
          headers: {
            Authorization: `Bearer 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`, // Replace with your real key
            "Content-Type": "application/json",
          },
        }
      );

      setResponse(result.data.choices[0].message.content.trim());
    } catch (err) {
      setResponse("❌ Sorry, something went wrong.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      {/* <Link to="/doubts" className="text-blue-600 underline">Ask Doubts</Link> */}

      <h2 className="text-xl font-bold text-gray-800">Ask Your Doubt</h2>
      <textarea
        className="w-full border p-3 rounded-md"
        rows="4"
        placeholder="E.g. Why is acceleration due to gravity constant on Earth?"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button
        onClick={handleAsk}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Solving..." : "Get Answer"}
      </button>
      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded-md border text-gray-800 whitespace-pre-wrap">
          <strong>Answer:</strong> {response}
        </div>
      )}
    </div>
  );
}
