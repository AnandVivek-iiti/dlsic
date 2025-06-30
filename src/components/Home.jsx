import { useState } from "react";
import image from "./assets/image.png";
// import sars from './assets/saraswati.png';
const images = [image, sars, image, image];

export default function Home() {
  const [current, setCurrent] = useState(0);
  const [showFull, setShowFull] = useState(false); // State for read more

  const nextSlide = () => {
    setCurrent((current + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((current - 1 + images.length) % images.length);
  };

  return (
    <>
      {/* Image Slider */}
      <div className="relative w-full max-w-auto mx-auto">
        <img
          src={images[current]}
          alt={`Slide ${current + 1}`}
          className="w-full h-64 object-cover rounded-lg shadow"
        />

        {/* Prev Button */}
<button
  onClick={prevSlide}
  className="absolute top-1/2 left-2 -translate-y-1/2 bg-transparent p-1"
>
   <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAOhJREFUSEvt1TEKAjEQheF/LyAoCJYWFjaKlxFbOytLb2FpZ+c5RERRL7FeQtBWHdhALJSZBDdN0gWSfDuPSbYg0SgSuWS4tuRz1CFRN4CbdWNs1ANgD0yArQWPgR3aAu7ACCi1eCjcB06AoDI2wBR4/hMW9AC0K2QNzCyo7LNW3APOHroC5toq/XUWWNAj0KkOCEYtFXeBi4cu3w21CKnU7dFWnAyWD00StUsoSXM5PMl18vHaHxCHD6t3ugk8AJlftZ2u7epv57n3egzstKjlHv86M8lv0VLkx9rYqDOsTiBHrY4qduELjSgkH8IAy5kAAAAASUVORK5CYII=" alt="Previous" className="rotate-0 transition-colors bg-gray-400 rounded-full cursor-pointer hover:bg-amber-50  w-10 h-10" />
</button>

{/* Next Button */}
<button
  onClick={nextSlide}
  className="absolute top-1/2 right-2 -translate-y-1/2 bg-transparent p-1"
>
  <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAeCAYAAAA7MK6iAAAAAXNSR0IArs4c6QAAAOhJREFUSEvt1TEKAjEQheF/LyAoCJYWFjaKlxFbOytLb2FpZ+c5RERRL7FeQtBWHdhALJSZBDdN0gWSfDuPSbYg0SgSuWS4tuRz1CFRN4CbdWNs1ANgD0yArQWPgR3aAu7ACCi1eCjcB06AoDI2wBR4/hMW9AC0K2QNzCyo7LNW3APOHroC5toq/XUWWNAj0KkOCEYtFXeBi4cu3w21CKnU7dFWnAyWD00StUsoSXM5PMl18vHaHxCHD6t3ugk8AJlftZ2u7epv57n3egzstKjlHv86M8lv0VLkx9rYqDOsTiBHrY4qduELjSgkH8IAy5kAAAAASUVORK5CYII=" alt="Previous" className="rotate-180 transition-colors bg-gray-400 rounded-full cursor-pointer hover:bg-amber-50 w-10 h-10" />

</button>


        {/* Dots */}
        <div className="flex justify-center mt-2 space-x-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-3 w-3 rounded-full ${
                current === index ? "bg-blue-500" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto p-4 bg-white rounded-lg shadow text-left mt-6">
        <h1 className="text-2xl font-bold text-center text-purple-700 mb-4">
          Welcome to DLS Inter College Rithora Bareilly
        </h1>

        <p className="text-gray-700 mb-2">
          Darwari Lal Sharma Inter College is one of the most respected educational institutions
          in the rural region of Bareilly, Uttar Pradesh. Situated in the serene and developing town
          of Rithora, the college has been a beacon of learning and discipline since its inception.
          Founded with the noble vision of Shri Darbari Lal Sharma Ji, the college is committed to
          shaping young minds into responsible citizens and leaders of tomorrow.
        </p>
<p className="text-gray-700 mb-2">
          Over the years, D.L.S. Inter College has nurtured thousands of students who have gone on
          to serve the nation as teachers, doctors, engineers, soldiers, police officers and government
          officials. The college takes immense pride in its alumni, who have carried forward the values of
          knowledge, integrity, and service imparted here.
        </p>
 {!showFull && (
          <button
            className=" px-4  text-blue-500 rounded hover:text-blue-700 cursor-pointer transition"
            onClick={() => setShowFull(true)}
          >
            Read More...
          </button>
        )}
  
        {showFull && (
          <>
      

        <p className="text-gray-700 mb-2">
          Affiliated with the Uttar Pradesh Madhyamik Shiksha Parishad (UPMSP), the college offers
          quality education from class 6 to 12 in Science, Commerce, and Arts streams. Under the capable
          leadership of Principal Mr. Asish Kumar and the dedicated efforts of a qualified teaching faculty,
          the college continues to grow academically and culturally.
        </p>

        <p className="text-gray-700 mb-2">
          D.L.S. Inter College has always been actively involved in social and national causes. Rooted
          in patriotic spirit, the college regularly organizes events to promote awareness, national
          unity, and moral values among its students. Inspired by the ideals of our freedom fighters,
          the college also emphasizes discipline, character-building, and holistic development.
            </p>

            <p className="text-gray-700">
              The institution is governed by a progressive and community-driven management, which is
              committed to continuously upgrading facilities, expanding access, and enriching the
              educational experience for all students. As the college moves forward with vision and vigor,
              it remains steadfast in its mission: "Shiksha se Sanskar tak."
            </p>

            <button
              className="px-4  text-blue-500 rounded hover:text-blue-700 cursor-pointer transition"
              onClick={() => setShowFull(false)}
            >
              Show Less
            </button>
          </>
        )}
        </div>

<div className="college-container py-7">
       <div className="max-w-3xl mx-auto p-6 bg-white rounded-2xl shadow-md text-gray-800 leading-relaxed py-10">
      <h1 className="text-2xl font-bold mb-4 text-center">Darbari Lal Sharma Inter College</h1>
      <p>
        Darbari Lal Sharma Inter College is not a college; it is a place where students and teachers are friends. 
        Teachers play a very significant role in shaping the future of students. And teachers of Darbari Lal Sharma Inter College 
        help students unlock their potential. Teachers are very supportive. Their advice is incredible. They help students by giving books, 
        fee remission, and guidance for career.
      </p>
      <p className="mt-3 italic">
        "Desh ka nirmaan chhatron avm pathkon se nahi, desh ke nagrik se hota hai."
      </p>
      <p className="mt-3">
        This is a famous quote in hand. So the same goes for school — school is built by students and teachers. Anyone who wants 
        to live a memorable school life with lots of fun and learning and real care given by teachers can take their admission in this school.
      </p>
      <p className="mt-3">
        If we deep dive into the history of the school, the founder of our school, Mr. Darbari Lal Sharma, a freedom fighter and 
        social reformer, was a great man by his profession. The aim of our founder was to provide the best education for students at a very low cost. 
        So DLS is one of the oldest and best educational institutes. The school is valued on discipline.
      </p>
      <p className="mt-3">
        And if we look at our alumni and students, they are very hardworking and successful in their lives. The school provides 
        valuable connections of alumni. Our alumni are IITians, doctors, IIMians, Indian Navy, and much more. We are proud of our alumni and teachers.
      </p>
    </div>
  </div>
    </>
  );
}
