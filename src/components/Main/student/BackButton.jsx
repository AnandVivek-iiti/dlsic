import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mt-4 ml-4 bg-gray-400 text-white px-4 py-2 rounded-lg hover:bg-gray-6`00 transition"
    >
      ← 
    </button>
  );
}
