import { useState } from "react";
import image from "./assets/image.png";
import sars from './assets/saraswati.png';
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
    </>
  );
}
