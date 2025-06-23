import { useNavigate } from "react-router-dom";
import BackButton from "./BackButton";
const classes = [6, 7, 8, 9, 10, 11, 12];

export default function ClassSelector() {
  const navigate = useNavigate();

  function handleClassSelect(cls) {
    localStorage.setItem("selectedClass", cls); // ✅ Save to localStorage
    navigate(`/subject/${cls}`);
  }

  return (
    <div className="p-6 text-center">
      <BackButton/>
      <h1 className="text-3xl font-bold mb-6 text-blue-700">Select Your Class</h1>
      <div className="flex flex-wrap justify-center gap-4">
        {classes.map((cls) => (
          <button
            key={cls}
            onClick={() => handleClassSelect(cls)}
            className="bg-blue-500 text-white px-4 py-2 rounded-xl shadow hover:bg-blue-600 transition"
          >
            Class {cls}
          </button>
        ))}
      </div>
    </div>
  );
}
