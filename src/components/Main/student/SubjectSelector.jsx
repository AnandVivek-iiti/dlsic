import { useNavigate, useParams } from "react-router-dom";
import BackButton from "./BackButton";
const subjects = ["Maths", "Science", "Hindi", "English"];

export default function SubjectSelector() {
  const { classId } = useParams();
  const navigate = useNavigate();

  function handleSubjectSelect(sub) {
    localStorage.setItem("selectedSubject", sub); // ✅ Save to localStorage
    navigate(`/topics/${classId}/${sub}`);
  }

  return (
    <div className="p-6 text-center">
      <BackButton />
      <h1 className="text-3xl font-bold mb-6 text-green-700">
        Select Subject for Class {classId}
      </h1>
      <div className="flex flex-wrap justify-center gap-4">
        {subjects.map((sub) => (
          <button
            key={sub}
            onClick={() => handleSubjectSelect(sub)}
            className="bg-green-500 text-white px-4 py-2 rounded-xl shadow hover:bg-green-600 transition"
          >
            {sub}
          </button>
        ))}
      </div>
    </div>
  );
}
