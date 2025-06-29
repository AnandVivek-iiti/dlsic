import { useState } from "react";
import axios from "axios";

export default function MyDoubtSection() {
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAsk = async () => {
    if (!input.trim()) return;

    setLoading(true);
    setResponse("");

    try {
      const result = await axios.post("http://localhost:5000/api/ask", {
        question: input,
      });

      setResponse(result.data.answer);
    } catch (err) {
      setResponse("❌ Sorry, something went wrong.");
      console.error(err);
    }

    setLoading(false);
  };

  return (
    <div className="p-6 max-w-2xl mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h2 className="text-xl font-bold text-gray-800">Ask Your Doubt</h2>
      <textarea
        className="w-full border p-3 rounded-md"
        rows="4"
        placeholder="E.g. Why do we experience weightlessness in space?"
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
